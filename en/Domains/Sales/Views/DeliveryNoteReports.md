# Delivery note reports

The **Delivery note reports** view provides a consolidated overview of delivered items, grouped by customer. It is designed for analysis and reporting purposes and does **not** create or modify documents.

To access this page, go to **Sales / Views / Delivery note reports** in the [**navigation**](../../../Common/UI/Navigation.md).

### Purpose of this view

Delivery note reports help you:

- Analyze delivered quantities and values per customer
- Review delivery history for specific assets
- Understand average prices and total delivered costs
- Quickly drill down into delivery performance without opening individual documents

This view is **read-only** and reflects data from committed [**Delivery notes**](../Documents/DeliveryNotes.md).

## Layout and structure

The report is organized hierarchically:

- **Customers** act as top-level groups
- Under each customer, delivered **assets** are listed
- Each asset row aggregates data from all relevant [**Delivery notes**](../Documents/DeliveryNotes.md)

For each asset, the report shows:
- Delivered **quantity**
- **Average price**
- **Total cost**, including net value and tax

![Delivery note reports list](../Images/DeliveryNotesReportsList.png "Delivery note reports")

## Filters

The filters on the left allow you to narrow down the report:

- **Delivery date** — Filter deliveries within a specific date range.
- **Customer** — Show delivery data for one or more selected customers.
- **Asset** — Show delivery data for one or more selected customers.

Filters can be combined to focus on very specific delivery scenarios.

## Interpretation of values

- **Quantity** represents the total delivered quantity for the asset
- **Average price** is calculated across all identical assets delivered to the customer 
- **Total cost** shows:
  - Net price
  - Tax amount
  - Final total value

All amounts are calculated based on the [**Delivery notes**](../Documents/DeliveryNotes.md) included by the selected filters.

> [!NOTE]
> - Only **committed delivery notes** are included in this report.
>- Draft or reversed delivery notes are not shown.
> - The view is intended for **analysis only** and does not support actions such as editing, reversing, or creating documents.

For detailed document-level information, open the related [delivery notes](../Documents/DeliveryNotes.md) directly from the **Sales / Documents / Delivery notes** section.
