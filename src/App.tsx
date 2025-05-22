import { useEffect, useState } from "react";
import DataComponent from "./components/DataComponent";
import Test from "./components/Test";
import printProps from "./utils/printProps";
import withLoading from "./utils/withLoading";
import withTodo from "./utils/withTodo";
import TodoList from "./components/TodoList";

const MyComponentWithLoading = withLoading(DataComponent);
const TodoListWrapper = printProps(Test);
const TodoListWrap = withTodo(TodoList, "2");

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState("");

  useEffect(() => {
    setTimeout(() => {
      setData("Data fetched!");
      setIsLoading(false);
    }, 2000);
  }, []);

  return (
    <div>
      <TodoListWrapper one={1} two={"hello"} />
      <div>
        <MyComponentWithLoading isLoading={isLoading} data={data} />
      </div>
      <div>
        <TodoListWrap />
      </div>
    </div>
  );
}

export default App;
