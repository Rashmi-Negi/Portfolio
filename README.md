# Rashmi Negi Portfolio

React portfolio built with Vite and configured for GitHub Pages.

## Run locally

```bash
npm install
npm run dev
```

Create a production build with `npm run build` and preview it with `npm run preview`.

## Publish on GitHub Pages

The Vite base path is configured for a repository named `Portfolio`.

1. Create a public GitHub repository named `Portfolio`.
2. In this project folder, initialize Git and push the `main` branch:

```bash
git init
git add .
git commit -m "Initial portfolio"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/Portfolio.git
git push -u origin main
```

3. In GitHub, open **Settings > Pages** and set **Source** to **GitHub Actions**.
4. The workflow in `.github/workflows/deploy.yml` will build and publish the site automatically.
5. Open **Actions** to check the deployment. The site URL will be:
	`https://YOUR_USERNAME.github.io/Portfolio/`

If you choose a different repository name, update the `base` value in `vite.config.js` to `/<repository-name>/` before pushing.
