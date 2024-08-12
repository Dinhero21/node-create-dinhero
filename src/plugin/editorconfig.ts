import { copy } from '../filesystem/file.js';
import { runner } from '../task/index.js';

export const editorconfig = runner.create(
  async function editorconfig(): Promise<void> {
    await copy('.editorconfig');
  },
);

export default editorconfig;
