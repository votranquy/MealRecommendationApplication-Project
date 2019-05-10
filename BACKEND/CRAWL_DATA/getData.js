
const fetch = require('node-fetch');

async function getData(){
for (i = 770624; i < 1000000; i++){
  console.log(i);
  const restaurantid=i;
  const url = 'https://gappapi.deliverynow.vn/api/delivery/get_detail?request_id='+i+'&id_type=1';
  try{

    let resp= await fetch(url,
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


    console.log("GET DATA");

    if(responseJson.result == "success"){

                name=responseJson.reply.delivery_detail.name;
                //restaurantid=i;
                address=responseJson.reply.delivery_detail.address;
                category ='';
                for (var j = 0; j < responseJson.reply.delivery_detail.categories.length; j++){
                    category=category+responseJson.reply.delivery_detail.categories[j]+', ';
                }
                latitude=responseJson.reply.delivery_detail.position.latitude;
                longitude=responseJson.reply.delivery_detail.position.longitude;
                rate=responseJson.reply.delivery_detail.rating.avg;
                totalReview=responseJson.reply.delivery_detail.rating.total_review;
                first_image=responseJson.reply.delivery_detail.photos[1].value;

                try{
                   let save=await fetch('http://192.168.64.2/MealRecommendationApplication-Project/api/saveData.php',
                    {   
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                            Accept: 'application/json'
                        },
                        body:  JSON.stringify({name,restaurantid,address,category,latitude,longitude,rate,first_image,totalReview})
                    });
                }
                catch(err){console.log(err)};
                
    }

    console.log("SAVE DATA");

    }
  catch(err){console.log(err);};

  //Update Menu
  const url_menu= 'https://gappapi.deliverynow.vn/api/dish/get_delivery_dishes?request_id='+restaurantid+'&id_type=1';
  try{
    let resp_menu =await fetch(url_menu,
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

    console.log("GET MENU");

    if(responsemenuJson.result == "success"){

        var menu="";
        for (var k = 0; k < responsemenuJson.reply.menu_infos.length; k++){
            for(var kk=0; kk<responsemenuJson.reply.menu_infos[k].dishes.length;kk++)
            menu=menu+responsemenuJson.reply.menu_infos[k].dishes[kk].name+', ';
        }

        let save =await fetch('http://192.168.64.2/MealRecommendationApplication-Project/api/updateMenu.php',
        {   
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json'
            },
            body:  JSON.stringify({restaurantid,menu})
        });

    }

    console.log("SAVE MENU");
    
  }
  catch(err){console.log(err);};
 }
}


getData();