import { useCounter } from "./store";

function App() {
  const count = useCounter((state) => state.count);
  const { increment, decrement } = useCounter((state) => state);

  return (
    <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center text-xl p-5 font-bold">
      {count}
      <div className="flex flex-col m-2 gap-2">
        <button className="flex p-2 border-2" onClick={increment}>
          Increment
        </button>
        <button className="flex p-2 border-2" onClick={decrement}>
          Decrement
        </button>
      </div>
    </div>
  );
}

export default App;
