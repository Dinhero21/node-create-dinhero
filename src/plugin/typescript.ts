import { addDevDependency } from './npm.js'
import { copy } from '../filesystem/file.js'
import { runner } from '../task/index.js'

addDevDependency('typescript')
// ? Should I
addDevDependency('@types/node')

export const tsconfig = runner.create(
  async function tsconfig (): Promise<void> {
    await copy('tsconfig.json')
  }
)

export default tsconfig
