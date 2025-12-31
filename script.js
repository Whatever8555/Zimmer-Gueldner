const setFavicon = () => {
    const link = document.querySelector('link[rel="icon"]') || document.createElement('link');
    link.rel = 'icon';

    const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    link.href = isDark ? 'images/favicon-dark.png' : 'images/favicon-light.png';

    document.head.appendChild(link);
  };

  setFavicon();

  // Optional: dynamisch wechseln, wenn der Nutzer den Modus ändert
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', setFavicon);