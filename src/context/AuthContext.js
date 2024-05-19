import React, {createContext, useState, useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Alert} from 'react-native';

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
  const [token, setToken] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const saveDummyCredentials = async () => {
      try {
        await AsyncStorage.setItem('username', 'gagan');
        await AsyncStorage.setItem('password', 'gagan123');
        await AsyncStorage.setItem('validationToken', 'abcd1234567890');

        console.log('Dummy credentials saved');
      } catch (error) {
        console.error('Failed to save dummy credentials', error);
      }
    };

    const fetchToken = async () => {
      setLoading(true); // Set loading to true before fetching the token
      try {
        const storedToken = await AsyncStorage.getItem('token');
        if (storedToken) {
          setToken(storedToken);
        }
      } catch (error) {
        console.error('Failed to fetch token', error);
      } finally {
        setLoading(false); // Set loading to false after the fetch operation
      }
    };

    saveDummyCredentials();
    fetchToken();
  }, []);

  const handleLogout = async () => {
    Alert.alert(
      'Confirm Logout',
      'Are you sure you want to logout?',
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {
          text: 'Logout',
          onPress: async () => {
            // Clear token from AsyncStorage
            setToken(null);
            await AsyncStorage.removeItem('token');
            // Perform any additional logout logic here
            console.log('Logout successful');
          },
        },
      ],
      {cancelable: true},
    );
  };

  return (
    <AuthContext.Provider
      value={{
        token,
        setToken,
        loading,
        setLoading,
        handleLogout,
      }}>
      {children}
    </AuthContext.Provider>
  );
};
