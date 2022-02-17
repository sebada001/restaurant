export default function pageLoad(){
    const container = document.querySelector("#content")
    
    
    const headerSec = document.createElement("header");
    const pageTitle = document.createElement("h1");
    const pageTitleMenu = document.createElement("div");
    const pageOne = document.createElement("button");
    const pageTwo = document.createElement("button");
    const pageThree = document.createElement("button");

    pageTitle.textContent = "Pepperiza";
    pageOne.textContent = "Home";
    pageTwo.textContent = "Menu";
    pageThree.textContent = "Contact";

    pageTitleMenu.classList.add("menu")
    
    
    pageTitleMenu.appendChild(pageOne);
    pageTitleMenu.appendChild(pageTwo);
    pageTitleMenu.appendChild(pageThree);
    headerSec.appendChild(pageTitle);
    headerSec.appendChild(pageTitleMenu);

    container.appendChild(headerSec);

    // each one of these in its own module
    const bodyContainer = document.createElement("div");
    bodyContainer.classList.add("bodyCont");
    const bodyTitle = document.createElement("div");
    bodyTitle.classList.add("bodyTitle");
    const bodyItem1 = document.createElement("div");
    bodyItem1.classList.add("bodyItem1");
    const bodyItem2 = document.createElement("div");
    bodyItem2.classList.add("bodyItem2");
    const bodyItem3 = document.createElement("div");
    bodyItem3.classList.add("bodyItem3");
    const bodyItem4 = document.createElement("div");
    bodyItem4.classList.add("bodyItem4");
    const bodyItem5 = document.createElement("div");
    bodyItem5.classList.add("bodyItem5");
    const bodyItem6 = document.createElement("div");
    bodyItem6.classList.add("bodyItem6");

    bodyContainer.append(bodyTitle, bodyItem1, bodyItem2,  bodyItem3,  
                        bodyItem4, bodyItem5,  bodyItem6) 
    container.appendChild(bodyContainer);
    //

}

