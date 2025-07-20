import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchTodos, getTodos } from "./redux/slices/todoSlice";
function App() {
  const dispatch = useDispatch();
  const todos = useSelector(getTodos);
  console.log(todos);

  return (
    <div className="App">
      <button onClick={(e) => dispatch(fetchTodos())}> Fetch Todos</button>
      {todos.isLoading && <h2>Loading........</h2>}
      <ul>
        {todos.data?.map((todo) => (
          <li key={todo.id}>
            <em>{todo.title}</em> -- [
            {todo.completed ? "completed" : "not-completed"}]
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
