import React, { useEffect, useState } from 'react';
import { Amplify, API, graphqlOperation } from 'aws-amplify';
import { createMyTable2 } from '../graphql/mutations';
import { listMyTable2s } from '../graphql/queries';

import awsExports from "../aws-exports";
Amplify.configure(awsExports);

interface Todo {
  id?: string;
  title: string;
  gender: string;
  address: string;
  age: number;
}

const initialState: Todo = { title: '', gender: '', address:'', age: 0 };

const ToDo2: React.FC = () => {
  const [formState, setFormState] = useState<Todo>(initialState);
  const [todos, setTodos] = useState<Todo[]>([]);

  useEffect(() => {
    fetchTodos();
  }, []);

  function setInput(key: keyof Todo, value: string) {
    setFormState({ ...formState, [key]: value });
  }

  async function fetchTodos() {
    try {
      const todoData = await API.graphql(graphqlOperation(listMyTable2s)) as any;
      const todos: Todo[] = todoData.data.listMyTable2s.items;
      setTodos(todos);
    } catch (err) {
      console.log('error fetching todos');
    }
  }

  async function addTodo() {
    try {
      if (!formState.title || !formState.gender || !formState.address || !formState.age) return;
      const todo: Todo = { ...formState };
      setTodos([...todos, todo]);
      setFormState(initialState);
      await API.graphql(graphqlOperation(createMyTable2, { input: todo }));
    } catch (err) {
      console.log('error creating todo:', err);
    }
  }

  return (
    <div>
      <h2>Amplify Todos</h2>
      <input
        onChange={(event) => setInput('title', event.target.value)}
        // style={styles.input}
        value={formState.title}
        placeholder="Title"
      />
      <input
        onChange={(event) => setInput('gender', event.target.value)}
        // style={styles.input}
        value={formState.gender}
        placeholder="Gender"
      />
      <input
        onChange={(event) => setInput('address', event.target.value)}
        // style={styles.input}
        value={formState.address}
        placeholder="Address"
      />
      <input
        onChange={(event) => setInput('age', event.target.value)}
        // style={styles.input}
        value={formState.age}
        placeholder="Age"
      />
      <button onClick={addTodo}>Create Todo</button>
      {
        todos.map((todo, index) => (
          <div key={todo.id ? todo.id : index}>
            <p >{todo.title}</p>
            <p>{todo.gender}</p>
            <p>{todo.address}</p>
            <p>{todo.age}</p>
          </div>
        ))
      }
    </div>
  );
};

export default ToDo2;
