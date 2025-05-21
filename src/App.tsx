import { useCounter } from "./store";

function App() {
  const count = useCounter((state) => state.count);

  return (
    <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center text-xl font-bold">
      {count}
    </div>
  );
}

export default App;
