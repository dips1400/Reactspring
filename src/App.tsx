import React from 'react';
import { Container, Grid } from '@mui/material';
import Counter from './components/Counter';
import RichTextEditor from './components/RichTextEditor';
import UserDataForm from './components/UserDataForm';
import DisplayData from './components/DisplayData';
import FluidAnimation from './components/FluidAnimation';

const App: React.FC = () => {
  return (
    <Container>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <Counter />
        </Grid>
        <Grid item xs={6}>
          <RichTextEditor />
        </Grid>
        <Grid item xs={6}>
          <UserDataForm />
        </Grid>
        <Grid item xs={6}>
          <DisplayData />
        </Grid>
        <Grid item xs={16} style={{marginTop:"6rem"}}>
          <FluidAnimation />
        </Grid>
      </Grid>
    </Container>
  );
};

export default App;
