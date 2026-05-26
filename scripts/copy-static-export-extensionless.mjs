import { copyFile, readdir, stat } from "node:fs/promises";
import path from "node:path";

const outDir = path.resolve("out");

async function copyExtensionlessHtml(dir) {
  const entries = await readdir(dir, { withFileTypes: true });

  await Promise.all(
    entries.map(async (entry) => {
      if (!entry.isDirectory()) return;

      const childDir = path.join(dir, entry.name);
      const indexHtml = path.join(childDir, "index.html");

      try {
        const indexStat = await stat(indexHtml);
        if (indexStat.isFile()) {
          const relativeDir = path.relative(outDir, childDir);
          if (relativeDir && !relativeDir.startsWith("_")) {
            await copyFile(indexHtml, path.join(outDir, `${relativeDir}.html`));
          }
        }
      } catch (err) {
        if (err?.code !== "ENOENT") throw err;
      }

      await copyExtensionlessHtml(childDir);
    }),
  );
}

await copyExtensionlessHtml(outDir);
