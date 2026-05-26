import { copyFile, readdir, rm, stat } from "node:fs/promises";
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

const textArtifacts = await readdir(outDir, { recursive: true });
await Promise.all(
  textArtifacts.map(async (entry) => {
    const filePath = path.join(outDir, entry);
    if (entry.startsWith("llms") || !entry.endsWith(".txt")) return;
    try {
      await rm(filePath);
    } catch (err) {
      if (err?.code !== "ENOENT") throw err;
    }
  }),
);
