//logs.js
const util = require('../../utils/util.js')



Page({
  val(e) {
    this.setData({
      val: e.detail.value

    })
  },
  yan(){
    let code = "";
    let codeLength = 4; 
    let random = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    for (let i = 0; i < codeLength; i++) {
      let index = Math.floor(Math.random() * 10);
      code += random[index];
    }   
    this.setData({
      yan: code

    })
 

  },
  log() {
   
    let pattern =/^[1][3,4,5,7,8][0-9]{9}$/;

     var str = this.data.tel
   
     if (pattern.test(str)) {
       this.setData({
         istrue:true

       })
     }else if(str == ''){
       this.setData({
         istrue: null
       })
     }else{
       this.setData({
         istrue: false

       })
     }
   
     let isTrue = this.data.istrue 
     let Val = this.data.val
     let yan = this.data.yan
       
     console.log(isTrue, Val)
     if (isTrue == true && Val == yan ){
       wx.showToast({
              title: 'ok',
              icon: 'success',
              duration: 1500
           })

        wx.navigateTo({
          url: '../myWork/myWork'
        })
     }else{
       wx.showModal({
         title: '请重新输入',
         content: '电话或验证错误',
         success: function (res) {
           if (res.confirm) {
             console.log('用户点击确定')
           } else if (res.cancel) {
             console.log('用户点击取消')
           }
         }
       })
     }
   
    
   


  },
  tel: function (e) {
    this.setData({
      tel: e.detail.value
      
    })
  },
  data: {
    tel:'',
    yan:'获取验证码',
    val:'',
    istrue:false,
    bgW:100,
    bgH:100,
    srcUrl:'',
    srcName:''
  },
  onLoad: function () {
   let That=this;
   wx.getUserInfo({
     success: function (res) {
      //  console.log(res.userInfo.nickName)
       That.setData({
         srcUrl: res.userInfo.avatarUrl,
         srcName: res.userInfo.nickName
       })
     }
   })
    wx.getSystemInfo({
      success: function(res) {
        let width = res.windowWidth;
        let height = res.windowHeight
        That.setData({
          bgW:width,
          bgH:height
        })
      },
    })
    this.setData({
      logs: (wx.getStorageSync('logs') || []).map(log => {
        return util.formatTime(new Date(log))
      })
    })

  }
})
