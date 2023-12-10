import { copy } from '../filesystem/file'
import { runner } from '../task'
import { addDependency, addDevDependency } from './npm'

addDevDependency('@swc/cli')
addDevDependency('@swc/core')
addDependency('@swc/helpers')

export const swcrc = runner.create(
  async function swcrc (): Promise<void> {
    await copy('.swcrc')
  }
)

export default swcrc
