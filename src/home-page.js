function HomePage() {
  const contentDiv = document.querySelector('#content');
  contentDiv.replaceChildren();

  const heading = document.createElement('h1');
  heading.textContent = `Welcome to Papa Tony's, the finest Italian Restaurant in town since 1911!`;
  heading.classList.add('landing-title');
  contentDiv.appendChild(heading);

  const homePizza = document.createElement('img');
  homePizza.classList.add('top-image');
  homePizza.src = '../src/photos/pizza-home.jpg';
  homePizza.alt = 'Image of a pizza';
  contentDiv.appendChild(homePizza);

  const para1 = document.createElement('p');
  para1.classList.add('para1');
  para1.textContent = 'Order online or visit us!';
  contentDiv.appendChild(para1);
}

export { HomePage };
