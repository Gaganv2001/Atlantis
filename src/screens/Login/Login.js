import React, {useState, useEffect, useContext} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  View,
  TextInput,
  Text,
  Image,
  TouchableOpacity,
  Animated,
  ActivityIndicator,
  Alert,
  Modal,
} from 'react-native';
import styles from './style';
// import {User, Lock} from 'react-native-feather';
// import Color from '../../constants/Color';
import Color from '../../constants/Color';
import {AuthContext} from '../../context/AuthContext';
import AwesomeAlert from 'react-native-awesome-alerts';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const Login = () => {
  const {setToken} = useContext(AuthContext);

  const [emptyError, setEmptyError] = useState(false);
  const [email, setEmail] = useState('');
  const [isVisible, setIsVisible] = useState(false);
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [showAlert, setShowAlert] = useState(false);

  const toggleVisible = () => {
    setIsVisible(!isVisible);
  };

  const hideAlertMessage = () => {
    setShowAlert(false);
  };

  const handleLogin = async () => {
    setLoading(true);

    try {
      const storedUsername = await AsyncStorage.getItem('username');
      const storedPassword = await AsyncStorage.getItem('password');
      const validationToken = await AsyncStorage.getItem('validationToken');

      if (!email || !password) {
        setEmptyError(true);
        setLoading(false);
        return;
      }

      if (email === storedUsername && password === storedPassword) {
        console.log('Success');
        setToken(validationToken);
        await AsyncStorage.setItem('token', validationToken);
      } else {
        // Alert.alert(
        //   'Invalid Credentials',
        //   'Please enter correct username and password',
        // );
        setShowAlert(true);
      }
    } catch (error) {
      console.error('Failed to fetch credentials from storage', error);
    } finally {
      setLoading(false);
    }
  };

  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    // Open the modal with dummy text when the component mounts
    setShowModal(true);

    // Close the modal after 3 seconds // Cleanup function to clear the timer
  }, []); // Empty dependency array ensures the effect runs only once

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <View style={styles.rootContainer}>
      <View style={styles.topContainer}>
        {/* <Text style={styles.title}>Welcome !</Text> */}
        <View style={styles.logoContainer}>
          {/* <Image
            style={styles.logo}
            source={require('../../assets/images/AppLogo.png')}
          /> */}
        </View>
        <View style={styles.LogoTextContainer}>
          <Text style={{color: 'white', fontSize: 34, fontWeight: 'bold'}}>
            ATLANTIS
          </Text>
        </View>
      </View>

      <Animated.View style={[styles.bottomContainer]}>
        <View style={{alignItems: 'center'}}>
          {/* <View style={styles.logoContainer}>
            <Image
              style={styles.logo}
              source={require('../../assets/images/Logo_Vertically-1.png')}
            />
          </View> */}
        </View>
        <View style={styles.inputContainer}>
          {emptyError && (
            <Text style={styles.errorText}>Please Enter all the details.</Text>
          )}
          <View style={styles.credentials}>
            {/* <User stroke="black" style={{marginRight: 10}} /> */}
            <TextInput
              placeholder="Username"
              style={styles.input}
              onChangeText={text => {
                setEmail(text);
                setEmptyError(false);
              }}
              value={email}
            />
          </View>
          <View style={[styles.credentials, {justifyContent: 'space-between'}]}>
            <View style={{alignItems: 'center', flexDirection: 'row'}}>
              {/* <Lock stroke="black" style={{marginRight: 10}} /> */}
              <TextInput
                placeholder="Password"
                style={styles.input}
                secureTextEntry={isVisible ? false : true}
                onChangeText={text => {
                  setPassword(text);
                  setEmptyError(false);
                }}
                value={password}
              />
            </View>
            <TouchableOpacity onPress={toggleVisible}>
              <View>
                <MaterialIcons
                  name={isVisible ? 'visibility' : 'visibility-off'}
                  size={25}
                  color="grey"
                />
              </View>
            </TouchableOpacity>
          </View>
        </View>
        <TouchableOpacity>
          <View style={styles.PasswordReset}>
            <Text style={{fontFamily: 'Poppins-Regular'}}>
              Forgot Password ?
            </Text>
          </View>
        </TouchableOpacity>

        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={handleLogin} disabled={loading}>
            <View style={styles.loginButton}>
              {loading ? (
                <ActivityIndicator color="white" />
              ) : (
                <Text
                  style={{
                    color: 'white',
                    textAlign: 'center',
                    fontFamily: 'Poppins-Regular',
                  }}>
                  LOGIN
                </Text>
              )}
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.acountAction}>
          <Text style={styles.accountActionText}>Don't have an account ?</Text>
          <TouchableOpacity>
            <Text style={[styles.accountActionText, {color: 'orange'}]}>
              {' '}
              Sign Up
            </Text>
          </TouchableOpacity>
        </View>
      </Animated.View>
      <AwesomeAlert
        show={showAlert}
        showProgress={false}
        title="Invalid Credentials"
        message="Enter correct username and password"
        closeOnTouchOutside={true}
        closeOnHardwareBackPress={true}
        showCancelButton={false}
        showConfirmButton={true}
        confirmButtonColor={'white'}
        confirmText="Try again"
        confirmButtonTextStyle={{color: 'black'}}
        onCancelPressed={hideAlertMessage}
        onConfirmPressed={hideAlertMessage}
      />

      <Modal
        visible={showModal}
        animationType="slide"
        transparent={true}
        onRequestClose={closeModal}>
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
          }}>
          <View
            style={{
              backgroundColor: 'white',
              padding: 20,
              borderRadius: 10,
              alignItems: 'center',
            }}>
            <Text style={{fontSize: 18, color: 'black', textAlign: 'center'}}>
              Credentials
            </Text>
            <Text style={{fontSize: 16, color: 'black'}}>Username: gagan</Text>
            <Text style={{fontSize: 16, color: 'black'}}>
              Password: gagan123
            </Text>

            <TouchableOpacity
              onPress={() => setShowModal(false)}
              style={{
                backgroundColor: 'black',
                marginVertical: '4%',
                padding: '3%',
                borderRadius: 16,
              }}>
              <Text style={{color: 'white'}}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default Login;
