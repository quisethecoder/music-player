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
        img : "images/falling.jpg",
        name: "Falling Down",
        artist: "Wid Cards",
        music: "music/fallingdown.mp3"
    },
    {
        img : "images/falling.jpg",
        name: "Falling Down",
        artist: "Wid Cards",
        music: "music/fallingdown.mp3"
    },
    {
        img : "images/falling.jpg",
        name: "Falling Down",
        artist: "Wid Cards",
        music: "music/fallingdown.mp3"
    }
]