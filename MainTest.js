const {Builder, By, Key, until} = require('selenium-webdriver');
var assert = require('assert');
var TargetPage = 'https://flyingdogz.github.io';
describe('Login Page', function() {
    let driver;
    this.beforeEach(async function() {
        driver = await new Builder().forBrowser('chrome').build();
        await driver.get('https://flyingdogz.github.io');
    });
    it('LP-F1-Both', async function(){
        const usernameSelector = By.name('username');
        const passwordSelector = By.name('password');
        await driver.wait(until.elementsLocated(usernameSelector), 5000);
        await driver.findElement(usernameSelector).sendKeys('admi');
        await driver.findElement(passwordSelector).sendKeys('123', Key.RETURN);
        const error = await driver.findElement(By.className('alert-danger')).getText();
        assert.equal('Invalid credentials', error);
    });
    it('LP-F1-Username', async function(){
        const usernameSelector = By.name('username');
        const passwordSelector = By.name('password');
        await driver.wait(until.elementsLocated(usernameSelector), 5000);
        await driver.findElement(usernameSelector).sendKeys('admin');
        await driver.findElement(passwordSelector).sendKeys('123', Key.RETURN);
        const error = await driver.findElement(By.className('alert-danger')).getText();
        assert.equal('Invalid credentials', error);
    });
    it('LP-F1-Password', async function(){
        const usernameSelector = By.name('username');
        const passwordSelector = By.name('password');
        await driver.wait(until.elementsLocated(usernameSelector), 5000);
        await driver.findElement(usernameSelector).sendKeys('admin');
        await driver.findElement(passwordSelector).sendKeys('1235', Key.RETURN);
        const error = await driver.findElement(By.className('alert-danger')).getText();
        assert.equal('Invalid credentials', error);
    });
    it('LP-Forgot-Pass', async function(){
        const usernameSelector = By.name('username');
        await driver.get('https://flyingdogz.github.io');
        await driver.wait(until.elementsLocated(usernameSelector), 5000);
        await driver.findElement(usernameSelector).sendKeys('admin',Key.RETURN);
        const error = await driver.findElement(By.className('help-block')).getText();
        assert.equal('Password is required', error);
    });
    it('LP-Forgot-User', async function(){
        const passwordSelector = By.name('password');
        await driver.get('https://flyingdogz.github.io');
        await driver.wait(until.elementsLocated(passwordSelector), 5000);
        await driver.findElement(passwordSelector).sendKeys('1234',Key.RETURN);
        const error = await driver.findElement(By.className('help-block')).getText();
        assert.equal('Username is required', error);
    });
    it('LP-Forgot-Both', async function(){
        const passwordSelector = By.name('password');
        await driver.get('https://flyingdogz.github.io');
        await driver.findElement(passwordSelector).sendKeys(Key.RETURN);
        const error = await driver.findElement(By.xpath('/html/body/app-root/div/div/div/login-box/div/form/div[1]/div')).getText();
        const error2 = await driver.findElement(By.xpath('/html/body/app-root/div/div/div/login-box/div/form/div[2]/div')).getText();
        assert.equal('Username is required', error);
        assert.equal('Password is required', error2);
    });
    it('LP-P1', async function(){
        const usernameSelector = By.name('username');
        const passwordSelector = By.name('password');
        await driver.get('https://flyingdogz.github.io');
        await driver.wait(until.elementsLocated(usernameSelector), 5000);
        await driver.findElement(usernameSelector).sendKeys('admin');
        await driver.findElement(passwordSelector).sendKeys('1234', Key.RETURN);
        const error = await driver.findElement(By.xpath('/html/body/app-root/div/div/div/user-list/div[2]/h2')).getText();
        assert.equal('Add new user', error);
    });
    afterEach(async function() {
        await driver.quit();
    });
});
describe('List Page', function() {
    let driver;
    beforeEach(async function() {
        driver = await new Builder().forBrowser('chrome').build();
        const usernameSelector = By.name('username');
        const passwordSelector = By.name('password');
        await driver.get('https://flyingdogz.github.io');
        await driver.wait(until.elementsLocated(usernameSelector), 5000);
        await driver.findElement(usernameSelector).sendKeys('admin');
        await driver.findElement(passwordSelector).sendKeys('1234', Key.RETURN);
    });
    it('List-Add-P', async function(){
        const usernameSelector = By.name('newUserName');
        const passwordSelector = By.name('newUserPassword');
        await driver.wait(until.elementsLocated(usernameSelector), 5000);
        await driver.findElement(usernameSelector).sendKeys('John');
        await driver.findElement(passwordSelector).sendKeys('1234', Key.RETURN);
        await driver.wait(until.elementLocated(By.xpath('/html/body/app-root/div/div/div/user-list/div[1]/div[2]/table/tbody/tr[2]/td[1]')),5000);
        const result = await driver.findElement(By.xpath('/html/body/app-root/div/div/div/user-list/div[1]/div[2]/table/tbody/tr[2]/td[1]')).getText();
        await assert.equal('John',result);
    });
    it('List-Add-F1-Username', async function(){
        const passwordSelector = By.name('newUserPassword');
        await driver.wait(until.elementsLocated(passwordSelector), 5000);
        await driver.findElement(passwordSelector).sendKeys('1234', Key.RETURN);
        const result = await driver.findElement(By.xpath('/html/body/app-root/div/div/div/user-list/div[2]/form/div[3]/button')).isEnabled();
        await assert.notEqual(true, result);
    });
    it('List-Add-F1-Password', async function(){
        const usernameSelector = By.name('newUserName');
        await driver.wait(until.elementsLocated(usernameSelector), 5000);
        await driver.findElement(usernameSelector).sendKeys('Jonny', Key.RETURN);
        const result = await driver.findElement(By.xpath('/html/body/app-root/div/div/div/user-list/div[2]/form/div[3]/button')).isEnabled();
        await assert.notEqual(true, result);
    });
    it('List-Add-F1-Both', async function(){
        const result = await driver.findElement(By.xpath('/html/body/app-root/div/div/div/user-list/div[2]/form/div[3]/button')).isEnabled();
        await assert.notEqual(true, result);
    });
    it('List-Delete-P', async function(){
        const Deletebutton = By.xpath('/html/body/app-root/div/div/div/user-list/div[1]/div[2]/table/tbody/tr[1]/td[2]/button');
        await driver.wait(until.elementsLocated(Deletebutton), 5000);
        await driver.findElement(Deletebutton).click();
        try{
            const result = await driver.findElement(By.xpath('/html/body/app-root/div/div/div/user-list/div[1]/div[2]/table/tbody/tr[1]/td[1]')).isDisplayed();
            //it shouldn't find that elements
            return false;
        } catch {
            return true;
        }
    });
    afterEach(async function() {
        await driver.quit();
    });
});