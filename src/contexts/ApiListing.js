/* eslint-disable arrow-body-style */
/* eslint-disable camelcase */

// reducer - state management
import { LOGIN, LOGOUT } from 'store/actions';

// project imports
import Loader from 'components/ui-component/Loader';

import { BACKEND_PATH } from 'config';
import axiosInstance from './axios';
import axios, { Axios } from 'axios';

const setProduct = async (propertyObj) => {
  const response = await axiosInstance.post(`${BACKEND_PATH}/api/v1/inventory/`, propertyObj).then(async (res) => {
    return response;
  });
};

const getAllListing = async (user_name) => {
  const respond = await axios.get(`${BACKEND_PATH}/api/v1/inventory/${user_name}`).then((res) => {
    return res.data.results;
  });
  return respond;
};

const getListingById = async (id) => {
  const respond = await axios.get(`${BACKEND_PATH}/api/v1/inventory/${id}`).then((res) => {
    return res.data;
  });

  return respond;
};

const getLisitingAgentById = async (id) => {
  const respond = await axios.get(`${BACKEND_PATH}/api/v1/inventory/${id}`).then((res) => {
    return res.data;
  });

  return respond;
};



const getProfileAgentById = async (uid) => {
  await axios
    .get(`${BACKEND_PATH}/api/v1/profile/${uid}`)
    .then((res) => {
      return res;
    })
    .catch((err) => {
      const stringErr = JSON.stringify(err);
      const error = JSON.parse(stringErr);
      return error;
    });
};

// const register = async (email, password, first_name, last_name) => {
//   // todo: this flow need to be recode as it not verified
//   const user_name = first_name + last_name;
//   const response = await axiosInstance
//     .post(`${BACKEND_PATH}/api/v1/user/register`, {
//       email,
//       user_name,
//       password
//     })
//     .then((res) => {
//       console.log(res);

//       login(email, password, user_name);

//       history.push('/login');
//       return res;
//     });
// };

// const logout = async () => {
//   // const response = await axiosInstance.post(`${BACKEND_PATH}/api/v1/user/logout`)
//   // .then((res) => {
//   //   history.push('/login');
//   //   return res;
//   // });

//   // let off = response.data;

//   dispatch({ type: LOGOUT });

//   window.localStorage.removeItem('access');
//   window.localStorage.removeItem('refresh');
//   window.localStorage.removeItem('users');
// };

// const resetPassword = (email) => console.log(email);

// const updateProfile = async (user_name, formData) => {
//   const response = await axiosInstance.patch(`${BACKEND_PATH}/api/v1/profile/${user_name}`, formData).then((res) => {
//     if (typeof window !== 'undefined') {
//       const users = JSON.stringify(res.data);
//       localStorage.setItem('users', users);

//       dispatch({
//         payload: {
//           isLoggedIn: true,
//           user: users
//         }
//       });

//       init();
//     }
//     return res;
//   });
//   return response;
// };

export { setProduct, getAllListing, getListingById, getLisitingAgentById, getProfileAgentById };
