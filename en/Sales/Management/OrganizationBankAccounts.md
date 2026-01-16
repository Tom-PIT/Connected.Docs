# Organization bank accounts

The **Organization bank accounts** code list stores the IBAN accounts used by your company for issuing invoices, receiving payments, and other financial processes. This screen allows you to view, add, enable, or disable the IBAN accounts used by your organization.
 Each entry defines a bank, its IBAN number, and whether it is active or formatted using the IBAN mask.

To access Organization bank accounts, go to **Sales / Management / Organization bank accounts** in the [navigation](../../Common/UI/Navigation.md).

> [!NOTE]  
> **Prerequisites**  
> Before managing bank records, ensure that the [Banks](../../Common/Management/Banks.md) code list is properly configured.

## Schema

| Field | Description |
|-------|-------------|
| [**Bank**](../../Common/Management/Banks.md) | Bank to which the account belongs (mandatory). |
| **IBAN** | International Bank Account Number (mandatory). |
| **Active** | Indicates whether the account can be used in documents (selected by default). |
| **Use mask** | Determines whether the IBAN is displayed and entered using an input mask for improved readability. |

## Management

### Bank accounts list

The screen shows the list of bank accounts. Use the left panel to filter bank accounts:
- **Enabled**
- **Disabled**

![Organization bank accounts](../Images/OrganizationBankAccounts.png "Organization bank accounts list")

Click on an IBAN number to edit an specific bank account.

## Actions

Click the [Action Button](../../Common/UI/ActionButton.md) to add a new bank account.

### Add new bank account

Enter the required information:
- **Bank**
- **IBAN**
- **Active** (optional)
- **Use mask** (optional)

![New organization bank account](../Images/OrganizationBankAccountsNew.png "Add new bank account")

## Deletion
  
Click **Delete** on the edit screen to open a confirmation dialog: 

**Are you sure you want to delete this record?**  

If confirmed, the record is permanently removed; otherwise, the system keeps it unchanged.

> [!NOTE]
>A bank account can be deleted only if it is not referenced by other system entities.  

---

