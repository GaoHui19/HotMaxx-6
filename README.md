##  页面加载的使用
// 监听页面加载
    wx.showToast({
      title: '页面加载中',
      icon: 'loading',
      duration: 3000, // 显示加载提示的持续时间，单位为毫秒
      mask: true // 避免用户进行其他操作
    });
    const {
      getRequest,
      postRequest
    } = require('../../utils/request');

    // GET 请求
    getRequest('https://www.fastmock.site/mock/a12381d18619cf6ba1aa97b5d36b14e4/demo/banner').then((res) => {
      // console.log(res);
      this.setData({
        banner:res.data.val
      })
      console.log(res.data.val);
    }).catch((error) => {
      console.log(error);
    });
    
