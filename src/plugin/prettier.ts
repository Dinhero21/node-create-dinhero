import { copy } from '../filesystem/file.ts';
import { runner } from '../task/index.ts';
import { addDevDependency } from './npm.ts';

addDevDependency('prettier');

export const prettierConfig = runner.create(
  async function prettierConfig(): Promise<void> {
    await copy('.prettierrc');
  },
);

export default prettierConfig;
