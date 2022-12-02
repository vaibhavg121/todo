import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [taskName, setTaskName] = useState("");
  const [description, setDescription] = useState("");

  const [todoList, setTodoList] = useState([]);

  //Displaying the tasks at the initial render of the app
  useEffect(() => {
    axios.get("http://localhost:3001/api/get").then((response) => {
      // console.log(response.data);
      setTodoList(response.data);
    });
  }, []);

  const submitTodo = () => {
    axios
      .post("http://localhost:3001/api/insert", {
        taskName: taskName,
        description: description,
      })
      .then(() => {
        alert("Successful Insert");
      });
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

        {/* Mapping the tasks  */}
        <div>
          <h1>Todo List : </h1>
          {todoList.map((el) => {
            return (
              <h2>
                Task: {el.taskName} || Description: {el.description}{" "}
              </h2>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
