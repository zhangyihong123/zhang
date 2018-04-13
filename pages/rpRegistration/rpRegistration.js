//logs.js
const util = require('../../utils/util.js')



Page({
  // atel(e){
  //  console.log(11)
  // },

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

    if (this.data.tel != '' && this.data.tel != '' && this.data.val != '' && this.data.email != '' && this.data.user != '' && this.data.pass != ''){
      wx.navigateTo({
        url: '../rpLogin/rpLogin'
      })

    }else{
      wx.showToast({
        title: '请完善资料',
        icon: 'none'
      })
    }
     
   
    
   
    
   


  },
  // 电话号码验证
  atel: function (e) {
    this.setData({
      tel: e.detail.value
      
    })
    let btel = this.data.tel;
    let pattern = /^[1][3,4,5,7,8][0-9]{9}$/; 
    if (pattern.test(btel)) {
          console.log('ok')
    }else{
      wx.showToast({
        title: '请输入正确电话',
        icon: 'none'
      })
    }
 
  },
  // 验证码
    val(e) {
    this.setData({
      val: e.detail.value
    })
    let bval = this.data.val;
    let byan = this.data.yan
    if (bval !== byan){
      wx.showToast({
        title: '请输入正确验证码 ',
        icon: 'none'
      })
    }
   
  },
    aemail(e){
      this.setData({
        email: e.detail.value
      })
      let bemail = this.data.email
      let pattern = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/; 
      if (!pattern.test(bemail)) {
        wx.showToast({
          title: '请输入正确的邮箱号码 ',
          icon: 'none'
        })
      }




    },
    auser(e){
      this.setData({
        user: e.detail.value
      })
      // let pattrn = /^([\u4E00-\uFA29]|[\uE7C7-\uE7F3]|[a-zA-Z0-9])*$/
      let buser = this.data.user;
      if (buser==''){
        
        wx.showToast({
          title: '请输入用户名 ',
          icon: 'none'
        })
      }

    },
    apass(e){
      this.setData({
        pass: e.detail.value
      })
     
      let bpass = this.data.pass;
      let pattrn = /^[a-zA-Z\d_]{8,}$/;
      if(!pattrn.test(bpass)){
        wx.showToast({
          title:'密码至少8位',
          icon: 'none'
        })
      }
    },
  data: {
    tel:'',
    yan:'获取短信验证码',
    val:'',
    istrue:false,
    bgW:100,
    bgH:100,
    danwei:'',
    lianxi:'',
    ayan:'',
    email:'',
    user:'',
    pass:'',
    aa: false,//控制下拉列表的显示隐藏，false隐藏、true显示
    bb: false,
    selectData: ['请选择', '高中', '大专', '本科', '本科以上'],//下拉列表的数据
    selectDatae: ['1', '2', '3', '4', '5'],//下拉列表的数据
    index: 0,//选择的下拉列表下标
    indexx: 0//选择的下拉列表下标           
  },
  // 点击下拉显示框
  selectTap() {
    this.setData({
      aa: !this.data.aa
    });
  },
  // 点击下拉列表
  optionTap(e) {
    let Index = e.currentTarget.dataset.index;//获取点击的下拉列表的下标
    this.setData({
      index: Index,
      aa: !this.data.aa
    });
  },
  onLoad: function (options) {
  
  },



  // 2
  selectTapb() {
    this.setData({
      bb: !this.data.bb
    });
  },
  // 点击下拉列表
  optionTapb(e) {
    let Index = e.currentTarget.dataset.index;//获取点击的下拉列表的下标
    this.setData({
      indexx: Index,
      bb: !this.data.bb
    });
  },
  onLoad: function (options) {
    
    selectData:e.data
  },





  onLoad: function () {




   let That=this;
   wx.request({
     url: 'https://ehcto.com/api/city.json',
     success:function(e){
        console.log(e.data)
        That.setData({
          selectData:e.data,
          selectDatae:e.data
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
