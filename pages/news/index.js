// 本地存储已读数据ID列表
const READED_STATUS_LIST = 'readed_status_list';
// 预置数据
const PRESET_DATA = [{
  id: 1,
  is_read: false,
  news_title: "美女如云",
  news_cover_image_url: "/images/girls/1.jpg",
  news_content_introduction: "弱水三千，吾尚只取一瓢"
}];

// 预置的第二页数据
const PRESET_DATA_2 = [{
  id: 2,
  is_read: false,
  news_title: "对E，我要不起",
  news_cover_image_url: "/images/boobs/1.jpg",
  news_content_introduction: "天下之幸事，无它"
}, {
  id: 3,
  is_read: false,
  news_title: "如何练出肌肉",
  news_cover_image_url: "/images/muscle/1.jpg",
  news_content_introduction: "四月不减肥，五月徒伤悲"
}]

// pages/news/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    articles: [],
    loading: false,
    isEnd: false,
    loadMoreText: '点击加载更多'
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this._getArticles(true)
  },

  /**
   * 加载数据
   */
  _getArticles: function (isFirstPage) {
    var self = this;
    // 当前数据非底部数据 并且不再加载状态时
    if (!this.data.isEnd && !this.data.loading) {
      // 开始加载
      this.setData({ loading: true });
      setTimeout(() => {
        let data = [];
        if (isFirstPage) {
          // 首页加载结束
          data = self.loadReadedStatus(PRESET_DATA);
          console.log(data);
          this.setData({ articles: data, loading: false });
        } else {
          // 第二次加载结束
          data = self.loadReadedStatus(PRESET_DATA.concat(PRESET_DATA_2));
          this.setData({
            articles: data,
            isEnd: true,
            loading: false,
            loadMoreText: "已经到底啦……"
          });
        }
      }, 1000);
    }
  },

  /**
   * 加载更多按钮处理
   */
  loadMore: function (event) {
    // console.log('click');
    this.setData({
      loadMoreText: "加载中，请稍候......"
    })
    this._getArticles();
  },

  updateReadedStatus: function (id) {
    let readed_status_storage_list = wx.getStorageSync(READED_STATUS_LIST);
    let new_articles = this.data.articles;
    for(let i = 0; i< new_articles.length; i++){
      if(new_articles[i].id == id){
        new_articles[i].is_read = true;
      }
    }
    this.setData({
      articles: new_articles
    });
    if (!readed_status_storage_list) {
      wx.setStorageSync(READED_STATUS_LIST, [id]);
    } else {
      if (readed_status_storage_list.indexOf(id) == -1) {
        readed_status_storage_list.push(id);
        wx.setStorageSync(READED_STATUS_LIST, readed_status_storage_list);
      }
    }
  },

  loadReadedStatus: function (data_list) {
    let readed_status_storage_list = wx.getStorageSync(READED_STATUS_LIST);
    console.log(readed_status_storage_list);
    if (data_list && readed_status_storage_list) {
      for (let i = 0; i < data_list.length; i++) {
        if (data_list[i].id && readed_status_storage_list.indexOf(data_list[i].id) != -1) {
          data_list[i].is_read = true;
        }
      }
    }
    return data_list;
  },

  goToNewsDetail: function (e) {
    console.log(e);
    let id = e.currentTarget.dataset.id;
    this.updateReadedStatus(id);
    wx.navigateTo({
      url: '/pages/news-detail/index?id=' + id,
    })
  },
  onShareAppMessage: function(options){
    return {
      title: this.data.article.title,
      imageUrl:this.data.article.poster,
      path:'/page/news-detail/index?id=${id}'
    }
  }
})