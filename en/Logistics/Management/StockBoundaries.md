# Stock boundaries

This code list represents the stock boundaries for individual materials or products in the system. Each record defines the minimum and maximum stock quantity allowed for a particular material type, ensuring optimal inventory levels and preventing shortages or overstocking.  

> [!TIP]
> For a full demonstration, see the **[Stock boundaries](https://www.youtube.com/watch?v=rcbxvffOBdM)** video tutorial.

## Schema

| Field | Description |
|-------|--------------|
| **Entity** | The material or product to which the stock boundaries apply. It is displayed with its code and name. |
| **Min** | The minimum allowed stock quantity for the selected material or product. When the quantity drops below this value, the system highlights the condition in the [Dashboard](../Documents/Dashboard.md). |
| **Max** | The maximum allowed stock quantity for the selected material or product. When this value is exceeded, the system highlights the condition in the [Dashboard](../Documents/Dashboard.md). |

## Management

To access the **Stock boundaries** code list, go to **Logistics / Management / Stock boundaries** in the [**navigation**](../../Common/UI/Navigation.md).

### List of stock boundaries

The user interface displays a list of all materials and their defined stock boundaries. Use the **Material type** selector on the left to filter results by category, and the **Tags** filter to refine the displayed records.

Each record shows the **Entity**, **Min**, and **Max** stock quantities. If no value is defined for **Min** or **Max**, the table displays **0** by default.

You can edit stock boundaries directly in the list view by clicking the numeric values in the **Min** or **Max** column and entering a new number. The changes are saved automatically once the field is updated.

![Stock Boundaries](../Images/StockBoundaries.png "Stock Boundaries")

Any stock quantity below the defined minimum or above the defined maximum is visually indicated in the [Dashboard](../Documents/Dashboard.md).

## Actions

Click on the [action button](../../Common/UI/ActionButton.md) to display the **Import** action.  

### Import

The **Import** action allows bulk creation or update of stock boundary records using a CSV file. Prepare the file with the required fields (**Entity**, **Min**, **Max**) and upload it to automatically populate the list.

![Stock boundaries import](../Images/StockBoundariesImport.png "Stock boundaries import")

Click Cancel to return to the list without importing.

#### Example CSV structure

```csv
Material Code;Material type;Min;Max;
M-0001;1;10;100;
M-0002;2;0;250;
M-0003;3;50;0;
M-0004;4;20;80;
```

## Menu

The **Menu** in the top-right corner provides the following option: **Export to CSV**, which exports all visible records to a CSV file for reporting, analysis, or backup purposes.
