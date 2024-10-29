  // src/utils/helpers.js

// Helper function to generate URLs with base path
export function buildUrl(path = '') {
    const base = import.meta.env.BASE_URL || '/'; // BASE_URL is '/astro/' in production
    const cleanedPath = path.replace(/^\/+/, ''); // Remove leading slashes from the input path
    return `${base}${cleanedPath}`; // Combine base and cleaned path
  }