// Strapi Database Configuration Template
// This file shows how to configure Strapi to use Supabase PostgreSQL
// 
// In Strapi Cloud: Set these as environment variables
// In Local Strapi: Copy to config/database.js

module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('DATABASE_HOST', 'db.wlwixxoqpidobhvvwudj.supabase.co'),
      port: env.int('DATABASE_PORT', 5432),
      database: env('DATABASE_NAME', 'postgres'),
      user: env('DATABASE_USERNAME', 'postgres'),
      password: env('DATABASE_PASSWORD', ''),
      ssl: env.bool('DATABASE_SSL', true) ? {
        rejectUnauthorized: false
      } : false,
      schema: env('DATABASE_SCHEMA', 'public'),
    },
    debug: false,
    pool: {
      min: 2,
      max: 10,
      acquireTimeoutMillis: 30000,
      createTimeoutMillis: 30000,
      destroyTimeoutMillis: 5000,
      idleTimeoutMillis: 30000,
      reapIntervalMillis: 1000,
      createRetryIntervalMillis: 100,
    },
  },
});

// Environment Variables Required:
// ================================
// DATABASE_HOST=db.wlwixxoqpidobhvvwudj.supabase.co
// DATABASE_PORT=5432
// DATABASE_NAME=postgres
// DATABASE_USERNAME=postgres
// DATABASE_PASSWORD=[Your Supabase DB Password]
// DATABASE_SSL=true
// DATABASE_SCHEMA=public

// How to get Supabase Database Password:
// =======================================
// 1. Go to Supabase Dashboard
// 2. Settings → Database
// 3. Look for "Database Password" section
// 4. If you forgot it, you can reset it
// 5. Copy the password (NOT the API keys!)

// Important Notes:
// ================
// - Use DATABASE PASSWORD, not SUPABASE_ANON_KEY or SERVICE_ROLE_KEY
// - SSL must be enabled for Supabase connections
// - Schema should be 'public' (default)
// - Strapi will create its own tables alongside your existing tables
// - Your direct tables (certificate_claims, contact_form_submissions) won't be affected
