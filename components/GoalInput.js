import { useState } from 'react';
import { Button, Modal, StyleSheet, TextInput, View } from 'react-native';

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
        <TextInput
          onChangeText={goalInputHandler}
          value={enteredText}
          style={styles.textInput}
          placeholder='Your course goal'
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title='Add Goal' onPress={addGoalHandler} />
          </View>
          <View style={styles.button}>
            <Button title='Cancel' onPress={props.onCancel} />
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
    marginBottom: 24,
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: 'gray',
  },
  textInput: {
    borderWidth: 2,
    borderColor: '#cccccc',
    width: '100%',
    marginRight: 8,
    padding: 8,
  },
  buttonContainer: {
    flexDirection: 'row',
  },
  button: {
    width: 100,
    marginHorizontal: 16,
    marginTop: 8,
  },
});
