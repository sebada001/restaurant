export default function home(){
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
    const bodyItem2Title = document.createElement("h2");
    bodyItem2Title.classList.add("div-titles");
    const bodyItem3Title = document.createElement("h2");
    bodyItem3Title.classList.add("div-titles");
    const bodyItem6Title = document.createElement("h2");
    bodyItem6Title.classList.add("div-titles");

    bodyTitle.textContent = "HOW YOUR FAVORITE PIZZA IS MADE";
    bodyItem2Title.textContent = "EVERY DAY"
    bodyItem2.textContent = "At Pepperiza we use only the highest quality ingredients, and our doughs are knead and baked fresh every single day."
    bodyItem3Title.textContent = "HEAT IS KING"
    bodyItem3.textContent = "With our 100 year old, never-failing recipe and extremely high temperature ovens, we achieve unmatched texture."
    bodyItem6Title.textContent = "PASSION INSIDE"
    bodyItem6.textContent = "We only hire people who are as passionate about pizza as we are! Our staff is very committed to our quality standards!"

    bodyItem2.appendChild(bodyItem2Title);
    bodyItem3.appendChild(bodyItem3Title);
    bodyItem6.appendChild(bodyItem6Title);
    bodyContainer.append(bodyTitle, bodyItem1, bodyItem2,  bodyItem3,  
                        bodyItem4, bodyItem5,  bodyItem6);
    return bodyContainer;
}