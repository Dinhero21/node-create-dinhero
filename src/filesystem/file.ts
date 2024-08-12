import fs from 'fs/promises';
import { resolve } from 'path';

import { toCurrent, toProject } from './path.js';

export async function* getAllFiles(dir: string): AsyncIterable<string> {
  const entries = await fs.readdir(dir, { withFileTypes: true });

  for (const entry of entries) {
    const res = resolve(dir, entry.name);

    if (entry.isDirectory()) {
      yield* getAllFiles(res);
    } else {
      yield res;
    }
  }
}

export async function copy(path: string): Promise<void> {
  await fs.cp(toProject(path), toCurrent(path), {
    recursive: true,
  });
}
