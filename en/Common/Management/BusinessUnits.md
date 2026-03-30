<!-- app_route: /management/contacts/companies -->
<!-- app_label: Business directory -->
<!-- canonical_source_url: https://github.com/Tom-PIT/Connected.Docs/blob/main/en/Common/Management/BusinessUnits.md -->
<!-- canonical_source_title: Business units -->


# Business units
<!-- app_route: /management/contacts/companies -->
<!-- app_label: Business directory -->
Business units belong to a specific **customer** or **vendor** and are managed inside the **Business directory**. They represent physical locations, branches, or organizational units of the company, each with its own address details.

### Accessing business units
<!-- app_route: /management/contacts/companies -->
<!-- app_label: Business directory -->
Business units appear as a tag under each Business directory entry. Click the tag to open the list of business units associated with that company or individual.

![Business units button](../Images/BusinessUnitsButton.png "Business units button")

## Schema
<!-- app_route: /management/contacts/companies -->
<!-- app_label: Business directory -->
| Field | Description |
|-------|-------------|
| **Name** | Name of the business unit (e.g., *Head Office*, *Slovenian Branch*). |
| **Street** | Street and house number of the location. |
| **Country** | Selected from the [**Countries**](../../Common/Management/Countries.md) code list. |
| **Postal code** | Selected from the country’s [**Postal codes**](PostalCodes.md) list. |
| **Active** | Indicates whether the business unit is available for selection in documents. |

## List view
<!-- app_route: /management/contacts/companies -->
<!-- app_label: Business directory -->
The **Business units** list displays all units linked to the selected business directory entry.

![Business units list](../Images/BusinessUnitsList.png)

Use the **Enabled / Disabled** filters on the left to show active or inactive units.

## Actions

### Creating a new business unit
<!-- app_route: /management/contacts/companies -->
<!-- app_label: Business directory -->
To add a new business unit, click on the [**action button**](../UI/ActionButton.md) in the bottom-right corner.

![Add business unit](../Images/BusinessUnitsNew.png)

Fill in all required fields. Optional fields can be completed if relevant. For more details on the fields, see the [**Schema**](#schema) section above. 

Click **Add** to save the new business unit.

### Editing an existing business unit
<!-- app_route: /management/contacts/companies -->
<!-- app_label: Business directory -->
1. Open the Business directory entry.  
2. Click the **Business units** tag.  
3. Select a unit from the list.  
4. Update the name, address, country, postal code, or activity status.  
5. Click **Save**.

### Deletion
<!-- app_route: /management/contacts/companies -->
<!-- app_label: Business directory -->
A business unit can be deleted from the Edit page, but only if it is not referenced in other records (such as delivery addresses or documents).

> [!NOTE]  
> Deleting a business unit does **not** delete the associated Business directory entry.
