function ContactPage() {
  const contentDiv = document.querySelector('#content');
  contentDiv.replaceChildren();

  const para1 = document.createElement('p');
  para1.classList.add('para1');
  para1.textContent = 'Address: wellington street 82B';
  contentDiv.appendChild(para1);

  const para2 = document.createElement('p');
  para2.classList.add('para1');
  para2.textContent = 'Working hours: every day 7am - 11pm';
  contentDiv.appendChild(para2);

  const para3 = document.createElement('p');
  para3.classList.add('para1');
  para3.textContent = 'phone number: +3913 842 952';
  contentDiv.appendChild(para3);
}

export { ContactPage };
