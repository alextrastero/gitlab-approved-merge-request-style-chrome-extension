# GitLab Merge Request Enhancer

A Chrome extension that automatically enhances GitLab merge request pages.

## Features

- Automatically runs on GitLab merge request pages
- Finds elements using CSS selectors and modifies them
- No user interaction required

## Installation

1. Clone this repository
2. Open Chrome and navigate to `chrome://extensions/`
3. Enable "Developer mode" (toggle in the top-right corner)
4. Click "Load unpacked" and select this directory

## Development

- `manifest.json` - Extension configuration
- `content_scripts/content.js` - Main script that runs on GitLab pages
- `images/` - Extension icons (you'll need to add your own icon files)