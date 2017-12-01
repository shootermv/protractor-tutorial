import { browser, by, element } from 'protractor';

export class ProtectedPage {
  navigateTo() {
    return browser.get('/protected');
  }

  getPageTitleText() {
    return element(by.css('app-root h1')).getText();
  }
}
