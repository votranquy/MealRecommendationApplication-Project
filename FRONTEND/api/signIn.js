const signIn = (email, password) => (
   fetch('http://10.0.23.29/MealRecommendationApplication-Project/api/login.php',
    {   
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json'
        },
        body: JSON.stringify({ email, password })
    })
    // .then(res => res.json())
    // return response;
);

module.exports = signIn;
