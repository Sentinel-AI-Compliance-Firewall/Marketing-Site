"""
Frame Compression Script for Sentinel Marketing Site
Compresses all frames to ~150KB while maintaining visual quality
"""

import os
from PIL import Image
from pathlib import Path

# Configuration
FRAMES_DIR = Path(__file__).parent / "public" / "Frames"
OUTPUT_DIR = FRAMES_DIR  # Overwrite originals (backup first if needed)
TARGET_WIDTH = 1920  # Max width in pixels
QUALITY = 85  # JPEG quality (85 is good balance)

def compress_image(input_path, output_path, target_width=1920, quality=85):
    """Compress a single image"""
    with Image.open(input_path) as img:
        # Get original dimensions
        orig_width, orig_height = img.size

        # Calculate new dimensions maintaining aspect ratio
        if orig_width > target_width:
            ratio = target_width / orig_width
            new_height = int(orig_height * ratio)
            img = img.resize((target_width, new_height), Image.LANCZOS)

        # Convert to RGB if necessary (for JPEG)
        if img.mode in ('RGBA', 'P'):
            img = img.convert('RGB')

        # Save with compression
        img.save(output_path, 'JPEG', quality=quality, optimize=True)

def main():
    # Get all frame files
    frames = sorted(FRAMES_DIR.glob("frame*.jpg"))
    total = len(frames)

    if total == 0:
        print(f"No frames found in {FRAMES_DIR}")
        return

    print(f"Found {total} frames to compress")
    print(f"Settings: {TARGET_WIDTH}px width, {QUALITY}% quality")
    print("-" * 50)

    total_original = 0
    total_compressed = 0

    for i, frame_path in enumerate(frames, 1):
        original_size = frame_path.stat().st_size
        total_original += original_size

        # Compress
        compress_image(frame_path, frame_path, TARGET_WIDTH, QUALITY)

        compressed_size = frame_path.stat().st_size
        total_compressed += compressed_size

        reduction = ((original_size - compressed_size) / original_size) * 100

        print(f"[{i}/{total}] {frame_path.name}: {original_size/1024/1024:.1f}MB -> {compressed_size/1024:.0f}KB ({reduction:.0f}% reduction)")

    print("-" * 50)
    print(f"Total: {total_original/1024/1024:.0f}MB -> {total_compressed/1024/1024:.0f}MB")
    print(f"Overall reduction: {((total_original - total_compressed) / total_original) * 100:.0f}%")
    print("Done!")

if __name__ == "__main__":
    main()
