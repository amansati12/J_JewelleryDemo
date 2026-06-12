# Aurelia Jewels Jekyll Website

A premium multi-page jewellery business advertisement website built with Jekyll, HTML5, Bootstrap 5, CSS3, JavaScript and Liquid.

## Run locally

1. Install Ruby from https://rubyinstaller.org on Windows, or use your existing Ruby setup on macOS/Linux.
2. Install Bundler:
   ```bash
   gem install bundler
   ```
3. Install project dependencies:
   ```bash
   bundle install
   ```
4. Start the website:
   ```bash
   bundle exec jekyll serve
   ```
5. Open:
   ```text
   http://localhost:4000
   ```

## Deploy to GitHub Pages

1. Create a new GitHub repository.
2. Push this project to the repository.
3. In GitHub, open Settings, then Pages.
4. Select your branch, usually `main`, and the root folder.
5. Save. GitHub Pages will build the Jekyll website and provide a live URL.

If the repository is not hosted at the domain root, set `baseurl` in `_config.yml` to your repository name, for example `/aurelia-jewels`.

## Deploy to Netlify

1. Push this project to GitHub, GitLab or Bitbucket.
2. In Netlify, choose Add new site, then Import an existing project.
3. Select your repository.
4. Use these build settings:
   ```text
   Build command: bundle exec jekyll build
   Publish directory: _site
   ```
5. Deploy the site.

## Image replacement

Replace files in `assets/images/` with your real jewellery photographs while keeping the same filenames, or update image paths in the pages.
