class ExperienciaItem extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.render();
  }

  render() {
    const wrapper = document.createElement('div');
    wrapper.setAttribute('class', 'experiencia__content');

    const cargoDiv = document.createElement('div');
    cargoDiv.setAttribute('class', 'experiencia__item__cargo');

    const cargoTitle = document.createElement('h2');
    cargoTitle.textContent = this.getAttribute('cargo');

    const cargoPeriod = document.createElement('span');
    cargoPeriod.textContent = this.getAttribute('periodo');

    cargoDiv.appendChild(cargoTitle);
    cargoDiv.appendChild(cargoPeriod);

    const empresaTitle = document.createElement('h2');
    empresaTitle.textContent = this.getAttribute('empresa');

    wrapper.appendChild(cargoDiv);
    wrapper.appendChild(empresaTitle);

    const linkElement = document.createElement('link');
    linkElement.setAttribute('rel', 'stylesheet');
    linkElement.setAttribute('href', '/css/experiencia.css');

    this.shadowRoot.appendChild(linkElement);
    this.shadowRoot.appendChild(wrapper);
  }
}

customElements.define('experiencia-item', ExperienciaItem);
