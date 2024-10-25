import React from 'react';
import { useUserContext } from './UserContext';
import { useParams } from 'react-router-dom';

const View = () => {
  const { id } = useParams();
  const { state } = useUserContext();
  const user = state.users.find(user => user.id == (id));

  if (!user) return <div>User not found</div>;

  return (
    <div>
      <h2>User Details</h2>
      <p><strong>Name:</strong> {user.name}</p>
      <p><strong>Email:</strong> {user.email}</p>
      <p><strong>Username:</strong> {user.username}</p>
      <img src={`https://via.placeholder.com/150`} alt={user.name} />
    </div>
  );
};

export default View;
