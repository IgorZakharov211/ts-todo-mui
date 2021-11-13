import React from 'react';
import Container from '@mui/material/Container';
import TodoForm from '../todoform/TodoForm';

function Content(){
  return (
    <Container maxWidth="lg">
      <main>
        <TodoForm />
      </main>
    </Container>
  )
}

export default Content;