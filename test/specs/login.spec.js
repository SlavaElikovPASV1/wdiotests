import LoginPage from '../pageobjects/login.page';
import ProfilePage from '../pageobjects/portal/profile.portal.page';

describe('Auth', () => {

    beforeEach(() => {
        LoginPage.open();
        browser.refresh();
    });

    afterEach(() => {
        browser.execute('window.localStorage.clear()');
    });

    it('user logs in with valid data', async () => {
        await LoginPage.open();
        await LoginPage.setLogin('slava.elikov@gmail.com');//process.env.LOGIN
        await LoginPage.setPassword('qwerty1');//process.env.PASSWORD
        await LoginPage.clickSubmitButton();
        await ProfilePage.isOpen();
    });

    it('submit button is disabled if login and password are absent', async () => {
        await LoginPage.open();
        await LoginPage.submitButtonIsDisabled();
    });

    it("fails if invalid data provided", async () => {
        await LoginPage.setLogin('slava.elikov@gmail.com');
        await LoginPage.setPassword('123456');
        await LoginPage.clickSubmitButton();
        await LoginPage.errorToastAppeared();
    });

    it('login input is required', async () => {
        await LoginPage.setLogin('example');
        //await browser.pause(3000);
        await LoginPage.loginRequiredError();
    });

});


