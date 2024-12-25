/// <reference types="cypress"/>
import { LoginPage } from "../pages/LoginPage";
import LoginSel, { pass } from "../../selectors/LoginSel";
require('cypress-xpath');

const login = new LoginPage();
let email,password,invalidemail,invalidpassword;

describe("Login", () => {
    beforeEach(()=>{
        Cypress.on('uncaught:exception', (err, runnable) => {
            return false;
          });
    cy.visit("/login");
    cy.fixture("data").then((user) => {
       email = user["userData"].ValidEmail;
      password = user["userData"].ValidPassword;
      invalidemail = user["userData"].InvalidEmail;
      invalidpassword = user["userData"].InvalidPassword;


    });
  });
  it("Login with valid data", () => {
    login.loginUser(email,password);
    cy.xpath(LoginSel.successToLogin).should("contain.text"," Logged in as Abdelrahman Yasser Ismail")
  });
 
  it("Login with invalid data", () => {
    login.loginUser(invalidemail,invalidpassword);
    cy.xpath(LoginSel.ivalidAlertMessage).should("contain.text","Your email or password is incorrect!")
  });
});

