"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDb = getDb;
const mongodb_1 = require("mongodb");
/**
 * Cached MongoDB Atlas connection (safe for Next.js hot-reload + serverless).
 * Returns null when MONGODB_URI is not configured so the contact API can
 * degrade gracefully in local/dev without credentials.
 */
const uri = process.env.MONGODB_URI;
const dbName = process.env.MONGODB_DB || 'brandkettle';
let cached = global._mongoClient;
async function getDb() {
    if (!uri)
        return null;
    if (!cached) {
        const client = new mongodb_1.MongoClient(uri);
        cached = client.connect();
        global._mongoClient = cached;
    }
    const client = await cached;
    return client.db(dbName);
}
