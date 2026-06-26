# Publishing the Documentation Website

This repository contains the source documentation for the **Tom PIT Connected** documentation website.

## Publishing workflow

1. Update the documentation on the **`en`** branch.

2. Merge **`en`** into **`main`**.

3. Merge **`main`** into **`docs-mkdocs`**.

4. Synchronize the source folders with the MkDocs `docs` folder:

```cmd
robocopy en docs\en /MIR /XD .vs
robocopy sl docs\sl /MIR /XD .vs
```

5. Test the website locally:

```cmd
python -m mkdocs serve
```

Open:

```text
http://127.0.0.1:8000/
```

6. Build the website:

```cmd
python -m mkdocs build
```

Verify that there are no build errors or broken links.

7. Commit and push the changes on the **`docs-mkdocs`** branch.

8. Publish the website:

```cmd
python -m mkdocs gh-deploy
```

This command builds the site and publishes it to the `gh-pages` branch used by GitHub Pages.

## Branches

| Branch        | Purpose                                                         |
| ------------- | --------------------------------------------------------------- |
| `main`        | Stable source of truth for the documentation                    |
| `en`          | Daily documentation work                                        |
| `docs-mkdocs` | MkDocs website source                                           |
| `gh-pages`    | Generated website (managed automatically by `mkdocs gh-deploy`) |

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
