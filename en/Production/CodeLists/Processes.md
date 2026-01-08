# Processes

Processes define the structured steps used across **Production** and **Maintenance** to transform inputs into outputs (finished, intermediate, or serviced equipment states). They form the backbone of operational workflows and are used in **documents** to calculate materials, resources, workloads, and execution steps:
- **[Production orders](../Documents/ProductionOrders.md)** for production workflows
- **[Maintenance orders](../../Maintenance/Documents/MaintenanceOrders.md)** for maintenance workflows

This page allows you to create and manage processes, their versions, and their operational structure.

A process may contain one or more **versions**, for example, different versions for different product sizes or maintenance variants. Each version contains a sequence of [**operations**](Operations.md), which define inputs, resources (human and non?human), outputs, and quality requirements.

To access this page, go to **Production / Management / Processes** in the [navigation](../../Common/UI/Navigation.md). Processes are shared and can be tagged for Production or Maintenance usage.

> [!TIP]
> For a full demonstration, see the **[Processes and versions](https://www.youtube.com/watch?v=4svpFCm7rkk)** video tutorial.

## Schema

### Process fields

| Field | Description |
|-------|-------------|
| [**Code**](../../Common/UI/DocumentCodes.md) | Automatically generated process code (read-only). |
| **Name** | The name of the process (mandatory). |
| **Description** | A short explanation of what the process accomplishes. |
| **Tags** | Tags used to group or categorize the process (e.g., **Production**, **Maintenance**). |

### Version fields

| Field | Description |
|-------|-------------|
| [**Code**](../../Common/UI/DocumentCodes.md) | Automatically generated version code (read-only). |
| **Name** | Version name (mandatory). |
| **Description** | Optional additional details about the version. |

## List view

The Processes list displays all configured processes. Each row includes the process code, name, description, and tags. Use the **Search** bar to find processes by name or code.

![Processes list](../Images/ProcessesList1.png "Processes list")

The left-side panel provides filters for:

- **View**: Enabled / Disabled  
- **Process tags** (e.g., Production, Maintenance)  
- **Input type**  
- **Input**  
- **Output type**  
- **Outputs**

## Creating a new process

1. Click the [**action button**](../../Common/UI/ActionButton.md) and select **New** or **Copy existing**.
2. Fill in the following fields:  
   - **Name** – Required  
   - **Description** – Optional  
   - **Tags** – Optional, but **required** to link the process to specific areas. For example:  
     - Add the **Production** tag to make the process available when creating a new [**Production order**](../Documents/ProductionOrders.md).  
     - Add the **Maintenance** tag to make the process available when creating a new [**Maintenance order**](../../Maintenance/Documents/MaintenanceOrders.md).

    ![New process](../Images/ProcessesNew1.png "New process")

3. Click **Add** to create the new process.

> [!IMPORTANT]
> Tags control where the process can be used. If you do not add a relevant tag (e.g., **Production** or **Maintenance**), the process will not be available when creating documents in that area (e.g., a [**Production order**](../Documents/ProductionOrders.md) or a [**Maintenance order**](../../Maintenance/Documents/MaintenanceOrders.md)).

## Editing a process

To edit an existing process:

1. Select a process from the list.
2. Update the **Name**, **Description**, or **Tags** as needed.
3. Click **Save** to apply changes.

## Versions

Each process may include multiple **versions**, allowing you to update or improve a workflow over time while keeping older versions intact.

![Versions button](../Images/ProcessesVersionsButton.png "Versions button")


From the Versions screen, you can:

- Add a new version  
- Edit or disable a version  
- Lock a version  
- Open a version to work with its operations and configuration screens  

![Versions list](../Images/ProcessesVersionsList.png "Versions list")

A version includes:

- Basic version information  
- A list of **operations**  
- Enable/disable controls  
- The option to **lock** a version to prevent edits  


## Operations inside a version

A version contains a sequence of **[operations](Operations.md)**, each representing a step of the process. Operations may include, for example, cutting, painting, assembly, packaging (production), or inspection, lubrication, calibration (maintenance).

To access the list operations of a version click on the **[Operations](Operations.md)** button:

![Operations button](../Images/ProcessesVersionsOperationsButton1.png "Operations button")

Each operation includes:

- **[Inputs](Inputs.md)** – Materials or items consumed by the operation  
- **[Human resources](HumanResources.md)** – Workers or job positions required  
- **[Non-human resources](NonHumanResources.md)** – Machines or equipment  
- **[Outputs](Outputs.md)** – Materials or items produced by the operation  
- **[Quality](QualityChecklists.md)** – Assigned checklists and quality requirements

![Operations detail](../Images/ProcessesOperationsListDetail.png)

## Quality

The **[Quality](QualityChecklists.md)** button opens the configuration page for the selected process version or operation. This page allows you to assign one or more [**Checklists**](Checklists.md), which define the quality-control steps required during execution.

![Processes Versions Quality Button](../Images/ProcessesVersionsQualityButton.png "Processes Versions Quality Button")

## Deletion

A process can be deleted only if it is **not used by documents** (e.g., production or maintenance orders) and **not referenced by other processes**.  
If allowed, the **Delete** action is available in the Edit page.

---