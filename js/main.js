const [video, bar, btn ] = [
    document.querySelector('.video'),
    document.querySelector('.bar'),
    document.getElementsByClassName('play-pause')[0]
]

const [prev, next, range] = [
    document.querySelector('.prev'),
    document.querySelector('.next'),
    document.querySelector('input.bar'),
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
    video.ended ? btn.className = 'play' : ''
})

range.addEventListener('change', (e) => { 
    video.volume = parseInt(e.target.value) / 100
}); 
// init Video Volume
video.volume = parseInt(range.value) / 100 


prev.addEventListener('mousedown', () => {
    updateVolume('prev')
});
next.addEventListener('click', () => {
    updateVolume('next')
});

function updateVolume(val) {
    var count = 10;
    // val == 'prev' ? range.value -= count : range.value = parseInt(range.value) + count
    if (val === 'prev') {
        range.value -= count
        video.volume = parseInt(range.value) / 100 
    } else if (val === 'next') {
        range.value = parseInt(range.value) + count
        video.volume = range.value / 100
    }
}