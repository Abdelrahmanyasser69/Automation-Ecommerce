/// <reference types="cypress" />
require("cypress-xpath");

import { CheckoutPage } from "../pages/CheckoutPage";
import { LoginPage } from "../pages/LoginPage";
import LoginSel from "../../selectors/LoginSel";
import CheckoutSel from "../../selectors/CheckoutSel";

const login = new LoginPage();
const checkout = new CheckoutPage();
let email,password,comment;
let numOfCard,cardName,CVC,expiration,YYYY;
let invalidCardName,invalidNumOfCard,invalidCVC,invalidexpiration,invalidYYYY;
describe("Checkout Test Cases", () => {
  beforeEach(() => {
    Cypress.on("uncaught:exception", (err, runnable) => {
      return false;
    });
    cy.visit("/login");
    cy.fixture("data").then((user) => {
        email = user["userData"].ValidEmail;
       password = user["userData"].ValidPassword;
       comment = user["checkOutData"].comment;
       cardName = user["paymentData"].cardName;
       numOfCard = user["paymentData"].numOfCard;
       CVC = user["paymentData"].CVC;
       expiration = user["paymentData"].expiration;
       YYYY = user["paymentData"].YYYY;
       invalidCardName = user["paymentData"].invalidCardName;
       invalidNumOfCard = user["paymentData"].invalidNumOfCard;
       invalidCVC = user["paymentData"].invalidCVC;
       invalidexpiration = user["paymentData"].invalidexpiration;
       invalidYYYY = user["paymentData"].invalidYYYY;

       login.loginUser(email,password);

     })

  });

  it("Checkout process with valid data and comment", () => {

   checkout.checkoutProcessValidData(comment,cardName,numOfCard,CVC,expiration,YYYY)
  });

  it("Checkout process with valid data and without comment", () => {

    checkout.checkoutProcessWihoutComment(cardName,numOfCard,CVC,expiration,YYYY)
   });

   it("Checkout process with more than addition product", () => {

    checkout.checkoutProcessWithMoreThanProduct(comment,cardName,numOfCard,CVC,expiration,YYYY)
   });

   it("Checkout process with invalid payment data", () => {

    checkout.checkoutProcessInvalidData(invalidCardName,invalidNumOfCard,invalidCVC,invalidexpiration,invalidYYYY)
   });
   
});

