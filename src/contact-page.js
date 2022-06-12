function ContactPage() {
  const contentDiv = document.querySelector('#content');
  contentDiv.replaceChildren();

  const homePizza = document.createElement('img');
  homePizza.classList.add('top-image');
  homePizza.src = '../src/photos/pizza-home.jpg';
  homePizza.alt = 'Image of a pizza';
  contentDiv.appendChild(homePizza);
}

export { ContactPage };
