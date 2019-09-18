import React, { useState } from 'react';
import './App.css';
import uuid from 'uuid';

const initialMembers = [
  { id: uuid(), title: 'Mr', firstName: 'James', surname: 'Grantham' }
];

const initialForm = {
  title: '',
  firstName: '',
  surname: '',
}

function App() {

  const [memberList, setMemberList] = useState(initialMembers);
  const [memberForm, setMemberForm] = useState();

  return (
    <div className="App">
      <MemberForm />

      {memberList.map(member => (
        <p key={member.id}>
          {member.title} {member.firstName} {member.surname}
        </p>
      ))}
    </div>
  );
};

export default App;

function MemberForm(props) {


  return (
    <form>
      <label htmlFor='titleInput'> Title </label>
      <input id='titleInput' type='text'/>
      <label htmlFor='firstNameInput'> First Name </label>
      <input id='firstNameInput' type='text'/>
      <label htmlFor='surnameInput'> Surname </label>
      <input id='surnameInput' type='text'/>

      <button>
        Submit
      </button>
    </form>
  )
}