import LoginPage from  '../pageobjects/login.page';
import ProfilePage from '../pageobjects/portal/profile.portal.page';

describe('Auth', () => {

    beforeEach(() => {
        LoginPage.open();
              browser.refresh();
    });

    afterEach(() => {
        browser.execute('window.localStorage.clear()');
    });

    it('user logs in with valid data', () => {
        //LoginPage.open();
        LoginPage.setLogin('slava.elikov@gmail.com');//process.env.LOGIN
        LoginPage.setPassword('qwerty1');//process.env.PASSWORD
        LoginPage.clickSubmitButton();
        ProfilePage.isOpen();
    });

    it('submit button is disabled if login and password are absent', () => {
        LoginPage.open();
        LoginPage.submitButtonIsDisabled();
    });

    it("fails if invalid data provided", () => {
        LoginPage.setLogin('slava.elikov@gmail.com');
        LoginPage.setPassword('123456');
        LoginPage.clickSubmitButton();
        LoginPage.errorToastAppeared();
    });

    it('login input is required', () => {
        LoginPage.setLogin('example');
        LoginPage.emptyLoginInput();
        browser.pause(3000);
        LoginPage.loginRequiredError();
    });

});


