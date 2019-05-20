
const fetch = require('node-fetch');

async function getMenu(){
    let count =0 ;

    for (i = 655460; i < 778392; i++){

        console.log(i);

       //Get data for Review Menu
       let resp_menu =await fetch('https://www.foody.vn/__get/Delivery/GetDeliveryDishes?t=1557065498605&RequestCount=100&RestaurantId='+i+'&SortType=2&NextItemId=0',
       {
           method: 'GET',
           headers: {
               Accept: 'application/json, text/plain, */*',
               'accept-language':'vi-VN,vi;q=0.9,fr-FR;q=0.8,fr;q=0.7,en-US;q=0.6,en;q=0.5',
               'x-requested-with':'XMLHttpRequest',

           },
       });

       let responsemenuJson =await resp_menu.json();

       try{

           for (var k = 0; k < responsemenuJson.Dishes.Items.length; k++){
               let restaurant_id = i;
               let food_id = responsemenuJson.Dishes.Items[k].Id;
               let name    = responsemenuJson.Dishes.Items[k].Name;
               let price   = responsemenuJson.Dishes.Items[k].Price;
               let image   = responsemenuJson.Dishes.Items[k].ImageUrl;
               
                let save =await fetch('http://10.0.12.57/MealRecommendationApplication-Project/api/saveMenu.php',
                {   
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        Accept: 'application/json'
                    },
                    body:  JSON.stringify({restaurant_id,food_id, name, price, image})
                });
                count++;         

            }
       }catch (err) {}

    }
    console.log(count);
}

getMenu();

