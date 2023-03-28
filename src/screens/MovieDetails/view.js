import React from 'react';
import {Image, ScrollView, Text, View} from 'react-native';
import {generateImageUrl} from '../../utils/helpers';
import {styles} from './style';

const Component = ({data}) => (
  <ScrollView style={styles.container}>
    <Image
      style={styles.poster}
      source={{
        uri: generateImageUrl({size: '300', path: data.backdrop_path}),
      }}
    />
    <View style={styles.infoContainer}>
      <Text style={styles.title}>{data.title}</Text>
      <Text
        style={
          styles.vote
        }>{`Rating: ${data.vote_average} (${data.vote_count} votes)`}</Text>
      <Text
        style={styles.releaseDate}>{`Release Date: ${data.release_date}`}</Text>
    </View>
    <Text style={styles.overview}>{data.overview}</Text>
  </ScrollView>
);

Component.displayName = 'ViewMovieDetails';

export default Component;
