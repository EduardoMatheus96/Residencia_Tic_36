import React, { useState } from 'react';
import { SafeAreaView, FlatList, StyleSheet } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import TaskInput from './components/TaskInput';
import TaskItem from './components/TaskItem';

interface Task {
  key: string;
  value: string;
}

const App: React.FC = () => {
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
        <FlatList
          data={tasks}
          renderItem={({ item }) => (
            <TaskItem task={item} onDeleteTask={removeTask} />
          )}
          keyExtractor={(item) => item.key}
          contentContainerStyle={styles.listContent}
        />
      </SafeAreaView>
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 20,
    backgroundColor: '#f0f0f0',
  },
  listContent: {
    paddingBottom: 20,
  },
});

export default App;
