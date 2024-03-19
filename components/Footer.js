class Footer extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.render();
  }

  render() {
    const wrapper = document.createElement('footer');
    wrapper.setAttribute('class', 'footer__section');

    const contentDiv = document.createElement('div');
    const linkedinLink = document.createElement('a');
    linkedinLink.setAttribute('href', 'https://www.linkedin.com/');
    linkedinLink.textContent = 'Linkedin';
    contentDiv.appendChild(linkedinLink);

    const githubLink = document.createElement('a');
    githubLink.setAttribute('href', 'https://github.com/');
    githubLink.textContent = 'Github';
    contentDiv.appendChild(githubLink);

    const copyrightSpan = document.createElement('span');
    copyrightSpan.textContent = '© alencar - 2024';

    wrapper.appendChild(contentDiv);
    wrapper.appendChild(copyrightSpan);

    const linkElement = document.createElement('link');
    linkElement.setAttribute('rel', 'stylesheet');
    linkElement.setAttribute('href', '/css/footer.css');

    this.shadowRoot.appendChild(linkElement);
    this.shadowRoot.appendChild(wrapper);
  }
}

customElements.define('footer-component', Footer);
