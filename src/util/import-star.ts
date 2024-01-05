import { getAllFiles } from '../filesystem/file.js'

export async function importStar (directory: string): Promise<void> {
  for await (const file of getAllFiles(directory)) {
    await import(file)
  }
}
