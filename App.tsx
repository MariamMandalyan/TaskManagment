import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList, Modal } from 'react-native';
import useTaskStore, { Task } from './src/store/taskStore';
import { PrimeryButton } from './src/components/primaryButton/primaryButton';
import { TaskCard } from './src/components/taskCard/taskCard';
import { pixel } from './src/utils/pixel';
import { CreateTask } from './src/components/createTask/createTask';

const App: React.FC = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [currentTask, setCurrentTask] = useState<Task | null>(null);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const { tasks, addTask, updateTask, deleteTask } = useTaskStore();

  const handleSaveTask = () => {
    if (currentTask) {
      updateTask(currentTask.id, title, description, currentTask.completed);
    } else {
      addTask(title, description);
    }
    setModalVisible(false);
    setTitle('');
    setDescription('');
    setCurrentTask(null);
  };

  const handleEditTask = (task: Task) => {
    setCurrentTask(task);
    setTitle(task.title);
    setDescription(task.description);
    setModalVisible(true);
  };

  const handleDeleteTask = (id: string) => {
    deleteTask(id);
  };

  const handleCancel = () => {
    setTitle('');
    setDescription('');
    setModalVisible(false)
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={tasks}
        contentContainerStyle={styles.flex}
        keyExtractor={(item) => item.id}
        ListEmptyComponent={<View style={styles.emtyContainer}><Text>{'You dont have any tasks yet'}</Text></View>}
        renderItem={({ item }) => (
          <TaskCard
            handleEditTask={handleEditTask}
            handleDeleteTask={handleDeleteTask}
            item={item} />
        )}
      />
      <PrimeryButton
        title="Add Task"
        onPress={() => setModalVisible(true)} />
      <Modal visible={modalVisible} animationType="slide">
        <CreateTask
          title={title}
          description={description}
          setTitle={setTitle}
          setDescription={setDescription}
          handleCancel={handleCancel}
          handleSaveTask={handleSaveTask}
        />
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: pixel(50),
    padding: pixel(8),
  },
  emtyContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  flex: {
    flex: 1
  }
});

export default App;
