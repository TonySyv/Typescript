import { ScheduledTask } from './types';
export declare function addTask(name: string, cronExpr: string, action: () => void): boolean;
export declare function listTasks(): ScheduledTask[];
export declare function runTask(name: string): boolean;
//# sourceMappingURL=scheduler.d.ts.map