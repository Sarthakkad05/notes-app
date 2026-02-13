import { contextBridge, ipcRenderer } from 'electron';

contextBridge.exposeInMainWorld('api', {
  loadWorkspace: (path) => ipcRenderer.invoke('workspace:load', path),
  testBackend: () => ipcRenderer.invoke('backend:test'),
  greetUser: (name) => ipcRenderer.invoke('user:greet', name),
});
