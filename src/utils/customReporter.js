/* eslint-disable no-console */
export default class MyReporter {
  onTestEnd (test, result) {
    console.log(`\nTest: ${test.title}\n`)

    if (result.steps && result.steps.length > 0) {
      result.steps.map((step, index) => {
        const statusIcon = step.error ? '❌' : '✔️'

        // Определяем отступы для первого и последнего шагов
        const prefix = index === result.steps.length - 1 || (result.status !== 'passed' && index === result.steps.length - 2) ? '\n' : ''
        const suffix = index === 0 ? '\n' : ''

        console.log(`${prefix}    Step ${index + 1}: ${step.title} - ${step.duration}ms ${statusIcon}${suffix}`)
      })
    }

    console.log(`\nStatus: ${result.status}\n`)
  }
}
