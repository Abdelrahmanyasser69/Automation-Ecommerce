/// <reference types="cypress" />
require('cypress-xpath');

import CheckoutSel from '../../selectors/CheckoutSel';

export class CheckoutPage{
openProductsPage(){
    cy.xpath(CheckoutSel.productsHome).click();
}

addToCartBtnFirst(){
    cy.xpath(CheckoutSel.addToCartBtnFirst).click();
}
continueShoppingBtn(){
    cy.xpath(CheckoutSel.continueShoppingBtn).click();
}
addToCartBtnSecond(){
    cy.xpath(CheckoutSel.addToCartBtnSecond).click({ force: true });
}
viewCart(){
    cy.xpath(CheckoutSel.viewCart).click();
}
proceedToCheckout(){
    cy.xpath(CheckoutSel.proceedBtn).click();
}
addComment(comment){
    cy.xpath(CheckoutSel.addComment).type(comment);
}
placeOrder(){
    cy.xpath(CheckoutSel.placeOrderBtn).click();
}
enterNameCard(cardName){
    cy.xpath(CheckoutSel.nameOnCard).type(cardName);
}
enterCardNum(CardNUM){
    cy.xpath(CheckoutSel.cardNumber).type(CardNUM);
}
enterCVCnum(CVC){
    cy.xpath(CheckoutSel.CVC).type(CVC);

}
enterExpiration(exp){
    cy.xpath(CheckoutSel.expiration).type(exp);

}
enterYYYYnum(YYYY){
    cy.xpath(CheckoutSel.YYYY).type(YYYY);

}
confirmOrder(){
    cy.xpath(CheckoutSel.confirmOrderBtn).click();

}

checkoutProcessValidData(comment,cardName,CardNUM,CVC,exp,YYYY){
    this.openProductsPage();
    this.addToCartBtnFirst();
    cy.xpath(CheckoutSel.SuccessfullAddCart).should("contain.text","Your product has been added to cart.")
    this.viewCart();
    this.proceedToCheckout();
    cy.xpath(CheckoutSel.addressDetails).should("contain.text","Address Details")
    cy.xpath(CheckoutSel.YourDeliveryAddress).should("contain.text","Your delivery address")
    cy.xpath(CheckoutSel.YourBillingAddress).should("contain.text","Your billing address")
    this.addComment(comment);
    this.placeOrder();
    cy.xpath(CheckoutSel.payment).should("contain.text","Payment")
    this.enterNameCard(cardName);
    this.enterCardNum(CardNUM); 
    this.enterCVCnum(CVC);
    this.enterExpiration(exp);
    this.enterYYYYnum(YYYY);
    this.confirmOrder();
    cy.xpath(CheckoutSel.congratulationsMsg).should("contain.text","Congratulations! Your order has been confirmed!")
}

checkoutProcessWihoutComment(cardName,CardNUM,CVC,exp,YYYY){
    this.openProductsPage();
    this.addToCartBtnFirst();
    cy.xpath(CheckoutSel.SuccessfullAddCart).should("contain.text","Your product has been added to cart.")
    this.viewCart();
    this.proceedToCheckout();
    cy.xpath(CheckoutSel.addressDetails).should("contain.text","Address Details")
    cy.xpath(CheckoutSel.YourDeliveryAddress).should("contain.text","Your delivery address")
    cy.xpath(CheckoutSel.YourBillingAddress).should("contain.text","Your billing address")
    this.placeOrder();
    cy.xpath(CheckoutSel.payment).should("contain.text","Payment")
    this.enterNameCard(cardName);
    this.enterCardNum(CardNUM); 
    this.enterCVCnum(CVC);
    this.enterExpiration(exp);
    this.enterYYYYnum(YYYY);
    this.confirmOrder();
    cy.xpath(CheckoutSel.congratulationsMsg).should("contain.text","Congratulations! Your order has been confirmed!")
}

checkoutProcessInvalidData(cardName,CardNUM,CVC,exp,YYYY){
    this.openProductsPage();
    this.addToCartBtnFirst();
    cy.xpath(CheckoutSel.SuccessfullAddCart).should("contain.text","Your product has been added to cart.")
    this.viewCart();
    this.proceedToCheckout();
    cy.xpath(CheckoutSel.addressDetails).should("contain.text","Address Details")
    cy.xpath(CheckoutSel.YourDeliveryAddress).should("contain.text","Your delivery address")
    cy.xpath(CheckoutSel.YourBillingAddress).should("contain.text","Your billing address")
    this.placeOrder();
    cy.xpath(CheckoutSel.payment).should("contain.text","Payment")
    this.enterNameCard(cardName);
    this.enterCardNum(CardNUM); 
    this.enterCVCnum(CVC);
    this.enterExpiration(exp);
    this.enterYYYYnum(YYYY);
    this.confirmOrder();
    cy.xpath("//nonexistent-element").should("contain.text", "Please enter valid data");

}

checkoutProcessWithMoreThanProduct(comment,cardName,CardNUM,CVC,exp,YYYY){
    this.openProductsPage();
    this.addToCartBtnFirst();
    cy.xpath(CheckoutSel.SuccessfullAddCart).should("contain.text","Your product has been added to cart.")
    this.continueShoppingBtn();
    this.addToCartBtnSecond();
    cy.xpath(CheckoutSel.SuccessfullAddCart).should("contain.text","Your product has been added to cart.")
    this.viewCart();
    this.proceedToCheckout();
    cy.xpath(CheckoutSel.addressDetails).should("contain.text","Address Details")
    cy.xpath(CheckoutSel.YourDeliveryAddress).should("contain.text","Your delivery address")
    cy.xpath(CheckoutSel.YourBillingAddress).should("contain.text","Your billing address")
    this.addComment(comment);
    this.placeOrder();
    cy.xpath(CheckoutSel.payment).should("contain.text","Payment")
    this.enterNameCard(cardName);
    this.enterCardNum(CardNUM); 
    this.enterCVCnum(CVC);
    this.enterExpiration(exp);
    this.enterYYYYnum(YYYY);
    this.confirmOrder();
    cy.xpath(CheckoutSel.congratulationsMsg).should("contain.text","Congratulations! Your order has been confirmed!")
}
}

