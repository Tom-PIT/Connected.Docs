<!-- app_route: /management/common-types/cost-centers -->
<!-- app_label: Cost centers -->
<!-- canonical_source_url: https://github.com/Tom-PIT/Connected.Docs/blob/main/en/Common/Management/CostCenters.md -->
<!-- canonical_source_title: Cost centers -->

# Cost centers

The **Cost centers** code list identifies departments or functions that create expenses but not revenue, such as HR or support teams. Even though these units don’t generate profit, they play a vital role in keeping the company running. By defining cost centers and assigning costs to them, the system provides transparency into how expenses are distributed across the company.

This page is available in the **Sales** and **Supply** domains, to access it go to **Management / Cost centers** in the [**navigation**](../../Common/UI/Navigation.md).

## Schema

| Field | Description |
|-------|-------------|
| **Code** | Short internal identifier for the cost center (mandatory). For example, **HR** for Human Resources. |
| **Name** | Full descriptive name of the cost center (mandatory). |

## Management

### List view

The list view displays all registered cost centers along with their **name** and **code**.

![Cost centers](../Images/CostCenters.png "Cost centers list")

You can use the **Search** bar to filter cost centers by name or code.

## Actions

### Add new cost center

Click on the [**action button**](../UI/ActionButton.md) to open the creation form and add a new cost center.

![Add new cost center](../Images/CostCentersNew.png "Add cost center")

### Editing a cost center

Click any entry in the list to open its edit screen, where you can adjust the **code** or **name**.

### Deletion

Click **Delete** on the edit screen to open a confirmation dialog:

**Are you sure you want to delete this record?**

If confirmed, the record is permanently removed; otherwise, the system keeps it unchanged.

> [!NOTE]  
> A cost center can be deleted only if it is not referenced by documents or other system entities.

