import { copy } from '../filesystem/file.js';
import { runner } from '../task/index.js';
import { addDevDependency } from './npm.js';

addDevDependency('@eslint/js');
addDevDependency('eslint');
addDevDependency('eslint-config-prettier');
addDevDependency('eslint-plugin-simple-import-sort');
addDevDependency('typescript-eslint');
addDevDependency('globals');

export const eslintConfig = runner.create(
  async function eslintConfig(): Promise<void> {
    await copy('eslint.config.mjs');
  },
);

export default eslintConfig;
