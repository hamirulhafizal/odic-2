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
import user from 'store/slices/user';

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

// ==============================|| JWT CONTEXT & PROVIDER ||============================== //
const JWTContext = createContext(null);

export const JWTProvider = ({ children }) => {
  const [state, dispatch] = useReducer(accountReducer, initialState);
  const history = useRouter();

  useEffect(() => {
    const init = async () => {
      try {
        const serviceToken = window.localStorage.getItem('access');

        if (serviceToken) {
          if (window.localStorage.getItem('users') !== undefined && window.localStorage.getItem('users') !== null) {
            const localUsers = window.localStorage.getItem('users');
            users = JSON.parse(localUsers);
          }

          dispatch({
            type: LOGIN,
            payload: {
              isLoggedIn: true,
              user: users
            }
          });
        } else {
          dispatch({
            type: LOGOUT
          });
        }
      } catch (err) {
        // console.error(err);
        dispatch({
          type: LOGOUT
        });
      }
    };

    init();
  }, []);

  const login = async (email, password) => {
    const response = await axiosInstance
      .post(`${BACKEND_PATH}/api/v1/user/login`, {
        email,
        password
      })
      .then(async (res) => {
        if (typeof window !== 'undefined') {
          axiosInstance.defaults.headers['Authorization'] = 'JWT ' + localStorage.getItem('access');
          localStorage.setItem('access', res?.data?.access);
          localStorage.setItem('refresh', res?.data?.refresh);
        }

        await getProfile(res?.data?.user_name);

        dispatch({
          type: LOGIN,
          payload: {
            isLoggedIn: true
          }
        });

        history.push('/dashboard');

        return res;
      });
  };

  const register = async (email, password, first_name, last_name) => {
    // todo: this flow need to be recode as it not verified
    const user_name = first_name + last_name;
    const response = await axiosInstance
      .post(`${BACKEND_PATH}/api/v1/user/register`, {
        email,
        user_name,
        first_name,
        password
      })
      .then((res) => {
        console.log(res);

        login(email, password, user_name);

        history.push('/login');
        return res;
      });
  };

  const logout = async () => {
    // const response = await axiosInstance.post(`${BACKEND_PATH}/api/v1/user/logout`)
    // .then((res) => {
    //   history.push('/login');
    //   return res;
    // });

    // let off = response.data;

    dispatch({ type: LOGOUT });

    window.localStorage.removeItem('access');
    window.localStorage.removeItem('refresh');
    window.localStorage.removeItem('users');
  };

  const resetPassword = (email) => console.log(email);

  const getProfile = async (user_name) => {
    axiosInstance.defaults.headers['Authorization'] = 'JWT ' + localStorage.getItem('access');
    const response = await axiosInstance.get(`${BACKEND_PATH}/api/v1/profile/${user_name}`).then((res) => {
      if (typeof window !== 'undefined') {
        const users = JSON.stringify(res.data);
        localStorage.setItem('users', users);

        dispatch({
          payload: {
            isLoggedIn: true,
            users: users
          }
        });
      }

      return res;
    });
  };

  const updateProfile = async (user_name, firstName, lastName, phone, photo, email) => {
    const response = await axiosInstance
      .put(`${BACKEND_PATH}/api/v1/profile/${user_name}`, {
        firstName: firstName,
        lastName: lastName,
        email: email,
        phone: phone,
        photo: photo.file
      })
      .then((res) => {
        console.log('res', res);

        if (typeof window !== 'undefined') {
          const users = JSON.stringify(res.data);
          localStorage.setItem('users', users);

          dispatch({
            payload: {
              isLoggedIn: true,
              users
            }
          });
        }

        return res;
      });
  };

  if (state.isInitialized !== undefined && !state.isInitialized) {
    return <Loader />;
  }

  return (
    <JWTContext.Provider value={{ ...state, login, logout, register, resetPassword, updateProfile, getProfile }}>
      {children}
    </JWTContext.Provider>
  );
};

JWTProvider.propTypes = {
  children: PropTypes.node
};

export default JWTContext;
