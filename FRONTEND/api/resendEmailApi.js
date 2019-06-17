
const resendEmailApi = (email) => (
       fetch('http://192.168.43.103/MealRecommendationApplication-Project/api/resendEmail.php',
       {   
           method: 'POST',
           headers: {
               'Content-Type': 'application/json',
               Accept: 'application/json'
           },
           body: JSON.stringify({email})
       })
       .then(res =>{return res.json()})
   );
   
   module.exports = resendEmailApi;