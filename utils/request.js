// utils/request.js

const getRequest = (url, data) => {
  return new Promise((resolve, reject) => {
    wx.request({
      url,
      data,
      method: 'GET',
      header: {
        'content-type': 'application/json',
      },
      success: (res) => {
        resolve(res);
      },
      fail: (error) => {
        reject(error);
      },
    });
  });
};

const postRequest = (url, data) => {
  return new Promise((resolve, reject) => {
    wx.request({
      url,
      data,
      method: 'POST',
      header: {
        'content-type': 'application/json',
      },
      success: (res) => {
        resolve(res);
      },
      fail: (error) => {
        reject(error);
      },
    });
  });
};

module.exports = { getRequest, postRequest };
