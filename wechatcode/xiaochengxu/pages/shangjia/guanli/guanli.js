// pages/guanli/guanli.js

var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tempFilePaths: '',
    image: null,
    caipin: '',
    name: null,
    peisongfei:null,
    miaoshu:null,
    jiage:null
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

  pload_picture: function(name) {
    var that = this
    //让用户选择或拍摄一张照片
    wx.chooseImage({
      count: 1,
      sizeType: ['original', 'compressed'],
      sourceType: ['album', 'camera'],
      success(res) {
        //选择完成会先返回一个临时地址保存备用
        const tempFilePaths = res.tempFilePaths
        //将照片上传至云端需要刚才存储的临时地址
        wx.cloud.uploadFile({
          cloudPath: that.data.name+'.jpg',
          filePath: tempFilePaths[0],
          success(res) {
            //上传成功后会返回永久地址
            console.log(res.fileID)
            that.setData({
              image: res.fileID
            })

          }
        });
        that.setData({
          tempFilePaths: res.tempFilePaths
        });
        console.log(res.tempFilePaths);
      }
    });
  },
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  },

  goodsNameInput: function(e) {
    this.setData({
      caipin: e.detail.value
    })
  },
  Peisongfei: function (e) {
    this.setData({
      peisongfei: e.detail.value
    })
  },
  Jiage: function (e) {
    this.setData({
      jiage: e.detail.value
    })
  },
  Miaoshu: function (e) {
    this.setData({
      miaoshu: e.detail.value
    })
  },
  Name: function(e) {
    this.setData({
      name: e.detail.value
    })
  },
  fabu: function(e) {

    console.log("名称：" + this.data.caipin);
    const db = wx.cloud.database()
    db.collection('chen').add({
      data: {
        caipin: this.data.caipin,
        image: this.data.image,
        name: this.data.name,
        miaoshu: this.data.miaoshu,
        jiage: this.data.jiage,
        peisongfei: this.data.peisongfei
      },
      success: res => {
        // 在返回结果中会包含新创建的记录的 _id
        this.setData({
          counterId: res._id,
          caipin: this.data.caipin,
          name: this.data.name,
          miaoshu:this.data.miaoshu,
          jiage:this.data.jiage,
          peisongfei:this.data.peisongfei
        })
        wx.showToast({
          title: '新增记录成功',
        })
        console.log('[数据库] [新增记录] 成功，记录 _id: ', res._id)
      },
      fail: err => {
        wx.showToast({
          icon: 'none',
          title: '新增记录失败'
        })
        console.error('[数据库] [新增记录] 失败：', err)
      }
    })
  },

})