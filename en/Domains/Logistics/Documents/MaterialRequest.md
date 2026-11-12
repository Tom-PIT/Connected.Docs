<!-- app_route: /warehouse/documents/material-requests -->
<!-- TODO: Confirm app_route against the live app. -->
<!-- app_label: Material request -->
<!-- canonical_source_url: https://tom-pit.github.io/Connected.Docs/en/Domains/Logistics/Documents/MaterialRequest/ -->
<!-- canonical_source_title: Material request -->

# Material request

A **Material request** document is used to ask the warehouse for materials. It is the request that comes before the transfer. A planner or shift supervisor lists the materials and quantities that a production area needs. The warehouse then reviews the request and moves the materials with one or more [**Inter warehouse**](InterWarehouse.md) documents.

A material request does not change stock. Only the inter warehouse documents created from it move materials.

To access Material request documents, go to **Logistics / Documents / Material request** in the [navigation](../../../Common/UI/Navigation.md).

<!-- ![Material request list](../Images/MaterialRequestList.png "Material request list") -->

## Schema

<details open markdown="1">
<summary><strong>Document</strong></summary>

| Field | Description |
|-------|-------------|
| [**Code**](../../../Common/UI/DocumentCodes.md) | System-generated unique identifier for the material request. |
| **Document date** | Date of the request. |
| **Created by** | The user who created the document. Filled in automatically. |
| **Owner** | The user responsible for the request. Filled in automatically. |
| **Notes** | Additional remarks for the warehouse. |
| **Attachments** | Files related to the request. |

</details>

<details markdown="1">
<summary><strong>Details</strong></summary>

| Field | Description |
|-------|-------------|
| [**Material**](../../Assets/Materials/README.md) | The material requested. |
| **Quantity** | The quantity requested. |

</details>

> [!NOTE]
> The details do not include prices or taxes. A material request is a request for stock, not a financial document.

## List of material request documents

The **Material request** page displays all requests. You can search for a document using the search bar, or filter the list using the left sidebar. The filters work the same way as on the [**Receives**](Receives.md) page. There is no warehouse filter yet.

A document has one of four states:

<!-- TODO: Confirm the English labels for these states in the app. -->

- **Draft** — the request is being prepared and can still be changed.
- **Available** — the request is published and the warehouse can act on it.
- **Closing** — the warehouse is completing the request.
- **Closed** — the request is complete.

## Actions

### Create a material request

1. Click the [action button](../../../Common/UI/ActionButton.md) and select **Add new**.
2. Add the materials you need in the **Details** section. Add each material the same way you add lines on a purchase order.
3. Enter any **Notes** or attach files if the warehouse needs them.
4. Click **Save** to store the document as a draft.

The request appears in the **Draft** state. You can print or export it from the [menu](#menu) before it goes to the warehouse.

<!-- TODO: Confirm the step that moves a draft to Available (Publish or another action). -->

### Return a request to draft

Use **Return to draft** to change a request that has already been published, for example to correct a quantity. The request then returns to the **Draft** state.

<!-- TODO: Confirm which states allow Return to draft. -->

### Create a material request from a production order

You can create a material request directly from a [**production order**](../../Production/Documents/ProductionOrders.md).

1. Open the production order.
2. Select **Create material request**.
3. Check the materials. The system copies them from the inputs of the order, and you can change them before you save.

The material request is linked to the production order. On the request, you can see:

- the **requested quantity**, and
- the **quantity already moved** to production by the inter warehouse documents created from it.

This matters because one request can be filled in several transfers.

## Create an inter warehouse document from a material request

When the warehouse processes a request, it creates an [**Inter warehouse**](InterWarehouse.md) document from it. Select **Create inter warehouse** in the **Linked documents** section of the request.

- The materials and quantities are copied to the inter warehouse document.
- You select the **destination warehouse**. If the organization unit that runs the order is linked to a warehouse in its master data, the destination warehouse is selected automatically.
- Publishing the inter warehouse document moves the stock.

<!-- TODO: Confirm when the request moves to Closing or Closed. -->

### Example: moving half of an order in two parts

1. A production order needs materials for its full run, but the warehouse can move only part of the order at a time.
2. On the production order, select **Create material request**. The request opens as a draft.
3. The shift supervisor reviews the request and publishes it.
4. On Monday, the warehouse creates an inter warehouse document from the request and moves about 50 % of the materials to production.
5. On Wednesday, the warehouse creates a second inter warehouse document from the same request and moves the rest.

## Menu

The menu provides additional actions available on this page.

Available actions:

- **Print**
- **Export to PDF**

For details about menu actions, see [**Menu actions**](../../../Common/Concepts/MenuActions.md).
