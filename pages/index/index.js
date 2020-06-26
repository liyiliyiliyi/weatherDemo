//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    address: ["江西省","宜春市","袁州区"],
    now: ""
  },
  // 地址改变的触发函数
  changeAddress: function(e) {
    this.setData({
      address: e.detail.value
    })
    this.getWeather()
  },
  // 请求天气
  getWeather: function() {
    var that = this
    wx.request({
      url: 'https://free-api.heweather.net/s6/weather/now?',
      data: {
        location:that.data.address[1],
        key:'f414c040ea894722a8aa781b0fe372db'
      },
      success: function(res) {
        that.setData({
          now:res.data.HeWeather6[0].now
        })
        console.log(that.data.now)
      }
    })
  },
  //事件处理函数
  bindViewTap: function() {
  
  },
  onLoad: function () {
   this.getWeather()
  }
})
