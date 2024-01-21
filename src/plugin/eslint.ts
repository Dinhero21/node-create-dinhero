import { addDevDependency } from './npm.js'
import { copy } from '../filesystem/file.js'
import { runner } from '../task/index.js'

addDevDependency('@typescript-eslint/eslint-plugin')
addDevDependency('@typescript-eslint/parser')
addDevDependency('eslint')
addDevDependency('eslint-config-standard-with-typescript')
addDevDependency('eslint-plugin-import')
addDevDependency('eslint-plugin-n')
addDevDependency('eslint-plugin-promise')
addDevDependency('eslint-plugin-require-extensions')

export const eslintrc = runner.create(
  async function eslintrc (): Promise<void> {
    await copy('.eslintrc.json')
  }
)

export default eslintrc
