import testData from '../fixtures/testData.json'

class LogInPage {
    visit() {
        cy.visit('https://react-redux.realworld.io/#/login');
        cy.title().should('eq','Conduit');
        cy.location('protocol').should('eq','https:');
    }
    fillEmail() {
        cy.get(':nth-child(1) > .form-control').type(testData.email).should('have.value', testData.email);
    }
    fillPassword() {
        cy.get(':nth-child(2) > .form-control').type(testData.password).should('have.value', testData.password);
    }
    logIn() {
        cy.get('.btn').contains('Sign in').should('be.visible').click();
        cy.contains('Your Feed').should('be.visible');
    }
}

export default new LogInPage();
