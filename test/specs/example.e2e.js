import LoginPage from  '../pageobjects/login.page';
import ProfilePage from  '../pageobjects/profile.page';


describe('Auth', () => {
    it('user logs in with valid data', () => {
        LoginPage.open();
        LoginPage.setLogin('slava.elikov@gmail.com');
        LoginPage.setPassword('qwerty1');
        LoginPage.clickSubmitButton();
        ProfilePage.isOpen();

    });
});


