import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

interface TaskItemProps {
  task: { id: number; content: string; completed: boolean };
  onToggleCompletion: (id: number) => void;
  onEditTask: (id: number, newContent: string) => void;
  onDeleteTask: (id: number) => void;
}

const TaskItem = ({
  task,
  onToggleCompletion,
  onEditTask,
  onDeleteTask,
}: TaskItemProps) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedContent, setEditedContent] = useState(task.content);

  const handleEdit = () => {
    if (editedContent.trim().length > 0) {
      onEditTask(task.id, editedContent);
      setIsEditing(false);
    }
  };

  return (
    <View style={styles.taskContainer}>
      {isEditing ? (
        <TextInput
          style={styles.input}
          value={editedContent}
          onChangeText={setEditedContent}
          onBlur={handleEdit}
          autoFocus
        />
      ) : (
        <TouchableOpacity onPress={() => onToggleCompletion(task.id)}>
          <Text style={[styles.text, task.completed && styles.completedText]}>
            {task.content}
          </Text>
        </TouchableOpacity>
      )}
      <View style={styles.buttons}>
        <TouchableOpacity
          style={[styles.button, styles.editButton]}
          onPress={() => setIsEditing(true)}
        >
          <Text style={styles.buttonText}>Edit</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, styles.deleteButton]}
          onPress={() => onDeleteTask(task.id)}
        >
          <Text style={styles.buttonText}>Delete</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  taskContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    marginBottom: 10,
    backgroundColor: '#f9f9f9',
    borderRadius: 5,
    elevation: 2,
  },
  text: {
    fontSize: 16,
  },
  completedText: {
    textDecorationLine: 'line-through',
    color: '#999',
  },
  input: {
    flex: 1,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    padding: 5,
  },
  buttons: {
    flexDirection: 'row',
  },
  button: {
    padding: 10,
    borderRadius: 5,
    marginHorizontal: 5,
  },
  editButton: {
    backgroundColor: 'green',
  },
  deleteButton: {
    backgroundColor: 'red',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default TaskItem;