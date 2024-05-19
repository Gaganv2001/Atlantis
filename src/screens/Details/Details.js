import React from 'react';
import {Text, View, Dimensions, Image, TouchableOpacity} from 'react-native';
import Carousel from 'react-native-reanimated-carousel';
import AntDesign from 'react-native-vector-icons/AntDesign';

const Details = ({route, navigation}) => {
  const {item} = route?.params;
  const width = Dimensions.get('window').width;

  return (
    <View style={{flex: 1}}>
      <View
        style={{
          flex: 1,
          paddingVertical: '5%',
        }}>
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            gap: 10,
            marginHorizontal: '4%',
            marginBottom: '2%',
          }}>
          <AntDesign name="left" color="black" size={30} />
          <Text style={{color: 'black', fontSize: 18}}>Back</Text>
        </TouchableOpacity>
        <Carousel
          loop
          width={width}
          //   height={width / 2}
          autoPlay={true}
          data={item?.images}
          scrollAnimationDuration={1000}
          onSnapToItem={index => console.log('current index:', index)}
          renderItem={({item}) => (
            <View style={{flex: 1}}>
              <Image
                source={{uri: item}}
                style={{width: '100%', height: '100%', resizeMode: 'contain'}}
              />
            </View>
          )}
        />
      </View>
      <View
        style={{
          flex: 2,
          backgroundColor: 'white',
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          padding: '5%',
        }}>
        <Text style={{fontSize: 18, color: 'black', textAlign: 'justify'}}>
          {item?.description}
        </Text>
      </View>
    </View>
  );
};

export default Details;
