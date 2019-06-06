const signIn = (email, password) => (
   fetch('http://192.168.21.250/MealRecommendationApplication-Project/api/login.php',
    {   
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json'
        },
        body: JSON.stringify({ email, password })
    })
    .then(res => {return res.json()})
    // return response;
);

module.exports = signIn;
