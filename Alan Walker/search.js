  const movieData = [
        { title: "Movie 1", imageUrl: "movie1.jpg", link: "movie1.html" },
        { title: "Movie 2", imageUrl: "movie2.jpg", link: "movie2.html" }
        // Add more movie data here
    ];

    const musicData = [
        { title: "Faded by Alan Walker", imageUrl: "https://upload.wikimedia.org/wikipedia/en/d/da/Alan_Walker_-_Faded.png", link: "faded.html" },
        { title: "All Falls Down by Alan Walker", imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQt8PZusawde5WYdYxwDxpBg51UEd1xHm1t4Q&usqp=CAU", link: "all falls downl.html" },
        { title: "Alone by Alan walker", imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiPbD65evlNcRm-aAqKZ6MtJHO7GdYrZQaMg&usqp=CAU", link: "Alone.html" },
          { title: "Alone II Featuring Ava Max by Alan Walker ", imageUrl: " ",},
         { title: " ", imageUrl: " ", link: ".html" },
        { title: " ", imageUrl: " ", link: ".html" },
         { title: " ", imageUrl: " ", link: ".html" },
        { title: " ", imageUrl: " ", link: ".html" },
        { title: " ", imageUrl: " ", link: ".html" },
        { title: " ", imageUrl: " ", link: ".html" },
    { title: " ", imageUrl: " ", link: ".html" },
        { title: " ", imageUrl: " ", link: ".html" },
        { title: " ", imageUrl: " ", link: ".html" },
        { title: " ", imageUrl: " ", link: ".html" },
    { title: " ", imageUrl: " ", link: ".html" },
        { title: " ", imageUrl: " ", link: ".html" },
        { title: " ", imageUrl: " ", link: ".html" },
        { title: " ", imageUrl: " ", link: ".html" },
    { title: " ", imageUrl: " ", link: ".html" },
        { title: " ", imageUrl: " ", link: ".html" },
        { title: " ", imageUrl: " ", link: ".html" },
        { title: " ", imageUrl: " ", link: ".html" },
    { title: " ", imageUrl: " ", link: ".html" },
        { title: " ", imageUrl: " ", link: ".html" },
        { title: " ", imageUrl: " ", link: ".html" },
        { title: " ", imageUrl: " ", link: ".html" },
        // Add more music data here
    ];

    const newsData = [
        { title: "News 1", imageUrl: "news1.jpg", link: "news1.html" },
        { title: "News 2", imageUrl: "news2.jpg", link: "news2.html" }
        // Add more news data here
    ];

    // Combine all data into one array
    const allData = [...movieData, ...musicData, ...newsData];

    const searchInput = document.getElementById("search-input");
    const resultsContainer = document.getElementById("results-container");
    let currentData = allData; // Set initial data to all

    function updateCurrentData(data) {
        currentData = data; // Update the current data
        searchInput.value = ""; // Clear the search input
        displayResults(data);
    }

    updateCurrentData(allData); // Default to all data

    searchInput.addEventListener("input", function () {
        const searchTerm = searchInput.value.trim().toLowerCase();

        if (searchTerm === "") {
            resultsContainer.style.display = "none";
        } else {
            const searchResults = currentData.filter(item =>
                item.title.toLowerCase().includes(searchTerm)
            );
            displayResults(searchResults);
        }
    });

    function displayResults(results) {
        if (results.length > 0) {
            resultsContainer.innerHTML = "";
            results.forEach(result => {
                const resultElement = document.createElement("div");
                resultElement.classList.add("result-item");

                const titleElement = document.createElement("p");
                const titleLink = document.createElement("a");
                titleLink.href = result.link;
                titleLink.target = "_blank";
                titleLink.textContent = result.title;
                titleElement.appendChild(titleLink);
                resultElement.appendChild(titleElement);

                if (result.imageUrl) {
                    const imgElement = document.createElement("img");
                    imgElement.src = result.imageUrl;
                    resultElement.appendChild(imgElement);
                }

                resultsContainer.appendChild(resultElement);
            });
            resultsContainer.style.display = "block";
        } else {
            resultsContainer.innerHTML = "<p>No results found.</p>";
            resultsContainer.style.display = "block";
        }
    }
// Add this code to your JavaScript
const codeContainer = document.getElementById('code-container');
const toggleButton = document.getElementById('toggle-button');
let codeVisible = true; // Initial state, code is visible

toggleButton.addEventListener('click', () => {
    codeVisible = !codeVisible; // Toggle visibility
    codeContainer.style.display = codeVisible ? 'block' : 'none';
});
function toggleSearch() {
    const searchContainer = document.getElementById("search-container");
    searchContainerVisible = !searchContainerVisible;
    searchContainer.style.display = searchContainerVisible ? "block" : "none";
  }

