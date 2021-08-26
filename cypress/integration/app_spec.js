/// <reference types="Cypress"/>

describe('Sign Up', function() {

  before(function(){
      cy.fixture('example').then(function (data) {
          this.data = data
      })
  })


  it('Adds person to course', function() {
    cy.visit('/')

    cy.get('input[name="name"]').type(this.data.name).should('have.value', this.data.name)

    cy.get('input[name="email"]').type(this.data.email).should('have.value',this.data.email)

    cy.get('select[name="department"]').select(this.data.department).should('have.value', this.data.department)

    cy.get('select[name="course"]').select(this.data.course).should('have.value', this.data.course)

    cy.get('input[type="submit"]')
      .click()

    cy.get('li')
      .should('contain', this.data.name+" - "+this.data.email +" - " +this.data.department+ " - "+this.data.course)
      "Bhaswanth Naredla - bhaswanth.naredla@gmail.com - core - How to npm"
  })
})