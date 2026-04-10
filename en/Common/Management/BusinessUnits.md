<!-- app_route: /management/contacts/companies -->
<!-- app_label: Business directory -->
<!-- app_navigation_hint: Open **Business directory**, then open **Business units** for the relevant entry. -->
<!-- canonical_source_url: https://github.com/Tom-PIT/Connected.Docs/blob/main/en/Common/Management/BusinessUnits.md -->
<!-- canonical_source_title: Business units -->

# Business units

**Business units** belong to a specific **customer** or **vendor** and are managed inside the **Business directory**. They represent physical locations, branches, or organizational units of the company, each with its own address details.

**Business units** appear as a tag under each **Business directory** entry. Click the tag to open the list of business units associated with that company or individual.

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

The **Business units** list displays all units linked to the selected business directory entry.

![Business units list](../Images/BusinessUnitsList.png)

Use the **Enabled / Disabled** filters on the left to show active or inactive units.

## Actions

### Add a new business unit

To create a new business unit, follow these steps:

1. Click on the [**action button**](../UI/ActionButton.md).
2. Fill in all required fields. Optional fields can be completed if relevant. 
3. Click **Add** to save the new business unit or **Cancel** to return to the list view.

> [!NOTE]
> For more details on the fields, see the [**Schema**](#schema) section above. 

![Add business unit](../Images/BusinessUnitsNew.png "Add business unit")

### Edit an existing business unit

To edit an existing business unit, follow these steps:

1. Open the Business directory entry.  
2. Click the **Business units** tag.  
3. Select a unit from the list by clicking its name on the list.  
4. Update the name, address, country, postal code, or activity status.  
5. Click **Save**.

### Delete an existing business unit

To delete a business unit, follow these steps:

1. Open the Business directory entry.  
2. Click the **Business units** tag.  
3. Select a unit from the list by clicking its name on the list.  
4. Click the **Delete** button.  

A business unit can only be deleted if it is not referenced in other records (such as delivery addresses or documents).
