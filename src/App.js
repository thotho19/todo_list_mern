import React , {useState} from 'react';
import PrintList from './components/PrintList/PrintList'
import NewTodo from './components/NewTodo/NewTodo'
import './App.css';

function App() {
  const [myTodoList , setTodoList] = useState([]);

  const reciveNewData = (newGoal)=>{
    setTodoList((prevData)=>{
      return prevData.concat(newGoal)
    });
  }

  const getDeleteId = (id)=>{
    let i = myTodoList.findIndex(listId => listId.id ===id)
    myTodoList.splice(i, 1)
    setTodoList([...myTodoList])
    //why [...myTodList] ? 
    //because myTodList now gets a different reference
  }
  return (
    <div className="container">
	<h1>To-Do List</h1>
      <NewTodo getData={reciveNewData}/>
      <PrintList mylist={myTodoList} delete={getDeleteId}/>
    </div>
  );
}

export default App;
