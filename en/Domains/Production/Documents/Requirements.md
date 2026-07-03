<!-- app_route: /production-orders/requirements -->
<!-- app_label: Requirements -->
<!-- canonical_source_url: https://tom-pit.github.io/Connected.Docs/en/Domains/Production/Documents/Requirements/ -->
<!-- canonical_source_title: Requirements -->

# Requirements

The **Requirements** page provides an overview of all materials needed for planned production operations within a selected time window. It helps planners understand whether enough stock is available and quickly create purchase orders when shortages appear.

The Requirements page helps planners:

- See **which materials are needed** for upcoming production  
- Compare **required vs. available** quantities  
- Drill into **which operations** consume each material  
- Quickly create **supply orders** when stock is insufficient  

> [!TIP]  
> For a full demonstration, see the **[Requirements](https://www.youtube.com/watch?v=eK7ui-ak7J0)** video tutorial.

To access this page, go to **Production / Requirements** in the [navigation](../../../Common/UI/Navigation.md).

## Schema

| Column | Description |
|--------|-------------|
| **Requirement** | The material name and code. You can expand each material to see which operations consume it. |
| **Quantity** | Shows two values:<br>• **Interval quantity** — required quantity within the selected date range (upper value)<br>• **Total quantity** — full planned consumption for all operations using that material (lower value) |
| **Stock** | Current available stock. <br>• If stock is lower than required, it appears in **red**. <br>• Clicking the **+** icon opens a window to create a **new supply order**. |

## Requirements list

Each line represents a **material requirement** based on inputs defined in processes and production orders.

![Requirements](../Images/RequirementsList.png "Requirements overview")

### Filters

Filters appear on the left side of the screen and allow you to adjust which planned operations are included in the calculation.

- **Show planned operations** – When enabled, requirements are calculated based only on planned (not yet executed) operations.  
- **Start / End** – Defines the date interval used to calculate required quantities.  
- **Organization unit** – Filters requirements by organizational unit.

Only materials required by operations that fall within the selected time and organizational unit range are included.

### View consumption details

Click the expand arrow next to a material to display all operations that use it:

![Expanded requirements](../Images/RequirementsExpandedLine.png "Expanded material requirements")

For each operation, the following is shown:

- **Operation code and name**  
- **Planned start** date  
- **Quantity consumed** by that operation  

This allows planners to understand *which* production tasks drive consumption.

#### Color code

The number appears in: 

- **black** if stock is sufficient to cover the requirements.
- **orange** if stock is less than the requirements.
- **red** if stock is **0**.

## Create a supply order

The **Stock** column displays a **+** sign next to the quantity:

![Create supply order](../Images/RequirementsPlusButton.png "Create supply order")

Clicking **+** opens the supply order creation form, pre-filled with the selected material.

This provides quick replenishment directly from the Requirements screen.

## Menu

The menu in the top right corner of the page gives the option to export the list of requirements to a CSV file for further analysis or sharing with other stakeholders.

