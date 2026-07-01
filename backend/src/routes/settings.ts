import { Router } from 'express';
import { db } from '../db';
import { SettingsSchema } from '../lib/schemas';
import { requireAuth } from '../middlewares/requireAuth';

const router = Router();

// Assuming settings are stored in a single document with a specific ID, e.g., 'global_settings'
const SETTINGS_ID = 'global_settings';

// Get settings
router.get('/', async (req, res) => {
  try {
    let settings = await db.collection('settings').findOne({ _id: SETTINGS_ID as any });
    if (!settings) {
      settings = { _id: SETTINGS_ID as any }; // Default empty settings
    }
    res.json(settings);
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
});

// Update settings
router.put('/', requireAuth, async (req, res) => {
  try {
    const data = SettingsSchema.parse(req.body);
    await db.collection('settings').updateOne(
      { _id: SETTINGS_ID as any },
      { $set: data },
      { upsert: true }
    );
    res.json({ success: true });
  } catch (err: any) {
    if (err.errors) return res.status(400).json({ error: err.errors[0].message });
    res.status(500).json({ error: err.message });
  }
});

export default router;
