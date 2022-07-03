import React, {useState} from 'react';
import {
  Modal,
  TextInput,
  Text,
  View,
  StyleSheet,
  Pressable,
  Button,
  Alert,
  ToastAndroid,
} from 'react-native';

export const InputModal = ({visible, t_events, selectedDate}) => {
  const [inp, setInp] = useState('');
  
  const {showModal, setShowModal} = visible;
  const {events, setNewEvent} = t_events;
  return (
    <Modal animationType="slide" visible={showModal}>
      <View style={styles.view}>
        <Text>Sign</Text>
        <TextInput style={styles.input} onChange={e => setInp(e.nativeEvent.text)} />

        <View style={styles.press}>
          <Pressable onPressOut={() => {setNewEvent(inp); ToastAndroid.showWithGravity('Added', 0, ToastAndroid.TOP);}}>
            <Text style={styles.add}>ADD</Text>
          </Pressable>

          <Pressable onPress={() => setShowModal(false)}>
            <Text style={styles.close}>CLOSE</Text>
          </Pressable>
        </View>
      </View>
    </Modal>
  );
};

const btnStyle = {
  color: 'black',
  padding: 10,
  backgroundColor: 'red',
  width: 80,
  borderRadius: 2,
  color: 'white',
  textAlign: 'center',
  fontSize: 15,
  fontWeight: 'bold',
  margin: 10,
};

const styles = StyleSheet.create({
  view: {
    flex: 0.5,
    marginTop: '50%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  press: {
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  close: {
    ...btnStyle,
    backgroundColor: 'orangered',
  },
  add: {
    ...btnStyle,
    backgroundColor: 'blue',
  },
  input: {
    color: 'black',
    borderWidth: 2,
    borderColor: 'white',
    borderBottomColor: 'black',
    width: '40%',
    fontWeight: 'bold',
    fontSize: 20,
    padding: 0,
  },
});

