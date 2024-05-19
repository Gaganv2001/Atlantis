import React, {useContext} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AuthStack from './AuthStack';
import AppStack from './AppStack';
import {AuthContext} from '../context/AuthContext';
import {View, ActivityIndicator} from 'react-native';

export default function Routes() {
  const {token, loading} = useContext(AuthContext);

    if (loading) {
      return (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <ActivityIndicator size={'large'} />
        </View>
      );
    }

  return (
    <NavigationContainer>
      {token == null ? <AuthStack /> : <AppStack />}
    </NavigationContainer>
  );
}
