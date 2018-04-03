// pages/news-detail/index.js
// 预置数据
const PRESET_DATA = [{
  id: 1,
  news_title: "美女如云",
  news_date: "2018-03-30",
  news_content: "时值今日，这句话已不只为表白对爱情坚贞不渝的专属词，也可引申到我们生活中的许多层面，比如对事业，三百六十行，我只选准那自己最喜欢最擅长的行业，切忌左顾右盼，得陇望蜀。古人曰：“闻道有先后，术业有专攻。”只要舀到属于自己的那一瓢水，定能做好属于自己的一番事业。再者就是切忌贪得无厌，正如佛祖所言：人的一生可能会遇到很多美好的东西，但只要用心好好把握住其中的一样就足够了。漭漭弱水虽取之不尽用之不竭，真正属于自己的恐怕只有那其中的一瓢。切莫学佛典上说的那位面对茫茫之水，与其喝不尽宁愿渴死的愚人。做到不攀比、不奢求、不躁动、不以物喜、不以己悲，始终保持一种豁达淡然的心态，才是达到了人生所追求的一种高境界。",
  news_read_count: 1000,
  news_like_count: 1000
}, {
  id: 2,
  news_title: "对E，我要不起",
  news_date: "2018-03-30",
  news_content: "在对不起中间加两个什么字最心酸?”,“对三,要不起。在斗地主中三为最小的牌，对三为对子中最小的牌，当一个人出对三你说要不起的时候夸张的表现出你手中的牌很小，形容很悲剧。这是一个梗。",
  news_read_count: 1000,
  news_like_count: 1000
}, {
  id: 3,
  news_title: "如何练出肌肉",
  news_date: "2018-03-30",
  news_content: "当然是看着别日练出肌肉是最简单啦",
  news_read_count: 1000,
  news_like_count: 1000
}]

Page({

  /**
   * 页面的初始数据
   */
  data: {
    article: {}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    if(options && options.id){
      this._getArticle(options.id)
    }
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

  /**
   * 获取新闻详情
   */
  _getArticle: function(id) {
    setTimeout(() => {
      this.setData({
        article: PRESET_DATA[id-1]
      })
    }, 1000)
  }
})