import GamesShowPage from '../../../app/javascript/react/components/GamesShowPage'
import fetchMock from 'fetch-mock'

describe('Games Show Page', () => {
  let wrapper;
  let game;
  let review;

  beforeEach(() => {

    game = [
    {
        "id": 1,
        "name": "Check the weather",
        "logo_url": null,
        "promo_image_url": "https://commons.wikimedia.org/wiki/File:Weather_symbols_p.png",
        "description": "Weather Game is a weather simulator, where the player tries to forcast the weather in real-time.",
        "release_date": "2016-05-24",
        "publisher": null,
        "developer": "Weather United",
        "esrb": "Teen",
        "average_score": 5.6,
        "current_user": {
            "id": 2,
            "email": "kentaro@gmail.com",
            "username": "K3NTAK0",
            "birthday": "1975-05-07",
            "first_name": "Kentaro",
            "last_name": "Kaneki",
            "created_at": "2018-10-26T12:35:13.563Z",
            "updated_at": "2018-10-26T12:35:13.563Z",
            "profile_photo": {
                "url": null
            }
        },
        "reviews": [
            {
              "id": 1,
              "created_at": "2018-10-26T12:35:13.848Z",
              "title": "Great game!",
              "body": "I had so much fun playing this game with friends. The graphics were great and it was enjoyable.",
              "score": 9,
              "username": "J_hasRYzEn",
              "user_id": 4,
              "photo": {
                  "url": null
              }
            },
            {
              "id": 2,
              "created_at": "2018-10-26T12:35:13.853Z",
              "title": "Toxic Teams",
              "body": "The game itself is okay but the community is terrible. I'm gonna go back to FIFA.",
              "score": 4,
              "username": "ChristianoRichardo",
              "user_id": 3,
              "photo": {
                  "url": null
              }
            }
        ]
    }
]
    fetchMock.get('/api/v1/games/1', {
      status: 200,
      body: game
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
        expect(wrapper.find('img').nodes[0].src).toEqual('https://commons.wikimedia.org/wiki/File:Weather_symbols_p.png');
        done()
      })
    })
  });

  describe('Review', () => {
    it('should render the number of reviews received', (done) => {
      setTimeout(() => {

        expect(wrapper.find('.review-cards').length).toEqual(2);
        done()
      })
    });

    it('should render a class, "review-card-score-text" with score', (done) => {
      setTimeout(() => {
        expect(wrapper.find('.review-card-score-text').nodes[0].innerHTML).toEqual(game[0].reviews[1].score.toString());
        expect(wrapper.find('.review-card-score-text').nodes[1].innerHTML).toEqual(game[0].reviews[0].score.toString());
        done()
      })
    });

    it('should contain links with the title', (done) => {
      setTimeout(() => {
        expect(wrapper.find('a').nodes[1].innerHTML).toEqual(game[0].reviews[1].title);
        expect(wrapper.find('a').nodes[2].innerHTML).toEqual(game[0].reviews[0].title);
        done()
      })
    });

    it('should contain username and review body', (done) => {
      setTimeout(() => {
        debugger
        expect(wrapper.find('.review-card-username').nodes[0].innerHTML).toMatch(game[0].reviews[1].username);
        expect(wrapper.find('.review-card-username').nodes[1].innerHTML).toMatch(game[0].reviews[0].username);

        expect(wrapper.find('.review-card-text').nodes[0].innerHTML).toMatch(game[0].reviews[1].body);
        expect(wrapper.find('.review-card-text').nodes[1].innerHTML).toMatch(game[0].reviews[0].body);
        done()
      })
    });
  })
})
