/* eslint-disable arrow-body-style */
/* eslint-disable camelcase */

import { BACKEND_PATH } from 'config';
import axiosInstance from './axios';
import axios from 'axios';

const createInvestment = async (form_data) => {
  const response = await axiosInstance
    .post(`${BACKEND_PATH}/api/investments`, form_data)
    .then(async (res) => {
      return res;
    })
    .catch((err) => {
      return err;
    });
  return response;
};

const getInvestments = async (username) => {
  const response = await axiosInstance
    .post(`${BACKEND_PATH}/api/investments`, username)
    .then(async (res) => {
      return res;
    })
    .catch((err) => {
      return err;
    });
  return response;
};

const getAllInvestment = async (username) => {
  const response = await axiosInstance
    .get(`${BACKEND_PATH}/api/investments/${username}`)
    .then(async (res) => {
      return res;
    })
    .catch((err) => {
      return err;
    });
  return response;
};

const setWithDrawAPI = async (data) => {
  const { id } = data;
  const response = await axiosInstance
    .post(`${BACKEND_PATH}/api/withdraw/${id}`)
    .then(async (res) => {
      console.log('res', res);
      const { data, status } = res;
      return data;
    })
    .catch((err) => {
      return err;
    });
  return response;
};

const setProduct = async (form_data) => {
  const response = await axiosInstance
    .post(`${BACKEND_PATH}/api/v1/inventory/`, form_data)
    .then(async (res) => {
      return res;
    })
    .catch((err) => {
      return err;
    });
  return response;
};

const getListsbyQuery = async (query, page) => {
  const { username, title, location, category } = query;

  const respond = await axios
    .get(
      `${BACKEND_PATH}/api/v1/inventory/?page=${page}${username != null ? `&username=${username}` : ''}${
        title != null ? `&title=${title}` : ''
      }${location != null ? `&location=${location}` : ''}${category != null ? `&category=${category}` : ''}`
    )
    .then((res) => {
      return res?.data;
    });
  return respond;
};

const getListingById = async (id) => {
  const respond = await axios
    .get(`${BACKEND_PATH}/api/v1/inventory/${id}`)
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      const stringErr = JSON.stringify(err);
      const error = JSON.parse(stringErr);
      if (error?.status == 404) location?.replace('/not-found');
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
  return await axios
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

const getAllProfileAgent = async () => {
  try {
    const res = await axios.get(`${BACKEND_PATH}/api/v1/profile/`);
    return res;
  } catch (err) {
    const stringErr = JSON.stringify(err);
    const error = JSON.parse(stringErr);
    return error;
  }
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

const updateListingById = async (id, form_data) => {
  const response = await axiosInstance
    .put(`${BACKEND_PATH}/api/v1/inventory/${id}`, form_data)
    .then((res) => {
      return res;
    })
    .catch((err) => {
      const stringErr = JSON.stringify(err);
      const error = JSON.parse(stringErr);
      return error;
    });
  return response;
};

const deletePhotoListingById = async (id, photo_id) => {
  const response = await axiosInstance
    .patch(`${BACKEND_PATH}/api/v1/inventory/${id}`, photo_id)
    .then((res) => {
      v;
      return res;
    })
    .catch((err) => {
      const stringErr = JSON.stringify(err);
      const error = JSON.parse(stringErr);
      return error;
    });
  return response;
};

const deleteListingById = async (id) => {
  await axiosInstance
    .delete(`${BACKEND_PATH}/api/v1/inventory/${id}`)
    .then((res) => {
      return res;
    })
    .catch((err) => {
      const stringErr = JSON.stringify(err);
      const error = JSON.parse(stringErr);
      return error;
    });
};

export {
  setProduct,
  getListingById,
  getLisitingAgentById,
  getProfileAgentById,
  getListingBySlug,
  updateListingById,
  deletePhotoListingById,
  deleteListingById,
  getAllProfileAgent,
  getListsbyQuery,
  createInvestment,
  getInvestments,
  getAllInvestment,
  setWithDrawAPI
};
