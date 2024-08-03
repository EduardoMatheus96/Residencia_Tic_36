// components/TaskList.tsx
import React from 'react';
import { FlatList, StyleSheet } from 'react-native';
import TaskItem from './TaskItem';

interface Task {
  key: string;
  value: string;
}

interface TaskListProps {
  tasks: Task[];
  onDeleteTask: (taskKey: string) => void;
}

const TaskList: React.FC<TaskListProps> = ({ tasks, onDeleteTask }) => {
  return (
    <FlatList
      data={tasks}
      renderItem={({ item }) => (
        <TaskItem task={item} onDeleteTask={onDeleteTask} />
      )}
      keyExtractor={(item) => item.key}
      contentContainerStyle={styles.listContent}
    />
  );
};

const styles = StyleSheet.create({
  listContent: {
    paddingBottom: 20,
  },
});

export default TaskList;
