/* eslint-disable arrow-body-style */
/* eslint-disable camelcase */
import PropTypes from 'prop-types';
import { createContext, useEffect, useReducer } from 'react';

// third-party
import { Chance } from 'chance';
import jwtDecode from 'jwt-decode';
import jwt from 'jsonwebtoken';
import { JWT_API } from 'config';

// reducer - state management
import { LOGIN, LOGOUT } from 'store/actions';
import accountReducer from 'store/accountReducer';

// project imports
import Loader from 'components/ui-component/Loader';
import axios from 'utils/axios';

import { BACKEND_PATH } from 'config';
import axiosInstance from './axios';

//next
import { useRouter } from 'next/router';

// constant
const JWT_SECRET = JWT_API.secret;
const JWT_EXPIRES_TIME = JWT_API.timeout;

const chance = new Chance();
let users = [
  {
    username: '5e86809283e28b96d2d38537',
    email: 'info@codedthemes.com',
    password: '123456',
    password2: '123456',
    first_name: 'JWT User'
  }
];
// constant
const initialState = {
  isLoggedIn: false,
  isInitialized: false,
  user: null
};

const verifyToken = (serviceToken) => {
  if (!serviceToken) {
    return false;
  }
  const decoded = jwtDecode(serviceToken);

  return decoded.exp > Date.now() / 1000;
};

const setSession = (serviceToken) => {
  if (serviceToken) {
    localStorage.setItem('serviceToken', serviceToken);
    axios.defaults.headers.common.Authorization = `Bearer ${serviceToken}`;
  } else {
    localStorage.removeItem('serviceToken');
    delete axios.defaults.headers.common.Authorization;
  }
};

// ==============================|| JWT CONTEXT & PROVIDER ||============================== //
const JWTContext = createContext(null);

export const JWTProvider = ({ children }) => {
  const [state, dispatch] = useReducer(accountReducer, initialState);
  const router = useRouter();

  useEffect(() => {
    const init = async () => {
      try {
        const serviceToken = window.localStorage.getItem('access');

        if (serviceToken) {
          if (window.localStorage.getItem('users') !== undefined && window.localStorage.getItem('users') !== null) {
            const localUsers = window.localStorage.getItem('users');
            users = JSON.parse(localUsers);
          }

          // const jwData = jwt.verify(serviceToken, JWT_SECRET);

          // const { userId } = jwData;
          // const user = users.find((_user) => _user.id === userId);

          // if (!user) {
          //   return;
          // }

          dispatch({
            type: LOGIN,
            payload: {
              isLoggedIn: true,
              user: {
                email: users.email,
                // id: user.id,
                name: users.name
              }
            }
          });
        } else {
          dispatch({
            type: LOGOUT
          });
        }
      } catch (err) {
        console.error(err);
        dispatch({
          type: LOGOUT
        });
      }
    };

    init();
  }, []);

  const login = async (email, password) => {
    const user = {
      username: 'username',
      email: 'email',
      name: 'name'
    };

    const response = await axiosInstance
      .post(`${BACKEND_PATH}/api/v1/login`, {
        email,
        password
      })
      .then((res) => {
        // const token = res.data.access;

        // console.log(token);

        if (typeof window !== 'undefined') {
          localStorage.setItem('access', res?.data?.access);
          localStorage.setItem('refresh', res?.data?.refresh);

          users = JSON.stringify(user);

          localStorage.setItem('users', users);
        }

        dispatch({
          type: LOGIN,
          payload: {
            isLoggedIn: true,
            user
          }
        });

        return res;
      });
    if (window.localStorage.getItem('users') !== undefined && window.localStorage.getItem('users') !== null) {
      const localUsers = window.localStorage.getItem('users');
      users = JSON.parse(localUsers);
    }

    // const user = {
    //   username: userFound.id,
    //   email: userFound.email,
    //   name: userFound.name
    // };

    // setSession(token);
  };

  const register = async (email, password, first_name, last_name) => {
    const password2 = password;
    // todo: this flow need to be recode as it not verified
    const username = chance.bb_pin();
    // const response = await axios.post('/api/account/register', {
    //   id,
    //   email,
    //   password,
    //   firstName,
    //   lastName
    // });
    const response = await axiosInstance
      .post(`${BACKEND_PATH}/api/v1/auth/register`, {
        username,
        email,
        first_name,
        last_name,
        password,
        password2
      })
      .then((res) => {
        history.push('/login');
        console.log(res);

        login({
          email,
          password
        });
        return res;
      });

    let users = response.data;

    console.log('users', users);

    if (window.localStorage.getItem('users') !== undefined && window.localStorage.getItem('users') !== null) {
      const localUsers = window.localStorage.getItem('users');
      users = [
        ...JSON.parse(localUsers),
        {
          username,
          email,
          password,
          name: `${first_name} ${last_name}`
        }
      ];
    }

    window.localStorage.setItem('users', JSON.stringify(users));
  };

  const logout = () => {
    setSession(null);
    dispatch({ type: LOGOUT });
    window.localStorage.removeItem('access');
    window.localStorage.removeItem('refresh');
    window.localStorage.removeItem('users');
  };

  const resetPassword = (email) => console.log(email);

  const updateProfile = () => {};

  if (state.isInitialized !== undefined && !state.isInitialized) {
    return <Loader />;
  }

  return <JWTContext.Provider value={{ ...state, login, logout, register, resetPassword, updateProfile }}>{children}</JWTContext.Provider>;
};

JWTProvider.propTypes = {
  children: PropTypes.node
};

export default JWTContext;
