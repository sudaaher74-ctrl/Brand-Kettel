/**
 * Shared data-fetching utility for Next.js Server Components.
 * All API calls go through here so we never have to define fetchJson inline again.
 */

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001';

/**
 * Fetch JSON from the backend API with a fallback value.
 * - Returns the fallback if the request fails, the response is not ok, or the
 *   returned array is empty.
 * - Passes next.revalidate so Next.js caches and revalidates automatically.
 */
export async function fetchJson<T>(path: string, fallback: T, revalidate = 60): Promise<T> {
  try {
    const res = await fetch(`${API_URL}${path}`, { next: { revalidate } });
    if (!res.ok) return fallback;
    const data = await res.json();
    if (Array.isArray(data) && data.length === 0) return fallback;
    return data as T;
  } catch {
    return fallback;
  }
}

export { API_URL };
