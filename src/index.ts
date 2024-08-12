#!/usr/bin/env node

import { resolve } from 'path';

import { runner } from './task/index.js';
import { importStar } from './util/import-star.js';

async function importAllPlugins(): Promise<void> {
  await importStar(resolve(import.meta.dirname, 'plugin'));
}

console.time('bootstrap');

await importAllPlugins();

console.timeEnd('bootstrap');

console.time('run');

await runner.run();

console.timeEnd('run');
