<!-- app_route: /management/resources/worksheet-types -->
<!-- app_label: Availability plan types -->
<!-- canonical_source_url: https://github.com/Tom-PIT/Connected.Docs/blob/main/en/Domains/Resources/Management/AvailabilityPlanTypes.md -->
<!-- canonical_source_title: Availability plan types -->

# Availability plan types

Availability plan types define the **categories of availability and absence** that can be assigned to resources. They are used as a foundation for [availability plans](../Views/AvailabilityPlans.md).

To access **Availability plan types**, go to **Resources / Management / Availability plan types** in the [navigation](../../../Common/UI/Navigation.md).

## Schema

| Field | Description |
|------|-------------|
| **Type** | Defines the general category of the availability plan. Typical values include **Work**, **Leave**, **Personal holiday**, and **Sick leave**. |
| **Name** | Descriptive name displayed to users when selecting an availability type (for example: *Child sickness*, *Work accident*). |
| **Enabled** | Indicates whether the availability plan type is active and selectable in other parts of the system. |

## List view

The list view shows all configured availability plan types.

![Availability plan types list](../Images/AvailabilityPlanTypes1.png "Availability plan types list")

For each entry, the following information is visible:

- **Name**
- **Type**
- **Status indicator**

Clicking an item in the list opens its **edit screen**.

## Actions

### Create a new availability plan type

Click the [action button](../../../Common/UI/ActionButton.md) to create a new entry.

![Create availability plan type](../Images/AvailabilityPlanTypesNew.png "Create availability plan type")

Changes are applied immediately after saving and affect all screens where availability types are selectable.

### Edit availability plan types

Click on an item on the list to edit a plan type. The edit screen allows modifying the **Name**, **Type**, and **Enabled** status.

Click **Save** to apply changes or **Cancel** to discard them.

## Delete an availability plan type

Click on a plan type to open the edit screen. From there, you can delete the availability plan type.

After confirming the deletion, the availability plan type is removed from the system and can no longer be assigned to availability plans.

If an availability plan type is already used in availability plans or time records, deletion may be restricted depending on system configuration.