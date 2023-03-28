import React, {useEffect} from 'react';
import {useMovie} from '../../hooks/useMovie';
import View from './view';

const Component = ({route, ...props}) => {
  const {id} = route.params;

  const [data, {get}] = useMovie(id);

  useEffect(() => {
    get(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  return <View data={data} {...props} />;
};

Component.displayName = 'IndexMovieDetails';

export default Component;
