const shortid = require('shortid');
const Nightmare = require('nightmare');		
const async = require('async');
let nightmare = Nightmare({ show: true });
const downloader = require('image-downloader');
                                         
const shell = require('shelljs');
const fs = require('fs');

let realdata = [];

function getOption(url,name,id){
    let dest = './IMAGE/'+id+'/';
    options = {
        url: url,
        dest: dest,
        done: function(err, filename, image) {
            if (err) {
                throw err
            }
            console.log('File saved to', filename);
        }

    }
    return options;
}

function crawl(arr,cb){
    function test(item,cb){
        let night = new Nightmare({ show: true });
        night.goto(item)
        .wait(1000)
        .evaluate(function(){
            function getLongLat(data){ 
                let metas = document.getElementsByTagName('meta'); 
                let n = metas.length;
                for (let i=0; i < n; i++) { 
                    if (metas[i].getAttribute("property") == data) { 
                        return metas[i].getAttribute("content"); 
                    } 
                } 
                return "";
            } 

            try{

                function cutLink(link){
                    let string = link; 
                    let n = string.length;
                    for (let i=n-1; i > 0 ; i--){ 
                        if (string[i] == "/") return string.substring(i+1 ,n ); 
                    } 
                    return "";
                } 

                let obj = {};
                let name = document.querySelector('.main-info-title > h1').innerText;
                let type = document.querySelector('.category .category-items > a').innerText;
                let address = document.querySelectorAll('.res-common-add span')[1].querySelector('a > span').innerText;
                let district = document.querySelectorAll('.res-common-add span')[3].querySelector('a > span').innerText;
                let octime = document.querySelectorAll('.micro-timesopen span')[2].innerText;//getAttribute('title').replace('|','');
                let rate = document.querySelectorAll('.microsite-top-points-block .microsite-point-avg')[0].innerText; 
                let lat = getLongLat('place:location:latitude');
                let long = getLongLat('place:location:longitude');

                //download image
                let image = document.querySelector('.main-image .img a > img').getAttribute('src'); 
                obj['name'] = name;
                obj['type'] = type;
                obj['address'] = address;
                obj['district'] = district;
                obj['octime'] = octime;
                obj['rate'] = parseFloat(rate);
                obj['lat'] = parseFloat(lat);
                obj['long'] = parseFloat(long);
                obj['image'] = image;

                obj['local_image'] = cutLink(image)

            //     let objCmt = {};
            //     //=======================
            //     //function getComment(){
            //         let resCmt = document.querySelectorAll('.review-item fd-clearbox ng-scope');
            //         let arrCmt = [];
            //         for(let i = 0; i < resCmt.length ; i++){
            //             let tm = resCmt[i];
            //             arrCmt.push(tm);
            //         }
            //         //console.log(resCmt);
            //        // let arrCmt = [];
            //         for(let i = 0; i < arrCmt.length; i++){
            //             //let tm = res[i].querySelector('a').href;
            //             //arr.push(tm);
            //             let Cmt ={}
            //             let username = arrCmt[i].querySelectorAll('.review-user fd-clearbox ng-scope > div')[1].querySelector('.ru-row > a').innerText;
            //             let score =  arrCmt[i].querySelectorAll('.review-user fd-clearbox ng-scope ')[1].querySelector('.review-points ng-scope green > span').innerText;
            //             let comments =  arrCmt[i].querySelectorAll('.review-des fd-clearbox ng-scope .rd-des > spam').innerText;
            //             Cmt['username'] = username;
            //             Cmt['score'] = score;
            //             Cmt['comment'] = comments;
            //             console.log("Comment here:")
            //             console.log(Cmt);
            //             objCmt.push(Cmt);
            //         }
            //         // let newarr = arr.slice(9);
            //         //return arr;
            //         //console.log("above is arr");
            //    // }
            //     //=======================
            //     obj['comment']= objCmt;
                return obj;
            }catch(err){
                console.log('Searching not found');
                return {};
            }
        })
        .end()
        .then(function(res){
            if(!res){
                cb(null,{}); 
            }
            try{
                let id = shortid.generate();
                res['id'] = id;
                let opt = getOption(res["image"],res["name"],id);
                console.log(opt);
                shell.mkdir('-p',opt['dest']);
                downloader(opt);

                //update data every crawl time
                realdata.push(res);
                console.log(res);
                exportJson(realdata);
                cb(null,res);
            }catch(err){
                    console.log('Error File not found Cannot download file');
                    console.log(err);
                    cb(null,{});
            }
        });
    }
    // so luong web truy cap 1 luc
    async.mapLimit(arr,2,test,function(err,res){
        cb(null,res);
    });
}

nightmare

    .goto('https://www.foody.vn/da-nang')
    .click('.fd-btn-login-new')
    .wait(2000)
    .insert('#Email','votranquy20@gmail.com')
    .insert('#Password','Quy123456')
    .click('#bt_submit')
    .wait(7000)
    .goto('https://www.foody.vn/da-nang')
    .insert('#pkeywords', 'Đồ ăn')
    .click('.ico-search')
    .wait(1000)
    .click('#scrollLoadingPage')
    .wait(1000)
    .click('#scrollLoadingPage')
    .wait(1000)
    .click('#scrollLoadingPage')
    .wait(1000)
    .click('#scrollLoadingPage')
    .wait(1000)
    .click('#scrollLoadingPage')
    .wait(1000)
    .click('#scrollLoadingPage')
    .wait(1000)
    .click('#scrollLoadingPage')
    .wait(1000)
    .click('#scrollLoadingPage')
    .wait(1000)
    .click('#scrollLoadingPage')
    .wait(1000)
    .click('#scrollLoadingPage')
    .wait(1000)
    .click('#scrollLoadingPage')
    .wait(1000)
    .click('#scrollLoadingPage')
    .wait(1000)
    .click('#scrollLoadingPage')
    .wait(1000)
    .click('#scrollLoadingPage')
    .wait(1000)
    .click('#scrollLoadingPage')
    .wait(1000)
    .click('#scrollLoadingPage')
    .wait(1000)
      .click('#scrollLoadingPage')
      .wait(1000)
      .click('#scrollLoadingPage')
      .wait(1000)
      .click('#scrollLoadingPage')
      .wait(1000)
    .click('#scrollLoadingPage')
    .wait(1000)
    .click('#scrollLoadingPage')
    .wait(1000)
    .evaluate(function() {
        let res = document.querySelectorAll('.filter-result-item .result-image');
        //let res = document.querySelectorAll('row-item filter-result-item .ri-avatar result-image');
        let arr = [];
        for(let i = 0; i < res.length * 1 /3 ; i++){
            let tm = res[i].querySelector('a').href;
            arr.push(tm);
        }
        return arr;
    })
    .end()
    .then(function (result){
        crawl(result,function(err,res){ 
          exportJson(res);
        });  
    })
    .catch(function (error) {
        console.error('Search failed:', error);
    });

    function exportJson(arr){
        let json = {};
        let n = arr.length;
        for(let i = 0; i < n; i++){
            json[i] = arr[i];
        }
        let jsonString = JSON.stringify(json); 
        fs.writeFile('DATA/data-doan.json', jsonString, (err) => {
            if (err) throw err;
            console.log('The file has been saved!');
        });
    }
    