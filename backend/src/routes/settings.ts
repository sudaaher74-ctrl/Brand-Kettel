import { Router } from 'express';
import { getDb } from '../lib/mongodb';
import { SettingsSchema } from '../lib/schemas';
import { requireAuth } from '../middlewares/requireAuth';

const router = Router();

// Assuming settings are stored in a single document with a specific ID, e.g., 'global_settings'
const SETTINGS_ID = 'global_settings';

// Get settings
router.get('/', async (req, res) => {
  try {
    const db = await getDb();
    if (!db) return res.status(503).json({ error: 'Database not configured' });
    let settings = await db.collection('settings').findOne({ _id: SETTINGS_ID as any });
    if (!settings) {
      settings = { _id: SETTINGS_ID as any }; // Default empty settings
    }
    res.json(settings);
  } catch (error) {
    console.error('[settings] failed to load settings:', error);
    res.status(500).json({ error: 'Failed to load settings' });
  }
});

// Update settings
router.put('/', requireAuth, async (req, res) => {
  try {
    const db = await getDb();
    if (!db) return res.status(503).json({ error: 'Database not configured' });
    const data = SettingsSchema.parse(req.body);
    await db.collection('settings').updateOne(
      { _id: SETTINGS_ID as any },
      { $set: data },
      { upsert: true }
    );
    res.json({ success: true });
  } catch (error) {
    const err = error as any;
    if (err.errors) return res.status(400).json({ error: err.errors[0].message });
    console.error('[settings] failed to update settings:', error);
    res.status(500).json({ error: 'Failed to update settings' });
  }
});

export default router;
