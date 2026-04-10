<!-- app_route: /management/common-types/countries -->
<!-- app_label: Countries -->
<!-- canonical_source_url: https://github.com/Tom-PIT/Connected.Docs/blob/main/en/Common/Management/PostalCodes.md -->
<!-- canonical_source_title: Postal codes -->

# Postal codes

Postal codes belong to a specific **country** and are managed inside the [**Countries**](Countries.md) code list. They define the available postal areas used when entering addresses in the Business directory or logistics documents.

Postal codes appear as a tag under each **Country** entry. Click the tag to open the list of postal codes defined for that country.

![Postal codes button](../Images/PostalCodesButton.png "Postal codes button")

## Schema

| Field | Description |
|-------|-------------|
| **Number** | The postal code value (e.g., 1000). |
| **Name** | The corresponding city, town, or postal area name. |
| **Active** | Indicates whether the postal code is available for selection in addresses. |

## List view

The **Postal codes** list displays all codes defined for the selected country.

![Postal codes list](../Images/PostalCodesList.png)

Use the **Enabled / Disabled** filters on the left to show active or inactive postal codes.

## Actions

Click on the [action button](../UI/ActionButton.md) to display the following actions:
- **Import**
- **New**

### Add a new postal code

To create a new postal code, follow these steps:

1. Click on the [**action button**](../UI/ActionButton.md) and select **New** to open the form to add a new postal code.
2. Fill in all required fields. Optional fields can be completed if relevant. 
3. Click **Add** to save the new postal code or **Cancel** to return to the list view.

> [!NOTE]
> For more details on the fields, see the [**Schema**](#schema) section above. 

![Add postal code](../Images/PostalCodesNew.png)

### Import postal codes

The action button also includes an **Import** option, allowing bulk upload of postal codes from a CSV file.  This is useful when setting up a new country with many postal code entries.

To import postal codes, follow these steps:
1. Click on the [**action button**](../UI/ActionButton.md) and select **Import**.
2. Choose a CSV file containing the postal codes to import.

### Edit an existing postal code

To edit an existing postal code, follow these steps:

1. Go to the [**Countries**](Countries.md) list.  
2. Click the **Postal codes** tag.  
3. Select a postal code from the list by clicking its number.  
4. Update the **Number**, **Name**, or **Active** status.  
5. Click **Save** to apply the changes, or **Cancel** to discard them.

### Delete a postal code

To delete a postal code, follow these steps:
1. Go to the [**Countries**](Countries.md) list.
2. Click the **Postal codes** tag.  
3. Select a postal code from the list by clicking its number.
4. Click the **Delete** button. A confirmation dialog will appear. If confirmed, the postal code will be deleted.

Postal codes can only be deleted if they are not referenced in other records (such as customer or vendor addresses).

> [!NOTE]  
> Deleting a postal code does **not** delete the associated Country entry.

