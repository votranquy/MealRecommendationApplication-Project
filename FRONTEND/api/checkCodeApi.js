

const checkCodeApi = (email,code) => (
       fetch('http://192.168.21.250/MealRecommendationApplication-Project/api/checkCode.php',
       {   
           method: 'POST',
           headers: {
               'Content-Type': 'application/json',
               Accept: 'application/json'
           },
           body: JSON.stringify({email,code})
       })
       .then(res =>{return res.json()})
   );
   
   module.exports = checkCodeApi;