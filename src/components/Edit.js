import React, { useEffect, useState } from 'react';
import { useUserContext } from './UserContext';
import { useParams, useNavigate } from 'react-router-dom';

const Edit = () => {
  const { id } = useParams();
  const { state, dispatch } = useUserContext();
  const navigate = useNavigate();
  const user = state.users.find(user => user.id === parseInt(id));
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');

  useEffect(() => {
    if (user) {
      setName(user.name);
      setEmail(user.email);
      setUsername(user.username);
    }
  }, [user]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newUser = { id: Date.now(), name, email, username };

    if (user) {
 
      const updatedUser = { id: parseInt(id), name, email, username };
      dispatch({ type: 'UPDATE_USER', payload: updatedUser });
    } else {

      dispatch({ type: 'ADD_USER', payload: newUser });
    }

    navigate('/'); 
  };

  return (
    <div className='container p-3'>
      <h2>{user ? 'Edit User' : 'Add User'}</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label>Name</label>
          <input
            type="text"
            className="form-control"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label>Email</label>
          <input
            type="email"
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label>Username</label>
          <input
            type="text"
            className="form-control"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-success">
          {user ? 'Update User' : 'Add User'}
        </button>
      </form>
    </div>
  );
};

export default Edit;
