import { MongoClient } from 'mongodb';

/**
 * Cached MongoDB Atlas connection (safe for Next.js hot-reload + serverless).
 * Returns null when MONGODB_URI is not configured so the contact API can
 * degrade gracefully in local/dev without credentials.
 */

const uri = process.env.MONGODB_URI;
const dbName = process.env.MONGODB_DB || 'brandkettle';

let cached = (global as typeof globalThis & {
  _mongoClient?: Promise<MongoClient>;
})._mongoClient;

export async function getDb() {
  if (!uri) return null;

  if (!cached) {
    const client = new MongoClient(uri);
    cached = client.connect();
    (global as typeof globalThis & { _mongoClient?: Promise<MongoClient> })._mongoClient = cached;
  }

  const client = await cached;
  return client.db(dbName);
}
