import SearchResult from '../../../app/javascript/react/components/SearchResult'
import fetchMock from 'fetch-mock'

describe('results page', () => {
  describe('results page', () => {
    it('should pass', () => {
      fetchMock.get('/api/v1/games/search.json', {
        status: 201,
      });
      fetch('/api/v1/games/search.json').then(() => {console.log('working?')}).catch(() => { console.log('error')})
    });
  });
});
