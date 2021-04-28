import Page from './page';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Page {
    /**
     * define selectors using getter methods
     */
    get inputUsername() {return $('#normal_login_email');}
    get inputPassword() {return $('#normal_login_password');}
    get buttonSubmit() {return $('.login-form-button');}
    get errorToast() {return $('.ant-notification-notice-with-icon');}
    get loginValidationError() {return $('//div[contains(@class, "ant-form-item-with-help")][.//input[@id="normal_login_email"]]//div[@role="alert"]');}

        open() {
        return super.open('/user/login');
    }

    login(email, password){
        this.inputUsername.setValue(email);
        this.inputPassword.setValue(password);
    }

    setLogin(email) {
        this.inputUsername.setValue(email);
    }

    setPassword(password) {
        this.inputPassword.setValue(password);
    }

    clickSubmitButton() {
        this.buttonSubmit.click()
    }

    submitButtonIsDisabled() {
        expect(this.buttonSubmit).toBeDisabled();
    }

    errorToastAppeared() {
        expect(this.errorToast).toBeDisplayed()
    }

    emptyLoginInput() {
        this.clearInput(this.inputUsername)
    }


    loginRequiredError() {
        expect(this.loginValidationError).toBeDisplayed();
        expect(this.loginValidationError.getText()).toEqual('Required');
    }


}


export default new LoginPage();
