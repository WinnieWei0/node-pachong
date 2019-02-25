let request = require('request')
// let mysql=require('mysql')
let jsdom = require('jsdom')
let {JSDOM} = jsdom

request.get('https://www.csdn.net/', (err, res) => {
      if(err){
        throw err
      }
  let {window} = new JSDOM(res.body)
  let $ = require('jquery')(window)
  $(function(){
  $('.feedlist_mod>li').each(function (i) {
    let title = $(this).find('.title>h2>a').text()
  })
  })
})