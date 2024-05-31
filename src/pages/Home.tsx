import React from 'react';
import Counter from '../components/Counter';
import UserDataForm from '../components/UserDataForm';
import RichTextEditor from '../components/RichTextEditor';

const Home: React.FC = () => {
  return (
    <div>
      <Counter />
      <UserDataForm />
      <RichTextEditor />
    </div>
  );
};

export default Home;
