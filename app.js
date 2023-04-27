// Select the hamburger icon and the navigation menu element from the DOM
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const navLink = document.querySelectorAll('.nav-link');

// Define the mobileMenu() that toggles the 'active' class on the hamburger icon and the nav menu
function mobileMenu() {
  hamburger.classList.toggle('active');
  navMenu.classList.toggle('active');
  document.body.classList.toggle('no-scroll'); // add or remove the 'no-scroll' class to the body element
}

// Add a click event listener to the hamburger icon that triggers the mobileMenu function
hamburger.addEventListener('click', mobileMenu);

// Define the closeMenu() that removes the 'active' class from the hamburger icon and the nav menu
function closeMenu() {
  hamburger.classList.remove('active');
  navMenu.classList.remove('active');
  document.body.classList.remove('no-scroll'); // remove the 'no-scroll' class from the body element
}

// Select all the nav links and add a click event to each one that triggers the closeMenu function
navLink.forEach((n) => n.addEventListener('click', closeMenu));
/*= ========================speakers============================= */
const speakers = document.querySelector('.speakers-details');
const speakersArray = [
  {
    name: 'ANDERAS S.<br>CONSTANTINIDES',
    title: 'Head of Messaging<br>& Marketing',
    image: 'image/speaker2.jpg',
    about: 'morethan160',

  },
  {
    name: 'MARIA<br>PELIVANIDE',
    title: 'Director',
    image: 'image/Maria-speaker1.jpeg',
    about: 'morethan160',

  },
  {
    name: 'FABRIZIO<br>SALANITRI',
    title: 'CEO',
    image: 'image/speaker3.jpg',
    about: 'HORSIEN',

  },
  {
    name: 'SCARLETT<br>WOODFORD',
    title: 'Principal analyst',
    image: 'image/speaker4.jpg',
    about: 'Juniper Research',

  },
];
// ========FUNCTION TO CREATE THE SPEAKERS DETAILS=======
function speakerCreate() {
  for (let i = 0; i < speakersArray.length; i += 1) {
    const speaker = speakersArray[i];
    const speakerHtml = `
      <div class="speakers-info">
        <img src="${speaker.image}" alt="Business-messaging" />
        <div class="details">
          <h4><strong>${speaker.name}</strong></h4>
          <p class="title">${speaker.title}</p>
          <hr />
          <p class="position">${speaker.about}</p>
        </div>
      </div>
    `;
    speakers.innerHTML += speakerHtml;
  }
}

speakerCreate();