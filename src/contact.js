
export default function contact(){
    const contacteiner =  document.createElement('div');
    const contactForm = document.createElement('p');
    const contactForm2 = document.createElement('p');
    const mapDiv = document.createElement('div');
    mapDiv.classList.add("map");
    contactForm.classList.add("phone");
    contactForm2.classList.add("phone");
    contacteiner.classList.add("contactArea");
    contactForm.innerText = `Call us: 809 754 3470`;
    contactForm2.innerText= `E-mail us: yourfavpizza@dummymail.com`;

    contacteiner.append(mapDiv, contactForm, contactForm2);

    return contacteiner;
}