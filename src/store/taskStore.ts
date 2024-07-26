import create from 'zustand';

export type Task = {
  id: string;
  title: string;
  description: string;
  completed: boolean;
};

type TaskStore = {
  tasks: Task[];
  addTask: (title: string, description: string) => void;
  updateTask: (id: string, title: string, description: string, completed: boolean) => void;
  deleteTask: (id: string) => void;
  toggleTaskCompleted: (id: string) => void;
};

const useTaskStore = create<TaskStore>((set) => ({
  tasks: [],
  addTask: (title, description) =>
    set((state) => ({
      tasks: [
        ...state.tasks,
        { id: Date.now().toString(), title, description, completed: false },
      ],
    })),
  updateTask: (id, title, description, completed) =>
    set((state) => ({
      tasks: state.tasks.map((task) =>
        task.id === id ? { ...task, title, description, completed } : task,
      ),
    })),
  deleteTask: (id) =>
    set((state) => ({
      tasks: state.tasks.filter((task) => task.id !== id),
    })),
  toggleTaskCompleted: (id) =>
    set((state) => ({
      tasks: state.tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task,
      ),
    })),
}));

export default useTaskStore;