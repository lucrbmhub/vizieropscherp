#!/usr/bin/env python3
"""Generate per-article social share images for Vizier op Scherp.

Reads titles from src/routes/inzichten.<slug>.tsx (og:title, minus " | Vizier op Scherp")
and renders a 1200x630 PNG per article to public/assets/og/<slug>.png.

Requires: Pillow, fontTools, brotli. Run from project root:
  python3 scripts/generate-og-images.py
"""
from __future__ import annotations
import os, re, sys, tempfile
from pathlib import Path
from PIL import Image, ImageDraw, ImageFont
from fontTools.ttLib.woff2 import decompress

ROOT = Path(__file__).resolve().parent.parent
ROUTES = ROOT / "src" / "routes"
OUT_DIR = ROOT / "public" / "assets" / "og"
FONTS_DIR = ROOT / "public" / "fonts"

CATEGORIES = {
    "werkgevers": ("Voor werkgevers & HR", [
        "van-werven-naar-behouden","medewerker-zit-vast","inzicht-verandert-gedrag-niet",
        "duurzame-inzetbaarheid-werkgever","loopbaangesprek-met-medewerker",
        "skillsgericht-werven","kosten-van-een-verkeerde-match",
        "outplacement-of-loopbaancoaching","ervaren-talent-als-kans",
        "generaties-op-de-werkvloer","het-tegenbod","starters-behouden",
        "mentale-vermoeidheid-en-eigen-regie",
    ]),
    "sterker": ("Sterker in je huidige rol", [
        "job-crafting","vier-basisbehoeften-in-werk","energie-en-motivatie-in-werk",
        "grenzen-stellen-op-werk","innerlijke-criticus","impostersyndroom-twijfel-als-kracht",
        "persoonlijke-effectiviteit","je-eerste-baan","passie-terugvinden-in-je-werk",
        "duurzaam-inzetbaar-blijven","weten-maar-niet-doen","belemmerende-overtuigingen-werk",
    ]),
    "richting": ("Een nieuwe richting", [
        "hetzelfde-gevoel-een-andere-baan","richting-vinden-in-je-loopbaan",
        "niet-kunnen-kiezen-loopbaan","vastzitten-in-een-goede-baan",
        "loopbaanswitch-na-je-40e","solliciteren-en-arbeidsmarkt",
        "goede-loopbaancoach-kiezen",
    ]),
}

PETROL = (31, 61, 59)
CREME = (245, 239, 227)
GOUD = (242, 200, 121)
MINT_DOF = (191, 208, 203)
KORAAL = (232, 113, 74)
WATERMARK = (216, 229, 226, 20)  # rgba(216,229,226,0.08)


def prep_fonts() -> dict[str, Path]:
    tmp = Path(tempfile.mkdtemp(prefix="og-fonts-"))
    pairs = {
        "bricolage-500": FONTS_DIR / "bricolage-grotesque-500.woff2",
        "instrument-500": FONTS_DIR / "instrument-sans-500.woff2",
        "instrument-600": FONTS_DIR / "instrument-sans-600.woff2",
    }
    out = {}
    for name, src in pairs.items():
        dst = tmp / f"{name}.ttf"
        decompress(str(src), str(dst))
        out[name] = dst
    return out


def read_title(slug: str) -> str:
    p = ROUTES / f"inzichten.{slug}.tsx"
    text = p.read_text(encoding="utf-8")
    m = re.search(r'property:\s*"og:title",\s*content:\s*"((?:[^"\\]|\\.)*)"', text)
    if not m:
        raise RuntimeError(f"No og:title in {p}")
    title = m.group(1).replace('\\"', '"').replace("\\\\", "\\")
    return title.replace(" | Vizier op Scherp", "").strip()


def wrap_text(text: str, font: ImageFont.FreeTypeFont, max_width: int) -> list[str]:
    words = text.split()
    lines, current = [], ""
    for w in words:
        trial = (current + " " + w).strip()
        if font.getlength(trial) <= max_width:
            current = trial
        else:
            if current:
                lines.append(current)
            current = w
    if current:
        lines.append(current)
    return lines


def fit_title(draw, text: str, font_path: Path, max_width: int, max_height: int,
              start_size: int = 66, min_size: int = 44, max_lines: int = 4):
    for size in range(start_size, min_size - 1, -2):
        font = ImageFont.truetype(str(font_path), size)
        lines = wrap_text(text, font, max_width)
        line_h = int(size * 1.12)
        total_h = line_h * len(lines)
        if len(lines) <= max_lines and total_h <= max_height:
            return font, lines, line_h
    # fallback: minimum
    font = ImageFont.truetype(str(font_path), min_size)
    lines = wrap_text(text, font, max_width)
    return font, lines, int(min_size * 1.12)


LOGO_PATH = ROOT / "public" / "assets" / "vizier-logo-creme.png"


def paste_wordmark(img: Image.Image, x: int, y: int, width: int = 320):
    logo = Image.open(LOGO_PATH).convert("RGBA")
    ratio = logo.height / logo.width
    height = int(width * ratio)
    logo = logo.resize((width, height), resample=Image.LANCZOS)
    img.alpha_composite(logo, (x, y))


def draw_watermark(img: Image.Image):
    # subtle rotated square outline, half off canvas right
    W, H = img.size
    size = 520
    wm = Image.new("RGBA", (size * 2, size * 2), (0, 0, 0, 0))
    wd = ImageDraw.Draw(wm)
    off = size // 2
    wd.rectangle([off, off, off + size, off + size],
                 outline=(216, 229, 226, 22), width=2)
    wm = wm.rotate(45, resample=Image.BICUBIC)
    img.alpha_composite(wm, (W - size - 40, H - size - 40))


def render(slug: str, title: str, eyebrow: str, fonts: dict[str, Path]) -> Path:
    W, H = 1200, 630
    img = Image.new("RGBA", (W, H), PETROL + (255,))
    draw_watermark(img)
    draw = ImageDraw.Draw(img)

    MARGIN = 72

    # Wordmark logo (top-left)
    paste_wordmark(img, MARGIN, MARGIN, width=320)

    # Eyebrow (goud, uppercase, letter-spacing)
    eb_font = ImageFont.truetype(str(fonts["instrument-600"]), 20)
    eb_text = eyebrow.upper()
    # emulate letter-spacing 0.2em by drawing per-char
    eb_x = MARGIN
    eb_y = 240
    spacing = int(20 * 0.18)
    for ch in eb_text:
        draw.text((eb_x, eb_y), ch, font=eb_font, fill=GOUD)
        eb_x += int(eb_font.getlength(ch)) + spacing

    # Title
    title_max_w = W - MARGIN * 2
    title_max_h = 340  # from eyebrow bottom down to footer
    title_font, lines, line_h = fit_title(
        draw, title, fonts["bricolage-500"],
        max_width=title_max_w, max_height=title_max_h,
        start_size=66, min_size=44, max_lines=4,
    )
    ty = 285
    for line in lines:
        draw.text((MARGIN, ty), line, font=title_font, fill=CREME)
        ty += line_h

    # Footer URL (bottom-left)
    url_font = ImageFont.truetype(str(fonts["instrument-500"]), 22)
    draw.text((MARGIN, H - MARGIN - 22), "www.vizieropscherp.nl",
              font=url_font, fill=MINT_DOF)

    out_path = OUT_DIR / f"{slug}.png"
    OUT_DIR.mkdir(parents=True, exist_ok=True)
    img.convert("RGB").save(out_path, "PNG", optimize=True)
    return out_path


def main():
    fonts = prep_fonts()
    total = 0
    for cat, (label, slugs) in CATEGORIES.items():
        for slug in slugs:
            title = read_title(slug)
            path = render(slug, title, label, fonts)
            size_kb = path.stat().st_size / 1024
            print(f"  {slug}.png  {size_kb:6.1f} KB  «{title[:60]}»")
            total += 1
    print(f"\nGenerated {total} images in {OUT_DIR}")


if __name__ == "__main__":
    main()
