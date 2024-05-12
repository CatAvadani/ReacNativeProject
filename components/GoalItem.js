import { Pressable, StyleSheet, Text, View } from 'react-native';

export default function GoalItem(props) {
  return (
    <View style={styles.goalItem}>
      <Pressable
        // this is applied for Android devices
        android_ripple={{ color: '#2d0f54' }}
        onPress={props.onDeleteItem.bind(this, props.id)}
        // this is applied for Apple devices
        style={({ pressed }) => pressed && styles.pressedItem}
      >
        <Text style={styles.goalText}>{props.text}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  goalItem: {
    borderRadius: 6,
    backgroundColor: '#5e0acc',
    margin: 8,
    width: 320,
  },
  pressedItem: {
    opacity: 0.5,
  },
  goalText: {
    color: 'white',
    padding: 8,
  },
});
