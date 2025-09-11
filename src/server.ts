import express from 'express';
import { addTask, listTasks, runTask } from './scheduler';

const app = express();
app.use(express.json());

app.post('/tasks', (req, res) => {
  const { name, cron, message } = req.body;
  const success = addTask(name, cron, () => {
    console.log(`🔔 Task "${name}" executed: ${message}`);
  });

  if (!success) return res.status(400).send({ error: 'Task name already exists' });
  res.send({ status: 'Task scheduled' });
});

app.get('/tasks', (req, res) => {
  res.send(listTasks());
});

app.post('/tasks/:name/run', (req, res) => {
  const success = runTask(req.params.name);
  if (!success) return res.status(404).send({ error: 'Task not found' });
  res.send({ status: 'Task executed manually' });
});

app.listen(3000, () => {
  console.log('🚀 Task Scheduler API running on http://localhost:3000');
});
