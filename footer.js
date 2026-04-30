(function () {
  /* ── 1. Inject CSS (once per page) ──────────────────────────── */
  if (!document.getElementById('sf-styles')) {
    const style = document.createElement('style');
    style.id = 'sf-styles';
    style.textContent = `
      /* ── Shared footer ── */
      .sf { background: #070707; border-top: 1px solid rgba(255,255,255,0.06); }
      .sf-inner { max-width: 1240px; margin: 0 auto; padding: 0 40px; }
      .sf-top { display: flex; gap: 72px; padding: 72px 0 48px; }
      .sf-brand { display: flex; flex-direction: column; flex-shrink: 0; width: 160px; }
      .sf-cols { display: grid; grid-template-columns: repeat(5, 1fr); gap: 28px; flex: 1; }
      .sf-col-h { font-size: 10.5px; font-weight: 700; letter-spacing: 1.6px; text-transform: uppercase; color: rgba(255,255,255,0.2); margin-bottom: 18px; display: block; }
      .sf-col ul { list-style: none; display: flex; flex-direction: column; gap: 11px; }
      .sf-col ul li a { font-size: 13px; color: rgba(255,255,255,0.38); text-decoration: none; transition: color 0.15s; }
      .sf-col ul li a:hover { color: rgba(255,255,255,0.75); }
      .sf-trust { display: flex; flex-direction: column; gap: 14px; }
      .sf-soc2 { display: flex; align-items: center; gap: 8px; text-decoration: none; font-size: 12px; font-weight: 500; color: rgba(255,255,255,0.35); transition: color 0.15s; }
      .sf-soc2:hover { color: rgba(255,255,255,0.65); }
      .sf-soc2 svg { width: 26px; height: 26px; flex-shrink: 0; }
      .sf-tp { text-decoration: none; display: flex; flex-direction: column; gap: 7px; }
      .sf-tp-name { display: flex; align-items: center; gap: 5px; font-size: 13px; font-weight: 700; color: rgba(255,255,255,0.5); }
      .sf-tp-stars { display: flex; gap: 2px; }
      .sf-tp-star { width: 20px; height: 20px; background: #219653; display: flex; align-items: center; justify-content: center; }
      .sf-tp-star svg { width: 11px; height: 11px; fill: #fff; }
      .sf-app { display: flex; flex-direction: column; gap: 9px; margin-top: auto; padding-top: 36px; }
      .sf-app-lbl { font-size: 10px; font-weight: 700; letter-spacing: 1.4px; text-transform: uppercase; color: rgba(255,255,255,0.2); margin-bottom: 2px; }
      .sf-store { display: inline-flex; align-items: center; gap: 7px; padding: 7px 12px; border-radius: 9px; border: 1px solid rgba(255,255,255,0.1); color: rgba(255,255,255,0.6); text-decoration: none; font-size: 11.5px; font-weight: 600; transition: border-color 0.15s, color 0.15s; }
      .sf-store:hover { border-color: rgba(255,255,255,0.28); color: #fff; }
      .sf-store svg { width: 15px; height: 15px; flex-shrink: 0; }
      .sf-wordmark { font-size: 17vw; font-weight: 900; color: rgba(255,255,255,0.04); text-align: center; line-height: 0.85; letter-spacing: -0.04em; user-select: none; pointer-events: none; padding: 4px 0 0; font-family: 'Inter', sans-serif; }
      .sf-bar { display: flex; justify-content: space-between; align-items: center; padding: 18px 0 32px; border-top: 1px solid rgba(255,255,255,0.05); }
      .sf-bar-l { display: flex; align-items: center; gap: 2px; }
      .sf-copy { font-size: 12px; color: rgba(255,255,255,0.2); }
      .sf-cookies { font-size: 12px; color: rgba(255,255,255,0.2); text-decoration: none; padding: 0 14px; transition: color 0.15s; }
      .sf-cookies:hover { color: rgba(255,255,255,0.5); }
      .sf-socials { display: flex; align-items: center; gap: 2px; }
      .sf-soc { width: 34px; height: 34px; border-radius: 8px; display: flex; align-items: center; justify-content: center; color: rgba(255,255,255,0.3); text-decoration: none; transition: color 0.15s, background 0.15s; }
      .sf-soc:hover { color: rgba(255,255,255,0.75); background: rgba(255,255,255,0.06); }
      .sf-soc svg { width: 15px; height: 15px; }

      /* ── Responsive footer ── */
      @media (max-width: 900px) {
        .sf-top { flex-direction: column; gap: 40px; padding: 52px 0 36px; }
        .sf-brand { width: 100%; flex-direction: row; align-items: center; justify-content: space-between; }
        .sf-app { flex-direction: row; flex-wrap: wrap; margin-top: 0; padding-top: 0; }
        .sf-cols { grid-template-columns: repeat(3, 1fr); }
        .sf-wordmark { font-size: 22vw; }
      }
      @media (max-width: 560px) {
        .sf-inner { padding: 0 20px; }
        .sf-cols { grid-template-columns: repeat(2, 1fr); }
        .sf-bar { flex-direction: column; align-items: flex-start; gap: 16px; }
        .sf-wordmark { font-size: 28vw; }
      }
    `;
    document.head.appendChild(style);
  }

  /* ── 2. Footer HTML ──────────────────────────────────────────── */
  const html = `
  <footer class="sf">
    <div class="sf-inner">

      <div class="sf-top">
        <!-- Brand + App store -->
        <div class="sf-brand">
          <svg width="160" height="25" viewBox="0 0 381 60" fill="none" xmlns="http://www.w3.org/2000/svg" style="opacity:0.45">
            <g clip-path="url(#clip0_footer_logo)">
              <path d="M53.6348 23.93C47.443 22.4839 40.4404 22.0233 42.1357 10.7215L54.6576 14.2309L58.9421 15.2717C58.7302 6.79767 51.8013 0 43.2783 0H15.5993C6.97502 0 0 6.9911 0 15.5941V28.7013C0 33.1133 2.368 34.3291 5.33492 35.02H5.31649C11.5083 36.4753 18.511 36.945 16.8156 48.2376L4.29374 44.7283L0.00921403 43.6967C0.184281 52.1431 7.08559 58.95 15.5993 58.95H43.3704C51.9763 58.95 58.9698 51.9589 58.9698 43.3559V30.2395C58.9698 25.8551 56.5925 24.6116 53.6348 23.93ZM29.4757 47.3165C26.7299 39.0636 20.1971 32.3212 11.6373 29.475C20.1971 26.6288 26.7299 19.9048 29.4757 11.6518C32.2307 19.9048 38.7542 26.638 47.3232 29.4842C38.7542 32.3396 32.2307 39.0636 29.4757 47.3165Z" fill="white"/>
              <path d="M0.00921403 43.7001H0V43.3777C0 43.4883 0 43.5896 0.00921403 43.7001Z" fill="white"/>
              <path d="M224.776 8.60241C224.776 5.86677 226.923 3.7851 229.651 3.7851C232.378 3.7851 234.525 5.86677 234.525 8.60241C234.525 11.3381 232.378 13.4197 229.651 13.4197C226.923 13.4197 224.776 11.3381 224.776 8.60241Z" fill="white"/>
              <path d="M233.502 17.6951H225.781V48.0082H233.502V17.6951Z" fill="white"/>
              <path d="M239.316 28.7551V48.0151H247.038V31.2604C247.038 22.1692 260.767 22.1692 260.767 31.2604V48.0151H268.488V28.7551C268.488 13.0873 239.298 13.0873 239.298 28.7551H239.316Z" fill="white"/>
              <path d="M122.132 20.4875C114.199 13.9017 96.8027 16.6558 96.8027 28.7405V48.0005H104.524V31.2459C104.524 22.1547 118.253 22.1547 118.253 31.2459V48.0005H125.974V31.2459C125.974 22.1547 139.703 22.1547 139.703 31.2459V48.0005H147.425V28.7405C147.425 16.6558 130.029 13.9017 122.095 20.4875H122.132Z" fill="white"/>
              <path d="M288.178 16.9631C278.9 16.9631 271.888 23.7976 271.888 32.8335C271.888 41.8694 278.909 48.7039 288.298 48.7039C295.448 48.7039 301.299 44.8446 303.759 39.1338H295.181C293.734 40.8194 291.339 41.98 288.473 41.98C284.317 41.98 281.157 39.4285 280.162 35.5139H304.229C304.395 34.7402 304.469 33.7914 304.469 32.9625C304.469 23.8068 297.447 16.9723 288.178 16.9723V16.9631ZM280.217 29.8584C281.286 26.1095 284.262 23.6686 288.178 23.6686C292.094 23.6686 295.254 26.1648 296.194 29.8584H280.199H280.217Z" fill="white"/>
              <path d="M212.669 21.1224C210.228 18.5157 206.846 16.9683 202.746 16.9683C194.361 16.9683 188.003 23.508 188.003 32.0742C188.003 40.6404 194.361 47.1801 202.82 47.1801C206.865 47.1801 210.246 45.6327 212.688 43.0812V45.0984C212.688 50.1552 209.656 53.1856 204.893 53.1856C201.806 53.1856 199.134 51.8961 198.001 49.8144H189.874C191.32 56.0502 197.236 60.0017 204.828 60.0017C214.162 60.0017 220.409 53.9409 220.409 44.73V17.6867H212.688V21.1224H212.669ZM204.358 39.9587C199.539 39.9587 195.974 36.5783 195.974 32.0558C195.974 27.5332 199.539 24.2081 204.358 24.2081C209.177 24.2081 212.688 27.5885 212.688 32.0558C212.688 36.5231 209.067 39.9587 204.358 39.9587Z" fill="white"/>
              <path d="M381 25.1268V17.6844H374.136V8.62085H366.414V17.6844H359.596C352.299 17.6844 345.01 21.5991 345.01 29.4283V48.016H352.732V31.9337C352.732 27.3835 356.168 25.136 359.596 25.136H366.414V36.6037C366.414 44.4329 373.712 48.3476 381 48.3476V40.9328C377.563 40.9328 374.136 38.6577 374.136 34.1075V25.136H381V25.1268Z" fill="white"/>
              <path d="M176.163 17.6869V21.2515C176.108 21.1778 176.08 21.1502C167.336 11.6629 151.497 19.7225 151.479 32.8296C151.479 45.9368 167.327 53.9779 176.08 44.5091C176.108 44.4815 176.136 44.4354 176.163 44.4078V47.9724H183.885V17.6869H176.163ZM167.779 41.2024C163.015 41.2024 159.449 37.5825 159.449 32.8204C159.449 28.0584 163.015 24.4385 167.779 24.4385C172.542 24.4385 176.163 28.0584 176.163 32.8204C176.163 37.5825 172.598 41.2024 167.779 41.2024Z" fill="white"/>
              <path d="M91.9655 11.0171H84.2441V47.999H91.9655V11.0171Z" fill="white"/>
              <path d="M318.861 8.10272H328.287L343.619 48.0045H334.884L332.046 40.2581H314.862L312.089 48.0045H303.474L318.861 8.10272ZM329.328 32.9078L323.486 16.8899L317.59 32.9078H329.337H329.328Z" fill="white"/>
            </g>
            <defs>
              <clipPath id="clip0_footer_logo">
                <rect width="381" height="60" fill="white"/>
              </clipPath>
            </defs>
          </svg>
          <div class="sf-app">
            <span class="sf-app-lbl">Try Imagine</span>
            <a href="https://app.adjust.com/1a1xymg6" class="sf-store" target="_blank" rel="noopener">
              <svg viewBox="0 0 24 24" fill="currentColor"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/></svg>
              App Store
            </a>
            <a href="https://app.adjust.com/1rx90a0u" class="sf-store" target="_blank" rel="noopener">
              <svg viewBox="0 0 24 24" fill="currentColor"><path d="M3.18 23.75c.33.18.7.26 1.08.22l13.12-7.57-2.82-2.82-11.38 10.17zM.75 1.13C.28 1.63 0 2.39 0 3.36v17.28c0 .97.28 1.73.76 2.22l.12.11 9.68-9.68v-.23L.87 3.02.75 1.13zM20.9 9.61l-2.8-1.62-3.15 3.14 3.15 3.15 2.81-1.62c.8-.46.8-1.21 0-1.67v.62zM4.26.25L17.38 7.82l-2.82 2.82L3.18.47A1.39 1.39 0 014.26.25z"/></svg>
              Google Play
            </a>
          </div>
        </div>

        <!-- Link columns -->
        <div class="sf-cols">
          <div class="sf-col">
            <span class="sf-col-h">Explore</span>
            <ul>
              <li><a href="#">Image</a></li>
              <li><a href="#">Video</a></li>
              <li><a href="#">Music</a></li>
              <li><a href="#">Voice</a></li>
              <li><a href="#">Teams</a></li>
            </ul>
          </div>
          <div class="sf-col">
            <span class="sf-col-h">Tools</span>
            <ul>
              <li><a href="#">AI Image Generator</a></li>
              <li><a href="#">AI Art Generator</a></li>
              <li><a href="#">AI Video Generator</a></li>
              <li><a href="#">AI Music Generator</a></li>
              <li><a href="#">AI Avatar Generator</a></li>
              <li><a href="#">AI Shorts Generator</a></li>
              <li><a href="#">AI Voice Generator</a></li>
            </ul>
          </div>
          <div class="sf-col">
            <span class="sf-col-h">Contact Us</span>
            <ul>
              <li><a href="#">Contact Sales</a></li>
              <li><a href="https://calendly.com/d/cr9s-6pt-mr3/one-on-one-demo-with-an-imagineart-expert" target="_blank" rel="noopener">Book a demo</a></li>
            </ul>
          </div>
          <div class="sf-col">
            <span class="sf-col-h">Community</span>
            <ul>
              <li><a href="https://discord.com/invite/z7kjUyvAbv" target="_blank" rel="noopener">Discord</a></li>
              <li><a href="https://x.com/ImagineArt_X" target="_blank" rel="noopener">Twitter</a></li>
              <li><a href="https://www.instagram.com/imagineartofficial" target="_blank" rel="noopener">Instagram</a></li>
            </ul>
          </div>
          <div class="sf-col">
            <span class="sf-col-h">Trust &amp; Reviews</span>
            <div class="sf-trust">
              <a href="https://trust.imagine.art" class="sf-soc2" target="_blank" rel="noopener">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2L4 6v5c0 5.25 3.5 10.15 8 11.35C16.5 21.15 20 16.25 20 11V6z"/></svg>
                SOC2 Compliant
              </a>
              <a href="https://www.trustpilot.com/review/www.imagine.art" class="sf-tp" target="_blank" rel="noopener">
                <div class="sf-tp-name">
                  <svg viewBox="0 0 24 24" fill="#219653" width="14" height="14"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01z"/></svg>
                  Trustpilot
                </div>
                <div class="sf-tp-stars">
                  <div class="sf-tp-star"><svg viewBox="0 0 12 12"><path d="M6 1l1.2 3.6H11L8.1 6.9l1.1 3.6L6 8.4l-3.2 2.1 1.1-3.6L1 4.6h3.8z" fill="white"/></svg></div>
                  <div class="sf-tp-star"><svg viewBox="0 0 12 12"><path d="M6 1l1.2 3.6H11L8.1 6.9l1.1 3.6L6 8.4l-3.2 2.1 1.1-3.6L1 4.6h3.8z" fill="white"/></svg></div>
                  <div class="sf-tp-star"><svg viewBox="0 0 12 12"><path d="M6 1l1.2 3.6H11L8.1 6.9l1.1 3.6L6 8.4l-3.2 2.1 1.1-3.6L1 4.6h3.8z" fill="white"/></svg></div>
                  <div class="sf-tp-star"><svg viewBox="0 0 12 12"><path d="M6 1l1.2 3.6H11L8.1 6.9l1.1 3.6L6 8.4l-3.2 2.1 1.1-3.6L1 4.6h3.8z" fill="white"/></svg></div>
                  <div class="sf-tp-star"><svg viewBox="0 0 12 12"><path d="M6 1l1.2 3.6H11L8.1 6.9l1.1 3.6L6 8.4l-3.2 2.1 1.1-3.6L1 4.6h3.8z" fill="white"/></svg></div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>

      <!-- Wordmark -->
      <div class="sf-wordmark" aria-hidden="true">imagine</div>

      <!-- Bottom bar -->
      <div class="sf-bar">
        <div class="sf-bar-l">
          <span class="sf-copy">© 2025 Vyro Turkey. All rights reserved.</span>
          <a href="#" class="sf-cookies">Manage Cookie Preferences</a>
        </div>
        <div class="sf-socials">
          <a href="https://www.facebook.com/groups/imagineai" class="sf-soc" target="_blank" rel="noopener" aria-label="Facebook">
            <svg viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
          </a>
          <a href="https://x.com/ImagineArt_X" class="sf-soc" target="_blank" rel="noopener" aria-label="Twitter">
            <svg viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.741l7.432-8.5L2.25 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
          </a>
          <a href="https://discord.com/invite/z7kjUyvAbv" class="sf-soc" target="_blank" rel="noopener" aria-label="Discord">
            <svg viewBox="0 0 24 24" fill="currentColor"><path d="M20.317 4.37a19.791 19.791 0 00-4.885-1.515.074.074 0 00-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 00-5.487 0 12.64 12.64 0 00-.617-1.25.077.077 0 00-.079-.037A19.736 19.736 0 003.677 4.37a.07.07 0 00-.032.027C.533 9.046-.32 13.58.099 18.057c.002.022.015.04.03.05a19.9 19.9 0 005.993 3.03.078.078 0 00.084-.028 14.09 14.09 0 001.226-1.994.076.076 0 00-.041-.106 13.107 13.107 0 01-1.872-.892.077.077 0 01-.008-.128c.126-.094.252-.192.372-.292a.074.074 0 01.077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 01.078.01c.12.1.246.198.373.292a.077.077 0 01-.006.127 12.299 12.299 0 01-1.873.892.077.077 0 00-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 00.084.028 19.839 19.839 0 006.002-3.03.077.077 0 00.032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 00-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/></svg>
          </a>
          <a href="https://www.instagram.com/imagineartofficial" class="sf-soc" target="_blank" rel="noopener" aria-label="Instagram">
            <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
          </a>
          <a href="https://www.youtube.com/@imagineartofficial" class="sf-soc" target="_blank" rel="noopener" aria-label="YouTube">
            <svg viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12z"/></svg>
          </a>
          <a href="https://www.reddit.com/r/ImagineAiArt/" class="sf-soc" target="_blank" rel="noopener" aria-label="Reddit">
            <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm5.01 4.744c.688 0 1.25.561 1.25 1.249a1.25 1.25 0 0 1-2.498.056l-2.597-.547-.8 3.747c1.824.07 3.48.632 4.674 1.488.308-.309.73-.491 1.207-.491.968 0 1.754.786 1.754 1.754 0 .716-.435 1.333-1.01 1.614a3.111 3.111 0 0 1 .042.52c0 2.694-3.13 4.87-7.004 4.87-3.874 0-7.004-2.176-7.004-4.87 0-.183.015-.366.043-.534A1.748 1.748 0 0 1 4.028 12c0-.968.786-1.754 1.754-1.754.463 0 .898.196 1.207.49 1.207-.883 2.878-1.43 4.744-1.487l.885-4.182a.342.342 0 0 1 .14-.197.35.35 0 0 1 .238-.042l2.906.617a1.214 1.214 0 0 1 1.108-.701zM9.25 12C8.561 12 8 12.562 8 13.25c0 .687.561 1.248 1.25 1.248.687 0 1.248-.561 1.248-1.249 0-.688-.561-1.249-1.249-1.249zm5.5 0c-.687 0-1.248.561-1.248 1.25 0 .687.561 1.248 1.249 1.248.688 0 1.249-.561 1.249-1.249 0-.687-.562-1.249-1.25-1.249zm-5.466 3.99a.327.327 0 0 0-.231.094.33.33 0 0 0 0 .463c.842.842 2.484.913 2.961.913.477 0 2.105-.056 2.961-.913a.361.361 0 0 0 .029-.463.33.33 0 0 0-.464 0c-.547.533-1.684.73-2.512.73-.828 0-1.979-.196-2.512-.73a.326.326 0 0 0-.232-.095z"/></svg>
          </a>
        </div>
      </div>

    </div>
  </footer>
  `;

  /* ── 3. Mount into placeholder or append to body ─────────────── */
  const placeholder = document.getElementById('site-footer');
  if (placeholder) {
    placeholder.outerHTML = html;
  } else {
    document.body.insertAdjacentHTML('beforeend', html);
  }
})();
