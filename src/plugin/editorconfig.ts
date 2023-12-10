import { copy } from '../filesystem/file'
import { runner } from '../task'

export const editorconfig = runner.create(
  async function editorconfig (): Promise<void> {
    await copy('.editorconfig')
  }
)

export default editorconfig
