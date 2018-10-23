import GameIndex from '../../../app/javascript/react/components/GameIndex'
import fetchMock from 'fetch-mock'

describe('Game Index Page', () => {
  let wrapper;
  let games;

  beforeEach(() => {
    games = [
      {id: 1, name: 'Check the weather', description: "Weather Game", release_date: "1846", esrb: "AO", promo_image_url: "Weather.com Home of the weather and lightning and hurrincaens and tornadoes and thunder and hail and wind and trees"}
    ]
    fetchMock.get('/api/v1/games.json', {
      status: 200,
      body: games
    });
    wrapper = mount(
      <GameIndex />
    )
  })

  afterEach(fetchMock.restore)

  describe('header', () => {
    it('renders an h1', () => {
      expect(wrapper.find('h1')).toBePresent()
      expect(wrapper.find('h1').text()).toEqual('Games')
    })

    it('renders a list item for each item returned from the api call', (done) => {
      setTimeout(() => {
        expect(wrapper.find('li').length).toEqual(games.length)
        expect(wrapper.find('li').text()).toEqual(games[0].name)
        expect(wrapper.find('p').text()).toEqual(games[0].description)
        done()
      }, )
    })
  })
})
