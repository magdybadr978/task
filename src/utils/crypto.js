const CryptoJS = require("crypto-js");

const encrypt = (text, secret) => CryptoJS.AES.encrypt(text, secret).toString();
const decrypt = (ciphertext, secret) =>
  CryptoJS.AES.decrypt(ciphertext, secret).toString(CryptoJS.enc.Utf8);


module.exports = { encrypt , decrypt}
