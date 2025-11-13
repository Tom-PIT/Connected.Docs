<<<<<<< HEAD
﻿# Measure units

Measure units are how you count or measure items (for example: piece, kilogram, meter, liter). They make quantities consistent across documents, stock, and calculations and control rounding/formatting (e.g., 2 pcs, 1.75 kg, 3.000 m).

Examples:
- Finished products: Chairs in pieces (pcs), no decimals
- Raw materials: Paint in liters with 2 decimals (e.g., 1.25 L)
- Components: Cable in meters with 3 decimals (e.g., 12.375 m)

> [!TIP]
> For a full demonstration, see the **[Measure units](https://www.youtube.com/watch?v=8swl8Vex6y4)** video tutorial.

## Schema

| Field | Description |
|-------|-------------|
| **Name** | Name of the measure unit used in lists and documents. For example **Kilogram** or **Meter** (mandatory). |
| **Abbreviation** | Short form of the measure unit displayed throughout the system. For example **kg** or **m** (mandatory). |
| **Precision** | Default number of decimal places used for values in this measure unit. For example **3** for **1.255**, or **1** for **2.5**. |
| **Active** | Indicates whether the measure unit is available for use in new documents. Inactive units cannot be selected in new entries, but remain visible in history. |

## Management

You can access the **Measure units** code list from different domains in the [navigation](../UI/Navigation.md). In all cases you are working with the same shared data.

To open the list, go to the **Management** section of the following domains:

- **Assets**
- **Logistics**
- **Maintenance**
- **Productions**
- **Sales**
- **Supply**

### List of measure units

The user interface contains a list of measure units. If no record exists yet, the list is empty.

Each record includes a status indicator to the left of its name:
- **Blue** indicates the measure unit is active
- **Gray** indicates the measure unit is inactive

![Measure units](../Images/MeasureUnits.png "Measure units")

The list displays each measure unit's name, abbreviation, and precision.

## Actions

Click on the [**action button**](../UI/ActionButton.md) to add a new measure unit.

The form includes the following fields:
- **Name**
- **Abbreviation**
- **Precision**
- **Active**

After entering the required information, click **Add** to save the measure unit or **Cancel** to return to the list view.

![Add measure unit](../Images/NewMeasureUnit.png "Add measure unit")

## Editing

To edit an existing measure unit, click the unit's **Name** in the list. The interface switches to edit mode, displaying the existing values for modification. 

![Edit measure unit](../Images/MeasureUnitsEdit.png "Edit measure unit")

Click **Save** to confirm changes or **Cancel** to discard them.

## Deletion

Click **Delete** on the edit screen to open a confirmation dialog: 

**Are you sure you want to delete this record?**  

If confirmed, the entry is permanently removed; otherwise, the system keeps the record unchanged.

> [!NOTE]
>A **measure unit** can be deleted only if it is not used in any dependent records, such as materials or stock transactions.

---
=======
# Measure units

This code list represents the measure units used across the system. Each measure unit defines how quantities are represented in documents, calculations, and inventory operations. Accurate measure units ensure consistency in material tracking, orders, and stock movements.

For a detailed explanation of how measure units work, watch the [Measure units](https://www.youtube.com/watch?v=8swl8Vex6y4) video.

---

## Schema

The code list has the following schema:

| Field | Description |
|-------|-------------|
| **Name** | Name of the measure unit used in lists and documents. For example **Kilogram** or **Meter**. |
| **Abbreviation** | Short form of the measure unit displayed throughout the system. For example **kg** or **m**. |
| **Precision** | Default number of decimal places used for values in this unit. For example **0** or **3**. |
| **Active** | Defines whether the measure unit is available for use in new documents. Inactive units cannot be selected in new entries but remain visible in history. |

---

## Management

To access the **measure units** code list, go to **Logistics / Management / Measure units** in the [navigation](../../Common/UI/Sitemap.md).

### List of Measure Units

The user interface displays a list of all measure units defined in the system.  
If no records exist yet, the list is empty. Each measure unit is shown with its **Name**, **Abbreviation**, and **Precision**.

Each measure unit has a status in the form of a color to the left of the name — **blue** means the unit is active, and **gray** means it is inactive.

![Measure units](../Assets/MeasureUnits.png "Measure units")

---

## Actions

Click on the [action button](../../Common/UI/ActionButton.md) to add a new measure unit.  
The form includes the following fields: **Name**, **Abbreviation**, **Precision**, and **Active**. After entering the required information, click **Add** to save the record or **Cancel** to return to the list view.

![Add measure unit](../Assets/NewMeasureUnit.png "Add measure unit")

---

## Editing

To edit an existing measure unit, click the unit’s **Name** in the list. The interface switches to edit mode, displaying the current values for modification. Click **Save** to confirm changes or **Cancel** to discard them.

---

## Deletion

A measure unit can be deleted only if it is not referenced by dependent records (such as materials, orders, or stock transactions). If deletion is attempted, the system displays a confirmation message: **Are you sure you want to delete this record?**  
If confirmed, the measure unit is removed; otherwise, the system keeps the record unchanged.
>>>>>>> 9d45474 (DOCS: added MeasureUnits.md and images)
