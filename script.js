var muted = false;

$("#volume").slider({
    min: 0,
    max: 100,
    value: 20,
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


playMedia('media/bztruckpt2.mp4', 0.2);

function playMedia(fileName, myVolume) {
    myVideo.load();

    myVideo.src = fileName;
    myVideo.setAttribute('loop', '');
    setVolume(myVolume);

    myVideo.play();
}

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