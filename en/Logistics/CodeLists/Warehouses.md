# Warehouses

This code list represents the warehouses used across the system. Each warehouse defines a physical or logical storage location for materials and goods, supporting operations such as inventory tracking, logistics, and order fulfillment.

---

## Schema

The code list has the following schema:

| Field | Description |
|-------|--------------|
| **Code** | Warehouse code. The code must be unique within the entire list. |
| **Name** | Name of the warehouse. |
| **Description** | Short description of the warehouse. |

---

## Management

To access the **warehouses** code list, go to **Logistics / Management / Warehouses** in the [navigation](../../Common/UI/Sitemap.md).

### List of Warehouses

The user interface contains a list of warehouses. If no record exists yet, the list is empty. Each warehouse is displayed with its **Name** and **Code**.

![Warehouses List](../Assets/Warehouses.png "Warehouses List")

The interface allows you to create new warehouse records directly by clicking the **Add new warehouse** action.

---

## Actions

Click on the [action button](../../Common/UI/ActionButton.md) to add a new warehouse.

### New

The **New** action opens the input form for creating a new warehouse.  
The form includes the following fields: **Code**, **Name**, and **Description**. After filling in the required information, click **Add** to create the record or **Cancel** to return to the list view without saving.

![New Warehouse](../Assets/NewWarehouse.png "New Warehouse")

---

## Editing

To edit an existing warehouse, click the warehouse’s **Name** in the list. The interface switches to edit mode, displaying the existing values for modification. Click **Save** to confirm changes or **Cancel** to discard them.

---

## Deletion

A warehouse can be deleted only if it is not referenced by any dependent records (such as inventory transactions or stock movements). Click **Delete** to open a confirmation dialog: **Are you sure you want to delete this record?**  
If confirmed, the record is permanently removed; otherwise, no changes are applied.
