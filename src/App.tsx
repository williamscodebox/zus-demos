import { useEffect, useState } from "react";
import DataComponent from "./components/DataComponent";
import Test from "./components/Test";
import printProps from "./utils/printProps";
import withLoading from "./utils/withLoading";
import withTodo from "./utils/withTodo";
import TodoList from "./components/TodoList";
import Authorized from "./components/Authorized";
import withAccessControl from "./utils/withAccessControl";
import NotAuthorized from "./components/NotAuthorized";
import useFetch from "./hooks/useFetch";

const MyComponentWithLoading = withLoading(DataComponent);
const TodoListWrapper = printProps(Test);
const TodoListWrap = withTodo(TodoList, "2");
const MyComponentWithAccessControl = withAccessControl(Authorized);

function App() {
  const { data, loading, error } = useFetch<any>(
    "https://jsonplaceholder.typicode.com/posts"
  );
  const [isLoading, setIsLoading] = useState(true);
  const [data2, setData] = useState("");

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
        <MyComponentWithLoading isLoading={isLoading} data={data2} />
      </div>
      <div>
        <TodoListWrap />
      </div>
      <div>
        <MyComponentWithAccessControl
          // roles={["admin", "manager"]}
          roles={["user", "guest"]}
          fallbackComponent={NotAuthorized}
          message="Hello, Admin!"
          injectedProps={{
            userName: "John Doe",
            userPermissions: ["view_dashboard", "edit_settings"],
          }}
        />
      </div>
      <div className="mb-4">
        <h2 className="text-xl">Fetch Data Example</h2>
        {loading && <p>Loading...</p>}
        {error && <p>Error: {error}</p>}
        {data && <pre>{JSON.stringify(data, null, 2)}</pre>}
      </div>
    </div>
  );
}

export default App;
