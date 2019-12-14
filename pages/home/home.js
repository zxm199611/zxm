// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    name:"cxk",
    students:[
      {id:110,name:"kebi",age:30},
      {id:111,name:"kele",age:18},
      {id:112,name:"ccc",age:10},
      {id:113,name:"bbb",age:29}
    ],
    counter:0
  },
  handleBtnClick(){
    //1.错误做法页面是不会刷新的
    //this.data.counter+=1

    //2.正确做法
    this.setData({
      counter: this.data.counter + 1
    })
   
  },
  handleSubtraction(){
    this.setData({
      counter: this.data.counter - 1
    })
  },
  //编程范式：
  //1.命令式编程：原生操作DOM
  //2.声明式编程：VUE/React/Angular
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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