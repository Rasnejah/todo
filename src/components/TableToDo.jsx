import React from 'react';

export default function TableToDo({ listToDo }) {
  return (
    <table>
      <tr>
        <th>Active</th>
        <th>To Do</th>
        <th>actions</th>
      </tr>
      {listToDo.map((task) => {
        return (
          <tr>
            <td>{task.active}</td>
            <td>{task.todo}</td>
            <td>edit | delet</td>
          </tr>
        );
      })}
    </table>
  );
}
