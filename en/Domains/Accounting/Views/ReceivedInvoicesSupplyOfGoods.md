<!-- app_route: /accounting/ledger/received-invoices-supply-of-goods -->
<!-- app_label: Received invoices supply of goods -->
<!-- canonical_source_url: https://github.com/Tom-PIT/Connected.Docs/blob/main/en/Domains/Accounting/Views/ReceivedInvoicesSupplyOfGoods.md -->
<!-- canonical_source_title: Received invoices supply of goods -->

# Received invoices supply of goods

The **Received invoices supply of goods** view provides an overview of received invoices related to the supply of goods under specific tax reporting conditions.

This is a **read-only analytical view** intended for monitoring and reconciliation purposes. Data cannot be edited from this screen.

To access this view, go to **Accounting / Ledger / Views / Received invoices supply of goods** in the [navigation](../../../Common/UI/Navigation.md).

> [!NOTE]  
> This view is intended for reporting and verification. It does not replace official VAT declarations but supports internal control and reconciliation.

![Received invoices supply of goods](../Images/ReceivedInvoicesSupplyOfGoods.png "Received invoices supply of goods")

## Purpose

This view allows users to:

- Review received invoices that qualify for supply-of-goods reporting
- Verify supplier information (including VAT ID, where applicable)
- Support VAT and cross-border reporting processes
- Reconcile received invoices with tax and ledger records

Invoices appear in this list based on the configured tax treatment and reporting criteria.

## Filters

The filter panel allows narrowing down results:

- **Date (from – to)** – Displays invoices within the selected period.

## Columns

Each row represents one received invoice and includes:

- **Document** – Document date and internal reference.
- **Company** – Supplier name and VAT identification number (if defined).

## Menu

The menu provides additional actions available on this page.

Available actions:

- **Export to PDF**

For details about menu actions, see [**Menu actions**](../../../Common/Concepts/MenuActions.md).
