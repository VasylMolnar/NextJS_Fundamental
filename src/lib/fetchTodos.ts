export default async function fetchTodos() {
  const res = await fetch(`http://localhost:3500/todos`);

  const todos: Todo[] = await res.json();

  console.log(todos);

  return todos;
}
