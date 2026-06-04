<!-- app_route: /management/resources/effort-types -->
<!-- app_label: Effort types -->
<!-- canonical_source_url: https://github.com/Tom-PIT/Connected.Docs/blob/main/en/Domains/Resources/Management/EffortTypes.md -->
<!-- canonical_source_title: Effort types -->

# Effort types

Effort types define **categories of work** that can be selected when recording effort on tasks, production executions, or maintenance activities. They help standardize time reporting and improve later analysis of how time is spent.

To access **Effort types**, go to **Resources / Management / Effort types** in the  
[navigation](../../../Common/UI/Navigation.md).

![Effort types list](../Images/EffortTypesList.png "Effort types list")

## Schema

| Field | Description |
|------|------------|
| **Effort type name** | Name of the effort type as shown to users when recording effort (for example: *Assembling*, *Painting*, *Maintenance work*). |
| **Description** | Optional explanation of what the effort type represents. This is mainly for internal clarification and administration. |
| **Enabled** | Determines whether the effort type is active and available for selection in effort entry forms. |

## Management

### List view

The list shows all defined effort types in the system.

- Enabled effort types are available for selection when recording effort.
- Disabled effort types remain stored but cannot be selected.
- Clicking an effort type opens it in edit mode.

![Effort types list](../Images/EffortTypesList.png "Effort types list")

## Actions

### Create a new effort type

Click the [action button](../../../Common/UI/ActionButton.md) to create a new effort type.

When creating or editing an effort type, you can:

- Set the **name** shown to users
- Add an optional **description**
- Enable or disable the effort type

![Add effort type](../Images/EffortTypesNew.png "Add effort type")

### Edit an effort type

Click on an item on the list to edit an existing effort type. You can modify the name, description, and enabled status.

Changes are saved by clicking the **Save** button. If you want to discard changes, click **Cancel**.

### Usage in effort recording

Effort types are used when users record effort on tasks and executions.

When adding effort, users select an effort type from a dropdown list populated from this configuration.

![Effort types in effort entry](../Images/EffortTypesInDropdown.png "Effort types used in effort entry")

This ensures that recorded time is consistently categorized across the system, supporting accurate reporting and analysis.

### Delete an effort type

Click on an item on the list to enter its edit screen, then click the **Delete** button to remove an effort type.

> [!NOTE]
> Deleted effort types are no longer available for new time entries but do not affect historical data.