import { mkdir, readdir, readFile, rm, stat, writeFile } from 'node:fs/promises'
import path from 'node:path'

const ROOT = process.cwd()
const BLOG_DIR = path.join(ROOT, 'blog')
const POSTS_PER_PAGE = 6
const SITE_URL = 'https://www.monerokon.org'

const pageStyle = `<style>
.mk-blog-index {
  margin: 0 auto;
  max-width: 860px;
  padding: 1rem 0 2.5rem;
}

.mk-blog-list {
  display: grid;
  gap: 1rem;
}

.mk-blog-post {
  display: grid;
  gap: 0.75rem;
  border: 1px solid color-mix(in srgb, var(--vp-c-divider) 16%, transparent);
  border-radius: 20px;
  padding: 1.25rem 1.35rem 1.2rem;
  background: color-mix(in srgb, var(--vp-c-bg-elv) 92%, white 8%);
  transition: border-color 0.2s ease, transform 0.2s ease, background-color 0.2s ease;
}

.dark .mk-blog-post {
  background: color-mix(in srgb, var(--vp-c-bg-elv) 96%, black 4%);
}

.mk-blog-post:hover {
  border-color: color-mix(in srgb, var(--vp-c-brand-1) 42%, var(--vp-c-divider));
  transform: translateY(-2px);
}

.mk-blog-post h2 {
  margin: 0;
  font-size: 1.2rem;
  line-height: 1.25;
}

.mk-blog-post h2 a {
  color: var(--vp-c-text-2);
  text-decoration: none;
}

.mk-blog-post h2 a:hover {
  color: var(--vp-c-brand-1);
}

.mk-blog-description {
  margin: 0;
  color: var(--vp-c-text-1);
  line-height: 1.65;
}

.mk-blog-date {
  margin: 0;
  padding-top: 0.8rem;
  border-top: 1px solid color-mix(in srgb, var(--vp-c-divider) 16%, transparent);
  color: var(--vp-c-brand-1);
  font-size: 0.82rem;
  letter-spacing: 0.08em;
}

.mk-blog-pagination {
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  margin-top: 1.5rem;
}

.mk-blog-pagination a {
  display: inline-flex;
  align-items: center;
  min-height: 44px;
  border: 1px solid color-mix(in srgb, var(--vp-c-divider) 18%, transparent);
  border-radius: 999px;
  padding: 0.65rem 1rem;
  color: var(--vp-c-text-2);
  text-decoration: none;
  transition: border-color 0.2s ease, transform 0.2s ease;
}

.mk-blog-pagination a:hover {
  border-color: var(--vp-c-brand-1);
  transform: translateY(-1px);
}

.mk-blog-pagination-spacer {
  min-width: 1px;
}

@media (max-width: 640px) {
  .mk-blog-index {
    padding-top: 0.25rem;
  }

  .mk-blog-post {
    padding: 1rem 1rem 0.95rem;
  }
}
</style>
`

async function main() {
  const posts = await collectPosts()
  posts.sort((a, b) => b.date.localeCompare(a.date))

  await writeIndexPages(posts)
  await writeRss(posts)
}

async function collectPosts() {
  const entries = await readdir(BLOG_DIR, { withFileTypes: true })
  const years = entries
    .filter((entry) => entry.isDirectory() && /^\d{4}$/.test(entry.name))
    .map((entry) => entry.name)
    .sort()

  const posts = []

  for (const year of years) {
    const yearDir = path.join(BLOG_DIR, year)
    const files = await readdir(yearDir, { withFileTypes: true })

    for (const file of files) {
      if (!file.isFile() || !file.name.endsWith('.md') || file.name === 'index.md') {
        continue
      }

      const filePath = path.join(yearDir, file.name)
      const content = await readFile(filePath, 'utf8')
      const frontmatter = parseFrontmatter(content)

      if (!isCompletePost(frontmatter)) {
        continue
      }

      const slug = file.name.slice(0, -3)
      const url = `/blog/${year}/${slug}`

      posts.push({
        title: frontmatter.title,
        description: frontmatter.description,
        date: frontmatter.date,
        url,
      })
    }
  }

  return posts
}

function parseFrontmatter(content) {
  const match = content.match(/^---\n([\s\S]*?)\n---/)
  if (!match) {
    return {}
  }

  const lines = match[1].split('\n')
  const data = {}

  for (const rawLine of lines) {
    const line = rawLine.trim()
    if (!line || line.startsWith('#')) {
      continue
    }

    const separatorIndex = line.indexOf(':')
    if (separatorIndex === -1) {
      continue
    }

    const key = line.slice(0, separatorIndex).trim()
    const value = line.slice(separatorIndex + 1).trim()
    data[key] = parseScalar(value)
  }

  return data
}

function parseScalar(value) {
  if (
    (value.startsWith("'") && value.endsWith("'")) ||
    (value.startsWith('"') && value.endsWith('"'))
  ) {
    return value.slice(1, -1)
  }

  if (value === 'true') return true
  if (value === 'false') return false

  return value
}

function isCompletePost(frontmatter) {
  return Boolean(
    frontmatter.title &&
      frontmatter.description &&
      frontmatter.date &&
      frontmatter.draft !== true &&
      frontmatter.hidden !== true
  )
}

async function writeIndexPages(posts) {
  const totalPages = Math.max(1, Math.ceil(posts.length / POSTS_PER_PAGE))
  const pageDir = path.join(BLOG_DIR, 'page')

  await rm(pageDir, { recursive: true, force: true })

  for (let page = 1; page <= totalPages; page += 1) {
    const pagePosts = posts.slice((page - 1) * POSTS_PER_PAGE, page * POSTS_PER_PAGE)
    const content = renderIndexPage(pagePosts, page, totalPages)
    const outputPath =
      page === 1
        ? path.join(BLOG_DIR, 'index.md')
        : path.join(pageDir, String(page), 'index.md')

    await mkdir(path.dirname(outputPath), { recursive: true })
    await writeFile(outputPath, content, 'utf8')
  }
}

function renderIndexPage(posts, page, totalPages) {
  const title = page === 1 ? 'Blog' : `Blog - Page ${page}`
  const cards = posts
    .map(
      (post) => `    <article class="mk-blog-post">
      <h2><a href="${post.url}">${escapeHtml(post.title)}</a></h2>
      <p class="mk-blog-description">${escapeHtml(post.description)}</p>
      <p class="mk-blog-date">${formatDisplayDate(post.date)}</p>
    </article>`
    )
    .join('\n')

  const nav = renderPagination(page, totalPages)

  return `---
layout: doc
title: ${title}
description: MoneroKon announcements and press releases
prev: false
next: false
---

<div class="mk-blog-index">
  <!-- AUTO-GENERATED: BLOG-LIST START -->
  <section class="mk-blog-list" aria-label="Blog posts">
${cards}
  </section>
${nav}
  <!-- AUTO-GENERATED: BLOG-LIST END -->
</div>

${pageStyle}`
}

function renderPagination(page, totalPages) {
  if (totalPages <= 1) {
    return ''
  }

  const backLink =
    page > 1
      ? `    <a href="${page === 2 ? '/blog/' : `/blog/page/${page - 1}/`}">Back</a>`
      : '    <span class="mk-blog-pagination-spacer" aria-hidden="true"></span>'

  const nextLink =
    page < totalPages
      ? `    <a href="/blog/page/${page + 1}/">Next</a>`
      : '    <span class="mk-blog-pagination-spacer" aria-hidden="true"></span>'

  return `  <nav class="mk-blog-pagination" aria-label="Pagination">
${backLink}
${nextLink}
  </nav>`
}

async function writeRss(posts) {
  const lastBuildDate = posts[0] ? formatRssDate(posts[0].date) : new Date().toUTCString()
  const items = posts
    .map(
      (post) => `    <item>
      <title>${escapeHtml(post.title)}</title>
      <link>${SITE_URL}${post.url}</link>
      <guid>${SITE_URL}${post.url}</guid>
      <pubDate>${formatRssDate(post.date)}</pubDate>
      <description>${escapeHtml(post.description)}</description>
    </item>`
    )
    .join('\n')

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
  <channel>
    <title>MoneroKon Blog</title>
    <link>${SITE_URL}/blog/</link>
    <description>MoneroKon announcements and press releases</description>
    <language>en</language>
    <lastBuildDate>${lastBuildDate}</lastBuildDate>
${items}
  </channel>
</rss>
`

  await writeFile(path.join(BLOG_DIR, 'rss.xml'), xml, 'utf8')
}

function formatDisplayDate(dateString) {
  return new Date(`${dateString}T00:00:00Z`).toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    timeZone: 'UTC',
  })
}

function formatRssDate(dateString) {
  return new Date(`${dateString}T00:00:00Z`).toUTCString()
}

function escapeHtml(value) {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
}

main().catch((error) => {
  console.error(error)
  process.exitCode = 1
})
