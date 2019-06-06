const crawlData = () => (
    fetch('http://192.168.21.250/MealRecommendationApplication-Project/api/')// eslint-disable-line
    .then(res => res.json())
);

export default initData;