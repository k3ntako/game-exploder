import React, { Component } from 'react'

class GamesShowPage extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }
  render (){
    return (
      <div className="grid-x grid-margin-x">
        <div className="cell small-12">
          <h1>Game Name</h1>
        </div>
        <div className="cell small-8">
          <img src="https://images.performgroup.com/di/library/GOAL/c7/5a/fifa-19-ronaldo-neymar_e4vrh56c4op71vn6mlvx1lzsr.jpg?t=-318191675&quality=90&w=0&h=1260" />
        </div>
        <div className="cell small-4 game-info">
          <p>Description: FIFA 19 is a football simulation video game developed by EA Vancouver and EA Bucharest, as part of Electronic Arts' FIFA series. Announced on 6 June 2018 for its E3 2018 press conference, it was released on 28 September 2018 for PlayStation 3, PlayStation 4, Xbox 360, Xbox One, Nintendo Switch, and Microsoft Windows. </p>
          <p>Score: 3/10</p>
          <p>Number of Reviews: 527</p>
          <p>ESRB Rating: E</p>
        </div>
      </div>


    )
  }
}

export default GamesShowPage
