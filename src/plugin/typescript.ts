import { copy } from '../filesystem/file'
import { runner } from '../task'
import { addDevDependency } from './npm'

addDevDependency('typescript')
// ? Should I
addDevDependency('@types/node')

export const tsconfig = runner.create(
  async function tsconfig (): Promise<void> {
    await copy('tsconfig.json')
  }
)

export default tsconfig
