// components/TaskItem.tsx
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Swipeable } from 'react-native-gesture-handler';

interface TaskItemProps {
  task: {
    key: string;
    value: string;
  };
  onDeleteTask: (taskKey: string) => void;
}

const TaskItem: React.FC<TaskItemProps> = ({ task, onDeleteTask }) => {
  const renderRightActions = () => {
    return (
      <View style={styles.deleteButtonContainer}>
        <TouchableOpacity
          style={styles.deleteButton}
          onPress={() => onDeleteTask(task.key)}
        >
          <Ionicons name="trash" size={30} color="#fff" />
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <Swipeable renderRightActions={renderRightActions}>
      <View style={styles.task}>
        <Text>{task.value}</Text>
      </View>
    </Swipeable>
  );
};

const styles = StyleSheet.create({
  deleteButtonContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#E57373',
    borderRadius: 5,
    marginVertical: 5,
    paddingRight: 10,
  },
  deleteButton: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 70,
    height: '100%',
  },
  task: {
    padding: 20,
    marginVertical: 5,
    backgroundColor: '#fff',
    borderRadius: 5,
    borderColor: '#ddd',
    borderWidth: 1,
  },
});

export default TaskItem;
