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

  it('Should see the title of the page', () => {
    cy.get("h1")
    .contains("Turing Cafe Reservations")

  })
  
})