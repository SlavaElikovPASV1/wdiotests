import ChallengePage from '../pageobjects/challenge.page'
import RegisterPage from '../pageobjects/user/register.page'

xdescribe('User should Register', () => {
    
    beforeEach(() => {
        ChallengePage.open();
        browser.refresh();
    });
    
    afterEach(() => {
        browser.execute('window.localStorage.clear()');
    });
    
    
    xit('user should redirect to next page', async () => {
        await ChallengePage.clickLoginFormButton();
        await RegisterPage.isHeaderDisplayed();
        await RegisterPage.clickOnLoginLink();
        await browser.pause(5000)
    });
    
    xit('Fill out all required field to be  Register', async () => {
        browser.url('https://localcoding.us/user/register')
        await RegisterPage.setFirstName('test');
        await RegisterPage.setLastName('test');
        await RegisterPage.setPhone('11111111111');
        await RegisterPage.setEmail('test@gmail.com');
        await RegisterPage.setPassword('test@gmail.com');
        await RegisterPage.clickTermsCheckMark();
        await RegisterPage.clickRegisterBtn();
        //await NextPageRedirected.toHaveTittle();
        //country choosen
    });
});
