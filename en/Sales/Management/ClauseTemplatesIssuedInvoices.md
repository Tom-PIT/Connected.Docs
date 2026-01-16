# Clause templates for issued invoices

The **Clause templates for issued invoices** code list allows you to define clause sets (templates) that will appear on issued invoices for specific companies. A template contains one or more clauses—such as legal notes, payment terms, disclaimers, or billing conditions—which will be printed at the top or bottom of the invoice in a defined order.

To access this page, go to **Sales / Management / Clause templates for issued invoices** in the [navigation](../../Common/UI/Navigation.md).

> [!NOTE]  
> **Prerequisites**  
> Before creating clause templates, make sure the following are set up:  
> • The partner company exists in the [Business directory](../../Common/Management/BusinessDirectory.md).  
> • The clause text exists in the [Predefined texts](../../Common/Management/PredefinedTexts.md) code list (entity: *Issued invoice*).

## Schema

### Template fields  
| Field | Description |
|--------|-------------|
| **Company** | The company for which the clause template applies. Selected from the [Business directory](../../Common/Management/BusinessDirectory.md). (mandatory) |

### Clause fields (inside a template)  
| Field | Description |
|--------|-------------|
| **Location** | Where the clause appears on the invoice (top or bottom). |
| **Ordinal** | Numeric order of appearance (e.g., 1, 2, 3…). |
| **Clause** | A predefined text selected from [Predefined texts](../../Common/Management/PredefinedTexts.md) (entity = *Issued invoice*). |

## Management

### List view

The list displays all existing clause templates, grouped by company:

![Clause templates list](../Images/ClauseTemplatesIssuedInvoices.png "Clause templates list")

Click **Clauses** to open the clause list for that template. You may use the **Search** bar to filter templates by company name.

### Creating a new template

Click the **action button** to create a new template. Only one field is required:

![Add template](../Images/ClauseTemplatesIssuedInvoicesNew.png "Add template")

After adding the template, you must click **Clauses** to open the clause editor.

![Clauses button](../Images/ClauseTemplatesDeliveryNotesClausesButton.png "Clauses button")

### Adding clauses to a template

Inside the clause editor, use the action button to add clauses. Select:  
- **Location** – The place in the issued invoice where the clause should appear  
- **Ordinal** – The numeric order in which the clause will appear  
- **Clause** – Predefined text to use  

![Add clause](../Images/ClauseTemplatesIssuedInvoicesClausesNew.png "Add clause")

### Clause list

All clauses assigned to the template are shown in order:

![Clause list](../Images/ClauseTemplatesIssuedInvoicesClausesList.png "Clause list")

You may reorder clauses by editing the **Ordinal** value.

## Actions

### Editing templates and clauses

Click the **company name** to open the template. Click any clause to edit its location, order, or assigned predefined text.

### Deletion

Click **Delete** on the edit screen to open a confirmation dialog:

**Are you sure you want to delete this record?**  

If confirmed, the record is permanently removed; otherwise, the system keeps it unchanged.

> [!NOTE]  
> A clause template or clause can be deleted only if it is not required by dependent business processes.


---

