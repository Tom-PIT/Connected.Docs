# Locations

This code list represents the storage locations within individual warehouses. Each location defines a specific area or subdivision, such as a rack, shelf, or compartment, and enables precise organization and tracking of materials within a warehouse.

For a detailed explanation of how warehouse locations work, watch the [Warehouses and warehouse locations](https://www.youtube.com/watch?v=3sEE9Mrtx6M) video.

---

## Schema

| Field | Description |
|-------|-------------|
| **Code** | Unique code identifying the location, often structured to reflect the hierarchy of the warehouse. |
| **Name** | Name or label of the location, for example **Rack 1** or **Shelf 2**. |
| **Parent location** | Defines another location within which this location is nested. For example, a shelf may belong to a specific rack. |
| **Description** | Optional description providing additional details about the location. |

---

## Management

To access the **Locations** code list, go to **Logistics / Management / Locations** in the [navigation](../../Common/UI/Sitemap.md).

### List of Locations

The user interface displays a list of all locations for the selected warehouse.  
Use the warehouse selector on the left to change the warehouse.  
If no records exist yet, the list is empty.

![Locations List](../Assets/LocationsList.png "Locations List")

Each record displays a tag representing **associated data** — [Stock](#stock).

Clicking this tag opens the interface for managing stock assigned to the selected location.

---

## Actions

Click on the [action button](../../Common/UI/ActionButton.md) to add a new location.

The form includes the following fields:
- **Code**
- **Name**
- **Parent location**
- **Description**
- **Active**

After entering the required information, click **Add** to save the location or **Cancel** to return to the list view.

![New Location](../Assets/NewLocation.png "New Location")

---

## Editing

To edit an existing location, click the location’s **Name** in the list. The interface switches to edit mode, displaying the existing values. Click **Save** to confirm changes or **Cancel** to discard them.

### Stock

The **Stock** tag opens the interface for managing the stock associated with the selected location.  
See the dedicated documentation for details.

---

## Deletion

A location can be deleted only if it is not used in any dependent entries, such as stock records or warehouse operations.  
Click **Delete** to open a confirmation dialog: **Are you sure you want to delete this record?**  
If confirmed, the location is permanently removed; otherwise, no changes are made.
