# Tax rates
<!-- app_route: management/common-types/tax-rates -->
<!-- app_label: Tax rates -->
This code list defines all **tax rates** used across the system. Tax rates determine the percentage of tax applied to products, materials, and services in business documents. Each entry includes a descriptive name and a numeric percentage, ensuring tax is applied consistently throughout the digital contents.


You can access the **Tax rates** code list from different domains in the [**navigation**](../UI/Navigation.md). In all cases you are working with the same shared data.

To open the list, go to the **Management** section of the following domains:

- **Assets**
- **Sales**
- **Supply**

## Schema
<!-- app_route: management/common-types/tax-rates -->
<!-- app_label: Tax rates -->
| Field | Description |
|-------|-------------|
| **Name** | Descriptive name of the tax rate. For example, Standard tax rate 22 or Reduced tax rate 9.5. |
| **Tax rate (%)** | Numeric tax percentage applied, for example **22** or **9.5**. |
| **Active** | Indicates whether the tax rate is currently in use. Inactive tax rates cannot be selected in new entries, but remain visible in history. |
| **Ledger – Debit/Credit** | General ledger account selected from the [**Chart of accounts**](../../Domains/Accounting/Management/Ledger/ChartOfAccounts.md) that is debited/credited when a tax amount is posted using this tax rate. |

## Management

### List of tax rates
<!-- app_route: management/common-types/tax-rates -->
<!-- app_label: Tax rates -->
The user interface contains a list of tax rates. If no record exists yet, the list is empty.

Each record includes a status indicator to the left of its name:
- **Blue** indicates the tax rate is active
- **Gray** indicates the tax rate is inactive

![Tax rates list](../Images/TaxRates.png "Tax rates list")

The list displays each tax rate's name and the applicable percentage. A search field is available in the upper-right corner to help filter the list.

## Actions

### Adding a new tax rate
<!-- app_route: management/common-types/tax-rates -->
<!-- app_label: Tax rates -->
Click on the [**action button**](../UI/ActionButton.md) to add a new tax rate.

The form includes the following fields:
- **Name**
- **Tax rate (%)**
- **Active**
- **Ledger section**

After entering the required information, click **Add** to save the tax rate or **Cancel** to return to the list view.

![Add new tax rate](../Images/TaxRatesNew.png "Add new tax rate")

#### Ledger
<!-- app_route: management/common-types/tax-rates -->
<!-- app_label: Tax rates -->
The **Ledger** section defines which general ledger accounts are used to post tax amounts when this tax rate is applied in business documents.

The **Debit** and **Credit** fields allow selection of accounts from the [**Chart of accounts**](../../Domains/Accounting/Management/Ledger/ChartOfAccounts.md) code list. These accounts determine where tax amounts are posted during accounting transactions.

> [!NOTE]
The ledger setup is required for accurate tax accounting, reporting, and regulatory compliance.

### Editing an existing tax rate
<!-- app_route: management/common-types/tax-rates -->
<!-- app_label: Tax rates -->
To edit an existing tax rate, click the tax rate's **Name** in the list. The interface switches to edit mode, displaying the existing values for modification.

Click **Save** to confirm changes or **Cancel** to discard them.

### Deletion
<!-- app_route: management/common-types/tax-rates -->
<!-- app_label: Tax rates -->
Click **Delete** on the edit screen to open a confirmation dialog: 

**Are you sure you want to delete this record?**  

If confirmed, the entry is permanently removed; otherwise, the system keeps the record unchanged.

> [!NOTE]
>A tax rate can be deleted only if it is not used in any dependent entries.  

