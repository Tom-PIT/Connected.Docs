<!-- app_route: /supply/views/supply-orders-reports -->
<!-- app_label: Supply orders report -->
<!-- canonical_source_url: https://tom-pit.github.io/Connected.Docs/en/Domains/Supply/Views/SupplyOrdersReport/ -->
<!-- canonical_source_title: Supply orders report -->

# Supply orders report

The **Supply orders report** view provides a consolidated overview of ordered materials and services, grouped by supplier. It is designed for analysis and reporting purposes and does **not** create or modify documents.

To access this page, go to **Supply / Views / Supply orders report**.

## Purpose of this view

Supply orders reports help you:

- Analyze ordered quantities and values per supplier
- Review order history for specific materials
- Understand average prices and total ordered costs
- Quickly drill down into procurement performance without opening individual documents

This view is **read-only** and reflects data from committed [**Supply orders**](../Documents/SupplyOrders.md).

## Layout and structure

The report is organized hierarchically:

- **Suppliers** act as top-level groups
- Under each supplier, ordered **materials** are listed
- Each material row aggregates data from all relevant [**Supply orders**](../Documents/SupplyOrders.md)

For each material, the report shows:
- Ordered **quantity**
- **Average price**
- **Total cost**, including net value and tax

![Supply Orders Report List](../Images/SupplyOrdersReportList.png)

## Filters

The filters on the left allow you to narrow down the report:

- **Supply date** — Filter orders within a specific date range.
- **Vendor** — Show order data for one or more selected suppliers.
- **Product** — Show order data for materials destined for specific products (e.g., **Pine wood board** for **Pine wood table**).

Filters can be combined to focus on very specific procurement scenarios.

## Interpretation of values

- **Quantity** represents the total ordered quantity for the material
- **Average price** is calculated across all matching [**Supply orders**](../Documents/SupplyOrders.md)
- **Total cost** shows:
  - Net price
  - Tax amount
  - Final total value

All amounts are calculated based on the [**Supply orders**](../Documents/SupplyOrders.md) included by the selected filters.

## Notes

- Only **committed supply orders** are included in this report.
- Draft or reversed supply orders are not shown.
- The view is intended for **analysis only** and does not support actions such as editing, reversing, or creating documents.

For detailed document-level information, open the related [**Supply orders**](../Documents/SupplyOrders.md) directly from the **Supply / Documents / Supply orders** section.