describe('Login', function(){
    it('Sign in', function(){
        cy.visit('https://react-redux.realworld.io/#/login');
        cy.get(':nth-child(1) > .form-control').type('teuszluczak@gmail.com').should('have.value', 'teuszluczak@gmail.com');
        cy.get(':nth-child(2) > .form-control').type('tohaslo1!').should('have.value', 'tohaslo1!');
        cy.get('.btn').contains('Sign in').should('be.visible').click();
    })
})