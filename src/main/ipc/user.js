import { ipcMain } from 'electron';

ipcMain.handle('user:greet', async (_, name) => {
  console.log('Received name from frontend:', name);

  return `Hello ${name}, backend is working 🚀`;
});
