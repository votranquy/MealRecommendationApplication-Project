const sendEmailToGetPasswordApi = (email) => (
  fetch('http://192.168.64.2/MealRecommendationApplication-Project/api/forgetPassword.php',
  {   
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
      },
      body: JSON.stringify({email})
  })
  .then(res => {
    // console.log(res);
    return res.json();})
);
module.exports = sendEmailToGetPasswordApi;