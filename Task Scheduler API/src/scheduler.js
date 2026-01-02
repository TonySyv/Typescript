"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.addTask = addTask;
exports.listTasks = listTasks;
exports.runTask = runTask;
const node_cron_1 = __importDefault(require("node-cron"));
const types_1 = require("./types");
const tasks = new Map();
function addTask(name, cronExpr, action) {
    if (tasks.has(name))
        return false;
    const task = { name, cron: cronExpr, action };
    node_cron_1.default.schedule(cronExpr, action);
    tasks.set(name, task);
    return true;
}
function listTasks() {
    return Array.from(tasks.values());
}
function runTask(name) {
    const task = tasks.get(name);
    if (!task)
        return false;
    task.action();
    return true;
}
//# sourceMappingURL=scheduler.js.map