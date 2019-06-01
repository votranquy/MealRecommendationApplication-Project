const initData = () => (
    fetch('http://192.168.64.2/MealRecommendationApplication-Project/api/')// eslint-disable-line
    .then(res => res.json())
);

export default initData;
