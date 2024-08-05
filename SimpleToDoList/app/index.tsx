// app/(tabs)/index.tsx
import React, { useState } from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import TaskInput from '../components/TaskInput';
import TaskList from '../components/TaskList';

interface Task {
  key: string;
  value: string;
}

export default function HomeScreen() {
  const [tasks, setTasks] = useState<Task[]>([]);

  const addTask = (task: string) => {
    setTasks([...tasks, { key: Math.random().toString(), value: task }]);
  };

  const removeTask = (taskKey: string) => {
    setTasks(tasks.filter(task => task.key !== taskKey));
  };

  return (
    <GestureHandlerRootView style={styles.container}>
      <SafeAreaView style={styles.container}>
        <TaskInput onAddTask={addTask} />
        <TaskList tasks={tasks} onDeleteTask={removeTask} />
      </SafeAreaView>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 20,
    backgroundColor: '#f0f0f0',
  },
});
