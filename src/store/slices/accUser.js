// action - state management
import { createSlice } from '@reduxjs/toolkit';
import axiosInstance from 'contexts/axios';
import { LOGIN, LOGOUT, REGISTER } from './actions';


import { BACKEND_PATH } from 'config';


// ==============================|| ACCOUNT REDUCER ||============================== //

const initialState = {
  isLoggedIn: false,
  isInitialized: false,
  user: null
};

const slice = createSlice({
  name: 'account',
  initialState,
  reducers: {
    // HAS ERROR
    hasError(state, action) {
      state.error = action.payload;
    }
  }
});

// Reducer
export default slice.reducer;

// ----------------------------------------------------------------------

export const login = async (email, password) => {
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

      // await getProfile(res?.data?.user_name);

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



const accountReducer = (state = initialState, action) => {
  console.log('action', action);

  switch (action.type) {
    case REGISTER: {
      const { user } = action.payload;
      return {
        ...state,
        user
      };
    }
    case LOGIN: {
      const { user } = action.payload;
      return {
        ...state,
        isLoggedIn: true,
        isInitialized: true,
        user
      };
    }
    case LOGOUT: {
      return {
        ...state,
        isInitialized: true,
        isLoggedIn: false,
        user: null
      };
    }
    default: {
      return { ...state };
    }
  }
};

export default accountReducer;
