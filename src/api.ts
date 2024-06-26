import { task } from "./types";

export const getAllTodos = async (): Promise<task[]> => {
  const res = await fetch(`http://localhost:3001/tasks`, {
    cache: "no-store", //ssR
  });
  const todos = res.json();

  return todos;
};

export const addTodo = async (todo: task): Promise<task> => {
  const res = await fetch(`http://localhost:3001/tasks`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },body: JSON.stringify(todo),
  });
  const newTodo = res.json();

  return newTodo;
};

export const editTodo = async (id: string, newText: string): Promise<task> => {
  const res = await fetch(`http://localhost:3001/tasks/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },body: JSON.stringify({ text: newText }),
  });
  const updateTodo = res.json();

  return updateTodo;
};

export const deleteTodo = async (id: string): Promise<task> => {
  const res = await fetch(`http://localhost:3001/tasks/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const deleteTodo = res.json();

  return deleteTodo;
};