#!/usr/bin/env node
/**
 * Generates packages/icons/dist/sprite.svg from:
 *   1. Hand-crafted SVGs in packages/icons/src/{name}.svg (Figma exports go here)
 *   2. Built-in stroke-based placeholders for any missing names
 *
 * The sprite uses <symbol> elements so icons inherit stroke/fill from the
 * host <svg> in en-icon.tsx via the SVG cascade.
 *
 * Icon names with spaces (e.g. "nota com cifra") are slugified to
 * "nota-com-cifra" in the sprite — en-icon.tsx does the same sanitization.
 */

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, '..');
const SRC_DIR = path.join(ROOT, 'packages/icons/src');
const DIST_DIR = path.join(ROOT, 'packages/icons/dist');
const EN_ICON_TSX = path.join(ROOT, 'packages/components/src/components/en-icon/en-icon.tsx');

// ─── Helpers ───────────────────────────────────────────────────────────────

function slugify(name) {
  return name.replace(/\s+/g, '-');
}

function parseIconNames(src) {
  const match = src.match(/export type IconName\s*=([^;]+);/s);
  if (!match) throw new Error('IconName type not found in en-icon.tsx');
  return [...match[1].matchAll(/'([^']+)'/g)].map(m => m[1]);
}

// Extract <path>, <circle>, <rect>, <line>, <polyline>, <polygon> children
// from a source SVG file, stripping fill/stroke so they inherit from host.
function extractPaths(svgContent) {
  // Remove XML declaration and <svg> wrapper, keep inner elements
  const inner = svgContent
    .replace(/<\?xml[^>]*>/g, '')
    .replace(/<svg[^>]*>/g, '')
    .replace(/<\/svg>/g, '')
    .trim();
  // Strip fill/stroke attributes so the host SVG cascade applies
  return inner.replace(/\s*(fill|stroke)="(?!none)[^"]*"/g, '');
}

// ─── Placeholder paths (stroke-based, 24×24 viewBox) ─────────────────────
// These are used when no hand-crafted src/{name}.svg exists.
// Replace individual files with Figma exports to override.

const PLACEHOLDER = {
  'curve-arrow':            'M9 9c0-4.177 3.347-5 5-5 3 0 5 2 5 5s-2.5 5-5 5H3m0 0 3-3m-3 3 3 3',
  'alert':                  'M10.29 3.86 1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0zM12 9v4M12 17h.01',
  'arrow-shuffle':          'M16 3h5v5M4 20l16-16M21 16v5h-5M15 15l5.1 5.1M4 4l5 5',
  'arrow-right':            'M5 12h14M12 5l7 7-7 7',
  'arrow-down':             'M12 5v14M19 12l-7 7-7-7',
  'arrow-up':               'M12 19V5M5 12l7-7 7 7',
  'chart':                  'M18 20V10M12 20V4M6 20v-6',
  'company':                'M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2zM9 22V12h6v10',
  'credit-cards':           'M2 6h20v4H2zm0 4h20v9a1 1 0 01-1 1H3a1 1 0 01-1-1V10zm4 6h4',
  'dashboard':              'M3 3h7v7H3zm11 0h7v7h-7zM3 14h7v7H3zm11 0h7v7h-7z',
  'exit-door':              'M10 3H5a2 2 0 00-2 2v14a2 2 0 002 2h5m7-9-3-3m0 0-3 3m3-3v12',
  'help':                   'M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10zm0-7v.01M9.09 9a3 3 0 015.83 1c0 2-3 3-3 3',
  'link-shear':             'M10 13a5 5 0 007.54.54l3-3a5 5 0 00-7.07-7.07l-1.72 1.71M14 11a5 5 0 00-7.54-.54l-3 3a5 5 0 007.07 7.07l1.71-1.71',
  'message-smile':          'M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2zM8 14h.01M16 14h.01M9.5 11s.5 1.5 2.5 1.5 2.5-1.5 2.5-1.5',
  'messages-chat':          'M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2zM8 10h8M8 14h4',
  'notification':           'M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9m-4.27 13a2 2 0 01-3.46 0',
  'news-paper':             'M4 3h16a1 1 0 011 1v16a1 1 0 01-1 1H4a1 1 0 01-1-1V4a1 1 0 011-1zm3 4h10M7 11h10M7 15h6',
  'rocket':                 'M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 00-2.91-.09zM19 5l-7 7m0-7 4 4-8 8-4-4 4-4z',
  'setting':                'M12 15a3 3 0 100-6 3 3 0 000 6zm7-3c0 .4-.04.79-.09 1.17L21 15.4l-2 3.46-2.23-.89a7 7 0 01-2.02 1.17L14.5 22h-5l-.26-2.86a7 7 0 01-2.02-1.17L5 18.86l-2-3.46 2.09-1.23A8 8 0 015 13c0-.4.04-.79.09-1.17L3 10.6l2-3.46 2.23.89A7 7 0 019.25 6.86L9.5 4h5l.26 2.86a7 7 0 012.02 1.17l2.23-.89 2 3.46-2.09 1.23c.05.38.09.77.09 1.17z',
  'thunder':                'M13 2 3 14h9l-1 8 10-12h-9l1-8z',
  'ticket':                 'M20 12V22H4V12M22 7H2v5h20V7zM12 22V7M5 7V3h14v4',
  'user':                   'M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2M12 11a4 4 0 100-8 4 4 0 000 8z',
  'eye-show-visible':       'M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8zm11 3a3 3 0 100-6 3 3 0 000 6z',
  'search':                 'M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z',
  'hourglass':              'M6 2h12v6l-4 4 4 4v6H6v-6l4-4-4-4z',
  'wallet':                 'M21 4H3a2 2 0 00-2 2v12a2 2 0 002 2h18a2 2 0 002-2V6a2 2 0 00-2-2zM1 10h22M8 14h.01',
  'invoice':                'M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8zM14 2v6h6M8 13h8M8 17h5',
  'closed':                 'M18 6 6 18M6 6l12 12',
  'invoice-checkmark-with-list': 'M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8zM14 2v6h6m-4 7 2 2 4-4M8 13h4M8 17h3',
  'calendar-enter-arrow-right':  'M8 2v4M16 2v4M3 10h18M21 8H3v12a2 2 0 002 2h14a2 2 0 002-2V8zm-7 6h3m0 0-2-2m2 2-2 2',
  'calendar-return-arrow':       'M8 2v4M16 2v4M3 10h18M21 8H3v12a2 2 0 002 2h14a2 2 0 002-2V8zm-4 6-2-2m2 2-2 2m2-2H9',
  'calendar-schedule-back':      'M8 2v4M16 2v4M3 10h18M21 8H3v12a2 2 0 002 2h14a2 2 0 002-2V8zm-7 4v4m0 0H9m5 0 2-2',
  'calendar-schedule-parevious-date': 'M8 2v4M16 2v4M3 10h18M21 8H3v12a2 2 0 002 2h14a2 2 0 002-2V8zm-7 6h-4m2-2v4',
  'calendar-tucked-corner':      'M8 2v4M16 2v4M3 10h18M21 8H3v12a2 2 0 002 2h14a2 2 0 002-2V8zm-3 9H9m7-4H9',
  'arrow-left':             'M19 12H5M12 19l-7-7 7-7',
  'certificate-medal':      'M12 15a7 7 0 100-14 7 7 0 000 14zm0 0v7m-4-4h8',
  'download':               'M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3',
  'print':                  'M6 9V2h12v7M6 18H4a2 2 0 01-2-2v-5a2 2 0 012-2h16a2 2 0 012 2v5a2 2 0 01-2 2h-2M8 21h8v-9H8v9z',
  'share-arrow':            'M4 12v8a2 2 0 002 2h12a2 2 0 002-2v-8M16 6l-4-4-4 4M12 2v13',
  'clock-time':             'M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10zM12 7v5l4 2',
  'eye-hidden':             'M17.94 17.94A10.07 10.07 0 0112 20c-7 0-11-8-11-8a18.45 18.45 0 015.06-5.94M9.9 4.24A9.12 9.12 0 0112 4c7 0 11 8 11 8a18.5 18.5 0 01-2.16 3.19M1 1l22 22',
  'code-document':          'M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8zM14 2v6h6M10 16l-2-2 2-2m4 0 2 2-2 2',
  'plus-add':               'M12 5v14M5 12h14',
  'documents-eye':          'M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8zM14 2v6h6M9 15s1.5-2 3-2 3 2 3 2-1.5 2-3 2-3-2-3-2zm3 0h.01',
  'mail-open':              'M3 8l9 5.5L21 8M21 6H3a2 2 0 00-2 2v12a2 2 0 002 2h18a2 2 0 002-2V8a2 2 0 00-2-2z',
  'shopping-bag-line':      'M6 2 3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4H6zm0 0v4h12V2M9 12a3 3 0 006 0',
  'percent':                'M19 5 5 19M7 7h.01M17 17h.01',
  'price':                  'M12 2v2m0 16v2M6 12H4m16 0h-2m-1.46-6.54-1.42 1.42M6.88 17.12l-1.42 1.42m0-12.08 1.42 1.42m9.24 9.24 1.42 1.42M12 8a4 4 0 100 8 4 4 0 000-8z',
  'users':                  'M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2M9 11a4 4 0 100-8 4 4 0 000 8zm8 2a4 4 0 010 8M23 21v-2a4 4 0 00-3-3.87',
  'nfe':                    'M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8zM14 2v6h6M8 13h8M8 17h5',
  'nfe-devolution':         'M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8zM14 2v6h6M15 12H9m3-3v6',
  'nfs':                    'M12 2H6a2 2 0 00-2 2v18l4-2 4 2 4-2 4 2V4a2 2 0 00-2-2h-6zM9 9h6M9 13h6M9 17h3',
  'nfe-split':              'M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8zM14 2v6h6M9 15h2m4 0h2M9 11h6m-3-2v8',
  'nfe-history':            'M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10zM12 7v5l4 2M3 3l3 3',
  'nfe-transfer':           'M8 3H5a2 2 0 00-2 2v3M21 8V5a2 2 0 00-2-2h-3M3 16v3a2 2 0 002 2h3M16 21h3a2 2 0 002-2v-3M7 12h10m-5-4v8',
  'nfe-alert':              'M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8zM14 2v6h6M12 12v4M12 10h.01',
  'nfe-canceled':           'M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8zM14 2v6h6M9 15l6-6m0 6L9 9',
  'nfe-done':               'M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8zM14 2v6h6M9 15l2 2 4-4',
  'nfe-xml':                'M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8zM14 2v6h6M9 15h6M9 11l2 2-2 2m6 0-2-2 2-2',
  'nf-paper':               'M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8zM14 2v6h6M8 13h8M8 17h8',
  'calculator':             'M5 3h14a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2zm3 4h8M8 11h2m4 0h2M8 15h2m4 0h2',
  'done-check':             'M20 6 9 17l-5-5',
  'equals':                 'M5 9h14M5 15h14',
  'question':               'M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10zm0-7v.01M9.09 9a3 3 0 015.83 1c0 2-3 3-3 3',
  'envelope':               'M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2zm0 0 8 8 8-8',
  'cube':                   'M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16zM3.27 6.96 12 12.01l8.73-5.05M12 22.08V12',
  'file-programming-code':  'M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8zM14 2v6h6M10 16l-2-2 2-2m4 0 2 2-2 2',
  'documents-file-pdf':     'M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8zM14 2v6h6M9 15h1.5a1.5 1.5 0 000-3H9v6m6-6h1a2 2 0 010 4h-1m4-4v6',
  'users-profile-group':    'M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2M9 11a4 4 0 100-8 4 4 0 000 8zm8 2a4 4 0 010 8M23 21v-2a4 4 0 00-3-3.87',
  'refresh-rotate':         'M23 4v6h-6M1 20v-6h6M3.51 9a9 9 0 0114.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0020.49 15',
  'rotate-refresh-loading': 'M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83',
  'block-delete-stop':      'M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10zM4.93 4.93l14.14 14.14',
  'done-check-circle':      'M22 11.08V12a10 10 0 11-5.93-9.14M22 4 12 14.01l-3-3',
  'power-appliances-shutdown': 'M18.36 6.64a9 9 0 11-12.73 0M12 2v10',
  'trash':                  'M3 6h18M8 6V4h8v2M19 6v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6m3 0v12m4-12v12m4-12v12',
  'earth-world':            'M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10zm0 0c1.657 0 3-4.03 3-9S13.657 3 12 3 9 7.03 9 12s1.343 9 3 9zm-9-9h18M3.27 9h17.46M3.27 15h17.46',
  'map':                    'M1 6v16l7-4 8 4 7-4V2l-7 4-8-4-7 4zm7-4v16m8-12v16',
  'message-question-checkmark': 'M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2zm-9-4v.01M9.09 9a3 3 0 015.83 1c0 2-3 3-3 3',
  'grid-layout-add':        'M3 3h7v7H3zm11 0h7v7h-7zM3 14h7v7H3zm11 3.5h7m-3.5-3.5v7',
  'add':                    'M12 5v14M5 12h14',
  'remove-user':            'M16 11a4 4 0 10-8 0M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2m16-12-4 4',
  'target':                 'M22 12h-4M6 12H2M12 6V2M12 22v-4m8-6a8 8 0 11-16 0 8 8 0 0116 0zm-8 3a3 3 0 100-6 3 3 0 000 6z',
  'arrow-left-2':           'M19 12H5M12 19l-7-7 7-7',
  'infornation-info':       'M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10zm0-9v4m0-6v.01',
  'filter-sort':            'M22 3H2l8 9.46V19l4 2v-8.54L22 3z',
  'clock':                  'M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10zM12 7v5l4 2',
  'invoice-checkmark':      'M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8zM14 2v6h6M9 15l2 2 4-4',
  'setting-2':              'M12 20a8 8 0 100-16 8 8 0 000 16zm0 0v2M12 2v2M20 12h2M2 12h2m14.95-8.95-1.41 1.41M6.46 17.54l-1.41 1.41m12.9 0-1.41-1.41M6.46 6.46 5.05 5.05',
  'alert-circle':           'M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10zm0-7v.01M12 9v4',
  'code':                   'M16 18l6-6-6-6M8 6l-6 6 6 6',
  'chart-line':             'M3 3v18h18M18.5 9.5 13 15l-3-3-4.5 4.5',
  'link':                   'M15 7h3a5 5 0 010 10h-3m-6 0H6A5 5 0 016 7h3m-1 5h8',
  'transfer':               'M7 16V4m0 0L3 8m4-4 4 4M17 8v12m0 0 4-4m-4 4-4-4',
  'nota com cifra':         'M9 7h6M9 12h6M9 17h3m-5 5h12a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v17l2-2zM13 7v5',
  'pen':                    'M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z',
  'arrow-down-2':           'M12 5v14M19 12l-7 7-7-7',
  'faq':                    'M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10zm0-7v.01M9.09 9a3 3 0 015.83 1c0 2-3 3-3 3',
  'robo':                   'M12 8V2M8 8h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4a2 2 0 012-2zm-5 8h14a2 2 0 012 2v2a2 2 0 01-2 2H5a2 2 0 01-2-2v-2a2 2 0 012-2zm3-6h.01M16 10h.01',
  'archive':                'M21 8v13H3V8M1 3h22v5H1zm9 9h4',
  'house':                  'M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2zM9 22V12h6v10',
  'box':                    'M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16zM3.27 6.96 12 12.01l8.73-5.05M12 22.08V12',
  'key':                    'M21 2l-2 2m-7.61 7.61a5.5 5.5 0 11-7.778 7.778 5.5 5.5 0 017.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4',
  'dual-arrow':             'M7 16l-4-4 4-4M17 8l4 4-4 4',
  'users-profile-group-2':  'M16 11c1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3 1.34 3 3 3zm-8 0a3 3 0 100-6 3 3 0 000 6zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5C15 14.17 10.33 13 8 13zm8 0c-.29 0-.62.02-.97.05C16.19 14.4 17 15.27 17 16.5V19h6v-2.5c0-2.33-4.67-3.5-8-3.5z',
  'box-2':                  'M12 2l9 5v10l-9 5-9-5V7l9-5zm0 0v14M3 7l9 5m9-5-9 5',
  'box-and-star':           'M12 2l9 5v10l-9 5-9-5V7l9-5zm-3 6 1.5-1.5 1.5 1.5 1.5-1.5 1.5 1.5-1.5 1.5 1.5 1.5-1.5 1.5-1.5-1.5-1.5 1.5-1.5-1.5 1.5-1.5z',
  'star':                   'M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z',
  'done-check-circle-2':    'M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10zM9 12l2 2 4-4',
  'clock-2':                'M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10zM12 7v5h5',
  'padlock-unlock':         'M7 11V7a5 5 0 0110 0M5 11h14a2 2 0 012 2v7a2 2 0 01-2 2H5a2 2 0 01-2-2v-7a2 2 0 012-2zm7 4v3',
  'padlock-lock':           'M7 11V7a5 5 0 0110 0v4M5 11h14a2 2 0 012 2v7a2 2 0 01-2 2H5a2 2 0 01-2-2v-7a2 2 0 012-2zm7 4v3',
  'grid':                   'M3 3h7v7H3zm11 0h7v7h-7zM3 14h7v7H3zm11 0h7v7h-7z',
  'shopping-cart':          'M9 22a1 1 0 100-2 1 1 0 000 2zm11 0a1 1 0 100-2 1 1 0 000 2zM1 1h4l2.68 13.39a2 2 0 002 1.61h9.72a2 2 0 002-1.61L23 6H6',
  'arrow-up-2':             'M12 19V5M5 12l7-7 7 7',
  'less':                   'M5 12h14',
};

// ─── Build ─────────────────────────────────────────────────────────────────

function buildSymbol(id, pathData) {
  return `  <symbol id="${id}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">\n    <path d="${pathData}"/>\n  </symbol>`;
}

function buildSpriteFromSrc(name, slug, srcPath) {
  const raw = fs.readFileSync(srcPath, 'utf8');
  const inner = extractPaths(raw);
  return `  <symbol id="${slug}" viewBox="0 0 24 24">\n    ${inner.trim()}\n  </symbol>`;
}

const content = fs.readFileSync(EN_ICON_TSX, 'utf8');
const iconNames = parseIconNames(content);

fs.mkdirSync(DIST_DIR, { recursive: true });

const symbols = [];
const missing = [];

for (const name of iconNames) {
  const slug = slugify(name);
  const srcFile = path.join(SRC_DIR, `${slug}.svg`);

  if (fs.existsSync(srcFile)) {
    symbols.push(buildSpriteFromSrc(name, slug, srcFile));
  } else if (PLACEHOLDER[name]) {
    symbols.push(buildSymbol(slug, PLACEHOLDER[name]));
    missing.push(slug);
  } else {
    symbols.push(buildSymbol(slug, 'M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10zm0-7v.01M9.09 9a3 3 0 015.83 1c0 2-3 3-3 3'));
    missing.push(slug);
  }
}

const sprite = `<svg xmlns="http://www.w3.org/2000/svg" style="display:none">\n${symbols.join('\n')}\n</svg>\n`;
const outPath = path.join(DIST_DIR, 'sprite.svg');
fs.writeFileSync(outPath, sprite, 'utf8');

console.log(`✓ sprite.svg — ${symbols.length} icons → ${outPath}`);
if (missing.length) {
  console.log(`  (${missing.length} using placeholder paths — drop real SVGs in packages/icons/src/ to override)`);
}
