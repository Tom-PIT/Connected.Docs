# Bank accounts

Bank accounts belong to a specific **customer** or **vendor** and are managed inside the [**Business directory**](BusinessDirectory.md). They define the financial account information used later in documents such as issued invoices or payments. 

Each account is linked to a **Bank**, selected from the predefined [**Banks**](Banks.md) code list.

### Accessing bank accounts

Bank accounts appear as a tag inside each Business directory entry:

![Bank accounts tag](../Images/BankAccountsButton.png)

## Schema

| Field | Description |
|-------|-------------|
| [**Bank**](Banks.md) | The financial institution providing the account. Selected from the **Banks** code list (mandatory). |
| **IBAN** | Full international bank account number (mandatory). |
| **Active** | Indicates whether the account can be used on documents. |
| **Use mask** | Formats the IBAN visually (spaces and grouping) without changing its value. |

## List view

The Bank accounts list displays all accounts linked to the selected Business directory entry.

![Bank accounts list](../Images/BankAccountsList.png)

Use the filters on the left (Enabled / Disabled) to show only active or inactive accounts.

## Creating a new bank account

To add a new bank account, click on the [**action button**](../UI/ActionButton.md) in the bottom-right corner.

![Add bank account](../Images/BankAccountsNew.png)

Fill in the following fields:

- **Bank** – Selected from the [**Banks**](Banks.md) code list  
- **IBAN** – The international bank account number  
- **Active** – Determines whether the account is available for use  
- **Use mask** – Formats the IBAN for easier readability (optional)

Click **Add** to save the new account.

## Editing an existing account

1. Open the Business directory entry.  
2. Click the **Bank accounts** tag.  
3. Select an account from the list.  
4. Update the IBAN, activity status, or mask option.  
5. Click **Save**.

## Deletion

A bank account can be deleted in the Edit page, but only if it is not referenced in other documents (e.g., issued invoices or payments).

> [!NOTE]
> Deleting a bank account does **not** delete the Business directory entry it belongs to.

