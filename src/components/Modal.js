import React, {useState} from 'react';
import {
  TouchableOpacity,
  Image,
  View,
  Text,
  ImageBackground,
  StyleSheet,
  StatusBar,
} from 'react-native';
import {Images} from '../../utils/Images';
import Modal from 'react-native-modal';
import {ModalInfo} from './ModalInfo';
import Constants from '../constants/Constants';

export const WoodenModal = modalProps => {
  return (
    <View>
      <Modal
        statusBarTranslucent
        style={styles.woodContainer}
        isVisible={true}
        deviceHeight={Constants.windowHeightScreen}>
        <ImageBackground
          resizeMode="stretch"
          style={styles.woodenDesk}
          source={Images.modalWoodenSqure}>
          <View style={styles.starContainer}>
            <View style={styles.starView}>
              <Image
                style={[styles.star]}
                source={Images.woodenStar}
                resizeMode="contain"
              />
              <Text
                style={[
                  styles.starText,
                  styles.textMarginTop,
                  styles.textWidth,
                ]}
                numberOfLines={1}>
                123
              </Text>
            </View>
            <View style={styles.starView}>
              <Image
                style={[styles.starCenter]}
                source={Images.woodenStar}
                resizeMode="contain"
              />
              <Text
                style={[
                  styles.starTextCenter,
                  styles.textMarginTop,
                  styles.textWidth,
                ]}
                numberOfLines={1}>
                123
              </Text>
            </View>
            <View style={styles.starView}>
              <Image
                style={[styles.star]}
                source={Images.woodenStar}
                resizeMode="contain"
              />
              <Text
                style={[
                  styles.starText,
                  styles.textMarginTop,
                  styles.textWidth,
                ]}
                numberOfLines={1}>
                123
              </Text>
            </View>
          </View>
          <TouchableOpacity style={styles.boardRow}>
            <Image
              style={styles.infoHart}
              source={Images.hart}
              resizeMode="contain"
            />

            <Text style={[styles.starText, styles.bigText]}>
              КУПИТИ 1 ЖИТТЯ
            </Text>
          </TouchableOpacity>
          <View style={styles.boardRowCoin}>
            <Image
              style={styles.infoHart}
              source={Images.coins}
              resizeMode="contain"
            />
            <Text style={[styles.starText, styles.bigText]}>
              {modalProps.currentPoints} МОНЕТ
            </Text>
          </View>
          <ImageBackground
            source={Images.indicatorBody}
            style={styles.indicatorBody}
            resizeMode="stretch">
            <Image
              source={Images.indicator}
              style={[styles.indicator]}
              resizeMode="stretch"
            />
          </ImageBackground>
          <Text style={[styles.starText, styles.midText]}>Ваш рiвень</Text>
        </ImageBackground>
        <View style={styles.woodBottomView}>
          <TouchableOpacity
            onPress={() => {
              modalProps.closeModal();
            }}>
            <Image
              style={styles.woodStop}
              source={Images.woodStopButton}
              resizeMode="contain"
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              modalProps.playModal();
            }}>
            <Image
              style={styles.woodStop}
              source={Images.woodPlayButton}
              resizeMode="contain"
            />
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
};
const styles = StyleSheet.create({
  woodContainer: {
    zIndex: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },
  woodenDesk: {
    width: 290,
    height: 290,
    alignItems: 'center',
  },
  starContainer: {
    position: 'absolute',
    top: -40,
    width: 240,
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
  },
  starText: {
    textAlign: 'center',
    fontSize: 8,
    marginTop: 0,
    color: 'rgba(173, 97, 52, 1)',
    fontFamily: 'Sonic 1 Title Screen Filled',
  },
  starView: {
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  star: {
    height: 70,
    width: 70,
  },
  starCenter: {
    height: 100,
    width: 100,
    top: -5,
  },
  starTextCenter: {
    textAlign: 'center',
    color: 'rgba(173, 97, 52, 1)',
    marginTop: 0,
    top: -5,
    fontFamily: 'Sonic 1 Title Screen Filled',
    fontSize: 8,
  },
  infoHart: {
    width: 40,
    height: 36,
  },
  bigText: {
    fontSize: 13,
    lineHeight: 32,
    textAlign: 'left',
    marginLeft: 10,
    letterSpacing: -0.35,
  },
  boardRow: {
    width: 230,
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 90,
    marginBottom: 20,
  },
  boardRowCoin: {
    width: 230,
    flexDirection: 'row',
    alignItems: 'center',
    // paddingTop: 10,
    marginBottom: 20,
  },
  indicatorBody: {
    width: 220,
    height: 30,
    borderRadius: 12,
    overflow: 'hidden',
    marginTop: 0,
    flexDirection: 'row',
  },
  indicator: {
    position: 'absolute',
    left: 7,
    width: 206,
    height: 10,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    alignSelf: 'center',
  },
  woodStop: {
    height: 120,
    width: 120,
  },
  woodBottomView: {
    flexDirection: 'row',
    width: 290,
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20,
  },
  midText: {
    fontSize: 11,
    lineHeight: 22,
    textAlign: 'center',
    letterSpacing: 0.55,
    fontFamily: 'Sonic 1 Title Screen Filled',
  },
});
