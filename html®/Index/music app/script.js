var playlist = $('.playlist'),
    nav = $('.options');

function open_p() {
    playlist.classList.toggle('active')
}
var playBtn = $('#playOrPause')
playBtn.onclick = playOrPause
var prevBtn = $('#previous');
prevBtn.onclick = pre;
var nextBtn = $('#next');
nextBtn.onclick = next
var title = $('#songName');
var artist = $('#songArtist');
var duration = $('#duration_slider');
var duration_inner = $('#song_detail');

var mutebtn = $('#mute')
mutebtn.onclick = isMute
let timer;
let playinSong = false;
var muted = false;
var oldVolume;
var favouritesArr = [];
var liked = [];
let track = document.createElement('audio')
let index_no = 0

let list = []

function evaluvate(musicList) {
    musicList = musicList.toString()
    let mus = musicList.split(';;__;;')
    for (e of mus) {
        var music = {}
        let name = e.split('.')
        name = name[name.length - 1]
        music.name = e.replace('.' + name , '')
        music.path = 'music/' + e
        music.singer = e.replace('.' + name , '')
        list.push(music)
    }
    list.pop()
}

evaluvate(musics)
let allMusics = list
// let allMusics = [{
//     name: 'Balanciaga',
//     path: 'music/m1.mp3',
//     singer: 'Americano trak'
// }, {
//     name: 'Let me done slowly',
//     path: 'music/m2.mp3',
//     singer: 'Alec Benjamin'
// }, {
//     name: 'Mask Off remix',
//     path: 'music/m3.mp3',
//     singer: 'Americano trak'
// }, {
//     name: 'NBA',
//     path: 'music/m4.mp3',
//     singer: 'Astemus'
// }, {
//     name: 'Ocean',
//     path: 'music/m5.mp3',
//     singer: 'Astemus'
// }, {
//     name: 'Relax',
//     path: 'music/m6.mp3',
//     singer: 'Americano trak'
// }, {
//     name: 'Пацаны Мечтают',
//     path: 'music/m7.mp3',
//     singer: 'Astemus'
// }, {
//     name: 'Самурай',
//     path: 'music/m8.mp3',
//     singer: 'Astemus'
// }, {
//     name: 'Финальный раунд',
//     path: 'music/m9.mp3',
//     singer: 'Astemus'
// }, {
//     name: 'Empty Note remix',
//     path: 'music/m10.mp3',
//     singer: 'Americano trak'
// }]
// document.querySelector('body').addEventListener('click', async () => {
//   const dirHandle = await window.showDirectoryPicker();
//   for await (const entry of dirHandle.values()) {
//     if (entry.kind === "file"){
//       const file = await entry.getFile();
//       const text = await file.text();
//       console.log(file)
//     }
//     if (entry.kind === "directory"){
//       /* for file in this directory do something */ 
//     }
//   }
// });
// document.body.onclick = async (evt) => {
//   const out = {};
//   const dirHandle = await showDirectoryPicker();
//   await handleDirectoryEntry( dirHandle, out );
//   console.log( out );
// };
// async function handleDirectoryEntry( dirHandle, out ) {
//   for await (const entry of dirHandle.values()) {
//     if (entry.kind === "file"){
//       const file = await entry.getFile();
//       out[ file.name ] = file;
//     }
//     if (entry.kind === "directory") {
//       const newHandle = await dirHandle.getDirectoryHandle( entry.name, { create: false } );
//       const newOut = out[ entry.name ] = {};
//       await handleDirectoryEntry( newHandle, newOut );
//     }
//   }
// }
$('#fileUploadInput').onchange = getPAth
a = ''

function getPAth() {
    var input = document.querySelector('#fileUploadInput');
    var fReader = new FileReader();
    fReader.readAsDataURL(input.files[0]);
    fReader.onload = function(event) {
        // var img = document.getElementById("yourImgTag");
        // img.src = event.target.result;
        console.log(event.target.result)
        a = event.target.result;
        track.src = a;
        playinSong = false
        console.log(a)
    }
}
HTMLElement.prototype.open = function(n = 1) {
    anime({
        targets: this,
        opacity: 1,
        scale: n
    })
}
HTMLElement.prototype.close = function(n = 1) {
    anime({
        targets: this,
        opacity: [1, 0],
        scale: [n, 0]
    })
}

function loadTrack(o) {
    clearInterval(timer)
    track.src = allMusics[o].path;
    title.innerText = allMusics[o].name;
    artist.innerText = allMusics[o].singer;
    track.load()
    timer = setInterval(changedr, 1000)

}

function ddd() {
    let l = allMusics.length
    $('.playlist').innerHTML = ''
    for (let i = 0; i < l; i++) {
        $('.playlist').innerHTML += `<div class="p_song" onclick="loadTrack(${i});track.play();playinSong=true;index_no=${i};open_p();settingsDiv.close()" oncontextmenu="return false"  onmouseup="settings(${i})">
                <div class="p_title">${allMusics[i].name}</div>
                <div class="p_artist">${allMusics[i].singer}</div>
                <button><i class="fas fa-play" ></i></button>
            </div>
            `
    }
}
ddd()
loadTrack(index_no)

function playOrPause() {
    if (playinSong == false) {
        play()
    } else {
        pause()
    }
}

function act(ind) {
    el = document.querySelectorAll('.p_song')
    len = el.length
    for (i = 0; i < len; i++) {
        el[i].remove('active_song')
    }
    el[ind].add('active_song')
}
window.oncontextmenu = function() {
    return false
}
window.onclick = function(e) {
    if (playinSong) {
        anime({
            targets: 'path',
            translateY: 15,
            d: {
                value: ['M272 63.1l-32 0c-26.51 0-48 21.49-48 47.1v288c0 26.51 21.49 48 48 48L272 448c26.51 0 48-21.49 48-48v-288C320 85.49 298.5 63.1 272 63.1zM80 63.1l-32 0c-26.51 0-48 21.49-48 48v288C0 426.5 21.49 448 48 448l32 0c26.51 0 48-21.49 48-48v-288C128 85.49 106.5 63.1 80 63.1z'],
            },
            translateX: 95,
            easing: 'easeOutExpo',

        })
        //         var path = anime.path('path');

        // anime({
        //   targets: '.el',
        //   translateX: path('x'),
        //   translateY: path('y'),
        //   rotate: path('angle'),
        //   easing: 'linear',
        //   duration: 2000,
        //   loop: true
        // });
    } else {
        anime({
            targets: 'path',
            translateY: 15,
            d: {
                value: ['M176 480C148.6 480 128 457.6 128 432v-352c0-25.38 20.4-47.98 48.01-47.98c8.686 0 17.35 2.352 25.02 7.031l288 176C503.3 223.8 512 239.3 512 256s-8.703 32.23-22.97 40.95l-288 176C193.4 477.6 184.7 480 176 480z'],
            },
            translateX: 0,
            easing: 'easeOutExpo',
        })
    }
}
settingsDiv = document.createElement('div');
settingsDiv.id = 'contextmenu'
settingsDivInnerHTML = document.createElement('div');

function settings(ind) {
    if (event.which == 3) {
        settingsDiv.id = 'contextmenu'
        el = document.querySelectorAll('.p_song')
        rect = el[ind].getBoundingClientRect()
        settingsDiv.setAttribute('clicker', ind)
        settingsDiv.css({
            width: '150px',
            height: '150px',
            position: 'absolute',
            top: event.clientY + 'px',
            left: event.clientX + 'px',
            borderRadius: '20px',
            background: 'rgba(130,130,130,.5)',
            backdropFilter: 'blur(3px)',
            zIndex: 4000,
            display: 'block',
            opacity: 0,
        })
        console.log('sa')
        settingsDivInnerHTML.css({
            width: `100%`,
            height: '100%',
            borderRadius: '20px',
            display: 'flex',
            flexDirection: 'column'
        })
        fg = settingsDiv.getAttribute('clicker')
        if (el[fg].classList[1] == 'liked') {
            settingsDivInnerHTML.innerHTML = ` 
        <div class="option" data-work=delete><span>Delete</span><i class="fas fa-trash"></i></div>
        <div class="option" data-work="edit"><span>Edit name</span><i class="fas fa-pen"></i></div>
        <div class="option" data-work="addF"><span title="Add Favourites">Favourites</span><i class="fas fa-star" style="color:transparent;-webkit-text-stroke: 1px rgba(255,255,0,1)"></i></div>
        <div class="option" data-work="like"><span>Like</span><i class="fa-solid fa-heart" style="color:rgba(255,100,100,1);"></i></div>
     `
            window[`isLiked${fg}`] = false
        } else {
            settingsDivInnerHTML.innerHTML = ` 
        <div class="option" data-work=delete><span>Delete</span><i class="fas fa-trash"></i></div>
        <div class="option" data-work="edit"><span>Edit name</span><i class="fas fa-pen"></i></div>
        <div class="option" data-work="addF"><span title="Add Favourites">Favourites</span><i class="fas fa-star" style="color:transparent;-webkit-text-stroke: 1px rgba(255,255,0,1)"></i></div>
        <div class="option dislike" data-work="like"><span>Like</span><i class="fa-solid fa-heart" style="color:transparent; -webkit-text-stroke: 1px rgba(255,100,100,1);"></i></div>
     
     `
            window[`isLiked${fg}`] = true

        }
        settingsDiv.open()
    }
    document.body.appendChild(settingsDiv)
    settingsDiv.appendChild(settingsDivInnerHTML)
    $('[data-work=delete]').on('click', function(e) {
        ir = settingsDiv.getAttribute('clicker')
        a = confirm('Are You sure want to delete ' + allMusics[ir].name + 'from only this music player')
        if (a) {
            allMusics.splice(ir, 1);
            document.querySelectorAll('.p_song')[ir].css('display', 'none')
            loadTrack(index_no)
            l = allMusics.length
            ddd()
            settingsDiv.close()
        }
    })
    $(`[data-work=edit]`).on('click', function() {
        ir = settingsDiv.getAttribute('clicker')
        let name = prompt('Enter a new name', allMusics[ir].name)
        if (name == null) name = allMusics[ir].name
        reg = new RegExp(allMusics[ir].path, 'gi')
        if (reg.test(track.src)) {
            $('#songName').innerText = name
        }
        allMusics[ir].name = name
        document.querySelectorAll('.p_title')[ir].innerText = name
        settingsDiv.close()
    })
    $('[data-work=like]').on('click', function() {
        ir = settingsDiv.getAttribute('clicker')
        el = document.querySelectorAll('.p_song')
        heart = document.createElement('div')
        heart.css({
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%,-50%) scale(0)',
            opacity: 0,
            width: '100px',
            height: '100px',
            zIndex: 500000,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
        })
        heart.innerHTML = `<i class="fa-solid fa-heart fa-5x" style="color:rgba(255,100,100,1);"></i>`
        el[ir].toggle('liked')
        // an = 0
        // if (window[`isLiked${fg}`]) {
        //     liked.push(el[fg])
        // } else {
        //     for (i = 0; i < liked.length; i++) {
        //         if (typeof liked[i] != 'undefined') {
        //             if (liked[i].classList.length <= 1) {
        //                 delete liked[i]
        //             }
        //         }

        //     }
        // }

        document.body.appendChild(heart)
        anime.timeline().add({
            targets: heart,
            scale: [0, 2],
            opacity: 1
        }).add({
            targets: heart,
            opacity: 0,
            scale: {
                value: 0,
                duration: 1
            }
        })
        addLiked()
        settingsDiv.close()
    })
}

function addLiked() {
    for (i = 0; i < liked.length; i++) {
        $('.playlist-liked').appendChild(liked[i])
    }
}
window.on('mouseup', function(e) {
    if (e.which == 1) {
        rect = settingsDiv.getBoundingClientRect();
        cursorY = e.clientY
        cursorX = e.clientX
        if ((cursorX > rect.left && cursorX < rect.right && cursorY > rect.top && cursorY < rect.bottom)) {
            settingsDiv.open()
        } else {
            settingsDiv.close(0)
        }
    }
})
track.onplaying = function() {
    playinSong = true;
    anime({
        targets: 'path',
        translateY: 15,
        d: {
            value: ['M272 63.1l-32 0c-26.51 0-48 21.49-48 47.1v288c0 26.51 21.49 48 48 48L272 448c26.51 0 48-21.49 48-48v-288C320 85.49 298.5 63.1 272 63.1zM80 63.1l-32 0c-26.51 0-48 21.49-48 48v288C0 426.5 21.49 448 48 448l32 0c26.51 0 48-21.49 48-48v-288C128 85.49 106.5 63.1 80 63.1z'],
        },
        translateX: 95,
        easing: 'easeOutExpo',
    })
}
window.on(['keyup', 'keydown', 'keypress'], function(e) {
    if (e.key == 'm' || e.key == 'M') {
        isMute()
    }
})
window.on('mousemove', function e(e) {
    rect = $('#mute').getBoundingClientRect()
    rectin = $('#collapse').getBoundingClientRect()
    cursorY = e.clientY
    cursorX = e.clientX
    if ((cursorX > rect.left && cursorX < rect.right && cursorY > rect.top && cursorY < rect.bottom) || (cursorX > rectin.left && cursorX < rectin.right && cursorY > rectin.top && cursorY < rectin.bottom)) {
        $('#collapse').css({
            display: 'flex'
        })
    } else {
        $('#collapse').css({
            display: 'none'
        })
    }
})
$('#volume_changer').on('input', function() {
    track.volume = this.value / 100
})
track.onvolumechange = function() {
    if (muted || track.volume == 0) {
        mutebtn.innerHTML = `<i class="fa-solid fa-volume-xmark"></i>`
    } else {
        mutebtn.innerHTML = `<i class="fa-solid fa-volume-high"></i>`
    }
    localStorage.lastVolume = track.volume * 100
}
window.on('load', function() {
    track.volume = +localStorage.lastVolume / 100;
    $('#volume_changer').value = +localStorage.lastVolume
})

function play() {
    track.play();
    playinSong = true;
    anime({
        targets: 'path',
        translateY: 15,
        d: {
            value: ['M272 63.1l-32 0c-26.51 0-48 21.49-48 47.1v288c0 26.51 21.49 48 48 48L272 448c26.51 0 48-21.49 48-48v-288C320 85.49 298.5 63.1 272 63.1zM80 63.1l-32 0c-26.51 0-48 21.49-48 48v288C0 426.5 21.49 448 48 448l32 0c26.51 0 48-21.49 48-48v-288C128 85.49 106.5 63.1 80 63.1z'],
        },
        translateX: 95,
        easing: 'easeOutExpo',

    })
}

function pause() {
    track.pause();
    playinSong = false
    // playBtn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Free 6.0.0-beta2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) --><path fill="#fff" d="M176 480C148.6 480 128 457.6 128 432v-352c0-25.38 20.4-47.98 48.01-47.98c8.686 0 17.35 2.352 25.02 7.031l288 176C503.3 223.8 512 239.3 512 256s-8.703 32.23-22.97 40.95l-288 176C193.4 477.6 184.7 480 176 480z"/></svg>`;
    anime({
        targets: 'path',
        translateY: 15,
        d: {
            value: ['M176 480C148.6 480 128 457.6 128 432v-352c0-25.38 20.4-47.98 48.01-47.98c8.686 0 17.35 2.352 25.02 7.031l288 176C503.3 223.8 512 239.3 512 256s-8.703 32.23-22.97 40.95l-288 176C193.4 477.6 184.7 480 176 480z'],
        },
        translateX: 0,
        easing: 'easeOutExpo',

    })
}

function isMute() {
    if (muted) {
        volumeMax()
    } else {
        volumeMin()
    }
}

function volumeMax() {
    track.volume = oldVolume / 100;
    muted = false
    mutebtn.innerHTML = `<i class="fa-solid fa-volume-high"></i>`
    $('#volume_changer').value = oldVolume
}

function volumeMin() {
    oldVolume = track.volume * 100;
    track.volume = 0
    mutebtn.innerHTML = `<i class="fa-solid fa-volume-xmark"></i>`
    muted = true
    $('#volume_changer').value = 0
}

function next() {
    if (index_no < allMusics.length - 1) {
        index_no += 1;
        loadTrack(index_no);
        play();
        el = document.querySelectorAll('.p_song');
        ld = el.length
        for (s = 0; s < ld; s++) {
            if (s == index_no) {
                el = document.querySelectorAll('.p_song')[s].add('active_song')
            } else {
                el = document.querySelectorAll('.p_song')[s].remov('active_song')
            }
        }
    } else {
        track.play()
    }
}

function pre() {
    if (index_no > 0) {
        index_no -= 1;
        loadTrack(index_no);
        play()
        el = document.querySelectorAll('.p_song');
        ld = el.length
        for (s = 0; s < ld; s++) {
            if (s == index_no) {
                el = document.querySelectorAll('.p_song')[s].add('active_song')
            } else {
                el = document.querySelectorAll('.p_song')[s].remov('active_song')
            }
        }
    }
}


function re(n) {
    s = n / 60
    Z = n % 60
    b = String(s).slice(0, 1);
    if (b < 10) {
        b = '0' + b
    }
    if (Z < 10) {
        Z = '0' + Z
    } else {
        Z = String(Z);
        b = b
    }
    return {
        min: b,
        sec: Z
    }
}

function changedr() {
    duration.max = track.duration
    duration.value = track.currentTime
    duration_inner.innerHTML = re(track.duration).min + ":" + (re(track.duration).sec).slice(0, 2)
    $('#CurrentTime').innerHTML = re(track.currentTime).min + ':' + (re(track.currentTime).sec).slice(0, 2)
    if (track.ended) {
        next()
    }
}
duration.onchange = function() {
    track.currentTime = duration.value
}
// track.ontimeupdate = function() {
//  t = track.currentTime;
//  duration.value =t
// }