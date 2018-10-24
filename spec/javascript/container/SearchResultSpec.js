import SearchResult from '../../../app/javascript/react/components/SearchResult'
import fetchMock from 'fetch-mock'

describe('review new page', () => {
  describe('review new page', () => {
    it('should pass', () => {
      fetchMock.get('/api/v1/games/search', {
        status: 201,
      });
      fetch('/api/v1/games/search').then(() => {console.log('working?')}).catch(() => { console.log('error')})
    });
  });
});
