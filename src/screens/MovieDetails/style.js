import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    paddingHorizontal: 20,
    marginVertical: 20,
  },
  poster: {
    width: '100%',
    height: 250,
    borderRadius: 8,
    marginBottom: 20,
  },
  infoContainer: {
    marginBottom: 15,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 8,
  },
  vote: {
    fontSize: 18,
    color: '#777',
    marginBottom: 5,
  },
  releaseDate: {
    fontSize: 16,
    color: '#777',
    marginBottom: 15,
  },
  overview: {
    fontSize: 16,
    lineHeight: 24,
    color: '#333',
    textAlign: 'justify',
  },
});
