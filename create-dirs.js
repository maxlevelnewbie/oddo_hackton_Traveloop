#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const dirs = [
  'app',
  'app/api',
  'app/api/auth',
  'app/(auth)',
  'app/(auth)/login',
  'app/(auth)/signup',
  'app/(main)',
  'app/(main)/dashboard',
  'app/(main)/trips',
  'app/(main)/trips/[id]',
  'app/(main)/trips/[id]/edit',
  'app/(main)/trips/[id]/budget',
  'app/(main)/trips/[id]/packing',
  'app/(main)/trips/[id]/notes',
  'app/(main)/profile',
  'components',
  'components/ui',
  'components/layouts',
  'components/forms',
  'lib',
  'lib/auth',
  'lib/prisma',
  'lib/validators',
  'server',
  'server/actions',
  'server/services',
  'hooks',
  'styles',
  'types',
  'public',
  'public/images',
  'prisma',
];

const baseDir = process.cwd();

dirs.forEach(dir => {
  const fullPath = path.join(baseDir, dir);
  if (!fs.existsSync(fullPath)) {
    fs.mkdirSync(fullPath, { recursive: true });
    console.log(`✓ Created ${dir}`);
  }
});

console.log('\n✨ Directory structure created successfully!');
