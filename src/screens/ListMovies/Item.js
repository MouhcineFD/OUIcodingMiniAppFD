import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {generateImageUrl, getYearFromReleaseDate} from '../../utils/helpers';
import {styles} from './style';

const Component = ({data, onPress}) => (
  <TouchableOpacity style={styles.item} onPress={onPress}>
    <Image
      style={styles.poster}
      source={{
        uri: generateImageUrl({size: '200', path: data.poster_path}),
      }}
    />
    <View style={styles.titleContainer}>
      <Text style={styles.title} numberOfLines={2}>
        {data.title}
      </Text>
      <Text style={styles.releaseDate}>
        {getYearFromReleaseDate(data.release_date)}
      </Text>
    </View>
  </TouchableOpacity>
);

Component.defaultProps = {
  onPress: () => {},
};

Component.displayName = 'ItemListMovie';

export default Component;
