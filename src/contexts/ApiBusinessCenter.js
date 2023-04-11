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
  const response = await axios
    .get(`${BACKEND_PATH}/api/partner/${username}`)
    .then(async (res) => {
      return res;
    })
    .catch((err) => {
      return err;
    });
  return response;
};

const getStatusbyUsername = async (username) => {
  const response = await axios
    .get(`${BACKEND_PATH}/api/status/${username}`)
    .then(async (res) => {
      return res;
    })
    .catch((err) => {
      return err;
    });
  return response;
};

const getApiDirectSales = async () => {
  const response = await axiosInstance
    .get(`${BACKEND_PATH}/api/total-direct-sales`)
    .then(async (res) => {
      return res;
    })
    .catch((err) => {
      return err;
    });
  return response;
};

const getApiEmpireSales = async () => {
  const response = await axiosInstance
    .get(`${BACKEND_PATH}/api/total-empire-sales`)
    .then(async (res) => {
      return res;
    })
    .catch((err) => {
      return err;
    });
  return response;
};

export { getApiPartners, getPartnerbyUsername, getApiDirectSales, getApiEmpireSales, getStatusbyUsername };
