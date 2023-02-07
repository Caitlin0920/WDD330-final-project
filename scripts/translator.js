import { loadHeaderFooter } from "./header_footer.mjs";
import { getLocalStorage, setLocalStorage, apiFetch } from "./data.mjs";

loadHeaderFooter();

// url fetch infor
const translateBtn = document.getElementById("trans-now-btn");
const output = document.getElementById("minion-output");
const displayOutput = document.getElementById("translated");
let bananas = document.querySelectorAll(".banana");

translateBtn.addEventListener("click", async function(){
    // bananas count
    // local storage infor
    const localCount = getLocalStorage("translation-time");
    const date = new Date;
    const hour = date.getHours();
    let times = 0;

    const input = document.getElementById("eng-input").value;
    const minionUrl = "https://api.funtranslations.com/translate/minion.json" + "?text=" + input;

    if (localCount == null || parseInt(localCount) == 0){
        times = 1
        setLocalStorage("translation-time", times);
        setLocalStorage("first-click-hour", hour);
        bananas[0].setAttribute("src", "/public/images/black_banana.png");
        displayOutput.style.display = "flex";
        const data = await apiFetch(minionUrl);
        output.innerHTML = `${data.contents.translated}`;
    
    }else if (getLocalStorage("first-click-hour") == hour && (parseInt(localCount) >= 1 && parseInt(localCount) < 5)){
        times = parseInt(localCount) + 1;
        setLocalStorage("translation-time", times);
        bananas[parseInt(localCount)].setAttribute("src", "/public/images/black_banana.png");
        displayOutput.style.display = "flex";
        const data = await apiFetch(minionUrl);
        output.innerHTML = `${data.contents.translated}`;

    }else if (getLocalStorage("first-click-hour") == hour && parseInt(localCount) == 5){
        displayOutput.style.display = "block";
        output.innerHTML = "You have reached the hourly limit! Please come back next hour!";

    }else if (getLocalStorage("first-click-hour") != hour){
        times = 0;
        setLocalStorage("translation-time", times);
        for (let i = 0; i < bananas.length; i++){
            bananas[i].setAttribute("src", "/public/images/banana.png");
        }
        output.innerHTML = "";
    }
});