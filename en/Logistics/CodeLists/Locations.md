# Locations

This code list represents the storage locations within individual warehouses. Each location defines a specific area or subdivision, such as a rack, shelf, or compartment, and enables precise organization and tracking of materials within a warehouse.

---

## Schema

The code list has the following schema:

| Field | Description |
|-------|--------------|
| **Code** | Unique code identifying the location. The code is typically structured to reflect the warehouse and hierarchy (for example, **SW-R1-S1** for Shelf 1 in Rack 1 of the Secondary Warehouse). |
| **Name** | Name or label of the location, for example **Rack 1** or **Shelf 2**. |
| **Parent location** | Defines a parent location within which this location is nested. For example, a shelf may belong to a specific rack. |
| **Description** | Optional description providing additional details about the location’s purpose or physical characteristics. |

---

## Management

To access the **locations** code list, go to **Logistics / Management / Locations** in the [navigation](../../Common/UI/Sitemap.md).

### List of Locations

The user interface displays a list of all locations for the currently selected warehouse.  
Use the **warehouse selector** on the left panel to choose the desired warehouse before managing its locations.

If no records exist yet, the list is empty. Each location is shown with its **Name** and **Code**.

![Locations List](../Assets/LocationsList.png "Locations List")

Each record displays multiple tags representing **associated data**:
- [Stock](#stock)

Clicking any of these tags opens the related interface for managing stock associated with that location.

---

## Actions

Click on the [action button](../../Common/UI/ActionButton.md) to display the following actions:

- Import  
- New  

### Import

The **Import** action allows bulk creation or updating of warehouse locations using a CSV file. Prepare the file with the required data and upload it to automatically populate or modify the list.

### New

The **New** action opens the input form for creating a new location.  
The form includes the following fields: **Code**, **Name**, **Parent location**, and **Description**.  
After entering the data, click **Add** to save the record or **Cancel** to return to the list view.

![New Location](../Assets/NewLocation.png "New Location")

---

## Menu

The **Menu** in the top-right corner provides the following option: **Print location code labels for warehouse**, which prints physical barcode or QR code labels for all locations in the currently selected warehouse.

---

## Editing

To edit an existing location, click the location’s **Name** in the list. The interface switches to edit mode, displaying the current values for modification. Click **Save** to confirm changes or **Cancel** to discard them.

---

## Deletion

A location can be deleted only if it is not referenced by other records (for example, stock movements or storage documents).  
Click **Delete** to open a confirmation dialog: **Are you sure you want to delete this record?**  
If confirmed, the location is permanently removed; otherwise, the system keeps the record unchanged.
