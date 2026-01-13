document.addEventListener('DOMContentLoaded', function () {
    const images = {
        'Happy Birthday': 'birthday.jpg',
        'Crazy Clown': 'clown.jpg',
        'It\'s Raining': 'rain.jpg',
        'Quiet Time': 'read.jpg',
        'Working Hard': 'shovel.jpg',
        'Work from Home': 'work.jpg'
    };

    const titlesDiv = document.getElementById('titles');
    Object.keys(images).forEach(title => {
        let titleDiv = document.createElement('div');
        titleDiv.textContent = title;
        titleDiv.className = 'title';
        titleDiv.style.cursor = 'pointer';
        titleDiv.onclick = function () {
            document.getElementById('popup-title').textContent = title;
            document.getElementById('popup-image').src = 'images/' + images[title];
            document.getElementById('popup').classList.remove('hidden');
        };
        titlesDiv.appendChild(titleDiv);
    });

    document.getElementById('close').onclick = function () {
        document.getElementById('popup').classList.add('hidden');
    };
});
