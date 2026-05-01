/**
 * navbar.js — Shared ImagineArt navbar component
 * Usage: <header id="site-nav"></header>  then  <script src="navbar.js"></script>
 */
(function () {
  // ── Inject CSS ──────────────────────────────────────────
  var style = document.createElement('style');
  style.textContent = `
  /* ─── ImagineArt Shared Navbar CSS ─────────────────────── */
  .navbar {
    width: 100%;
    padding: 16px 0;
    position: fixed;
    top: 0; left: 0; right: 0; z-index: 100;
    transition: padding 0.3s ease;
  }
  .navbar-inner {
    width: 100%;
    max-width: 100%;
    margin: 0 auto;
    padding: 10px clamp(40px, 12vw, 220px);
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-radius: 16px;
    background: transparent;
    border: 1px solid transparent;
    backdrop-filter: none;
    -webkit-backdrop-filter: none;
    transition: background 0.5s cubic-bezier(0.4,0,0.2,1),
                border-color 0.5s cubic-bezier(0.4,0,0.2,1),
                box-shadow 0.5s cubic-bezier(0.4,0,0.2,1),
                backdrop-filter 0.5s cubic-bezier(0.4,0,0.2,1),
                max-width 0.55s cubic-bezier(0.4,0,0.2,1),
                padding 0.55s cubic-bezier(0.4,0,0.2,1);
  }
  .navbar.scrolled { padding: 10px 0; }
  .navbar.scrolled .navbar-inner {
    max-width: 1240px;
    margin: 0 auto;
    padding: 10px 40px;
    background: rgba(255,255,255,0.82);
    backdrop-filter: saturate(200%) blur(24px);
    -webkit-backdrop-filter: saturate(200%) blur(24px);
    border-color: rgba(255,255,255,0.9);
    box-shadow: 0 0 0 1px rgba(0,0,0,0.04), 0 4px 6px rgba(0,0,0,0.03), 0 12px 48px rgba(0,0,0,0.1);
  }
  .logo { display: flex; align-items: center; text-decoration: none; flex-shrink: 0; overflow: visible; line-height: 0; }
  .logo-white { display: block; }
  .logo-dark { display: none; }
  .navbar.scrolled .logo-white { display: none; }
  .navbar.scrolled .logo-dark { display: block; }
  .nav-links { display: flex; align-items: center; gap: 2px; }
  .nav-link { display: flex; align-items: center; justify-content: center; padding: 6px 14px; border-radius: 8px; font-size: 14px; font-weight: 500; letter-spacing: 0.14px; color: rgba(15,15,15,0.75); text-decoration: none; white-space: nowrap; transition: color 0.15s, background 0.15s; }
  .nav-link:hover { color: #0f0f0f; background: rgba(15,15,15,0.05); }
  .nav-dropdown { position: relative; }
  .nav-dropdown-trigger { cursor: pointer; border: none; background: none; font-family: inherit; gap: 5px; }
  .nav-dropdown-trigger svg { transition: transform 0.2s ease; flex-shrink: 0; }
  .nav-dropdown:hover .nav-dropdown-trigger svg { transform: rotate(180deg); }
  .nav-dropdown-menu { position: absolute; top: calc(100% + 10px); left: 50%; transform: translateX(-50%) translateY(-6px); background: #fff; border: 1px solid rgba(0,0,0,0.08); border-radius: 14px; box-shadow: 0 8px 40px rgba(0,0,0,0.12), 0 2px 8px rgba(0,0,0,0.06); padding: 6px; min-width: 200px; opacity: 0; pointer-events: none; transition: opacity 0.18s ease, transform 0.18s ease; z-index: 200; }
  .nav-dropdown-menu::before { content: ''; position: absolute; top: -10px; left: 0; right: 0; height: 10px; }
  .nav-dropdown:hover .nav-dropdown-menu { opacity: 1; pointer-events: auto; transform: translateX(-50%) translateY(0); }
  .nav-dropdown-item { display: flex; align-items: center; padding: 9px 14px; border-radius: 8px; font-size: 13.5px; font-weight: 500; color: #0f0f0f; text-decoration: none; transition: background 0.12s, color 0.12s; white-space: nowrap; }
  .nav-dropdown-item:hover { background: #f0f0f0; color: #0f0f0f; }
  .nav-dropdown-item.current { color: #0f0f0f; background: #f0f0f0; }
  .navbar:not(.scrolled) .nav-dropdown-trigger { color: rgba(255,255,255,0.75); }
  .navbar:not(.scrolled) .nav-dropdown-trigger:hover { color: #fff; background: rgba(255,255,255,0.08); }
  .nav-actions { display: flex; align-items: center; gap: 4px; flex-shrink: 0; }
  .navbar-btn { display: inline-flex; align-items: center; justify-content: center; gap: 6px; height: 34px; padding: 0 14px; border-radius: 9px; font-size: 13.5px; font-weight: 500; letter-spacing: 0.14px; white-space: nowrap; cursor: pointer; border: none; text-decoration: none; transition: background 0.2s ease, transform 0.15s ease, box-shadow 0.2s ease, color 0.15s; font-family: inherit; }
  .navbar-btn-ghost { background: transparent; color: rgba(15,15,15,0.7); }
  .navbar-btn-ghost:hover { background: rgba(15,15,15,0.06); color: #0f0f0f; }
  .navbar:not(.scrolled) .navbar-btn-ghost { color: rgba(255,255,255,0.75); }
  .navbar:not(.scrolled) .navbar-btn-ghost:hover { color: #fff; background: rgba(255,255,255,0.08); }
  .navbar-btn-dark { background: rgba(255,255,255,0.1); color: #fff; border: 1px solid rgba(255,255,255,0.25); box-shadow: none; }
  .navbar-btn-dark:hover { background: rgba(255,255,255,0.18); }
  .navbar.scrolled .navbar-btn-dark { background: #111; border-color: transparent; color: #fff; box-shadow: 0 1px 2px rgba(0,0,0,0.15); }
  .navbar.scrolled .navbar-btn-dark:hover { background: #222; transform: translateY(-1px); box-shadow: 0 4px 12px rgba(0,0,0,0.2); }
  .navbar:not(.scrolled) .nav-link { color: rgba(255,255,255,0.75); }
  .navbar:not(.scrolled) .nav-link:hover { color: #fff; background: rgba(255,255,255,0.08); }
  .navbar.scrolled .nav-link { color: rgba(15,15,15,0.75); }
  .navbar.scrolled .nav-link:hover { color: #0f0f0f; background: rgba(15,15,15,0.05); }

  /* ─── Hamburger ───────────────────────────────────────── */
  .nav-hamburger {
    display: none;
    align-items: center; justify-content: center;
    width: 38px; height: 38px; border-radius: 10px;
    background: transparent; border: none; cursor: pointer;
    color: #fff; transition: background 0.15s; padding: 0; flex-shrink: 0;
  }
  .nav-hamburger:hover { background: rgba(255,255,255,0.1); }
  .navbar.scrolled .nav-hamburger { color: #0f0f0f; }
  .navbar.scrolled .nav-hamburger:hover { background: rgba(0,0,0,0.06); }
  .nav-hamburger .bar {
    display: block; width: 18px; height: 1.5px;
    background: currentColor; border-radius: 2px;
    transition: transform 0.25s ease, opacity 0.2s ease;
    transform-origin: center;
  }
  .nav-hamburger .bars { display: flex; flex-direction: column; gap: 5px; }
  .nav-hamburger.open .bar:nth-child(1) { transform: translateY(3.25px) rotate(45deg); }
  .nav-hamburger.open .bar:nth-child(2) { transform: translateY(-3.25px) rotate(-45deg); }

  /* ─── Mobile menu — full-screen dark overlay ─────────── */
  .nav-mobile-menu {
    display: none;
    position: fixed; inset: 0; z-index: 101;
    background: #0a0a0a;
    flex-direction: column;
  }
  .nav-mobile-menu.open {
    display: flex;
  }
  /* Top bar inside overlay */
  .nav-mobile-topbar {
    display: flex; align-items: center; justify-content: space-between;
    padding: 18px 24px; flex-shrink: 0;
  }
  .nav-mobile-close {
    background: none; border: none; cursor: pointer;
    color: rgba(255,255,255,0.6); padding: 4px;
    display: flex; align-items: center; justify-content: center;
    transition: color 0.15s;
  }
  .nav-mobile-close:hover { color: #fff; }
  /* Centered links */
  .nav-mobile-inner {
    display: flex; flex-direction: column;
    align-items: center; gap: 4px;
    padding-top: 32px;
  }
  .nav-mobile-link {
    display: block; text-align: center;
    padding: 10px 32px; border-radius: 10px;
    font-size: 22px; font-weight: 300; letter-spacing: -0.2px;
    color: rgba(255,255,255,0.55); text-decoration: none;
    transition: color 0.15s, background 0.15s;
  }
  .nav-mobile-link:hover { color: #fff; background: rgba(255,255,255,0.05); }
  /* Bottom CTA */
  .nav-mobile-divider {
    display: block;
    height: 1px; background: rgba(255,255,255,0.08);
    margin: 16px 24px;
  }
  .nav-mobile-actions {
    padding: 0 24px 8px; display: flex; justify-content: center;
  }
  .nav-mobile-actions .navbar-btn {
    height: 44px; padding: 0 32px; font-size: 14px;
    font-weight: 500; border-radius: 14px;
  }
  .nav-mobile-actions .navbar-btn-dark { background: #fff; color: #0f0f0f; border: none; }
  .nav-mobile-actions .navbar-btn-dark:hover { background: #e8e8e8; }

  /* ─── Responsive breakpoint ──────────────────────────── */
  @media (max-width: 820px) {
    .nav-links { display: none; }
    .nav-actions { display: none; }
    .nav-hamburger { display: flex; }
    .navbar-inner { padding: 10px 20px; }
    .navbar.scrolled { padding: 8px 0; }
  }
`;
  document.head.appendChild(style);

  // ── Build HTML ──────────────────────────────────────────
  var path = window.location.pathname;
  var isArch = path.indexOf('architecture') !== -1;
  var isEcom = path.indexOf('ecommerce') !== -1;
  var isMkt  = path.indexOf('marketing') !== -1;
  var logoHref = (isArch || isEcom || isMkt) ? './index.html' : '/';
  var archCurrent = isArch ? ' current' : '';
  var ecomCurrent = isEcom ? ' current' : '';
  var mktCurrent  = isMkt  ? ' current' : '';

  var html = `
  <header class="navbar" id="site-navbar">
    <div class="navbar-inner">
      <a href="${logoHref}" class="logo">
        <svg class="logo-white" width="158" height="39" viewBox="0 0 158 39" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="ImagineArt Workflows">
<path d="M25.9304 11.5692C22.9368 10.8701 19.5513 10.6474 20.371 5.18344L26.4248 6.88008L28.4962 7.38328C28.3938 3.28641 25.0439 0 20.9234 0H7.54167C3.37215 0 0 3.37992 0 7.53914V13.8759C0 16.009 1.14484 16.5968 2.57923 16.9308H2.57032C5.56382 17.6344 8.94933 17.8615 8.12968 23.321L2.07585 21.6244L0.00445461 21.1256C0.0890924 25.2091 3.4256 28.5 7.54167 28.5H20.9679C25.1285 28.5 28.5096 25.1201 28.5096 20.9609V14.6196C28.5096 12.4999 27.3603 11.8987 25.9304 11.5692ZM14.2503 22.8757C12.9229 18.8857 9.76453 15.626 5.62619 14.25C9.76453 12.874 12.9229 9.6232 14.2503 5.6332C15.5823 9.6232 18.7361 12.8784 22.8789 14.2545C18.7361 15.6349 15.5823 18.8857 14.2503 22.8757Z" fill="url(#paint0_linear_22497_22508)"/>
<path d="M0.00445461 21.1273H0V20.9714C0 21.0249 -9.31323e-09 21.0739 0.00445461 21.1273Z" fill="url(#paint1_linear_22497_22508)"/>
<path d="M94.8321 5.44097C94.8321 4.34671 95.6909 3.51405 96.7818 3.51405C97.8728 3.51405 98.7315 4.34671 98.7315 5.44097C98.7315 6.53523 97.8728 7.3679 96.7818 7.3679C95.6909 7.3679 94.8321 6.53523 94.8321 5.44097Z" fill="url(#paint2_linear_22497_22508)"/>
<path d="M98.3224 9.07802H95.2339V21.2033H98.3224V9.07802Z" fill="url(#paint3_linear_22497_22508)"/>
<path d="M100.648 13.502V21.2061H103.737V14.5042C103.737 10.8677 109.228 10.8677 109.228 14.5042V21.2061H112.317V13.502C112.317 7.23492 100.641 7.23492 100.641 13.502H100.648Z" fill="url(#paint4_linear_22497_22508)"/>
<path d="M53.7745 10.195C50.6011 7.56068 43.6427 8.66231 43.6427 13.4962V21.2002H46.7313V14.4984C46.7313 10.8619 52.2228 10.8619 52.2228 14.4984V21.2002H55.3114V14.4984C55.3114 10.8619 60.8029 10.8619 60.8029 14.4984V21.2002H63.8915V13.4962C63.8915 8.66231 56.933 7.56068 53.7597 10.195H53.7745Z" fill="url(#paint5_linear_22497_22508)"/>
<path d="M120.193 8.78523C116.481 8.78523 113.677 11.519 113.677 15.1334C113.677 18.7478 116.485 21.4816 120.241 21.4816C123.101 21.4816 125.441 19.9378 126.425 17.6535H122.994C122.415 18.3278 121.457 18.792 120.311 18.792C118.649 18.792 117.384 17.7714 116.986 16.2056H126.613C126.68 15.8961 126.709 15.5166 126.709 15.185C126.709 11.5227 123.901 8.78892 120.193 8.78892V8.78155V8.78523ZM117.008 13.9434C117.436 12.4438 118.626 11.4675 120.193 11.4675C121.759 11.4675 123.023 12.4659 123.399 13.9434H117.001H117.008Z" fill="url(#paint6_linear_22497_22508)"/>
<path d="M89.9893 10.449C89.0126 9.40628 87.66 8.7873 86.0199 8.7873C82.666 8.7873 80.1229 11.4032 80.1229 14.8297C80.1229 18.2561 82.6659 20.872 86.0493 20.872C87.6673 20.872 89.0199 20.2531 89.9966 19.2325V20.0394C89.9966 22.0621 88.7841 23.2743 86.8786 23.2743C85.6439 23.2743 84.5751 22.7584 84.1218 21.9258H80.8711C81.4497 24.4201 83.8159 26.0007 86.8528 26.0007C90.5863 26.0007 93.0852 23.5764 93.0852 19.892V9.07469H89.9966V10.4563V10.449H89.9893ZM86.6648 17.9835C84.7373 17.9835 83.3109 16.6313 83.3109 14.8223C83.3109 13.0133 84.7373 11.6832 86.6648 11.6832C88.5924 11.6832 89.9966 13.0354 89.9966 14.8223C89.9966 16.6092 88.5482 17.9835 86.6648 17.9835Z" fill="url(#paint7_linear_22497_22508)"/>
<path d="M157.322 12.0507V9.07376H154.576V5.44834H151.487V9.07376H148.76C145.841 9.07376 142.926 10.6396 142.926 13.7713V21.2064H146.014V14.7735C146.014 12.9534 147.389 12.0544 148.76 12.0544H151.487V16.6415C151.487 19.7732 154.406 21.339 157.322 21.339V18.3731C155.947 18.3731 154.576 17.4631 154.576 15.643V12.0544H157.322V12.0434V12.0507Z" fill="url(#paint8_linear_22497_22508)"/>
<path d="M75.3869 9.07475V10.5006C75.3869 10.5006 75.3648 10.4711 75.3537 10.4601C71.8561 6.66517 65.5205 9.889 65.5131 15.1319C65.5131 20.3747 71.8524 23.5912 75.3537 19.8036C75.3648 19.7926 75.3758 19.7742 75.3869 19.7631V21.189H78.4754V9.07475H75.3869ZM72.033 18.481C70.1275 18.481 68.7012 17.033 68.7012 15.1282C68.7012 13.2234 70.1275 11.7754 72.033 11.7754C73.9384 11.7754 75.3869 13.2234 75.3869 15.1282C75.3869 17.033 73.9605 18.481 72.033 18.481Z" fill="url(#paint9_linear_22497_22508)"/>
<path d="M41.7078 6.40685H38.6192V21.1996H41.7078V6.40685Z" fill="url(#paint10_linear_22497_22508)"/>
<path d="M132.466 5.2411H136.236L142.369 21.2018H138.875L137.74 18.1032H130.866L129.757 21.2018H126.311L132.466 5.2411ZM136.653 15.1631L134.316 8.75599L131.957 15.1631H136.656H136.653Z" fill="url(#paint11_linear_22497_22508)"/>
<path d="M94.0311 36L91.7031 27.408H93.1551L94.6191 33.144L94.7751 33.876H94.8171L95.0031 33.144L96.7491 27.408H98.0691L99.7671 33.144L99.9531 33.87H99.9891L100.157 33.144L101.609 27.408H103.007L100.703 36H99.3651L97.5771 30.03L97.3971 29.37H97.3611L97.1751 30.024L95.3451 36H94.0311ZM107.111 36.204C106.095 36.204 105.269 35.886 104.633 35.25C104.001 34.614 103.685 33.812 103.685 32.844C103.685 31.864 104.005 31.056 104.645 30.42C105.285 29.784 106.107 29.466 107.111 29.466C108.119 29.466 108.943 29.788 109.583 30.432C110.223 31.076 110.543 31.88 110.543 32.844C110.543 33.804 110.227 34.604 109.595 35.244C108.963 35.884 108.135 36.204 107.111 36.204ZM107.111 34.986C107.699 34.986 108.183 34.788 108.563 34.392C108.943 33.992 109.133 33.476 109.133 32.844C109.133 32.212 108.943 31.696 108.563 31.296C108.187 30.892 107.703 30.69 107.111 30.69C106.519 30.69 106.033 30.89 105.653 31.29C105.277 31.69 105.089 32.208 105.089 32.844C105.089 33.48 105.277 33.996 105.653 34.392C106.033 34.788 106.519 34.986 107.111 34.986ZM112.282 36V29.676H113.596V30.798L113.452 30.654H113.638C113.766 30.306 113.992 30.022 114.316 29.802C114.644 29.578 114.998 29.466 115.378 29.466C115.51 29.466 115.644 29.48 115.78 29.508C115.916 29.532 116.042 29.568 116.158 29.616C116.274 29.664 116.332 29.688 116.332 29.688L116.128 30.972C116.128 30.972 116.072 30.95 115.96 30.906C115.848 30.858 115.728 30.82 115.6 30.792C115.476 30.764 115.36 30.75 115.252 30.75C114.808 30.75 114.434 30.918 114.13 31.254C113.826 31.59 113.674 32.062 113.674 32.67V36H112.282ZM118.65 34.524V32.82L121.692 29.676H123.432L118.65 34.524ZM117.786 36V27.21H119.178V36H117.786ZM122.07 36L119.802 32.598L120.744 31.608L123.714 36H122.07ZM125.53 36V29.244C125.53 28.628 125.738 28.136 126.154 27.768C126.57 27.396 127.106 27.21 127.762 27.21H130.414V28.32H127.984C127.672 28.32 127.416 28.41 127.216 28.59C127.016 28.77 126.916 29.028 126.916 29.364V36H125.53ZM124.378 30.834V29.676H126.226V30.834H124.378ZM126.202 30.834V29.676H128.476V30.834H126.202ZM129.718 36V27.21H131.11V36H129.718ZM136.266 36.204C135.25 36.204 134.424 35.886 133.788 35.25C133.156 34.614 132.84 33.812 132.84 32.844C132.84 31.864 133.16 31.056 133.8 30.42C134.44 29.784 135.262 29.466 136.266 29.466C137.274 29.466 138.098 29.788 138.738 30.432C139.378 31.076 139.698 31.88 139.698 32.844C139.698 33.804 139.382 34.604 138.75 35.244C138.118 35.884 137.29 36.204 136.266 36.204ZM136.266 34.986C136.854 34.986 137.338 34.788 137.718 34.392C138.098 33.992 138.288 33.476 138.288 32.844C138.288 32.212 138.098 31.696 137.718 31.296C137.342 30.892 136.858 30.69 136.266 30.69C135.674 30.69 135.188 30.89 134.808 31.29C134.432 31.69 134.244 32.208 134.244 32.844C134.244 33.48 134.432 33.996 134.808 34.392C135.188 34.788 135.674 34.986 136.266 34.986ZM142.516 36L140.494 29.676H141.88L143.02 33.648L143.224 34.38H143.266L143.482 33.66L144.7 29.676H145.948L147.172 33.648L147.388 34.38H147.43L147.628 33.648L148.78 29.676H150.094L148.072 36H146.806L145.516 31.986L145.306 31.26H145.264L145.054 31.986L143.794 36H142.516ZM153.497 36.21C153.057 36.21 152.675 36.154 152.351 36.042C152.031 35.93 151.749 35.772 151.505 35.568C151.265 35.364 151.081 35.154 150.953 34.938C150.825 34.722 150.761 34.614 150.761 34.614L151.751 34.008C151.751 34.008 151.803 34.09 151.907 34.254C152.011 34.414 152.139 34.56 152.291 34.692C152.447 34.824 152.627 34.926 152.831 34.998C153.035 35.066 153.269 35.1 153.533 35.1C153.901 35.1 154.195 35.028 154.415 34.884C154.635 34.736 154.745 34.534 154.745 34.278C154.745 34.034 154.641 33.844 154.433 33.708C154.229 33.568 153.841 33.43 153.269 33.294C152.441 33.094 151.861 32.84 151.529 32.532C151.201 32.22 151.037 31.81 151.037 31.302C151.037 30.758 151.265 30.316 151.721 29.976C152.177 29.636 152.753 29.466 153.449 29.466C153.805 29.466 154.121 29.504 154.397 29.58C154.677 29.656 154.929 29.77 155.153 29.922C155.377 30.074 155.555 30.234 155.687 30.402C155.819 30.566 155.885 30.648 155.885 30.648L154.937 31.296C154.937 31.296 154.887 31.24 154.787 31.128C154.687 31.012 154.571 30.912 154.439 30.828C154.307 30.74 154.159 30.676 153.995 30.636C153.835 30.596 153.653 30.576 153.449 30.576C153.109 30.576 152.837 30.644 152.633 30.78C152.429 30.912 152.327 31.076 152.327 31.272C152.327 31.452 152.405 31.61 152.561 31.746C152.721 31.878 153.165 32.04 153.893 32.232C154.669 32.428 155.223 32.682 155.555 32.994C155.891 33.302 156.059 33.704 156.059 34.2C156.059 34.804 155.819 35.29 155.339 35.658C154.859 36.026 154.245 36.21 153.497 36.21Z" fill="white"/>
<defs>
<linearGradient id="paint0_linear_22497_22508" x1="4.92187" y1="12.0003" x2="157.322" y2="12.0003" gradientUnits="userSpaceOnUse">
<stop stop-color="white"/>
<stop offset="1" stop-color="white"/>
</linearGradient>
<linearGradient id="paint1_linear_22497_22508" x1="4.92187" y1="12.0003" x2="157.322" y2="12.0003" gradientUnits="userSpaceOnUse">
<stop stop-color="white"/>
<stop offset="1" stop-color="white"/>
</linearGradient>
<linearGradient id="paint2_linear_22497_22508" x1="4.92187" y1="12.0003" x2="157.322" y2="12.0003" gradientUnits="userSpaceOnUse">
<stop stop-color="white"/>
<stop offset="1" stop-color="white"/>
</linearGradient>
<linearGradient id="paint3_linear_22497_22508" x1="4.92187" y1="12.0003" x2="157.322" y2="12.0003" gradientUnits="userSpaceOnUse">
<stop stop-color="white"/>
<stop offset="1" stop-color="white"/>
</linearGradient>
<linearGradient id="paint4_linear_22497_22508" x1="4.92187" y1="12.0003" x2="157.322" y2="12.0003" gradientUnits="userSpaceOnUse">
<stop stop-color="white"/>
<stop offset="1" stop-color="white"/>
</linearGradient>
<linearGradient id="paint5_linear_22497_22508" x1="4.92187" y1="12.0003" x2="157.322" y2="12.0003" gradientUnits="userSpaceOnUse">
<stop stop-color="white"/>
<stop offset="1" stop-color="white"/>
</linearGradient>
<linearGradient id="paint6_linear_22497_22508" x1="4.92187" y1="12.0003" x2="157.322" y2="12.0003" gradientUnits="userSpaceOnUse">
<stop stop-color="white"/>
<stop offset="1" stop-color="white"/>
</linearGradient>
<linearGradient id="paint7_linear_22497_22508" x1="4.92187" y1="12.0003" x2="157.322" y2="12.0003" gradientUnits="userSpaceOnUse">
<stop stop-color="white"/>
<stop offset="1" stop-color="white"/>
</linearGradient>
<linearGradient id="paint8_linear_22497_22508" x1="4.92187" y1="12.0003" x2="157.322" y2="12.0003" gradientUnits="userSpaceOnUse">
<stop stop-color="white"/>
<stop offset="1" stop-color="white"/>
</linearGradient>
<linearGradient id="paint9_linear_22497_22508" x1="4.92187" y1="12.0003" x2="157.322" y2="12.0003" gradientUnits="userSpaceOnUse">
<stop stop-color="white"/>
<stop offset="1" stop-color="white"/>
</linearGradient>
<linearGradient id="paint10_linear_22497_22508" x1="4.92187" y1="12.0003" x2="157.322" y2="12.0003" gradientUnits="userSpaceOnUse">
<stop stop-color="white"/>
<stop offset="1" stop-color="white"/>
</linearGradient>
<linearGradient id="paint11_linear_22497_22508" x1="4.92187" y1="12.0003" x2="157.322" y2="12.0003" gradientUnits="userSpaceOnUse">
<stop stop-color="white"/>
<stop offset="1" stop-color="white"/>
</linearGradient>
</defs></svg>
        <svg class="logo-dark" width="158" height="39" viewBox="0 0 158 39" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="ImagineArt Workflows">
<path d="M25.9304 11.5692C22.9368 10.8701 19.5513 10.6474 20.371 5.18344L26.4248 6.88008L28.4962 7.38328C28.3938 3.28641 25.0439 0 20.9234 0H7.54167C3.37215 0 0 3.37992 0 7.53914V13.8759C0 16.009 1.14484 16.5968 2.57923 16.9308H2.57032C5.56382 17.6344 8.94933 17.8615 8.12968 23.321L2.07585 21.6244L0.00445461 21.1256C0.0890924 25.2091 3.4256 28.5 7.54167 28.5H20.9679C25.1285 28.5 28.5096 25.1201 28.5096 20.9609V14.6196C28.5096 12.4999 27.3603 11.8987 25.9304 11.5692ZM14.2503 22.8757C12.9229 18.8857 9.76453 15.626 5.62619 14.25C9.76453 12.874 12.9229 9.6232 14.2503 5.6332C15.5823 9.6232 18.7361 12.8784 22.8789 14.2545C18.7361 15.6349 15.5823 18.8857 14.2503 22.8757Z" fill="url(#paint0_linear_22103_14289)"/>
<path d="M0.00445461 21.1273H0V20.9714C0 21.0249 -9.31323e-09 21.0739 0.00445461 21.1273Z" fill="url(#paint1_linear_22103_14289)"/>
<path d="M94.8321 5.44097C94.8321 4.34671 95.6909 3.51405 96.7818 3.51405C97.8728 3.51405 98.7315 4.34671 98.7315 5.44097C98.7315 6.53523 97.8728 7.3679 96.7818 7.3679C95.6909 7.3679 94.8321 6.53523 94.8321 5.44097Z" fill="url(#paint2_linear_22103_14289)"/>
<path d="M98.3224 9.07802H95.2339V21.2033H98.3224V9.07802Z" fill="url(#paint3_linear_22103_14289)"/>
<path d="M100.648 13.502V21.2061H103.737V14.5042C103.737 10.8677 109.228 10.8677 109.228 14.5042V21.2061H112.317V13.502C112.317 7.23492 100.641 7.23492 100.641 13.502H100.648Z" fill="url(#paint4_linear_22103_14289)"/>
<path d="M53.7745 10.195C50.6011 7.56068 43.6427 8.66231 43.6427 13.4962V21.2002H46.7313V14.4984C46.7313 10.8619 52.2228 10.8619 52.2228 14.4984V21.2002H55.3114V14.4984C55.3114 10.8619 60.8029 10.8619 60.8029 14.4984V21.2002H63.8915V13.4962C63.8915 8.66231 56.933 7.56068 53.7597 10.195H53.7745Z" fill="url(#paint5_linear_22103_14289)"/>
<path d="M120.193 8.78523C116.481 8.78523 113.677 11.519 113.677 15.1334C113.677 18.7478 116.485 21.4816 120.241 21.4816C123.101 21.4816 125.441 19.9378 126.425 17.6535H122.994C122.415 18.3278 121.457 18.792 120.311 18.792C118.649 18.792 117.384 17.7714 116.986 16.2056H126.613C126.68 15.8961 126.709 15.5166 126.709 15.185C126.709 11.5227 123.901 8.78892 120.193 8.78892V8.78155V8.78523ZM117.008 13.9434C117.436 12.4438 118.626 11.4675 120.193 11.4675C121.759 11.4675 123.023 12.4659 123.399 13.9434H117.001H117.008Z" fill="url(#paint6_linear_22103_14289)"/>
<path d="M89.9893 10.449C89.0126 9.40628 87.66 8.7873 86.0199 8.7873C82.666 8.7873 80.1229 11.4032 80.1229 14.8297C80.1229 18.2561 82.6659 20.872 86.0493 20.872C87.6673 20.872 89.0199 20.2531 89.9966 19.2325V20.0394C89.9966 22.0621 88.7841 23.2743 86.8786 23.2743C85.6439 23.2743 84.5751 22.7584 84.1218 21.9258H80.8711C81.4497 24.4201 83.8159 26.0007 86.8528 26.0007C90.5863 26.0007 93.0852 23.5764 93.0852 19.892V9.07469H89.9966V10.4563V10.449H89.9893ZM86.6648 17.9835C84.7373 17.9835 83.3109 16.6313 83.3109 14.8223C83.3109 13.0133 84.7373 11.6832 86.6648 11.6832C88.5924 11.6832 89.9966 13.0354 89.9966 14.8223C89.9966 16.6092 88.5482 17.9835 86.6648 17.9835Z" fill="url(#paint7_linear_22103_14289)"/>
<path d="M157.322 12.0507V9.07376H154.576V5.44834H151.487V9.07376H148.76C145.841 9.07376 142.926 10.6396 142.926 13.7713V21.2064H146.014V14.7735C146.014 12.9534 147.389 12.0544 148.76 12.0544H151.487V16.6415C151.487 19.7732 154.406 21.339 157.322 21.339V18.3731C155.947 18.3731 154.576 17.4631 154.576 15.643V12.0544H157.322V12.0434V12.0507Z" fill="url(#paint8_linear_22103_14289)"/>
<path d="M75.3869 9.07475V10.5006C75.3869 10.5006 75.3648 10.4711 75.3537 10.4601C71.8561 6.66517 65.5205 9.889 65.5131 15.1319C65.5131 20.3747 71.8524 23.5912 75.3537 19.8036C75.3648 19.7926 75.3758 19.7742 75.3869 19.7631V21.189H78.4754V9.07475H75.3869ZM72.033 18.481C70.1275 18.481 68.7012 17.033 68.7012 15.1282C68.7012 13.2234 70.1275 11.7754 72.033 11.7754C73.9384 11.7754 75.3869 13.2234 75.3869 15.1282C75.3869 17.033 73.9605 18.481 72.033 18.481Z" fill="url(#paint9_linear_22103_14289)"/>
<path d="M41.7078 6.40685H38.6192V21.1996H41.7078V6.40685Z" fill="url(#paint10_linear_22103_14289)"/>
<path d="M132.466 5.2411H136.236L142.369 21.2018H138.875L137.74 18.1032H130.866L129.757 21.2018H126.311L132.466 5.2411ZM136.653 15.1631L134.316 8.75599L131.957 15.1631H136.656H136.653Z" fill="url(#paint11_linear_22103_14289)"/>
<path d="M94.0311 36L91.7031 27.408H93.1551L94.6191 33.144L94.7751 33.876H94.8171L95.0031 33.144L96.7491 27.408H98.0691L99.7671 33.144L99.9531 33.87H99.9891L100.157 33.144L101.609 27.408H103.007L100.703 36H99.3651L97.5771 30.03L97.3971 29.37H97.3611L97.1751 30.024L95.3451 36H94.0311ZM107.111 36.204C106.095 36.204 105.269 35.886 104.633 35.25C104.001 34.614 103.685 33.812 103.685 32.844C103.685 31.864 104.005 31.056 104.645 30.42C105.285 29.784 106.107 29.466 107.111 29.466C108.119 29.466 108.943 29.788 109.583 30.432C110.223 31.076 110.543 31.88 110.543 32.844C110.543 33.804 110.227 34.604 109.595 35.244C108.963 35.884 108.135 36.204 107.111 36.204ZM107.111 34.986C107.699 34.986 108.183 34.788 108.563 34.392C108.943 33.992 109.133 33.476 109.133 32.844C109.133 32.212 108.943 31.696 108.563 31.296C108.187 30.892 107.703 30.69 107.111 30.69C106.519 30.69 106.033 30.89 105.653 31.29C105.277 31.69 105.089 32.208 105.089 32.844C105.089 33.48 105.277 33.996 105.653 34.392C106.033 34.788 106.519 34.986 107.111 34.986ZM112.282 36V29.676H113.596V30.798L113.452 30.654H113.638C113.766 30.306 113.992 30.022 114.316 29.802C114.644 29.578 114.998 29.466 115.378 29.466C115.51 29.466 115.644 29.48 115.78 29.508C115.916 29.532 116.042 29.568 116.158 29.616C116.274 29.664 116.332 29.688 116.332 29.688L116.128 30.972C116.128 30.972 116.072 30.95 115.96 30.906C115.848 30.858 115.728 30.82 115.6 30.792C115.476 30.764 115.36 30.75 115.252 30.75C114.808 30.75 114.434 30.918 114.13 31.254C113.826 31.59 113.674 32.062 113.674 32.67V36H112.282ZM118.65 34.524V32.82L121.692 29.676H123.432L118.65 34.524ZM117.786 36V27.21H119.178V36H117.786ZM122.07 36L119.802 32.598L120.744 31.608L123.714 36H122.07ZM125.53 36V29.244C125.53 28.628 125.738 28.136 126.154 27.768C126.57 27.396 127.106 27.21 127.762 27.21H130.414V28.32H127.984C127.672 28.32 127.416 28.41 127.216 28.59C127.016 28.77 126.916 29.028 126.916 29.364V36H125.53ZM124.378 30.834V29.676H126.226V30.834H124.378ZM126.202 30.834V29.676H128.476V30.834H126.202ZM129.718 36V27.21H131.11V36H129.718ZM136.266 36.204C135.25 36.204 134.424 35.886 133.788 35.25C133.156 34.614 132.84 33.812 132.84 32.844C132.84 31.864 133.16 31.056 133.8 30.42C134.44 29.784 135.262 29.466 136.266 29.466C137.274 29.466 138.098 29.788 138.738 30.432C139.378 31.076 139.698 31.88 139.698 32.844C139.698 33.804 139.382 34.604 138.75 35.244C138.118 35.884 137.29 36.204 136.266 36.204ZM136.266 34.986C136.854 34.986 137.338 34.788 137.718 34.392C138.098 33.992 138.288 33.476 138.288 32.844C138.288 32.212 138.098 31.696 137.718 31.296C137.342 30.892 136.858 30.69 136.266 30.69C135.674 30.69 135.188 30.89 134.808 31.29C134.432 31.69 134.244 32.208 134.244 32.844C134.244 33.48 134.432 33.996 134.808 34.392C135.188 34.788 135.674 34.986 136.266 34.986ZM142.516 36L140.494 29.676H141.88L143.02 33.648L143.224 34.38H143.266L143.482 33.66L144.7 29.676H145.948L147.172 33.648L147.388 34.38H147.43L147.628 33.648L148.78 29.676H150.094L148.072 36H146.806L145.516 31.986L145.306 31.26H145.264L145.054 31.986L143.794 36H142.516ZM153.497 36.21C153.057 36.21 152.675 36.154 152.351 36.042C152.031 35.93 151.749 35.772 151.505 35.568C151.265 35.364 151.081 35.154 150.953 34.938C150.825 34.722 150.761 34.614 150.761 34.614L151.751 34.008C151.751 34.008 151.803 34.09 151.907 34.254C152.011 34.414 152.139 34.56 152.291 34.692C152.447 34.824 152.627 34.926 152.831 34.998C153.035 35.066 153.269 35.1 153.533 35.1C153.901 35.1 154.195 35.028 154.415 34.884C154.635 34.736 154.745 34.534 154.745 34.278C154.745 34.034 154.641 33.844 154.433 33.708C154.229 33.568 153.841 33.43 153.269 33.294C152.441 33.094 151.861 32.84 151.529 32.532C151.201 32.22 151.037 31.81 151.037 31.302C151.037 30.758 151.265 30.316 151.721 29.976C152.177 29.636 152.753 29.466 153.449 29.466C153.805 29.466 154.121 29.504 154.397 29.58C154.677 29.656 154.929 29.77 155.153 29.922C155.377 30.074 155.555 30.234 155.687 30.402C155.819 30.566 155.885 30.648 155.885 30.648L154.937 31.296C154.937 31.296 154.887 31.24 154.787 31.128C154.687 31.012 154.571 30.912 154.439 30.828C154.307 30.74 154.159 30.676 153.995 30.636C153.835 30.596 153.653 30.576 153.449 30.576C153.109 30.576 152.837 30.644 152.633 30.78C152.429 30.912 152.327 31.076 152.327 31.272C152.327 31.452 152.405 31.61 152.561 31.746C152.721 31.878 153.165 32.04 153.893 32.232C154.669 32.428 155.223 32.682 155.555 32.994C155.891 33.302 156.059 33.704 156.059 34.2C156.059 34.804 155.819 35.29 155.339 35.658C154.859 36.026 154.245 36.21 153.497 36.21Z" fill="#525252"/>
<defs>
<linearGradient id="paint0_linear_22103_14289" x1="4.92187" y1="12.0003" x2="157.322" y2="12.0003" gradientUnits="userSpaceOnUse">
<stop stop-color="#0E171F"/>
<stop offset="1" stop-color="#123154"/>
</linearGradient>
<linearGradient id="paint1_linear_22103_14289" x1="4.92187" y1="12.0003" x2="157.322" y2="12.0003" gradientUnits="userSpaceOnUse">
<stop stop-color="#0E171F"/>
<stop offset="1" stop-color="#123154"/>
</linearGradient>
<linearGradient id="paint2_linear_22103_14289" x1="4.92187" y1="12.0003" x2="157.322" y2="12.0003" gradientUnits="userSpaceOnUse">
<stop stop-color="#0E171F"/>
<stop offset="1" stop-color="#123154"/>
</linearGradient>
<linearGradient id="paint3_linear_22103_14289" x1="4.92187" y1="12.0003" x2="157.322" y2="12.0003" gradientUnits="userSpaceOnUse">
<stop stop-color="#0E171F"/>
<stop offset="1" stop-color="#123154"/>
</linearGradient>
<linearGradient id="paint4_linear_22103_14289" x1="4.92187" y1="12.0003" x2="157.322" y2="12.0003" gradientUnits="userSpaceOnUse">
<stop stop-color="#0E171F"/>
<stop offset="1" stop-color="#123154"/>
</linearGradient>
<linearGradient id="paint5_linear_22103_14289" x1="4.92187" y1="12.0003" x2="157.322" y2="12.0003" gradientUnits="userSpaceOnUse">
<stop stop-color="#0E171F"/>
<stop offset="1" stop-color="#123154"/>
</linearGradient>
<linearGradient id="paint6_linear_22103_14289" x1="4.92187" y1="12.0003" x2="157.322" y2="12.0003" gradientUnits="userSpaceOnUse">
<stop stop-color="#0E171F"/>
<stop offset="1" stop-color="#123154"/>
</linearGradient>
<linearGradient id="paint7_linear_22103_14289" x1="4.92187" y1="12.0003" x2="157.322" y2="12.0003" gradientUnits="userSpaceOnUse">
<stop stop-color="#0E171F"/>
<stop offset="1" stop-color="#123154"/>
</linearGradient>
<linearGradient id="paint8_linear_22103_14289" x1="4.92187" y1="12.0003" x2="157.322" y2="12.0003" gradientUnits="userSpaceOnUse">
<stop stop-color="#0E171F"/>
<stop offset="1" stop-color="#123154"/>
</linearGradient>
<linearGradient id="paint9_linear_22103_14289" x1="4.92187" y1="12.0003" x2="157.322" y2="12.0003" gradientUnits="userSpaceOnUse">
<stop stop-color="#0E171F"/>
<stop offset="1" stop-color="#123154"/>
</linearGradient>
<linearGradient id="paint10_linear_22103_14289" x1="4.92187" y1="12.0003" x2="157.322" y2="12.0003" gradientUnits="userSpaceOnUse">
<stop stop-color="#0E171F"/>
<stop offset="1" stop-color="#123154"/>
</linearGradient>
<linearGradient id="paint11_linear_22103_14289" x1="4.92187" y1="12.0003" x2="157.322" y2="12.0003" gradientUnits="userSpaceOnUse">
<stop stop-color="#0E171F"/>
<stop offset="1" stop-color="#123154"/>
</linearGradient>
</defs></svg>
      </a>
      <nav class="nav-links">
        <a href="#" class="nav-link">Platform</a>
        <a href="#" class="nav-link">Pricing</a>
        <a href="#" class="nav-link">Resources</a>
        <a href="#" class="nav-link">APIs</a>
        <a href="#" class="nav-link">Community</a>
        <div class="nav-dropdown">
          <button class="nav-link nav-dropdown-trigger">Usecases <svg width="10" height="6" viewBox="0 0 10 6" fill="none"><path d="M1 1l4 4 4-4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg></button>
          <div class="nav-dropdown-menu">
            <a href="#" class="nav-dropdown-item">Fashion</a>
            <a href="./ecommerce.html" class="nav-dropdown-item${ecomCurrent}">E-commerce</a>
            <a href="./marketing.html" class="nav-dropdown-item${mktCurrent}">Marketing Agencies</a>
            <a href="#" class="nav-dropdown-item">Beauty</a>
            <a href="./architecture.html" class="nav-dropdown-item${archCurrent}">Architecture</a>
          </div>
        </div>
      </nav>
      <div class="nav-actions">
        <a href="#" class="navbar-btn navbar-btn-ghost">Sign in</a>
        <a href="#" class="navbar-btn navbar-btn-dark">Get Started</a>
      </div>
      <button class="nav-hamburger" id="nav-hamburger" aria-label="Open menu">
        <span class="bars">
          <span class="bar"></span>
          <span class="bar"></span>
        </span>
      </button>
    </div>
  </header>
  <div class="nav-mobile-menu" id="nav-mobile-menu">
    <div class="nav-mobile-topbar">
      <a href="${logoHref}" class="logo">
        <svg class="logo-white" width="130" height="32" viewBox="0 0 158 39" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M25.9304 11.5692C22.9368 10.8701 19.5513 10.6474 20.371 5.18344L26.4248 6.88008L28.4962 7.38328C28.3938 3.28641 25.0439 0 20.9234 0H7.54167C3.37215 0 0 3.37992 0 7.53914V13.8759C0 16.009 1.14484 16.5968 2.57923 16.9308H2.57032C5.56382 17.6344 8.94933 17.8615 8.12968 23.321L2.07585 21.6244L0.00445461 21.1256C0.0890924 25.2091 3.4256 28.5 7.54167 28.5H20.9679C25.1285 28.5 28.5096 25.1201 28.5096 20.9609V14.6196C28.5096 12.4999 27.3603 11.8987 25.9304 11.5692ZM14.2503 22.8757C12.9229 18.8857 9.76453 15.626 5.62619 14.25C9.76453 12.874 12.9229 9.6232 14.2503 5.6332C15.5823 9.6232 18.7361 12.8784 22.8789 14.2545C18.7361 15.6349 15.5823 18.8857 14.2503 22.8757Z" fill="white"/></svg>
      </a>
      <button class="nav-mobile-close" id="nav-mobile-close" aria-label="Close menu">
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M3 3l12 12M15 3L3 15" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>
      </button>
    </div>
    <div class="nav-mobile-inner" id="nav-mobile-inner"></div>
    <div class="nav-mobile-divider"></div>
    <div class="nav-mobile-actions">
      <a href="https://www.imagine.art/flow" target="_blank" rel="noopener" class="navbar-btn navbar-btn-dark">Get Started →</a>
    </div>
  </div>`;

  var mount = document.getElementById('site-nav');
  if (!mount) return;
  mount.outerHTML = html;

  // ── Scroll behavior ────────────────────────────────────
  var navbar = document.getElementById('site-navbar');
  if (!navbar) return;
  function onScroll() { navbar.classList.toggle('scrolled', window.scrollY > 20); }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // ── Hamburger / close toggle ───────────────────────────
  var hamburger  = document.getElementById('nav-hamburger');
  var closeBtn   = document.getElementById('nav-mobile-close');
  var mobileMenu = document.getElementById('nav-mobile-menu');

  function openMenu() {
    mobileMenu.classList.add('open');
    hamburger.classList.add('open');
  }
  function closeMenu() {
    mobileMenu.classList.remove('open');
    hamburger.classList.remove('open');
  }

  if (hamburger)  hamburger.addEventListener('click', function () {
    mobileMenu.classList.contains('open') ? closeMenu() : openMenu();
  });
  if (closeBtn)   closeBtn.addEventListener('click', closeMenu);
  if (mobileMenu) mobileMenu.querySelectorAll('a').forEach(function (a) {
    a.addEventListener('click', closeMenu);
  });
})();
