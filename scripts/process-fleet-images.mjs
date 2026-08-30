import sharp from 'sharp';
import { mkdirSync } from 'node:fs';
import { dirname } from 'node:path';

const SRC = 'wmc_webp';
const OUT = 'src/assets/images/fleet';

// category, subfolder, destName, maxLongEdge, trimLetterbox, cropBottomPct (watermark)
const jobs = [
  [`${SRC}/16 Seater Exclusive/4a1792d7-8e1d-43a2-9fb3-01219871ee5c.webp`, 'minibuses', 'wmc-minibus-01-exterior.webp', 2000, false, 0],
  [`${SRC}/16 Seater Exclusive/aadc2892-ae25-402f-9c1c-4bc69a4163e5.webp`, 'interiors', 'wmc-minibus-01-interior-01.webp', 1600, false, 0],

  [`${SRC}/16 Seater Luxury/673562a7-a346-4e47-a579-cb1a1257954d.webp`, 'minibuses', 'wmc-minibus-02-exterior.webp', 2000, true, 0],
  [`${SRC}/16 Seater Luxury/6c95a352-de99-46d7-9c7b-1f31bddc96b9.webp`, 'interiors', 'wmc-minibus-02-interior-01.webp', 1600, false, 0],
  [`${SRC}/16 Seater Luxury/8e5d2f66-3156-4745-8a03-2d8038acc836.webp`, 'interiors', 'wmc-minibus-02-interior-02.webp', 1600, false, 0],
  [`${SRC}/16 Seater Luxury/9a380190-00c0-4e0a-9fe9-ff330944f571.webp`, 'minibuses', 'wmc-minibus-03-exterior.webp', 2000, true, 0],
  [`${SRC}/16 Seater Luxury/ecfadcf0-c5ae-4275-8f12-87ddb283b0bf.webp`, 'interiors', 'wmc-minibus-03-interior-01.webp', 1600, false, 0],

  [`${SRC}/16 Seater Mercedes Sprinter Standered/16 seater Mercedes sprinter standered.webp`, 'minibuses', 'wmc-minibus-04-exterior.webp', 2000, false, 0],

  [`${SRC}/20 Seater Executive (without a table)/19ece969-9aab-4568-8ccd-5e3fe6b3913e.webp`, 'minibuses', 'wmc-minibus-05-exterior-01.webp', 2000, false, 5],
  [`${SRC}/20 Seater Executive (without a table)/c221764c-ca44-413b-9d6e-e0a84271476d.webp`, 'minibuses', 'wmc-minibus-05-exterior-02.webp', 2000, false, 5],
  [`${SRC}/20 Seater Executive (without a table)/f610566b-6266-4d56-837c-2f59182fd619.webp`, 'interiors', 'wmc-minibus-05-interior-01.webp', 1600, false, 0],

  [`${SRC}/35 Seater Executive/201db7db-5690-45e4-be0b-ff8b1cfc183d.webp`, 'interiors', 'wmc-coach-01-interior-01.webp', 1600, true, 0],
  [`${SRC}/35 Seater Executive/5f5f9db3-a440-4224-82ab-3edd8c3e51c8.webp`, 'coaches', 'wmc-coach-01-exterior.webp', 2400, false, 0],

  [`${SRC}/53 Seater Executive/0d2fa6fd-b533-4f77-9341-a306e3182d17.webp`, 'coaches', 'wmc-coach-02-exterior-01.webp', 2000, false, 0],
  [`${SRC}/53 Seater Executive/a9c38e90-2f01-4e00-a1c5-7717f3c2be26.webp`, 'coaches', 'wmc-coach-02-exterior-02.webp', 2000, false, 0],

  [`${SRC}/8 Seater Ford Custom SILVER/8 seater Ford custom silver.webp`, 'minibuses', 'wmc-minibus-06-exterior.webp', 2000, false, 0],

  [`${SRC}/Car 4 Seater Audi a7 BLACK/Car 4 seater Audi a7 black.webp`, 'cars', 'wmc-car-01-exterior.webp', 2000, false, 0],
  [`${SRC}/Mercedes V Class/Mercedes V Class.webp`, 'cars', 'wmc-car-02-exterior.webp', 2000, false, 0],
];

for (const [src, category, name, maxLongEdge, trimLetterbox, cropBottomPct] of jobs) {
  const destPath = `${OUT}/${category}/${name}`;
  mkdirSync(dirname(destPath), { recursive: true });

  let pipeline = sharp(src).rotate();
  if (trimLetterbox) pipeline = pipeline.trim({ background: '#000000', threshold: 20 });

  if (cropBottomPct > 0) {
    const meta = await pipeline.clone().metadata();
    const { width, height } = await sharp(await pipeline.clone().toBuffer()).metadata();
    const w = width ?? meta.width;
    const h = height ?? meta.height;
    const cropH = Math.round(h * (1 - cropBottomPct / 100));
    pipeline = pipeline.extract({ left: 0, top: 0, width: w, height: cropH });
  }

  const meta = await pipeline.clone().metadata();
  const longEdge = Math.max(meta.width, meta.height);
  if (longEdge > maxLongEdge) {
    const resizeOpts = meta.width >= meta.height
      ? { width: maxLongEdge }
      : { height: maxLongEdge };
    pipeline = pipeline.resize(resizeOpts);
  }

  const budgetKB = maxLongEdge >= 2400 ? 450 : maxLongEdge >= 2000 ? 350 : 250;
  const base = await pipeline.clone().toBuffer();

  let final = null;
  for (const quality of [88, 85, 82, 79, 76, 73, 70, 67]) {
    const buf = await sharp(base).webp({ quality, effort: 6 }).toBuffer();
    final = buf;
    if (buf.length / 1024 <= budgetKB) break;
  }

  await sharp(final).toFile(destPath);
  console.log(`${src} -> ${destPath} (${Math.round(final.length / 1024)}KB)`);
}
