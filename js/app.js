/**
 * Omni Cero — Commercial Landing Page Interactive Logic
 * Handles interactive medical viewport tabs, device detection,
 * video tour modals, and responsive mobile download behavior.
 */

document.addEventListener('DOMContentLoaded', () => {

  // 1. Interactive Hero Viewport Tab Switching
  const vTabs = document.querySelectorAll('.v-tab');
  const screens = document.querySelectorAll('.screen-view');

  vTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const targetId = tab.getAttribute('data-target');

      vTabs.forEach(t => t.classList.remove('active'));
      screens.forEach(s => s.classList.remove('active'));

      tab.classList.add('active');
      const targetScreen = document.getElementById(targetId);
      if (targetScreen) {
        targetScreen.classList.add('active');
      }
    });
  });

  // 2. Device Detection (Mobile/Tablet vs Desktop)
  function isMobileDevice() {
    const userAgent = navigator.userAgent || navigator.vendor || window.opera;
    const isMobileUA = /android|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(userAgent.toLowerCase());
    const isSmallScreen = window.innerWidth <= 820;
    return isMobileUA || isSmallScreen;
  }

  // 3. Download Button Trigger Logic
  const downloadTriggers = document.querySelectorAll('.btn-download-trigger');
  const mobileModal = document.getElementById('mobileModal');
  const closeMobileModal = document.getElementById('closeMobileModal');
  const downloadModal = document.getElementById('downloadModal');
  const closeDownloadModal = document.getElementById('closeDownloadModal');

  // Direct release-asset URLs live in index.html — the picker's edition cards and the
  // trigger anchors keep working even with JS disabled. The mobile "send to yourself"
  // features share the download page so the recipient can pick an edition on a PC.
  const DOWNLOAD_PAGE = "https://cero.omniide.com/#download";

  downloadTriggers.forEach(btn => {
    btn.addEventListener('click', (e) => {
      // Always intercept the click: phones get the desktop-requirement notice,
      // desktops get the edition picker (Live C-arm + Cero listed first).
      e.preventDefault();
      if (isMobileDevice()) {
        openModal(mobileModal);
      } else {
        openModal(downloadModal);
      }
    });
  });

  // Dismiss the picker once a download has been started (the download itself
  // is not interrupted by hiding the modal)
  document.querySelectorAll('.edition-card').forEach(card => {
    card.addEventListener('click', () => {
      setTimeout(() => closeModal(downloadModal), 150);
    });
  });

  // Modal open/close helpers
  function openModal(modal) {
    if (modal) modal.classList.add('open');
  }

  function closeModal(modal) {
    if (modal) modal.classList.remove('open');
  }

  if (closeMobileModal) {
    closeMobileModal.addEventListener('click', () => closeModal(mobileModal));
  }

  if (closeDownloadModal) {
    closeDownloadModal.addEventListener('click', () => closeModal(downloadModal));
  }

  // 4. Video Demo Modal
  const videoModal = document.getElementById('videoModal');
  const closeVideoModal = document.getElementById('closeVideoModal');
  const demoVideo = document.getElementById('demoVideo');
  const btnWatchDemoHeader = document.getElementById('btnWatchDemoHeader');
  const btnHeroDemo = document.getElementById('btnHeroDemo');

  function triggerVideoModal() {
    openModal(videoModal);
    if (demoVideo) {
      demoVideo.currentTime = 0;
      demoVideo.play().catch(() => {});
    }
  }

  if (btnWatchDemoHeader) btnWatchDemoHeader.addEventListener('click', triggerVideoModal);
  if (btnHeroDemo) btnHeroDemo.addEventListener('click', triggerVideoModal);

  if (closeVideoModal) {
    closeVideoModal.addEventListener('click', () => {
      closeModal(videoModal);
      if (demoVideo) demoVideo.pause();
    });
  }

  // Close modals on backdrop click
  window.addEventListener('click', (e) => {
    if (e.target === mobileModal) closeModal(mobileModal);
    if (e.target === downloadModal) closeModal(downloadModal);
    if (e.target === videoModal) {
      closeModal(videoModal);
      if (demoVideo) demoVideo.pause();
    }
  });

  // 5. Copy Link to Clipboard
  const btnCopyLink = document.getElementById('btnCopyLink');
  const copyLinkText = document.getElementById('copyLinkText');

  if (btnCopyLink && copyLinkText) {
    btnCopyLink.addEventListener('click', () => {
      const link = DOWNLOAD_PAGE;
      navigator.clipboard.writeText(link).then(() => {
        copyLinkText.textContent = "Link copied to clipboard";
        btnCopyLink.style.borderColor = "var(--green)";
        setTimeout(() => {
          copyLinkText.textContent = "Copy download link";
          btnCopyLink.style.borderColor = "";
        }, 2500);
      }).catch(() => {
        prompt("Copy this link to open on your PC:", link);
      });
    });
  }

  // 6. Email Link Simulator
  const btnSendEmail = document.getElementById('btnSendEmail');
  const emailInput = document.getElementById('emailInput');
  const emailFeedback = document.getElementById('emailFeedback');

  if (btnSendEmail && emailInput && emailFeedback) {
    btnSendEmail.addEventListener('click', () => {
      const email = emailInput.value.trim();
      if (!email || !email.includes('@')) {
        emailFeedback.textContent = "Please enter a valid email address.";
        emailFeedback.style.color = "#D64545";
        emailFeedback.style.display = "block";
        return;
      }

      // Compose mailto link so user can send immediately from their mail client
      const subject = encodeURIComponent("Omni Cero download link");
      const body = encodeURIComponent(
        `Hi,\n\nHere is the Omni Cero download page for Windows 64-bit workstations — choose Live C-arm + Cero or XVR + Cero Integrated:\n\n${DOWNLOAD_PAGE}\n\nInstall it on your OR machine.`
      );
      window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;

      emailFeedback.textContent = "Opening your mail client...";
      emailFeedback.style.color = "var(--green)";
      emailFeedback.style.display = "block";
    });
  }

  // 7. Dynamic Gantry Angle HUD Animation
  let gantryLAO = 18.5;
  let gantryCranial = 12.0;
  setInterval(() => {
    // Subtle realistic medical jitter
    gantryLAO = (18.5 + (Math.sin(Date.now() / 2000) * 0.3)).toFixed(1);
    gantryCranial = (12.0 + (Math.cos(Date.now() / 2500) * 0.2)).toFixed(1);

    const gantryTag = document.querySelector('#tab-carm .bottom-left .hud-tag:first-child');
    if (gantryTag) {
      gantryTag.textContent = `GANTRY: LAO ${gantryLAO}° | CRANIAL ${gantryCranial}°`;
    }
  }, 1000);

  // 8. Mobile Navigation Toggle
  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  const navMenu = document.getElementById('navMenu');

  if (mobileMenuBtn && navMenu) {
    mobileMenuBtn.addEventListener('click', () => {
      navMenu.classList.toggle('open');
    });

    // Close the mobile menu when a nav link is tapped
    navMenu.querySelectorAll('.nav-item').forEach(link => {
      link.addEventListener('click', () => navMenu.classList.remove('open'));
    });
  }

  // 9. Contact Page Form — composes a mailto: message (static site, no backend)
  const contactForm = document.getElementById('contactForm');
  const contactFeedback = document.getElementById('contactFeedback');

  if (contactForm && contactFeedback) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const name = document.getElementById('contactName').value.trim();
      const email = document.getElementById('contactEmail').value.trim();
      const org = document.getElementById('contactOrg').value.trim();
      const topic = document.getElementById('contactTopic').value;
      const message = document.getElementById('contactMessage').value.trim();

      const showFeedback = (text, ok) => {
        contactFeedback.textContent = text;
        contactFeedback.style.color = ok ? 'var(--green)' : '#D64545';
        contactFeedback.style.display = 'block';
      };

      if (!name || !message) {
        showFeedback('Please add your name and a short message.', false);
        return;
      }

      if (!email || !email.includes('@')) {
        showFeedback('Please enter a valid work email address.', false);
        return;
      }

      const subject = `[Omni Cero] ${topic} — ${name}`;
      const body = [
        `Name: ${name}`,
        `Email: ${email}`,
        org ? `Hospital / organization: ${org}` : null,
        `Topic: ${topic}`,
        '',
        message,
        '',
        '— Sent from the Omni Cero contact page (cero.omniide.com/contact.html)'
      ].filter(Boolean).join('\n');

      window.location.href = `mailto:contact@omniide.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      showFeedback('Opening your mail client — the message is ready to send to contact@omniide.com.', true);
    });
  }

});
