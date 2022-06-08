function HomePage() {
  const contentDiv = document.querySelector('#content');
  const heading = document.createElement('h1');
  heading.textContent = 'Welcome to the finest Italian Restaurant in town!';
  heading.classList.add('landing-title');
  contentDiv.appendChild(heading);

  const topImage = document.createElement('img');
  topImage.classList.add('top-image');
  topImage.src = './photos/italian-restaurant.jpg';
  topImage.alt = 'Image of a restaurant';
  contentDiv.appendChild(topImage);
}

export { HomePage };
