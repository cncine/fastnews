// var playing_music_list = new Array();
// var other_videos = 0;

function iplayend(node) {
    switchIcon(node.parentNode);
}
function icanplay(node) {
    node.parentNode.classList.add("_canplay");
}

function musicSwith(node) {
    
    var n_audio = node.getElementsByTagName("audio")[0];
    if (!n_audio.paused) {
        switchIcon(node);
        n_audio.pause();
    } else if (node.classList.contains("_canplay")) {   
        switchIcon(node);
        n_audio.play();
        stopAllVideo();
    }
}

function switchIcon(node) {
    node.getElementsByTagName("i")[0].classList.toggle("action");
    node.getElementsByTagName("a")[0].classList.toggle("pause");
}

function stopAllMusic() {
    var allnode = document.querySelectorAll('.wrap>audio');
    allnode.forEach(function (f) {
        if (!f.paused) {
            musicSwith(f.parentNode);
            //playing_music_list.push(f.parentNode);
            //console.log(playing_music_list);
        }
    });
}

function stopAllVideo(self) {
    var allvideonode = document.querySelectorAll('video');
    //console.log(allvideonode);
    allvideonode.forEach(function (f) {
        // if (self && self != f)
        //     other_videos++;
        //   console.log(other_videos);
        if (self != f)
            f.pause();
    });
}

// function resumePlay() {
//     if (other_videos > 1) {
//         other_videos--;
//         console.log("s  " + other_videos);
//         return;
//     }
//     playing_music_list.forEach (function (f) {
//         var temp = f.getElementsByTagName("audio")[0];
//         if (temp.paused)
//             musicSwith(f);
//     });
//     playing_music_list = [];
// }