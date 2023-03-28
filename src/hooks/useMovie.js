import {useDispatch, useSelector} from 'react-redux';
import {setDetails} from '../redux/movieSlice';
import api from '../services/api';

export const useMovie = id => {
  const dispatch = useDispatch();
  const data = useSelector(state => state.movie.details);

  const get = async (_id = id) => {
    try {
      const response = await api.get(`/movie/${_id}`);
      dispatch(setDetails(response.data));
    } catch (error) {
      console.error(error);
    }
  };

  return [data, {get}];
};
