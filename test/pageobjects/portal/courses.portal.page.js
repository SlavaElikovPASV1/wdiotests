import PortalPage from "./portal.page";
import LoginPage from "../login.page";
import ProfilePage from "../profile.page"

class CoursesPage extends PortalPage {

    get sectionHeader () { return $('section > div > h1'); }

    open() {
        return super.open('/course');
    }
    
    openAuthUser() {
         LoginPage.open();
         LoginPage.login('slava.elikov@gmail.com', 'qwerty1');
         LoginPage.clickSubmitButton();
         ProfilePage.goToCourses();
    }

    isOpen() {
        expect(browser).toHaveUrlContaining('/course');
        expect(this.sectionHeader).toHaveText('Interactive Courses');
    }
}

export default new CoursesPage();
