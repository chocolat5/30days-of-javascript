import './style.scss';

const app = document.getElementById('app');
const buttonTakePhoto = document.getElementById('takephoto');

const video = document.querySelector('.player');
const canvas = document.querySelector('.photo');
const ctx = canvas.getContext('2d');
const strip = document.querySelector('.strip');

const getVideo = () => {
  navigator.mediaDevices.getUserMedia({ video: true, audio: false })
    .then(localMediaStream => {
    video.srcObject = localMediaStream;
    video.play();
  })
  .catch(error => {
    console.error('Oh No!', error);
  });
};

const paintToCanvas = () => {
  const width = video.videoWidth;
  const height = video.videoHeight;
  canvas.width = width;
  canvas.height = height;

  return setInterval(() => {
    ctx.drawImage(video, 0, 0, width, height);
//    let pixels = ctx.getImageData(0, 0, width, height);
//    pixels = redEffect(pixels);
//    ctx.putImageData(pixels, 0, 0);
  }, 30);
}

const takePhoto = () => {
  const data = canvas.toDataURL('image/jpeg');
  const link = document.createElement('a');
  link.href = data;
  link.innerHTML = `<img src="${data}" alt="Your photo" />`;
  link.textContent = 'Download Image';

  strip.insertBefore(link, strip.firstChild);
}

const redEffect = (pixels) => {
  for(let i = 0; i < pixels.data.length; i += 4 ) {
    pixels.data[i + 0] = pixels.data[i + 0] + 100;
    pixels.data[i + 1] = pixels.data[i + 1] - 50;
    pixels.data[i + 2] = pixels.data[i + 2] * 0.5;
  }
  return pixels;
}

getVideo();

video.addEventListener('canplay', paintToCanvas);
buttonTakePhoto.addEventListener('click', takePhoto);