import TodoList from '../TodoList';
import { useEffect } from 'react';
import { todos } from '../todos';

function Home() {
  useEffect(() => {
    // re-render the TodoList component whenever the todos array changes
    console.log('Todos changed');
  }, [todos]); // the second argument specifies the dependencies for this effect


  return (
    <div>
      
      <title>Todo List</title>
      <h1>Todo List App</h1>
      <TodoList />
    </div>
  );
}

export default Home;