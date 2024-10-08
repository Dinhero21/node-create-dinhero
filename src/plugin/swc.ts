import { copy } from '../filesystem/file.js';
import { runner } from '../task/index.js';
import { addDependency, addDevDependency } from './npm.js';

addDevDependency('@swc/cli');
addDevDependency('@swc/core');
addDependency('@swc/helpers');

export const swcrc = runner.create(async function swcrc(): Promise<void> {
  await copy('.swcrc');
});

export default swcrc;
