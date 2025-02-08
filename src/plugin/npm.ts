import { runner } from '../task/index.ts';
import { run } from '../util/command.ts';
import generatePackageJson from './package.json.ts';

const DEPENDENCIES = new Set<string>();
const DEV_DEPENDENCIES = new Set<string>();

export function addDependency(dependency: string): void {
  DEPENDENCIES.add(dependency);
}

export function addDevDependency(dependency: string): void {
  DEV_DEPENDENCIES.add(dependency);
}

export const install = runner.create(async function install(): Promise<void> {
  await run(
    `npm install --save ${Array.from(DEPENDENCIES).join(' ')}`,
    'npm install',
  );

  await run(
    `npm install --save-dev ${Array.from(DEV_DEPENDENCIES).join(' ')}`,
    'npm install (dev)',
  );
});

export default install;

install.after(generatePackageJson);
