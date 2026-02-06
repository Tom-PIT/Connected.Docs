# Checklists

Checklists are used across **Production** and **Maintenance** to define structured lists that support operational procedures and quality-control activities. This page allows users to create and categorize checklists used on the shop floor and in maintenance workflows.

The individual steps inside a checklist — called **[Check points](Checkpoints.md)** — are managed separately.

To access this page, navigate to the **Production** or **Maintenance** domains, then go to **Management / Checklists** in the [**navigation**](../../../Common/UI/Navigation.md).

> [!TIP]
> For a full demonstration, see the **[Quality checklists](https://www.youtube.com/watch?v=EB7WktBCFC4)** video tutorial.

## Schema

| Field | Description |
|-------|-------------|
| [**Code**](../../../Common/UI/DocumentCodes.md) | Automatically generated checklist code (read-only). |
| **Name** | The name of the checklist (mandatory). |
| **Description** | A short explanation of the checklist’s purpose. |
| **Tags** | Optional tags used to categorize or group checklists (e.g., Production, Maintenance). |
| **Execution roles** | Optional roles defining which job positions may execute the checklist (e.g., operators, maintenance technicians). |

## List view

The list displays all checklists defined in the system. Each row shows the checklist code, name, and description. Use the **Search** bar to filter by name or code.

![Checklists list](../Images/ChecklistsList.png "Checklists list")

Each checklist entry includes a **Check points** button used to manage the steps within that checklist.

## Filters

The list includes a **Tags** filter on the left, allowing you to show only checklists associated with specific tags.

## Creating a new checklist

1. Click the [**action button**](../../../Common/UI/ActionButton.md) in the bottom-right corner.
2. Fill in the following fields:

    ![Add checklist](../Images/ChecklistsNew.png "Add checklist")

    - **Name** – The name of the checklist  
    - **Description** – Optional description  
    - **Tags** – Select one or more tags to categorize the checklist (e.g., Production, Maintenance)  
    - **Execution roles** – Select which job positions can execute this checklist (e.g., operators, maintenance technicians)

3. Click **Add** to create the checklist.

## Managing check points

Each checklist may contain one or more **check points**, which define the specific steps or validations required during its execution.

To manage check points:

1. Open the **Checklists** page.
2. Locate the checklist and click the **Check points** button.

    ![Check points navigation](../Images/CheckpointButton.png)

This opens the **Check points** page, where you can add, edit, delete, and reorder check points.

For detailed information, see **[Check points](Checkpoints.md)**.

## Editing a checklist

To edit an existing checklist:

1. Click on a checklist entry in the list.
2. Modify the **Name**, **Description**, **Tags**, or **Execution roles** as needed.
3. Click **Save**.

## Deletion

A checklist can be deleted freely from its Edit page by clicking **Delete**. If confirmed, the checklist is permanently removed from the system.

