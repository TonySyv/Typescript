"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const scheduler_1 = require("./scheduler");
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.post('/tasks', (req, res) => {
    const { name, cron, message } = req.body;
    const success = (0, scheduler_1.addTask)(name, cron, () => {
        console.log(`🔔 Task "${name}" executed: ${message}`);
    });
    if (!success)
        return res.status(400).send({ error: 'Task name already exists' });
    res.send({ status: 'Task scheduled' });
});
app.get('/tasks', (req, res) => {
    res.send((0, scheduler_1.listTasks)());
});
app.post('/tasks/:name/run', (req, res) => {
    const success = (0, scheduler_1.runTask)(req.params.name);
    if (!success)
        return res.status(404).send({ error: 'Task not found' });
    res.send({ status: 'Task executed manually' });
});
app.listen(3000, () => {
    console.log('🚀 Task Scheduler API running on http://localhost:3000');
});
//# sourceMappingURL=server.js.map