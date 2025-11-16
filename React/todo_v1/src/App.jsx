import "./App.css";
import Todos from "./components/Todos";
import { useState } from "react";

function App() {
  const [todos, setTodos] = useState([
    {
      title: "Sample Todo",
      desc: "This is a sample todo description",
    },
    {
      title: "Second Todo",
      desc: "This is the second todo description",
    },
    {
      title: "Third Todo",
      desc: "This is the third todo description",
    },
  ]);

  const addRandomTodo = () => {
    setTodos([
      ...todos,
      {
        title: "New Random Todo",
        desc: "This is a newly added random todo description",
      },
    ]);
  };
  return (
    <>
      <button
        onClick={addRandomTodo}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Add Random Todo
      </button>
      <Todos todos={todos} />
    </>
  );
}

export default App;
