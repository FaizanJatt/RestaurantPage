
function createHome() {
    const home = document.createElement("div");
    home.classList.add("home");
  
    home.appendChild(createParagraph("Established since 2003"));
    home.appendChild(createParagraph("Fast Food chain restaurant"));
   
    home.appendChild(createParagraph("Order online or visit address to enjoy"));
  
    return home;
  }
  
  function createParagraph(text) {
    const paragraph = document.createElement("p");
    paragraph.textContent = text;
    return paragraph;
  }
  
  function loadHome() {
    const main = document.getElementById("main");
    main.textContent = "";
    main.appendChild(createHome());
  }
  
  export default loadHome;
  