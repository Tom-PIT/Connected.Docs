<!-- app_route: /management/ledger/accounts -->
<!-- app_label: Chart of accounts -->
<!-- canonical_source_url: https://github.com/Tom-PIT/Connected.Docs/blob/main/en/Domains/Accounting/Management/Ledger/ChartOfAccounts.md -->
<!-- canonical_source_title: Chart of accounts -->

# Chart of accounts

The **Chart of accounts** defines the complete structure of financial accounts used by the system to record, classify, and report all accounting transactions. Each account represents a specific financial category such as assets, revenues, production costs, or operating expenses.

The **Chart of accounts** is a **core accounting structure**. It is referenced by many other parts of the system, including journals, invoices, inventory valuation, cost centers, and financial reports. Accounts must therefore be defined before they can be used elsewhere.

To access this screen, go to **Accounting / Ledger / Management / Chart of accounts** in the [navigation](../../../../Common/UI/Navigation.md).

## European accounting context

In most EU countries, the chart of accounts follows a **structured and hierarchical model**, often defined or strongly influenced by national accounting regulations.

This typically includes:
 - Account classes (e.g. 1–9) representing high-level financial categories
 - Synthetic (grouping) accounts used for structure and reporting
 - Analytical accounts used for operational postings

The system is designed to support this model while remaining flexible for company-specific extensions.

> [!NOTE]
> While the hierarchical, synthetic/analytical chart of accounts model is common across most EU countries, the system also supports non-standard or company-defined charts of accounts. This includes simpler structures without predefined account classes or synthetic parent accounts, which are more common in non-EU or group-level accounting setups.

### National variations

While the overall structure of charts of accounts is similar across the EU, specific account numbering, naming, and mandatory structures may vary by country.

The system does not enforce a single national chart of accounts but supports importing and extending country-specific templates.

## Schema

| Field          | Description                                                                                                                 |
| -------------- | --------------------------------------------------------------------------------------------------------------------------- |
| **Account**        | Unique numeric identifier of the account. The numbering usually follows a logical structure (e.g. assets, revenues, costs) (mandatory). |
| **Name**         | Descriptive name of the account, clearly indicating its purpose (mandatory).                                                            |
| **Posting type**   | Defines whether and how transactions can be posted to the account.                                                          |
| **Account type**   | Defines posting and analytical requirements for the account (e.g. cost center or client binding) (mandatory).                                     |
| **Parent account** | Defines the hierarchical position of the account within the chart of accounts. In EU accounting structures, analytical accounts are typically created under predefined synthetic parent accounts.                                                     |
| **Tags**           | Tags used for filtering, reporting, or integrations.                                                               |

### Posting type

The **Posting type** determines how the account can be used in accounting entries:

* **Posting is not allowed** – The account is a structural or grouping account. Transactions cannot be posted directly to it.
* **Debit only** – Only debit postings are allowed.
* **Credit only** – Only credit postings are allowed.
* **Debit and credit** – Both debit and credit postings are allowed.

> [!TIP]
> Grouping accounts (such as *Production costs* or *Operating expenses*) typically use **Posting is not allowed**, while operational accounts use **Debit and credit**.

### Account type

The **Account type** defines whether the account must be linked to another business entity:

* **No binding** – The account is used independently, without mandatory links.
* **Bind to cost center** – Each posting must reference a cost center.
* **Bind to client** – Each posting must reference a client.
* **Synthetic** – Structural account used for grouping and reporting.
Synthetic accounts are typically defined by national accounting frameworks and do not allow direct postings.

> [!NOTE]
> Operational postings are always performed on analytical accounts, which are defined as children of synthetic accounts.

## List view

The list view displays all defined accounts in a hierarchical structure.

Each row shows:

* **Account number**
* **Account name**
* **Account type and posting rules**

Parent accounts can be expanded to show their child accounts. The list can be searched using the search field in the top-right corner.

![Chart of accounts list](../../Images/ChartOfAccountsListV2.png "Chart of accounts list")

## Actions

Click the [action button](../../../../Common/UI/ActionButton.md) to access available actions:
- **New**
- **Import**

### Add a new account

To add a new account:

1. Click the action button and select **New**
2. Enter the required fields
3. Click **Add** to save the account or **Cancel** to discard the entry

![Chart of accounts – new](../../Images/ChartOfAccountsNew.png "Chart of accounts – new")

### Import accounts

The **Import** action allows bulk creation of accounts by uploading a CSV file. This is typically used during initial system setup or migration from another accounting system.

The CSV file must follow the expected column structure for accounts, including account numbers, names, and configuration fields.

### Edit an account

Click an account in the list to open it in edit mode. You can update its properties as long as it is not restricted by existing postings or dependencies.

Click **Save** to apply changes or **Cancel** to discard them.

## Usage notes

* Parent (grouping) accounts should not allow postings.
* Manufacturing companies typically separate **Production costs** from **Operating expenses**.
* Accounts bound to cost centers are commonly used for production, labor, and overhead tracking.
* The Chart of accounts should be defined before creating journals, invoices, or inventory transactions.

## Delete an account

An account can be deleted on the edit screen by clicking the **Delete** button. It can be deleted only if it is **not referenced** by:

* Journal entries
* Documents (e.g. invoices, inventory movements)
* Reports or calculations

If an account has already been used, deletion is blocked to preserve accounting integrity.
