const string = `/*你好我是一名前端新人，
今天和我一起用CSS画一只可爱的皮卡丘吧
先来画皮卡丘的皮肤*/
.skin {
  background:#ffcf00;
  min-height:70vh;
  position: relative;
}
/*接下来画鼻子*/
.nose {
  border: 10px solid black;
  border-color: black transparent transparent;
  border-bottom: none;
  width: 0px;
  height: 0px;
  position: relative;
  left: 50%;
  top: 100px;
  margin-left: -10px;
  z-index: 10;
}
.yuan {
  position: absolute;
  width: 20px;
  height: 6px;
  top: -16px;
  left: -10px;
  border-radius: 10px 10px 0 0;
  background: black;
}
/*画眼睛*/
.eye {
  border: 2px solid #000;
  width: 64px;
  height: 64px;
  position: absolute;
  left: 50%;
  top: 55px;
  margin-left: -32px;
  background: #2e2e2e;
  border-radius: 50%;
}
.eye::before {
  content: "";
  display: block;
  border: 3px solid #000;
  width: 30px;
  height: 30px;
  background: #fff;
  border-radius: 50%;
  position: relative;
  left: 4px;
  top: 2px;
  animation: eyeMove 3s infinite;
}
/*画嘴巴*/
.mouth {
  width: 200px;
  height: 200px;
  position: absolute;
  left: 50%;
  top: 125px;
  margin-left: -100px;
}
.mouth .up {
  position: relative;
  top: -20px;
  z-index: 1;
}
.mouth .up .lip {
  border: 3px solid black;
  height: 30px;
  width: 100px;
  background: #ffcf00;
  border-top-color: transparent;
  border-right-color: transparent;
  position: relative;
  position: absolute;
  left: 50%;
  margin-left: -50px;
}
.mouth .up .lip.left {
  border-radius: 0 0 0 50px;
  transform: rotate(-15deg) translateX(-53px);
}
.mouth .up .lip.right {
  border-radius: 0 0 50px 0;
  transform: rotate(15deg) translateX(53px);
}
.mouth .down {
  height: 180px;
  position: absolute;
  top: 5px;
  width: 100%;
  overflow: hidden;
  animation: mouthMove 3s infinite;
}
.mouth .down .yuan1 {
  border: 3px solid black;
  width: 150px;
  height: 1000px;
  position: absolute;
  bottom: 0;
  left: 50%;
  margin-left: -75px;
  border-radius: 75px/300px;
  background: #9b000a;
  overflow: hidden;
}
.mouth .down .yuan1 .yuan2 {
  width: 200px;
  height: 300px;
  background: #ff485f;
  position: absolute;
  bottom: -155px;
  left: 50%;
  margin-left: -100px;
  border-radius: 100px;
}
/*画脸颊*/
.cheek {
  position: absolute;
  left: 50%;
  border: 3px solid black;
  width: 84px;
  height: 84px;
  top: 155px;
  margin-left: -44px;
  z-index: 3;
  animation: cheekMove 3s infinite;
}
/*再加两条小手*/
.hand {
  position: absolute;
  left: 50%;
  top: 360px;
  margin-left: -60px;
  animation: handMove 1s infinite;
}
.hand.left {
  transform: translateX(-90px);
}
.hand.right {
  transform: translateX(96px) rotateY(180deg);
}
/*精灵球*/
.box {
  width: 100px;
  height: 100px;
  border: 3px solid #fff;
  border-radius: 50%;
  position: relative;
  box-shadow: 0 0 5px rgba(255, 255, 255, 0.9);
  left: 50%;
  top: 354px;
  margin-left: -56px;
  animation: box-rotate 4s ease-in-out infinite alternate;
}
.box_main {
  width: 98px;
  height: 98px;
  border-radius: 50%;
  background: red;
  border: 1px solid #333;
  position: absolute;
  top: 0;
  left: 0;
  overflow: hidden;
}
.box_main::before {
  content: "";
  display: block;
  width: 98px;
  height: 40px;
  background: #fff;
  position: absolute;
  bottom: 0;
  left: 0;
}
.box_main::after {
  content: "";
  width: 98px;
  height: 18px;
  background: rgb(59, 53, 67);
  position: absolute;
  top: 50%;
  left: 0;
  margin-top: -6px;
}
.box_circle {
  width: 36px;
  height: 36px;
  border: 4px solid rgb(59, 53, 67);
  border-radius: 50%;
  background: #fff;
  position: absolute;
  left: 50%;
  top: 50%;
  margin-left: -18px;
  margin-top: -16px;
  z-index: 5;
}
.box_circle::after {
  content: "";
  width: 18px;
  height: 18px;
  border: 1px solid rgb(59, 53, 67);
  border-radius: 50%;
  position: absolute;
  top: 50%;
  left: 50%;
  margin-left: -9px;
  margin-top: -9px;
  animation: bg_change 4s infinite;
}
`;

const player = {
  id: undefined,
  time: 100,
  ui: {
    demo: document.querySelector("#demo"),
    demo2: document.querySelector("#demo2"),
  },
  events: {
    "#btnPause": "pause",
    "#btnPlay": "play",
    "#btnSlow": "slow",
    "#btnNormal": "normal",
    "#btnFast": "fast",
  },
  n: 1,
  init: () => {
    player.ui.demo.innerText = string.substr(0, player.n);
    player.ui.demo2.innerHTML = string.substr(0, player.n);
    player.bindEvents();
    player.play();
  },
  bindEvents: () => {
    for (let key in player.events) {
      if (player.events.hasOwnProperty(key)) {
        const value = player.events[key]; //pause / play /slow
        document.querySelector(key).onclick = player[value];
      }
    }
  },
  run: () => {
    player.n += 1;
    if (player.n > string.length) {
      window.clearInterval(player.id);
      return;
    }
    player.ui.demo.innerText = string.substr(0, player.n);
    player.ui.demo2.innerHTML = string.substr(0, player.n);
    player.ui.demo.scrollTop = player.ui.demo.scrollHeight;
  },
  play: () => {
    player.id = setInterval(player.run, player.time);
  },
  pause: () => {
    window.clearInterval(player.id);
  },
  slow: () => {
    player.pause();
    player.time = 300;
    player.play();
  },
  normal: () => {
    player.pause();
    player.time = 100;
    player.play();
  },
  fast: () => {
    player.pause();
    player.time = 0;
    player.play();
  },
};

player.init();

const $mouth = $(".mouth");
const $sound = $("#sound").get(0);

$mouth.on("mouseover", () => {
  $sound.play();
});