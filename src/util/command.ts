import { exec } from 'child_process';

function printLines(
  prefix: string,
  string: string,
  log: (message: string) => void = console.info,
): void {
  for (const line of string.split(/\r?\n/)) {
    log(`${prefix} ${line}`);
  }
}

export async function run(
  command: string,
  name: string = command,
): Promise<void> {
  await new Promise<void>((resolve, reject) => {
    exec(command, (error, stdout, stderr) => {
      if (error !== null) {
        reject(error);
      }

      if (stderr !== '') {
        printLines(`[${name}] [stderr]`, stderr);
      }

      if (stdout !== '') {
        printLines(`[${name}]`, stdout);
      }

      resolve();
    });
  });
}
