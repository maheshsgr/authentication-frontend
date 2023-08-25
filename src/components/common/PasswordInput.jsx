import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import { EyeFill, EyeSlashFill } from 'react-bootstrap-icons';
import InputGroup from 'react-bootstrap/InputGroup';

export default function PasswordInput(props) {
  const {
    value,
    onChange,
    label = 'Password',
    placeholder = 'Password',
  } = props;
  const [showPass, setShowPass] = useState(false);

  const toggleShowPassword = () => {
    setShowPass(!showPass);
  };

  return (
    <div>
      <Form.Label>{label}</Form.Label>
      <InputGroup className="mb-3">
        <Form.Control
          type={showPass ? 'text' : 'password'}
          placeholder={placeholder}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          required
        />
        <InputGroup.Text onClick={toggleShowPassword} role="button">
          {showPass ? <EyeFill /> : <EyeSlashFill />}
        </InputGroup.Text>
      </InputGroup>
    </div>
  );
}
