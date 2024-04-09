
// Create a link element
var link = document.createElement('link');

// Set attributes
link.rel = 'stylesheet';
link.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css';

// Append to the head of the document
document.head.appendChild(link);
document.addEventListener('DOMContentLoaded', function() {
      var linkElement = document.createElement('link');
      linkElement.rel = 'stylesheet';
      linkElement.href = 'styles.css';

      document.head.appendChild(linkElement);
    });



        const keywordArrays = [
            { keywords: ['Faded', 'All Falls Down', 'update', 'text'], text: ' Different World' },
            { keywords: ['another', 'array', 'of', 'keywords'], text: 'Updated Text with Another Array' },
            { keywords: ['third', ' gjk', 'of', 'words'], text: 'Updated Text with Third Array' },
            { keywords: ['fourth', 'collection', 'of', 'terms'], text: 'Updated Text with Fourth Array' },
            { keywords: ['fifth', 'list', 'of', 'items'], text: 'Updated Text with Fifth Array' }
        ];

        function checkAndUpdateText() {
            const h1Element = document.querySelector('#more');
            const resultContainer = document.getElementById('show');

            if (h1Element && resultContainer) {
                const h1Content = h1Element.textContent.trim().toLowerCase();
                let matchingArrayIndex = -1;

                // Check for matches in each array
                for (let i = 0; i < keywordArrays.length; i++) {
                    const index = keywordArrays[i].keywords.findIndex(item => h1Content.includes(item.toLowerCase()));

                    if (index !== -1) {
                        matchingArrayIndex = i;
                        break; // Break out of the loop if a match is found
                    }
                }

                if (matchingArrayIndex !== -1) {
                    resultContainer.textContent = ` Album :         ${keywordArrays[matchingArrayIndex].text}`;
                    
                } else {
                    resultContainer.textContent = 'No matching keyword found';
                }
            }
        }

        // Simulate changing the text dynamically after a delay (e.g., user interaction)
        setTimeout(() => {
            document.querySelector('#show').textContent = 'resultContainer';
            checkAndUpdateText(); // Call the function after changing the text
        }, 200000); // Delay in milliseconds (2 seconds)

        window.addEventListener('DOMContentLoaded', checkAndUpdateText);










var spanElement = document.getElementById('header');

  if (spanElement.nextElementSibling) {
    var h1Element = spanElement.nextElementSibling;
    
    // Set the ID for the h1 element
    h1Element.id = 'more';

  }

// Get the first h1 element on the page
const element = document.getElementById('show');

// Define the arrays of texts to match
const searchTexts = ['Faded', 'Alone', 'Darkside', 'Sing me to sleep', 'Lost Control','Lily','Different World', 'All Falls Down','Diamond Heart', 'Do It All For you', 'Intro','I dont wanna go','interlude','lonely']; // Add more texts as needed
const otherText = ['', 'Happy'];
const thirdText = ['Dreamer', 'example2'];
const fourthText = ['text4a', 'text4b'];
const fifthText = ['text5a', 'text5b'];
const sixthText = ['text6a', 'text6b'];
const seventhText = ['text7a', 'text7b'];
const eighthText = ['text8a', 'text8b'];
const ninthText = ['text9a', 'text9b'];

// Function to create navigation elements and links
function createNavigationLinks(albumLinkText, artistLinkText, albumLinkHref, artistLinkHref) {
    const nav = document.createElement('nav');
    
    const albumLink = document.createElement('a');
    albumLink.textContent = albumLinkText;
    albumLink.href = albumLinkHref;
    albumLink.classList.add("Left");
  
    const artistLink = document.createElement('a');
    artistLink.textContent = artistLinkText;
    artistLink.href = artistLinkHref;
    artistLink.classList.add("Right");
    
    nav.appendChild(albumLink);
    nav.appendChild(artistLink);

    return nav;
}

// Check if the text of the h1 element matches any in the arrays
if (element) {
    if (searchTexts.some(text => element.textContent.includes(text)) || otherText.some(text => element.textContent.includes(text))) {
        let albumLinkText, artistLinkText, albumLinkHref, artistLinkHref;

        if (searchTexts.some(text => element.textContent.includes(text))) {
            albumLinkText = 'More in Album';
            artistLinkText = 'More from Artist';
            albumLinkHref = 'different world album.html';
            artistLinkHref = 'alone.html';
        } else if (otherText.some(text => element.textContent.includes(text))) {
            albumLinkText = ' Album';
            artistLinkText = ' Artist';
            albumLinkHref = 'new_album.html';
            artistLinkHref = 'new_artist.html';
        }

        const nav = createNavigationLinks(albumLinkText, artistLinkText, albumLinkHref, artistLinkHref);

        const nextElement = element.nextElementSibling;
        nextElement.parentNode.insertBefore(nav, nextElement);
    } else if (thirdText.some(text => element.textContent.includes(text))) {
        // Create something similar with the first and second conditions
        let albumLinkText = 'Third Album';
        let artistLinkText = 'Third Artist';
        let albumLinkHref = 'third_album.html';
        let artistLinkHref = 'third_artist.html';

        const nav = createNavigationLinks(albumLinkText, artistLinkText, albumLinkHref, artistLinkHref);

        const nextElement = element.nextElementSibling;
        nextElement.parentNode.insertBefore(nav, nextElement);
    } else if (fourthText.some(text => element.textContent.includes(text))) {
        // Add your code here for the fourth set of actions if the condition is met
    } else if (fifthText.some(text => element.textContent.includes(text))) {
        // Add your code here for the fifth set of actions if the condition is met
    } else if (sixthText.some(text => element.textContent.includes(text))) {
        // Add your code here for the sixth set of actions if the condition is met
    } else if (seventhText.some(text => element.textContent.includes(text))) {
        // Add your code here for the seventh set of actions if the condition is met
    } else if (eighthText.some(text => element.textContent.includes(text))) {
        // Add your code here for the eighth set of actions if the condition is met
    } else if (ninthText.some(text => element.textContent.includes(text))) {
        // Add your code here for the ninth set of actions if the condition is met
    }
}



// Create the navigation bar HTML structure using template literals
const navBarHTML = `

  <div class="nav">
<i class="fa fa-bars hamburger icon"  autocapitalize=" " for="menu-toggle" alt="Icon" id="icon" onclick="toggleNavbar()"></i>

<h1>NETDOT.COM</h1>

 <a href="music search.html">
<i id="search" class="fa fa-search"></i>
</a>

  </div>

  <div class="navbar" style="display:none;">
 <header>
 

  <div class="nav">
<i class="fa fa-arrow-left" autocapitalize=" " for="menu-toggle" alt="Icon" id="icon" onclick="toggleNavbar()"></i>

<h1>NETDOT.COM</h1>

 <a href="music search.html">
<i id="search" class="fa fa-search"></i>
</a>

  </div>
</header>

    <a class="active" href="index.html">
      <i class="fa fa-fw fa-home" style="float: left; margin-right: 10px;"></i>
      <span class="text">Home</span>
    </a>
    <a class="active" href="Movies.html">
      <i class="fa fa-film" style="float: left; margin-right: 10px;"></i>
      <span class="text">Movie</span>
    </a>
    <a class="active" href="music.html">
      <i class="fa fa-music" style="float: left; margin-right: 10px;"></i>
      <span class="text">Music</span>
    </a>
    <a class="active" href="news.html">
      <i class="fa fa-newspaper-o" style="float: left; margin-right: 10px;"></i>
      <span class="text">News</span>
    </a>
  <br>
    
    <a class="active" href="https://api.whatsapp.com/send?phone=your-phone-number">
      <i class="fa fa-whatsapp" style="float: left; margin-right: 10px;"></i>
      <span class="text">WhatsApp Page</span>
    </a>
    <a class="active" href=" ">
      <i class="fa fa-facebook" style="float: left; margin-right: 10px;"></i>
      <span class="text">Facebook Page</span>
    </a>
    <a class="active" href="https://t.me/your-telegram-username">
      <i class="fa fa-telegram" style="float: left; margin-right: 10px;"></i>
      <span class="text">Telegram Channel</span>
    </a>
    <a class="active" href="https://www.instagram.com/your-channel-url">
      <i class="fa fa-instagram" style="float: left; margin-right: 10px;"></i>
      <span class="text">Instagram Channel</span>
    </a>
    <a class="active" href="https://twitter.com/your-twitter-handle">
      <i class="fa fa-twitter" style="float: left; margin-right: 10px;"></i>
      <span class="text">Twitter Page</span>
    </a>
    <a class="active" href="https://www.youtube.com/your-channel-url">
      <i class="fa fa-youtube-play" style="float: left; margin-right: 10px;"></i>
      <span class="text">YouTube Channel</span>
    </a>
  
  </div>

    <header id="me">
        <div class="container">
            <div class="content">
                <h1>Get the <span class="highlight">App</span></h1>
                <p>Your ultimate experience awaits!</p>
                <a href="#" class="button">Download Now</a>
            </div>
        </div>
    </header>





 
  
`;

const header = document.getElementById('header');

// Insert the navigation bar HTML structure into the header
header.innerHTML = navBarHTML;



const message = document.getElementById("subscribe-message");

    function showSubscribeMessage() {
      message.style.display = "block";

      // Automatically hide the message after 5 seconds (5000 milliseconds)
      setTimeout(() => {
        message.style.display = "none";
      }, 5000);
    }


  // Store the original body content
const originalBodyContent = document.body.innerHTML;

function toggleNavbar() {
    var navbar = document.querySelector('.navbar');
    var body = document.body;

    if (navbar.style.display === 'none' || navbar.style.display === '') {
        // Show the navbar and replace the body content with the navbar
        navbar.style.display = 'block';
        body.innerHTML = '';
        body.appendChild(navbar);
    } else {
        // Hide the navbar and restore the original body content
        navbar.style.display = 'none';
        body.innerHTML = originalBodyContent;
    }
}



    
    
// CSS code
var cssCode = `
    /* Your other CSS styles can go here */

    /* Font Awesome link */
    @import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css');
`;

// Append the style element to the head of the document
document.head.appendChild(styleElement);


	

