---
description: How to add a new blog post to the portfolio
---

# Adding a New Blog Post

Follow these steps to add a new blog post to your portfolio:

1.  **Create a new file**:
    Navigate to `src/content/blog/` and create a new file with a `.md` extension. The filename will become the URL slug (e.g., `my-new-post.md` becomes `/blog/my-new-post`).

2.  **Add Frontmatter**:
    At the very top of the file, add the required metadata between triple dashes (`---`).

    ```markdown
    ---
    title: "Your Blog Post Title"
    description: "A brief summary of what this post is about."
    pubDate: 2024-03-20
    author: "Abdur Rahman"
    tags: ["Machine Learning", "Tutorial", "Python"]
    image: "/path/to/optional/cover-image.jpg"
    ---
    ```

3.  **Write Content**:
    Below the second `---`, write your blog post using standard Markdown. You can use:
    - Headers (`#`, `##`)
    - Lists (`-`, `1.`)
    - Code blocks (\`\`\`)
    - Links and images

4.  **Save and Preview**:
    Save the file. If your development server is running (`npm run dev`), the new post will automatically appear in the Blog section.
