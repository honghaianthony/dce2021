import axiosInstance from './axiosInstance';

const payment = async (amount) => {
  const body = {
    amount: amount,
  }
  return await axiosInstance.post('/momo', body)
};

export default {
  payment,
};
