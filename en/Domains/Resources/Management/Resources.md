<!-- app_route: /management/resources -->
<!-- app_label: Resources -->
<!-- canonical_source_url: https://tom-pit.github.io/Connected.Docs/en/Domains/Production/Management/Resources/ -->
<!-- canonical_source_title: Resources -->

# Resources

Resources are used to define and manage all **human** and **non-human** assets available across **Production** and **Maintenance**. These include workers, technicians, machines, workstations, tools, test equipment, and teams. Resources created here can later be assigned to **[operations](../../Production/Management/Operations.md)**, **[processes](../../Production/Management/Processes.md)**, and documents such as **[production orders](../../Production/Documents/ProductionOrders.md)** and **[maintenance orders](../../Maintenance/Documents/MaintenanceOrders.md)**.

To access this page, navigate to the **Production**, **Resources**, or **Maintenance** domains, then go to **Management / Resources** in the [navigation](../../../Common/UI/Navigation.md).

> [!TIP]
> For a full demonstration, see the **[Resources](https://www.youtube.com/watch?v=Kr5WkGMQj48)** video tutorial.

## Schema

<details open markdown="1">
<summary><strong>General</strong></summary>

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
| **Article** | Article related to the specific non-human resource. |  | ✔️ |  |
| **Enabled** | Indicates whether the resource/team is active. | ✔️ | ✔️ | ✔️ |

</details>

<details markdown="1">
<summary><strong>Basic details</strong></summary>

This table lists the fields used in the **Basic details** section of the resource edit form for human resources.

| Field | Description | 
|-------|-------------|
| **First name** | First name of the resource. |
| **Last name** | Last name of the resource. |
| **Country** | Country of residence. | 
| **Postal code** | Postal code of the resource's location. |
| **Street address** | Street address of the resource's location. |
| **Date of birth** | Date of birth of the resource. |
| **Tax number** | Tax number of the resource (mandatory field to create tax-compliant [retail issued invoices](../../Sales/Documents/RetailIssuedInvoices.md). |

</details>

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

![Resources list](../Images/ResourcesListEditV3.png "Resources list")

## Create a new resource

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

> [!TIP]
> Non-human resources can be linked to a **[Knowledge base article](../../Knowledge/KnowledgeBase/KnowledgeBase.md)** using the **Article** field.
>
> This can be used to provide:
>
> - Operating instructions
> - Maintenance procedures
> - Safety guidelines
> - User manuals
> - Technical documentation

## Edit a resource

1. Click any resource in the tree.
2. Modify its fields (e.g., Name, Folder, Parent, Tags, Teams, or External Key).
3. Click **Save**.

## Delete a resource

Click any resource in the tree to open the Edit page and select **Delete**. After confirming the deletion, the resource is permanently removed from the system.

A resource can be deleted from the edit page only if it is **not referenced** in operations, processes, or documents (e.g., production or maintenance orders).


