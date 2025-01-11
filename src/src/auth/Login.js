import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { loginUsers } from '../Redux/slice/users';
import LogoImage from '../assets/Logo.png';

const initialValue = {
  username: '',
  password: '',
};
const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [values, setValues] = useState(initialValue);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await dispatch(loginUsers(values));
      if (res.payload.user) {
        localStorage.setItem(`ggscf_user_token`, res.payload.token);
        localStorage.setItem('ggscf_user_type', res.payload.user.type);
        localStorage.setItem('ggscf_user_id', res.payload.user._id);

        navigate(`/dashboard_${res.payload.user.type}/profile`);
      }
      console.log('res', res);
    } catch (error) {
      console.log(error);
    }
    console.log(values);
  };

  useEffect(() => {
    if (localStorage.getItem('ggscf_user_token')) {
      navigate(`/dashboard_${localStorage.getItem('ggscf_user_type')}/profile`, { replace: true });
    }
  }, []);
  return (
    <LoginMain>
      <LoginSec>
        <LeftDiv>
          <img width="50%" src={LogoImage} alt="" />
          <h1>Welcome To Login</h1>
        </LeftDiv>
        <LoginDiv>
          <StyledForm component="form" onSubmit={handleSubmit}>
            <h2>login</h2>
            <input name="username" type="text" placeholder="User Name" onChange={handleChange} />
            <input name="password" type="password" placeholder="password" onChange={handleChange} />
            <button type="submit">login</button>
          </StyledForm>
        </LoginDiv>
      </LoginSec>
    </LoginMain>
  );
};

export default Login;

const LoginMain = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 600px) {
    height: 120vh;
  }
`;

const LoginSec = styled.div`
  width: 75%;
  box-shadow: 3px 10px 44px 10px rgba(15, 15, 15, 0.33);
  -webkit-box-shadow: 3px 10px 44px 10px rgba(15, 15, 15, 0.33);
  -moz-box-shadow: 3px 10px 44px 10px rgba(15, 15, 15, 0.33);
  height: 65vh;

  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  display: grid;
  grid-template-columns: repeat(2, 1fr);

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
    height: 80vh;
    align-items: flex-start;
  }
`;

const LeftDiv = styled.div`
  background-image: linear-gradient(to bottom right, #1c1b2a, #1c1b3b);
  z-index: 22;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  color: white;
  gap: 1rem;
  height: 65vh;

  animation-timing-function: ease;
  position: relative;
  animation: LeftDiv 2s;

  @keyframes LeftDiv {
    from {
      left: 100%;
    }

    to {
      left: 0;
    }
  }

  @media (max-width: 600px) {
    height: 30vh;
    h1 {
      font-size: 18px;
    }
  }

  h1 {
    font-size: 26px;
    font-weight: 600;
    letter-spacing: 1.5px;
  }
  p {
    font-size: 12px;
    font-weight: 400;
  }
  button {
    border: 1px solid white;
    border-radius: 8px;
    padding: 8px 12px;
  }
`;

const LoginDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0px 20px;
  height: 65vh;

  animation-timing-function: linear;
  position: relative;
  animation: LoginDiv 2s;

  @keyframes LoginDiv {
    from {
      right: 100%;
    }

    to {
      right: 0;
    }
  }

  @media (max-width: 600px) {
    height: 30vh;
  }
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;

  width: 100%;
  gap: 1.5rem;

  h2 {
    font-size: 22px;
    font-weight: 600;
    color: #1c1b3b;
  }
  @media (max-width: 600px) {
    h2 {
      font-size: 22px;
    }
  }
  button,
  input {
    width: 100%;
    border-radius: 10px;
    outline: none;

    border: 1px solid rgba(220, 220, 220);

    padding: 12px 10px;

    &:focus {
      border: 1px solid #48afff;
    }
  }
  button {
    cursor: pointer;
    background-image: linear-gradient(to right, #48afff, #304584);
    color: white;
    font-size: 18px;
    letter-spacing: 2px;
    font-weight: 700;

    &:focus {
      border: none;
    }
  }

  p {
    font-size: 14px;
    color: red;
  }
`;
