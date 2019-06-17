const getRestaurantImage =  (restaurant_id) => (

 fetch("https://www.foody.vn/__get/Restaurant/Mobile_Get_HomePictures?t=1557065498601&Count=7&RestaurantId="+restaurant_id,
        {
            method:"GET",
            headers: {
                Accept: 'application/json, text/plain, */*',
                'accept-language': 'vi-VN,vi;q=0.9,fr-FR;q=0.8,fr;q=0.7,en-US;q=0.6,en;q=0.5',
                'x-requested-with' : 'XMLHttpRequest'
            }
        })
);
module.exports = getRestaurantImage;
