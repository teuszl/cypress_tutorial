import articlePage from '../../pages/articlePage.js';
import loginPage from '../../pages/loginPage.js';
import mainPage from '../../pages/mainPage.js';
import profilePage from '../../pages/profilePage.js';

describe('login, create post, delete post', function(){
    beforeEach(() => {
        loginPage.visitLoginPage();
        loginPage.fillEmail();
        loginPage.fillPassword();
        loginPage.logIn();

    })

    it('opens article', ()=> {
        mainPage.visitProfilePage();
        profilePage.openArticle();
        articlePage.deleteArticle();
    })

    // it('Create a post', () =>{
    //     cy.contains('New Post').click();
    //     cy.hash().should('include', '#/editor');
    //     cy.get(':nth-child(1) > .form-control').type('myTitle').should('have.value', 'myTitle');
    //     cy.get(':nth-child(2) > .form-control').type('myDescription').should('have.value', 'myDescription');
    //     cy.get(':nth-child(3) > .form-control').type('myArticle').should('have.value', 'myArticle');
    //     cy.get(':nth-child(4) > .form-control').type('myTag').should('have.value', 'myTag');
    //     cy.get('.btn').contains('Publish Article').click();
    // })

    // it('Verify if post is saved', () =>{
    //     cy.hash().should('include', '#/article');
    //     cy.get('h1').should('have.text', 'myTitle');
    //     cy.get('p').should('have.text', 'myArticle');
    // })

    // it('Mark as favorite', () =>{
    //     cy.get(':nth-child(4) > .nav-link').should('be.visible').click();
    //     cy.hash().should('include','#/@Teusz');
    //     cy.get(':nth-child(1) > .article-meta > .pull-xs-right > .btn').should('be.visible').click().should('have.css', 'background-color', 'rgb(92, 184, 92)');
    // })
})
