
const resendEmailApi = (email) => (
       fetch('http://10.0.12.57/MealRecommendationApplication-Project/api/resendEmail.php',
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