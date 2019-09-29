export default {
  firebase: {
    apiKey: process.env.VUE_APP_FIREBASE_APIKEY,
    authDomain: "web-dev-portfolio-prj.firebaseapp.com",
    databaseURL: "https://web-dev-portfolio-prj.firebaseio.com",
    projectId: "web-dev-portfolio-prj",
    storageBucket: "web-dev-portfolio-prj.appspot.com",
    messagingSenderId: process.env.VUE_APP_FIREBASE_MESSAGINGSENDERID,
    appId: process.env.VUE_APP_FIREBASE_APPID
  }
}