const [video, bar, btn ] = [
    document.querySelector('.video'),
    document.querySelector('.bar'),
    document.getElementsByClassName('play-pause')[0]
]

btn.addEventListener('click', ()=> {
    if (video.paused) {
        btn.className = 'pause';
        video.play()
    } else {
        btn.className = 'play';
        video.pause()
    }
});

video.addEventListener('timeupdate', ()=> {
    var timeline = video.currentTime / video.duration
    bar.style.width = timeline * 100 + '%'
})