import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

interface TaskInputProps {
  onAddTask: (content: string) => void;
}

const TaskInput = ({ onAddTask }: TaskInputProps) => {
  const [taskContent, setTaskContent] = useState('');

  const handleAddTask = () => {
    if (taskContent.trim().length > 0) {
      onAddTask(taskContent);
      setTaskContent('');
    }
  };

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.input}
        placeholder="Enter a task..."
        value={taskContent}
        onChangeText={setTaskContent}
      />
      <Button title="Add Task" onPress={handleAddTask} />
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  input: {
    flex: 1,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    marginRight: 10,
    padding: 5,
  },
});

export default TaskInput;
