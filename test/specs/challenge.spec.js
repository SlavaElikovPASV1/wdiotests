import ChallengePage from '../pageobjects/challenge.page'
import RegisterPage from '../pageobjects/user/register.page'

describe('Auth with no login on  challenge page ', () => {
    
    beforeEach(() => {
        ChallengePage.open();
        browser.refresh();
    });
    
    afterEach(() => {
        browser.execute('window.localStorage.clear()');
    });
    
    it('user logs in with valid data with no login', async () => {
        await ChallengePage.clickLoginFormButton();
        await RegisterPage.isHeaderDisplayed();
        await RegisterPage.clickOnLoginLink();
    });
});
