

class articlePage {

    constructor() {
        this.deleteButton = '.btn-outline-danger';
    }
    
    deleteArticle() {
        cy.get(this.deleteButton).should('include.text', 'Delete Article').click();
    }
}

export default new articlePage();