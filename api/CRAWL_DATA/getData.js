
const fetch = require('node-fetch');

async function getData(){
    let count =0 ;

    for (i = 648405; i < 648405 +100; i++){

        console.log(i);


        //Get data for Restaurant
        let resp= await fetch('https://gappapi.deliverynow.vn/api/delivery/get_detail?request_id='+i+'&id_type=1',
        {
            method: 'GET',
            headers: {
                Accept: 'application/json, text/plain, */*',
                'x-foody-api-version':1,
                'x-foody-app-type':1004,
                'x-foody-client-id': '' ,
                'x-foody-client-type':1,
                'x-foody-client-version':1
            },
        }); 

        let responseJson = await resp.json();

        try{   
            console.log(responseJson);
            count = count + 1;
            let name         =responseJson.reply.delivery_detail.name;
            let address     =responseJson.reply.delivery_detail.address;
            let category    ='';
            for (var j = 0; j < responseJson.reply.delivery_detail.categories.length; j++){
                category    =category+responseJson.reply.delivery_detail.categories[j]+', ';
            }
            let latitude     =responseJson.reply.delivery_detail.position.latitude;
            let longitude   =responseJson.reply.delivery_detail.position.longitude;
            let rate          =responseJson.reply.delivery_detail.rating.avg;
            let totalReview =responseJson.reply.delivery_detail.rating.total_review;
            let first_image =responseJson.reply.delivery_detail.photos[1].value;
            let restaurantid = i;
            let responseresult =await fetch('http://192.168.64.2/MealApplication-Project/api/saveData.php',
                {   
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        Accept: 'application/json'
                    },
                    body:  JSON.stringify({name,restaurantid,address,category,latitude,longitude,rate,first_image,totalReview})
                });
       }catch (err) {   console.log(err); }


       //Get data for Review Menu
       let resp_menu =await fetch('https://gappapi.deliverynow.vn/api/dish/get_delivery_dishes?request_id='+i+'&id_type=1',
       {
           method: 'GET',
           headers: {
               Accept: 'application/json, text/plain, */*',
               'x-foody-api-version':1,
               'x-foody-app-type':1004,
               'x-foody-client-id': '' ,
               'x-foody-client-type':1,
               'x-foody-client-version':1
           },
       });

       let responsemenuJson =await resp_menu.json();

       try{
           var menu="";
           for (var k = 0; k < responsemenuJson.reply.menu_infos.length; k++){
               for(var kk=0; kk<responsemenuJson.reply.menu_infos[k].dishes.length;kk++)
               menu=menu+responsemenuJson.reply.menu_infos[k].dishes[kk].name+', ';
           }
           let save =await fetch('http://192.168.64.2/MealApplication-Project/api/updateMenu.php',
           {   
               method: 'POST',
               headers: {
                   'Content-Type': 'application/json',
                   Accept: 'application/json'
               },
               body:  JSON.stringify({i,menu})
           });

       }catch (err) {console.log(err);}

    }
    console.log(count);
}

getData();

// async function getMenu(){
//     for (i = 999800; i < 1000000; i++){
//         const url_menu='https://gappapi.deliverynow.vn/api/dish/get_delivery_dishes?request_id='+restaurantid+'&id_type=1';
//         let resp_menu =await fetch(url_menu,
//         {
//             method: 'GET',
//             headers: {
//                 Accept: 'application/json, text/plain, */*',
//                 'x-foody-api-version':1,
//                 'x-foody-app-type':1004,
//                 'x-foody-client-id': '' ,
//                 'x-foody-client-type':1,
//                 'x-foody-client-version':1
//             },
//         });
//         let responsemenuJson =await resp_menu.json();
//         try{
//             var menu="";
//             for (var k = 0; k < responsemenuJson.reply.menu_infos.length; k++){
//                 for(var kk=0; kk<responsemenuJson.reply.menu_infos[k].dishes.length;kk++)
//                 menu=menu+responsemenuJson.reply.menu_infos[k].dishes[kk].name+', ';
//             }
//             let save =await fetch('http://192.168.64.2/MealApplication-Project/api/updateMenu.php',
//             {   
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json',
//                     Accept: 'application/json'
//                 },
//                 body:  JSON.stringify({i,menu})
//             });
//             let saveJson = await save.json();
//             console.log(saveJson);
//         }catch (err) {console.log(err);}
//     }
// }

