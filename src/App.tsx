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
import CardFactory from "./components/Factory/shared/CardFactory";
import Card from "./components/compound/Card";

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

  const imageCardData = {
    src: "https://images.unsplash.com/photo-1500964757637-c85e8a162699?q=80&w=3903&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Placeholder Image",
  };

  const textCardData = {
    text: "This is a simple text card.",
  };

  const profileCardData = {
    name: "John Doe",
    bio: "A software engineer with a passion for React.",
    avatar:
      "https://images.unsplash.com/photo-1487349703519-90c8e4f426a7?q=80&w=3853&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  };

  useEffect(() => {
    setTimeout(() => {
      setData("Data fetched!");
      setIsLoading(false);
    }, 2000);
  }, []);

  return (
    <div>
      <Card>
        <Card.Title>Something Cool</Card.Title>
        <Card.Content>Amazing Stuff</Card.Content>
        <Card.Footer>And the end</Card.Footer>
      </Card>
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
      <div>
        <h1>Factory Design Pattern in React</h1>
        <div className="flex flex-wrap">
          {/* Use the factory function to render different types of cards */}
          <CardFactory type="image" data={imageCardData} />
          <CardFactory type="text" data={textCardData} />
          <CardFactory type="profile" data={profileCardData} />
        </div>
      </div>
    </div>
  );
}

export default App;
