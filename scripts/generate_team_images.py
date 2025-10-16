#!/usr/bin/env python3
"""
Generate placeholder team member images with initials.
Creates both black & white and color variants.
"""

from PIL import Image, ImageDraw, ImageFont
import os

# Team members data
team_members = [
    {
        "name": "Amanti Melkamu",
        "slug": "amanti-melkamu",
        "initials": "AM",
        "color": "#3B82F6",  # Blue
    },
    {
        "name": "Liban Kano",
        "slug": "liban-kano",
        "initials": "LK",
        "color": "#8B5CF6",  # Purple
    },
    {
        "name": "Robera Miti",
        "slug": "robera-miti",
        "initials": "RM",
        "color": "#EC4899",  # Pink
    },
    {
        "name": "Serious AI Agent",
        "slug": "serious-ai-agent",
        "initials": "AI",
        "color": "#14B8A6",  # Teal
    },
]

# Image settings
IMAGE_SIZE = 1000
BACKGROUND_DARK = "#0F172A"  # Slate 900

def create_image(initials, color_hex, is_color=True):
    """Create a placeholder image with initials."""
    # Create a new image
    img = Image.new("RGB", (IMAGE_SIZE, IMAGE_SIZE), BACKGROUND_DARK)
    draw = ImageDraw.Draw(img)

    # Try to use a nice font, fall back to default if not available
    try:
        font_size = int(IMAGE_SIZE * 0.4)
        font = ImageFont.truetype("/System/Library/Fonts/Helvetica.ttc", font_size)
    except:
        font = ImageFont.load_default()

    # For B&W images, use light gray
    text_color = color_hex if is_color else "#E5E7EB"

    # Calculate text position (center)
    bbox = draw.textbbox((0, 0), initials, font=font)
    text_width = bbox[2] - bbox[0]
    text_height = bbox[3] - bbox[1]
    x = (IMAGE_SIZE - text_width) / 2
    y = (IMAGE_SIZE - text_height) / 2

    # Draw the initials
    draw.text((x, y), initials, fill=text_color, font=font)

    return img

def main():
    """Generate all team member images."""
    output_dir = os.path.join(
        os.path.dirname(__file__),
        "..",
        "public",
        "team"
    )

    os.makedirs(output_dir, exist_ok=True)

    for member in team_members:
        slug = member["slug"]
        color = member["color"]
        initials = member["initials"]

        print(f"Generating images for {member['name']}...")

        # Generate B&W image
        bw_img = create_image(initials, color, is_color=False)
        bw_path = os.path.join(output_dir, f"{slug}-bw.jpg")
        bw_img.save(bw_path, quality=95)
        print(f"  ✓ Saved: {bw_path}")

        # Generate color image
        color_img = create_image(initials, color, is_color=True)
        color_path = os.path.join(output_dir, f"{slug}-color.jpg")
        color_img.save(color_path, quality=95)
        print(f"  ✓ Saved: {color_path}")

    print("\n✅ All images generated successfully!")

if __name__ == "__main__":
    main()
