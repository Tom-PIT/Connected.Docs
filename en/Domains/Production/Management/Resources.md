# Resources

Resources are used to define and manage all **human** and **non-human** assets available across **Production** and **Maintenance**. These include workers, technicians, machines, workstations, tools, test equipment, and teams. Resources created here can later be assigned to **[operations](Operations.md)**, **[processes](Processes.md)**, and documents such as **[production orders](../Documents/ProductionOrders.md)** and **[maintenance orders](../../Maintenance/Documents/MaintenanceOrders.md)**.

To access this page, navigate to the **Production** or **Maintenance** domains, then go to **Management / Resources** in the [**navigation**](../../../Common/UI/Navigation.md).

> [!TIP]
> For a full demonstration, see the **[Resources](https://www.youtube.com/watch?v=Kr5WkGMQj48)** video tutorial.

## Schema

The following table lists all fields used across **Human**, **Non-human**, and **Team** resources.

| Field | Description | H | NH | T |
|-------|-------------|:-:|:--:|:-:|
| **User** | Links the resource to a system user (mandatory for human resources). | ✔️ |  |  |
| **Name** | Name of the resource or team (mandatory). | ✔️ | ✔️ | ✔️ |
| **Folder** | Folder where the resource or team resides. | ✔️ | ✔️ | ✔️ |
| **Tags** | Labels for classification or filtering (e.g., Production, Maintenance). | ✔️ | ✔️ | ✔️ |
| **Teams** | Teams to which a human resource belongs. | ✔️ |  |  |
| **Resource parent** | Parent resource for hierarchical grouping. |  | ✔️ |  |
| **External Key** | External identifier for integration. |  | ✔️ |  |
| **Members** | Human resources included in the team. |  |  | ✔️ |
| **Enabled** | Indicates whether the resource/team is active. | ✔️ | ✔️ | ✔️ |

## Toolbar actions

![Resources toolbar](../Images/ResourcesListAddNewButtons.png "Resources toolbar")

- **Add folder** – Creates a folder to organize resources.
- **Add human resource** – Creates an individual human resource (e.g., operator, maintenance technician).
- **Add non-human resource** – Creates a machine, workstation, equipment, or tool.
- **Add team** – Creates a human resource group.

## Structure

Resources are displayed in a **tree view**. Items may or may not be inside folders:

Examples:
- **Assembly stations** (folder)  
  • Assembly station 1 (non-human)  
  • Assembly station 2 (non-human)
- **Vehicles** (folder)  
  • Personal vehicle - Janez Novak (non-human)  
- **Janez Novak** (human resource)
- **Peter Mlakar** (human resource)
- **Spray booth + spray guns** (non-human resource not in any folder)
- **Calibration tools** (non-human)  
- **Maintenance team A** (team)

![Resources Detail](../Images/ResourcesDetailV2.png "Resources list detail")

> [!NOTE]
> Folders are optional; standalone resources can exist without belonging to one.

## List view

Selecting an item shows its details and the Edit form.

![Resources list](../Images/ResourcesListEditV2.png "Resources list")

## Creating a new resource

1. Choose from the toolbar:
   - **Add folder**
   - **Add human resource**
   - **Add non-human resource**
   - **Add team**
2. Complete the fields described in the appropriate schema section.
3. Click **Add** or **Save** to confirm.

> [!IMPORTANT]
> To use vehicles in related documents (for example, [travel orders](../../Resources/Documents/TravelOrders.md)), add them as **non-human resources** and tag them with **`vehicle`**. Only non-human resources with this tag are recognized as vehicles by the system.
>
> ![Travel Orders Vehicles](../Images/ResourcesVehicles.png)


## Editing a resource

1. Click any resource in the tree.
2. Modify its fields (e.g., Name, Folder, Parent, Tags, Teams, or External Key).
3. Click **Save**.

## Deletion

A resource can be deleted from the edit page only if it is **not referenced** in operations, processes, or documents (e.g., production or maintenance orders).

> [!WARNING]
Deleting an item removes it permanently.

