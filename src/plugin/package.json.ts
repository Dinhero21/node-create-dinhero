import fs from 'fs/promises'
import { runner } from '../task'
import { run } from '../util/command'
import _ from 'lodash'

const PACKAGE_JSON_MERGE = {}

export function mergePackageJson (data: Record<string, any>): void {
  _.merge(PACKAGE_JSON_MERGE, data)
}

export const generatePackageJson = runner.create(
  async function generatePackageJson (): Promise<void> {
    await run('npm init -y', 'npm init')

    const oldRawPackageJson = await fs.readFile('package.json', 'utf8')
    const packageJson = JSON.parse(oldRawPackageJson)

    _.merge(packageJson, PACKAGE_JSON_MERGE)

    const newRawPackageJson = JSON.stringify(packageJson)
    await fs.writeFile('package.json', newRawPackageJson)
  }
)

export default generatePackageJson
