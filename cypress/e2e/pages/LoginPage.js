/// <reference types="cypress" />
require('cypress-xpath');

import LoginSel from "../../selectors/LoginSel";

export class LoginPage {
    
    enteremail(email) {
      cy.xpath(LoginSel.email).type(email);
    }
    enterpassword(password) {
      cy.xpath(LoginSel.pass).type(password);
    }
    clickLogin() {
      cy.xpath(LoginSel.loginbutton).click();
    }
      
      loginUser(email, password) {
        this.enteremail(email);
        this.enterpassword(password);
        
        this.clickLogin();
      }
  }

  