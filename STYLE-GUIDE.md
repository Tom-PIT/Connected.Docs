# Documentation Style Guide

Writing conventions for the Tom PIT.Connected documentation in `en/` and `sl/`, adapted from the style guide used for the Pulse project. When in doubt, grep for a similar sentence elsewhere in the same language folder before inventing a new pattern.

## Google developer style guide

Where this guide is silent, follow the [Google developer documentation style guide](https://developers.google.com/style). The points below differ from Google on purpose. Don't "correct" them to Google's rules:

- **Select, not click, for controls.** Google uses "click" for buttons. We say **Select** for every control, because the docs cover phones and desktops. Use "click" only for a mouse-only action, such as "double-click" or "right-click".
- **Arrows in menu paths.** Google uses angle brackets (**Settings > Billing**). We use arrows (**Settings** → **Billing**).
- **Day, month name, year.** Google writes "October 27, 2026". We write "27 October 2026", following the European date order.

## Naming UI elements

The product has a fixed set of named elements. Treat these as UI names:

- **Domains** in the navigation menu, for example **Sales**, **Supply**, **Logistics**, **Production**, **Assets**, **Projects**, **Quality**, **Maintenance**, **System**, and **Knowledge**.
- **Management** and **Business directory** areas.
- **Tabs and sections** on a document or entity, for example **Details**, **Attachments**, **Linked documents**, **Document dates**, and **Menu actions**.
- **Controls** such as **Save**, **Cancel**, **Delete**, **Add**, **New**, **Publish**, **Import**, and **Export to PDF**.
- **States** shown in lists and forms, for example **Draft**, **Committed**, and **Active**.

Rules:

- **Bold + capitalized** whenever the word names one of these specific UI elements, the same way a proper noun is capitalized. Example: *"Select **Save** to store the document."*
- **Lowercase, no bold** when the same word is used as an ordinary noun rather than as the name of the element. Example: *"the quantity you entered"*, *"a draft of the order"*.
- **Lowercase but still bold** is reserved for plain-English emphasis that is *not* naming a UI element, for example *"the system shows you **where** the cost arises"*. The giveaway is whether the sentence is naming the screen or control, or just using the word in its ordinary sense.
- When the app shows a label in English (see the string table for Croatian and Slovenian), keep the English name in the English docs, and follow the translated label in `sl/` and `hr/`.

When editing a sentence, check whether it is *naming* an element or just *talking about* the thing the element shows.

## Defined terms

- **Tom PIT.Connected** (or **Connected**) is the product name, with the official capitalization. Don't write it as "Connected Docs" in page text; that name is only the repository name.
- Compound defined terms are capitalized as a compound term throughout (title case). They are not put in bold; bold is reserved for UI element names.
- **tenant** — lowercase as an ordinary noun ("a tenant", "the relevant tenant"). Only capitalized when it is the first word of a sentence or heading, or part of a heading in Title Case.

## Headings

- **H1** (page title) and **H2/H3/H4** (section headings): sentence case, only the first word capitalized, plus any embedded proper nouns and UI element names keep their capitalization. For example, `# Document details`, `## Before you begin`, `## Membership and roles`, `### Open Brainstorming`.
- If a heading names a screen or control, match the capitalization the UI shows.
- **Task headings start with a bare verb**, not an -ing word: `## Open Brainstorming`, `## Add a member`, `## Sign in`. An -ing word is fine inside a noun phrase, such as `## Billing`.

## Lists

- **Numbered lists** are for sequential steps the reader performs in order, written as imperative sentences ending in a period: `1. Open **Settings** → **Data**.`
- **Bullet lists** are used two ways. Don't mix them within one list:
  - As independent, complete sentences: capitalize the first word and end each with a period.
  - As a continuation of an introductory sentence ending in `:`: lowercase the first word of each item, separate items with commas, and put the period only after the last item. For example, *"Depending on their permissions, authorized members can also: add members, change a member's role, remove a member from the tenant."*

## Menu paths

Write breadcrumb-style navigation with bold labels joined by `→`, for example `Open **Settings** → **Billing** → **Billing settings**.`

## Links

- Cross-references to a page whose title is a named UI element bold the visible text: `[**Evidence**](../evidence/index.md)`.
- Cross-references to a page that isn't itself a named UI element use plain text: `[Tenants and Membership](../getting-started/tenants.md)`.
- Relative paths (`../` or same-folder) are used throughout. No absolute paths.

## Images

- Alt text and title are identical and describe the screen, for example `![Billing Settings Menu](../images/billing_settings_menu.png "Billing settings menu")`.
- A screenshot that hasn't been captured yet is added as an HTML comment placeholder rather than a broken link or omitted entirely: `<!-- ![What answer example](../images/what_answer.png "What answer example") -->`. Remove the comment markers once the real screenshot is in place.
- An open implementation question or unconfirmed workflow detail is likewise marked with an HTML comment rather than guessed at: `<!-- TODO: Confirm what happens after Accept or Reject once the workflow is fully implemented. -->`

## Callouts

Use GitHub-style alert blockquotes, not ad-hoc bold text, for asides:

```
> [!NOTE]
> ...

> [!TIP]
> ...

> [!IMPORTANT]
> ...
```

`NOTE` is by far the most common. Reserve `TIP` for optional convenience information and `IMPORTANT` for things that affect data or money (for example billing, integration requirements).

## Voice and wording

- Second person throughout ("you can...", "your role determines...").
- UI interactions use **Select**, not "click" or "tap": *"Select **Settings** to return to the main view."* Repeat **Select** as often as needed; don't swap in "click" for variety. Never use "tap". Use "click" only for mouse-only actions such as "double-click" or "right-click".
- Sign-in terminology is **"sign in"** (verb, two words) and **"sign-in details"** (noun, hyphenated). Not "log in" or "login".
- Curly apostrophes (`’`) for contractions and possessives, not straight (`'`).
- Use active voice, with the product or you as the subject: *"The system lists the services by date."* Passive is fine when the actor doesn't matter, for example *"The file is saved."*
- Write "for example", not "e.g.", and "that is", not "i.e.".
- Dates are written as day, month name, year: *"27 October 2026"*, not "October 27, 2026" or "27.10.2026".
