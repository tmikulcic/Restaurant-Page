function MenuPage() {
  const contentDiv = document.querySelector('#content');
  contentDiv.replaceChildren();

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

export { MenuPage };
