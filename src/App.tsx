import axios from "axios";
import DataSource from "./components/dataComponents/DataSource";
import CommentsList from "./components/dataComponents/CommentsList";
import TodoList from "./components/dataComponents/TodoList";

const getServerData = (url: string) => async () => {
  const response = await axios.get(url);
  return response.data;
};

const App = () => {
  return (
    <div>
      <DataSource
        getDataFunc={getServerData(
          "https://jsonplaceholder.typicode.com/todos/1"
        )}
        resourceName="todo"
      >
        <TodoList todo={null} />
      </DataSource>

      <br />

      <DataSource
        getDataFunc={getServerData(
          "https://jsonplaceholder.typicode.com/comments/1"
        )}
        resourceName="comments"
      >
        <CommentsList comments={null} />
      </DataSource>
    </div>
  );
};

export default App;
