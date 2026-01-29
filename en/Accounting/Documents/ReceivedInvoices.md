# Received invoices

**Received invoices** are financial documents representing invoices received from vendors for purchased goods or services. They are used to record supplier invoices, generate accounting postings, and initiate outgoing payments.

To access this screen, go to **Accounting / Invoices / Received invoices** in the [**navigation**](../../Common/UI/Navigation.md).

> [!NOTE]
> Received invoices are typically linked to one or more **Supply orders**. Linking supply orders allows the system to prefill details and propose accounting postings based on received goods.
>
> To post any detail lines, the related material must have an **Expense** specified in advance (e.g., set the Raw material inventory expense for new raw materials used in supply orders). Configure expenses in [**Expenses**](../../Supply/Management/Expenses.md) and assign them to [**materials**](../../Assets/Domain/Materials.md).

## Flow

When we receive an invoice from a vendor, it follows this flow:

1. A new received invoice document is created as a **Draft**.
2. One or more [**Supply orders**](../../Supply/Documents/SupplyOrders.md) are linked using **Document connections**.
3. Invoice header information and total amount are entered.
4. Suggested postings are reviewed and created.
5. The invoice is **Published**, which posts it to the ledger.
6. The document moves to **Committed** status.
7. A **Journal entry** is created in the background (see [**Double-entry accountancy**](DoubleEntryAccountancy.md)).
8. A [**Payment order**](../../Accounting/Documents/PaymentOrders.md) can be created from the received invoice.

## Schema


| Field             | Description                                                 |
| ----------------- | ----------------------------------------------------------- |
| **Internal code** | System-generated identifier of the received invoice.        |
| **External code** | Vendor’s invoice reference number (mandatory).                          |
| **Vendor**        | Supplier issuing the invoice (mandatory). Taken from [**Business directory**](../../Common/Management/BusinessDirectory.md). |
| [**Bank account**](../../Common/Management/BankAccounts.md) | Vendor’s bank account used for payment (mandatory). |
| **Issue date**    | Date shown on the vendor invoice.                           |
| **Delivery date** | Date when goods or services were delivered.                 |
| **Received date** | Date the invoice was received.                              |
| **Due date**      | Payment due date (mandatory).                               |
| **Amount**        | Total net amount of the invoice.                            |
| [**Currency**](../../Common/Management/Currencies.md)      | Currency of the invoice.                                    |
| **Reference**     | Payment reference provided by the vendor (mandatory).                   |
| **Payment type**  | Payment mechanism used for settlement (e.g. Payment order). |
| [**Cost center**](../../Common/Management/CostCenters.md)   | Optional cost center assignment.                            |
| [**Account**](../Management/Ledger/ChartOfAccounts.md)       | Ledger account used for posting (mandatory).                            |
| [**Template**](../Management/Ledger/JournalEntryTemplates.md)      | Posting template applied to the invoice.                    |

### Details

| Field           | Description                                         |
| --------------- | --------------------------------------------------- |
| [**Expense**](../../Supply/Management/Expenses.md)     | Expense or inventory category applied to the line.  |
| [**Account**](../Management/Ledger/ChartOfAccounts.md)     | Ledger account used for the line.                   |
| [**Tax rate**](../../Common/Management/TaxRates.md)    | Applied tax rate.                                   |
| **Amount**      | Net amount of the line.                             |
| **Amount tax**  | Calculated tax amount.                              |
| **Prepayment**  | Indicates whether the line represents a prepayment. |
| **Self taxing** | Indicates self-taxing logic for the line.           |
| **Deduct tax**  | Indicates whether tax is deductible.                |

## Management

### List view

The list view shows all received invoices and summary indicators.

Available filters:

* **Issue date**
* **Delivery date**
* **View**
  * Draft
  * Available
  * Completed
* **Company**
* **Payment type**

The list also displays aggregated indicators such as document count and total amount for the current filter.

### Document states

Received invoices move through the following states:

* **Draft** – The document is editable and not yet posted.
* **Available** – The document is published but contains amount mismatches.
* **Completed** – The document is published and all amounts match.

The document state determines available actions and follow-up documents.

#### Amount mismatches

Mismatches typically mean the header amount does not equal the sum of detail lines (net and/or tax). This can happen when tax was intended to be included but isn’t (or vice versa), or header/lines were entered too high/low.
  
To resolve: 
- Use the menu to **Revert** the document to Draft and adjust the header amount or detail lines accordingly (preferred). 
- In an Available document, only the **Details** section can be edited to fix the mismatch (not recommended).


## Actions

### Create received invoice

1. Click the [**action button**](../../Common/UI/ActionButton.md) to create a new received invoice.
2. In **Document connections**, link one or more Supply orders.
3. Review or enter document header fields, including **Amount**.
4. Select the appropriate **Account** and **Template** (optional).

![Received invoice – header](../../Images/ReceivedInvoicesNewTop.png "Received invoice header")

### Create suggested postings

Under **Suggested postings**, the system proposes postings based on the linked supply orders.

1. Review the suggested lines.
2. Select the relevant items.
3. Click **Create postings** to generate posting lines.

![Received invoice – suggested postings](../../Images/ReceivedInvoicesNewSuggestedPostings.png "Suggested postings")

#### Attachments
On every document, an **Attachments** section is available.

You can upload any relevant file—such as delivery notes, transport documents, photos, or supporting records. All attached files remain stored together with the document and can be reviewed at any time.


### Edit details

Click any blue field in the **Details** section to edit it. After making changes, click **Save** to apply them.

![Received invoice – edit detail](../../Images/ReceivedInvoicesDetails.png "Edit detail")

### Publish received invoice

When all amounts match and required data is filled the bottom of the document would look like this.

![Received Invoices New Bottom](../Images/ReceivedInvoicesNewBottom.png "Received invoices - bottom of the document")

* Click **Publish** to commit the document.
* The invoice is posted to the ledger.
* A related **Journal entry** is created automatically in [**Double-entry accountancy**](DoubleEntryAccountancy.md).

> [!NOTE]
> If there is a mismatch between the header amount and detail totals, the document shows a **Remaining amount** and is highlighted. Publishing such a document moves it to the **Available** state.
>
> ![Remaining amount](../../Images/ReceivedInvoicesNewRemainingAmount.png "Remaining amount")

### Return to draft

If changes are required after publishing:

1. Open the document.
2. Open the menu in the top-left corner.
3. Select **Revert** to move the document back to Draft.

This allows editing of posting dates or accounts before re-publishing.

### Create payment order

For committed invoices, the **Document connections** section provides an option to create a payment order based on the received invoice.

![Received invoice – document connections](../../Images/ReceivedInvoicesCommitedTop.png "Document connections")

## Deletion

Draft documents can be deleted on the edit screen, but only if they contain **no details**.

If the draft still includes items in the **Details** section:

1. Click the expense blue field in the **Details** section to open the **Edit detail** screen.  
2. Click **Delete** inside the Edit detail window to remove the material.  
3. Repeat this for all remaining materials.

Once the document contains no materials, you can click **Delete** to remove the draft.

> [!NOTE]
> - Only **draft** documents can be deleted.  
> - Once a document is published, you can no longer delete it; instead, use **Revert** in the menu.  
> - If any payments have been recorded, the document cannot be deleted until those payments are removed and the document is returned to draft.

