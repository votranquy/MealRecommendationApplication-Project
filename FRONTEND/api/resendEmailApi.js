
const resendEmailApi = (email) => (
       fetch('http://192.168.21.250/MealRecommendationApplication-Project/api/resendEmail.php',
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