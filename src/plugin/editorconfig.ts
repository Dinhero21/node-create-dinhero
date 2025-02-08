import { copy } from '../filesystem/file.ts';
import { runner } from '../task/index.ts';

export const editorconfig = runner.create(
  async function editorconfig(): Promise<void> {
    await copy('.editorconfig');
  },
);

export default editorconfig;
