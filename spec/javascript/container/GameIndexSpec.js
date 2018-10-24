import GameIndex from '../../../app/javascript/react/components/GameIndex'
import fetchMock from 'fetch-mock'

describe('Game Index Page', () => {
  let wrapper;
  let games;

  beforeEach(() => {
    games = [
      {id: 1, name: 'Check the weather', description: "is a weather game.", release_date: "1846", esrb: "Teen", promo_image_url: "https://www.iana.org/_img/2013.1/iana-logo-header.svg"},
      {id: 2, name: 'Train game', description: "is a train game.", release_date: "1999", esrb: "Everyone", promo_image_url: "https://www.iana.org/_img/2013.1/iana-logo-header.svg"}
    ]
    fetchMock.get('/api/v1/games', {
      status: 200,
      body: games
    });
    wrapper = mount(
      <GameIndex />
    )
  })

  afterEach(fetchMock.restore)

  describe('index', () => {
    it('renders a list item for each item returned from the api call', (done) => {
      setTimeout(() => {
        expect(wrapper.find('h3').length).toEqual(games.length)
        expect(wrapper.find('h3').at(0).text()).toEqual(games[0].name)
        expect(wrapper.find('p').at(0).text()).toMatch(games[0].description)
        expect(wrapper.find('h3').at(1).text()).toEqual(games[1].name)
        expect(wrapper.find('p').at(1).text()).toMatch(games[1].description)
        done()
      })
    })
  })
  describe('search bar', () => {
    it ('renders a field and a button to search', (done) => {
      setTimeout(() => {
        expect(wrapper.find('form'))
        done()
      })
    })
  })
})
