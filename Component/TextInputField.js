module.export = {
    testTextInput: function(userInput,inputField){
        const Selector = By.name(inputField);
        await driver.wait(until.elementsLocated(Selector), 5000);
        await driver.findElement(Selector).sendKeys(userInput);
    }
}

// it('LP-F1-Both', async function(){
//     try{
//     const usernameSelector = By.name('username');
//     const passwordSelector = By.name('password');
//     await driver.wait(until.elementsLocated(usernameSelector), 5000);
//     await driver.findElement(usernameSelector).sendKeys('admi');
//     await driver.findElement(passwordSelector).sendKeys('123', Key.RETURN);
//     const error = await driver.findElement(By.className('alert-danger')).getText();
//     assert.equal('Invalid credentials', error);
//     done(err);
//     }
//         finally {
//             done();
//     }
// });


// it('LP-F1-Username', async function(){
//     const usernameSelector = By.name('username');
//     const passwordSelector = By.name('password');
//     await driver.wait(until.elementsLocated(usernameSelector), 5000);
//     await driver.findElement(usernameSelector).sendKeys('admi');
//     await driver.findElement(passwordSelector).sendKeys('1234', Key.RETURN);
//     const error = await driver.findElement(By.className('alert-danger')).getText();
//     assert.equal('Invalid credentials', error);
//     done();
// });

// it('LP-F1-Password', async function(){
//     const usernameSelector = By.name('username');
//     const passwordSelector = By.name('password');
//     await driver.wait(until.elementsLocated(usernameSelector), 5000);
//     await driver.findElement(usernameSelector).sendKeys('admin');
//     await driver.findElement(passwordSelector).sendKeys('1235', Key.RETURN);
//     const error = await driver.findElement(By.className('alert-danger')).getText();
//     assert.equal('Invalid credentials', error);
//     done();
// });

// it('LP-Forgot-Pass', async function(){
//     const usernameSelector = By.name('username');
//     await driver.wait(until.elementsLocated(usernameSelector), 5000);
//     await driver.findElement(usernameSelector).sendKeys('admin',Key.RETURN);
//     const error = await driver.findElement(By.className('alert-danger')).getText();
//     assert.equal('Password is required', error);
//     done();
// });

// it('LP-Forgot-User', async function(){
//     const passwordSelector = By.name('password');
//     await driver.wait(until.elementsLocated(passwordSelector), 5000);
//     await driver.findElement(passwordSelector).sendKeys('1235', Key.RETURN);
//     const error = await driver.findElement(By.className('alert-danger')).getText();
//     assert.equal('Password is required', error);
//     done();
// });