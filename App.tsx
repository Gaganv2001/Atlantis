import React from 'react';
import {
  SafeAreaView,
} from 'react-native';
import {AuthProvider} from './src/context/AuthContext';
import Routes from './src/navigation/Routes';

function App() {
  return (
    <AuthProvider>
      <SafeAreaView style={{flex: 1}}>
        <Routes />
      </SafeAreaView>
    </AuthProvider>
  );
}

export default App;
