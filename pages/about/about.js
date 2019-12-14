// pages/about/about.js
//getAPP()获取App()产生的实例对象
const app = getApp()
console.log(app.globalData.name)
console.log(app.globalData.age)
//赋值拿属性来使用
const myName = app.globalData.name;
const myAge = app.globalData.age;


// 注册一个页面
//页面也有自己的生命周期函数
Page({
  /**
   * 页面的初始数据
   */
  //2.初始化数据
  data: {
    list: [],
    message:"哈哈哈"
  },
  handClick(){
    console.log("哈哈哈被点了一次")
  },

  //--------1.监听页面的生命周期函数 
 
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.request({
      url: 'http://jsonplaceholder.typicode.com/users',
      success:(res)=>{
        // for(var i=0;i<res.data.length;i++){
        //   console.log(res.data[i])
        // }
        const myData=res.data
        this.setData({
          list:myData
        })
      }
    })
  },
 //--------3.监听wxml中相关的一些事件
  handleGetUserInfo(event) {
    console.log(event)
  },
  //--------4.监听其他事件
  //监听页面的滚动
  onPageScroll(obj){
    console.log(obj)
  },
  // 页面上拉触底事件的处理函数

  //监听页面移动到底部
  onReachBottom(){
   console.log("页面移动到底部刷新")
  },
  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    console.log("页面下拉刷新")
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

  
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})