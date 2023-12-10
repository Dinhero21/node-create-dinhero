/* eslint-disable @typescript-eslint/naming-convention */

import { dirname, resolve } from 'path'
import { fileURLToPath } from 'url'

if (!('__filename' in globalThis)) {
  globalThis.__filename = fileURLToPath(import.meta.url)
}

if (!('__dirname' in globalThis)) {
  globalThis.__dirname = dirname(globalThis.__filename)
}

export const PROJECT_ROOT = dirname(dirname(__dirname))

export const CURRENT_ROOT = process.cwd()

export function toProject (path: string): string {
  return resolve(PROJECT_ROOT, path)
}

export function toCurrent (path: string): string {
  return resolve(CURRENT_ROOT, path)
}
