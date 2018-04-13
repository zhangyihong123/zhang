

//logs.js
const util = require('../../utils/util.js')

Page({
  ttt() {
    wx.navigateTo({
      url: '../Form/Form',
    })
  },


  data: {
    wid: '300',
    hei: '300'

  },
  onLoad: function () {
    this.setData({
      logs: (wx.getStorageSync('logs') || []).map(log => {
        return util.formatTime(new Date(log))
      })
    })
  },
  onLoad: function (options) {
    var _this = this;
    wx.getSystemInfo({
      success(res) {

        // console.log(res.windowWidth, res.windowHeight)
        let w = res.windowWidth;
        let h = res.windowHeight
        _this.setData({
          wid: w,
          hei: h
        })



      }
    })









  },

})
