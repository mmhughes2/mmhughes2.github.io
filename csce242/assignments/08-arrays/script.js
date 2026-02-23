// Associative arrays (objects)

// Happy songs
const happySongs = {
    "Happy by Pharrell Williams":
        "https://www.youtube.com/embed/ZbZSe6N_BXs?si=4YAq7UJSaK5iI_sD",

    "Walking on Sunshine by Katrina & the Waves":
        "https://www.youtube.com/embed/iPUmE-tne5U?si=fGMJZdzGOq9qFcTV",

    "Can't Stop the Feeling by Justin Timberlake":
        "https://www.youtube.com/embed/ru0K8uYEZWw?si=IQ_PgNex63Z4nuL1",

    "Don't Worry Be Happy by Bobby McFerrin":
        "https://www.youtube.com/embed/d-diB65scQU?si=10Y4t2IIqbws6wcS",

    "Party in the U.S.A. by Miley Cyrus":
        "https://www.youtube.com/embed/M11SvDtPBhA?si=A2tDGxGOkARY16z4"
};

// Sad songs
const sadSongs = {
    "Happier Than Ever by Billie Eilish":
        "https://www.youtube.com/embed/5GJWxDKyk3A?si=RDvAtIAENhliXLel",

    "Someone You Loved by Lewis Capaldi":
        "https://www.youtube.com/embed/zABLecsR5UE?si=L4JYXSZ546U5HCJH",

    "Someone Like You by Adele":
        "https://www.youtube.com/embed/hLQl3WQQoQ0?si=OcsCuXA0UNeq6PKp",

    "The Night We Met by Lord Huron":
        "https://www.youtube.com/embed/KtlgYxa6BMU?si=_PplkAnuQbxXqmLD",

    "Session 32 by Summer Walker":
        "https://www.youtube.com/embed/tyxJYWvQIbY?si=kAFCCLqFfQOCwhpe"
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