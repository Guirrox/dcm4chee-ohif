function applyReditechBranding() {
  const target = document.querySelector('[data-cy="return-to-work-list"]');
  if (!target) return;

  if (target.dataset.reditechApplied === '1') return;
  target.dataset.reditechApplied = '1';

  target.innerHTML = '';
  target.style.display = 'flex';
  target.style.alignItems = 'center';
  target.style.minWidth = '240px';

  const img = document.createElement('img');
  img.src = '/logo.png';
  img.alt = 'Reditech';
  img.style.height = '42px';
  img.style.width = 'auto';
  img.style.objectFit = 'contain';

  const text = document.createElement('span');
  text.textContent = 'Reditech PACS';
  text.style.color = 'white';
  text.style.fontSize = '18px';
  text.style.fontWeight = '600';
  text.style.marginLeft = '12px';

  target.appendChild(img);
  target.appendChild(text);
}

setInterval(applyReditechBranding, 1000);
