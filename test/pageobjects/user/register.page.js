import Page from '../page';

class Register extends Page {
    /**
     * define selectors using getter methods
     */
    open() {
        return super.open('/user/register')
    }
    
    get header() {
        return $('h1');
    }
    
    get loginLink() {
        return $('=Log in')
    }
    
    async isHeaderDisplayed() {
        return (await this.header).isDisplayed()
    }
    
    async clickOnLoginLink() {
        return (await this.loginLink).click()
    }
    
    
}


export default new Register();
