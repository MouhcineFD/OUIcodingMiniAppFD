import React, {useEffect} from 'react';
import {useMovies} from '../../hooks/useMovies';
import View from './view';

const Component = props => {
  const [data, {get, loadMore}] = useMovies();

  useEffect(() => {
    get();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <View loadMore={loadMore} data={data} {...props} />;
};

Component.displayName = 'IndexListMovie';

export default Component;
