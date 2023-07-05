var video = document.getElementById('video-background');

// Reinicia o vídeo quando termina
video.addEventListener('ended', function() {
    video.currentTime = 0;
    video.play();
});

// Pausa o vídeo quando o usuário sai da visualização
window.addEventListener('visibilitychange', function() {
    if (document.hidden) {
    video.pause();
    } else {
    video.play();
    }
});

