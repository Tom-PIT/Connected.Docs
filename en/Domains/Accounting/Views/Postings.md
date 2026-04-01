<!-- app_route: /accounting/ledger/views/journal-entry-details -->
<!-- app_label: Postings -->
<!-- canonical_source_url: https://github.com/Tom-PIT/Connected.Docs/blob/main/en/Domains/Accounting/Views/Postings.md -->
<!-- canonical_source_title: Postings -->

# Postings

The **Postings** view provides a **flat, line-level overview of all debit and credit postings**, generated from posted journal entries. Each row represents a **single posting line**, showing the account, amount, and originating journal entry.

This is a **read-only analytical view** used to review and audit accounting postings. No data can be edited from this screen.

To access this view, go to **Accounting / Ledger / Views / Postings** in the [**navigation**](../../../Common/UI/Navigation.md).

![Postings view](../Images/PostingsView.png "Postings view")

## How this view is used

The Postings view is typically used to:

- Inspect **individual debit and credit lines** across all journal entries
- Verify **which account** was affected by a specific document
- Trace amounts back to their **originating journal entry**
- Support reconciliation, audits, and troubleshooting

Clicking on a **blue journal entry code** opens the corresponding **journal entry document**.

## Filters

The filters on the left side allow you to narrow down the results:

- **Accounting date (from / to)** – Limits postings to a specific accounting date range.
- **Companies** – Shows postings related to selected companies.
- **Account** – Filters postings by one or more ledger accounts.
- **Posting date (from / to)** – Filters by posting date.
- **Delivery date (from / to)** – Filters by delivery date, when applicable.
- **Due date (from / to)** – Filters by due date, when applicable.
- **Amount (from / to)** – Filters postings by debit or credit amount range.

## Columns

Each row in the list represents a single posting line and includes:

- **Journal entry** – The journal entry that generated the posting.
- **Account** – The ledger account affected by the posting.
- **Amount** – Debit or credit value posted to the account.

> [!NOTE]  
The **Postings** view shows all postings regardless of balance. Unlike journal entries, this view does not group debit and credit lines and does not indicate whether an entry is balanced.

## Menu

The **Menu** in the top-right corner provides options to export the postings list as a CSV file for further analysis.