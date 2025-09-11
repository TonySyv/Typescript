export interface ScheduledTask {
  name: string;
  cron: string;
  action: () => void;
}
