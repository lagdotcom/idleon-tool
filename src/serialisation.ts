import { TodoState } from "./state/todo";

const todoSave = "idleon-todo";

export function saveTodo(todo: TodoState) {
  localStorage.setItem(todoSave, JSON.stringify(todo));
}

export function loadTodo(): TodoState {
  const todo = localStorage.getItem(todoSave);
  if (!todo) return {};

  return JSON.parse(todo);
}
