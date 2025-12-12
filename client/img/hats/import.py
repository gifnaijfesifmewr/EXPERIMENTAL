import os

# Get the folder where this script is located
folder_path = os.path.dirname(os.path.abspath(__file__))

# Output file in the same folder
output_file = os.path.join(folder_path, "images_list.txt")

# List of image file extensions to look for
image_extensions = (".png", ".jpg", ".jpeg", ".gif", ".bmp", ".tiff", ".webp")

# Get all image files in the folder
image_files = [f for f in os.listdir(folder_path) if f.lower().endswith(image_extensions)]

# Write each image filename wrapped in <li> tags
with open(output_file, "w") as f:
    for image in image_files:
        f.write(f"<li>{image}</li>\n")

print(f"{len(image_files)} image names written to {output_file}")
