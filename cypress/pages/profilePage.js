

class profilePage {

    constructor() {
        this.articleLink = ':nth-child(1) > .preview-link > h1';
    }

    openArticle() {
        cy.get(this.articleLink).should('be.visible').click();
    }
}

export default new profilePage();