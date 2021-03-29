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

    xit('user logs in with valid data', () => {
        LoginPage.open();
        LoginPage.setLogin('slava.elikov@gmail.com');
        LoginPage.setPassword('qwerty1');
        LoginPage.clickSubmitButton();
        ProfilePage.isOpen();
    });

    xit('submit button is disabled if login and password are absent', () => {
        LoginPage.open();
        LoginPage.submitButtonIsDisabled();
    });

    xit("fails if invalid data provided", () => {
        LoginPage.setLogin('slava.elikov@gmail.com');
        LoginPage.setPassword('123456');
        LoginPage.clickSubmitButton();
        LoginPage.errorToastAppeared();
    });

    xit('login input is required', () => {
        LoginPage.setLogin('example');
        LoginPage.emptyLoginInput();
        browser.pause(3000);
        LoginPage.loginRequiredError();
    });

});


