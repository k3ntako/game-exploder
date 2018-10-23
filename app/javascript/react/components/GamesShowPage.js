import React, { Component } from 'react'

class GamesShowPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gameInfo: {},
      reviews: []
    }
    this.fetchGame = this.fetchGame.bind(this)
    this.fetchReviews = this.fetchReviews.bind(this)
    this.pickScoreColor = this.pickScoreColor.bind(this)
  }

  fetchReviews(){
    debugger;
    fetch(`/api/v1/games/${this.props.params.id}/reviews`)
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
      debugger;
      this.setState({ reviews: data.reviews })

    })
    .catch(error => console.error(`Error in fetch: ${error.message}`));
  };

  fetchGame(){
    fetch(`/api/v1/games/${this.props.params.id}`)
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
      this.setState({ gameInfo: data })
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`));
  };

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

  componentDidMount(){
    this.fetchGame()
    this.fetchReviews()
  }

  render (){
    let totalScore = 0;
    let reviewCards = this.state.reviews.map(review => {
      totalScore += review.score

      let createdDate = new Date(review.created_at)
      let createdDateText = createdDate.toLocaleDateString("en-US")

      let color = this.pickScoreColor(review.score)
      console.log(review)
      return(
        <div key={review.id} className="grid-x cell review-cards">
          <div className="review-card cell small-18 medium-20 large-22 ">
            <div className="review-card-text">
              <h3><a className="review-card-title" href="/">{review.title}</a></h3>
              <span className="review-card-username">{review.user.username} </span>
              <span className="review-card-date">- {createdDateText}</span>
              <p>{review.body}</p>
            </div>
          </div>
          <div className={`cell small-6 medium-4 large-2 review-card-score ${color}`}>
            <div className="review-card-score-center-text">
              <p className="review-card-score-text">{review.score}</p>
            </div>
          </div>
        </div>
        )
      })

      let averageScoreText, color;
      if(this.state.reviews.length){
        let averageScore = (totalScore/this.state.reviews.length).toFixed(1)
        averageScoreText = `Exploder Score: ${averageScore}/10`
        color = this.pickScoreColor(averageScore)
      }else {
        averageScoreText = "No Reviews"
        color = this.pickScoreColor(-1)
      }


      let publisher;
      if(this.state.gameInfo.publisher){
        publisher = (<p className="game-attribute"><span className="game-attribute-title">Publisher:</span> {this.state.gameInfo.publisher}</p>)
      }

      let date;
      if(this.state.gameInfo.release_date){
        date = new Date(this.state.gameInfo.release_date).toLocaleDateString("en-US")
      }

      return (
        <div className="game-show-page grid-x grid-margin-x cell small-22 small-offset-1 cell large-20 large-offset-2 ">
          <div className="cell small-24">
            <h1 className="game-show-page-title">{this.state.gameInfo.name}</h1>
          </div>
          <div className="cell small-24 large-14">
            <div className={`show-page-score ${color}`}>{averageScoreText}</div>
            <img src={this.state.gameInfo.promo_image_url} />
          </div>
          <div className="cell small-24 large-10 grid-y">
            <div className="game-attributes cell large-21 small-18">
              <p className="game-attribute"><span className="game-attribute-title">{this.state.gameInfo.name}</span> {this.state.gameInfo.description}</p>
              <p className="game-attribute"><span className="game-attribute-title">Number of Reviews:</span> {this.state.reviews.length}</p>
              <p className="game-attribute"><span className="game-attribute-title">ESRB Rating:</span> {this.state.gameInfo.esrb}</p>
              <p className="game-attribute"><span className="game-attribute-title">Release Date:</span> {date}</p>
              <p className="game-attribute"><span className="game-attribute-title">Developer:</span> {this.state.gameInfo.developer}</p>

              {publisher}


            </div>
            <div className="add-review cell large-3 small-6"><a className="add-review-link " href={`/games/${this.props.params.id}/reviews/new`}>Add Review</a></div>
          </div>
            {reviewCards}
        </div>
    )
  }
}

export default GamesShowPage
