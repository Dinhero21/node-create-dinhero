import { copy } from '../filesystem/file'
import { runner } from '../task'
import { addDevDependency } from './npm'

addDevDependency('@typescript-eslint/eslint-plugin')
addDevDependency('@typescript-eslint/parser')
addDevDependency('eslint')
addDevDependency('eslint-config-standard-with-typescript')
addDevDependency('eslint-plugin-import')
addDevDependency('eslint-plugin-n')
addDevDependency('eslint-plugin-promise')

export const eslintrc = runner.create(
  async function eslintrc (): Promise<void> {
    await copy('.eslintrc.json')
  }
)

export default eslintrc
