<!-- app_route: /management/resources/availabilty-plans -->
<!-- app_label: Availability plans -->
<!-- canonical_source_url: https://github.com/Tom-PIT/Connected.Docs/blob/main/en/Domains/Resources/Views/AvailabilityPlans.md -->
<!-- canonical_source_title: Availability plans -->

# Availability plans

Availability plans provide a calendar-based overview of when resources are available or unavailable for work. They are typically used to record planned absences, training, or other non-working periods that affect resource availability.

To access this view, go to **Resources / Views / Availability plans** in the [navigation](../../../Common/UI/Navigation.md).

## Schema

| Field | Description |
|------|-------------|
| **Resources** | Resource(s) for which the availability plan is created (e.g., a user or team). |
| **Execution pattern** | Defines whether the plan occurs **Once** or follows a repeating pattern. |
| **Date** | Date of the availability plan (anchor date for execution pattern). |
| **All day** | Marks the plan as covering the entire day. |
| **Type** | Availability type (e.g., Training, Absence, Other). |
| **Start** | Start time of the availability period (if not all-day). |
| **End** | End time of the availability period (if not all-day). |

## Calendar view

The main screen displays a calendar in **Day**, **Week**, or **Month** view. On the left side, select one or more **resources** to display their plans in the calendar.

![Availability plans calendar](../Images/AvailabilityPlansCalendar.png "Availability plans calendar")

Each entry represents a planned availability or unavailability period for a resource.

## Actions

Click the [action button](../../../Common/UI/ActionButton.md) to create a new availability plan.

When creating or editing a plan, the fields described in the [**Schema**](#schema) section above are available.

### Add an availability plan

1. Click the **+** action button.
2. Select **Resources** and **Type**.
3. Set **Execution pattern**, **Date**, **All day**, **Start**, **End** as needed.
4. Click **Add** to save.

![Add availability plan](../Images/AvailabilityPlansNew.png "Add availability plan")

### Edit an availability plan

Click a calendar entry to open the edit form. Adjust **Date**, **time range**, **Type**, or **Execution pattern** and save.

### Delete an availability plan

Availability plans can be deleted from the **edit dialog**.

To delete a plan:
1. Double-click the plan event in the calendar to open the edit screen.
2. Click **Delete**.
3. Confirm the deletion.

If the plan uses a **Multiple** execution pattern, an additional confirmation is shown:
- **“Do you wish to remove all future entries as well?”**

After this step, a final confirmation dialog is displayed:
- **“Are you sure you want to delete availability plan detail?”**

Once confirmed, the plan is permanently removed.
