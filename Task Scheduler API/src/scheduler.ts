import cron from 'node-cron';
import { ScheduledTask } from './types';

const tasks: Map<string, ScheduledTask> = new Map();

export function addTask(name: string, cronExpr: string, action: () => void): boolean {
  if (tasks.has(name)) return false;

  const task: ScheduledTask = { name, cron: cronExpr, action };
  cron.schedule(cronExpr, action);
  tasks.set(name, task);
  return true;
}

export function listTasks(): ScheduledTask[] {
  return Array.from(tasks.values());
}

export function runTask(name: string): boolean {
  const task = tasks.get(name);
  if (!task) return false;
  task.action();
  return true;
}
