import MainPage from '../pageobjects/portal/main.portal.page';
import CoursesPage from '../pageobjects/portal/courses.portal.page';

describe('Navigation', () => {
    before(() => {
        browser.login('mevibe8861@leonvero.com', '690844');
    });

    beforeEach(() => {
        browser.pause(3000);
        MainPage.open();
    })

    xit('courses page opens', () => {

       // browser.pause(3000);
        MainPage.goToCourses();
        browser.pause(3000);
        CoursesPage.isOpen();
    })
});

