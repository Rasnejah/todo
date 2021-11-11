import React from 'react';

export default function FormToDo(props) {
  function addToDo() {
    let todo = props.inputValue;
    let task = { active: 'active', todo: todo };
    let tasks = props.listToDo;
    tasks.push(task);
    props.setList(tasks);
    props.setValue('');
  }
  return (
    <>
      <div>
        <h1>To Do</h1>
        <input type="text" onChange={(e) => props.setValue(e.target.value)} />
        <button onClick={addToDo}>Add</button>
      </div>
      <hr />
    </>
  );
}
