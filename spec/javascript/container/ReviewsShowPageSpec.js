import ReviewsShowPage from '../../../app/javascript/react/components/ReviewsShowPage'
import fetchMock from 'fetch-mock'

describe('review show page', () => {
  describe('review show page', () => {
    it('should pass', () => {
      fetchMock.get('/api/v1/games/1/reviews/1', {
        status: 201,
      });
      fetch('/api/v1/games/1/reviews/1').then(() => {console.log('working?')}).catch(() => { console.log('error')})
    });
  });
});
