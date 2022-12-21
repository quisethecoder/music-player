let now_playing = document.querySelector(".now-playing");
let track_art = document.querySelector(".track-art");
let track_name = document.querySelector(".track-name");
let track_artist = document.querySelector(".track-artist");

let playpause_btn = document.querySelector(".playpause-track");
let next_btn = document.querySelector(".next-track");
let prev_btn = document.querySelector(".prev-track");

let seek_slider = document.querySelector(".seek_slider");
let volume_slider = document.querySelector(".volume_slider");
let curr_time = document.querySelector(".current-time");
let total_duration = document.querySelector(".total-duration");
let wave = document.getElementById("wave");
let randomIcon = document.querySelector(".fa-random");
let curr_track = document.createElement("audio");

let track_index = 0;
let isPlaying = false;
let isRandom = false;
let updateTimer;

const music_list = [
    {
        img : "images/ratherbe.jpg",
        name:  "Rather Be",
        artist: "Clean Bandit",
        music: "music/ratherbe.mp3"
    },
    {
        img : "images/waterfall.jpg",
        name: "Waterfall",
        artist: "Diclosure x Raye",
        music: "music/waterfall.mp3"
    },
    {
        img : "images/neverforgetyou.jpg",
        name: "Never Forget",
        artist: "Zara Larsson",
        music: "music/neverforget.mp3"
    },
    {
        img : "images/radiohead.jpg",
        name: "Optimistic",
        artist: "Radiohead",
        music: "music/opt.mp3"
    },
    {
        img : "images/replay.jpg",
        name: "Replay",
        artist: "Tems",
        music: "music/replay.mp3"
    },
    {
        img : "images/wwyd.jpg",
        name: "What Would You Do?",
        artist: "Bryson Tiller",
        music: "music/wwyd.mp3"
    },
    {
        img : "images/yellow.jpg",
        name: "Yellow",
        artist: "Coldplay",
        music: "music/yellow.mp3"
    },
    {
        img : "images/feetdontfail.jpg",
        name: "Feet Don't Fail Me Now",
        artist: "Joy Crookes",
        music: "music/feetdontfail.mp3"
    }
];

loadTrack(track_index);

function loadTrack(track_index){
    clearInterval(updateTimer);
    reset();

    curr_track.src = music_list[track_index].music;
    curr_track.load();

    track_art.style.backgroundImage = "url(" + music_list[track_index].img + ")";
    track_name.textContent = music_list[track_index].name;
    track_artist.textContent = music_list[track_index].artist;
    now_playing.textContent = "Playing music " + (track_index + 1) + " of " + music_list.length;

    updateTimer = setInterval(setUpdate, 1000);

    curr_track.addEventListener("ended", nextTrack);
    random_bg_color();
}

function random_bg_color(){
    let hex = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", ];
    let a;

    function populate(a){
        for(let i = 0; i<6; i++){
            let x = Math.round(Math.random() * 14);
            let y = hex[x];
            a += y;
        }
        return a;
    }
    let Color1 = populate("#");
    let Color2 = populate("#");
    var angle = "to right";

    let gradient = "linear-gradient(" + angle + "," + Color1 + ", " + Color2 + ")";
    document.body.style.background = gradient;
}

function reset(){
    curr_time.textContent = "00:00";
    total_duration.textContent = "00:00";
    seek_slider.value = 0;
}

function randomTrack (){
    isRandom ? pauseRandom() : playRandom();
}

function playRandom(){
    isRandom = true;
    randomIcon.classList.add("randomActive");
}

function pauseRandom(){
    isRandom = false
    randomIcon.classList.remove("randomActive")
}
function repeatTrack(){
    let current_index = track_index
    loadTrack(current_index);
    playTrack();
}

function playpauseTrack(){
    isPlaying ? pauseTrack() : playTrack();
}

function playTrack(){
    curr_track.play();
    isPlaying = true;
    track_art.classList.add("rotate");
    wave.classList.add("loader");
    playpause_btn.innerHTML = "<i class='fa fa-pause-circle fa-5x'></i>"
}

function pauseTrack(){
    curr_track.pause();
    isPlaying = false;
    track_art.classList.remove("rotate");
    wave.classList.remove("loader");
    playpause_btn.innerHTML = "<i class='fa fa-play-circle fa-5x'></i>"
}

function nextTrack(){
    if(track_index < music_list.length - 1 && isRandom === false){
        track_index += 1;
    }else if(track_index < music_list.length - 1 && isRandom === true){
        let random_index = Number.parseInt(Math.random() * music_list.length);
        track_index = random_index;
    }else{
        track_index = 0;
    }
    loadTrack(track_index);
    playTrack();
}

function prevTrack(){
    if(track > 0){
        track -= 1;
    }else{
        track_index = music_list.length -1;
    }
    loadTrack(track_index);
    playTrack();
}