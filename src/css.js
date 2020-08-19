const string = `.skin * {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
.skin *::before,
.skin *::after {
  box-sizing: border-box;
}
.skin {
  background:#ffcf00;
  min-height:70vh;
  position: relative;
}
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
@keyframes noseWave {
  0% {
    transform: rotate(0deg);
  }
  33% {
    transform: rotate(-5deg);
  }
  66% {
    transform: rotate(5deg);
  }
  99% {
    transform: rotate(0deg);
  }
}

.nose:hover {
  transform-origin: center bottom;
  animation: noseWave 300ms infinite linear;
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
.eye.left {
  transform: translateX(-100px);
}
.eye.right {
  transform: translateX(100px);
}
@keyframes eyeMove {
  0%,
  100% {
    top: 2px;
    left: 2px;
  }
  30%,
  60%,
  70% {
    top: 0;
    left: 15px;
  }
  40% {
    top: 0;
    left: 15px;
  }
  50% {
    top: 0;
    left: 10px;
  }
  80%,
  90% {
    top: 17px;
    left: 15px;
  }
}
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
.mouth .up .lip::before {
  content: "";
  display: block;
  width: 7px;
  height: 30px;
  position: absolute;
  bottom: 0;
  background: #ffcf00;
}
.mouth .up .lip.left::before {
  right: -6px;
}
.mouth .up .lip.right::before {
  left: -6px;
}
.mouth .down {
  height: 180px;
  position: absolute;
  top: 5px;
  width: 100%;
  overflow: hidden;
  animation: mouthMove 3s infinite;
}
@keyframes mouthMove {
  0%,
  46%,
  54%,
  100% {
    height: 180px;
  }
  50% {
    height: 10px;
  }
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
@keyframes cheekMove {
  0%,
  46%,
  54%,
  100% {
    width: 84px;
    height: 84px;
    top: 200px;
  }
  50% {
    width: 70px;
    height: 70px;
    top: 180px;
  }
}
.cheek > img {
  position: absolute;
  top: 50%;
  left: 50%;
}
.cheek.left {
  transform: translateX(-170px);
  background: #ff0000;
  border-radius: 50%;
}
.cheek.left > img {
  transform: rotateY(170deg);
  transform-origin: 0 0;
}
.cheek.right {
  transform: translateX(170px);
  background: #ff0000;
  border-radius: 50%;
}
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
@keyframes handMove {
  0%,
  46%,
  54%,
  100% {
    top: 360px;
  }
  50% {
    top: 356px;
  }
}
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
@keyframes box-rotate {
  0%,
  90%,
  100% {
    transform: rotate(0deg);
  }
  40%,
  50% {
    transform: rotate(360deg);
    box-shadow: 0 0 10px 5px rgba(255, 255, 255, 0.9);
  }
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
@keyframes bg_change {
  0%,
  40%,
  60%,
  90%,
  100% {
    background: none;
  }
  50% {
    background: red;
  }
}
`;

export default string;
