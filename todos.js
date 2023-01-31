const emojis = ['😃', '😎', '😍', '😜', '🔥'];

export const todos = [
  { id: 1, text: 'Learn Blockchain Development', completed: false },
  { id: 2, text: 'Panaverse Assignments Completed', completed: false },
  { id: 3, text: 'Building dapps with Next.js 13', completed: false }
];

export function addTodo(text) {
  const newTodo = {
    id: todos.length + 1,
    text: `${text} ${emojis[Math.floor(Math.random() * emojis.length)]}`,
    completed: false
  };
  todos.push(newTodo);
}

