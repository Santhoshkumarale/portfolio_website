/**
 * Detects values that are still template placeholders, e.g. "[Your Name]" or
 * "GITHUB_USERNAME", so features that need real data can degrade gracefully.
 */
export function isPlaceholder(value: string | null | undefined): boolean {
  if (!value) return true;
  const trimmed = value.trim();
  if (trimmed.startsWith('[') && trimmed.endsWith(']')) return true;
  return /^[A-Z][A-Z0-9_]{2,}$/.test(trimmed);
}
