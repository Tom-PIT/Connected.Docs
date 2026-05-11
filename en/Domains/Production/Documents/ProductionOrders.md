<!-- app_route: /production-orders -->
<!-- app_label: Production orders -->
<!-- canonical_source_url: https://github.com/Tom-PIT/Connected.Docs/blob/main/en/Domains/Production/Documents/ProductionOrders.md -->
<!-- canonical_source_title: Production orders -->

# Production orders

Production orders define the work required to manufacture products according to a selected process and version.  
They move through the life cycle **Draft → Pending → Active → Closed**, and can include multiple operations, resources, inputs, outputs, and quality checks based on the assigned process.

> [!NOTE]
> **Prerequisites**  
> 
>Before creating a new production order, ensure that the following are configured:
> - At least one **[Process](../Management/Processes.md)** with an active **version**
> - Assigned **[Organization units](../Management/OrganizationUnits.md)** for production  
> - Optional supporting definitions such as **[resources](../Management/Resources.md)**, **[downtime tags](../Management/DowntimeTags.md)**, **[loss classification tags](../Management/LossClassificationTags.md)** and **[checklists](../Management/Checklists.md)** depending on your workflow (recommended)


> [!TIP]
> For a full demonstration, see the **[Production order](https://www.youtube.com/watch?v=q4UjiYpWph8)** video tutorial.

To access production orders, go to **Production / Production orders** in the [**navigation**](../../../Common/UI/Navigation.md).

## List of production orders

The Production orders page displays all orders grouped by status. Use the filters on the left to refine the list.

![Production Orders List](../Images/ProductionOrdersList.png "Production Orders List")

### Filters

- **Production order dates** – Filter orders by date range.  
- **View** – Shows orders by life cycle stage:  
  -  **Draft** — Editable order created through the wizard
  -  **Pending** — Finalized order, ready to activate
  -  **Active** — Being executed; visible in **[Execution](Execution.md)**
  -  **Closed** — Finished; results recorded 
- **Project** – Filter production orders linked to a specific project.

The search bar at the top allows filtering by production order code or material name.

## Create a production order

To create a production order, click on the [**action button**](../../../Common/UI/ActionButton.md) and follow the [guided three-step wizard](ProductionOrderCreate.md).

## Draft production orders

A newly created order appears with status **Draft**.

Drafts allow editing of:

- Code
- Quantity  
- Batch 
- Best before date
- Notes  
- Process 
- Version

![Draft](../Images/ProductionOrdersDraft.png "Draft production order")

### Publish a draft production order

To move the draft to **Pending**, the **Organization unit** must be selected, if not already predefined in the [operation](../Management/Operations.md).

![Organization Unit](../Images/ProductionOrdersOrganizationUnits.png "Organization Unit Selection")

Click **Publish** when ready.

## Edit a production order

Draft orders can be edited freely, while Active and Closed orders have limited editability. To edit an order:

1. Click on the desired order from the list to open its details.
2. Make the necessary changes.
3. Click **Save** to apply the changes or **Cancel** to discard them.

## Pending production orders

A **Pending** order is fully prepared and waiting to be activated. No production execution can begin yet.

From the Pending state, you can:

- Review operations  
- Add attachments  
- Add notes  
- Manage linked documents

When the order is ready for production, click **Activate**.


## Linked documents

You may attach other documents that relate to the production order, such as:

- [**Projects**](../../Projects/Domain/ProjectsDomain.md)  
- [**Supply orders**](../../Supply/Documents/SupplyOrders.md)
- [**Inquiries**](../../Supply/Documents/Inquiries.md)
- Other production orders (linked or input-producing)  


![Linked documents](../Images/ProductionOrdersLinkedDocuments.png "Linked documents")

Production orders also display any linked documents created during the order's lifecycle, such as cost and consumption reports.

![Production Orders Linked Documents Docs](../Images/ProductionOrdersLinkedDocumentsDocs.png)

## Active production orders

When activated, the order becomes **Active** and is ready for execution on the shop floor.

![Active](../Images/ProductionOrdersPendingV3.png "Active production order")

Production workers can now execute operations through the **Execution** module. See **[Execution](Execution.md)** for more details.

The **Process** section displays all planned operations, inputs, resources, outputs, expenses, and [quality checks](ProductionOrderQuality.md) for the chosen version and its operations. 

![Process View](../Images/ProductionOrdersProcessV3.png "Process overview")

Clicking on an operation opens the detailed view, where workers can record execution data, such as:

- **Produced**
- **Consumed**
- **Loss**
- **Effort**

![Production Order Operation Edit](../Images/ProductionOrderOperationEdit.png "Production Order Operation Edit")

Each section has an **Add entry** button to record execution details. For example, in the **Produced** section, you can log the material produced, the quantity produced, and the production times.

### Add or edit an expense

![Production Orders Process Expenses](../Images/ProductionOrdersProcessExpenses.png "Production order expenses")

In order to calculate more accurately the actual costs of a produced item, planned expenses can be added or edited on the **Expenses** tab: 

- To edit a planned expense, click on the expense in the list to open its details, make the necessary changes, and click **Save**.
- To add a new expense:
    1. Click on the **Add planned expense** button.
    2. Select the operation expense and the cost.
    3. Click add to save the new expense.

> [!IMPORTANT]
> The expense cost is **per item**. For example, if the cost is $2 and the quantity produced is 10, the total expense will be $20.

To record the actual expense cost:

1. Click on the arrow next to the expense on the list to open its details.
1. Click on **Add actual expense**.
2. Enter the actual cost of the expense.
3. Click **Add**.

![Production Orders Process Expenses](../Images/ProductionOrdersProcessExpensesDetail.png "Production order expenses add actual")

Actual amounts can be edited or deleted if necessary. To edit or delete an actual expense click on the amount to open its details, make the necessary changes, and click **Save** or **Delete**.

![Production Orders Process Expenses Actual](../Images/ProductionOrdersProcessExpensesActual.png)

## Closed production orders

Once production is completed and all operations have been executed, the order is set to **Closed**, appears in the list under the **Closed** status.

![Closed Production Orders List](../Images/ProductionOrdersClosedList.png "Closed Production Orders List")

The list also displays the cost per unit produced and an arrow indicating whether the cost has increased or decreased compared to the previous closed order for the same material.

Closed orders:

- Cannot be modified  
- Provide a complete production history  
- Show produced vs. planned quantities, losses, and outputs 

![Production Order Closed Detail](../Images/ProductionOrderClosedDetail.png)

The **Process** section displays the full execution history. Click on the different tabs to see the details, for example, inputs used during production:

![Production Orders Closed Inputs](../Images/ProductionOrdersClosedInputs.png)

Closed production orders offer additional options in the action menu:

- Printing
- Exporting (PDF)
- Revert to active - allows reopening the order for corrections if needed

![Production Order Closed Menu](../Images/ProductionOrderClosedMenu.png)

### Revert a closed production order to active

If modifications are necessary after closing, you can revert the order back to **Active**:

1. Open the closed production order
1. Select **Revert to active** from the action menu
1. Click **Reactivate** on the desired process

![Production Orders Reactivate](../Images/ProductionOrdersReactivate.png)

## Delete a production order

A production order can be deleted only when in **Draft or Pending states** and if it is not referenced by other documents.  

To delete a production order:

1. Select a draft or pending order from the list to open its details.
2. Click **Delete**. A confirmation dialog will appear. If confirmed, the order will be permanently removed from the system.

> [!NOTE]
>
> Closed orders cannot be deleted, but they can be reverted to active for modifications if necessary.
