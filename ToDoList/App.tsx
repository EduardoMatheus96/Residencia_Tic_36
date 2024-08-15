import { StatusBar } from 'expo-status-bar';
import { FlatList, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { Task } from './src/components/Task';
import { CardNumber } from './src/components/CardNumber';
import { InputAddTask } from './src/components/InputAddTask';
import { useEffect, useState } from 'react';

export default function App() {
  const [tasks, setTasks] = useState<{description: string; check: boolean}[]>([]);
  const [taskText, setTaskText] = useState("");
  const [countTask, setCountTask] = useState(0);

  function handleTaskAdd(){

    if (taskText === "") {
      alert("Por favor, insira uma tarefa")
      return;
    }
    if (tasks.some((task) => task.description === taskText)) {
      alert("Tarefa ja existente")
      return;
    }

    const newTask = {description: taskText, check: false};
    setTasks([...tasks, newTask]);
    setTaskText(""); 
  }

  useEffect(() => {
    let totalTaskes = tasks.length;
    setCountTask(totalTaskes);
  }, [tasks]);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <InputAddTask onSubmitEditing={setTaskText} handleTaskAdd={handleTaskAdd} />
      <View style={{ flexDirection: 'row', gap: 16 }}>
        <CardNumber />
        <CardNumber />
        <CardNumber />
      </View>

      <Text style={{ color: '#FFF', fontSize: 24, fontWeight: 'bold', marginTop: 16 }}>Tarefas: {countTask}</Text>
      <FlatList 
        data={tasks}
        keyExtractor={(item, index) => index.toString()}
        renderItem={
          ({item}) => <Task taskName={item.description}/>
        }
        ListEmptyComponent={() => (
          <View>
            <Text style={{ color: '#FFF' }}>Você ainda não tem tarefas cadastradas</Text>
            <Text style={{ color: '#FFF' }}>Crie uma tarefa para começar !!</Text>
          </View>
        )}
      />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#28385E',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
    paddingTop: 64,
    gap: 16,
  },
});
