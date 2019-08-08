var muted = false;
var videos = ["bztruckpt2", "whitetee", "witchblades", "gymclass"];
var num = Math.floor(Math.random() * videos.length);

$("#volume").slider({
    min: 0,
    max: 100,
    value: 30,
    range: "min",
    slide: function (event, ui) {
        muted = false;
        setVolume(ui.value / 100);
    }
});

var myVideo = document.createElement('video');
myVideo.id = "myVideo";

myVideo.classList.add("myVideo");
$('#video').append(myVideo);


playMedia("media/" + videos[num] + ".mp4", $("#volume").slider("value") / 100);

function playMedia(fileName, myVolume) {
    myVideo.load();

    myVideo.src = fileName;
    myVideo.setAttribute('loop', '');
    setVolume(myVolume);
}

$('#text').click(function () {
    if (myVideo.paused) {
        myVideo.play();
    } else {
        myVideo.pause();
    }
});

$('#text').dblclick(function() {
    num = Math.floor(Math.random() * videos.length);
    playMedia("media/" + videos[num] + ".mp4", $("#volume").slider("value") / 100);
    myVideo.play();
});

function setVolume(myVolume) {
    myVideo.volume = myVolume;

    $("#vicon").removeClass();
    if (!muted) {
        if (myVideo.volume > 0.66) {
            $("#vicon").addClass("far fa-volume-up");
        } else if (myVideo.volume > 0.33) {
            $("#vicon").addClass("far fa-volume");
        } else if (myVideo.volume == 0) {
            $("#vicon").addClass("far fa-volume-off");
        } else {
            $("#vicon").addClass("far fa-volume-down");
        }
    } else {
        $("#vicon").addClass("far fa-volume-mute");
    }
}

$('#player').hover(function () {
    $('#volume').css("opacity", "1");
}, function () {
    $('#volume').css("opacity", "0");
});

$("#vicon").click(function () {
    if (muted) {
        muted = false;
        setVolume($("#volume").slider("value") / 100);
    } else {
        muted = true;
        setVolume(0);
    }
});