<!-- app_route: /management/materials/material-price-lists -->
<!-- app_label: Material price lists -->
<!-- canonical_source_url: https://github.com/Tom-PIT/Connected.Docs/blob/main/en/Domains/Assets/Materials/MaterialPriceLists.md -->
<!-- canonical_source_title: Material price lists -->

# Material price lists

**Material price lists** are the central source of truth for net prices of [materials](../README.md) within a defined validity period. They enable:
- Consistent pricing across processes (procurement, production, and inventory)
- Time-based price changes using **Valid from** / **Valid to**
- Optional **quantity-based ranges** to apply percentage adjustments to the base price

Use this screen to create and maintain price lists per material type, set the base net price (100 %), and configure ranges that automatically calculate the effective net price for specific order quantities.

To access this screen, navigate to **Assets / Materials / Material price lists** in the [navigation](../../../Common/UI/Navigation.md).

## Schema

<details open markdown="1">
<summary><strong>Price list</strong></summary>

| Field | Description |
|------|-------------|
| **Name** | Display name of the material price list (mandatory). |
| **Valid from** | Start date when the price list becomes active. |
| **Valid to** | End date of the price list validity period. |

</details>

<details markdown="1">
<summary><strong>Details</strong></summary>

| Field | Description |
|------|-------------|
| **Type** | Material classification (e.g. *Raw material*, *Semi products*, *Repro*). |
| [**Material**](../README.md) | Specific material to which the price applies. |
| **Item price net 100 %** | Base net price of the material without discounts. |
| **Ranges** | Optional quantity-based pricing rules defining discounts or adjustments. |
| **Range from / Range to** | Quantity interval where the rule applies. |
| **Percentage (%)** | Percentage of the base price applied for the range. |
| **Item price net** | Calculated net price for the specified range. |

</details>

## Management

### List view

To access the list of material price lists, go to:

**Assets / Materials / Material price lists**

The list displays:
- All existing material price lists
- Their **valid periods**
- A **Details** button to manage material prices

The list can be filtered by:
- **Type**
- **Value**

![Material price lists](../Images/MaterialsPriceListsList.png "Material price lists")

Clicking the **Details** button opens the pricing details page.

![Material price list details](../Images/MaterialsPriceListsDetailsList.png "Material price list details")

## Actions

Depending on the current screen, the [action button](../../../Common/UI/ActionButton.md) provides different options.

### On the Material price lists page
- **New**
- **Copy**

### On the Details page
- **New**
- **Import**

## Create a new material price list

1. Click the [action button](../../../Common/UI/ActionButton.md) and select **New** on the **Material price lists** screen.
2. Enter:
   - **Name**
   - **Valid from**
   - **Valid to**
3. Click **Add** to save the price list header.

   ![New material price list](../Images/MaterialsPriceListsNew.png)

4. Click the **Details** button to manage material prices.

   ![Details button](../Images/MaterialsPriceListsDetailsButton.png)

5. Add one or more **materials** using the action button.

   ![Add material price detail](../Images/MaterialsPriceListsDetailsNew.png)

6. Enter:
   - **Type**
   - **Material**
   - **Item price net 100 %**

7. (Optional) Add **Ranges** to define quantity-based pricing rules.  
   For example, when ordering between *10 and 50 units*, the price can be reduced to *95 %* of the base price.

8. Save the details.  
   The material price list is now active for the selected period.

## Edit a material price list

To edit a material price list, click the name of the price list on the list view. This opens the edit screen where you can modify the **Name**, **Valid from**, and **Valid to** fields. After making changes, click **Save** to apply them.

![Edit material price list](../Images/MaterialsPriceListsNew.png "Edit material price list")

> [!NOTE]
> To edit material prices and ranges, click the **Details** button to open the details page, where you can make changes to materials and ranges as needed.

### Copy a materials price list

Creates a duplicate of an existing price list, including its validity range and contents.

### Import a materials price list

The **Import** screen allows you to import a CSV file with the list of details.

## Delete a material price list

A material price list can be deleted **only if it contains no material details**.

If materials exist in the **Details** section:

1. Open **Details**
2. Click a material row
3. Delete the material price detail
4. Repeat until no details remain

Once empty, the price list itself can be deleted from the edit screen.

## Menu

This page includes menu actions in two places.

Menu actions are available through the **Menu** button located in the top-right corner of the list or document page.

### List menu

The list menu provides actions for the currently displayed list.

Available actions:
 
- **Export to PDF**

### Document menu

The details screen provides actions for the currently opened document.

Available actions:

- **Export to CSV**

For details about menu actions, see [**Menu actions**](../../../Common/Concepts/MenuActions.md).