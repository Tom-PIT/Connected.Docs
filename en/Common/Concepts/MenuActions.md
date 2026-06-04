# Menu actions

Many screens provide additional actions through the **Menu** located in the top-right corner of the page.

The available actions depend on the current screen and whether the menu is opened from a **list view** or a **document view**.

![Containers Menu](../Images/ContainersMenu.png)

## Menu in list views

When used from a list view, menu actions apply to the records currently displayed in the list.

Examples:

* Print a filtered list of invoices
* Export the current list to CSV or PDF
* Open mass processing for multiple records

The result depends on the currently applied filters and visible data.

## Menu in document views

When used from a document view, menu actions apply only to the currently opened document.

Examples:

* Print a document
* Export a document
* Send a document by email
* Return a document to draft
* Reverse a document

## Common menu actions

### Print

Print the current document or list.

### Export

Export the current document or list.

Depending on the screen, export formats may include:

* PDF
* CSV
* XML

> [!NOTE]
> List exports typically include all records matching the current filters, while document exports include the details of the currently opened document.

### Import details

Import document detail lines from an external file.

### Delete all details

Remove all detail lines from the current document.

### Return to draft

Return a committed document to the **Draft** state, allowing further editing.

Availability depends on the document type and current status.

### Reverse document

Create a [reversal document](../../Domains/Logistics/Documents/Reversals.md) that cancels the effects of the original document.

Availability depends on the document type.

### Send as email

Send the current document by email.

### Open mass processing

Perform actions on multiple selected records at once.

Available actions depend on the selected document type.

It opens a mode in which multiple records can be selected for batch processing. Once records are selected, different actions can be performed on them via the [action button](../UI/ActionButton.md).

### Export stock state by average amount

Exports the current stock state to a CSV file.

The export includes stock quantities and values for each material, together with the calculated average amount used for inventory valuation.

Typical information in the export includes:

- Warehouse
- Material code and name
- Material type
- Quantities (initial, received, issued, ending)
- Amounts (initial, received, issued, ending)
- Average amount

This export can be used for inventory analysis, reporting, and stock valuation purposes.

## Additional actions

Some documents provide additional menu actions that are specific to that document type. These actions are documented in the corresponding document pages.
