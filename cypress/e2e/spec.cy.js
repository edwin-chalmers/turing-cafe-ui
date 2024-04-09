describe('empty spec', () => {
  beforeEach(() => {
    cy.intercept("GET", "http://localhost:3001/api/v1/reservations", {
      statusCode: 200,
	    body: [
        {
          "id": 1,
          "name": "Christie",
          "date": "12/29",
          "time": "7:00",
          "number": 12
        },
        {
          "id": 2,
          "name": "Leta",
          "date": "4/5",
          "time": "7:00",
          "number": 2
        },
        {
          "id": 3,
          "name": "Pam",
          "date": "1/21",
          "time": "6:00",
          "number": 4
        }
      ]
    }).as('fetchData')

   .visit('http://localhost:3000')
  })

  it('Should see the elements of the page', () => {
    cy.get("h1")
    .contains("Turing Cafe Reservations")
    cy.get("form")
    cy.get(".Reservations")
    cy.get(".Card")
    
  })

  it('Should check that when data is put into the form, the value is reflected in that form input', () => {
    cy.get("form")
    cy.get("[name='name']").type("Thom")
    .get("[name='name']").should('have.value', "Thom")
    cy.get("[name='date']").type("12/12")
    .get("[name='date']").should('have.value', "12/12")
    cy.get("[name='time']").type("5:24")
    .get("[name='time']").should('have.value', "5:24")
    cy.get("[name='number']").type("4")
    .get("[name='number']").should('have.value', "4")

  })

  it('Should be able to submit a reservation', () => {
    cy.get("form")
    .get("[name='name']").type("Thom")
    .get("[name='date']").type("12/12")
    .get("[name='time']").type("5:24")
    .get("[name='number']").type("4")
    .get('.make-reservation').click()
    cy.get(".Reservations").children().last().contains("Thom")
    cy.get(".Reservations").children().last().contains("12/12")
    cy.get(".Reservations").children().last().contains("5:24")
    cy.get(".Reservations").children().last().contains("Number of guests: 4")
  })
  
})