export interface TodoItemProps {
  id: string;
  title: string;
  completed: boolean;

}

export interface TodoListItemActions {
  toggleTodo: (id: string, completed: boolean,title:string) => void;
  deleteTodo: (id: string) => void;
  updateTodoTitle: (id: string, title: string) => void;
}

export type TodoListItemProps = TodoItemProps & TodoListItemActions;


