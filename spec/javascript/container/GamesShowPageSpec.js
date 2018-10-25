import GamesShowPage from '../../../app/javascript/react/components/GamesShowPage'
import fetchMock from 'fetch-mock'

describe('Games Show Page', () => {
  let wrapper;
  let game;
  let review;

  beforeEach(() => {
    game = {
      "id": 1,
      "name": "Check the weather",
      "description": "Weather Game is a weather simulator, where the player tries to forcast the weather in real-time.",
      "release_date": "1999-12-12",
      "developer": "Weather United",
      "esrb": "Teen",
      "promo_image_url": "https://commons.wikimedia.org/wiki/File:Weather_symbols_p.png"
    }

    fetchMock.get('/api/v1/games/1', {
      status: 200,
      body: game
    });
    review = {
      "reviews":[
        {
          "id": 1,
          "title": "Great game!",
          "body": "I had so much fun playing this game with friends. The graphics were swell and it made us happy",
          "score": 10,
          "game_id": 1,
          "user_id": 1,
          "user": {
            "id": 4,
            "email": "harry@gmail.com",
            "username": "Dragon",
            "birthday": "1999-12-12",
            "first_name": "Harry",
            "last_name": "Johnson",
            "created_at": "2018-10-18T19:45:15.706Z",
            "updated_at": "2018-10-18T19:45:15.706Z"
          }
        },
        {
          "id": 2,
          "title": "Awful game!",
          "body": "The last one was so much better!",
          "score": 3,
          "game_id": 1,
          "user_id": 2,
          "user": {
            "id": 5,
            "email": "kentaro@gmail.com",
            "username": "K3ntako",
            "birthday": "1995-5-27",
            "first_name": "Kentaro",
            "last_name": "Kaneki",
            "created_at": "2018-09-18T19:45:15.706Z",
            "updated_at": "2018-09-18T19:45:15.706Z"
          }
        }
      ]
    }
    fetchMock.get('/api/v1/games/1/reviews', {
      status: 200,
      body: review
    });
    wrapper = mount(
      <GamesShowPage params={{id: 1 }} />
    )
  })

  afterEach(fetchMock.restore)

  describe('Game', () => {
    it('renders an h1', (done) => {
      setTimeout(() => {
        expect(wrapper.find('h1')).toBePresent()
        expect(wrapper.find('h1').text()).toEqual('Check the weather')
        done()
      })
    })

    it('should render an img with promotion image', (done) => {
      setTimeout(() => {
        expect(wrapper.find('img')).toBePresent()
        expect(wrapper.find('img').props()).toEqual({
          src: 'https://commons.wikimedia.org/wiki/File:Weather_symbols_p.png'
        });
        done()
      })
    })
  });

  describe('Review', () => {
    it('should render the number of reviews received', (done) => {
      setTimeout(() => {
        expect(wrapper.find('.review-card').length).toEqual(2);
        done()
      })
    });

    it('should render a class, "review-card-score-text" with score', (done) => {
      setTimeout(() => {
        expect(wrapper.find('.review-card-score-text').nodes[0].innerHTML).toEqual(review.reviews[0].score.toString());
        expect(wrapper.find('.review-card-score-text').nodes[1].innerHTML).toEqual(review.reviews[1].score.toString());
        done()
      })
    });

    it('should contain links with the title', (done) => {
      setTimeout(() => {
        expect(wrapper.find('a').nodes[0].innerHTML).toEqual(review.reviews[0].title);
        expect(wrapper.find('a').nodes[1].innerHTML).toEqual(review.reviews[1].title);
        done()
      })
    });

    it('should contain username and review body', (done) => {
      setTimeout(() => {
        expect(wrapper.find('.review-card-username').nodes[0].innerHTML).toMatch(review.reviews[0].user.username);
        expect(wrapper.find('.review-card-username').nodes[1].innerHTML).toMatch(review.reviews[1].user.username);

        expect(wrapper.find('.review-card-text').nodes[0].innerHTML).toMatch(review.reviews[0].body);
        expect(wrapper.find('.review-card-text').nodes[1].innerHTML).toMatch(review.reviews[1].body);

        expect(wrapper.find('.review-card').length).toEqual(0);

        done()
      })
    });
  })
})
