import React, {useState, useEffect} from 'react';
import Topsection from './reactcomponent/Topsection';
import './App.css';
var counter = 'none';
function App() {

  const addZero = (num) => {
      if(num < 10) {
          return '0' + num;
      } else {
          return num;
      }
  }

  var 点名 = {
    sub: '点名',
    teach: '陈美娟老师',
    link: 'https://us04web.zoom.us/j/75693526313?pwd=TVJVek10d0Y2cXdUcWd0bXpvNDI0QT09'
  }

  var 班会 = {
    sub: '班会',
    teach: '陈美娟老师',
    link: 'https://us04web.zoom.us/j/75693526313?pwd=TVJVek10d0Y2cXdUcWd0bXpvNDI0QT09'
  }

  var 数学 = {
    sub: '数学',
    teach: '陈美娟老师',
    link: 'https://us04web.zoom.us/j/75693526313?pwd=TVJVek10d0Y2cXdUcWd0bXpvNDI0QT09'
  }

  var 历史 = {
    sub: '历史',
    teach: '卓秋霞老师',
    link: 'https://zoom.us/j/92320837746?pwd=YmVHR2NWUkRBbFh2NlFzbXY0ejg3dz09',
  }

  var 国文 = {
    sub: '国文',
    teach: '陈川蓉老师',
    link: 'https://us04web.zoom.us/j/7697337030?pwd=U0lJWFdFODNBMzhUQlBPdDZBOUFsZz09',
  }

  var 华文 = {
    sub: '华文',
    teach: '刘燕萍老师',
    link: 'https://zoom.us/j/6579248953?pwd=b3E0eVFrRVUzZ3FadTFOQnBHUjMvdz09',
  }

  var 科学 = {
    sub: '科学',
    teach: '郑守旺老师',
    link: 'https://zoom.us/j/6914301389?pwd=L1dTbEJIbTFTdFp3djFiQWNGelBodz09',
  }

  var 地理 = {
    sub: '地理',
    teach: '叶茉莉老师',
    link: 'https://us04web.zoom.us/j/8121469858?pwd=NHFablIvalg2Qmg0d0w4L21iaXlSdz09',
  }

  var RBT = {
    sub: 'RBT',
    teach: '营吉祥老师',
    link: 'https://us04web.zoom.us/j/75501084829?pwd=aUV4ektWbmtsYWNLbFdudGtzM0Izdz09',
  }

  var 英文 = {
    sub: '英文',
    teach: '林瑜丰老师',
    link: 'https://us04web.zoom.us/j/3269454925?pwd=L0lxSWFmNzlDeTJxb1NoSlVHTTRvdz09',
  }

  var 英文会话 = {
    sub: '英文会话',
    teach: '',
    link: 'https://us04web.zoom.us/j/3269454925?pwd=L0lxSWFmNzlDeTJxb1NoSlVHTTRvdz09',
  }

  var 历国 = {
    sub: '历国',
    teach: '许亿商老师',
    link: 'https://meet.google.com/lookup/epqqsfcjlx?authuser=1&hs=179',
  }

  var 美术 = {
    sub: '美术',
    teach: '曾添才老师',
    link: 'https://meet.google.com/lookup/d4emz36ual?authuser=1&hs=179'
  }

  var 体育 = {
    sub: '体育',
    teach: '周诗华老师',
    link: 'https://meet.google.com/lookup/htpdz7cy4k?authuser=1&hs=179',
  }

  var 音乐 = {
    sub: '音乐',
    teach: '郑佳惠老师',
    link: 'https://us04web.zoom.us/j/9629766341?pwd=S3dxVFBBNzYwU1RXRG1PelJmOXhBZz09'
  }

  var data = [[], 
  [
    点名, 数学, 历史, 国文, 华文, 科学, 历国, 英文, 科学, 美术, 美术
  ],
  [
    点名, 科学, 华文, 华文, RBT, RBT, 科学, 国文, 历国, 数学, 地理
  ],
  [
    点名, 班会, 英文会话, 科学, 数学, 数学, 国文, 科学, 英文, 历史, 华文 
  ],
  [
    点名, RBT, RBT, 华文, 科学, 地理, 国文, 国文, 数学, 英文, 英文
  ],
  [
    点名, 数学, 体育, 华文, 历国, 地理, 英文, 数学, 国文, 科学, 科学
  ],
  [
    点名, 地理, 科学, 音乐, 华文, 英文, 国文, 历史, 数学
  ]
]

  for(let i=0; i < data.length; i++) {
    if(data[i].length === 11) {
      data[i][0].time = '07:30-07:45';
      data[i][1].time = '07:45-08:25';
      data[i][2].time = '08:25-09:05';
      data[i][3].time = '09:05-09:45';
      data[i][4].time = '10:10-10:50';
      data[i][5].time = '10:50-11:30';
      data[i][6].time = '11:30-12:10';
      data[i][7].time = '12:10-12:50';
      data[i][8].time = '13:25-14:05';
      data[i][9].time = '14:05-14:40';
     data[i][10].time = '14:40-15:15';
    } else if(data[i].length === 9) {
      data[i][0].time = '07:30-07:45';
      data[i][1].time = '07:45-08:25';
      data[i][2].time = '08:25-09:05';
      data[i][3].time = '09:05-09:45';
      data[i][4].time = '10:10-10:50';
      data[i][5].time = '10:50-11:30';
      data[i][6].time = '11:30-12:10';
      data[i][7].time = '12:10-12:50';
      data[i][8].time = '13:25-14:05';
    }
  } 
  setInterval(() => {
    var d = new Date;
    if(d.getDay() === 6) {
      if(d.getHours() === 7 && d.getMinutes() >= 30 && d.getMinutes() < 46) {
        counter = 0;
        document.getElementById('teach').textContent = data[d.getDay()][counter].teach;
      } else if(d.getHours() === 7 && d.getMinutes() >= 46 && d.getMinutes() <= 59 || d.getHours() === 8 && d.getMinutes() >= 0 && d.getMinutes() < 26) {
        counter = 1;
        document.getElementById('teach').textContent = data[d.getDay()][counter].teach;
      } else if(d.getHours() === 8 && d.getMinutes() >= 26 && d.getMinutes() <= 59 || d.getHours() === 9 && d.getMinutes() >= 0 && d.getMinutes() < 6) {
        counter = 2;
        document.getElementById('teach').textContent = data[d.getDay()][counter].teach;
      } else if(d.getHours() === 9 && d.getMinutes() >= 6 && d.getMinutes() <= 45) {
        counter = 3;
        document.getElementById('teach').textContent = data[d.getDay()][counter].teach;
      } else if(d.getHours() === 10 && d.getMinutes() >= 10 && d.getMinutes() <= 50) {
        counter = 4;
        document.getElementById('teach').textContent = data[d.getDay()][counter].teach;
      } else if(d.getHours() === 10 && d.getMinutes() >= 51 && d.getMinutes() <= 59 || d.getHours() === 11 && d.getMinutes() >= 0 && d.getMinutes() < 31) {
        counter = 5;
        document.getElementById('teach').textContent = data[d.getDay()][counter].teach;
      } else if(d.getHours() === 11 && d.getMinutes() >= 31 && d.getMinutes() <= 59 || d.getHours() === 12 && d.getMinutes() >= 0 && d.getMinutes() < 11) {
        counter = 6;
        document.getElementById('teach').textContent = data[d.getDay()][counter].teach;
      } else if(d.getHours() === 12 && d.getMinutes() >= 11 && d.getMinutes() <= 50) {
        counter = 7;
        document.getElementById('teach').textContent = data[d.getDay()][counter].teach;
      } else if(d.getHours() === 13 && d.getMinutes() >= 25 && d.getMinutes() <= 59 || d.getHours() === 14 && d.getMinutes() >= 0 && d.getMinutes() < 6) {
        counter = 8;
        document.getElementById('teach').textContent = data[d.getDay()][counter].teach;
      } else {
        document.getElementById('teach').textContent = 'Teacher';
      }
    } else if(d.getDay() > 0 && d.getDay() < 6) {
      if(d.getHours() === 7 && d.getMinutes() >= 30 && d.getMinutes() < 46) {
        counter = 0;
        document.getElementById('teach').textContent = data[d.getDay()][counter].teach;
      } else if(d.getHours() === 7 && d.getMinutes() >= 46 && d.getMinutes() <= 59 || d.getHours() === 8 && d.getMinutes() >= 0 && d.getMinutes() < 26) {
        counter = 1;
        document.getElementById('teach').textContent = data[d.getDay()][counter].teach;
      } else if(d.getHours() === 8 && d.getMinutes() >= 26 && d.getMinutes() <= 59 || d.getHours() === 9 && d.getMinutes() >= 0 && d.getMinutes() < 6) {
        counter = 2;
        document.getElementById('teach').textContent = data[d.getDay()][counter].teach;
      } else if(d.getHours() === 9 && d.getMinutes() >= 6 && d.getMinutes() <= 45) {
        counter = 3;
        document.getElementById('teach').textContent = data[d.getDay()][counter].teach;
      } else if(d.getHours() === 10 && d.getMinutes() >= 10 && d.getMinutes() <= 50) {
        counter = 4;
        document.getElementById('teach').textContent = data[d.getDay()][counter].teach;
      } else if(d.getHours() === 10 && d.getMinutes() >= 51 && d.getMinutes() <= 59 || d.getHours() === 11 && d.getMinutes() >= 0 && d.getMinutes() < 31) {
        counter = 5;
        document.getElementById('teach').textContent = data[d.getDay()][counter].teach;
      } else if(d.getHours() === 11 && d.getMinutes() >= 31 && d.getMinutes() <= 59 || d.getHours() === 12 && d.getMinutes() >= 0 && d.getMinutes() < 11) {
        counter = 6;
        document.getElementById('teach').textContent = data[d.getDay()][counter].teach;
      } else if(d.getHours() === 12 && d.getMinutes() >= 11 && d.getMinutes() <= 50) {
        counter = 7;
        document.getElementById('teach').textContent = data[d.getDay()][counter].teach;
      } else if(d.getHours() === 13 && d.getMinutes() >= 25 && d.getMinutes() <= 59 || d.getHours() === 14 && d.getMinutes() >= 0 && d.getMinutes() < 6) {
        counter = 8;
        document.getElementById('teach').textContent = data[d.getDay()][counter].teach;
      } else if(d.getHours() === 14 && d.getMinutes() >= 6 && d.getMinutes() <= 40) {
        counter = 9;
        document.getElementById('teach').textContent = data[d.getDay()][counter].teach;
      } else if(d.getHours() === 14 && d.getMinutes() >= 41 && d.getMinutes() <= 59 || d.getHours() === 15 && d.getMinutes() >= 0 && d.getMinutes() < 16) {
        counter = 10;
        document.getElementById('teach').textContent = data[d.getDay()][counter].teach;
      } else {
        document.getElementById('teach').textContent = 'Teacher';
      }
    }
  }, 1000)
  setInterval(() => {
    var d = new Date;
    if(counter === 0) {
      new Notification(data[d.getDay()][counter].teach)
    } else if(counter === 1) {
      new Notification(data[d.getDay()][counter].teach)
    } else if(counter === 2) {
      new Notification(data[d.getDay()][counter].teach)
    } else if(counter === 3) {
      new Notification(data[d.getDay()][counter].teach)
    } else if(counter === 4) {
      new Notification(data[d.getDay()][counter].teach)
    } else if(counter === 5) {
      new Notification(data[d.getDay()][counter].teach)
    } else if(counter === 6) {
      new Notification(data[d.getDay()][counter].teach)
    } else if(counter === 7) {
      new Notification(data[d.getDay()][counter].teach)
    } else if(counter === 8) {
      new Notification(data[d.getDay()][counter].teach)
    } else if(counter === 9) {
      new Notification(data[d.getDay()][counter].teach)
    } else if(counter === 10) {
      new Notification(data[d.getDay()][counter].teach)
    }
  }, 2400000)

  function requestPermission() {
    if(!("Notification" in window)) {
      alert('This browser does not support system notifications')
    } else if(Notification.permission !== 'denied') {
      Notification.requestPermission();
    }
  }

  requestPermission();

  function notify(link, teach, sub) {
    var notification = new Notification(teach, {
      body: sub
    })

    notification.onclick = () => {
      window.open(link);
    }

    setTimeout(notification.close.bind(notification), 3000)
  }

  return (
    <div className="App"> 
      <Topsection/>
    </div>
  );
}

export default App;