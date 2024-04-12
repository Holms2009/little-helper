export function getThemeFromLS(): 'light' | 'dark' | null {
  return localStorage.getItem('color-theme') as 'light' | 'dark';
}

export function getUserTheme(): 'light' | 'dark' {
  return window.matchMedia("prefers-color-scheme: 'dark'").matches ? 'dark' : 'light';
}

function saveThtmeToLS(value: 'dark' | 'light') {
  localStorage.setItem('color-theme', value)
}

export function setActiveTheme(value: 'dark' | 'light') {
  document.documentElement.setAttribute('data-theme', value);
  saveThtmeToLS(value);
}