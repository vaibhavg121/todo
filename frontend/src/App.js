import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [taskName, setTaskName] = useState("");
  const [description, setDescription] = useState("");

  const [todoList, setTodoList] = useState([]);

  const [newDescription, setNewDescription] = useState("");

  //Displaying the tasks at the initial render of the app
  useEffect(() => {
    axios.get("http://localhost:3001/api/get").then((response) => {
      // console.log(response.data);
      setTodoList(response.data);
    });
  }, [todoList, newDescription, description]);

  const submitTodo = () => {
    axios.post("http://localhost:3001/api/insert", {
      taskName: taskName,
      description: description,
    });

    setTodoList([
      ...todoList,
      { taskName: taskName, description: description },
    ]);
  };

  const deleteTodo = (task) => {
    axios.delete(`http://localhost:3001/api/delete/${task}`);
  };

  const updateTodo = (task) => {
    axios.put("http://localhost:3001/api/update", {
      taskName: task,
      description: newDescription,
    });
    setNewDescription("");
  };

  return (
    <div className="App">
      <h1>CRUD Todo</h1>
      <div className="form">
        <label>Task :</label>
        <input
          type="text"
          name="taskName"
          onChange={(e) => {
            setTaskName(e.target.value);
          }}
        ></input>
        <label>Description :</label>
        <input
          type="text"
          name="description"
          onChange={(e) => {
            setDescription(e.target.value);
          }}
        ></input>

        <button onClick={submitTodo}>Submit</button>

        <h1>Todo List: </h1>
        {todoList.map((el) => {
          return (
            <div className="card">
              <h2>{el.taskName}</h2>
              <p>{el.description}</p>

              <button
                onClick={() => {
                  deleteTodo(el.taskName);
                }}
              >
                Delete
              </button>
              <input
                type="text"
                id="updateInput"
                onChange={(e) => {
                  setNewDescription(e.target.value);
                }}
              />
              <button
                onClick={() => {
                  updateTodo(el.taskName);
                }}
              >
                Update
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
