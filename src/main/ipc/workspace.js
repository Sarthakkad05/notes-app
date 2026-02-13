import { ipcMain } from 'electron';
import { loadWorkspace } from '../core/workspaceManager.js';

ipcMain.handle('workspace:load', async (_, path) => {
  return loadWorkspace(path);
});
