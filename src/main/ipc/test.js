import { ipcMain } from 'electron';

ipcMain.handle('backend:test', async () => {
  console.log('✅ Backend received IPC call');
  return 'Backend is working 🚀';
});
