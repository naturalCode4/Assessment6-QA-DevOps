
import { Builder, Capabilities, By } from "selenium-webdriver"

require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeEach(async () => {
    driver.get('http://localhost:3000/')
})

afterAll(async () => {
    driver.quit()
})

test('Title shows up when page loads', async () => {
    const title = await driver.findElement(By.id('title'))
    const displayed = await title.isDisplayed()
    expect(displayed).toBe(true)
})

test('Add to Duo button opens a new div with id="player duo"', async () => {
    await driver.findElement(By.id("draw")).click()
    await driver.findElement(By.xpath("//section/div/div[1]/button")).click() 
    const playerDuo = await driver.findElement(By.id("player-duo"))
    const displayed = await playerDuo.isDisplayed()
    expect(displayed).toBe(true)
})

test('On attempt to add third bot to duo, the number of bots remains at two', async () => {
    await driver.findElement(By.id("draw")).click()
    for (let i=0; i<3; i++) {
    await driver.findElement(By.xpath("//section/div/div[1]/button")).click()
    }
    // here may need to click on alert dismiss button. im not sure if its necessary, and if so how to click
    const thirdBot = await driver.findElement(By.xpath("//*[@id='player-duo']/div[3]"))
    const displayed = await thirdBot.isDisplayed()
    expect(displayed).toBe(false)
    })
