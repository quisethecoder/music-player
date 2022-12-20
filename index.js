let now_playing = document.querySelector(".now-playing");
let track_art = document.querySelector(".track-art");
let track_name = document.querySelector("track_name");
let track_artist = document.querySelector(".track-artist");

let playpause_btn = document.querySelector(".playpause-track");
let next_btn = documeny.querySelector(".next-track");
let prev_btn = document.querySelector(".prev_track");

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
        music: "music/waterfall.jpg"
    },
    {
        img : "images/neverforgetyou.jpg",
        name: "Never Forget",
        artist: "Zara Larsson",
        music: "music/neverforget.mp3"
    },
    {
        img : "images/radiohead.jpg",
        name: "Falling Down",
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
    },
]