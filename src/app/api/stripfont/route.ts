import opentype from "opentype.js";

async function handler(req: Request, res: Response) {
  if (req.method !== "POST") {
    throw new Error(
      `The HTTP ${req.method} method is not supported at this route.`,
    );
  }

  try {
    const { fontData, charactersToKeep } = await req.json();
    console.log("typeof fontData:", typeof fontData);
    console.log("charactersToKeep:", charactersToKeep);
    console.log("ArrayBuffer.isView(fontData):", ArrayBuffer.isView(fontData));

    const font = opentype.parse(fontData as ArrayBuffer);

    const modifiedFont = filterGlyphs(font, charactersToKeep);

    const modifiedFontData = modifiedFont.toArrayBuffer();
    const modifiedFontBase64 = Buffer.from(modifiedFontData).toString("base64");
    console.log("modifiedFontBase64:", modifiedFontBase64);
    return new Response(JSON.stringify({ modifiedFont: modifiedFontBase64 }));
    // res.status(200).json({ modifiedFont: modifiedFontBase64 });
  } catch (error) {
    throw new Error(`Error occurred while processing the font file.`);
  }
}

function filterGlyphs(
  font: opentype.Font,
  charactersToKeep: string,
): opentype.Font {
  const glyphsToKeep: opentype.Glyph[] = [];

  for (const char of charactersToKeep) {
    const glyph = font.charToGlyph(char);
    if (glyph) {
      glyphsToKeep.push(glyph);
    }
  }

  const modifiedFont = new opentype.Font({
    familyName: font.getEnglishName("fullName"),
    styleName: font.getEnglishName("styleName"),
    unitsPerEm: font.unitsPerEm,
    ascender: font.ascender,
    descender: font.descender,
    glyphs: glyphsToKeep,
  });

  return modifiedFont;
}

export { handler as POST };
