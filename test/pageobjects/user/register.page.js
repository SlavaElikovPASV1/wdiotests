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
    
    get inputFirstName() {
        return $('#user_login_firstName');
    }
    
    get inputLastName() {
        return $('#user_login_lastName');
    }
    
    get inputCountry() {
        return $('.ant-select-selection-item');
    }
    
    get inputCellphone() {
        return $('#user_login_phone');
    }
    
    get  inputEmail() {
        return $('#user_login_email');
    }
    
    getinPutpassword() {
        return $('#user_login_password');
    }
    
    get termsCheckMark() {
        return $('#user_login_agreement');
    }
    
    get termsLink() {
        return $('ant-btn ant-btn-link ant-btn-sm pl-1');
    }
    
    // ? selector
    get registerBtn() {
        return $('.ant-btn ant-btn-primary ant-btn-lg');
    }
    
    get loginLink() {
        return $('#user_login > div:nth-child(9) > div > div > div > p > a');
    }
    
    register(firstName, lastname, phone, email, password) {
        this.inputFirstName.setValue(firstName);
        this.inputLastName.setValue(lastname);
        this.inputCellphone.setValue(phone);
        this.inputEmail.setValue(email);
        this.inputPassword.setValue(password);
    }
    
    async setFirstName(firstName) {
        return (await this.inputFirstName).setValue(firstName);
    }
    
    async setLastName(lastName) {
        return (await this.inputLastName).setValue(lastName);
    }
    
    async setPhone(phone) {
        return (await this.inputCellphone).setValue(phone);
    }
    
    async setEmail(email) {
        return (await this.inputEmail).setValue(email);
    }
    
    async setPassword(password) {
        return (await this.inputPassword).setValue(password);
    }
    
    async clickTermsCheckMark() {
        return (await this.termsCheckMark).click()
    }
    
    async clickRegisterBtn() {
        return (await this.registerBtn).click()
    }
    
    
    async isHeaderDisplayed() {
        return (await this.header).isDisplayed()
    }
    
    async clickOnLoginLink() {
        return (await this.loginLink).click()
    }
  
    
    
}


export default new Register();
