import { useEffect, useState } from 'react';
import yelp from '../api/yelp';

export default () => {
  const [restaurants, setResults] = useState([])
  const [error, setError] = useState('')

  const searchApi = async (searchTerm) => {
    try {
      const response = await yelp.get('/search', {
        params: {
          limit: 50,
          term: searchTerm,
          location: 'Tapas'
        }
      });
      setResults(response.data.businesses);
  } catch (err) {
    setError('Something went wrong, please try again in a minute.')
    }
  };

  useEffect(() => {
    searchApi('pasta')
  }, []);

  return [searchApi, restaurants, error];
};
