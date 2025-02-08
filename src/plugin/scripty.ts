import { copy } from '../filesystem/file.ts';
import { runner } from '../task/index.ts';
import { addDependency } from './npm.ts';
import { mergePackageJson } from './package.json.ts';

mergePackageJson({
  config: {
    scripty: {
      parallel: true,
      path: 'script',
    },
  },
});

mergePackageJson({
  scripts: {
    lint: 'scripty',
    run: 'scripty',
    'watch:run': 'scripty',
    watch: 'scripty',
  },
});

addDependency('scripty');

export const scripts = runner.create(async function scripts(): Promise<void> {
  await copy('script');
});

export default scripts;
