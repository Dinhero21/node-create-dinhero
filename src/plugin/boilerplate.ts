import fs from 'fs/promises'
import { runner } from '../task/index.js'
import { toCurrent } from '../filesystem/path.js'

export const boilerplate = runner.create(
  async function boilerplate (): Promise<void> {
    await fs.mkdir(
      toCurrent('src'),
      {
        recursive: true
      }
    )

    await fs.writeFile(
      toCurrent('src/index.ts'),
      'console.log(\'Hello World!\')'
    )
  }
)

export default boilerplate
