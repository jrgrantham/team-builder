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

  const { Title, firstName, surname } = props;

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