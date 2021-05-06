import Page from './page';

class Challenge extends Page {
    /**
     * define selectors using getter methods
     */
    open() {
        return super.open('/challenge')
    }
    get loginFormButton() {
        return $('.login-form-button');
    }
    async clickLoginFormButton() {
        return (await this.loginFormButton).click()
    }

    
}


export default new Challenge();
