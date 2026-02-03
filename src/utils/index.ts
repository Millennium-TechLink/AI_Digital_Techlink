// Utility functions

/**
 * Smooth scroll to an element by ID
 */
export const scrollToElement = (id: string): void => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
};

/**
 * Format number with commas
 */
export const formatNumber = (num: number): string => {
  return num.toLocaleString();
};

/**
 * Debounce function
 */
export const debounce = <T extends (...args: unknown[]) => void>(
  func: T,
  wait: number
): ((...args: Parameters<T>) => void) => {
  let timeout: NodeJS.Timeout | null = null;
  return (...args: Parameters<T>) => {
    if (timeout) clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
};

