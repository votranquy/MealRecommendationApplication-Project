
const resetPasswordApi = (email, password) => (
  fetch('http://192.168.64.2/MealRecommendationApplication-Project/api/resetPassword.php',
  {   
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
      },
      body: JSON.stringify({email,password})
  })
  .then(res => {
    // console.log(res);
    return res.json();})
);
module.exports = resetPasswordApi;