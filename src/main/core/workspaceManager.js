import fs from 'fs';
import path from 'path';

export function loadWorkspace(dir) {
  const files = fs.readdirSync(dir);
  return files.filter(f => f.endsWith('.md'));
}
