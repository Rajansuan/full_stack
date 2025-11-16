import React from 'react';

function Todos(props) {
  return (
    <>
    {props.todos.map((todo, index) => (
      <div key={index} className="border p-4 mb-4 rounded shadow">
        <h2 className="text-xl font-semibold mb-2">{todo.title}</h2>
        <p className="text-gray-700">{todo.desc}</p>
      </div>
    ))}
    </>
  )
}

export default Todos