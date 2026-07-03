<!-- app_route: /supply/documents/supply-orders -->
<!-- app_label: Supply orders -->
<!-- canonical_source_url: https://tom-pit.github.io/Connected.Docs/en/Domains/Supply/Documents/SupplyOrders/ -->
<!-- canonical_source_title: Supply orders -->

# Supply orders

A **Supply order** is the formal purchasing document used to confirm materials or services ordered from a vendor. It defines *what* your organization will receive, *when*, and under *which conditions*, and is the basis for operational workflows such as material receiving and cost center allocation.

To access this page, navigate to **Supply / Documents / Supply orders** in the [navigation](../../../Common/UI/Navigation.md).

## How supply orders fit into the supply workflow

Supply orders represent the formal confirmation stage in the purchasing process.

1. A request is usually initiated using an [**Inquiry**](Inquiries.md).  
2. When accepted, a **Supply order** is created from the inquiry using the *Linked documents* section.  
   - Supply orders can also be created directly without an inquiry and later linked to one if needed.  
3. From a Supply order, you can create one or multiple [**Receive**](../../Logistics/Documents/Receives.md) documents:  
   - Several **partial** receives  
   - Or a single **full** receive  
4. Once all materials are received, the Supply order automatically moves to the **Completed** status.  
   - If only partially received, it remains **Available** until completed.

![Supply orders in the supply process](../Images/SupplyOrderDiagram.svg "Supply orders in the supply process")

## Schema

<details open markdown="1">
<summary><strong>Document</strong></summary>

| Field | Description |
|-------|-------------|
| [**Code**](../../../Common/UI/DocumentCodes.md) | System-generated identifier of the supply order. |
| **Vendor** | Vendor providing the materials or services, selected from the [Business directory](../../../Common/Management/BusinessDirectory.md). |
| **Document date** | Date when the supply order is created. |
| **Supply date** | Planned supply or delivery date for the requested materials (mandatory). |
| **Rebate** | Optional discount applied to the entire supply order. |
| **[Cost center](../../../Common/Management/CostCenters.md)** | Internal cost center associated with this purchase. |
| **Offer code** | Optional reference to the vendor’s offer or external document. |
| **Delivery – Company / Address** | Delivery location details, taken from the Business directory or manually adjusted if needed. |
| **Top content** | Predefined introductory text from [Predefined texts](../../../Common/Management/PredefinedTexts.md) (entity: *Supply order*). |
| **Bottom content** | Closing or legal statements from predefined texts. |
| **Details** | List of ordered materials or expenses, including quantities, prices, taxes, and delivery information. |

</details>

<details markdown="1">
<summary><strong>Details</strong></summary>

| Field | Description |
|--------|-------------|
| **[Material](../../Assets/Materials/README.md)** | Material being purchased. |
| **EAN** | Barcode identifier for the material (optional). |
| **Quantity** | Ordered quantity. |
| **Supply date** | Specific supply date for this material line. |
| **Net price (per unit)** | Unit price taken from supplier material records or entered manually. |
| **Discount (%)** | Optional discount applied to this specific detail line. |
| **[Tax rate](../../../Common/Management/TaxRates.md)** | Applied tax rule. If a **0%** tax rate is defined, it is automatically applied when ordering from a supplier located outside the home country. |
| **Supplier code** | Vendor’s internal code/reference for the selected material. |
| **Total cost** | Line total (quantity × net price − discount + tax). |

</details>

## Management

### Document states

Documents move through several possible states during their lifecycle:

- **Draft** – The document is not yet published. All fields can be edited freely.
- **Committed** – The document has been published. It cannot be deleted or freely modified.
    - **Available** – The order is valid and ready for receiving.
    - **In completion** – Some materials have been received (partial receiving).
    - **Completed** – All materials have been received and the order is fully processed.

### List view

The list shows all supply orders with their current status and supply dates.

![Supply orders list](../Images/SupplyOrdersList.png)

At the top of the Supply orders list, the system displays two key indicators summarizing the currently filtered data.

![Supply order indicators](../Images/SupplyOrdersIndicators.png)

- **Over the supply date** (interactive) – Supply orders whose planned supply date has passed and are not yet fully received. Clicking this indicator automatically filters the list to show only such orders.
- **Total amount** – Displays the total value (net + tax) of all supply orders included in the active filter.

### Filters

- **Document dates**  
- **Supply dates**  
- **View**  
  - Drafts  
- **Committed**  
  - Available  
  - In completion  
  - Completed  
- **Reversal state: Reversed**  
- **Vendor**  
- Search bar  

## Actions

### Create a supply order

New supply orders can be created by clicking the [action button](../../../Common/UI/ActionButton.md).

See the [**How to create a supply order**](SupplyOrdersCreate.md) guide for a step-by-step walkthrough of the creation process.

### Edit a supply order

Click any supply order in the list to open it. Draft supply orders can be edited freely.

Expandable sections:

- [Linked documents](#linked-documents)  
- [Attachments](SupplyOrdersCreate.md#attachments)  
- [Document](SupplyOrdersCreate.md#step-2--fill-in-header-information) 
- [Delivery](SupplyOrdersCreate.md#delivery-section)  
- [Top content and bottom content](SupplyOrdersCreate.md#top-content-and-bottom-content)  
- [Details](SupplyOrdersCreate.md#step-3--add-details)  

#### Linked documents

The **Linked documents** section allows creating and linking operational documents to a supply order.

For details about document relationships, traceability, and creating related documents, see [**Linked documents**](../../../Common/Concepts/LinkedDocuments.md).

![Linked documents](../Images/SupplyOrderLinkedDocuments.png)

Available actions include:

- **Add project** – Add project to supply order  
- [**+ Empty receive**](../../Logistics/Documents/Receives.md) – Create an empty receive document, ready to be updated when the actual delivery arrives
- [**+ Full receive**](../../Logistics/Documents/Receives.md) – Create a full receive document (with **all** or **part** of the materials) and link it  
- [**Receive**](../../Logistics/Documents/Receives.md) – Link an existing receive draft to the supply order  
- **Add task** – Add task to supply order  
- **Copy supply order** – Duplicate the supply order with its contents

### Complete a supply order

A Supply order is considered complete when all materials have been fully received.

Completing a supply order performs the following actions:

- The document moves from **Available** to **Completed** state.  
- Editing becomes restricted.  
- Most **Linked document** actions are disabled (including creating additional Receives).  
- Any remaining open quantities are treated as fully processed.

> [!NOTE]
> Completing a Supply order is an administrative action that finalizes its lifecycle. It does **not** perform additional stock movements — those occur in the linked Receive documents.

### Delete a supply order

Draft supply orders can be deleted on the edit screen, but only if they contain **no details**.

If the draft still includes items in the **Details** section:

1. Click the material line to open the **Edit detail** screen.  
2. Click **Delete** inside the Edit detail window to remove the material.  
3. Repeat this for all remaining materials.

Once the document contains no materials, you can click **Delete** to remove the draft.  
If confirmed, the system removes the document permanently; otherwise, no changes are made.

> [!NOTE]  
> - Only **draft** supply orders can be deleted.  
> - Once a supply order is published, it can no longer be deleted.  
> - Published documents cannot be deleted, but they can be [reversed](../../Logistics/Documents/Reversals.md).

## Menu

This page includes menu actions in two places.

Menu actions are available through the **Menu** button located in the top-right corner of the list or document page.

### List menu

The list menu provides actions for the currently displayed list.

Available actions:

- **Export to CSV**

### Document menu

The document menu provides actions for the currently opened document.

Available actions:

- **Print**
- **Export to PDF (Supply order document) or CSV (Supply order details)**
- **Send as email** 
- **[Reverse document](../../Logistics/Documents/Reversals.md)**
- **Return to draft**

For details about menu actions, see [**Menu actions**](../../../Common/Concepts/MenuActions.md).

