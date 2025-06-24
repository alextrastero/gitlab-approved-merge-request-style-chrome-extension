async function enhanceMergeRequestPage() {
  try {
    const elements = document.querySelectorAll('.gl-badge.badge-success');

    elements.forEach(el => {
      const label = (el.getAttribute('aria-label') || '').trim().toLowerCase();
      if (/approvals?$/.test(label)) {
        el.textContent = '🚀'

        // find the nearest ancestor matching .issue.merge-request
        const parent = el.closest('.issue.merge-request');

        if (parent) {
          parent.style.backgroundColor = 'var(--gl-badge-success-background-color-default)';
          parent.style.marginBottom = '4px';
          parent.style.borderRadius = '4px';
        }
      }
    });

  } catch (error) {
    console.error('GitLab MR Enhancer: Error occurred', error);
  }
}

// Check if we're on a merge request page
if (window.location.href.includes('/merge_requests')) {
  // Run our enhancement code
  // Using setTimeout to ensure the page has loaded
  setTimeout(enhanceMergeRequestPage, 1000);
}
