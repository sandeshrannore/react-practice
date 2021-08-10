import React, { useState, useEffect } from "react";
import Form from "./components/form";
import TodoList from "./components/todoList";
import LoginForm from "./components/login_form";

function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("All");
  const [filteredTodos, setFilteredTodos] = useState([]);

  useEffect(() => {
    getLocalTodos();
    console.log("Hey");
  }, []);

  useEffect(() => {
    filterHandler();
    saveLocalTodos();
  }, [todos, status]);

  const filterHandler = () => {
    switch (status) {
      case "completed":
        setFilteredTodos(todos.filter((todo) => todo.completed === true));
        break;
      case "incompleted":
        setFilteredTodos(todos.filter((todo) => todo.completed === false));
        break;
      default:
        setFilteredTodos(todos);
        break;
    }
  };

  const saveLocalTodos = () => {
    localStorage.setItem("todos", JSON.stringify(todos));
  };

  const getLocalTodos = () => {
    if (localStorage.getItem("todos") === null) {
      localStorage.setItem("todos", JSON.stringify([]));
    } else {
      let localTodo = JSON.parse(localStorage.getItem("todos"));
      setTodos(localTodo);
    }
  };

  return (
    <div className="App">
      <h1>Todo List</h1>
      <Form
        inputText={inputText}
        todos={todos}
        setTodos={setTodos}
        setInputText={setInputText}
        setStatus={setStatus}
        filteredTodos={filteredTodos}
      />
      <TodoList
        todos={todos}
        setTodos={setTodos}
        filteredTodos={filteredTodos}
      />
    </div>
  );

  // const adminUser = {
  //   email: "test@test.com",
  //   password: "123",
  // }

  // const[user, setUser] = useState({name: "", email: ""});
  // const[error, setError] = useState("");

  // const Login = details => {
  //   console.log(details);

  //   if(details.email === adminUser.email && details.password === adminUser.password){
  //     console.log("Logged In")

  //     setUser({
  //       name: details.name,
  //       email: details.email,
  //     })
  //   } else if (details.email !== adminUser.email){
  //     console.log("Details dont match");
  //     setError("Invalid Email Id");
  //   }else if (details.password !== adminUser.password){
  //     setError("Invalid Password");
  //   }
  // }

  // const Logout = () => {
  //   console.log('LOGOUT');

  //   setUser({name: "", email: ""});
  // }

  // return (
  //   <div className="App">
  //   {(user.email !== "") ?
  //   (
  //     <div className="welcome">
  //       <h2>Welcome <span>{user.name}</span> </h2>
  //       <button onClick = {Logout}>Logout</button>
  //        </div>
  //   ) :
  //   (
  //     <LoginForm Login = {Login} error = {error}/>
  //   )}
  //   </div>
  // );
}

export default App;
