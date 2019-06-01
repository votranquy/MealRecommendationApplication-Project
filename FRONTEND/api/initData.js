const initData = () => (
    fetch('http://192.168.43.103/MealRecommendationApplication-Project/api/')// eslint-disable-line
    .then(res => res.json())
);

export default initData;
