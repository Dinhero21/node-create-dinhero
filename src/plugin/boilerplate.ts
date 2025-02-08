import fs from 'fs/promises';

import { toCurrent } from '../filesystem/path.ts';
import { runner } from '../task/index.ts';

export const boilerplate = runner.create(
  async function boilerplate(): Promise<void> {
    await fs.mkdir(toCurrent('src'), {
      recursive: true,
    });

    await fs.writeFile(
      toCurrent('src/index.ts'),
      "console.log('Hello World!')\n",
    );
  },
);

export default boilerplate;
