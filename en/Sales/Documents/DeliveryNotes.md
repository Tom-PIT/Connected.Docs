# Delivery notes

A **Delivery note** is a logistics document that accompanies goods during delivery. It confirms what items are being dispatched, in what quantities, and on which date. Delivery notes are usually created from a **Sales order**, but can also be created independently when needed.

A delivery note does **not** represent a financial document—it is primarily operational. Once items are delivered, a delivery note typically leads to the creation of an **Issue** (warehouse output), and later to an **Issued invoice**.

To access this page, go to **Sales / Documents / Delivery notes** in the [navigation](../../Common/UI/Navigation.md).

## How delivery notes fit into the sales workflow

Delivery notes act as the bridge between the commercial and warehouse processes:

1. A customer confirms an order → a [**Sales order**](SalesOrders.md) is created.  
2. From the sales order, a user generates a **Delivery note** via *Linked documents → + Delivery note*.  
3. Once the delivery note is ready, an [**Issue**](../../Logistics/Documents/Issues.md) is created and linked (full or partial delivery).  
4. After delivery, the process continues toward [**Issued invoice**](IssuedInvoices.md) creation.

Delivery notes can also be copied, linked to existing issues or projects, or used to trigger production or maintenance tasks.

## Schema

| Field | Description |
|-------|-------------|
| [**Code**](../../Common/UI/DocumentCodes.md) | System-generated identifier of the delivery note. |
| **Customer** | Delivery recipient, selected from the [Business directory](../../Common/Management/BusinessDirectory.md) (mandatory). |
| **Document date** | Date when the delivery note is created. |
| **Delivery date** | Date when the delivery is planned to occur (mandatory). |
| **Delivery – Company / Address** | Customer delivery details taken from the [Business directory](../../Common/Management/BusinessDirectory.md). |
| **Content top** | Optional predefined introductory text from [Predefined texts](../../Common/Management/PredefinedTexts.md) (entity: *Delivery note*). |
| **Details** | This section lists all items included in the delivery (mandatory). | 
| **Content bottom** | Optional closing or legal text from [Predefined texts](../../Common/Management/PredefinedTexts.md) (entity: *Delivery note*). |


### Details

| Field | Description |
|--------|-------------|
| **[Asset](../../Assets/Assets/Assets.md)** | Item or service being delivered. |
| **Delivery date** | Delivery date for this specific item. |
| **Issued quantity** | Shows how many units have already been issued (e.g., *0/3* before issue, *3/3* after full issue). |

## Management

### Document states

Delivery notes use a simplified set of workflow states:

- **Available** – The delivery note is created and ready for processing. This state functions similarly to a *draft* in other document types. The document has not yet generated an [**Issue**](../../Logistics/Documents/Issues.md), and all quantities can still be edited.

- **In completion** – The delivery note has been partially processed. This usually occurs when an [**Issue**](../../Logistics/Documents/Issues.md) has been created for only part of the delivered goods, or if the delivery has not yet been completed.

- **Completed** – All actions related to the delivery note have been fully executed. The delivery note cannot be modified further but can still be printed, exported, or used to generate an invoice.


### List view

The Delivery notes list shows all documents separated by:

- **Available** 
- **In completion**
- **Completed** 
- **All**
- **[Reversed](../../Logistics/Documents/Reversals.md)** (Reversal state)

**Indicators displayed at the top:**

- **No invoice** (interactive) – Delivery notes that have not yet resulted in an issued invoice. Click it to display exclusively the delivery notes that still have no invoice recorded.

These indicators update automatically based on selected filters (Document dates, Status, Reversal state, Customer).

**Available example:**

![Delivery notes available](../Images/DeliveryNotesListAvailable.png)

**Completed example:**

![Delivery notes completed](../Images/DeliveryNotesListCompleted.png)

## Actions

### Creating a new delivery note

Delivery notes can be created in two ways:

- From the **Delivery notes** list, by clicking [**action button**](../../Common/UI/ActionButton.md).
- From a **Sales order** using *Linked documents → + Delivery note* to create a new delivery note draft.
    
    ![Sales order → Delivery note](../Images/DeliveryNoteLinkSalesOrder.png)

Example of an empty Delivery note draft: 

![Delivery note new](../Images/DeliveryNoteNew.png)

### Editing a delivery note

Click on an Delivery note to edit its details. The document is divided into expandable sections that can be edited:

- Attachments
- Linked documents
- Document
- Alternative currency
- Transport
- Delivery
- Content top
- Details
- Content bottom

> [!NOTE]
> The amount of sections can be edited depends on the Delivery note status

#### Attachments

At the top of every document, an **Attachments** section is available. 

You can upload any relevant file—such as delivery notes, transport documents, photos, or supporting records. All attached files remain stored together with the document and can be reviewed at any time.

#### Linked documents

The linked documents section enables the creation of operational or follow-up documents. This section also shows any previously linked documents.

![Delivery note – linked documents](../Images/DeliveryNoteLinkedDocuments.png)

> [!NOTE]
> The available **Linked document** actions depend on the document type and status.

Available actions of delivery notes in the **available** status include:

- [**Sales order**](SalesOrders.md)  - Link to an existing sales order
- **Copy delivery note** 
- **Copy delivery note with contents**  
- **Link project** - Link to an existing project
- [**+ Production order**](../../Production/Documents/ProductionOrders.md)
- [**+ Maintenance order**](../../Maintenance/Documents/MaintenanceOrders.md)
- [**+ Issued invoice**](IssuedInvoices.md)
- **[+ Empty issue](../../Logistics/Documents/Issues.md)**
- **[+ Full issue](../../Logistics/Documents/Issues.md)**
- **[Issue](../../Logistics/Documents/Issues.md)** – Link an existing issue


#### Alternative currency

The Alternative currency section allows prices in the document to be expressed in a currency different from the system’s default currency. This is typically used for international sales. Rates are taken from the [Exchange rates](../Management/ExchangeRates.md) code list.

![Sales order – Alternative currency section](../Images/SalesAlternativeCurrency.png "Alternative currency section")

When an alternative currency is selected, document prices are automatically recalculated using the specified exchange rate.

#### Transport

The Transport section defines how goods are delivered to the customer and under which delivery conditions. 

![Sales order – Transport section](../Images/SalesTransportSection.png)

The information entered here is used for logistics coordination, customer communication, and printed sales documents.

### Completing a Delivery note

Once the delivery note is ready, click **Complete** at the top of the page.

## Menu

The top-right menu includes:

![Delivery notes menu](../Images/DeliveryNotesMenu.png)

- **Printing**
- **Exporting (PDF)**
- **Print asset** (Completed documents)
- **Reverse document** (Completed documents)
- **Return to draft** (Completed documents)

> **Reversal note:**  
> A reversed delivery note appears under *Reversal state → Reversed* in the sidebar.

## Deletion

Draft delivery notes can be deleted on the edit screen, but only if they contain **no details**.

If the draft still includes items in the **Details** section:

1. Click the material serial number to open the **Edit detail** screen.  
2. Click **Delete** inside the Edit detail window to remove the material.  
3. Repeat this for all remaining materials.

Once the document contains no materials, you can click **Delete** to remove the draft.

If confirmed, the document is permanently removed.

> [!NOTE]  
> - A delivery note cannot be deleted if it is referenced by dependent documents (Issues, Invoices, Production orders, etc.).
> - Completed documents **cannot** be deleted — only reversed or returned to draft.

---

