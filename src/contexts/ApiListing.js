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
  const response = await axiosInstance
    .post(`${BACKEND_PATH}/api/v1/inventory/`, propertyObj)
    .then(async (res) => {
      console.log('res--asd>', res);
      return res;
    })
    .catch((err) => {
      console.log('err-->', err);

      const resJson = JSON.stringify(err);
      const resParse1 = JSON.parse(resJson);
      return err;
    });
  return response;
};

const getAllListing = async (user_name) => {
  const respond = await axios.get(`${BACKEND_PATH}/api/v1/profile/${user_name}`).then((res) => {
    return res.data;
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
  const respond = await axios.get(`${BACKEND_PATH}/api/v1/profile/${id}`).then((res) => {
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

const getListingBySlug = async (slug) => {
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

export { setProduct, getAllListing, getListingById, getLisitingAgentById, getProfileAgentById, getListingBySlug };
