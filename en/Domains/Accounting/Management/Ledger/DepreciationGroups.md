# Depreciation groups

The **Depreciation groups** screen defines how fixed assets are depreciated in the ledger. A depreciation group specifies the depreciation rate and the accounts used to record the purchase value, value corrections (accumulated depreciation), and depreciation costs.

Depreciation groups are referenced by assets and are used by the system when depreciation is calculated and posted.

To access this screen, go to **Accounting / Ledger / Management / Depreciation groups** in the [**navigation**](../../../../Common/UI/Navigation.md).

> [!NOTE]
> **Prerequisites**
>
> The [**Chart of accounts**](ChartOfAccounts.md) must be configured with the necessary accounts for **purchase value**, **value corrections**, and **depreciation costs**.

### Overview

A depreciation group:

* Represents a **depreciation rule** for a class of assets
* Defines a **depreciation rate (%)**
* Links depreciation postings to specific ledger accounts
* Can be reused by multiple assets

Depreciation groups do not represent assets themselves. They are configuration entries that standardize depreciation behavior.

## Schema

| Field                     | Description                                                          |
| ------------------------- | -------------------------------------------------------------------- |
| **Code**                      | Technical identifier of the depreciation group.                      |
| **Name**                      | Descriptive name of the depreciation group.                          |
| **Depreciation rate (%)**     | Annual depreciation rate expressed as a percentage.                  |
| **Purchase value account**    | Account used to record the original purchase value of the asset.     |
| **Value correction account**  | Account used to accumulate depreciation amounts (value corrections). |
| **Depreciation cost account** | Expense account used to record depreciation costs.                   |

## List view

The list view displays all defined depreciation groups.

![Depreciation groups list](../../Images/DepreciationGroupsList.png "Depreciation groups list")

Each row shows:

* **Name**
* **Depreciation rate**

Click a depreciation group to open it in edit mode.

## Actions

### Add depreciation group

To create a new depreciation group:

1. Click the [**action button**](../../../../Common/UI/ActionButton.md) to create a new entry

2. Enter:

   * **Code**
   * **Name**
   * **Depreciation rate (%)**

3. Select the required accounts:

   * **Purchase value account**
   * **Value correction account**
   * **Depreciation cost account**

4. Click **Add** to save the depreciation group or **Cancel** to discard the entry

![Depreciation groups – new](../../Images/DepreciationGroupsNew.png "Depreciation groups – new")

### Edit depreciation group

Click a depreciation group in the list to open it in edit mode. Update its fields as needed.

Click **Save** to apply changes or **Cancel** to discard the entry.

## Practical examples

The following example illustrate a typical depreciation group. Let's imagine a company that needs to define a depreciation group for its production machinery, which has an expected useful life of 10 years. 

### Machinery – 10 years

* **Code:** MACH_10Y
* **Depreciation rate:** 10%
* **Use case:** Production machinery and equipment
* **Purchase value account:** Machinery
* **Value correction account:** Accumulated depreciation – Machinery
* **Depreciation cost account:** Depreciation expense

This group is suitable for long-lived production assets.

## Deletion

A depreciation group can be deleted only if it is **not referenced** by any existing assets.

To delete a depreciation group, open it in edit mode and select **Delete**.

> [!WARNING]
> Deleting a depreciation group that is in use may prevent depreciation processing for affected assets.
