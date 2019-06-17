
const sendVoteAPI = (token, id_food,  starCount, comment) => (
    fetch('http://192.168.64.2/MealRecommendationApplication-Project/api/sendVote.php',
    {   
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json'
        },
        body: JSON.stringify({token, id_food, starCount, comment})
    })
    .then(res => {
        // console.log(res);
        return res.json();})
);

module.exports = sendVoteAPI;