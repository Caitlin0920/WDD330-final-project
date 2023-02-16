import { loadHeaderFooter } from "./header_footer.mjs";
import { getLocalStorage } from "./data.mjs";

let list = getLocalStorage("dictionary");
let warning = document.getElementById("no-card");
const cards = document.querySelector(".cards");
const searchBtn = document.querySelector("#searchBtn");


loadHeaderFooter();
displayCards(list);

function displayCards(list) {
    // display the message of adding new words or sentences
    if (list == null){
        warning.style.display = "block";
    }
    list.forEach(card => {
        let template = cardTemplate(card);
        cards.insertAdjacentHTML("beforeend", template);
    });
}

function cardTemplate(card) {
    return `<div class="card-box">
        <h3>English</h3>
        <h3>Minion Language</h3>
        <p>${card.contents.text}</p>
        <p>${card.contents.translated}</p>
    </div>`;
}

// find the match searches
searchBtn.addEventListener("click", function() {
    // get the search value
    const search = document.querySelector(".search");
    console.log(search.value)
    // a list to save the searhces
    let searchList = [];
    // remove all the elements so it won't show up
    const displaiedList = document.querySelectorAll(".card-box");
    for(let i = 0; i < displaiedList.length; i++) {
        displaiedList[i].remove();
    };
    console.log(displaiedList)
    // loop through list to find the searches
    list.forEach(card => {
        if((card.contents.text).toLowerCase().includes((search.value).toLowerCase())) {
            warning.style.display = "none";
            searchList.push(card);
            console.log(card);

        }else if ((search.value).toLowerCase() == "all") {
            warning.style.display = "none";
            searchList = getLocalStorage("dictionary");
        }
    });
    if (searchList == "") {
        warning.innerHTML = `Cannot find <strong>"${search.value}"</strong>. Please translate the word/sentence first.`
        warning.style.display = "block";
    }
    displayCards(searchList);
    searchList = [];
})