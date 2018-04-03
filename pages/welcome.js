// welcome.js
Page({
  getProfile(res){
    console.log(res.detail.userInfo);
    this.setData({
      'profile': res.detail.userInfo
    })
  },
  data:{
    'profile': {
      'nickName':'您的昵称',
      'avatarUrl': '/images/Scarlett.jpg'
    }
  }
})