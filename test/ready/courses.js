import CoursesPage from '../pageobjects/portal/courses.portal.page';

xdescribe('Auth', () => {
    
    beforeEach(() => {
        CoursesPage.openAuthUser();
        browser.refresh();
    });
    
    afterEach(() => {
        browser.execute('window.localStorage.clear()');
    });
    
    it('user logs in with valid data', async () => {
    
    });
    });
