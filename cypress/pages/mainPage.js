

class mainPage {

    constructor() {
        this.profileButton = ':nth-child(4) > .nav-link';
    }

    visitProfilePage(){
        cy.get(this.profileButton).should('be.visible').click();
    }
}

export default new mainPage();