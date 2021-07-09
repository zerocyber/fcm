importScripts('https://www.gstatic.com/firebasejs/8.6.8/firebase-app.js'); 
importScripts('https://www.gstatic.com/firebasejs/8.6.5/firebase-messaging.js'); 

const firebaseConfig = {
    apiKey: "AIzaSyCPlrxiAmvq-g7lNIFcsREKWnyLk2Cwhxw",
    authDomain: "p2p-dev-6b7c1.firebaseapp.com",
    projectId: "p2p-dev-6b7c1",
    storageBucket: "p2p-dev-6b7c1.appspot.com",
    messagingSenderId: "934085220942",
    appId: "1:934085220942:web:de68eb2cc4854bd828c11f",
    measurementId: "G-XWH557P65Q"
};

// 서비스워커 firebase App 실행
firebase.initializeApp(firebaseConfig);

const messaging = firebase.messaging();

// 웹 앱이 background 상태일 때 메시지 처리
messaging.onBackgroundMessage((payload) => {
    console.log('[firebase-messaging-sw.js] Received background message ', payload);

    // 백그라운드 알림 내용 설정
    const notification_title = payload.notification.title; // 제목
    const notification_options = {
        body: payload.notification.body, // 내용
        icon: payload.notification.image, // 알림배너에 출력될 이미지 
    };

    self.registration.showNotification(notification_title, notification_options);
});
