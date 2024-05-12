import { StyleSheet, Text, View } from 'react-native';

export default function GoalItem(props) {
  return (
    <View style={styles.goalItem}>
      <Text style={styles.goalText}>{props.text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  goalItem: {
    borderRadius: 6,
    backgroundColor: '#5e0acc',
    padding: 8,
    margin: 8,
    width: 320,
  },
  goalText: {
    color: 'white',
  },
});
