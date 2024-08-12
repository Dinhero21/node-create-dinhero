type TaskFunction = () => Promise<void>;

export class Task {
  public get name(): string {
    return this.callback.name;
  }

  public toString(): string {
    return `Task[${this.name}]`;
  }

  constructor(callback: TaskFunction) {
    this.callback = callback;
  }

  private readonly callback;

  public async run(): Promise<void> {
    await this.callback();
  }

  public readonly dependencies = new Set<Task>();

  public after(task: Task): void {
    this.dependencies.add(task);
  }
}

export class Runner {
  public readonly todo = new Set<Task>();

  public create(f: TaskFunction): Task {
    const task = new Task(f);

    this.todo.add(task);

    return task;
  }

  public async run(): Promise<void> {
    const todo = this.todo;

    while (true) {
      if (todo.size === 0) break;

      const noDependencyTasks = Array.from(todo).filter((task) =>
        Array.from(task.dependencies).every(
          (dependency) => !todo.has(dependency),
        ),
      );

      if (noDependencyTasks.length === 0) {
        console.warn('Cycle detected!');
        break;
      }

      for (const task of noDependencyTasks) {
        todo.delete(task);
      }

      await Promise.race(
        Array.from(noDependencyTasks).map(async (task) => {
          await task.run();
        }),
      );
    }
  }
}

export const runner = new Runner();
