describe('Create post, mark as favorite, then unfavorite', function(){
    it('Sign in', function(){
        cy.visit('https://react-redux.realworld.io/#/login');
        cy.title().should('eq','Conduit');
        cy.location('protocol').should('eq','https:');
        cy.get(':nth-child(1) > .form-control').type('teuszluczak@gmail.com').should('have.value', 'teuszluczak@gmail.com');
        cy.get(':nth-child(2) > .form-control').type('tohaslo1!').should('have.value', 'tohaslo1!');
        cy.get('.btn').contains('Sign in').should('be.visible').click();
        cy.contains('Your Feed').should('be.visible');
    })

    it('Create a post', function(){
        cy.contains('New Post').click();
        cy.hash().should('include', '#/editor');
        cy.get(':nth-child(1) > .form-control').type('myTitle').should('have.value', 'myTitle');
        cy.get(':nth-child(2) > .form-control').type('myDescription').should('have.value', 'myDescription');
        cy.get(':nth-child(3) > .form-control').type('myArticle').should('have.value', 'myArticle');
        cy.get(':nth-child(4) > .form-control').type('myTag').should('have.value', 'myTag');
        cy.get('.btn').contains('Publish Article').click();
    })

    it('Verify if post is saved', function(){
        cy.hash().should('include', '#/article');
        cy.get('h1').should('have.text', 'myTitle');
        cy.get('p').should('have.text', 'myArticle');
    })

    it('Mark as favorite', function(){
        cy.get(':nth-child(4) > .nav-link').should('be.visible').click();
        cy.hash().should('include','#/@Teusz');
        cy.get(':nth-child(1) > .article-meta > .pull-xs-right > .btn').should('be.visible').click().should('have.css', 'background-color', 'rgb(92, 184, 92)');
    })
})