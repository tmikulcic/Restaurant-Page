function AboutPage() {
  const contentDiv = document.querySelector('#content');
  contentDiv.replaceChildren();

  const para1 = document.createElement('p');
  para1.classList.add('para1');
  para1.textContent =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus facilisis magna sed erat luctus gravida. Sed nec commodo elit. Pellentesque volutpat vestibulum consequat. Maecenas malesuada tristique leo, a pellentesque tortor placerat a. Donec a elementum orci, non rhoncus nisi. Sed sit amet interdum orci, a pulvinar metus. Mauris dolor mi, cursus vel mauris ac, molestie congue felis. Mauris id sem lobortis tortor scelerisque volutpat. Duis fringilla, leo eget auctor tempor, velit ante malesuada nisl, nec imperdiet metus lectus id eros. Suspendisse convallis magna metus, eu condimentum sem elementum ac. Nulla tempus dapibus velit venenatis rutrum.';
  contentDiv.appendChild(para1);

  const para2 = document.createElement('p');
  para2.classList.add('para1');
  para2.textContent =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus facilisis magna sed erat luctus gravida. Sed nec commodo elit. Pellentesque volutpat vestibulum consequat.';
  contentDiv.appendChild(para2);
}

export { AboutPage };
