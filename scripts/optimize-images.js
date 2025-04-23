/**
 * Image optimization script for the portfolio project
 *
 * This script optimizes images in the public directory to improve loading performance.
 * It creates WebP versions of all images and resizes them for responsive delivery.
 *
 * Run with: node scripts/optimize-images.js
 */

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { promisify } from "util";
import sharp from "sharp";

const readdir = promisify(fs.readdir);
const stat = promisify(fs.stat);

// Configuration
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const SOURCE_DIR = path.join(path.resolve(__dirname, ".."), "public");
const IMAGE_EXTENSIONS = [".jpg", ".jpeg", ".png", ".gif"];
const SIZES = [640, 768, 1024, 1280, 1920]; // Responsive sizes

// Function to recursively get all files in a directory
async function getFiles(dir) {
  const subdirs = await readdir(dir);
  const files = await Promise.all(
    subdirs.map(async (subdir) => {
      const res = path.resolve(dir, subdir);
      return (await stat(res)).isDirectory() ? getFiles(res) : res;
    })
  );
  return files.flat();
}

// Function to optimize an image
async function optimizeImage(filepath) {
  if (!IMAGE_EXTENSIONS.includes(path.extname(filepath).toLowerCase())) {
    return;
  }

  console.log(`Optimizing: ${filepath}`);
  const filename = path.basename(filepath, path.extname(filepath));
  const directory = path.dirname(filepath);

  try {
    // Create WebP version at original size
    await sharp(filepath)
      .webp({ quality: 80 })
      .toFile(path.join(directory, `${filename}.webp`));

    // Create responsive versions
    for (const width of SIZES) {
      // Skip if the original is smaller
      const metadata = await sharp(filepath).metadata();
      if (metadata.width <= width) continue;

      // Create resized JPG
      await sharp(filepath)
        .resize(width)
        .jpeg({ quality: 80, progressive: true })
        .toFile(path.join(directory, `${filename}-${width}.jpg`));

      // Create resized WebP
      await sharp(filepath)
        .resize(width)
        .webp({ quality: 80 })
        .toFile(path.join(directory, `${filename}-${width}.webp`));
    }

    console.log(`Successfully optimized: ${filepath}`);
  } catch (error) {
    console.error(`Error optimizing ${filepath}:`, error);
  }
}

// Main function
async function optimizeImages() {
  try {
    console.log("Starting image optimization...");

    // Check if sharp is installed
    try {
      // Dynamic import to check if sharp is available
      await import("sharp");
    } catch (error) {
      console.error(
        "Sharp is not installed. Please install it using: npm install sharp"
      );
      process.exit(1);
    }

    // Get all files
    const files = await getFiles(SOURCE_DIR);

    // Filter image files
    const imageFiles = files.filter((file) =>
      IMAGE_EXTENSIONS.includes(path.extname(file).toLowerCase())
    );

    console.log(`Found ${imageFiles.length} images to optimize`);

    // Process all images
    await Promise.all(imageFiles.map(optimizeImage));

    console.log("Image optimization complete!");
  } catch (error) {
    console.error("Error during image optimization:", error);
  }
}

// Run the optimization
optimizeImages();
