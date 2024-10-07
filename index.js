/* 
    David Sosa
    CPSC 332 - Web Development
    Homework 5 - JavaScript
    Last Modified: October 7, 2024
*/

// List of additional artworks to add dynamically
const newArtworks = [
    {
        title: "The Scream",
        artist: "Edvard Munch",
        img: "https://via.placeholder.com/200",
    },
    {
        title: "Girl with a Pearl Earring",
        artist: "Johannes Vermeer",
        img: "https://via.placeholder.com/200",
    },
    {
        title: "The Birth of Venus",
        artist: "Sandro Botticelli",
        img: "https://via.placeholder.com/200",
    },
    {
        title: "The Night Watch",
        artist: "Rembrandt van Rijn",
        img: "https://via.placeholder.com/200",
    },
    {
        title: "The Kiss",
        artist: "Gustav Klimt",
        img: "https://via.placeholder.com/200",
    },
    {
        title: "American Gothic",
        artist: "Grant Wood",
        img: "https://via.placeholder.com/200",
    },
    {
        title: "Las Meninas",
        artist: "Diego Velázquez",
        img: "https://via.placeholder.com/200",
    },
    {
        title: "The Last Supper",
        artist: "Leonardo da Vinci",
        img: "https://via.placeholder.com/200",
    },
    {
        title: "Water Lilies",
        artist: "Claude Monet",
        img: "https://via.placeholder.com/200",
    },
    {
        title: "Starry Night Over the Rhône",
        artist: "Vincent van Gogh",
        img: "https://via.placeholder.com/200",
    },
];

// useful variables
let counter = 0;
let artWorkCounter = 0;
let artPanels = document.querySelectorAll(".art-panel");

// Updating counter and changing background color
for (let i = 0; i < artPanels.length; i++) {
    let panel = artPanels[i];
    panel.addEventListener("click", () => {
        if (!panel.classList.contains("panelViewed")) {
            counter++;
            panel.classList.add("panelViewed");
        }
        document.getElementById("counter").textContent =
            "Art Works Viewed: " + counter;
    });
}

// Reset Button functionality
let resetButton = document.getElementById("reset-button");
resetButton.addEventListener("click", () => {
    artPanels = document.querySelectorAll(".art-panel");
    counter = 0;
    for (let i = 0; i < artPanels.length; i++) {
        let panel = artPanels[i];
        if (panel.classList.contains("panelViewed")) {
            panel.classList.remove("panelViewed");
        }
    }
    document.getElementById("counter").textContent =
        "Art Works Viewed: " + counter;
});

// Add Artwork Button Functionality
let addButton = document.getElementById("add-art-button");
addButton.addEventListener("click", () => {
    if (artWorkCounter < newArtworks.length) {
        let newDiv = document.createElement("div");
        newDiv.className = "art-panel";
        newDiv.innerHTML =
            "<img src='" +
            newArtworks[artWorkCounter].img +
            "' alt='" +
            newArtworks[artWorkCounter].title +
            "' /> " +
            "<p>" +
            newArtworks[artWorkCounter].title +
            " by " +
            newArtworks[artWorkCounter].artist +
            "</p>";
        document.querySelector("section").appendChild(newDiv);
        artWorkCounter++;

        // Giving new div some attributes
        newDiv.addEventListener("click", () => {
            if (!newDiv.classList.contains("panelViewed")) {
                counter++;
                newDiv.classList.add("panelViewed");
            }
            document.getElementById("counter").textContent =
                "Art Works Viewed: " + counter;
        });
    }
});
