import { BASE_URL, CUSTOMERS_URL } from '../helper';
import logger from '../logger';
import Interceptor from './interceptor';

const request = new Interceptor();

export const checkCustomer = async (data, success, error) => {
  try {
    const response = await request.post(`${BASE_URL}/${CUSTOMERS_URL}/exist`, data);
    success(response?.data);
  } catch (err) {
    error(err);
    logger(err);
  }
};

export const getCustomerById = async (id, success, error) => {
  const config = {
    headers: { Authorization: `Bearer ${sessionStorage.getItem('token')}` }
  };
  try {
    const response = await request.get(`${BASE_URL}/${CUSTOMERS_URL}/${id}`, config);
    success(response?.data);
  } catch (err) {
    error(err);
    logger(err);
  }
};

export const createCustomer = async (data, success, error) => {
  try {
    const response = await request.post(`${BASE_URL}/${CUSTOMERS_URL}`, data);
    success(response?.data);
  } catch (err) {
    error(err);
    logger(err);
  }
};