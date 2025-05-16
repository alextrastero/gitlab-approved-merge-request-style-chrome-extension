// GitLab Merge Request Enhancer
// This script runs on GitLab merge request pages and modifies the content

// Helper function to wait for elements to be loaded in the DOM
function waitForElement(selector, timeout = 10000) {
  return new Promise((resolve, reject) => {
    if (document.querySelector(selector)) {
      return resolve(document.querySelector(selector));
    }

    const observer = new MutationObserver(() => {
      if (document.querySelector(selector)) {
        resolve(document.querySelector(selector));
        observer.disconnect();
      }
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true
    });

    setTimeout(() => {
      observer.disconnect();
      reject(new Error(`Timeout waiting for element: ${selector}`));
    }, timeout);
  });
}

// Main function to modify the page
async function enhanceMergeRequestPage() {
  try {
    console.log('GitLab MR Enhancer: Script loaded on merge request page');
    
    // Add your CSS selector targeting and content modification code here
    // Example (replace with your actual selectors and modifications):
    /*
    const elements = document.querySelectorAll('.your-target-selector');
    elements.forEach(element => {
      element.style.backgroundColor = '#f0f8ff';
      element.textContent = 'Modified by extension';
    });
    */
    
    // Wait for GitLab's dynamic content to load
    // Example of waiting for specific elements:
    // const targetElement = await waitForElement('.your-target-selector');
    // targetElement.style.color = 'red';
    
  } catch (error) {
    console.error('GitLab MR Enhancer: Error occurred', error);
  }
}

// Check if we're on a merge request page
if (window.location.href.includes('/merge_requests')) {
  // Run our enhancement code
  // Using setTimeout to ensure the page has loaded
  setTimeout(enhanceMergeRequestPage, 1000);
  
  // Also listen for navigation changes (GitLab is a SPA)
  const observer = new MutationObserver((mutations) => {
    if (window.location.href.includes('/merge_requests')) {
      enhanceMergeRequestPage();
    }
  });
  
  observer.observe(document.body, {
    childList: true,
    subtree: true
  });
}