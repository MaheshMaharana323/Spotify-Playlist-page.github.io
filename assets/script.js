// function songLists(imgCover,songTitle,playedCount,duration,id){
//     let songs=`<div class="music d-flex text-white justify-content-between ">
//                     <img src="${imgCover}" alt="">
//                     <i class="bi bi-play-fill" id="masterPlay"></i>
//                     <p class="text-white title-song px-2">${songTitle}</p>
//                     <p class="total-plays text-white">${playedCount}</p>
//                     <i class="bi bi-plus-circle"></i>
//                     <p class="duration">${duration}</p>
//                 </div>`;
//                 document.querySelector('.music-list').innerHTML=document.querySelector('.music-list').innerHTML+songs;                       
// }
// songLists("./assets/images/1000220963.jpg","_So Special_ ",645386,"3:16");
// songLists("./assets/images/1000220964.jpg"," _Untie_ ",645386,"3:16");
// songLists("./assets/images/1000215723.jpg"," MANIAC ",1045386,"3:16");
// songLists("./assets/images/1000220963.jpg","Spoiler ",846386,"3:16");



let songIndex=0;
// let audioElements=new Audio('./assets/musics/VIVIZ (비비지) - _So Special_ (Official Audio)(MP3_160K).mp3');
// let audioElements1=new Audio('./assets/musics/VIVIZ (비비지) - _Untie_ Performance Video(MP3_160K).mp3');

// let masterPlay = document.querySelectorAll('#masterPlay, #masterPlayDown');
// let masterPlayDown=document.getElementById('masterPlayDown')


// let songIs=[
//     {songTitle:"_So Special_ ",filePath:"./assets/musics/VIVIZ (비비지) - _So Special_ (Official Audio)(MP3_160K).mp3",coverPath:"./assets/images/1000220963.jpg"},

//     {songTitle:" _Untie_  ",filePath:"./assets/musics/VIVIZ (비비지) - _Untie_ Performance Video(MP3_160K).mp3",coverPath:"./assets/images/1000220964.jpg"},

//     {songTitle:"_MANIAC",filePath:"./assets/musics/VIVIZ MANIAC Lyrics (Color Coded Lyrics)(MP3_160K).mp3",coverPath:"./assets/images/1000215723.jpg"},

//     {songTitle:"_Spoiler ",filePath:"./assets/musics/VIVIZ(비비지) - Spoiler (소용없어 거짓말 OST) My Lovely Liar OST Part 1(MP3_160K).mp3",coverPath:"./assets/images/1000220963.jpg"}
// ];



function musicList(){
    let htmlTag=`<div class="music d-flex text-white justify-content-between " data-index="1">
                    <img src="./assets/images/1000220963.jpg" alt="">
                    <i class="bi bi-play-fill play-button" id="masterPlay"></i>
                    <audio src="./assets/musics/VIVIZ (비비지) - _So Special_ (Official Audio)(MP3_160K).mp3"></audio>
                    <p class="text-white title-song px-2">_So_Special</p>
                    <p class="total-plays text-white">645893</p>
                    <i class="bi bi-plus-circle"></i>
                    <p class="duration">3:15</p>
                </div>
                <div class="music d-flex text-white justify-content-between " data-index="2">
                    <img src="./assets/images/1000220964.jpg" alt="">
                    <i class="bi bi-play-fill play-button" id="masterPlay"></i>
                    <audio src="./assets/musics/VIVIZ (비비지) - _Untie_ Performance Video(MP3_160K).mp3"></audio>
                    <p class="text-white title-song px-2"> _Untie_</p>
                    <p class="total-plays text-white">645893</p>
                    <i class="bi bi-plus-circle"></i>
                    <p class="duration">3:15</p>
                </div>
                <div class="music d-flex text-white justify-content-between " data-index="3">
                    <img src="./assets/images/1000215723.jpg" alt="">
                    <i class="bi bi-play-fill play-button" id="masterPlay"></i>
                    <audio src="./assets/musics/VIVIZ MANIAC Lyrics (Color Coded Lyrics)(MP3_160K).mp3"></audio>
                    <p class="text-white title-song px-2">MANIAC</p>
                    <p class="total-plays text-white">1045386</p>
                    <i class="bi bi-plus-circle"></i>
                    <p class="duration">3:15</p>
                </div>
                <div class="music d-flex text-white justify-content-between " data-index="4">
                    <img src="./assets/images/1000220963.jpg" alt="">
                    <i class="bi bi-play-fill play-button" id="masterPlay"></i>
                    <audio src="./assets/musics/VIVIZ(비비지) - Spoiler (소용없어 거짓말 OST) My Lovely Liar OST Part 1(MP3_160K).mp3"></audio>
                    <p class="text-white title-song px-2">Spoiler</p>
                    <p class="total-plays text-white">845893</p>
                    <i class="bi bi-plus-circle"></i>
                    <p class="duration">3:15</p>
                </div>`;
                document.getElementById('music-list').innerHTML=htmlTag;
};
let myMusic=musicList();

document.querySelectorAll('abbr').forEach(function(el) {
    el.setAttribute('title', '');
});
const progressBar = document.getElementById('myProgressBar');

progressBar.addEventListener('input', function() {
    const value = (progressBar.value - progressBar.min) / (progressBar.max - progressBar.min) * 100;
    progressBar.style.background = `linear-gradient(to right, #4CAF50 ${value}%, #ddd ${value}%)`;
});



let playButtons = document.querySelectorAll('.play-button');
let audios = document.querySelectorAll('audio');
let masterPlayDown=document.getElementById('masterPlayDown');
let masterPlayBig=document.getElementById('masterPlayBig')
let currentAudio=null;
let myProgressBar=document.getElementById('myProgressBar');
let timeDuration = document.querySelector('span.time');
let currentAudioImg = document.querySelector('.current-audio-img');
let currentAudioTitle = document.querySelector('.current-audio-title');
function pauseAllOtherThen(currentAudio){
    audios.forEach(audio =>{
        if(audio !== currentAudio){
            audio.pause();
            audio.currentTime = 0;
            let otherButtons=audio.parentElement.querySelector('.play-button');
            otherButtons.classList.remove('bi-pause-fill');
            otherButtons.classList.add('bi-play-fill');
        }
    });
    masterPlayDown.classList.remove('bi-pause');
    masterPlayDown.classList.add('bi-play');
};
function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${String(minutes).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
}
playButtons.forEach((button,index)=>{
    let audioElementsItem=audios[index];
    let durationOfSong=button.closest('.music').querySelector('.duration');
    audioElementsItem.addEventListener('loadedmetadata',()=>{
        let audioDurationIs=formatTime(audioElementsItem.duration);
        durationOfSong.textContent=audioDurationIs;
    })
    button.addEventListener('click',()=>{
        if(audioElementsItem.paused){
            pauseAllOtherThen(audioElementsItem);
            audioElementsItem.currentTime = 0;
            audioElementsItem.play();
            button.classList.remove('bi-play-fill');
            button.classList.add('bi-pause-fill');
            masterPlayBig.classList.remove('bi-play-circle-fill');
            masterPlayBig.classList.add('bi-pause-circle-fill');
            masterPlayDown.classList.remove('bi-play');
            masterPlayDown.classList.add('bi-pause');
            currentAudio=audioElementsItem;
            let currentMusic = button.closest('.music');
            let currentImgSrc = currentMusic.querySelector('img').src;
            let currentTitleText = currentMusic.querySelector('.title-song').textContent;
            currentAudioImg.src = currentImgSrc;
            currentAudioTitle.textContent = currentTitleText;
        }
        else{
            audioElementsItem.pause();
            button.classList.remove('bi-pause-fill');
            button.classList.add('bi-play-fill');
            masterPlayBig.classList.remove('bi-pause-circle-fill');
            masterPlayBig.classList.add('bi-play-circle-fill');
            masterPlayDown.classList.remove('bi-pause');
            masterPlayDown.classList.add('bi-play');
            if(currentAudio===audioElementsItem){
                currentAudio=null;
            }
        }
    });
    audioElementsItem.addEventListener('timeupdate',()=>{
        
        let progress= parseInt((audioElementsItem.currentTime/audioElementsItem.duration)*100);
        console.log(progress);
        myProgressBar.value=progress;
        timeDuration.textContent = formatTime(audioElementsItem.currentTime);
    });
    myProgressBar.addEventListener('change',()=>{
        audioElementsItem.currentTime=myProgressBar.value * audioElementsItem.duration/100;
    });

});
masterPlayDown.addEventListener('click',()=>{
    if(currentAudio){
        if(currentAudio.paused){
            currentAudio.play();
            masterPlayDown.classList.remove('bi-play');
            masterPlayDown.classList.add('bi-pause');
        }
        else{
            currentAudio.pause();
            masterPlayDown.classList.remove('bi-pause');
            masterPlayDown.classList.add('bi-play');
        };
    };
});






// audioElements.play();

// masterPlay.addEventListener('click',()=>{
//     if(audioElements.paused || audioElements.currentTime<=0){
//         audioElements.play();
//         masterPlay.classList.remove('bi-play-fill');
//         masterPlay.classList.add('bi-pause-fill');  
//         // masterPlay.classList.remove('bi-play'); 
//         // masterPlay.classList.add('bi-pause');
//     }
//     else{
//         audioElements.pause();
//         masterPlay.classList.remove('bi-pause-fill');
//         masterPlay.classList.add('bi-play-fill');
//         // masterPlay.classList.remove('bi-pause'); 
//         // masterPlay.classList.add('bi-play');
//     }

// });
// masterPlayDown.addEventListener('click',()=>{
//     if(audioElements1.paused ||audioElements1.currentTime<=0){
//         audioElements1.play();
        
//         masterPlayDown.classList.remove('bi-play'); 
//         masterPlayDown.classList.add('bi-pause');
//     }
//     else{
//         audioElements1.pause();
//         masterPlayDown.classList.remove('bi-pause');
//         masterPlayDown.classList.add('bi-play');
//     }
// });


// // Loop through each element in masterPlay (NodeList)
// masterPlay.forEach(playButton => {
//     playButton.addEventListener('click', () => {
//         if (audioElements.paused || audioElements.currentTime <= 0) {
//             // Play the audio
//             audioElements.play();

//             // Update both play buttons to pause buttons
//             masterPlay.forEach(button => {
//                 button.classList.remove('bi-play-fill', 'bi-play');
//                 button.classList.add('bi-pause-fill', 'bi-pause');  // Ensure both classes are added
//             });
//         } else {
//             // Pause the audio
//             audioElements.pause();

//             // Update both pause buttons to play buttons
//             masterPlay.forEach(button => {
//                 button.classList.remove('bi-pause-fill', 'bi-pause');
//                 button.classList.add('bi-play-fill', 'bi-play');  // Ensure both classes are added
//             });
//         }
//     });
// });