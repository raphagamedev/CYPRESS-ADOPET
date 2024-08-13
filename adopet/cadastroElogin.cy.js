describe('projeto-adopet-login', () => {
    //antes de cada caso rode...
    beforeEach(()=>{

        cy.visit('https://adopet-frontend-cypress.vercel.app/');
        

    })
    //bloco de cadastro
    it('Cadastro do usuário que sera testado a baixo no bloco de login', () => {
           
        cy.contains('a', 'Cadastrar').click();
        //-------------------------------------------------------
        //         incluindo nome
        cy.get('input[name="nome"]').type('Raphael Teste QA2');
        cy.wait(3000);
        //-------------------------------------------------------
        //         incluindo email
        cy.get('input[name="email"]').type('raphaelcp9022@gmail.com');
        cy.wait(3000);
        //-------------------------------------------------------
        //         incluindo senha
        cy.get('input[name="password"]').type('Senha1234');
        cy.wait(3000);
        //-------------------------------------------------------
        //         confirma senha
        cy.get('input[name="confirm_password"]').type('Senha123');
        cy.wait(3000);
        //-------------------------------------------------------
        //         confirma cadastro
        cy.contains('button', 'Cadastrar').click();
       
    })
    
    // bloco de teste login
    // it('Preenchimento correto dos campos e login e autenticação do usuário na pagina', () => {
        
    //     cy.get('[data-test="login-button"]').click();
    //     cy.wait(3000);
    //     cy.get('[data-test="input-loginEmail"]').type('raphaelcp9022@gmail.com');
    //     cy.wait(3000);
    //     cy.get('[data-test="input-loginPassword"]').type('Senha123');
    //     cy.wait(3000);
    //     cy.get('[data-test="submit-button"]').click();

        // provavelmente no login alguns emails não sao validos como o Gmail, no futuro irei testar com um outlook
        //lembrar de quando for testar abrir o especionar e analisar o resultado "nenhum email encontrado"
        //esse ja é um seguno erro
        //o primeiro é que ele quano cadastra nao informa que o email em questao ja foi usado so a falha
  
    //})

    
})