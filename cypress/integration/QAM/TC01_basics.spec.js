import testData from '../../fixtures/testData.json'
describe('Login', () =>{

    it('Sign in', () =>{
        cy.visit('https://react-redux.realworld.io/#/login');
        cy.get(':nth-child(1) > .form-control').type(testData.email).should('have.value', testData.email);
        cy.get(':nth-child(2) > .form-control').type(testData.password).should('have.value', testData.password);
        cy.get('.btn').contains('Sign in').should('be.visible').click();
    })
})
