import { copy } from '../filesystem/file.js';
import { runner } from '../task/index.js';
import { addDevDependency } from './npm.js';

addDevDependency('prettier');

export const prettierConfig = runner.create(
  async function prettierConfig(): Promise<void> {
    await copy('.prettierrc');
  },
);

export default prettierConfig;
