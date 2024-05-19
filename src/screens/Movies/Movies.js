import React, {useState, useEffect} from 'react';
import {Text, View, FlatList, ActivityIndicator, Image} from 'react-native';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://dummyapi.online/api/movies')
      .then(response => response.json())
      .then(data => {
        setMovies(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        setLoading(false);
      });
  }, []);

  const renderItem = ({item}) => (
    <View
      style={{
        padding: 10,
        borderBottomColor: 'black',
        borderBottomWidth: 0.5,
        flexDirection: 'row',
      }}>
      <View>
        <Image
          source={require('../../assets/noImage.jpeg')}
          style={{
            width: 100,
            height: 100,
            marginRight: 10,
            borderRadius: 18,
          }}
        />
      </View>
      <View style={{flex: 1, justifyContent: 'center'}}>
        <Text style={{fontSize: 16, color: 'black', flex: 1, flexWrap: 'wrap'}}>
          {item.movie}
        </Text>
        <Text style={{fontSize: 14, color: 'black', flex: 1, flexWrap: 'wrap'}}>
          {item.rating}
        </Text>
      </View>
    </View>
  );

  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      {loading ? (
        <ActivityIndicator size="large" color="blue" />
      ) : (
        <FlatList
          data={movies}
          renderItem={renderItem}
          keyExtractor={item => item.id.toString()}
        />
      )}
    </View>
  );
};

export default Movies;
