import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
} from 'react-native';

export default function LoginPage() {
  return (
    <SafeAreaView style={styles.mainContainer}>
      <Text style={styles.headingText}>Calender</Text>
      <Image
        source={require('../Images/loginbackground.png')}
        style={styles.background}
      />
      <View style={styles.inputFields}>
        <View style={styles.inputField}>
          <Image
            source={require('../Images/userlogo.png')}
            style={styles.userLogo}
          />
          <TextInput
            placeholder="Mobile No."
            style={styles.mobileInput}
            keyboardType="numeric"
          />
          <View style={styles.separator} />
          <TouchableOpacity style={styles.sendOtpButton}>
            <Text style={styles.sendOtpText}>Send OTP</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.inputField}>
          <Image source={require('../Images/key.png')} style={styles.otpLogo} />
          <TextInput
            placeholder="Enter OTP"
            style={styles.otpInput}
            keyboardType="numeric"
          />
        </View>
      </View>
      <View>
        <TouchableOpacity style={styles.loginButton}>
          <Text style={styles.loginText}>Login</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  headingText: {
    paddingTop: 40,
    marginBottom: -80,
    fontSize: 40,
    fontFamily: 'LeckerliOne-Regular',
  },
  mainContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  background: {
    marginTop: 155,
    marginHorizontal: 50,
    height: 200,
    width: 200,
    alignSelf: 'center',
    resizeMode: 'contain',
  },
  inputFields: {
    marginTop: 50,
    justifyContent: 'space-between',
    width: 300,
    // backgroundColor: 'red',
  },
  inputField: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
    backgroundColor: '#EAF0F1',
    borderRadius: 10,
  },
  userLogo: {
    height: 20,
    width: 20,
    marginHorizontal: 10,
  },
  mobileInput: {
    flex: 1,
    height: 50,
    paddingHorizontal: 10,
  },
  otpLogo: {
    height: 20,
    width: 20,
    marginHorizontal: 10,
    borderRadius: 7,
    borderColor: 'black',
    borderWidth: 0.5,
  },
  otpInput: {
    flex: 1,
    height: 50,
    paddingHorizontal: 10,
  },
  sendOtpButton: {
    borderRadius: 10,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  sendOtpText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  separator: {
    width: 1,
    height: '70%',
    backgroundColor: 'black',
  },
  loginButton: {
    backgroundColor: '#3C40C6',
    borderRadius: 10,
    height: 50,
    width: 300,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
  },
  loginText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
