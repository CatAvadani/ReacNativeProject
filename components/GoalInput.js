import { useState } from 'react';
import {
  Button,
  Image,
  Modal,
  StyleSheet,
  TextInput,
  View,
} from 'react-native';

export default function GoalInput(props) {
  const [enteredText, setEnteredText] = useState('');

  const goalInputHandler = (enteredText) => {
    setEnteredText(enteredText);
  };

  const addGoalHandler = () => {
    props.onAddGoal(enteredText);
    setEnteredText('');
  };

  return (
    <Modal visible={props.visible} animationType='slide'>
      <View style={styles.inputContainer}>
        <Image
          style={styles.image}
          source={require('../assets/images/Image1.jpeg')}
        />
        <TextInput
          onChangeText={goalInputHandler}
          value={enteredText}
          style={styles.textInput}
          placeholder='Your course goal'
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title='Cancel' onPress={props.onCancel} color='#f31282' />
          </View>
          <View style={styles.button}>
            <Button title='Add Goal' onPress={addGoalHandler} color='#b180f0' />
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#311b6b',
  },
  textInput: {
    borderWidth: 2,
    borderColor: '#e4d0ff',
    borderRadius: 6,
    width: '100%',
    marginRight: 8,
    padding: 16,
    color: '#120438',
    backgroundColor: '#e4d0ff',
  },
  buttonContainer: {
    flexDirection: 'row',
  },
  button: {
    width: 100,
    marginHorizontal: 16,
    marginTop: 8,
  },
  image: {
    width: 100,
    height: 100,
    margin: 20,
    borderRadius: 50,
  },
});
