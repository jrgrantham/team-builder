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
};

function App() {

  const [memberList, setMemberList] = useState(initialMembers);
  const [memberForm, setMemberForm] = useState(initialForm);

  const onTitleChange = e => {
    setMemberForm({
      title: e.target.value,
      firstName: memberForm.firstName,
      surname: memberForm.surname,
    })
  }

  const onFirstNameChange = e => {
    setMemberForm({
      title: memberForm.title,
      firstName: e.target.value,
      surname: memberForm.surname,
    })
  }

  const onSurnameChange = e => {
    setMemberForm({
      title: memberForm.title,
      firstName: memberForm.firstName,
      surname: e.target.value,
    })
  }

  const formSubmit = e => {
    e.preventDefault();
    const newMember = {
      id: uuid(),
      title: memberForm.title,
      firstName: memberForm.firstName,
      surname: memberForm.surname,
    };
    const newMemberList = memberList.concat(newMember);
    setMemberList(newMemberList);
    setMemberForm(initialForm);
  }

  return (
  
    <div className="App">
      <MemberForm 
        onTitleChange={onTitleChange}
        onFirstNameChange={onFirstNameChange}
        onSurnameChange={onSurnameChange}
        formSubmit={formSubmit}
      />
      {
        memberList.map(member => (
        <p key={member.id}>
          {member.title} {member.firstName} {member.surname}
        </p>
        ))
      }
    </div>
  );
};

export default App;

function MemberForm(props) {

  const { onTitleChange, onFirstNameChange, onSurnameChange, formSubmit,  } = props;

  return (
    <form>
      <label htmlFor='titleInput'> Title </label>
      <input
        // value=
        id='titleInput' 
        type='text'
        onChange={onTitleChange}
      />

      <label htmlFor='firstNameInput'> First Name </label>
      <input 
        id='firstNameInput' 
        type='text'
        onChange={onFirstNameChange}
      />

      <label htmlFor='surnameInput'> Surname </label>
      <input 
        id='surnameInput' 
        type='text'
        onChange={onSurnameChange}
      />

      <button onClick={formSubmit}>
        Submit
      </button>
    </form>
  )
}