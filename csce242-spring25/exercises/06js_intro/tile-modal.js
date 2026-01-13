document.querySelectorAll(".gallery sectionn").forEach((tile)=>{
    tile.onclick = () => {
        const label = tile.querySelector("h4").innerHTML;
        const imgSRC = tile.querySelector("img").src;
        document.getElementById("popup").style.display="block";
        document.querySelector("#popup h2").innerHTML = label;
        document.querySelector("#popup img").src = imgSRC;
    }
});


















const getShoes = async () => {
    const url = "https://portiaportia.github.io/json/shoes.json";

    try {
        const response = await fetch(url);
        return response.json();
    } catch (error){
        console.log(error);
    }

};


const showShoes = async () => {
    const shoes = await getShoes();
    const shoesSection = document.getElementById("shoes-section");
    
    shoes.forEach((shoe)=>{
        shoesSection.append(shoe.name);

    });
};

showShoes();