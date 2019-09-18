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
      {memberList.map(member => (
        <p key={member.id}>
          {member.title} {member.firstName} {member.surname}
        </p>
      ))}
    </div>
  );
};

export default App;
