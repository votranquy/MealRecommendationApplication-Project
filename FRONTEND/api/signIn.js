const signIn = (email, password) => (
    fetch('http://192.168.64.2/MealRecommendationApplication-Project/api/login.php',
    {   
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json'
        },
        body: JSON.stringify({ email, password })
    })
    .then(res => res.json())
);

module.exports = signIn;
