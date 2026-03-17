// © 2026 Reborn Vision — All rights reserved. Unauthorized copying, modification or distribution is strictly prohibited. https://reborn-vision.com
const LANGS = {
  fr: { flag: '🇫🇷', label: 'Français' },
  en: { flag: '🇬🇧', label: 'English' },
  es: { flag: '🇪🇸', label: 'Español' },
  de: { flag: '🇩🇪', label: 'Deutsch' },
  pt: { flag: '🇧🇷', label: 'Português' },
  it: { flag: '🇮🇹', label: 'Italiano' },
  nl: { flag: '🇳🇱', label: 'Nederlands' },
  pl: { flag: '🇵🇱', label: 'Polski' },
  ru: { flag: '🇷🇺', label: 'Русский' },
  tr: { flag: '🇹🇷', label: 'Türkçe' },
  ja: { flag: '🇯🇵', label: '日本語' },
  ko: { flag: '🇰🇷', label: '한국어' },
  fil: { flag: '🇵🇭', label: 'Filipino' },
  zh: { flag: '🇨🇳', label: '中文' },
  ar: { flag: '🇸🇦', label: 'العربية' }
};

const cache = {};
let currentLang = null;

function getPreferredLang() {
  const stored = localStorage.getItem('site-lang');
  if (stored && LANGS[stored]) return stored;
  const nav = (navigator.language || 'en').split('-')[0].toLowerCase();
  if (nav === 'fil' || nav === 'tl') return 'fil';
  return LANGS[nav] ? nav : 'en';
}

async function loadLang(lang) {
  if (cache[lang]) return cache[lang];
  const mod = await import(`./${lang}.js?v=${Date.now()}`);
  cache[lang] = mod.default;
  return cache[lang];
}

function getNestedValue(obj, path) {
  return path.split('.').reduce((acc, key) => acc && acc[key], obj);
}

function applyTranslations(data) {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    const val = getNestedValue(data, key);
    if (val === undefined) return;
    if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
      el.placeholder = val;
    } else if (el.hasAttribute('data-i18n-html')) {
      el.innerHTML = val;
    } else {
      el.textContent = val;
    }
  });
}

async function setLang(lang) {
  if (!LANGS[lang]) lang = 'en';
  currentLang = lang;
  localStorage.setItem('site-lang', lang);
  const data = await loadLang(lang);
  applyTranslations(data);
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
  const btn = document.getElementById('lang-selected');
  if (btn) btn.textContent = `${LANGS[lang].flag} ${LANGS[lang].label}`;
}

function buildLangDropdown() {
  const container = document.getElementById('lang-switcher');
  if (!container) return;

  const btn = document.createElement('button');
  btn.id = 'lang-selected';
  btn.className = 'lang-btn';
  btn.setAttribute('aria-haspopup', 'listbox');

  const dropdown = document.createElement('ul');
  dropdown.className = 'lang-dropdown';
  dropdown.setAttribute('role', 'listbox');

  Object.entries(LANGS).forEach(([code, { flag, label }]) => {
    const li = document.createElement('li');
    li.setAttribute('role', 'option');
    li.dataset.lang = code;
    li.textContent = `${flag} ${label}`;
    li.addEventListener('click', () => {
      setLang(code);
      dropdown.classList.remove('open');
    });
    dropdown.appendChild(li);
  });

  btn.addEventListener('click', (e) => {
    e.stopPropagation();
    dropdown.classList.toggle('open');
  });

  document.addEventListener('click', () => dropdown.classList.remove('open'));

  container.appendChild(btn);
  container.appendChild(dropdown);
}

document.addEventListener('DOMContentLoaded', () => {
  buildLangDropdown();
  setLang(getPreferredLang());
});
