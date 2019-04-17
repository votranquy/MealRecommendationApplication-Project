import * as firebase from 'firebase';
var config = {
  apiKey: "AIzaSyBN4kcmtkrTGOIgygu9mTns_GeR9ftuwUg",
  authDomain: "mealrecommendationapp.firebaseapp.com",
  databaseURL: "https://mealrecommendationapp.firebaseio.com",
  projectId: "mealrecommendationapp",
  storageBucket: "mealrecommendationapp.appspot.com",
  messagingSenderId: "150948047653"
};
export const firebaseApp = firebase.initializeApp(config);