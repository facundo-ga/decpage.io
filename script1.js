
   function showVideo(videoSrc) {
    var videoPlayer = document.getElementById('videoPlayer');
    var videoContainer = document.getElementById('videoContainer');
    videoPlayer.src = videoSrc;
    videoContainer.style.display = 'block';
  }


  function closeVideo() {
    var videoContainer = document.getElementById('videoContainer');
    videoContainer.style.display = 'none';
    var videoPlayer = document.getElementById('videoPlayer');
    videoPlayer.pause();
  }


  function showAudio(audioSrc) {
    var audioPlayer = document.getElementById('audioPlayer');
    var audioContainer = document.getElementById('audioContainer');
    audioPlayer.src = audioSrc;
    audioContainer.style.display = 'block';
  }

  function closeAudio() {
    var audioContainer = document.getElementById('audioContainer');
    audioContainer.style.display = 'none';
    var audioPlayer = document.getElementById('audioPlayer');
    audioPlayer.pause();
  }

  function showAlert() {
    alert("Disculpas, no tuve mucho tiempo para crear los media queries  para los dispositivos móviles. Espero les sirva.");
  }

  setTimeout(showAlert, 8000);

  function toggleTheme() {
    document.body.classList.toggle('dark-mode');
  }

  function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
  }
