# Publishing the Documentation Website

This repository contains the source documentation for the **Tom PIT Connected** documentation website.

## One-time setup

The MkDocs site uses Windows directory junctions so that the `docs` folder points directly to the source language folders without duplicating files.

From the repository root, create the junctions:

```cmd
mklink /J docs\en en
mklink /J docs\sl sl
```

After this setup, changes made in `en/` or `sl/` are immediately visible to MkDocs through `docs/en` and `docs/sl`.

> **Note**
>
> Directory junctions are local filesystem objects and are not recreated automatically by Git. If the repository is cloned on another Windows machine, these commands must be run once before building or serving the website.

## Publishing workflow

1. Update the documentation on the **`en`** branch.

2. Merge **`en`** into **`main`**.

3. Merge **`main`** into **`docs-mkdocs`**.

4. Test the website locally:

```cmd
python -m mkdocs serve
```

Open:

```text
http://127.0.0.1:8000/
```

5. Build the website:

```cmd
python -m mkdocs build
```

Verify that there are no build errors or unexpected warnings.

6. Commit and push any website-specific changes on the **`docs-mkdocs`** branch.

7. Publish the website:

```cmd
python -m mkdocs gh-deploy
```

This command builds the site and publishes it to the `gh-pages` branch used by GitHub Pages.

## Branches

| Branch        | Purpose                                                       |
| ------------- | ------------------------------------------------------------- |
| `main`        | Stable source of truth for the documentation                  |
| `en`          | Daily documentation work                                      |
| `docs-mkdocs` | MkDocs website source                                         |
| `gh-pages`    | Generated website managed automatically by `mkdocs gh-deploy` |

## GitHub Pages

The website is published from:

* **Branch:** `gh-pages`
* **Folder:** `/ (root)`

Website URL:

```text
https://tom-pit.github.io/Connected.Docs/
```

> **Note**
>
> The generated `site/` folder is a build artifact and should not be committed to the repository.
