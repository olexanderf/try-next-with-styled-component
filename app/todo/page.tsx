'use client';
import React, { useEffect, useState } from 'react';
import { MainPageTitle, TheContainer } from '../components/TheMainStyles.styled';
import { TodoContainer, TodoLabel } from './TodoPage.styled';

interface todoDataType {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

export default function TodoPage() {
  const [todoData, setTodoData] = useState<todoDataType[]>([]);

  async function getTodoData() {
    const response = await fetch('https://jsonplaceholder.typicode.com/users/1/todos');
    setTodoData(await response.json());
  }

  useEffect(() => {
    getTodoData();
  }, []);

  return (
    <TheContainer>
      <MainPageTitle>Todo`s page</MainPageTitle>
      {todoData.length
        ? todoData.map((todo: todoDataType) => {
            return (
              <TodoContainer key={todo.id}>
                <input
                  type="checkbox"
                  checked={todo.completed}
                  onChange={() => {
                    if (todoData.length) {
                      setTodoData(
                        todoData.map((el) => {
                          if (el.id === todo.id) return { ...el, completed: !el.completed };
                          return { ...el };
                        })
                      );
                    }
                  }}
                ></input>
                <TodoLabel $completed={todo.completed ? 'blue' : ''}>{todo.title}</TodoLabel>
              </TodoContainer>
            );
          })
        : ''}
    </TheContainer>
  );
}
