import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

const postsDirectory = path.join(process.cwd(), "src/content/blog");
const publicDirectory = path.join(process.cwd(), "public");
const fallbackBlogImage = "/blog/before-after-examples.webp";

const categoryFallbackImages: Record<string, string> = {
  "AI Technology": "/blog/ai-restoration-technology.webp",
  "Best Practices": "/blog/preserving-photos.webp",
  Comparison: "/blog/artimagehub-vs-remini.webp",
  Comparisons: "/blog/artimagehub-vs-remini.webp",
  "Color Restoration": "/blog/before-after-examples.webp",
  "Era-Specific Restoration": "/blog/old-photo-guide.webp",
  "Family History": "/blog/preserving-photos.webp",
  Features: "/blog/ai-restoration-technology.webp",
  Genealogy: "/blog/preserving-photos.webp",
  Guides: "/blog/old-photo-guide.webp",
  "Historical Photography": "/blog/old-photo-guide.webp",
  "Historical Restoration": "/blog/old-photo-guide.webp",
  "Photo Damage Repair": "/blog/old-photo-guide.webp",
  "Photo Enhancement": "/blog/before-after-examples.webp",
  "Photo Preservation": "/blog/preserving-photos.webp",
  "Photo Restoration": "/blog/old-photo-guide.webp",
  Showcase: "/blog/before-after-examples.webp",
  Technology: "/blog/ai-restoration-technology.webp",
  "Tips & Guides": "/blog/old-photo-guide.webp",
  "Use Cases": "/blog/before-after-examples.webp",
};

export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  publishedAt: string;
  updatedAt?: string;
  author: string;
  authorRole?: string;
  authorBio?: string;
  category: string;
  tags: string[];
  image: string;
  coverColor: string;
  coverEmoji?: string;
  content: string;
  readingTime: number;
  headings: { id: string; text: string; level: number }[];
}

export interface BlogPostMeta {
  slug: string;
  title: string;
  description: string;
  publishedAt: string;
  updatedAt?: string;
  author: string;
  authorRole?: string;
  category: string;
  tags: string[];
  image: string;
  coverColor: string;
  coverEmoji?: string;
  readingTime: number;
}

function calculateReadingTime(content: string): number {
  const wordsPerMinute = 200;
  const wordCount = content.split(/\s+/).length;
  return Math.ceil(wordCount / wordsPerMinute);
}

function extractHeadings(
  htmlContent: string
): { id: string; text: string; level: number }[] {
  const headingRegex = /<h([2-3])[^>]*>(.*?)<\/h[2-3]>/gi;
  const headings: { id: string; text: string; level: number }[] = [];
  let match;

  while ((match = headingRegex.exec(htmlContent)) !== null) {
    const level = parseInt(match[1]);
    const text = match[2].replace(/<[^>]*>/g, "").trim();
    const id = text
      .toLowerCase()
      .replace(/[^a-z0-9\s-]/g, "")
      .replace(/\s+/g, "-")
      .replace(/-+/g, "-")
      .trim();
    headings.push({ id, text, level });
  }

  return headings;
}

function addHeadingIds(htmlContent: string): string {
  return htmlContent.replace(
    /<h([2-3])([^>]*)>(.*?)<\/h([2-3])>/gi,
    (_match, level, attrs, text, closeLevel) => {
      const plainText = text.replace(/<[^>]*>/g, "").trim();
      const id = plainText
        .toLowerCase()
        .replace(/[^a-z0-9\s-]/g, "")
        .replace(/\s+/g, "-")
        .replace(/-+/g, "-")
        .trim();
      return `<h${level}${attrs} id="${id}">${text}</h${closeLevel}>`;
    }
  );
}

const defaultCoverColors: Record<string, string> = {
  Technology: "from-blue-600 via-indigo-700 to-purple-800",
  Guides: "from-emerald-600 via-teal-700 to-cyan-800",
  Comparisons: "from-orange-500 via-amber-600 to-yellow-700",
  "Tips & Guides": "from-rose-500 via-pink-600 to-fuchsia-700",
  Showcase: "from-violet-600 via-purple-700 to-indigo-800",
};

function assetExists(assetPath: string): boolean {
  return fs.existsSync(path.join(publicDirectory, assetPath.replace(/^\//, "")));
}

function resolvePostImage(image: string | undefined, category: string): string {
  const candidates: string[] = [];

  if (image?.trim()) {
    const trimmedImage = image.trim();
    const parsed = path.posix.parse(trimmedImage);
    candidates.push(trimmedImage);

    for (const ext of [".webp", ".jpg", ".jpeg", ".png"]) {
      if (ext !== parsed.ext) {
        candidates.push(path.posix.join(parsed.dir, `${parsed.name}${ext}`));
      }
    }
  }

  candidates.push(categoryFallbackImages[category] || fallbackBlogImage, fallbackBlogImage);

  for (const candidate of candidates) {
    if (assetExists(candidate)) {
      return candidate;
    }
  }

  return fallbackBlogImage;
}

export async function getAllPosts(): Promise<BlogPostMeta[]> {
  if (!fs.existsSync(postsDirectory)) {
    return [];
  }

  const fileNames = fs.readdirSync(postsDirectory);
  const posts = fileNames
    .filter((fileName) => fileName.endsWith(".md"))
    .map((fileName) => {
      const slug = fileName.replace(/\.md$/, "");
      const fullPath = path.join(postsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, "utf8");
      const { data, content } = matter(fileContents);

      return {
        slug,
        title: data.title,
        description: data.description,
        publishedAt: data.publishedAt,
        updatedAt: data.updatedAt,
        author: data.author,
        authorRole: data.authorRole,
        category: data.category,
        tags: data.tags || [],
        image: resolvePostImage(data.image, data.category || ""),
        coverColor:
          data.coverColor ||
          defaultCoverColors[data.category] ||
          "from-gray-700 to-gray-900",
        coverEmoji: data.coverEmoji,
        readingTime: calculateReadingTime(content),
      };
    });

  return posts.sort((a, b) => {
    return (
      new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
    );
  });
}

export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
  try {
    const fullPath = path.join(postsDirectory, `${slug}.md`);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data, content } = matter(fileContents);

    const processedContent = await remark().use(html, { allowDangerousHtml: true }).process(content);
    let contentHtml = processedContent.toString();

    const headings = extractHeadings(contentHtml);
    contentHtml = addHeadingIds(contentHtml);

    return {
      slug,
      title: data.title,
      description: data.description,
      publishedAt: data.publishedAt,
      updatedAt: data.updatedAt,
      author: data.author,
      authorRole: data.authorRole,
      authorBio: data.authorBio,
      category: data.category,
      tags: data.tags || [],
      image: resolvePostImage(data.image, data.category || ""),
      coverColor:
        data.coverColor ||
        defaultCoverColors[data.category] ||
        "from-gray-700 to-gray-900",
      coverEmoji: data.coverEmoji,
      content: contentHtml,
      readingTime: calculateReadingTime(content),
      headings,
    };
  } catch {
    return null;
  }
}

export async function getRelatedPosts(
  currentSlug: string,
  category: string,
  limit: number = 3
): Promise<BlogPostMeta[]> {
  const posts = await getAllPosts();
  return posts
    .filter((p) => p.slug !== currentSlug)
    .sort((a, b) => {
      const aMatch = a.category === category ? 1 : 0;
      const bMatch = b.category === category ? 1 : 0;
      return bMatch - aMatch;
    })
    .slice(0, limit);
}
