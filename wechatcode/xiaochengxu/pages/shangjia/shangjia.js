// pages/shangjia/shangjia.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    background: ['demo-text-1', 'demo-text-2', 'demo-text-3'],
    griddata: [{
        name: "上传菜品",
        img: "../../image/店铺.png",
        url: "guanli/guanli"

      },
      {
        name: "菜品管理",
        img: "../../image/店铺.png",
        url: "caipin/caipin"

      },
      {
        name: "会员管理",
        img: "../../image/店铺.png",
        url: "huiyuan/huiyuan"
      }, {
        name: "订单配送",
        img: "../../image/店铺.png",
         url: "peisong/peisong"
      }, 
    ],
    indicatorDots: true,
    vertical: false,
    autoplay: false,

  },
  xiangq: function(e) {
    console.log(e.target.dataset.id)
    wx.navigateTo({
      url: 'pages/guanli/guanli'
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})