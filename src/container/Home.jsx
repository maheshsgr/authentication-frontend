import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import axios from '../utils/axios';

export default function Home() {
  const [userList, setUserList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState('');
  const navigate = useNavigate();

  const handleLogout = () => {
    window.localStorage.removeItem('access_token');
    navigate('/login');
  };

  const getData = async () => {
    setLoading(true);
    setErr('');

    try {
      const res = await axios.get('/user');
      setUserList(res.data.user);
      setLoading(false);
    } catch (err) {
      if (err?.response?.status === 401) {
        handleLogout();
      }
      setErr(err?.response?.data?.message || 'Something went wrong');
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);
  console.log('userList', userList);
  return (
    <div className="container">
      <div className="d-flex justify-content-between align-items-center">
        <h1 className="mt-3">User List</h1>
        <button className="btn btn-info" onClick={handleLogout}>
          Logout
        </button>
      </div>
      <div className="text-center">
        {loading && <h1>Loading...</h1>}

        {err && <p className="text-danger">{err}</p>}
      </div>
      <div className="ps-4 mt-4">
        {userList?.map((val, i) => (
          <div key={i}>
            <p>{val.email}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
