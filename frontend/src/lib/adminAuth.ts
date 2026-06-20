export const ADMIN_COOKIE = 'bk_admin';

export async function computeAdminToken(): Promise<string> {
  const password = process.env.ADMIN_PASSWORD;
  if (!password) return '';

  const encoder = new TextEncoder();
  const data = encoder.encode(`brandkettle:admin:${password}`);
  const hashBuffer = await crypto.subtle.digest('SHA-256', data);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  return hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
}

export async function verifyAdminCookie(cookieValue: string | undefined): Promise<boolean> {
  if (!cookieValue) return false;
  const expected = await computeAdminToken();
  return expected !== '' && cookieValue === expected;
}
