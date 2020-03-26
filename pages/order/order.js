// pages/order/order.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    currentTabIndex: 0,
    img: "../../images/logo_order.jpeg",
    itemImage: "http://n.sinaimg.cn/sinacn17/300/w1080h1620/20181129/29d0-hpinrya8068018.jpg"
  },
  onTabsItemTap: function (event) {
    let index = event.currentTarget.dataset.index;
    this.setData({
      currentTabIndex: index
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      currentTabIndex: 0
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

  }
})