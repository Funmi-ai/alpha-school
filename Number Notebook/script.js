'use strict';

/* ============================================================
   DATA
   Add all content here. Keep data separate from render logic.
   ============================================================ */

const resourceData = [
  // {
  //   id: 'example',
  //   name: 'Example',
  //   emoji: '🌟',
  //   // ... add fields relevant to this resource
  // }
];


/* ============================================================
   CONFIG
   Display mappings — colours, labels, CSS class names.
   ============================================================ */

// const groupConfig = { ... };


/* ============================================================
   STATE
   ============================================================ */

// let currentFilter = 'all';


/* ============================================================
   UTILITY
   ============================================================ */

function $(id) { return document.getElementById(id); }

/** Safely insert data strings into innerHTML */
function safeText(str) {
  const d = document.createElement('div');
  d.textContent = str;
  return d.innerHTML;
}


/* ============================================================
   RENDER
   One function per view. Read state + data, write to DOM.
   ============================================================ */

function render() {
  const area = $('activity-area');
  if (!area) return;
  // TODO: build HTML string and set area.innerHTML
  area.innerHTML = '<p style="padding:2rem;text-align:center;color:#6b7280;">Add your content to resourceData and build render() here.</p>';
}


/* ============================================================
   ACTIONS
   Update state, then call render().
   ============================================================ */

// function handleSomething() { ... }


/* ============================================================
   INIT
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {
  render();
  // wire up event listeners here
});
