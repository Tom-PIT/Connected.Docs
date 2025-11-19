# Measure units

This code list represents the measure units used across the digital contents of the system. Measure units ensure that quantities are displayed consistently in documents, inventories, and calculations. Each measure unit defines how values are rounded, displayed, and processed across the system.

For a detailed explanation of how measure units work, watch the [Measure units](https://www.youtube.com/watch?v=8swl8Vex6y4) video.

---

## Schema

| Field | Description |
|-------|-------------|
| **Name** | Name of the measure unit used in lists and documents. For example **Kilogram** or **Meter**. |
| **Abbreviation** | Short form of the measure unit displayed throughout the system. For example **kg** or **m**. |
| **Precision** | Default number of decimal places used for values in this measure unit. For example **0** or **3**. |
| **Active** | Indicates whether the measure unit is available for use in new documents. Inactive units cannot be selected in new entries, but remain visible in history. |

---

## Management

You can access the **Measure units** code list from different domainsin the [navigation](../Common/UI/Navigation.md). In all cases you are working with the same shared data.

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

![Measure units](../Assets/MeasureUnits.png "Measure units")

The list displays each measure unit’s name, abbreviation, and precision.

---

## Actions

Click on the [action button](../../Common/UI/ActionButton.md) to add a new measure unit.

The form includes the following fields:
- **Name**
- **Abbreviation**
- **Precision**
- **Active**

After entering the required information, click **Add** to save the measure unit or **Cancel** to return to the list view.

![Add measure unit](../Assets/NewMeasureUnit.png "Add measure unit")

---

## Editing

To edit an existing measure unit, click the unit’s **Name** in the list. The interface switches to edit mode, displaying the existing values for modification. Click **Save** to confirm changes or **Cancel** to discard them.

---

## Deletion

A measure unit can be deleted only if it is not used in any dependent records, such as materials or stock transactions. Click **Delete** to open a confirmation dialog: **Are you sure you want to delete this record?**  
If confirmed, the measure unit is permanently removed; otherwise, the system keeps the record unchanged.
