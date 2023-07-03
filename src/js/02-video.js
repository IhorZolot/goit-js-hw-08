import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const STORAGE_KEY = 'videoplayer-current-time';

const iframe = document.querySelector('iframe');
const iframePlayer = new Player(iframe);

iframePlayer.on(
  'timeupdate',
  throttle(function (event) {
    const currentTime = event.seconds;
    localStorage.setItem(STORAGE_KEY, currentTime);
  }, 1000)
);

const savedTime = localStorage.getItem(STORAGE_KEY);
const currentTime = parseFloat(savedTime);
if (currentTime) {
  iframePlayer.setCurrentTime(currentTime);
}

// Який з цих двох методів більш правильний я не знаю працювало і так і так! Але в прикладі з if

// const savedTime = localStorage.getItem(STORAGE_KEY);
// iframePlayer.setCurrentTime(savedTime);
