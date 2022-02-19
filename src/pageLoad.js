export default function pageLoad(){
    // const container = document.querySelector("#content")
    
    
    const headerSec = document.createElement("header");
    const pageTitle = document.createElement("h1");
    const pageTitleMenu = document.createElement("div");
    const pageHome = document.createElement("button");
    const pageMenu = document.createElement("button");
    const pageContact = document.createElement("button");
    const footerText = document.createElement("p");

    pageTitle.textContent = "Pepperizza";
    pageHome.textContent = "Home";
    pageMenu.textContent = "Menu";
    pageContact.textContent = "Contact";
    footerText.textContent = "Pepperiza, your favorite pizza! All rights reserved."

    pageTitleMenu.classList.add("menu");
    pageHome.classList.add("homeButt");
    pageMenu.classList.add("menuButt");
    pageContact.classList.add("contactButt");
    
    
    pageTitleMenu.appendChild(pageHome);
    pageTitleMenu.appendChild(pageMenu);
    pageTitleMenu.appendChild(pageContact);
    headerSec.appendChild(pageTitle);
    headerSec.appendChild(pageTitleMenu);


    // container.appendChild(headerSec);



    const footer = document.createElement("footer");
    footer.classList.add("footer");
    footer.appendChild(footerText);

    return [headerSec, footer];
    //
}


    

