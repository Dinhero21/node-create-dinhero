import { addDependency } from './npm.js'
import { mergePackageJson } from './package.json.js'
import { copy } from '../filesystem/file.js'
import { runner } from '../task/index.js'

mergePackageJson({
  config: {
    scripty: {
      parallel: true,
      path: 'script'
    }
  }
})

mergePackageJson({
  scripts: {
    build: 'scripty',
    'watch:build': 'scripty',
    run: 'scripty',
    'watch:run': 'scripty',
    watch: 'scripty'
  }
})

addDependency('scripty')

export const scripts = runner.create(
  async function scripts (): Promise<void> {
    await copy('script')
  }
)

export default scripts
