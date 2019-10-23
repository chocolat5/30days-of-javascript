import './style.scss';

const app = document.getElementById('app');

// triggerとなるシングルリンクの取得
const triggers = document.querySelectorAll('a');

// ハイライト用のspanを生成
const highlight = document.createElement('span');
highlight.classList.add('highlight');
document.body.append(highlight);

// ハイライトする関数
function highlightLink() {
  const linkCoords = this.getBoundingClientRect();

  const coords = {
    width: linkCoords.width,
    height: linkCoords.height,
    top: linkCoords.top + window.scrollY,
    left: linkCoords.left + window.scrollX,
  };

  highlight.style.width = `${coords.width}px`;
  highlight.style.height = `${coords.height}px`;
  highlight.style.transform = `translate(${coords.left}px, ${coords.top}px)`;
}

// triggerにマウスが乗った際に関数を実行
triggers.forEach(a => a.addEventListener('mouseenter', highlightLink));