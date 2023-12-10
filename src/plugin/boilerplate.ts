import fs from 'fs/promises'
import { runner } from '../task'
import { toCurrent } from '../filesystem/path'

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
