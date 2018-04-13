// pages/rpLogin/rpLogin.js
const App = getApp();


Page({
aa(){var App = getApp();
  let cc = this.data.istrue;
  if(cc == 'checked'){
    this.setData({
      istrue:false
    })
  }else{
    this.setData({
      istrue: "checked"
    })
  }
},
  log(){
    let _this = this;
    this.setData({
      logUrl: App.globalData.logUrl

    })
    let cc = _this.data.istrue
  
    if (cc == 'checked'){
        wx.request({
          url: _this.data.logUrl,
          success:function(e){
          
            let data = e.data;
            if(data.isOk == true){
              console.log('跳转')
              wx.navigateTo({
                url: '../rpRelease/rpRelease'
              })
            }else(
              console.log('登录失败')
            )
          }
        })
    }else{
      console.log('no')
    }
  },
  /**
   * 页面的初始数据
   */
  data: {
    istrue:false,
    logUrl:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
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