import { importStar } from './util/import-star'
import { dirname, resolve } from 'path'
import { fileURLToPath } from 'url'
import { runner } from './task'

if (!('__filename' in globalThis)) {
  globalThis.__filename = fileURLToPath(import.meta.url)
}

if (!('__dirname' in globalThis)) {
  globalThis.__dirname = dirname(globalThis.__filename)
}
async function importAllPlugins (): Promise<void> {
  await importStar(resolve(__dirname, 'plugin'))
}

async function main (): Promise<void> {
  console.time('bootstrap')

  await importAllPlugins()

  console.timeEnd('bootstrap')

  console.time('run')

  await runner.run()

  console.timeEnd('run')
}

void main()
