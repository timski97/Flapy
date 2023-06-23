import React, {useState} from 'react';
import {
  TouchableOpacity,
  View,
  ImageBackground,
  StyleSheet,
  StatusBar,
  Dimensions,
} from 'react-native';
import {Images} from '../../utils/Images';
import Modal from 'react-native-modal';
import Constants from '../constants/Constants';

export const WoodenModalStart = modalProps => {
  return (
    <View>
      <Modal
        statusBarTranslucent
        style={styles.woodContainer}
        isVisible={true}
        deviceHeight={Constants.windowHeightScreen}>
        <TouchableOpacity
          onPress={() => {
            // setRunning(false);
            modalProps.playModalStart();
          }}>
          <ImageBackground
            resizeMode="stretch"
            style={styles.woodenDesk}
            source={Images.start}></ImageBackground>
        </TouchableOpacity>
      </Modal>
    </View>
  );
};
const styles = StyleSheet.create({
  woodContainer: {
    // zIndex: 10000,
    alignItems: 'center',
    justifyContent: 'center',
  },
  woodenDesk: {
    width: 290,
    height: 150,
    resizeMode: 'stretch',
  },
});
