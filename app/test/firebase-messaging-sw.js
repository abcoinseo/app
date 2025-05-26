// firebase-messaging-sw.js
importScripts('https://www.gstatic.com/firebasejs/10.12.1/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.12.1/firebase-messaging-compat.js');

firebase.initializeApp({
  apiKey: "AIzaSyD3kO_ULF76RJkJf1yhvo5cdM4Hoqo4fHA",
  authDomain: "abcoinseo-e2f66.firebaseapp.com",
  projectId: "abcoinseo-e2f66",
  messagingSenderId: "396837162872",
  appId: "1:396837162872:web:c204ca5c36f5d2d87bc28d"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage(function(payload) {
  const { title, body } = payload.notification;
  self.registration.showNotification(title, {
    body: body
  });
});
