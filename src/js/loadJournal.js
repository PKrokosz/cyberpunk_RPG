export async function loadJournal(user) {
  const sanitized = String(user).replace(/[^a-z0-9]/gi, '');
  if (!sanitized) return [];
  try {
    const resp = await fetch(`data/journal_${sanitized}.json`);
    if (!resp.ok) return [];
    const entries = await resp.json();
    return Array.isArray(entries) ? entries : [];
  } catch (err) {
    return [];
  }
}
