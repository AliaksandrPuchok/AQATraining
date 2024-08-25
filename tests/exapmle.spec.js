import { test, expect } from '@playwright/test'
import MainPage from '../src/pageobjects/main.page'
import BaseMethods from '../src/utils/baseMethods'

let mainPage
let baseMethods

test.beforeEach(async ({ page }) => {
  mainPage = new MainPage(page)

  baseMethods= new BaseMethods(page)
})

test('Демонстрация связи классов', async () => {

  await test.step('Переход на главную страницу', async () => {
    await mainPage.goMainPage()
  })
    
  await test.step('Проверка правильности заголовка', async () => {
    const mainPageTitle = await baseMethods.getPageTitle()
    expect(mainPageTitle).toBe('DEMOQA')
  })

  await test.step('Демонстрация вызова функции ожидания', async () => {
    await baseMethods.waitForTimeout(1000)
  })

  await test.step('Демонстрация вызова функции дебагера', async () => {
    // Раскомментить строку снизу чтобы увидеть
    // await baseMethods.pause()
  })
})

test.fail('Демонстрация падения степа', async () => {

  await test.step('Тут проходит', async () => {
    expect(true).toBe(true)
  })

  await test.step('Тут проходит', async () => {
    expect(true).toBe(true)
  })

  await test.step('Мокаем падение степа', async () => {
    expect(true).toBe(false)
  })
})

test('Демонстрация падения теста', async () => {

  await test.step('Тут проходит', async () => {
    expect(true).toBe(true)
  })

  await test.step('Тут проходит', async () => {
    expect(true).toBe(true)
  })

  await test.step('Мокаем падение теста', async () => {
    // Раскомментить строку снизу чтобы увидеть
    // expect(true).toBe(false)
  })
})
