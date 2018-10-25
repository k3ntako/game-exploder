import React, { Component } from 'react'
import BodyField from './BodyField'
import { browserHistory } from 'react-router';

class ReviewsShowPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: "" ,
      review: [],
      commentBody: "",
      comments: []
    }
    this.fetchComment = this.fetchComment.bind(this)
    this.fetchReview = this.fetchReview.bind(this)
    this.handleBodyChange = this.handleBodyChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.addNewComment = this.addNewComment.bind(this)
  }

  fetchReview(){
    fetch(`/api/v1/games/${this.props.params.id}/reviews/${this.props.params.review_id}`)
    .then(response => {
      if (response.ok) {
        return response;
      } else {
        let errorMessage = `${response.status} (${response.statusText})`,
        error = new Error(errorMessage);
        throw(error);
      }
    })
    .then(response => {
      return response.json();
    })
    .then(data => {
      this.setState({ review: data.review, userInfo: data.review.user.username})
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`));
  };

  fetchComment(){
    fetch(`/api/v1/reviews/${this.props.params.review_id}/comments`)
    .then(response => {
      if (response.ok) {
        return response;
      } else {
        let errorMessage = `${response.status} (${response.statusText})`,
        error = new Error(errorMessage);
        throw(error);
      }
    })
    .then(response => {
      return response.json();
    })
    .then(data => {
      if ( data.length) {
      this.setState({ comments: data })
    }
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`));
  };

  componentDidMount(){
    this.fetchReview()
    this.fetchComment()
  }

  addNewComment(formPayload){
    let jsonStringInfo = JSON.stringify(formPayload)
    fetch(`/api/v1/reviews/${this.props.params.review_id}/comments`, {
      method: 'POST',
      body: jsonStringInfo,
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json' },
      credentials: 'same-origin'
    })

    .then(formPayload => formPayload.json())
    .then(comment => {
      let comments = this.state.comments
      comments.unshift(comment)
      this.setState({
        comments: comments
      })
    })
    browserHistory.push(`/games/${this.props.params.id}/reviews/${this.props.params.review_id}`)
  }

  pickScoreColor(score){
    let color;
    if(score === -1){
      color = "score-none"
    }else if(score <= 3){
      color = "score-low"
    }else if(score <= 6){
      color = "score-medium"
    }else if(score <= 8){
      color = "score-high"
    }else if(score <= 10){
      color = "score-perfect"
    }

    return color
  }

  handleSubmit(event) {
    event.preventDefault()
  let formPayload = {
    body: this.state.commentBody
    }
    this.addNewComment(formPayload)

  }

  handleBodyChange(event) {
    this.setState({ commentBody: event.target.value})
  }

  render(){
    let createdDate = new Date(this.state.review.created_at)
    let createdDateText = createdDate.toLocaleDateString("en-US")
    let color = this.pickScoreColor(this.state.review.score)
    console.log(this.state.comments)
    let comments = this.state.comments.map(comment => {
      return(
        <div key={comment.id}> {comment.body} </div>
      )

    })
      return(
        <div>
        <div key={this.state.review.id} className="grid-x cell review-cards">
          <div className="review-card cell small-18 medium-20 large-22 ">
            <div className="review-card-text">
              <h3 className="review-card-title"> {this.state.review.title}</h3>
              <span className="review-card-username">{this.state.userInfo} </span>
              <span className="review-card-date">- {createdDateText}</span>
              <p>{this.state.review.body}</p>
            </div>
          </div>
          <div className={`cell small-6 medium-4 large-2 review-card-score ${color}`}>
            <div className="review-card-score-center-text">
              <p className="review-card-score-text">{this.state.review.score}</p>
            </div>
          </div>
        </div>

        <div>
       <div>
       <h3 className="review-card-text"> Add a comment! </h3>
       <form className="new-article-form callout" onSubmit={this.handleSubmit}>
         <BodyField
           content={this.state.commentBody}
           label="Comment Body"
           name="comment-body"
           id={this.state.id}
           handleBodyChange={this.handleBodyChange}
           />
           <div className="button-group">

             <button className="button">Clear</button>
             <input className="button" type="submit" value="Submit"/>
           </div>
       </form>
       </div>
       </div>

       <div>
       {comments}
       </div>
       </div>

      )

  }
}

export default ReviewsShowPage;
