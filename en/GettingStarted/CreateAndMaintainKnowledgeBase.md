<!-- canonical_source_url: https://tom-pit.github.io/Connected.Docs/en/GettingStarted/CreateAndMaintainKnowledgeBase/ -->
<!-- canonical_source_title: Create and maintain a knowledge base -->

# Create and maintain a knowledge base

This tutorial explains how to create a structured Knowledge base that users can browse, search, and maintain over time.

You will create:

* Directory tags for categorization
* Directories to organize content
* Articles containing documentation
* A table of contents for navigation

At the end of the tutorial, users will be able to browse and search documentation through the Knowledge base.

## Goal

Create a knowledge base that:

* Organizes documentation into logical topics
* Provides clear navigation through a table of contents
* Supports searching and filtering by tags
* Allows content to be maintained over time

## Steps

### 1. Plan the knowledge structure

Before creating content, identify the topics you want to document.

Typical examples include:

* Work instructions
* Safety procedures
* Quality guidelines
* Maintenance procedures
* Frequently asked questions
* Employee onboarding materials

Think about:

* Which directories will be needed
* Which articles belong to each directory
* How users should navigate the content

> [!TIP]
> Start with a simple structure and expand it over time.

### 2. Create directory tags

**[Directory tags](../Domains/Knowledge/Management/DirectoryTags.md)** help users find content through search and filtering.

Examples:

* Assembly
* Quality
* Safety
* Packaging
* Maintenance

![Directory Tags List](../Domains/Knowledge/Images/DirectoryTagsList.png "Directory tags list")

1. Open **Knowledge / Management / Directory tags**.
2. Create the tags required for your documentation.
3. Save the tags.

### 3. Create directories

**[Directories](../Domains/Knowledge/Management/Directories.md)** are the main containers used to organize knowledge content.

Examples:

* Work Instructions
* Quality Management
* Safety Procedures
* Maintenance

![Directories List](../Domains/Knowledge/Images/DirectoriesList.png "Directories list")

1. Open **Knowledge / Management / Directories**.
2. Create a new directory.
3. Enter a name, key, and optional description.
4. Save the directory.

### 4. Create articles

**Articles** contain the actual documentation users will read.

Examples:

* Assemble table frame
* Packaging procedure
* Daily equipment inspection

![Articles List](../Domains/Knowledge/Images/ArticlesList.png "Articles list")

1. Open **Knowledge / Management / Directories**.
2. Select **Articles** from the desired directory.
3. Click the [action button](../Common/UI/ActionButton.md) to create a new article.
4. Enter:
   * Title
   * Key
   * Content
   * Optionally:
        * Add attachments.
        * Enable comments.
        * Schedule publication or expiration dates.
5. Assign relevant tags.
6. Save the article.

For details, see **[Articles](../Domains/Knowledge/Management/Articles.md)**.

### 5. Build the table of contents

The table of contents defines how users navigate the directory.

1. Open **Knowledge / Management / Directories**.
2. Select **Table of contents** for the desired directory.
3. Create folders to organize articles into topics.
4. Add articles to the folders.
5. Arrange entries using ordinal values to define the order.

For details, see **[Table of contents](../Domains/Knowledge/Management/TableOfContents.md)**.

Example:

```text
Work Instructions
├── Assembly
│   ├── Assemble table frame
│   └── Install tabletop
├── Packaging
│   └── Packaging procedure
└── Maintenance
    └── Daily equipment inspection
```

> [!NOTE]
> The table of contents controls navigation only. Article content is managed separately.

### 6. Review the Knowledge base

Once directories, articles, and navigation have been configured:

1. Open **Knowledge / Knowledge base**.
2. Locate your directory.
3. Open the directory.
4. Browse articles using the table of contents.
5. Verify search and tag filtering.


![Knowledge Base](../Domains/Knowledge/Images/KnowledgeBase.png "Knowledge base example")

Users can:

* Filter by tags
* Browse directories
* Open articles
* Download attachments
* Add comments (if enabled)

For details, see **[Knowledge base](../Domains/Knowledge/KnowledgeBase/KnowledgeBase.md)**.

### 7. Maintain content

A knowledge base should be reviewed regularly.

Recommended practices:

* Keep articles concise and focused
* Use consistent naming conventions
* Remove duplicate content
* Review outdated information periodically
* Use tags consistently
* Disable unused directories when necessary
* Use publication and expiration dates when appropriate

> [!TIP]
> Assign responsibility for maintaining each directory to a specific person or team.

## Example: Creating a work instruction library

A manufacturing company wants to centralize shop-floor documentation.

1. Create tags:

   * Assembly
   * Packaging
   * Maintenance

2. Create a directory:

   * Work Instructions

3. Create articles:

   * Assemble table frame
   * Packaging procedure
   * Daily equipment inspection

4. Build the table of contents:

   * Assembly
   * Packaging
   * Maintenance

5. Review the directory in the Knowledge base.

Operators can now search instructions, browse documentation by topic, and access the latest approved procedures from a single location.