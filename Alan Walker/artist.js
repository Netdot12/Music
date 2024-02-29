
// Create the navigation bar HTML structure using template literals
const navBarHTML = `

  <div class="nav" >
<i class="fa fa-bars hamburger icon" style="float: left;font-size:30px;position:absolute;top:25px;" autocapitalize=" " for="menu-toggle" alt="Icon" id="icon" onclick="toggleNavbar()"></i>
  
      <h1 style="margin-top:22px;margin-right:10px;font-size:35px;">NETDOT.COM</h1>
 
 <a style="overflow:hidden;" href="music search.html"><i id="search" style="color:white"; class="fa fa-search" ></i></a>
  </div>

  <div class="navbar" style="display:none;">
 <header>
 

  <div class="nav" style="position:relative;bottom:1px;margin-bottom:20px;overflow:hidden;border:solid 1px auto;height:100px;">
<i style="color:white;position:absolute;left:10px;top:35px;"  class="fa fa-arrow-left" autocapitalize=" " for="menu-toggle" alt="Icon" id="icon" onclick="toggleNavbar()"></i>
    <h1 style="font-size:30px;position:absolute;right:80px;bottom:30px;">NETDOT.COM</h1>
 <a style="overflow:hidden;height:1px;width:1px;" href="music search.html">
<i style="position:absolute;right:3px;top:35px;" class="fa fa-search" ></i>
  </a>
  </div>
<a style="height:10px;width:10px;position:absolute;top:10px;" href=" "> </a>
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
document.body.style.backgroundColor = '';

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

    `;

    // Create a style element
    var styleElement = document.createElement('style');

    // Set the content of the style element to the CSS code
    styleElement.innerHTML = cssCode;

    // Append the style element to the head of the document
    document.head.appendChild(styleElement);

// CSS code
var cssCode = `
    /* Your other CSS styles can go here */

    /* Font Awesome link */
    @import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css');
`;

// Create a style element
var styleElement = document.createElement('style');

// Set the content of the style element to the CSS code
styleElement.innerHTML = cssCode;

// Append the style element to the head of the document
document.head.appendChild(styleElement);


// Create a span element
var spanElement = document.createElement('span');

// Set the id attribute to "header"
spanElement.id = 'header';

// Append the span element to the body
document.body.appendChild(spanElement);

	

function handleClick() {
    var navbar = document.querySelector('.no');
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




function click() {
    var navbar = document.querySelector('.no');
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




// Create an h1 element with the class "resultContainer"
        const resultContainer = document.createElement('h1');
        resultContainer.id = 'resultContainer';
       resultContainer.style.fontSize = "30px";

    
    
    
        // Create an image element
        const image = document.createElement('img');
        image.src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRho-DJIh8SCKcHgYrHoAnMgHD8Vq1fhWd1_Q&usqp=CAU'; // Set your image source
        image.style.display = "none";
        // Get the reference to the parent element (e.g., body)
        const parentElement = document.querySelector('.show');
// Append the h1 element to the parent element
        parentElement.appendChild(resultContainer);

        // Append the image element to the parent element
        parentElement.appendChild(image);
        // Append the h1 element before the image
        


