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
> - Optional supporting definitions such as [**resources**](../../Production/CodeLists/Resources.md), [**checklists**](../../Production/CodeLists/Checklists.md), and [**measure units**](../../Production/CodeLists/MeasureUnits.md), depending on your maintenance workflow

To access maintenance orders, go to **Maintenance / Maintenance Orders** in the [navigation](../../Common/UI/Navigation.md).

## List of maintenance orders

The Maintenance Orders page displays all maintenance orders grouped by status.  
Use the filters on the left to refine the list.

![Maintenance Orders List](../Images/MaintenanceOrdersList.png "Maintenance Orders List")

### Status overview

At the top of the page, summary cards show the number of orders:
- **My** – Orders assigned to the current user
- **Unassigned** – Orders without an assigned resource
- **All** – Total number of maintenance orders

Clicking a card updates the list accordingly.

### Priority indicators

In the maintenance orders list, **visual indicators** are used to quickly identify the priority of each order:

- **Red arrow pointing up** — **High** priority
- **No arrow** — **Normal** priority
- **Blue arrow pointing down** — **Low** priority

These indicators appear next to the maintenance order entry and help users quickly assess urgency without opening the order.

![Maintenance Order Priority Indicators](../Images/MaintenanceOrdersListItem.png)


### Available filters

- **Planned start** – Filter orders by planned start date range
- **View** – Filter by life cycle status:
  - **Pending** — Finalized order, ready to activate
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
- **Order type** – **Planned** or **Curative**
- **Entity** – Equipment to be maintained

Then choose the specific equipment from the list.

![Maintenance Orders Step 1](../Images/MaintenanceOrdersNewStep1.png "Maintenance Orders Step 1")

### Step 2 — Select process

Select the **maintenance [process](../CodeLists/Processes.md)** and **process version** that defines the maintenance operations.

![Maintenance Orders Step 2](../Images/MaintenanceOrdersNewStep2.png "Maintenance Orders Step 2")

> [!NOTE]
> If no processes are available in this step, verify that:
> - The process has the **Maintenance** tag assigned
> - **Non-human resources** are defined and assigned in the process operations
> - The process has at least one **active version**


### Step 3 — Create schedule

Define how and when the maintenance order should be executed.

#### Schedule type

Two scheduling modes are available:

- **Time** — Schedule maintenance for a specific date or recurrent schedule

  ![Maintenance Orders Step 3 Time](../Images/MaintenanceOrdersNewStep3.png "Maintenance Orders Step 3 Time")

- **Count** — Schedule maintenance based on usage or counters

   ![Maintenance Orders Step 3 Count](../Images/MaintenanceOrdersNewStep3Count.png "Maintenance Orders Step 3 Count")

#### Execution pattern

If the **Execution pattern** is set to **Once**, the maintenance order will be created for a single execution.

If another execution pattern is selected (for example **Monthly**, **Every X days**, or **Yearly**), a **maintenance schedule** is created. This schedule automatically generates maintenance orders according to the defined pattern.

![Maintenance Orders New Step3 Schedule](../Images/MaintenanceOrdersNewStep3Schedule.png "Maintenance Orders New Step3 Schedule")

Click **Finish** to create the maintenance order in **Draft** state.

## Pending maintenance orders

A newly created maintenance order is created in **Pending** state.

Pending maintenance orders are fully defined but not yet active. In this state, you can:
- Edit order details (equipment, priority, planned dates)
- Review the selected process and operations
- Review required resources
- Add attachments or notes
- Delete the order if it is no longer needed

![Pending Maintenance Order](../Images/MaintenanceOrdersNewDraft.png "Pending Maintenance Order")

When the order is ready to be executed, click **Activate** to start the maintenance work.


## Active maintenance orders

Once activated, the maintenance order becomes **Active**.

![Active Maintenance Order](../Images/MaintenanceOrdersNewActive.png "Active Maintenance Order")

The order displays:
- Equipment and priority
- Planned start and end
- Process and version
- All operations defined by the selected process

### Operations execution

Operations are executed in sequence according to the process definition.

For each operation:
- When an operation is ready, the **Complete** action is available
- Clicking **Complete** finishes the operation
- Completed operations are displayed with a **green indicator**

This allows users to track progress clearly within the maintenance order.

![Maintenance Order Operations](../Images/MaintenanceOrdersOperationsDetails.png "Maintenance Order Operations")

## Closed maintenance orders

When all operations are completed, the maintenance order moves to **Closed** state.

Closed maintenance orders:
- Are read-only
- Provide a full execution history
- Serve as maintenance records for the equipment

They remain visible in the list under the **Closed** view.

## Deleting maintenance orders

Maintenance orders can only be deleted while they are in **Pending** state.

- **Draft** orders can be discarded before publishing
- **Pending** orders can be deleted if they are no longer needed
- **Active** and **Closed** maintenance orders cannot be deleted

This ensures that executed or in-progress maintenance activities remain fully traceable.

---
