import React from 'react';
import { FlatList, View, StyleSheet } from 'react-native';
import TaskItem from './TaskItem';

interface TaskListProps {
  tasks: { id: number; content: string; completed: boolean }[];
  onToggleCompletion: (id: number) => void;
  onEditTask: (id: number, newContent: string) => void;
  onDeleteTask: (id: number) => void;
}

const TaskList = ({
  tasks,
  onToggleCompletion,
  onEditTask,
  onDeleteTask,
}: TaskListProps) => {
  return (
    <View style={styles.listContainer}>
      <FlatList
        data={tasks}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => (
          <TaskItem
            task={item}
            onToggleCompletion={onToggleCompletion}
            onEditTask={onEditTask}
            onDeleteTask={onDeleteTask}
          />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  listContainer: {
    flex: 1,
  },
});

export default TaskList;
