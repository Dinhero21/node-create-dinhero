import { importStar } from './util/import-star.js'
import { runner } from './task/index.js'
import { dirname, resolve } from 'path'
import { fileURLToPath } from 'url'

// swc pollutes __filename and __dirname for whatever reason
// so we have to rely on globalThis.require to detect if esm
// or cjs

if (!('require' in globalThis)) {
  globalThis.__filename = fileURLToPath(import.meta.url)
  globalThis.__dirname = dirname(globalThis.__filename)
}

async function importAllPlugins (): Promise<void> {
  await importStar(resolve(__dirname, 'plugin'))
}

console.time('bootstrap')

await importAllPlugins()

console.timeEnd('bootstrap')

console.time('run')

await runner.run()

console.timeEnd('run')
