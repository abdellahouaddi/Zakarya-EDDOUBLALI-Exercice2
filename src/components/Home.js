import React from 'react';
import { useUserContext } from './UserContext';
import { Link } from 'react-router-dom';

const Home = () => {
  const { state, dispatch } = useUserContext();

  const handleDelete = (id) => {
    dispatch({ type: 'DELETE_USER', payload: id });
  };

  return (
    <div className="container mt-5">
      <h2>User List</h2>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Username</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {state.users.length > 0 ? (
            state.users.map(user => (
              <tr key={user.id}>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.username}</td>
                <td>
                  <Link to={`/view/${user.id}`} className="btn btn-info btn-sm me-2">View</Link>
                  <Link to={`/edit/${user.id}`} className="btn btn-warning btn-sm me-2">Edit</Link>
                  <button onClick={() => handleDelete(user.id)} className="btn btn-danger btn-sm">Delete</button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4" className="text-center">No users found.</td>
            </tr>
          )}
        </tbody>
      </table>
      <Link to="/edit/new" className="btn btn-primary">Add User</Link>
    </div>
  );
};

export default Home;
