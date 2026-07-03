<!-- app_route: /management/contacts/institutional-sectors -->
<!-- app_label: Institutional sectors -->
<!-- canonical_source_url: https://tom-pit.github.io/Connected.Docs/en/Domains/Customers/Management/InstitutionalSectors/ -->
<!-- canonical_source_title: Institutional sectors -->

# Institutional sectors

## Introduction

Institutional sectors are a **code list** used to classify customers according to their organizational or institutional nature (for example public administration, education, healthcare, or private companies). These sectors can later be referenced when defining or managing customer records, helping with segmentation, reporting, and filtering in the [**Business directory**](../../../Common/Management/BusinessDirectory.md) code list.

To access this screen, go to **Customers / Management / Institutional sectors** in the [navigation](../../../Common/UI/Navigation.md).

## Schema

| Field | Description |
|------|------------|
| [**Code**](../../../Common/UI/DocumentCodes.md) | Short, unique identifier for the institutional sector. |
| **Name** | Descriptive name of the institutional sector. |

## Institutional sectors list

The list view displays all defined institutional sectors.

Features of the list view:
- Displays the **Code** and **Name** of each sector
- Supports **search** for quick filtering
- Clicking a row opens the sector in edit mode

![Institutional sectors list](../Images/InstitutionalSectorsList.png)

## Actions

The following actions are available via the [action button](../../../Common/UI/ActionButton.md):
- **New** – Create a new institutional sector.
- **Import** – Bulk import institutional sectors from a CSV spreadsheet file.

### Add a new institutional sector

1. Click the [action button](../../../Common/UI/ActionButton.md) and select **New**.
2. Enter:
   - **Code** – a short identifier (e.g. `NPO`)
   - **Name** – the full sector name (e.g. *Non-profit organization*)
3. Click **ADD** to save.

![Add institutional sector](../Images/InstitutionalSectorsNew.png)


### Edit an institutional sector

- Click an existing sector from the list.
- Update the **Code** or **Name** as needed.
- Save the changes.

### Delete an institutional sector

- Open the sector from the list.
- Use the **Delete** action from the edit view.
- Confirm the deletion.

> [!NOTE]
> Deleted sectors are no longer available for selection when assigning institutional sectors to customers.