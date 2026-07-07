import { MongoClient, ObjectId } from 'mongodb';

/** Returns a valid ObjectId or null if the id is not a 24-char hex string. */
export function toObjectId(id: string): ObjectId | null {
  return /^[0-9a-fA-F]{24}$/.test(id) ? new ObjectId(id) : null;
}

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
