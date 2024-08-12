import { dirname, resolve } from 'path';

export const PROJECT_ROOT = dirname(dirname(import.meta.dirname));

export const CURRENT_ROOT = process.cwd();

export function toProject(path: string): string {
  return resolve(PROJECT_ROOT, path);
}

export function toCurrent(path: string): string {
  return resolve(CURRENT_ROOT, path);
}
