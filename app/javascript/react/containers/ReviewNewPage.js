import React, { Component } from 'react';
import BodyField from '../components/BodyField'
import TitleField from '../components/TitleField'
import ScoreField from '../components/ScoreField'
import { browserHistory } from 'react-router';

class ReviewNewPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      reviews:  [],
      reviewTitle: '',
      reviewBody: '',
      reviewScore: ''
    }
    this.handleScoreChange = this.handleScoreChange.bind(this)
    this.addNewReview = this.addNewReview.bind(this)
    this.handleTitleChange = this.handleTitleChange.bind(this)
    this.handleBodyChange = this.handleBodyChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  addNewReview(formPayload){
    let jsonStringInfo = JSON.stringify(formPayload)
    fetch(`/api/v1/games/${this.props.params.id}/reviews`, {
      method: 'POST',
      body: jsonStringInfo,
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json' },
      credentials: 'same-origin'
    })

    .then(formPayload => formPayload.json())
    .then(formPayload => {
      this.setState({
        reviews: this.state.reviews.concat(formPayload)
      })
      browserHistory.push(`/games/${this.props.params.id}`)
    })
  }

  handleScoreChange(event) {
    this.setState({ reviewScore: event.target.value})
  }

  handleTitleChange(event) {
    this.setState({ reviewTitle: event.target.value})
  }

  handleBodyChange(event) {
    this.setState({ reviewBody: event.target.value})
  }

  handleSubmit(event) {
  event.preventDefault()
  let formPayload = {
    title: this.state.reviewTitle,
    body: this.state.reviewBody,
    score: this.state.reviewScore
    }
    this.addNewReview(formPayload)
  }

  render() {
    return(
      <div className="cell small-22 small-offset-1 cell large-20 large-offset-2">
      <h1> Add your own review! </h1>
      <form className="new-article-form callout" onSubmit={this.handleSubmit}>
        <TitleField
          content={this.state.reviewTitle}
          label="Review Title"
          name="review-title"
          id={this.state.id}
          handleTitleChange={this.handleTitleChange}
        />
        <BodyField
          content={this.state.reviewBody}
          label="Review Body"
          name="review-body"
          id={this.state.id}
          handleBodyChange={this.handleBodyChange}
        />
        <ScoreField
          content={this.state.reviewScore}
          label="Review Score"
          name="review-score"
          id={this.state.id}
          handleScoreChange={this.handleScoreChange}
        />


        <div className="button-group">

          <button className="button">Clear</button>
          <input className="button" type="submit" value="Submit"/>
        </div>
      </form>
      </div>
    )
  }
}

export default ReviewNewPage
