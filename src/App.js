import React, { useState } from 'react';
import './style.css';

import TableToDo from './components/TableToDo';

import FormToDo from './components/FormToDo';

let todo = [
  { active: 'active', todo: 'travel to Brasil' },
  { active: 'inactive', todo: 'go to shopping mall' },
];
export default function App() {
  let [list, setList] = useState([]);
  let [toDo, setToDo] = useState();
  return (
    <>
      <FormToDo
        setValue={setToDo}
        setList={setList}
        inputValue={toDo}
        listToDo={list}
      />
      <TableToDo listToDo={list} />
    </>
  );
}
