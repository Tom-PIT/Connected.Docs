<!-- app_route: /quality/views/active-checklists -->
<!-- app_label: Active checklists -->
<!-- canonical_source_url: https://tom-pit.github.io/Connected.Docs/en/Domains/Quality/Views/ActiveChecklists/ -->
<!-- canonical_source_title: Active checklists -->

# Active checklists

The **Active checklists** view lists all checklist executions that are currently in progress. Operators use it to monitor and complete ongoing quality or maintenance tasks. When a checklist is completed, it no longer appears in this view and moves to the Completed checklists view.

To access this view, navigate to **Quality / Views / Active checklists** in the [navigation](../../../Common/UI/Navigation.md).

### Overview

This view provides a real-time list of all checklists that are currently active (not completed). It is intended for shop-floor personnel, maintenance staff, and supervisors to quickly identify which checklists require attention.

## Schema

| Field | Description |
|-------|-------------|
| **Checklist** | Code and name of the checklist being executed; shows current phase via status chip (e.g., On start). |
| **Document** | Source document type and code: [Production order](../../Production/Documents/ProductionOrders.md) or [Maintenance order](../../Maintenance/Documents/MaintenanceOrders.md). |
| **Operation** | Operation code and name attached to the checklist execution. |
| **Product** | Product name and code related to the operation (production contexts). |
| [**Organization unit**](../../Production/Management/OrganizationUnits.md) | Unit responsible for execution (e.g., Assembly, Electrical maintenance). |
| **Equipment** | Appears for maintenance-linked checklists; equipment being maintained/checked. |


## Active Checklists list

![Active Checklists List](../Images/ActiveChecklistsList.png "Active Checklists List")

At the top of the page, two indicators summarize the current state:
- **Active checklists** — total number of active checklist executions.
- **My checklists** — number of active checklist executions assigned to the currently logged-in user.


## Filters

Use filters to narrow down the list:
- **Checklist dates** — filter by start date, due date, or activity date range.
- **Document type** — limit results to a specific source document:
  - [Maintenance order](../../Maintenance/Documents/MaintenanceOrders.md)
  - [Production order](../../Production/Documents/ProductionOrders.md)

## Row interactions

- Click the **Checklist code** to review the checklist execution in the [checklist review](#review-a-checklist) page.
- Click the **Document code** to open the related document:
  - [Production order](../../Production/Documents/ProductionOrders.md) when the document type is Production order
  - [Maintenance order](../../Maintenance/Documents/MaintenanceOrders.md) when the document type is Maintenance order
- Click the **Operation code** to open the [Production Execution](../../Production/Documents/Execution.md) page focused on the current execution.

## Review a checklist 

The checklist review page shows the current checklist **code** and **name**, followed by an overview of the checklist's checkpoints.

![Active Checklists Checklist Edit](../Images/ActiveChecklistsChecklistEdit.png "Checklist edit")

A typical layout includes the list of checkpoints with required inputs (confirmations, measurements, tolerances).

## Menu

The menu provides additional actions available on this page.

Available actions:

- **Print**
- **Export to PDF or CSV**

For details about menu actions, see [**Menu actions**](../../../Common/Concepts/MenuActions.md).