Page({
  data: {
    date: "2016-09-01",
    genders: ["男", "女"],
    genderIndex: 0,
    sexori: ["男", "女"],
    sexoriIndex: 0,
    countries: ["中国", "美国", "英国"],
    countryIndex: 0,
    nick_name: "",
  },
  onNicknameChange: function(e){
    console.log("nick_name==>" + e.detail.value)
    this.setData({
      nick_name:e.detail.value
    })
  },
  bindDateChange: function (e) {
    this.setData({
      date: e.detail.value
    })
  },
  bindCountryChange: function (e) {
    console.log('picker country 发生选择改变，携带值为', e.detail.value);

    this.setData({
      countryIndex: e.detail.value
    })
  },
  bindGenderChange: function (e) {
    console.log('picker country 发生选择改变，携带值为', e.detail.value);
    this.setData({
      genderIndex: e.detail.value
    })
  },

  bindSexoriChange: function (e) {
    console.log('picker country 发生选择改变，携带值为', e.detail.value);
    this.setData({
      sexoriIndex: e.detail.value
    })
  },

  commitForm: function(e){
    console.log(e.detail.value.nick_name)
  }
});