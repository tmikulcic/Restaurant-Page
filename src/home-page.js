function HomePage() {
  const contentDiv = document.querySelector('#content');
  const heading = document.createElement('h1');
  heading.textContent = `Welcome to Papa Tony's, the finest Italian Restaurant in town!`;
  heading.classList.add('landing-title');
  contentDiv.appendChild(heading);

  const para1 = document.createElement('p');
  para1.classList.add('para1');
  para1.textContent =
    'We offer finest Italian food such as pizza, pasta, lasagna for a very affordable price! Come with your family and enjoy the full Italian cuisine experience';
  contentDiv.appendChild(para1);

  const homePizza = document.createElement('img');
  homePizza.classList.add('top-image');
  homePizza.src = '../src/photos/pizza-home.jpg';
  homePizza.alt = 'Image of a pizza';
  contentDiv.appendChild(homePizza);

  const homeSpaghetti = document.createElement('img');
  homeSpaghetti.classList.add('top-image');
  homeSpaghetti.src = '../src/photos/spaghetti-home.jpg';
  homeSpaghetti.alt = 'Image of a pizza';
  contentDiv.appendChild(homeSpaghetti);
}

export { HomePage };
