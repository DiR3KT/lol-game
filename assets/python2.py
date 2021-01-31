import os
import sys
from PIL import Image

for filename in os.listdir("icons"):
    im = Image.open("icons/"+filename)
    im.save("newicons/"+filename.lower())
