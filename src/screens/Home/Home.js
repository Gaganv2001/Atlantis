import React, {useCallback, useRef, useState, useMemo, useContext} from 'react';
import {
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
  Alert,
} from 'react-native';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import styles from './style';
import {
  BottomSheetModal,
  BottomSheetView,
  BottomSheetModalProvider,
} from '@gorhom/bottom-sheet';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {AuthContext} from '../../context/AuthContext';

const Home = ({navigation}) => {
  const {handleLogout} = useContext(AuthContext);
  const bottomSheetModalRef = useRef(null);
  const [selectedMarker, setSelectedMarker] = useState(null);

  // Sample marker data
  const markers = [
    {
      id: 1,
      latitude: 37.78825,
      longitude: -122.4324,
      title: 'Location 1',
      description:
        'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula,',
      images: [
        'https://picsum.photos/id/1015/200/200',
        'https://picsum.photos/id/1016/200/200',
        'https://picsum.photos/id/1017/200/200',
      ],
    },
    {
      id: 2,
      latitude: 37.78835,
      longitude: -122.4334,
      title: 'Location 2',
      description:
        'But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally',
      images: [
        'https://picsum.photos/id/1018/200/200',
        'https://picsum.photos/id/1019/200/200',
        'https://picsum.photos/id/1020/200/200',
      ],
    },
  ];

  // Snap points for the bottom sheet
  const snapPoints = useMemo(() => ['25%', '50%'], []);

  // Handle marker press
  const handleMarkerPress = useCallback(marker => {
    setSelectedMarker(marker);
    bottomSheetModalRef.current?.present();
  }, []);

  // Handle bottom sheet changes
  const handleSheetChanges = useCallback(index => {
    console.log('handleSheetChanges', index);
  }, []);

  renderContent = () => (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate('Details', {item: selectedMarker});
      }}
      style={{
        backgroundColor: 'white',
        padding: 16,
      }}>
      {selectedMarker ? (
        <>
          <Text style={{fontSize: 18, fontWeight: 'bold', color: 'black'}}>
            {selectedMarker.title}
          </Text>
          <Text style={{fontSize: 16, color: 'black'}}>
            {selectedMarker.description}
          </Text>
          <View style={{marginTop: '2%', flexDirection: 'row'}}>
            {selectedMarker.images.map((image, index) => (
              <Image
                key={index}
                source={{uri: image}}
                style={{
                  width: 100,
                  height: 100,
                  marginRight: 10,
                  borderRadius: 18,
                }}
              />
            ))}
          </View>
        </>
      ) : (
        <Text>No marker selected</Text>
      )}
    </TouchableOpacity>
  );

  return (
    <BottomSheetModalProvider style={styles.container}>
      <View
        style={{
          paddingVertical: '3%',
          backgroundColor: 'black',
          flexDirection: 'row',
          justifyContent: 'flex-end',
          paddingHorizontal: '4%',
        }}>
        <TouchableOpacity style={{alignItems: 'center'}} onPress={handleLogout}>
          <AntDesign name="poweroff" color="white" size={27} />
          <Text style={{color: 'white'}}>Logout</Text>
        </TouchableOpacity>
      </View>
      <MapView
        style={styles.map}
        region={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.015,
          longitudeDelta: 0.0121,
        }}>
        {markers.map(marker => (
          <Marker
            key={marker.id}
            coordinate={{
              latitude: marker.latitude,
              longitude: marker.longitude,
            }}
            onPress={() => handleMarkerPress(marker)}
          />
        ))}
      </MapView>
      <BottomSheetModal
        ref={bottomSheetModalRef}
        index={1}
        snapPoints={snapPoints}
        onChange={handleSheetChanges}>
        <BottomSheetView style={styles.contentContainer}>
          {renderContent()}
        </BottomSheetView>
      </BottomSheetModal>
    </BottomSheetModalProvider>
  );
};

export default Home;
