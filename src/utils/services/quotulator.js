import { BASE_URL, QUOTULATOR_URL } from '../helper';
import logger from '../logger';
import Interceptor from './interceptor';

const request = new Interceptor();

export const getEstimateLevel = async (success, error) => {
  const config = {
    headers: { Authorization: `Bearer ${sessionStorage.getItem('token')}` }
  };
  try {
    const response = await request.get(`${BASE_URL}/${QUOTULATOR_URL}/estimateLevel`, config);
    success(response?.data);
  } catch (err) {
    error(err);
    logger(err);
  }
};

export const getComplexity = async (success, error) => {
  const config = {
    headers: { Authorization: `Bearer ${sessionStorage.getItem('token')}` }
  };
  try {
    const response = await request.get(`${BASE_URL}/${QUOTULATOR_URL}/complexity`, config);
    success(response?.data);
  } catch (err) {
    error(err);
    logger(err);
  }
};

export const getAllSettingsValues = async (success, error) => {
  const config = {
    headers: { Authorization: `Bearer ${sessionStorage.getItem('token')}` }
  };
  try {
    const response = await request.get(`${BASE_URL}/${QUOTULATOR_URL}`, config);
    success(response?.data);
  } catch (err) {
    error(err);
    logger(err);
  }
};

export const requestQuotation = async (data, success, error) => {
  const config = {
    headers: { Authorization: `Bearer ${sessionStorage.getItem('token')}` }
  };
  try {
    const response = await request.post(`${BASE_URL}/quotulator`, data, config);
    success(response?.data);
  } catch (err) {
    error(err);
    logger(err);
  }
};
