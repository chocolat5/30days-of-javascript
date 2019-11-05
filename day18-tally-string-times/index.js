import './style.scss';

const app = document.getElementById('app');

const timeNodes = [...document.querySelectorAll('[data-time]')];

const seconds = timeNodes
  // [data-time]の値を配列で取得
  // ["5:43", "2:33", "3:45", "0:47", "5:21", "6:56", "3:46", "5:25", "3:14", "3:31", "5:59", "3:07", "11:29", "8:57", "5:49", "5:52", "5:50", "9:13", "11:51", "7:58"]
  .map(node => node.dataset.time)
  // 分数と秒数に一旦分けて、秒数の合計に直す
  // [343, 153, 225, 47, 321, 416, 226, 325, 194, 211, 359, 187, 689, 537, 349, 352, 350, 553, 711, 478]
  .map(timecode => {
    const [mins, secs] = timecode.split(':').map(parseFloat);
    return (mins * 60) + secs;
    console.log((mins * 60) + secs);
  })
  // 秒数の配列の値をすべて合計する
  .reduce((total, videoSeconds) => total + videoSeconds); // 7026

let secondsLeft;
// 秒数の合計を何時間に変換
const hours = Math.floor(seconds / 3600);
// 秒数の端数を算出
secondsLeft = seconds % 3600;

// 端数の秒数を分数に直す
const mins = Math.floor(secondsLeft / 60);
// 端数の秒数を分数に直す
secondsLeft = seconds % 60;

console.log(hours, mins, secondsLeft); //1 57 6

const time = document.createElement('div');
time.append(`Total time ${hours} : ${mins} : ${secondsLeft}`);
app.append(time);