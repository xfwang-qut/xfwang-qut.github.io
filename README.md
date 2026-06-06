# Clean Academic Homepage

This is a minimal personal homepage for GitHub Pages. It keeps only three navigation items:

- Homepage
- Publications
- Blog Posts

## File structure

```text
.
├── index.html
├── publications.html
├── blog.html
├── posts/
│   └── getting-started.html
├── assets/
│   ├── css/style.css
│   ├── js/main.js
│   └── img/avatar.svg
└── .nojekyll
```

## How to publish with GitHub Pages

1. Create a new empty repository on GitHub.
2. Upload all files in this folder to the repository root.
3. Open **Settings → Pages**.
4. Set **Source** to **Deploy from a branch**.
5. Choose **main** branch and **/(root)** folder.
6. Save and wait for GitHub Pages to build.

If you want the final URL to be `https://xfwang-qut.github.io/`, the repository name must be exactly `xfwang-qut.github.io`. Since your old repository already uses this name, you need to delete it, rename it, or overwrite it with these clean files.

## How to edit

- Edit `index.html` for your homepage.
- Edit `publications.html` for papers.
- Edit `blog.html` for the blog list.
- Add new blog articles under `posts/` and link them in `blog.html`.
- Replace `assets/img/avatar.svg` with your own photo, for example `profile.jpg`, and update the image path in `index.html`.
