import axiosInstance from './axiosInstance';

import crypto from 'crypto'

const secret = process.env.SECRET_KEY;


const payment = async (amount) => {
  const requestId = process.env.PARTNER_KEY + new Date().getTime();
  const data = `partnerCode=${process.env.PARTNER_KEY}&accessKey=${process.env.ACCESS_KEY}&requestId=${requestId}&amount=${amount}&orderId=${requestId}&orderInfo=DCE&returnUrl=https://momo.vn&notifyUrl=https://momo.vn&extraData=`;
  console.log(data)
  const signature = crypto
    .createHmac('sha256', `${secret}`)
    .update(data)
    .digest('hex');
  console.log(signature);
  const body = {
    accessKey: process.env.ACCESS_KEY,
    partnerCode: process.env.PARTNER_KEY,
    requestType: 'captureMoMoWallet',
    notifyUrl: 'https://momo.vn',
    returnUrl: 'https://momo.vn',
    orderId: requestId,
    amount: amount,
    orderInfo: 'DCE',
    requestId: requestId,
    extraData: '',
    signature: signature,
  };
  return await axiosInstance.post(
    'https://test-payment.momo.vn/gw_payment/transactionProcessor',
    body
  );
}

export default {
  payment,
};
 