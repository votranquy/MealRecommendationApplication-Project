const checkLogin = (token) => (
    fetch('http://192.168.21.250/MealRecommendationApplication-Project/api/check_login.php',
    {   
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json'
        },
        body: JSON.stringify({ token })
    })
    .then(res => res.json())
);

module.exports = checkLogin;
