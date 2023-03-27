/* eslint-disable arrow-body-style */
/* eslint-disable camelcase */

import { BACKEND_PATH } from 'config';
import axiosInstance from './axios';
import axios from 'axios';

const getApiPartners = async () => {
  const response = await axiosInstance
    .get(`${BACKEND_PATH}/api/partners`)
    .then(async (res) => {
      localStorage.setItem('listofpartner', JSON.stringify(res?.data));
      return res;
    })
    .catch((err) => {
      return err;
    });
  return response;
};

const getPartnerbyUsername = async (username) => {
  const response = await axiosInstance
    .get(`${BACKEND_PATH}/api/partner/${username}`)
    .then(async (res) => {
      return res;
    })
    .catch((err) => {
      return err;
    });
  return response;
};

export { getApiPartners, getPartnerbyUsername };
