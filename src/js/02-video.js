var throttle = require('lodash.throttle');
const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);

console.log(localStorage.getItem("videoplayer-current-time", "second"));
//=========================================================================================================================================
player.setCurrentTime(localStorage.getItem("videoplayer-current-time")).then(function (seconds) {
}).catch(function (error) {
    switch (error.name) {
        case 'RangeError':
            break;

        default:
            break;
    }
});
player.on('timeupdate', throttle((time) => {
    localStorage.setItem("videoplayer-current-time", `${time.seconds}`);
}, 1000)
);
