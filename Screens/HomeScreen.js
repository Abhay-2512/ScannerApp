import {
  StyleSheet,
  Text,
  Modal,
 View
} from 'react-native'
import React, { useState } from 'react';
import QRCodeScanner from 'react-native-qrcode-scanner';
import { RNCamera } from 'react-native-camera';

const HomeScreen = () => {

  const [qrData, setQrData] = useState('');
  const [modal, setModal] = useState(false);
  const [counter, setCounter] = useState(0);
  const onSuccess = e => {
    if (e.data) {
      setModal(true)
      setQrData(e.data);

      let id = setInterval(() => {
        setCounter(counter => counter + 1)
      }, 1000)

      let myId = setTimeout(() => {
        setModal(false);
        clearInterval(id);
        setCounter(0)
        setQrData("")
        clearTimeout(myId)
      }, 5000)
    }
  };
  return (
    <View>
      <QRCodeScanner
        onRead={onSuccess}
        flashMode={RNCamera.Constants.FlashMode.torch}
      />
      <Modal visible={modal}
        animationType="slide"
        transparent={true}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalstyle} >
            <Text style={styles.textstyle}>{qrData}</Text>
            <Text style={styles.textstyle} >{counter}</Text>
          </View>
        </View>
      </Modal>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  modalContainer: { flex: 1, flexDirection: 'column', alignItems: 'center', justifyContent: 'center' },
  textstyle:{ fontSize: 20, color: 'black' },
  modalstyle: { backgroundColor: 'white', flexDirection: 'column', alignContent: 'center', justifyContent: 'center', alignItems: 'center', width: '80%', height: 400 }
  ,
  centerText: {
    flex: 1,
    fontSize: 18,
    padding: 32,
    color: '#777'
  },
  textBold: {
    fontWeight: '500',
    color: '#000'
  },
  buttonText: {
    fontSize: 21,
    color: 'rgb(0,122,255)'
  },
  buttonTouchable: {
    padding: 16
  }
});