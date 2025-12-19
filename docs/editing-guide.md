# VATGenius Content Editing Guide

This guide explains how to manage content on the VATGenius website using Decap CMS.

## Accessing the CMS

1. Navigate to `https://yoursite.com/admin/`
2. Click "Login with GitHub"
3. Authorize the application
4. You're now in the CMS dashboard

## Content Types

### News Articles

News articles are time-sensitive updates about VAT regulations, tax changes, and industry news.

**Location:** `content/news/`

**Fields:**
| Field | Required | Description |
|-------|----------|-------------|
| Title | Yes | Article headline |
| Date | Yes | Publication date |
| Excerpt | Yes | Short summary (shown in listings) |
| Hero Image | Yes | Featured image path |
| Tags | No | Categorization tags |
| Body | Yes | Full article content (Markdown) |

**Best Practices:**
- Keep titles under 60 characters for SEO
- Write excerpts that summarize the key takeaway
- Use descriptive, action-oriented headlines
- Add 2-4 relevant tags per article

### Knowledge Base Articles

Knowledge articles are evergreen educational content about VAT procedures and best practices.

**Location:** `content/knowledge/`

**Fields:** Same as News Articles

**Best Practices:**
- Focus on timeless, educational content
- Use clear section headings (##)
- Include practical examples
- Link to related articles when relevant

### Static Pages

Core website pages with custom layouts.

**Location:** `content/pages/`

**Available Pages:**
- Home
- Product
- Why Us
- Integration
- Team

**Note:** Static pages have specific content sections. Contact a developer for structural changes.

## Editorial Workflow

The CMS uses an editorial workflow to manage content changes:

### 1. Creating Content

1. Click "New [Content Type]" in the sidebar
2. Fill in all required fields
3. Click "Save" to create a draft

### 2. Drafts

- Drafts are only visible to editors
- You can continue editing drafts anytime
- Drafts are stored in a separate branch

### 3. In Review

1. When ready, click "Set status" → "In Review"
2. This creates a Pull Request on GitHub
3. Team members can review and comment

### 4. Publishing

1. Once approved, click "Set status" → "Ready"
2. Click "Publish"
3. The content is merged and goes live

**Note:** Changes typically appear within 1-2 minutes after publishing.

## Writing Content

### Markdown Basics

The content body uses Markdown formatting:

```markdown
## Heading 2
### Heading 3

**Bold text**
*Italic text*

- Bullet point
- Another point

1. Numbered list
2. Second item

[Link text](https://example.com)

> Blockquote for emphasis
```

### Adding Images

1. Click the image icon in the editor toolbar
2. Upload an image or select from media library
3. Add descriptive alt text

**Image Guidelines:**
- Use high-quality images (min 1200px wide)
- Optimize file size (under 200KB if possible)
- Use descriptive file names: `vat-refund-process.jpg`

### Tables

```markdown
| Column 1 | Column 2 | Column 3 |
|----------|----------|----------|
| Data 1   | Data 2   | Data 3   |
| Data 4   | Data 5   | Data 6   |
```

## Managing Media

### Uploading Images

1. Go to "Media" in the sidebar
2. Click "Upload"
3. Select your image file
4. The image is uploaded to `/public/images/uploads/`

### Image Naming

Use descriptive, lowercase names:
- Good: `eu-vat-directive-2025.jpg`
- Bad: `IMG_12345.jpg`

## Tags

Tags help organize and filter content. Use consistent tagging:

**Common News Tags:**
- `EU` - EU-related news
- `Germany` - Germany-specific
- `tax rates` - Rate changes
- `e-invoicing` - Electronic invoicing
- `ViDA` - VAT in the Digital Age

**Common Knowledge Tags:**
- `VAT refund` - Refund procedures
- `basics` - Introductory content
- `EU` - EU regulations
- `procedures` - Process explanations

## SEO Best Practices

### Titles
- Include relevant keywords
- Keep under 60 characters
- Make them compelling

### Excerpts
- Summarize the main point
- Include target keywords naturally
- Keep under 160 characters

### Content Structure
- Use clear heading hierarchy (H2 → H3 → H4)
- Include internal links to related content
- Break up long paragraphs

## Troubleshooting

### Changes Not Appearing

1. Wait 1-2 minutes for cache to refresh
2. Clear your browser cache
3. Check the GitHub repository for the commit

### Login Issues

1. Ensure you have repository access
2. Try logging out and back in
3. Contact the administrator

### Image Upload Fails

1. Check file size (max 10MB)
2. Use JPG, PNG, or WebP formats
3. Try a different browser

## Getting Help

- **Technical Issues:** Contact the development team
- **Content Questions:** Refer to the style guide
- **CMS Access:** Contact the administrator

## Quick Reference

| Action | Steps |
|--------|-------|
| Create article | Content → New → Fill fields → Save |
| Edit article | Click article → Make changes → Save |
| Preview | Use the preview pane on the right |
| Publish | Set status → Ready → Publish |
| Delete | Open article → Delete (in menu) |
| Add image | Media → Upload → Select file |
