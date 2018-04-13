var QQMapWX = require('../../qqmap-wx-jssdk.js');
var qqmapsdk;
var str=''
Page({
  ddd() {
    console.log(1)
  },
  select_date: function (e) {

    var index = e.currentTarget.dataset.key;


    this.setData({
      aaa: str
    })
    str += `a${index}`
    let kk = str.split('a');
    this.setData({
      bbb: kk
    })

    if (this.data.datess[index].state == 1) {
      this.data.datess[index].state = 0;

      // return false

    } else if (this.data.datess[index].state == 0) {
      this.data.datess[index].state = 1;


    }
    this.setData({
      datess: this.data.datess,
    });

  },

  /**
   * 页面的初始数据
   */
  data: { 
    height: 10,
    focus: false,
    areaIndexB: 0,
    area: ['学历不限', '高中', ' 专科'],
    areaIndexA: 0,
    areas: ['1', '2~5', ' 5~9'],
    areaIndexC: 0,
    areasq: ['经验', '2~4年', ' 4~6年'],
    areaIndex: 0,
    areasqa: ['请选择给薪区间', '5~6k', '8~9k'],
    mapText:'',
    dates: '2016-11-08',
    datess: [
      { "data_name": "不加班", "state": 0 },
      { "data_name": "住房补贴", "state": 0 },
      { "data_name": "无试用期", "state": 0 },
      { "data_name": "14薪", "state": 0 },
      { "data_name": "免息房贷", "state": 0 },
      { "data_name": "每年多次调薪", "state": 0 },
      { "data_name": "周末双休", "state": 0 },
      { "data_name": "包吃", "state": 0 },
      { "data_name": "包住", "state": 0 },
      { "data_name": "周末双休", "state": 0 },
      { "data_name": "五险一金", "state": 0 },
      { "data_name": "年底双薪", "state": 0 },
      { "data_name": "周末双休", "state": 0 },
      { "data_name": "餐补", "state": 0 },
      { "data_name": "年底双薪", "state": 0 },
      { "data_name": "五险一金", "state": 0 },
      { "data_name": "年底双薪", "state": 0 },
      { "data_name": "绩效奖金", "state": 0 },
      { "data_name": "餐补", "state": 0 },
      { "data_name": "周末双休", "state": 0 },
      { "data_name": "餐补", "state": 0 },
      { "data_name": "年底双薪", "state": 0 },
      { "data_name": "绩效奖金", "state": 0 },
      { "data_name": "五险一金", "state": 0 },
      { "data_name": "餐补", "state": 0 },
      { "data_name": "五险一金", "state": 0 },
      { "data_name": "年底双薪", "state": 0 },
      { "data_name": "绩效奖金", "state": 0 },
      { "data_name": "年底双薪", "state": 0 },
      { "data_name": "补充医疗保险", "state": 0 }
    ]
  },
  onLoad: function (options) {
    let _this = this;

    qqmapsdk = new QQMapWX({
      key: 'Q7LBZ-ICY33-XF733-YFGV4-ERAOH-6AFB4'
    });
    wx.getLocation({
      type: 'wgs84',
      success: function (res) {

        qqmapsdk.reverseGeocoder({
          location: {
            latitude: res.latitude,
            longitude: res.longitude
          },
          success: function (addressRes) {
            var address = addressRes.result.formatted_addresses.recommend;
            _this.setData({
              mapText: address
            })
          }
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
    
  },
  bindButtonTap: function () {
    this.setData({
      focus: true
    })
  },
  bindTextAreaBlur: function (e) {
    console.log(e.detail.value)
  },
  bindFormSubmit: function (e) {
    console.log(e.detail.value.textarea)
  },
  
  bindPickerChangeA: function (e) {
    this.setData({
      areaIndexA: e.detail.value
    })
  },
  bindPickerChangeB: function (e) {
    this.setData({
      areaIndexB: e.detail.value
    })
  },
  bindPickerChangeC: function (e) {
    this.setData({
      areaIndexC: e.detail.value
    })
  },
  bindDateChange: function (e) {
    console.log(e.detail.value)
    this.setData({
      dates: e.detail.value
    })
  }
    

})

