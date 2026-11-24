#!/usr/bin/env python3
"""Genereert public/assets/social-share-v2.jpg (1200x630) met de huidige homepagekop.
Vereist: Pillow, fontTools, brotli. Draaien vanuit de projectmap:
  python3 scripts/generate-social-share.py
"""
import tempfile
from pathlib import Path
from PIL import Image, ImageDraw, ImageFont
from fontTools.ttLib.woff2 import decompress

ROOT = Path(__file__).resolve().parent.parent
FONTS = ROOT / "public" / "fonts"
OUT = ROOT / "public" / "assets" / "social-share-v2.jpg"

PETROL = (31, 61, 59)
CREME = (245, 239, 227)
GOUD = (242, 200, 121)
MINT_DOF = (191, 208, 203)
KORAAL = (232, 113, 74)

tmp = Path(tempfile.mkdtemp())
WEIGHT = {"bricolage-grotesque-500": 500, "instrument-sans-600": 600, "instrument-sans-500": 500}


def font(name, size):
    dst = tmp / f"{name}.ttf"
    if not dst.exists():
        decompress(str(FONTS / f"{name}.woff2"), str(dst))
    f = ImageFont.truetype(str(dst), size)
    try:
        vals = []
        for a in f.get_variation_axes():
            n = a["name"].decode() if isinstance(a["name"], bytes) else a["name"]
            vals.append(WEIGHT.get(name, 500) if n == "Weight" else a["default"])
        f.set_variation_by_axes(vals)
    except Exception:
        pass
    return f


W, H, SCALE = 1200, 630, 2
img = Image.new("RGB", (W * SCALE, H * SCALE), PETROL)
d = ImageDraw.Draw(img)
S = lambda v: int(v * SCALE)
X = S(104)

badge_font = font("instrument-sans-600", S(19))
badge_text = "LOOPBAANCOACH · AMSTERDAM, HAARLEM EN OMGEVING"
spacing = S(2.4)
bw = sum(d.textlength(ch, font=badge_font) for ch in badge_text) + spacing * (len(badge_text) - 1)
bx0, by0, pad_x, bh = X, S(52), S(26), S(56)
d.rounded_rectangle([bx0, by0, bx0 + bw + 2 * pad_x, by0 + bh], radius=bh // 2, outline=MINT_DOF, width=S(1.3))
tx, ty = bx0 + pad_x, by0 + bh / 2
for ch in badge_text:
    d.text((tx, ty), ch, font=badge_font, fill=MINT_DOF, anchor="lm")
    tx += d.textlength(ch, font=badge_font) + spacing

hf = font("bricolage-grotesque-500", S(104))
line_h = S(112)
base1 = S(150) + S(96)

# "Persoonlijke" met een koraal ruitje als i-punt
d.text((X, base1), "Persoonl", font=hf, fill=CREME, anchor="ls")
x2 = X + d.textlength("Persoonl", font=hf)
d.text((x2, base1), "ı", font=hf, fill=CREME, anchor="ls")
iw = d.textlength("ı", font=hf)
cxi, cyi, rr = x2 + iw / 2, base1 - S(104) * 0.70, S(10)
d.polygon([(cxi, cyi - rr), (cxi + rr, cyi), (cxi, cyi + rr), (cxi - rr, cyi)], fill=KORAAL)
d.text((x2 + iw, base1), "jke", font=hf, fill=CREME, anchor="ls")

d.text((X, base1 + line_h), "loopbaancoaching.", font=hf, fill=CREME, anchor="ls")
d.text((X, base1 + 2 * line_h), "Goed geregeld.", font=hf, fill=GOUD, anchor="ls")

small = font("instrument-sans-500", S(22))
d.text((X, S(585)), "vizieropscherp.nl", font=small, fill=MINT_DOF, anchor="ls")

img = img.resize((W, H), Image.LANCZOS)
img.save(OUT, "JPEG", quality=90, optimize=True, progressive=True)
print("klaar", OUT, OUT.stat().st_size)
