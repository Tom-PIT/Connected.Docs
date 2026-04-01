<!-- app_route: /management/common/delivery-terms -->
<!-- app_label: Delivery terms -->
<!-- canonical_source_url: https://github.com/Tom-PIT/Connected.Docs/blob/main/en/Common/Management/DeliveryTerms.md -->
<!-- canonical_source_title: Delivery terms -->

# Delivery terms

Delivery terms define the conditions under which goods are delivered between seller and buyer, including the allocation of costs, risks, and responsibilities during transport.

These terms are commonly used in **sales** documents to clearly specify delivery conditions.

Most delivery terms are based on internationally recognized **Incoterms®** published by the International Chamber of Commerce (ICC), with the possibility to define custom terms if needed.

To access this screen, go to **Accounting / Management / Intrastat / Delivery terms** in the [**navigation**](../../Common/UI/Navigation.md). It appears also under **Management** in the **Sales** domain.

## Schema

| Field | Description |
|-----|------------|
| Code | Short identifier of the delivery term (for example, EXW, DAP, CIF). |
| Description | Description of the delivery condition. |
| Location to be indicated | Optional field used for delivery terms that require a named place (for example, port, terminal, or delivery address). |

## List view

The list view displays all available delivery terms with their codes and descriptions.

![Delivery terms list](../Images/DeliveryTermsList.png "Delivery terms list")

Delivery terms are shared across domains and can be referenced in documents such as [sales orders](../../Domains/Sales/Documents/SalesOrders.md) or [delivery notes](../../Domains/Sales/Documents/DeliveryNotes.md).

The list can be searched using the search field in the top-right corner.

## Actions

### Adding a new delivery term

Click the [**action button**](../../Common/UI/ActionButton.md) to create a new delivery term.

Fill in all required fields. Optional fields can be completed if relevant. For more details on the fields, see the [**Schema**](#schema) section above. 

> [!NOTE]
> Make sure to use standard Incoterms® codes and descriptions when applicable, to ensure clarity and consistency in international trade.

![Add delivery term](../Images/DeliveryTermsNew.png "Add delivery term")

After saving, the delivery term becomes available for selection in documents where delivery conditions are required.

### Editing an existing delivery term

Click a delivery term in the list to open it in edit mode. Update the **code**, **description**, or **location to be indicated** as needed.

Click **Save** to apply changes or **Cancel** to discard them.

### Deletion

Open a delivery term from the list and click **Delete**. Confirm the deletion in the dialog.

> [!NOTE]
> A delivery term can be deleted only if it is not referenced in dependent records (e.g., sales or purchase orders).
