function irASubir() {
  location.href = "/subir"
}

let player;

function reproducirYoutube(url) {
  console.log(url)
  player = new YT.Player('player', {
    height: '360',
    width: '640',
    videoId: url,//RF0dt08yzfg
    events: {
      'onReady': onPlayerReady,
      'onStateChange': onPlayerStateChange
    }
  });

}

var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.
function onYouTubeIframeAPIReady() {
 
}

// 4. The API will call this function when the video player is ready.
function onPlayerReady(event) {
  event.target.playVideo();
}

function reproductor() {
  /*Creo que tenes q llamnar por dom al frame de youtube*/playVideo()
}

// 5. The API calls this function when the player's state changes.
//    The function indicates that when playing a video (state=1),
//    the player should play for six seconds and then stop.
var done = false;
function onPlayerStateChange(event) {
  if (event.data == YT.PlayerState.PLAYING && !done) {
    setTimeout(stopVideo, 6000);
    done = true;
  }
}
function stopVideo() {
  player.stopVideo();
}

function irAMeGusta() {
  location.href = '/megusta'
}

 // Ejemplo: Pausar/Reproducir el video cuando se hace clic en el footer
 if (player && typeof player.getPlayerState === 'function') {
  // Now you can safely call getPlayerState
  if (player.getPlayerState() === YT.PlayerState.PLAYING) {
    player.pauseVideo();
  } else {
    player.playVideo();
  }
} else {
  console.log('Player is not properly initialized.');
}


function subir_audio (req, carpeta, isAudio, callback) {
  return new Promise(async (resolve, reject) => {
     

      const insertQuery = "INSERT INTO Musica_subida (audio) VALUES ()";

      try {
          await query(insertQuery, [req.body.audio]);
          resolve(file.name);
      } catch (error) {
          console.error('Error inserting data into the database:', error);
          reject(error);
      }
  });
}