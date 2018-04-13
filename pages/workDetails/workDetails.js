// pages/news/news.js
Page({
  nav(){
  console.log('跳转')
  wx.navigateTo({
    url: '../common/prompt/prompt'
  })
  },

  /**
   * 页面的初始数据
   */
  data: {
    wid: '300',
    hei: '300'

  },

  /**
   * 生命周期函数--监听页面加载
   */
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
    console.log('这是news页面的下拉刷新')

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