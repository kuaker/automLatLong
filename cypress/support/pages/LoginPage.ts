const LOGIN_TITLE = 'h3'
const LOGIN_EMAIL_INPUT = 'email'
const LOGIN_PASSWORD_INPUT = 'password1'

export class LoginPage {

    getUserLoginTitle = () => cy.get(LOGIN_TITLE)

    getEmailInput = () => cy.getByName(LOGIN_EMAIL_INPUT)

    getPasswordInput = () => cy.getByName(LOGIN_PASSWORD_INPUT)

    getLoginButton = () => cy.contains('button', 'Login')

    clickOnLoginButton = () => this.getLoginButton().click()

    getErrorMessage = () => cy.get('div[class="message error"]')

}

export default new LoginPage()
