<!-- app_route: /management/ledger/document-types -->
<!-- app_label: Document types -->
<!-- canonical_source_url: https://github.com/Tom-PIT/Connected.Docs/blob/main/en/Domains/Accounting/Management/Ledger/DocumentTypes.md -->
<!-- canonical_source_title: Document types -->

# Document types

The **Document types** code list defines the types of accounting documents used in the ledger. Each document type classifies journal entries and other accounting postings according to their business purpose, such as sales, purchases, inventory movements, or general adjustments.

Document types are a **mandatory configuration** for the ledger. They are referenced by journal entries and are used by the system to group postings, apply posting rules, and support reporting and auditing.

To access this screen, go to **Accounting / Ledger / Management / Document types** in the [navigation](../../../../Zajednicko/UI/Navigacija.md).

## Schema

| Field  | Description                                                                                                 |
| ------ | ----------------------------------------------------------------------------------------------------------- |
| **Code**   | Technical identifier of the document type. Used internally by the system and referenced by journal entries. |
| **Name**   | Human-readable name describing the purpose of the document type.                                            |
| **Active** | Indicates whether the document type can be selected when creating new documents.                            |

## List view

The list view displays all defined document types.

Each row shows:

* **Code**
* **Name**

Inactive document types are kept for historical consistency but cannot be used for new postings.

![Document types list](../../Images/DocumentTypesList.png "Document types list")


## Actions

### Add a document type

To add a new document type:

1. Click the [action button](../../../../Common/UI/ActionButton.md) to create a new entry
2. Enter:

   * **Code**
   * **Name**
   * **Active** (enabled by default)
3. Click **Add** to save the document type or **Cancel** to discard the entry

![Document types – new](../../Images/DocumentTypesNew.png "Document types – new")

### Edit document type

Click a document type in the list to open it in edit mode. Update its fields as needed.

Click **Save** to apply changes or **Cancel** to discard the entry.

## Delete a document type

A document type can be deleted only if it is **not referenced** by existing journal entries or configuration rules.

To delete it, click on an entry in the list to enter edit mode and select **Delete**.

> [!WARNING]
> Deleting a document type that is required by journal entry workflows may prevent posting or reporting of accounting data.