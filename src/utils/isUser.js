import { red } from '@mui/material/colors';
import { getApiPartners } from 'contexts/ApiBusinessCenter';
import React from 'react';

const isUser = (username) => {
  return getApiPartners().then((res) => {
    return res?.data?.some((item) => item?.username.includes(username));
  });
};

export { isUser };
