
const App = getApp();


Page({
  JD(){
    wx.navigateTo({
      url: '../workDetails/workDetails'
    })
  },

  two() {
    wx.navigateTo({
      url: '../myJane/myJane'
    })
  },
  place() {
    wx.navigateTo({
      url: '../myMap/myMap'
    })
   
  },

  /**
   * 页面的初始数据
   */
  data: {
    companyUrl:'',
    arr:[],
    wid:'300',
    hei:'300'

    
    
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let _this = this;
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
    this.setData({
        companyUrl: App.globalData.companyUrl
      })
      wx.request({
        url: this.data.companyUrl,
        success:function(e){
          _this.setData({
            arr:e.data
          })
        }
      })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    
  }
})