import React, {useState} from 'react';
import {
  TouchableOpacity,
  View,
  ImageBackground,
  StyleSheet,
  Text,
} from 'react-native';
import {Images} from '../../utils/Images';
import Modal from 'react-native-modal';

export const ModalInfo = modalProps => {
  return (
    <View style={{flex: 1}}>
      <Modal isVisible={true}>
        <View style={{flex: 1}}>
          <Text>Hello!</Text>
        </View>
      </Modal>
    </View>
  );
};
const styles = StyleSheet.create({
  woodContainer: {
    margin: 0,
    justifyContent: 'flex-end',
    zIndex: 100000,
  },
  woodenDesk: {
    backgroundColor: '#FFF',
    paddingTop: 82,
    borderTopStartRadius: 35,
    borderTopEndRadius: 35,
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingBottom: 55,
    paddingHorizontal: 20,
    zIndex: 100000,
  },
});
