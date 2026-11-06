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

  // Review form -> FormSubmit, delivering to the TopStitch inbox.
  // Success is shown only when the service confirms it accepted the request.
  const FORM_ENDPOINT = 'https://formsubmit.co/ajax/topstitchdigital@gmail.com';
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
    msg('Sending…');
    try {
      const ctrl = new AbortController(); const to = setTimeout(() => ctrl.abort(), 12000);
      const data = Object.fromEntries(new FormData(form));
      delete data.company_url;
      data._subject = 'Visibility review request: ' + data.business;
      data._replyto = data.email;
      data._template = 'table';
      const r = await fetch(FORM_ENDPOINT, { method: 'POST', headers: { 'Content-Type': 'application/json', Accept: 'application/json' }, body: JSON.stringify(data), signal: ctrl.signal });
      clearTimeout(to);
      const j = await r.json().catch(() => ({}));
      if (!r.ok || String(j.success) !== 'true') throw new Error(j.message || r.status);
      form.reset(); msg('Thanks — we received your request and will be in touch.', 'ok');
    } catch { msg('Something went wrong sending your request. Please try again, or email marketing@topstitchdigital.com.', 'err'); }
  });
})();
