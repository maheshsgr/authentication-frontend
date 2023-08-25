import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';

import axios from '../utils/axios';
import { storeToken } from '../utils/misc';
import PasswordInput from '../components/common/PasswordInput';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [err, setErr] = useState('');
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const hanldeSubmit = async (e) => {
    e.preventDefault();

    const payload = { email, password };

    setErr('');
    setLoading(true);

    try {
      const res = await axios.post('/login', payload);
      storeToken(res.data.token);
      axios.defaults.headers['Authorization'] = `Bearer ${res.data.token}`;
      setLoading(false);

      navigate('/');
    } catch (err) {
      setErr(err?.response?.data?.message || 'Something went wrong');
      setLoading(false);
    }
  };

  return (
    <div className="p-5">
      <div className="container custom-card">
        <Form onSubmit={hanldeSubmit}>
          <Form.Group className="mb-3">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </Form.Group>

          <PasswordInput value={password} onChange={setPassword} />
          <Button variant="primary" type="submit" disabled={loading}>
            Submit
          </Button>
          {err && <p className="text-danger mb-0 mt-3">{err}</p>}
        </Form>
        <div className="mt-3">
          <p className="mb-0 text-secondary">
            Don't have an account? <Link to="/signup">Sign Up</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
