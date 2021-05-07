import LoginPage from "../pageobjects/login.page";
import ProfilePage from "../pageobjects/profile.page";

describe('Auth', () => {
    
    beforeEach(() => {
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
        await ProfilePage.goToCourses();
    });
});
