# Business units

Business units belong to a specific **customer** or **vendor** and are managed inside the **Business directory**.  
They represent physical locations, branches, or organizational units of the company, each with its own address details.

### Accessing business units

Business units appear as a tag inside each Business directory entry:

![Business units button](../Images/BusinessUnitsButton.png "Business units button")

## Schema

| Field | Description |
|-------|-------------|
| **Name** | Name of the business unit (e.g., *Head Office*, *Slovenian Branch*). |
| **Street** | Street and house number of the location. |
| **Country** | Selected from the [**Countries**](../../Common/Management/Countries.md) code list. |
| **Postal code** | Selected from the country’s [**Postal codes**](PostalCodes.md) list. |
| **Active** | Indicates whether the business unit is available for selection in documents. |

## List view

The Business units list displays all units linked to the selected Business directory entry.

![Business units list](../Images/BusinessUnitsList.png)

Use the **Enabled / Disabled** filters on the left to show active or inactive units.

## Creating a new business unit

To add a new business unit, click on the [**action button**](../UI/ActionButton.md) in the bottom-right corner.

![Add business unit](../Images/BusinessUnitsNew.png)

Fill in the following fields:

- **Name** – Business unit name  
- **Street** – Street address  
- **Country** – Selected from the [**Countries**](../../Common/Management/Countries.md) list  
- **Postal code** – Selected from the country’s [**Postal codes**](PostalCodes.md) list  
- **Active** – Determines whether the unit can be used  

Click **Add** to save the new business unit.

## Editing an existing business unit

1. Open the Business directory entry.  
2. Click the **Business units** tag.  
3. Select a unit from the list.  
4. Update the name, address, country, postal code, or activity status.  
5. Click **Save**.

## Deletion

A business unit can be deleted from the Edit page, but only if it is not referenced in other records (such as delivery addresses or documents).

> [!NOTE]  
> Deleting a business unit does **not** delete the associated Business directory entry.
