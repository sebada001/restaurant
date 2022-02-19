export default function menu(){
    const menuContainer = document.createElement("div");
    const menuChild1 = document.createElement("div");
    const menuChild2 = document.createElement("div");
    const menuChild3 = document.createElement("div");
    const menuChild4 = document.createElement("div");
    const menuChild5 = document.createElement("div");
    const menuChild6 = document.createElement("div");

    const menuImg1 = document.createElement("div");
    const menuImg2 = document.createElement("div");
    const menuImg3 = document.createElement("div");
    const menuImg4 = document.createElement("div");
    const menuImg5 = document.createElement("div");
    const menuImg6 = document.createElement("div");

    const menuTitle1 = document.createElement("h2");
    const menuTitle2 = document.createElement("h2");
    const menuTitle3 = document.createElement("h2");
    const menuTitle4 = document.createElement("h2");
    const menuTitle5 = document.createElement("h2");
    const menuTitle6 = document.createElement("h2");

    menuContainer.classList.add("menuContainer");

    const titleArray = [menuTitle1, menuTitle2, menuTitle3, menuTitle4, menuTitle5, menuTitle6];
    for(let i = 0; i < titleArray.length; i++){
        titleArray[i].classList.add(`menuTitle${i+1}`);
    };

    titleArray[0].textContent = "Wild Nature";
    titleArray[1].textContent = "Flavor Wheel";
    titleArray[2].textContent = "Fresh Garden";
    titleArray[3].textContent = "Mediterranean";
    titleArray[4].textContent = "Traditional";
    titleArray[5].textContent = "Cheese Lovers";

    const imgArray = [menuImg1, menuImg2, menuImg3, menuImg4, menuImg5, menuImg6];
    for(let i = 0; i < imgArray.length; i++){
        imgArray[i].classList.add(`menuImg${i+1}`);
    }; 

    const array = [menuChild1, menuChild2, menuChild3, menuChild4, menuChild5, menuChild6];
    array.forEach(e => e.classList.add("menuItem"));

    for(let i = 0; i< array.length; i++){
        array[i].appendChild(titleArray[i]);
        array[i].appendChild(imgArray[i]);
    };

    menuContainer.append(...array);
    return menuContainer;
}