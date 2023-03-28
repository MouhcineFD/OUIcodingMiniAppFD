import {useDispatch, useSelector} from 'react-redux';
import {setPage, setTotalPages, setList} from '../redux/movieSlice';
import api from '../services/api';

export const useMovies = () => {
  const dispatch = useDispatch();
  const movies = useSelector(state => state.movie.list);
  const totalPages = useSelector(state => state.movie.totalPages);
  const page = useSelector(state => state.movie.page);

  const fetchMovies = () => async () => {
    try {
      const response = await api.get('/discover/movie', {params: {page}});
      dispatch(setList(response.data.results));
      dispatch(setTotalPages(response.data.total_pages));
      dispatch(setPage(page + 1));
    } catch (error) {
      console.error(error);
    }
  };

  const get = () => {
    dispatch(fetchMovies());
  };

  const loadMore = () => {
    if (page <= totalPages) {
      dispatch(fetchMovies());
    }
  };

  return [movies, {get, loadMore}];
};
