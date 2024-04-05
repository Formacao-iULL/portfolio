class FormacaoItem extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.build();
  }

  build() {
    const wrapper = document.createElement('div');
    wrapper.setAttribute('class', 'formacao__content');

    const formacaoDiv = document.createElement('div');
    formacaoDiv.setAttribute('class', 'formacao__item');

    const formacaoPeriod = document.createElement('span');
    formacaoPeriod.textContent = this.getAttribute('periodo');

    const formacaoTitle = document.createElement('h2');
    formacaoTitle.textContent = this.getAttribute('titulo');

    const formacaoDescricao = document.createElement('p');
    formacaoDescricao.textContent = this.getAttribute('descricao');

    formacaoDiv.appendChild(formacaoTitle);
    formacaoDiv.appendChild(formacaoPeriod);
    formacaoDiv.appendChild(formacaoDescricao);

    wrapper.appendChild(formacaoDiv);

    const linkElement = document.createElement('link');
    linkElement.setAttribute('rel', 'stylesheet');
    linkElement.setAttribute('href', '/css/formacao.css');

    this.shadowRoot.appendChild(linkElement);
    this.shadowRoot.appendChild(wrapper);
  }
}

customElements.define('formacao-item', FormacaoItem);
