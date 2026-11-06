(() => {
  // Accessible tabs
  document.querySelectorAll('[data-tabs]').forEach(root => {
    const tabs = [...root.querySelectorAll('[role=tab]')];
    const select = t => tabs.forEach(x => {
      const on = x === t;
      x.setAttribute('aria-selected', on);
      x.tabIndex = on ? 0 : -1;
      document.getElementById(x.getAttribute('aria-controls')).hidden = !on;
    });
    tabs.forEach((t, i) => {
      t.addEventListener('click', () => select(t));
      t.addEventListener('keydown', e => {
        const d = e.key === 'ArrowRight' ? 1 : e.key === 'ArrowLeft' ? -1 : 0;
        if (d) { const n = tabs[(i + d + tabs.length) % tabs.length]; select(n); n.focus(); }
      });
    });
  });

  const yr = document.getElementById('yr'); if (yr) yr.textContent = new Date().getFullYear();

  // Review form. FORM_ENDPOINT is empty until a real lead destination is approved,
  // so the form never claims success it didn't get.
  const FORM_ENDPOINT = '';
  const form = document.getElementById('review-form');
  if (!form) return;
  const status = form.querySelector('.status');
  const msg = (t, cls) => { status.textContent = t; status.className = 'status ' + (cls || ''); };

  form.addEventListener('submit', async e => {
    e.preventDefault();
    let bad = null;
    form.querySelectorAll('input:not(.hp),textarea').forEach(f => {
      const ok = f.checkValidity(); f.setAttribute('aria-invalid', !ok); if (!ok && !bad) bad = f;
    });
    if (bad) {
      const label = bad.closest('label').firstChild.textContent.trim();
      msg(bad.type === 'email' ? 'Please enter a valid email address.' :
          bad.type === 'url' ? 'Please enter a full website address, starting with https://' :
          `Please fill in: ${label}.`, 'err');
      bad.focus(); return;
    }
    if (form.company_url.value) return; // honeypot
    if (!FORM_ENDPOINT) { msg('Online requests open soon. Thanks for your patience.', 'err'); return; }
    msg('Sending…');
    try {
      const ctrl = new AbortController(); const to = setTimeout(() => ctrl.abort(), 12000);
      const r = await fetch(FORM_ENDPOINT, { method: 'POST', body: new FormData(form), signal: ctrl.signal });
      clearTimeout(to);
      if (!r.ok) throw new Error(r.status);
      form.reset(); msg('Thanks — we received your request and will be in touch.', 'ok');
    } catch { msg('Something went wrong sending your request. Please try again.', 'err'); }
  });
})();
