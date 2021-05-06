import Page from './page';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Page {
    /**
     * define selectors using getter methods
     */
    get inputUsername() {
        return $('#normal_login_email');
    }

    get inputPassword() {
        return $('#normal_login_password');
    }

    get buttonSubmit() {
        return $('.login-form-button');
    }

    get errorToast() {
        return $('.ant-notification-notice-with-icon');
    }

    get loginValidationError() {
        return $('//div[contains(@class, "ant-form-item-with-help")][.//input[@id="normal_login_email"]]//div[@role="alert"]');
    }

    open() {
        return super.open('/user/login');
    }

    login(email, password) {
        this.inputUsername.setValue(email);
        this.inputPassword.setValue(password);
    }

    async setLogin(email) {
        return (await this.inputUsername).setValue(email);
    }

    async setPassword(password) {
        return (await this.inputPassword).setValue(password);
    }

    async clickSubmitButton() {
        return (await this.buttonSubmit).click()
    }

    async submitButtonIsDisabled() {
      return  expect(this.buttonSubmit).toBeDisabled();
    }

    async errorToastAppeared() {
       return expect(this.errorToast).toBeDisplayed()
    }

    async emptyLoginInput() {
        return this.clearInput(await this.inputUsername)
    }


    async loginRequiredError() {
        expect(this.loginValidationError).toBeDisplayed();
        expect(this.loginValidationError).toHaveText('Required');
    }


}


export default new LoginPage();
