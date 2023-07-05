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

const savedTime = parseFloat(localStorage.getItem(STORAGE_KEY)) || 0;
iframePlayer.setCurrentTime(savedTime);
