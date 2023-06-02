import React, {useState} from 'react';
import {
  TouchableOpacity,
  Image,
  ActivityIndicator,
  Vibration,
  View,
  Button,
  Text,
  ImageBackground,
  Platform,
  StyleSheet,
} from 'react-native';
import {Images} from '../../utils/Images';
import Modal from 'react-native-modal';

export const WoodenModalStart = modalProps => {
  return (
    <View>
      <Modal style={styles.woodContainer} isVisible={true}>
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
    zIndex: 10000,
    alignItems: 'center',
    justifyContent: 'center',
  },
  woodenDesk: {
    width: 290,
    height: 150,
    resizeMode: 'stretch',
  },
});
