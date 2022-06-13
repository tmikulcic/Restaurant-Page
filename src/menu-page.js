function MenuPage() {
  const contentDiv = document.querySelector('#content');
  contentDiv.replaceChildren();

  const pizzas = [
    ' Margherita',
    ' Napolitana',
    ' Capricosa',
    ' Fungi',
    ' Vesuvio',
    ' Quattro Formaggio',
    ' Quattro Formaggio Speciale',
    ' Salami',
    ' Al Tonno',
    ' Vege',
  ];

  pizzas.forEach((pizza) => {
    const para = document.createElement('p');
    para.classList.add('menu-list');
    para.textContent = `Pizza ${pizza}`;
    contentDiv.appendChild(para);
  });
}

export { MenuPage };
