import React, { useState, useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import TaskInput from './components/TaskInput';
import TaskList from './components/TaskList';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface Task {
  id: number;
  content: string;
  completed: boolean;
}

const App = () => {
  const [tasks, setTasks] = useState<Task[]>([]);

  // Load tasks from AsyncStorage
  useEffect(() => {
    const loadTasks = async () => {
      try {
        const savedTasks = await AsyncStorage.getItem('tasks');
        if (savedTasks) setTasks(JSON.parse(savedTasks));
      } catch (error) {
        console.error('Error loading tasks:', error);
      }
    };
    loadTasks();
  }, []);

  // Save tasks to AsyncStorage
  useEffect(() => {
    const saveTasks = async () => {
      try {
        await AsyncStorage.setItem('tasks', JSON.stringify(tasks));
      } catch (error) {
        console.error('Error saving tasks:', error);
      }
    };
    saveTasks();
  }, [tasks]);

  // Add a new task
  const addTask = (content: string) => {
    setTasks(prevTasks => [
      ...prevTasks,
      { id: Date.now(), content, completed: false },
    ]);
  };

  // Update an existing task
  const updateTask = (id: number, newContent: string) => {
    setTasks(prevTasks =>
      prevTasks.map(task =>
        task.id === id ? { ...task, content: newContent } : task
      )
    );
  };

  // Toggle task completion
  const toggleTaskCompletion = (id: number) => {
    setTasks(prevTasks =>
      prevTasks.map(task =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  // Delete a task
  const deleteTask = (id: number) => {
    setTasks(prevTasks => prevTasks.filter(task => task.id !== id));
  };

  return (
    <View style={styles.container}>
      <TaskInput onAddTask={addTask} />
      <TaskList
        tasks={tasks}
        onToggleCompletion={toggleTaskCompletion}
        onEditTask={updateTask}
        onDeleteTask={deleteTask}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
    paddingTop: 50,
  },
});

export default App;