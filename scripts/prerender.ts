import fs from 'node:fs';
import path from 'node:path';
import React from 'react';
import { renderToString } from 'react-dom/server';
import App from '../src/App';

async function prerender(): Promise<void> {
  const distPath = path.resolve(process.cwd(), 'dist');
  const indexPath = path.join(distPath, 'index.html');

  if (!fs.existsSync(indexPath)) {
    console.error('[SSG] Error: dist/index.html not found. Run vite build first.');
    process.exit(1);
  }

  const template = fs.readFileSync(indexPath, 'utf-8');
  const appHtml = renderToString(React.createElement(App));

  // Prerender into the root div
  const prerendered = template.replace(
    '<div id="root"></div>',
    `<div id="root">${appHtml}</div>`
  );

  fs.writeFileSync(indexPath, prerendered, 'utf-8');
  console.log(`[SSG] Successfully prerendered index.html (${appHtml.length} characters injected into #root).`);
}

prerender();
