# Sick leave types

Sick leave types define the **reasons for sickness absence** that employees can select when creating a sick leave entry. They standardize sick leave reporting and ensure consistent categorization across time logs, attendance tracking, and leave management.

To access **Sick leave types**, go to **Resources / Management / Sick leave types** in the [**navigation**](../../Common/UI/Navigation.md).

## Schema

| Field | Description |
|------|------------|
| **Name** | The name of the sick leave reason shown to users when reporting sick leave (for example: *Accident at work*, *Flu*, *Child sickness*). |

## List view

The list displays all defined sick leave types.

- Each row represents one sick leave reason  
- Clicking a row opens the edit view  
- The **action button** allows creating a new sick leave type  

![Sick Leave Types List](../Images/SickLeaveTypesList.png "Sick Leave Types List")

This list is typically maintained by administrators or HR managers.

## Creating and editing sick leave types


1. 1. Click the [**action button**](../../Common/UI/ActionButton.md) to create a new entry.
1. Enter a **Name** and set the **Status** (enabled or disabled) for the sick leave type.2. Set   
3. Click **Save** to make the type available system-wide. 

Changes take effect immediately and apply wherever sick leave is recorded.

## Deletion

Sick leave types can be deleted from the **edit view**. To delete a sick leave type click **Delete** and confirm the action.

> [!NOTE]
>Deletion may be restricted if the type is referenced by existing records (e.g., time logs, attendance, or leave entries). In such cases, disable the type instead of deleting it to preserve historical consistency.
