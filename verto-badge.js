/* Verto Media mockup notice. Set data-client on the script tag. */
(function () {
  var script = document.currentScript;
  var client = (script && script.dataset.client) || "this business";
  var KEY = "verto-mockup-seen";

  var css = `
  @import url("https://fonts.googleapis.com/css2?family=Archivo:wdth,wght@62..125,400..800&display=swap");
  .vm-dlg{--vm-ink:#0A2321;--vm-ink2:#12332F;--vm-bg:#EAECE8;--vm-muted:#A9BAB6;--vm-sand:#D8C7A4;--vm-amber:#FFB224;
    border:0;padding:0;margin:auto;width:min(520px,calc(100% - 32px));max-height:calc(100% - 32px);background:var(--vm-ink);color:var(--vm-bg);
    border-radius:22px;overflow:hidden;font-family:"Archivo",system-ui,sans-serif;box-shadow:0 40px 90px -20px rgba(6,24,22,.6)}
  .vm-dlg::backdrop{background:rgba(6,24,22,.55);backdrop-filter:blur(6px);-webkit-backdrop-filter:blur(6px)}
  .vm-dlg[open]{animation:vm-in .55s cubic-bezier(.16,1,.3,1) both}
  .vm-dlg[open]::backdrop{animation:vm-fade .4s ease both}
  @keyframes vm-in{from{opacity:0;transform:translateY(24px) scale(.97)}}
  @keyframes vm-fade{from{opacity:0}}
  @media (prefers-reduced-motion:reduce){.vm-dlg[open],.vm-dlg[open]::backdrop{animation:none}}
  .vm-top{position:relative;padding:34px 34px 0}
  .vm-mark{display:flex;align-items:center;gap:12px}
  .vm-mark svg{width:46px;height:46px;flex:none}
  .vm-mark b{font-weight:800;font-stretch:90%;font-size:1.15rem;letter-spacing:.01em;line-height:1}
  .vm-mark span{display:block;font-size:.82rem;color:var(--vm-muted);margin-top:3px;font-weight:400}
  .vm-x{position:absolute;right:18px;top:18px;width:40px;height:40px;border-radius:50%;border:0;background:transparent;color:var(--vm-muted);cursor:pointer;display:grid;place-items:center;transition:background .2s,color .2s}
  .vm-x:hover{background:var(--vm-ink2);color:var(--vm-bg)}
  .vm-x svg{width:18px;height:18px}
  .vm-body{padding:28px 34px 30px}
  .vm-body h2{margin:0 0 14px;font-family:"Archivo",system-ui,sans-serif;font-weight:800;font-stretch:88%;font-size:clamp(1.9rem,5vw,2.5rem);line-height:1;letter-spacing:-.01em;color:var(--vm-bg)}
  .vm-body h2 i{font-style:normal;color:var(--vm-amber)}
  .vm-body p{margin:0 0 12px;font-size:1rem;line-height:1.55;color:var(--vm-muted);max-width:44ch}
  .vm-body p strong{color:var(--vm-bg);font-weight:600}
  .vm-note{display:flex;gap:10px;align-items:flex-start;margin:18px 0 24px;padding:14px 16px;background:var(--vm-ink2);border-radius:12px;font-size:.88rem;line-height:1.45;color:var(--vm-muted)}
  .vm-note::before{content:"";flex:none;width:10px;height:10px;margin-top:5px;background:var(--vm-amber)}
  .vm-actions{display:flex;flex-wrap:wrap;gap:10px}
  .vm-btn{display:inline-flex;align-items:center;justify-content:center;min-height:50px;padding:0 22px;border-radius:999px;border:0;font:inherit;font-weight:700;font-stretch:92%;font-size:1rem;cursor:pointer;text-decoration:none;transition:transform .2s cubic-bezier(.16,1,.3,1),background .2s,color .2s}
  .vm-btn:active{transform:scale(.97)}
  .vm-btn.pri{background:var(--vm-amber);color:var(--vm-ink)}
  .vm-btn.pri:hover{background:#ffc04d}
  .vm-btn.sec{background:transparent;color:var(--vm-bg);box-shadow:inset 0 0 0 1.5px rgba(234,236,232,.28)}
  .vm-btn.sec:hover{box-shadow:inset 0 0 0 1.5px var(--vm-bg)}
  .vm-stripe{height:6px;background:linear-gradient(90deg,var(--vm-amber) 0 18%,var(--vm-sand) 18% 40%,var(--vm-muted) 40% 62%,var(--vm-ink2) 62%)}
  .vm-dlg :focus-visible{outline:3px solid var(--vm-amber);outline-offset:3px}
  .vm-pill{position:fixed;left:16px;bottom:16px;z-index:9999;display:inline-flex;align-items:center;gap:9px;padding:8px 14px 8px 8px;border-radius:999px;border:0;cursor:pointer;
    background:#0A2321;color:#EAECE8;font-family:"Archivo",system-ui,sans-serif;font-weight:700;font-stretch:92%;font-size:.86rem;box-shadow:0 10px 30px -8px rgba(6,24,22,.55);
    transition:transform .25s cubic-bezier(.16,1,.3,1),opacity .3s}
  .vm-pill:hover{transform:translateY(-2px)}
  .vm-pill svg{width:26px;height:26px}
  .vm-pill[hidden]{display:none}
  .vm-pill:focus-visible{outline:3px solid #FFB224;outline-offset:3px}
  @media (max-width:480px){.vm-top{padding:26px 24px 0}.vm-body{padding:22px 24px 24px}.vm-btn{flex:1 1 100%}}
  `;

  var logo = '<svg viewBox="0 0 100 100" aria-hidden="true"><rect width="100" height="100" rx="22" fill="#EAECE8"/><path fill="#0A2321" d="M14 20h24l12 38 12-38h24L60 80H40z"/><rect x="77" y="67" width="14" height="14" fill="#FFB224"/></svg>';
  var logoDark = '<svg viewBox="0 0 100 100" aria-hidden="true"><rect width="100" height="100" rx="50" fill="#12332F"/><path fill="#EAECE8" d="M20 25h20l10 32 10-32h20L60 77H40z"/><rect x="72" y="66" width="11" height="11" fill="#FFB224"/></svg>';

  function build() {
    var style = document.createElement("style");
    style.textContent = css;
    document.head.appendChild(style);

    var dlg = document.createElement("dialog");
    dlg.className = "vm-dlg";
    dlg.setAttribute("aria-labelledby", "vm-title");
    dlg.innerHTML =
      '<div class="vm-stripe"></div>' +
      '<div class="vm-top"><div class="vm-mark">' + logo +
      '<div><b>Verto Media</b><span>Websites, apps &amp; software</span></div></div>' +
      '<button class="vm-x" type="button" aria-label="Close"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><path d="M6 6l12 12M18 6L6 18"/></svg></button></div>' +
      '<div class="vm-body">' +
      '<h2 id="vm-title">A website concept for <i>' + client + '</i></h2>' +
      '<p>We designed this mockup to show what <strong>' + client + '</strong> could look like online. Have a scroll, try the menus, and open it on your phone too.</p>' +
      '<div class="vm-note">This is a design preview, not the live website. Photos, logos and reviews belong to ' + client + ' and are used here for presentation only.</div>' +
      '<div class="vm-actions">' +
      '<button class="vm-btn pri" type="button" data-close autofocus>Explore the concept</button>' +
      '<a class="vm-btn sec" href="https://www.vertomedia.co.za/" target="_blank" rel="noopener">Visit Verto Media</a>' +
      '</div></div>';
    document.body.appendChild(dlg);

    var pill = document.createElement("button");
    pill.className = "vm-pill";
    pill.type = "button";
    pill.hidden = true;
    pill.innerHTML = logoDark + "<span>Mockup by Verto Media</span>";
    document.body.appendChild(pill);

    function close() { dlg.close(); }
    dlg.querySelector(".vm-x").addEventListener("click", close);
    dlg.querySelector("[data-close]").addEventListener("click", close);
    dlg.addEventListener("click", function (e) { if (e.target === dlg) close(); });
    dlg.addEventListener("close", function () {
      pill.hidden = false;
      try { sessionStorage.setItem(KEY, "1"); } catch (e) {}
    });
    pill.addEventListener("click", function () { pill.hidden = true; dlg.showModal(); });

    var seen = false;
    try { seen = sessionStorage.getItem(KEY) === "1"; } catch (e) {}
    if (seen) { pill.hidden = false; }
    else { setTimeout(function () { if (typeof dlg.showModal === "function") dlg.showModal(); }, 900); }
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", build);
  else build();
})();
