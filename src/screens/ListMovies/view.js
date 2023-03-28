import React from 'react';
import {FlatList, View} from 'react-native';
import Item from './Item';
import {styles} from './style';

const Component = ({navigation, data, loadMore}) => (
  <View style={styles.container}>
    <FlatList
      data={data}
      renderItem={({item}) => (
        <Item
          data={item}
          onPress={() =>
            navigation.navigate('MovieDetails', {
              id: item.id,
              title: item.title,
            })
          }
        />
      )}
      keyExtractor={item => item.id.toString()}
      onEndReached={loadMore}
      onEndReachedThreshold={0.5}
    />
  </View>
);

Component.displayName = 'ViewListMovie';

export default Component;
