import axiosInstance from './axiosInstance';

import crypto from 'crypto'
var secretKey = process.env.SECRET_KEY;
var iv = new Buffer(16); // 16 byte buffer with random data
iv.fill(0); // fill with zeros

function encrypt_token(data) {
  var encipher = crypto.createCipheriv('aes-256-cbc', secretKey, iv),
    buffer = Buffer.concat([encipher.update(data), encipher.final()]);
  return buffer.toString('base64');
}

function decrypt_token(data) {
  var decipher = crypto.createDecipheriv('aes-256-cbc', secretKey, iv),
    buffer = Buffer.concat([
      decipher.update(Buffer.from(data, 'base64')),
      decipher.final(),
    ]);
  return buffer.toString();
}

const payment = async (amount, signature) => {
  const body = {
    partnerCode: process.env.PARTNER_KEY,
    requestType: 'captureWallet',
    ipnUrl: 'https://momo.vn',
    redirectUrl: 'https://momo.vn',
    orderId: 'MM1540456472575',
    amount: amount,
    lang: 'vi',
    orderInfo: 'SDK team.',
    requestId: 'MM1540456472575',
    extraData: "",//'eyJ1c2VybmFtZSI6ICJtb21vIn0=',
    signature: signature
  };
  return await axiosInstance.post(process.env.MOMO_API, body)
}

export default {
  payment,
};
 