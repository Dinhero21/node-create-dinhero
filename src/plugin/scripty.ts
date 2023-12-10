import { copy } from '../filesystem/file'
import { runner } from '../task'
import { addDependency } from './npm'
import { mergePackageJson } from './package.json'

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
