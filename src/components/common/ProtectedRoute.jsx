import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function ProtectedRoute(props) {
  const navigate = useNavigate();

  useEffect(() => {
    const accessToken = window.localStorage.getItem('access_token');
    if (!accessToken) navigate('/login');
  }, []);

  return <>{props.children}</>;
}
