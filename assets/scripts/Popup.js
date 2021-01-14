class Popup {
  constructor(contentId, fallbackText) {
    this.fallbackText = fallbackText;
    this.contentTemplateEl = document.getElementById(contentId);
    this.modalTemplateEl = document.getElementById('modal-template');
  }

  async sendHttpRequest(method, url) {
    const response = await fetch(url);
    return await response.json();
  }

  async fetchPopup() {
    const responseData = await this.sendHttpRequest(
      'GET',
      'http://localhost:4000/popup'
    );

    if ('content' in document.createElement('template')) {
      const listOfContent = responseData;
      console.log(listOfContent);
      for (const content of listOfContent) {
        const modalElements = document.importNode(
          this.modalTemplateEl.content,
          true
        );
        this.modalElement = modalElements.querySelector('.modal');
        this.backdropElement = modalElements.querySelector('.backdrop');
        const contentEl = document.importNode(
          this.contentTemplateEl.content,
          true
        );
        contentEl.querySelector('button').innerHTML = content.images[0].image;
        contentEl.querySelector('.Main-image').innerHTML =
          content.images[1].image;
        contentEl.querySelector('.Subscribe-to-our-New').textContent =
          content.content[0].text;
        contentEl.querySelector('.Sign-up-to-our-newsl').textContent =
          content.content[1].text;
        contentEl.querySelector('.Please-type-an-e-mai').textContent =
          content.content[3].text;
        contentEl.querySelector('.Lorem-ipsum-dolor-si').textContent =
          content.content[2].text;
        this.modalElement.append(contentEl);

        document.body.insertAdjacentElement('afterbegin', this.modalElement);
        document.body.insertAdjacentElement('afterbegin', this.backdropElement);
        this.backdropElement.addEventListener('click', this.hide);
      }
    } else {
      alert(this.fallbackText);
    }
  }

  hide() {
    if (this.modalElement) {
      document.body.removeChild(this.modalElement);
      document.body.removeChild(this.backdropElement);
      this.modalElement = null;
      this.backdropElement = null;
    }
  }
}

const popup = new Popup('loading-modal-content', 'Loading - Please wait');
popup.fetchPopup();
