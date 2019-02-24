let request = require('request')
// let cheerio = require('cheerio')
// let mysql=require('mysql')
let fs=require('fs')
let jsdom = require('jsdom')
let {str}=require('./xx.js')
let {JSDOM} = jsdom

request.get('https://www.csdn.net/', (err, res) => {
  // fs.writeFile('xx.js',res.body,'utf8',err=>{
  //     if(err){
  //       throw err
  //     }
  //     console.log('ok')
  //   })
  console.log(res)
  console.log('---------------------------------------------00')
  // let {window} = new JSDOM(str)
  let {window} = new JSDOM(res.body)
  // console.log(window)
  //   console.log('---------------------------------------------77')
  let $ = require('jquery')(window)
  // console.log($)
  //   console.log('---------------------------------------------88')
  // console.log($('.feedlist_mod').html())
  // console.log('---------------------------------------------11')
  // console.log($('.feedlist_mod li').html())
  $('.feedlist_mod>li').each(function (i) {
  //   console.log('---------------------------------------------22')
  //   console.log($(this).find('.title').html())
  //   console.log('---------------------------------------------33')
  //   console.log($(this).find('.title>h2').html())
  //   console.log('---------------------------------------------44')
    // console.log($(this).find('.title>h2>a').html())
    // console.log('---------------------------------------------55')
    let title = $(this).find('.title>h2>a').text()
    console.log(i, title)
    console.log('---------------------------------------------66')
  })
})
// let fs=require('fs')
// console.log($('body'))
// $.get('https://www.csdn.net/',data=>{
//   console.log(data)
// })























// request.get('https://www.csdn.net/', (err, res) => {
//   // console.log(res)
//   if (err) {
//     console.log('请求出错：' + err)
//   } else {
//     let item = 0
//     let items = []
// let body = `
// <ul class='feedlist_mod'>
// <li>a</li>
// <li>b</li>
// <li>c</li>
// <li>d</li>
// </ul>
// `

// var $ = cheerio.load(body, {
//   decodeEntities: false
// });
// console.log('---------------------------------------------00')
// console.log($('ul').find('li'));
// $('.feedlist_mod').find('li').each((i, el)=> { //找到li元素对象然后通过each遍历
//   // var $1 = cheerio.load(el)
//   var newsTitle = $(el).text(); //得到<a>标签的文字
//   // var newsTime = $('ul').children('li').attr('href'); //得到第二个<span>标签的文字
//   items.push({
//     newsTitle
//   })
//   item++;
// })

// var start=res.body.indexOf('<body')
// var end=res.body.indexOf('</body>')
// // console.log(start,end)
// fs.writeFile('xx.js',JSON.stringify(res.body.slice(start,end+8)),'utf8',err=>{
//   if(err){
//     throw err
//   }
//   console.log('ok')
// })
//     var $ = cheerio.load(res.body, {
//       decodeEntities: false
//     });
//     console.log('---------------------------------------------00')
//     console.log($('.feedlist_mod'));
//     $('.feedlist_mod').find('li').each(function (i,el) { //找到li元素对象然后通过each遍历
//         var newsTitle = $(el).find('title').find('h2').find('a').text(); //得到<a>标签的文字
//         var newsTime = $(el).find('title').find('h2').find('a').attr('href'); //得到第二个<span>标签的文字
//         items.push({
//           newsTitle,
//           newsTime
//         })
//       item++;
//       })
//     console.log('---------------------------------------------11')
//     console.log("已爬取" + item + "条记录");
//     console.log('---------------------------------------------22')
//     console.log(items)
//     fs.writeFile('xx.json',JSON.stringify(items),'utf8',err=>{
//       if(err){
//         throw err
//       }
//   })
// }
// })