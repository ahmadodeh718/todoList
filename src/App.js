import React, {useState} from 'react';
import "./App.scss";
import TaskCard from "./components/taskCard";
import AddTodoModal from "./components/addTodoModal";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    todos: state,
  };
};


function App(props) {
  // console.log("props", props);
  const [modal, setModal] = useState(false);
  
  return (
    <div className={modal?"App blur":"App"}>
      <h1>Todo List</h1>
      <div className="tasksCon">
        {props.todos.map((todo,index)=>(
         <TaskCard key={index} id={todo.id} date={todo.date} title={todo.title} state={todo.state} />
        ))}
        <AddTodoModal modal={(modal)=>setModal(modal)}/>
      </div>
    </div>
  );
}

export default connect(mapStateToProps)(App);
