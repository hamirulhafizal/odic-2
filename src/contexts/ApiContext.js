/* eslint-disable arrow-body-style */
/* eslint-disable camelcase */
import PropTypes from 'prop-types';
import { createContext, useEffect, useReducer } from 'react';

// reducer - state management
import { LOGIN, LOGOUT } from 'store/actions';
import accountReducer from 'store/accountReducer';

// project imports
import Loader from 'components/ui-component/Loader';
// import axios from 'utils/axios';

import { BACKEND_PATH } from 'config';
import axiosInstance from './axios';

//next
import { useRouter } from 'next/router';
import user from 'store/slices/user';
import axios from 'axios';

const initialState = {
  isLoggedIn: false,
  isInitialized: false,
  user: null
};

// ==============================|| JWT CONTEXT & PROVIDER ||============================== //
const ApiContext = createContext(null);

export const ApiProvider = ({ children }) => {
  const [state, dispatch] = useReducer(accountReducer, initialState);
  const history = useRouter();

  useEffect(() => {
    if (state.user == null) init();
  }, [state.user]);

  const init = () => {
    try {
      const serviceToken = window.localStorage.getItem('access');
      if (serviceToken) {
        if (window.localStorage.getItem('users') !== undefined && window.localStorage.getItem('users') !== null) {
          const localUsers = window.localStorage.getItem('users');
          let users = JSON.parse(localUsers);
          dispatch({
            type: LOGIN,
            payload: {
              isLoggedIn: true,
              user: users
            }
          });
        }
      } else {
        dispatch({
          type: LOGOUT
        });
      }
    } catch (err) {
      dispatch({
        type: LOGOUT
      });
    }
  };

  const login = async (email, password) => {
    const response = await axios
      .post(`${BACKEND_PATH}/api/auth/login`, {
        email,
        password
      })
      .then(async (res) => {
        if (typeof window !== 'undefined') {
          localStorage.setItem('access', res?.data?.token);
          localStorage.setItem('refresh', res?.data?.token);
          axiosInstance.defaults.headers['Authorization'] = 'Bearer ' + localStorage.getItem('access');
        }

        // login(email, password, user_name);
        // updateProfile(user_name, { firstName: first_name, lastName: last_name });

        // await getProfile(res?.data.username);

        const {
          token,
          id,
          name,
          email,
          email_verified_at,
          phone_no,
          profile_image,
          bank_account,
          bank_name,
          username,
          identity_card,
          fullname,
          identity_card_no,
          verified_status,
          referrel_url,
          created_at,
          updated_at
        } = res?.data;

        const users = {
          token,
          id,
          name,
          email,
          email_verified_at,
          phone_no,
          profile_image,
          bank_account,
          bank_name,
          username,
          identity_card,
          fullname,
          identity_card_no,
          verified_status,
          referrel_url,
          created_at,
          updated_at
        };
        let usersData = JSON.stringify(users);
        localStorage.setItem('users', usersData);

        dispatch({
          type: LOGIN,
          payload: {
            isLoggedIn: true,
            user: users
          }
        });

        // dispatch({
        //   payload: {
        //     isLoggedIn: true,
        //     user: users
        //   }
        // });

        history.push('/board');

        return res;
      })
      .catch((err) => {
        console.log('err-->', err);

        return err;
      });

    return response;
  };

  const register = async ({ email, name, password }) => {
    const password_confirmation = password;
    const respond = await axios
      .post(`${BACKEND_PATH}/api/auth/register`, {
        email,
        name,
        password,
        password_confirmation
      })
      .then((res) => {
        const { token, email, name, phone_no, updated_at, created_at, id, username, referrel_url, verified_status, roles } = res;

        history.push('/checkmail');

        return res;
      })
      .catch((err) => {
        console.log('err', err);

        history.push('/register');
        return err;
      });
    return respond;
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

  const forgetPassword = async (email, password) => {
    const response = await axios
      .post(`${BACKEND_PATH}/api/auth/forgot-password?email=${email}`, {
        password
      })
      .then(async (res) => {
        if (typeof window !== 'undefined') {
          axiosInstance.defaults.headers['Authorization'] = 'Bearer ' + localStorage.getItem('access');
          localStorage.setItem('access', res?.token);
          localStorage.setItem('refresh', res?.token);
        }

        await getProfile(res?.username);

        dispatch({
          type: LOGIN,
          payload: {
            isLoggedIn: true
          }
        });

        history.push('/board');

        return res;
      })
      .catch((err) => {
        console.log('err-->', err);

        return err;
      });

    return response;
  };

  const resetPassword = (email) => console.log(email);

  const getProfile = async (username) => {
    console.log(username);
    axiosInstance.defaults.headers['Authorization'] = 'Bearer ' + localStorage.getItem('access');
    const response = await axiosInstance.get(`${BACKEND_PATH}/api/username/${username}`).then((res) => {
      if (typeof window !== 'undefined') {
        const users = JSON.stringify(res.data);
        localStorage.setItem('users', users);

        dispatch({
          payload: {
            isLoggedIn: true,
            user: users
          }
        });

        init();
      }

      return res;
    });
    return response;
  };

  const updateProfile = async (username, formData) => {
    const response = await axiosInstance.post(`${BACKEND_PATH}/api/user-profile/edit/${username}`, formData).then((res) => {
      if (typeof window !== 'undefined') {
        const users = JSON.stringify(res.data[0]);
        localStorage.setItem('users', users);

        console.log('users--->', users);

        dispatch({
          payload: {
            isLoggedIn: true,
            user: users
          }
        });

        init();
      }
      return res;
    });
    return response;
  };

  if (state.isInitialized !== undefined && !state.isInitialized) {
    return <Loader />;
  }

  return (
    <ApiContext.Provider value={{ ...state, login, logout, register, resetPassword, updateProfile, getProfile, forgetPassword }}>
      {children}
    </ApiContext.Provider>
  );
};

ApiProvider.propTypes = {
  children: PropTypes.node
};

export default ApiContext;
