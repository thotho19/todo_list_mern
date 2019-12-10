import React , {useState} from 'react';
import './NewTodo.css';
const NewTodo = (props) => {
    const [enteredText , setEnteredText] =useState('')

    const sendDataToParaent = (event)=>{
        event.preventDefault();

        const newItem = {
            id: Math.random().toString(),
            text: enteredText
        }
        props.getData(newItem)
        setEnteredText('')
    }
    const textHandler = (event)=>{
        setEnteredText(event.target.value)
    }
    return (
        <form  onSubmit={sendDataToParaent}>
            <input type="text" value={enteredText} onChange={textHandler} placeholder="Add New Todo"/>
            <button type="submit"><i className="fa fa-plus"></i></button>
        </form>
    );
}
 
export default NewTodo;