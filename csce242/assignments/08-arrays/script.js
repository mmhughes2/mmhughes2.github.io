// Associative arrays (objects)

// Happy songs
const happySongs = {
    "Happy by Pharrell Williams":
        "https://www.youtube.com/embed/ZbZSe6N_BXs",

    "Don't Stop Me Now by Queen":
        "https://www.youtube.com/embed/HgzGwKwLmgM",

    "Can't Stop the Feeling by Justin Timberlake":
        "https://www.youtube.com/embed/ru0K8uYEZWw",

    "Don't Worry Be Happy by Bobby McFerrin":
        "https://www.youtube.com/embed/d-diB65scQU",

    "I'm Walking on Sunshine by Katrina & the Waves":
        "https://www.youtube.com/embed/iPUmE-tne5U"
};

// Sad songs
const sadSongs = {
    "Happier Than Ever by Billie Eilish":
        "https://www.youtube.com/embed/5GJWxDKyk3A",

    "Someone You Loved by Lewis Capaldi":
        "https://www.youtube.com/embed/zABLecsR5UE",

    "Someone Like You by Adele":
        "https://www.youtube.com/embed/hLQl3WQQoQ0",

    "Fix You by Coldplay":
        "https://www.youtube.com/embed/k4V3Mo61fJM",

    "Hurt by Johnny Cash":
        "https://www.youtube.com/embed/8AHCfZTRGiI"
};

const moodSelect = document.getElementById("mood");
const songList = document.getElementById("songList");
const videoContainer = document.getElementById("videoContainer");
const videoFrame = document.getElementById("videoFrame");


// When mood changes
moodSelect.addEventListener("change", function () {

    songList.innerHTML = "";
    videoContainer.classList.add("hidden");
    videoFrame.src = "";

    let selectedSongs;

    if (this.value === "happy") {
        selectedSongs = happySongs;
    } else if (this.value === "sad") {
        selectedSongs = sadSongs;
    } else {
        return;
    }

    // Create links
    for (let songName in selectedSongs) {

        const li = document.createElement("li");

        const link = document.createElement("a");
        link.href = "#";
        link.textContent = songName;

        link.addEventListener("click", function (e) {
            e.preventDefault();

            videoFrame.src = selectedSongs[songName];
            videoContainer.classList.remove("hidden");
        });

        li.appendChild(link);
        songList.appendChild(li);
    }
});