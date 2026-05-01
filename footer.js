(function () {
  /* ── 1. Inject CSS ─────────────────────────────────────────────── */
  if (!document.getElementById('sf-styles')) {
    const style = document.createElement('style');
    style.id = 'sf-styles';
    style.textContent = `
      .sf {
        background: #070707;
        border-top: 1px solid rgba(255,255,255,0.06);
        font-family: 'Inter', sans-serif;
      }
      .sf-inner {
        max-width: 1240px;
        margin: 0 auto;
        padding: 56px 40px 32px;
      }

      /* ── Top row: logo + columns ── */
      .sf-top {
        display: flex;
        align-items: flex-start;
        justify-content: space-between;
        gap: 48px;
        flex-wrap: wrap;
      }
      .sf-brand {
        display: flex;
        flex-direction: column;
        gap: 32px;
        flex-shrink: 0;
        width: 160px;
      }

      /* ── Link columns ── */
      .sf-cols {
        display: grid;
        grid-template-columns: repeat(5, 1fr);
        gap: 32px;
        flex: 1;
        min-width: 0;
      }
      .sf-col-h {
        font-size: 11px;
        font-weight: 600;
        letter-spacing: 0.5px;
        color: rgba(255,255,255,0.38);
        margin-bottom: 20px;
        display: block;
      }
      .sf-col ul {
        list-style: none;
        display: flex;
        flex-direction: column;
        gap: 12px;
      }
      .sf-col ul li a {
        font-size: 13px;
        color: rgba(255,255,255,0.55);
        text-decoration: none;
        transition: color 0.15s;
        line-height: 1.4;
      }
      .sf-col ul li a:hover { color: rgba(255,255,255,0.9); }

      /* ── Trust block ── */
      .sf-trust { display: flex; flex-direction: column; gap: 16px; }
      .sf-soc2 {
        display: flex; align-items: center; gap: 8px;
        text-decoration: none; font-size: 12px; font-weight: 500;
        color: rgba(255,255,255,0.38); transition: color 0.15s;
      }
      .sf-soc2:hover { color: rgba(255,255,255,0.65); }
      .sf-soc2 svg { width: 22px; height: 22px; flex-shrink: 0; }
      .sf-tp { text-decoration: none; display: flex; flex-direction: column; gap: 8px; }
      .sf-tp-name { display: flex; align-items: center; gap: 5px; font-size: 13px; font-weight: 700; color: rgba(255,255,255,0.55); }
      .sf-tp-stars { display: flex; gap: 2px; margin-top: 2px; }
      .sf-tp-star { width: 18px; height: 18px; background: #219653; display: flex; align-items: center; justify-content: center; }
      .sf-tp-star svg { width: 10px; height: 10px; fill: #fff; }

      /* ── App stores ── */
      .sf-app { display: flex; flex-direction: column; gap: 8px; }
      .sf-app-lbl {
        font-size: 11px; font-weight: 600; letter-spacing: 0.5px;
        color: rgba(255,255,255,0.38); margin-bottom: 4px;
      }
      .sf-store {
        display: inline-flex; align-items: center; gap: 7px;
        padding: 7px 12px; border-radius: 9px;
        border: 1px solid rgba(255,255,255,0.1);
        color: rgba(255,255,255,0.6); text-decoration: none;
        font-size: 11.5px; font-weight: 600;
        transition: border-color 0.15s, color 0.15s;
      }
      .sf-store:hover { border-color: rgba(255,255,255,0.28); color: #fff; }
      .sf-store svg { width: 14px; height: 14px; flex-shrink: 0; }

      /* ── Big wordmark ── */
      .sf-wordmark {
        font-size: 17vw; font-weight: 900;
        color: rgba(255,255,255,0.04);
        text-align: center; line-height: 0.85;
        letter-spacing: -0.04em;
        user-select: none; pointer-events: none;
        padding: 48px 0 0;
        font-family: 'Inter', sans-serif;
        overflow: hidden;
      }

      /* ── Bottom bar ── */
      .sf-bar {
        display: flex; justify-content: space-between; align-items: center;
        padding: 20px 0 8px;
        border-top: 1px solid rgba(255,255,255,0.06);
        flex-wrap: wrap; gap: 12px;
      }
      .sf-bar-l { display: flex; align-items: center; gap: 2px; flex-wrap: wrap; }
      .sf-copy { font-size: 12px; color: rgba(255,255,255,0.25); }
      .sf-cookies {
        font-size: 12px; color: rgba(255,255,255,0.25);
        text-decoration: none; padding: 0 12px;
        transition: color 0.15s; background: none; border: none; cursor: pointer;
      }
      .sf-cookies:hover { color: rgba(255,255,255,0.55); }
      .sf-socials { display: flex; align-items: center; gap: 2px; }
      .sf-soc {
        width: 34px; height: 34px; border-radius: 8px;
        display: flex; align-items: center; justify-content: center;
        color: rgba(255,255,255,0.35); text-decoration: none;
        transition: color 0.15s, background 0.15s;
      }
      .sf-soc:hover { color: rgba(255,255,255,0.8); background: rgba(255,255,255,0.06); }
      .sf-soc svg { width: 15px; height: 15px; }

      /* ── Responsive ── */
      @media (max-width: 1024px) {
        .sf-cols { grid-template-columns: repeat(3, 1fr); }
      }
      @media (max-width: 768px) {
        .sf-inner { padding: 40px 20px 24px; }
        .sf-top { flex-direction: column; gap: 32px; }
        .sf-brand { width: 100%; flex-direction: row; align-items: flex-start; justify-content: space-between; flex-wrap: wrap; gap: 24px; }
        .sf-cols { grid-template-columns: repeat(2, 1fr); }
        .sf-wordmark { font-size: 22vw; }
      }
      @media (max-width: 480px) {
        .sf-cols { grid-template-columns: repeat(2, 1fr); gap: 24px; }
        .sf-bar { flex-direction: column; align-items: flex-start; gap: 16px; }
      }
    `;
    document.head.appendChild(style);
  }

  /* ── 2. Footer HTML ─────────────────────────────────────────────── */
  const BASE = 'https://www.imagine.art';
  const year = new Date().getFullYear();

  const html = `
  <footer class="sf">
    <div class="sf-inner">

      <div class="sf-top">

        <!-- Brand -->
        <div class="sf-brand">
          <!-- Logo (same SVG as navbar) -->
          <svg width="130" height="24" viewBox="0 0 158 29" fill="none" xmlns="http://www.w3.org/2000/svg" style="opacity:0.55">
            <path d="M25.9304 11.5692C22.9368 10.8701 19.5513 10.6474 20.371 5.18344L26.4248 6.88008L28.4962 7.38328C28.3938 3.28641 25.0439 0 20.9234 0H7.54167C3.37215 0 0 3.37992 0 7.53914V13.8759C0 16.009 1.14484 16.5968 2.57923 16.9308H2.57032C5.56382 17.6344 8.94933 17.8615 8.12968 23.321L2.07585 21.6244L0.00445461 21.1256C0.0890924 25.2091 3.4256 28.5 7.54167 28.5H20.9679C25.1285 28.5 28.5096 25.1201 28.5096 20.9609V14.6196C28.5096 12.4999 27.3603 11.8987 25.9304 11.5692ZM14.2503 22.8757C12.9229 18.8857 9.76453 15.626 5.62619 14.25C9.76453 12.874 12.9229 9.6232 14.2503 5.6332C15.5823 9.6232 18.7361 12.8784 22.8789 14.2545C18.7361 15.6349 15.5823 18.8857 14.2503 22.8757Z" fill="white"/>
            <path d="M94.8321 5.44097C94.8321 4.34671 95.6909 3.51405 96.7818 3.51405C97.8728 3.51405 98.7315 4.34671 98.7315 5.44097C98.7315 6.53523 97.8728 7.3679 96.7818 7.3679C95.6909 7.3679 94.8321 6.53523 94.8321 5.44097Z" fill="white"/>
            <path d="M98.3224 9.07802H95.2339V21.2033H98.3224V9.07802Z" fill="white"/>
            <path d="M100.648 13.502V21.2061H103.737V14.5042C103.737 10.8677 109.228 10.8677 109.228 14.5042V21.2061H112.317V13.502C112.317 7.23492 100.641 7.23492 100.641 13.502H100.648Z" fill="white"/>
            <path d="M53.7745 10.195C50.6011 7.56068 43.6427 8.66231 43.6427 13.4962V21.2002H46.7313V14.4984C46.7313 10.8619 52.2228 10.8619 52.2228 14.4984V21.2002H55.3114V14.4984C55.3114 10.8619 60.8029 10.8619 60.8029 14.4984V21.2002H63.8915V13.4962C63.8915 8.66231 56.933 7.56068 53.7597 10.195H53.7745Z" fill="white"/>
            <path d="M120.193 8.78523C116.481 8.78523 113.677 11.519 113.677 15.1334C113.677 18.7478 116.485 21.4816 120.241 21.4816C123.101 21.4816 125.441 19.9378 126.425 17.6535H122.994C122.415 18.3278 121.457 18.792 120.311 18.792C118.649 18.792 117.384 17.7714 116.986 16.2056H126.613C126.68 15.8961 126.709 15.5166 126.709 15.185C126.709 11.5227 123.901 8.78892 120.193 8.78892V8.78523ZM117.008 13.9434C117.436 12.4438 118.626 11.4675 120.193 11.4675C121.759 11.4675 123.023 12.4659 123.399 13.9434H117.001H117.008Z" fill="white"/>
            <path d="M89.9893 10.449C89.0126 9.40628 87.66 8.7873 86.0199 8.7873C82.666 8.7873 80.1229 11.4032 80.1229 14.8297C80.1229 18.2561 82.6659 20.872 86.0493 20.872C87.6673 20.872 89.0199 20.2531 89.9966 19.2325V20.0394C89.9966 22.0621 88.7841 23.2743 86.8786 23.2743C85.6439 23.2743 84.5751 22.7584 84.1218 21.9258H80.8711C81.4497 24.4201 83.8159 26.0007 86.8528 26.0007C90.5863 26.0007 93.0852 23.5764 93.0852 19.892V9.07469H89.9966V10.449H89.9893Z" fill="white"/>
            <path d="M157.322 12.0507V9.07376H154.576V5.44834H151.487V9.07376H148.76C145.841 9.07376 142.926 10.6396 142.926 13.7713V21.2064H146.014V14.7735C146.014 12.9534 147.389 12.0544 148.76 12.0544H151.487V16.6415C151.487 19.7732 154.406 21.339 157.322 21.339V18.3731C155.947 18.3731 154.576 17.4631 154.576 15.643V12.0544H157.322V12.0507Z" fill="white"/>
            <path d="M75.3869 9.07475V10.5006C71.8561 6.66517 65.5205 9.889 65.5131 15.1319C65.5131 20.3747 71.8524 23.5912 75.3537 19.8036C75.3648 19.7926 75.3758 19.7742 75.3869 19.7631V21.189H78.4754V9.07475H75.3869ZM72.033 18.481C70.1275 18.481 68.7012 17.033 68.7012 15.1282C68.7012 13.2234 70.1275 11.7754 72.033 11.7754C73.9384 11.7754 75.3869 13.2234 75.3869 15.1282C75.3869 17.033 73.9605 18.481 72.033 18.481Z" fill="white"/>
            <path d="M41.7078 6.40685H38.6192V21.1996H41.7078V6.40685Z" fill="white"/>
            <path d="M132.466 5.2411H136.236L142.369 21.2018H138.875L137.74 18.1032H130.866L129.757 21.2018H126.311L132.466 5.2411ZM136.653 15.1631L134.316 8.75599L131.957 15.1631H136.656H136.653Z" fill="white"/>
          </svg>

          <!-- App stores -->
          <div class="sf-app">
            <span class="sf-app-lbl">Try Imagine Mobile</span>
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

          <!-- Explore -->
          <div class="sf-col">
            <span class="sf-col-h">Explore</span>
            <ul>
              <li><a href="${BASE}/ai-image-generator">Image</a></li>
              <li><a href="${BASE}/ai-video-generator">Video</a></li>
              <li><a href="${BASE}/music-studio">Music</a></li>
              <li><a href="${BASE}/voice-studio">Voice</a></li>
              <li><a href="${BASE}/teams-plan">Teams</a></li>
            </ul>
          </div>

          <!-- Tools -->
          <div class="sf-col">
            <span class="sf-col-h">Tools</span>
            <ul>
              <li><a href="${BASE}/ai-image-generator">AI Image Generator</a></li>
              <li><a href="${BASE}/ai-art-generator">AI Art Generator</a></li>
              <li><a href="${BASE}/ai-video-generator">AI Video Generator</a></li>
              <li><a href="${BASE}/music-studio">AI Music Generator</a></li>
              <li><a href="${BASE}/avatars">AI Avatar Generator</a></li>
              <li><a href="${BASE}/shorts">AI Shorts Generator</a></li>
              <li><a href="${BASE}/voice-studio">AI Voice Generator</a></li>
            </ul>
          </div>

          <!-- Contact Us -->
          <div class="sf-col">
            <span class="sf-col-h">Contact Us</span>
            <ul>
              <li><a href="${BASE}/teams-plan/contact-us">Contact Sales</a></li>
              <li><a href="https://calendly.com/d/cr9s-6pt-mr3/one-on-one-demo-with-an-imagineart-expert" target="_blank" rel="noopener">Book a demo</a></li>
            </ul>
          </div>

          <!-- Community -->
          <div class="sf-col">
            <span class="sf-col-h">Community</span>
            <ul>
              <li><a href="https://discord.com/invite/z7kjUyvAbv" target="_blank" rel="noopener">Discord</a></li>
              <li><a href="https://x.com/ImagineArt_X" target="_blank" rel="noopener">Twitter</a></li>
              <li><a href="https://www.instagram.com/imagineartofficial" target="_blank" rel="noopener">Instagram</a></li>
            </ul>
          </div>

          <!-- Trust and Reviews -->
          <div class="sf-col">
            <span class="sf-col-h">Trust and Reviews</span>
            <div class="sf-trust">
              <a href="https://trust.imagine.art" target="_blank" rel="noopener" class="sf-soc2">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2L4 6v5c0 5.25 3.5 10.15 8 11.35C16.5 21.15 20 16.25 20 11V6z"/></svg>
                SOC 2 Compliant
              </a>
              <a href="https://www.trustpilot.com/review/www.imagine.art" target="_blank" rel="noopener" class="sf-tp">
                <span class="sf-tp-name">
                  <svg viewBox="0 0 24 24" fill="#219653" width="14" height="14"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01z"/></svg>
                  Trustpilot
                </span>
                <span class="sf-tp-stars">
                  <span class="sf-tp-star"><svg viewBox="0 0 12 12"><path d="M6 1l1.2 3.6H11L8.1 6.9l1.1 3.6L6 8.4l-3.2 2.1 1.1-3.6L1 4.6h3.8z" fill="white"/></svg></span>
                  <span class="sf-tp-star"><svg viewBox="0 0 12 12"><path d="M6 1l1.2 3.6H11L8.1 6.9l1.1 3.6L6 8.4l-3.2 2.1 1.1-3.6L1 4.6h3.8z" fill="white"/></svg></span>
                  <span class="sf-tp-star"><svg viewBox="0 0 12 12"><path d="M6 1l1.2 3.6H11L8.1 6.9l1.1 3.6L6 8.4l-3.2 2.1 1.1-3.6L1 4.6h3.8z" fill="white"/></svg></span>
                  <span class="sf-tp-star"><svg viewBox="0 0 12 12"><path d="M6 1l1.2 3.6H11L8.1 6.9l1.1 3.6L6 8.4l-3.2 2.1 1.1-3.6L1 4.6h3.8z" fill="white"/></svg></span>
                  <span class="sf-tp-star"><svg viewBox="0 0 12 12"><path d="M6 1l1.2 3.6H11L8.1 6.9l1.1 3.6L6 8.4l-3.2 2.1 1.1-3.6L1 4.6h3.8z" fill="white"/></svg></span>
                </span>
              </a>
            </div>
          </div>

        </div>
      </div>

      <!-- Big wordmark -->
      <div class="sf-wordmark">ImagineArt</div>

      <!-- Bottom bar -->
      <div class="sf-bar">
        <div class="sf-bar-l">
          <span class="sf-copy">© ${year} <strong style="font-weight:600;">Vyro Turkey</strong>. All rights reserved.</span>
          <button class="sf-cookies" onclick="void(0)">Manage Cookie Preferences</button>
        </div>
        <div class="sf-socials">
          <a href="https://www.facebook.com/groups/imagineai" class="sf-soc" target="_blank" rel="noopener" title="Facebook">
            <svg viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
          </a>
          <a href="https://x.com/ImagineArt_X" class="sf-soc" target="_blank" rel="noopener" title="Twitter / X">
            <svg viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.741l7.432-8.5L2.25 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
          </a>
          <a href="https://discord.com/invite/z7kjUyvAbv" class="sf-soc" target="_blank" rel="noopener" title="Discord">
            <svg viewBox="0 0 24 24" fill="currentColor"><path d="M20.317 4.37a19.791 19.791 0 00-4.885-1.515.074.074 0 00-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 00-5.487 0 12.64 12.64 0 00-.617-1.25.077.077 0 00-.079-.037A19.736 19.736 0 003.677 4.37a.07.07 0 00-.032.027C.533 9.046-.32 13.58.099 18.057c.002.022.015.04.03.05a19.9 19.9 0 005.993 3.03.078.078 0 00.084-.028 14.09 14.09 0 001.226-1.994.076.076 0 00-.041-.106 13.107 13.107 0 01-1.872-.892.077.077 0 01-.008-.128c.126-.094.252-.192.372-.292a.074.074 0 01.077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 01.078.01c.12.1.246.198.373.292a.077.077 0 01-.006.127 12.299 12.299 0 01-1.873.892.077.077 0 00-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 00.084.028 19.839 19.839 0 006.002-3.03.077.077 0 00.032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 00-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/></svg>
          </a>
          <a href="https://www.instagram.com/imagineartofficial" class="sf-soc" target="_blank" rel="noopener" title="Instagram">
            <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
          </a>
          <a href="https://www.youtube.com/@imagineartofficial" class="sf-soc" target="_blank" rel="noopener" title="YouTube">
            <svg viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12z"/></svg>
          </a>
          <a href="https://www.reddit.com/r/ImagineAiArt/" class="sf-soc" target="_blank" rel="noopener" title="Reddit">
            <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm5.01 4.744c.688 0 1.25.561 1.25 1.249a1.25 1.25 0 0 1-2.498.056l-2.597-.547-.8 3.747c1.824.07 3.48.632 4.674 1.488.308-.309.73-.491 1.207-.491.968 0 1.754.786 1.754 1.754 0 .716-.435 1.333-1.01 1.614a3.111 3.111 0 0 1 .042.52c0 2.694-3.13 4.87-7.004 4.87-3.874 0-7.004-2.176-7.004-4.87 0-.183.015-.366.043-.534A1.748 1.748 0 0 1 4.028 12c0-.968.786-1.754 1.754-1.754.463 0 .898.196 1.207.49 1.207-.883 2.878-1.43 4.744-1.487l.885-4.182a.342.342 0 0 1 .14-.197.35.35 0 0 1 .238-.042l2.906.617a1.214 1.214 0 0 1 1.108-.701zM9.25 12C8.561 12 8 12.562 8 13.25c0 .687.561 1.248 1.25 1.248.687 0 1.248-.561 1.248-1.249 0-.688-.561-1.249-1.249-1.249zm5.5 0c-.687 0-1.248.561-1.248 1.25 0 .687.561 1.248 1.249 1.248.688 0 1.249-.561 1.249-1.249 0-.687-.562-1.249-1.25-1.249zm-5.466 3.99a.327.327 0 0 0-.231.094.33.33 0 0 0 0 .463c.842.842 2.484.913 2.961.913.477 0 2.105-.056 2.961-.913a.361.361 0 0 0 .029-.463.33.33 0 0 0-.464 0c-.547.533-1.684.73-2.512.73-.828 0-1.979-.196-2.512-.73a.326.326 0 0 0-.232-.095z"/></svg>
          </a>
        </div>
      </div>

    </div>
  </footer>
  `;

  /* ── 3. Inject into #site-footer ────────────────────────────────── */
  const target = document.getElementById('site-footer');
  if (target) {
    target.innerHTML = html;
  }
})();
