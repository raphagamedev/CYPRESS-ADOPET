describe('projeto-adopet-login', () => {
    //antes de cada caso rode...
    beforeEach(()=>{

        cy.visit('https://adopet-frontend-cypress.vercel.app/');
        

    })
    
    //bloco de cadastro
    // it('Cadastro do usuário com seletores ajustados', () => {
           
        
    //     //-------------------------------------------------------
    //     //         incluindo nome
    //     cy.get('[data-test="register-button]').type('Raphael Teste QA3');
    //     cy.wait(3000);
    //     //-------------------------------------------------------
    //     //         incluindo email
    //     cy.get('input[name="email"]').type('raphaelcp9022@gmail.com');
    //     cy.wait(3000);
    //     //-------------------------------------------------------
    //     //         incluindo senha
    //     cy.get('input[name="password"]').type('Senha1234');
    //     cy.wait(3000);
    //     //-------------------------------------------------------
    //     //         confirma senha
    //     cy.get('input[name="confirm_password"]').type('Senha123');
    //     cy.wait(3000);
    //     //-------------------------------------------------------
    //     //         confirma cadastro
    //     cy.contains('button', 'Cadastrar').click();
       
    // })


    //bloco de teste login
    it('login dinamico', () => {


        cy.get('[data-test="login-button"]').click();
        cy.login('raphaelcp9022@gmail.com','Senha123');
              
   
     })

})