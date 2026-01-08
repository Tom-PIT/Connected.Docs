# Maintenance orders

Maintenance orders define the work required to perform **planned or curative maintenance** on equipment, based on a selected **maintenance process** and version.  
They move through the life cycle **Pending → Active → Closed**, and include operations, resources, inputs, and quality checks defined by the selected process.

> [!NOTE]
> **Prerequisites**
>
> Before creating a maintenance order, ensure that the following are configured:
> - At least one [**maintenance process**](../../Production/CodeLists/Processes.md) with an active version
> - Equipment definitions
> - Assigned [**organization units**](../../Production/CodeLists/OrganizationUnits.md)
> - Optional supporting definitions such as [**resources**](../../Production/CodeLists/Resources.md), [**checklists**](../../Production/CodeLists/Checklists.md), and [**measure units**](../../Common/CodeLists/MeasureUnits.md), depending on your maintenance workflow

To access maintenance orders, go to **Maintenance / Maintenance Orders** in the [navigation](../../Common/UI/Navigation.md).

## List of maintenance orders

The Maintenance Orders page displays all maintenance orders grouped by status.  
Use the filters on the left to refine the list.

![Maintenance Orders List](../Images/MaintenanceOrdersList.png "Maintenance orders list")

### Status overview

At the top of the page, summary cards show the number of orders:

- **My** – Orders assigned to the current user
- **Unassigned** – Orders without an assigned resource
- **All** – Total number of maintenance orders

Clicking a card updates the list accordingly.

### Visual indicators in the list

Maintenance orders may display visual indicators to provide quick status information:

- **Red dot** – Curative maintenance order
- **Late indicator** – Indicates that the maintenance order is overdue
- **Priority arrows**
  - Red arrow pointing up – High priority
  - No arrow – Normal priority
  - Blue arrow pointing down – Low priority

![Maintenance Orders List Item](../Images/MaintenanceOrdersListItem.png "Maintenance order list indicators")

### Available filters

- **Planned start** – Filter orders by planned start date range
- **View** – Filter by life cycle status:
  - **Pending** — Created and ready to activate
  - **Active** — Currently being executed
  - **Closed** — Completed maintenance orders
- **Order type**
  - **Planned** — Scheduled preventive maintenance
  - **Curative** — Corrective maintenance
- **Priority**
- **Organization unit**
- **Resource categories**

The search bar allows filtering by maintenance order code or equipment name.

## Creating a maintenance order

Click the [**action button**](../../Common/UI/ActionButton.md) to create a new maintenance order.

The creation wizard consists of **three steps**, similar to production orders.

### Step 1 — Select order type and entity

Select:

Select:
- **Entity** – Equipment to be maintained

> [!NOTE]
> When creating a maintenance order manually, the order type is always **Planned**.
>
> **Curative** maintenance orders are created from **reported malfunctions**.


Then choose the specific equipment from the list.

![Maintenance Orders Step 1](../Images/MaintenanceOrdersNewStep1.png "Create maintenance order – step 1")

### Step 2 — Select process

Select the **maintenance [process](../../Production/CodeLists/Processes.md)** and **process version** that defines the maintenance operations.

![Maintenance Orders Step 2](../Images/MaintenanceOrdersNewStep2.png "Create maintenance order – step 2")

> [!NOTE]
> If no processes are available in this step, verify that:
> - The process has the **Maintenance** tag assigned
> - **Non-human resources** are defined and assigned in the process operations
> - The process has at least one **active version**

### Step 3 — Create schedule

Define how and when the maintenance order should be executed.

#### Schedule type

Two scheduling modes are available:

- **Time** — Schedule maintenance for a specific date or recurring interval

  ![Maintenance Orders Step 3 Time](../Images/MaintenanceOrdersNewStep3.png "Create maintenance order – time schedule")

- **Count** — Schedule maintenance based on usage or counters

  ![Maintenance Orders Step 3 Count](../Images/MaintenanceOrdersNewStep3Count.png "Create maintenance order – counter schedule")

> [!NOTE]
> Usage-based schedules rely on resource and equipment counters (e.g., pieces, meters, grams, hours). For configuring counters, see **[Resource work hours & counters](ResourceWorkHours&Counters.md)**.

If a **recurring execution pattern** is selected (for example *Monthly*, *Every X days*, or *Yearly*), a **maintenance schedule** is created automatically.  
This schedule will generate maintenance orders according to the defined pattern.

![Maintenance Orders Schedule](../Images/MaintenanceOrdersNewStep3Schedule.png "Maintenance order schedule configuration")

Click **Finish** to create the maintenance order in **Pending** state.

## Pending maintenance orders

A newly created maintenance order starts in **Pending** state.

In this state, the order can be:

- Reviewed
- Edited (equipment, priority, planned dates, process and version)
- Deleted
- Prepared for execution

From this state, you can:

- Review operations
- Review required resources
- Add attachments or notes

When ready to execute, click **Activate**.

![Pending Maintenance Order](../Images/MaintenanceOrdersNewDraft.png "Pending maintenance order")

### Deleting maintenance orders

Only **Pending** maintenance orders can be deleted. Once an order is activated, deletion is no longer possible.

## Active maintenance orders

Once activated, the maintenance order becomes **Active**.

![Active Maintenance Order](../Images/MaintenanceOrdersNewActive.png "Active maintenance order")

The order displays:

- Equipment and priority
- Planned start and end
- Process and version
- All operations defined by the selected process

### Operations execution

Operations are executed according to the process definition.

Two execution flows are possible:

- **Quick completion** – Click **Complete** directly on the maintenance order
- **Detailed execution (recommended)** – Click an operation to open its execution screen
   
   ![Maintenance Order Operations](../Images/MaintenanceOrdersOperation.png "Maintenance order operations list")


Clicking an operation opens the **operation execution screen**, where the worker can:

- Review instructions
- Register inputs and non-human resources
- Complete quality checks and checklists
- Record effort (start/stop work, duration)
- Add execution data

![Maintenance Order Operation](../Images/MaintenanceOrdersOperationScreen.png "Maintenance order operation execution")

Once the operation is finished, click **Complete** in the top-left corner of the operation screen.

Completed operations are displayed with a **green indicator**, providing a clear visual status.

## Closed maintenance orders

When all operations are completed, the maintenance order moves to **Closed** state.

Closed maintenance orders:

- Are read-only
- Provide a full execution history
- Serve as maintenance records for the equipment

They remain visible in the list under the **Closed** view.

---