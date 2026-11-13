#!/usr/bin/env node
/**
 * One-off script: recursively compresses every .png/.jpg/.jpeg screenshot
 * in public/assets/projects/ into an optimized .webp (max-width 1920px,
 * quality 80), removes the original file, and rewrites any matching
 * `/assets/projects/...` image paths in projects.ts to use the new .webp
 * extension.
 *
 * Usage: npm run compress-images
 */
const fs = require("fs");
const path = require("path");
const sharp = require("sharp");

const ASSETS_DIR = path.join(__dirname, "..", "public", "assets", "projects");
const PROJECTS_FILE = path.join(
  __dirname,
  "..",
  "src",
  "components",
  "Portfolio",
  "projects.ts"
);
const MAX_WIDTH = 1920;
const QUALITY = 80;
const SOURCE_EXTENSIONS = [".png", ".jpg", ".jpeg"];

function findSourceImages(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...findSourceImages(fullPath));
    } else if (SOURCE_EXTENSIONS.includes(path.extname(entry.name).toLowerCase())) {
      files.push(fullPath);
    }
  }
  return files;
}

async function compressImage(filePath) {
  const { dir, name } = path.parse(filePath);
  const outputPath = path.join(dir, `${name}.webp`);

  await sharp(filePath)
    .resize({ width: MAX_WIDTH, withoutEnlargement: true })
    .webp({ quality: QUALITY })
    .toFile(outputPath);

  const originalSize = fs.statSync(filePath).size;
  const newSize = fs.statSync(outputPath).size;
  fs.unlinkSync(filePath);

  return { filePath, outputPath, originalSize, newSize };
}

function updateProjectsFileExtensions() {
  const content = fs.readFileSync(PROJECTS_FILE, "utf8");
  const updated = content.replace(
    /(\/assets\/projects\/[^"'`]+)\.(png|jpe?g)/gi,
    "$1.webp"
  );

  if (updated !== content) {
    fs.writeFileSync(PROJECTS_FILE, updated, "utf8");
    console.log(`\nUpdated image extensions in ${path.relative(process.cwd(), PROJECTS_FILE)}`);
  } else {
    console.log("\nNo .png/.jpeg references found in projects.ts to update.");
  }
}

async function main() {
  if (!fs.existsSync(ASSETS_DIR)) {
    console.error(`Directory not found: ${ASSETS_DIR}`);
    process.exit(1);
  }

  const files = findSourceImages(ASSETS_DIR);

  if (files.length === 0) {
    console.log("No .png/.jpg/.jpeg images found under public/assets/projects/.");
    return;
  }

  console.log(`Found ${files.length} image(s) to compress...\n`);

  let totalBefore = 0;
  let totalAfter = 0;

  for (const file of files) {
    const result = await compressImage(file);
    totalBefore += result.originalSize;
    totalAfter += result.newSize;
    console.log(
      `${path.relative(ASSETS_DIR, result.filePath)} -> ${path.relative(ASSETS_DIR, result.outputPath)} ` +
        `(${(result.originalSize / 1024).toFixed(0)}KB -> ${(result.newSize / 1024).toFixed(0)}KB)`
    );
  }

  console.log(
    `\nDone. Total size: ${(totalBefore / 1024 / 1024).toFixed(2)}MB -> ${(totalAfter / 1024 / 1024).toFixed(2)}MB`
  );

  updateProjectsFileExtensions();
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
