import React from 'react';

/**
 * Paste in your SVG logo and return it from this component.
 * Make sure you have a height set for your logo.
 * It is recommended to keep the height within 25-35px.
 */
export default function Logo() {
  return (
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 296 60" width="296" height="60"><defs><image width="294" height="60" id="img1" href="data:image/png;base64,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"/></defs><use  href="#img1" x="1" y="0" /></svg>
  );
};