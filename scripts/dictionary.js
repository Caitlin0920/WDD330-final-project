import { loadHeaderFooter } from "./header_footer.mjs";
import { getLocalStorage } from "./data.mjs";

let list = getLocalStorage("dictionary");

loadHeaderFooter();
displayCards(list);

function displayCards(list) {
    // const list = getLocalStorage("dictionary");
    const cards = document.querySelector(".cards");
    const warning = document.getElementById("no-card");
    if (list != null){
        warning.remove();
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

// const list = getLocalStorage("dictionary");
const searchBtn = document.querySelector("#searchBtn");
searchBtn.addEventListener("click", function() {
    const search = document.querySelector(".search");
    let searchList = [];
    list.forEach(card => {
        if(card.contents.text) {
            
        }
    })
})