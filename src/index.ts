#!/usr/bin/env -S node --experimental-strip-types

import { resolve } from 'path';

import { runner } from './task/index.ts';
import { importStar } from './util/import-star.ts';

async function importAllPlugins(): Promise<void> {
  await importStar(resolve(import.meta.dirname, 'plugin'));
}

console.time('bootstrap');

await importAllPlugins();

console.timeEnd('bootstrap');

console.time('run');

await runner.run();

console.timeEnd('run');
