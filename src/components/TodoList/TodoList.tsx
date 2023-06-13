import { TodoInfo } from '../TodoInfo';
import { Todo } from '../../types/Todo';

type Props = {
  todos: Omit<Todo, 'user'>[];
};

export const TodoList: React.FC<Props> = ({ todos }) => (
  <section className="TodoList">
    {todos.map(todoItem => (
      <TodoInfo todo={todoItem} />
    ))}
  </section>
);
