import ReviewNewPage from '../../../app/javascript/react/containers/ReviewNewPage'
import fetchMock from 'fetch-mock'

describe('review new page', () => {
  describe('review new page', () => {
    it('should pass', () => {
      fetchMock.get('/api/v1/games/5/reviews', {
        status: 201,
      });
      fetch('/api/v1/games/5/reviews').then(() => {console.log('wtf')}).catch(() => { console.log('fail')})
    });
  });
});
