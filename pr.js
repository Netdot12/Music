
function createAudio() {
            // Create a new audio element
            var audio = document.createElement('audio');
            
            // Set attributes for the audio element
            audio.setAttribute('src', 'audio_file.mp3');
            audio.setAttribute('class', 'try');
            audio.setAttribute('controls', 'true');
            audio.autoplay = true;
            
            // Append the audio element to the body or any other element
            document.body.appendChild(audio);
        }



     const playlist = [
      { name: "Titanium", source: "../Alan Walker/com.mp3", image: "https://upload.wikimedia.org/wikipedia/en/1/1d/Titaniumsong.jpg", title: "Titanium", artist: "David Guetta Ft Sia" },
      { name: "Wake Me Up", source: "../Alan Walker/Cristale.mp3", image: "../Avicii/wake me up.jpg", title: "Wake Me Up", artist: "Avicii" },
      { name: "Clarity", source: "../Alan Walker/just.mp3", image: "https://i.ytimg.com/vi/l9Q7GISatW0/maxresdefault.jpg", title: "Clarity", artist: "Zedd Ft. Foxes" }
    ];

    const audio = document.getElementById("audio");
    const playlistElement = document.getElementById("playlist");
    const playpauseBtn = document.getElementById("playpause");
    const backwardBtn = document.getElementById("backward");
    const forwardBtn = document.getElementById("forward");
    let currentSongIndex = 0;

    function playSong(index) {
      const songItems = document.querySelectorAll(".song-item");
      songItems.forEach(item => item.classList.remove("active"));
      const songItem = songItems[index];
      songItem.classList.add("active");

      const song = playlist[index];
      audio.src = song.source;
      audio.play();
      currentSongIndex = index;
      playpauseBtn.innerHTML = '<i class="fas fa-pause"></i>';

      const leftControls = document.querySelector(".left-controls");
      const img = leftControls.querySelector("img");
      img.src = song.image;
      img.alt = song.title;

      const songTitle = leftControls.querySelector(".song-title");
      songTitle.textContent = song.title;

      const artistName = leftControls.querySelector(".artist-name");
      artistName.textContent = song.artist;
    }

    function togglePlayPause() {
      if (audio.paused) {
        audio.play();
        playpauseBtn.innerHTML = '<i class="fas fa-pause"></i>';
      } else {
        audio.pause();
        playpauseBtn.innerHTML = '<i class="fas fa-play"></i>';
      }
    }

    function playNextSong() {
      currentSongIndex = (currentSongIndex + 1) % playlist.length;
      playSong(currentSongIndex);
    }

    function playPreviousSong() {
      currentSongIndex = (currentSongIndex - 1 + playlist.length) % playlist.length;
      playSong(currentSongIndex);
    }

    playpauseBtn.addEventListener("click", togglePlayPause);
    forwardBtn.addEventListener("click", playNextSong);
    backwardBtn.addEventListener("click", playPreviousSong);

    // Add 'song-item' class to each playlist item
    const playlistItems = document.querySelectorAll("#playlist .image");
    playlistItems.forEach(item => item.classList.add("song-item"));

  


// Get the element with ID "more"
var moreElement = document.getElementById("more");

// Check if the element exists and contains text
if (moreElement && moreElement.textContent) {
    var text = moreElement.textContent;
    var semicolonIndex = text.indexOf(':');

    // If semicolon found
    if (semicolonIndex !== -1) {
        // Split the text content into two parts: before and after the semicolon
        var beforeSemicolon = text.substring(0, semicolonIndex);
        var afterSemicolon = text.substring(semicolonIndex);

        // Apply yellow color to the text after the semicolon
        moreElement.innerHTML = beforeSemicolon + "<br>  <span class='change'>" + afterSemicolon + "</span>";
    }
}



// Get the element with the ID "message"
var messageElement = document.getElementById("message");

// Create a new div element for "read more"
var readMoreElement = document.createElement("div");
readMoreElement.className = "read-more";
readMoreElement.id = "readMore";
readMoreElement.textContent = "...Read more";

// Append the "read more" element after the "message" element
messageElement.parentNode.insertBefore(readMoreElement, messageElement.nextSibling);

const messageContainer = document.getElementById('message');
  const readMoreBtn = document.getElementById('readMore');
  const maxTextLength = 170; // Set your desired maximum text length
  let remainingText = '';
  let isExpanded = false;

  const textContent = messageContainer.innerText;

  if (textContent.length > maxTextLength) {
    remainingText = textContent.substring(maxTextLength);
    const truncatedText = textContent.substring(0, maxTextLength);
    messageContainer.innerText = truncatedText + '     ' + '......';
    readMoreBtn.style.display = 'block';
  }

  readMoreBtn.addEventListener('click', () => {
    if (isExpanded) {
      messageContainer.innerText = textContent.substring(0, maxTextLength) + '...';
      readMoreBtn.innerText = 'Read more';
    } else {
      messageContainer.innerText = textContent;
      readMoreBtn.innerText = 'Read less';
    }
    isExpanded = !isExpanded;
  });


