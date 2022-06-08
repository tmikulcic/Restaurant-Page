function HomePage() {
  const contentDiv = document.querySelector('#content');
  const heading = document.createElement('h1');
  heading.textContent = 'Welcome to the finest Italian Restaurant in town!';
  heading.classList.add('landing-title');
  contentDiv.appendChild(heading);

  const topImage = document.createElement('img');
  topImage.classList.add('top-image');
  topImage.src = '../src/photos/italian-restaurant.jpg';
  topImage.alt = 'Image of a restaurant';
  contentDiv.appendChild(topImage);

  const para1 = document.createElement('p');
  para1.classList.add('para1');
  para1.textContent =
    'We offer finest Italian food such as pizza, pasta and other for a very affordable price! Come with your family and enjoy the full Italian cuisine experience';
  contentDiv.appendChild(para1);
}

export { HomePage };
