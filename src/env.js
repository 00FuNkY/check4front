require('dotenv').config();

/* eslint-disable import/prefer-default-export */
export const URL_API =
  process.env.REACT_APP_API_URL || 'http://localhost:5000/api/v1/';
