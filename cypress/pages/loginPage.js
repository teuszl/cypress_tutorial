import testData from '../fixtures/testData.json'

class loginPage {

    constructor() {
        this.loginInput =  ':nth-child(1) > .form-control';
        this.passwordInput = ':nth-child(2) > .form-control';
        this.loginButton = '.btn';
    };

    visitLoginPage() {
        cy.visit('https://react-redux.realworld.io/#/login');
        cy.title().should('eq','Conduit');
        cy.location('protocol').should('eq','https:');
    };

    fillEmail() {
        cy.get(this.loginInput).type(testData.email).should('have.value', testData.email);
    };

    fillPassword() {
        cy.get(this.passwordInput).type(testData.password).should('have.value', testData.password);
    };

    logIn() {
        cy.get(this.loginButton).contains('Sign in').should('be.visible').click();
        cy.contains('Your Feed').should('be.visible');
    };
}

export default new loginPage();
