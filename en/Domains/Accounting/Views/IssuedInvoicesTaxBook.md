<!-- app_route: /accounting/ledger/issued-invoices-tax-book -->
<!-- app_label: Issued invoices tax book -->
<!-- canonical_source_url: https://github.com/Tom-PIT/Connected.Docs/blob/main/en/Domains/Accounting/Views/IssuedInvoicesTaxBook.md -->
<!-- canonical_source_title: Issued invoices tax book -->

# Issued invoices tax book

The **Issued invoices tax book** view provides a **filtered overview of issued invoices that contain tax amounts**, together with links to their related journal entries.

This is a **read-only analytical view** used for tax reporting and review. No data can be edited from this screen.

To access this view, go to **Accounting / Ledger / Views / Issued invoices tax book** in the [navigation](../../../Common/UI/Navigation.md).

> [!NOTE]  
> This view displays only **issued invoices that generate tax entries**. It is intended for tax review and reporting purposes and does not replace official VAT reports.

![Issued invoices tax book](../Images/IssuedInvoicesTaxBookList.png "Issued invoices tax book")

## How this view is used

The Issued invoices tax book is typically used to:

- Review **issued invoices with calculated tax**
- Verify **customer and document details**
- Access the related **journal entry**
- Support **VAT reporting and reconciliation**

Clicking on a **blue journal entry code** opens the corresponding **journal entry document**.

## Filters

The filters on the left side allow you to narrow down the results:

- **Date from / Date to** – Limits invoices to a specific date range.
- **Company** – Shows invoices related to the selected company.

## Columns

Each row represents a single issued invoice and includes:

- **Document** – Invoice code and related journal entry.
- **Customer** – Customer name and address.
- **Date** – Invoice date.

## Menu

Use the menu (top right corner) to **Export to PDF** and generate a PDF of the filtered list.