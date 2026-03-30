<!-- app_route: management/common-types/predefined-texts -->
<!-- app_label: Predefined texts -->
<!-- canonical_source_url: https://github.com/Tom-PIT/Connected.Docs/blob/main/en/Common/Management/PredefinedTexts.md -->
<!-- canonical_source_title: Predefined texts -->

# Predefined texts
<!-- app_route: management/common-types/predefined-texts -->
<!-- app_label: Predefined texts -->
The **Predefined texts** code list stores ready-to-use text snippets that can be inserted into various commercial documents—such as delivery notes, issued invoices, offers, or supply orders. These texts help users add frequently repeated instructions, remarks, or customer-specific notes quickly and consistently.

This page is available in the **Sales** and **Supply** domains, to access it go to **Management / Predefined texts** in the [**navigation**](../../Common/UI/Navigation.md).

## Schema
<!-- app_route: management/common-types/predefined-texts -->
<!-- app_label: Predefined texts -->
| Field | Description |
|-------|-------------|
| **Entity** | Document type to which the predefined text applies (mandatory): <br>• [**Delivery note**](../../Domains/Sales/Documents/DeliveryNotes.md) <br>• [**Issued invoice**](../../Domains/Sales/Documents/IssuedInvoices.md) <br>• [**Offer**](../../Domains/Sales/Documents/Offers.md) <br>• [**Supply order**](../../Domains/Supply/Documents/SupplyOrders.md) |
| **Code** | Short identifier used to reference the predefined text (mandatory). |
| **Text** | Full text content that will be inserted into the selected document type (mandatory). |
| **Enabled** | Indicates whether the predefined text is active and available for use. |

## Management

### List view
<!-- app_route: management/common-types/predefined-texts -->
<!-- app_label: Predefined texts -->
The list displays all predefined texts together with the **entity**, **code**, and **text**. You can filter the list by **Enabled/Disabled** status or by **Entity**.

![Predefined texts](../Images/PredefinedTexts.png "Predefined texts list")

Each record includes a status indicator to the left of its name:
- **Blue** indicates the predefined text is active
- **Gray** indicates the predefined text is inactive

A **Search** bar is available to quickly find records by code or text content.

## Actions

### Add new predefined text
<!-- app_route: management/common-types/predefined-texts -->
<!-- app_label: Predefined texts -->
Click the **action button** to open the form to create a new predefined text.

![Add predefined text](../Images/PredefinedTextsNew.png "Add predefined text")

Select the **entity**, enter the **code**, and write the full **text**. You can enable or disable the record as needed.

Entity options:

![Predefined texts entities](../Images/PredefinedTextsEntityFilter.png "Predefined text entity options")

### Editing
<!-- app_route: management/common-types/predefined-texts -->
<!-- app_label: Predefined texts -->
Click any record in the list to open its edit screen.

From there you can modify the entity, code, or text.  

### Deletion
<!-- app_route: management/common-types/predefined-texts -->
<!-- app_label: Predefined texts -->
Click **Delete** to open a confirmation dialog:

**Are you sure you want to delete this record?**

If confirmed, the record is permanently removed; otherwise, the system keeps it unchanged.

> [!NOTE]  
> A predefined text can be deleted only if it is not referenced by dependent documents.

