let request = require('request')
// let mysql=require('mysql')
let jsdom = require('jsdom')
let {
  JSDOM
} = jsdom

request.get('https://www.csdn.net/', (err, res) => {
  if (err) {
    throw err
  }
  let {
    window
  } = new JSDOM(res.body)
  let $ = require('jquery')(window)
    let items=[]
  $(function () {
    $('.feedlist_mod>li').each(function (i) {
      let title = $(this).find('.title>h2>a').text().trim()
      let title_href = $(this).find('.title>h2>a').attr('href')
      let summary = $(this).find('.summary').text().trim()
      let user_img_href = $(this).find('.list_userbar>dt>a').attr('href')
      let user_img = $(this).find('.list_userbar>dt>a>img').attr('src')
      let name_href = $(this).find('.list_userbar>.name>a').attr('href')
      let name = $(this).find('.list_userbar>.name>a').text().trim()
      let tag_href = $(this).find('.list_userbar>.tag>a').attr('href')
      let tag = $(this).find('.list_userbar>.tag>a').text().trim()
      let tag_time = $(this).find('.list_userbar>.time').text().trim()
      let read_num = $(this).find('.list_userbar>.interactive>.read_num>a>.num').text().trim()
      let common_num = $(this).find('.list_userbar>.interactive>.common_num>a>.num').text().trim()
      items.push({
        title
      })
    })
    $('.company_list>li').each(function (i) {
      let img_href = $(this).find('.img_box>a').attr('href')
      let img_src = $(this).find('.img_box>a>img').attr('src')
      let content_href = $(this).find('.content>h3>a').attr('href')
      let content_txt = $(this).find('.content>h3>a').text().trim()
      let content_desc = $(this).find('.content>h3>p').text().trim()
      // items.push({
      //   title
      // })
    })
    console.log(items)
  })
})