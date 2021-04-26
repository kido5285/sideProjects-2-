var push = require('web-push')

let vapidkeys = {
    publicKey: 'BPyo_2l71GINR4gYLtlg4UJFVXvozkIWN2E8BBABgn38O9XJvC_0ixcXskSpj-ReRAPioyIhR7R15JZDJdxQ7Yw',      
    privateKey: 'Vqv4I3ksQsce9I6cYom0g7if02VNjjvBfpD4ZoU0uMc'
  };

push.setVapidDetails('matilo:test@code.co.uk', vapidkeys.publicKey, vapidkeys.privateKey)

let sub = 
{
  endpoint:"https://fcm.googleapis.com/fcm/send/fX-MliS8Hk4:APA91bFpuEnLbdq3buN0-eWhVAkb3l6-tzuh3K4N3N_OOAkALOJUTUyMBbhhrXnfnPkmu60DmmVdGWPMthXDn3P-FhvWpHzQpUjHq_PKrK_CvHZJcKZOn_QtyTEt3d6lgf5C-WRvCziO",
  expirationTime:null,
  keys:{
    p256dh:"BMfDphB0j_OT6GJSgRsglCuynXU9K2mf3kKEIlrCTFeyVX8pcz32UpNxHPEAREIrHAGgDDoq1t5Jz0Wa96MVst4",
    auth:"tFuMry1-c2QsJXhHR26jiw"
  }
};

push.sendNotification(sub, 'text message')