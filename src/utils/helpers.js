import {IMAGES_BASE_URL} from './constants';

export const generateImageUrl = options =>
  `${IMAGES_BASE_URL}/w${options.size}${options.path}`;

export const getYearFromReleaseDate = date => date?.slice(0, 4);
