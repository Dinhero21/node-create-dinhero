import { copy } from '../filesystem/file.ts';
import { runner } from '../task/index.ts';
import { addDevDependency } from './npm.ts';

addDevDependency('typescript');
addDevDependency('@types/node');

export const tsconfig = runner.create(async function tsconfig(): Promise<void> {
  await copy('tsconfig.json');
});

export default tsconfig;
