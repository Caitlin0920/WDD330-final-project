export function renderWithTemplate(template, parentElement, data, callback) {
  parentElement.insertAdjacentHTML("afterbegin", template);
  if (callback) {
    callback(data);
  }
}

async function loadTemplate(path) {
  const res = await fetch(path);
  const template = await res.text();
  return template;
}

export async function loadHeaderFooter() {
    const headerTemplate = await loadTemplate("../public/partials/header.html");
    const headerElement = document.querySelector("#main-header");
    const footerTemplate = await loadTemplate("../public/partials/footer.html");
    const footerElement = document.querySelector("#main-footer");
  
    renderWithTemplate(headerTemplate, headerElement);
    renderWithTemplate(footerTemplate, footerElement);

    trigerHamMenu();
  }

  function trigerHamMenu(){
    const menuBtn = document.querySelector("#menuBtn");
    const menu = document.querySelector("#menu");
    const img = document.getElementById("menu_banana");

    menuBtn.addEventListener("click", function(){
        if (img.getAttribute("src") === "/public/images/menu_banana.png"){
            img.setAttribute("src", "/public/images/peeled_banana.png");
        }else if (img.getAttribute("src") === "/public/images/peeled_banana.png") {
            img.setAttribute("src", "/public/images/menu_banana.png");
        }
        menu.classList.toggle("responsive");
    });
  }