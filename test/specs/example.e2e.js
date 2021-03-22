import LoginPage from  '../pageobjects/login.page';
import ProfilePage from  '../pageobjects/profile.page';


describe('Auth', () => {
    beforeEach(() => {
        LoginPage.open();

    });

    it('submit button is disabled if login and password are absent',() => {
        //LoginPage.open();
        LoginPage.submitButtonIsDisabled();
    });

    it('fails if invalid data provided',() => {
        LoginPage.setLogin('example@example.com');
        LoginPage.setPassword('qwerty2');
        LoginPage.clickSubmitButton();
        LoginPage.errorToastAppeared();
    });

    it('user logs in with valid data', () => {
        LoginPage.setLogin('slava.elikov@gmail.com');
        LoginPage.setPassword('qwerty1');
        LoginPage.clickSubmitButton();
        ProfilePage.isOpen();

    });




    //afterEach(() => {
    //    browser.execute('window.LocalStorage.clear()');
    //});
});


