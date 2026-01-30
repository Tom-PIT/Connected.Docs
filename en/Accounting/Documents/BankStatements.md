# Bank statements

To access this screen, go to **Accounting / Ledger / Bank statements** in the [**navigation**](../../Common/UI/Navigation.md).

Bank statements are used to record movements on an organization’s bank accounts. Each bank statement represents a set of incoming and outgoing bank transactions for a specific date and bank account.

> [!NOTE]
> When a bank statement is published, the system automatically creates a corresponding journal entry. This journal entry can be viewed under **Connected documents** on the bank statement.

## Schema

<details open>
  <summary><strong>Document</strong></summary>

| Field                         | Description                                        |
| ----------------------------- | -------------------------------------------------- |
| [**Code**](../../Common/UI/DocumentCodes.md)                      | System-generated identifier of the bank statement. |
| **Document date**             | Date of the bank statement.                        |
| [**Organization bank account**](../../Sales/Management/OrganizationBankAccounts.md) | Bank account to which the statement applies.       |

</details>

<details>
  <summary><strong>Details</strong></summary>

| Field                 | Description                                          |
| --------------------- | ---------------------------------------------------- |
| [**Company**](../../Common/Management/BusinessDirectory.md)           | Business entity related to the bank movement.           |
| [**Account**](../Management/Ledger/ChartOfAccounts.md)           | Ledger account used for the posting.                 |
| **Posting direction** | Indicates whether the movement is a Debit or Credit. |
| **Amount**            | Monetary value of the bank movement.                 |
| **Description**       | Description of the bank transaction.                 |

</details>

## Management

### List view

The list view displays all bank statements.

![Bank Statements List](../Images/BankStatementsList.png "Bank Statements List")

Available filters:

* **View**

  * Draft
  * Committed

Committed bank statements are visually marked to indicate that they have been posted to the ledger.

### Document states

Bank statements can be in one of the following states:

* **Draft** – The statement is editable and bank movements can be added or modified.
* **Committed** – The statement is published and its related journal entry has been created.

## Actions

### Create bank statement

1. Click the [**action button**](../../Common/UI/ActionButton.md) to create a new bank statement.
2. Select the [**Organization bank account**](../../Sales/Management/OrganizationBankAccounts.md).
3. Set the **Document date**.

![Bank Statements New](../Images/BankStatementsNew.png "Bank Statements New")

### Add bank movement

1. In the **Details** section, click **Add detail**.
2. Select the [**Company**](../../Common/Management/BusinessDirectory.md) related to the transaction.
3. Select the [**Account**](../Management/Ledger/ChartOfAccounts.md)  to post against.
4. Choose the **Posting direction** (Debit or Credit).
5. Enter the **Amount** and **Description**.
6. Click **Add** to insert the movement.

![Bank Statements New Add Detail](../Images/BankStatementsNewAddDetail.png "Bank Statements New Add Detail")

### Publish bank statement

After all bank movements have been entered:

* Click **Publish** to commit the bank statement.
* A journal entry is generated automatically.
* The bank statement moves from Draft to Committed status.

> [!NOTE]
> Bank statements record movements on the bank account only. When publishing a bank statement, the system **automatically generates a balanced journal entry** by adding the required counter-posting (Debit or Credit) so that the entry complies with double-entry accounting rules.

## Connected documents

Each committed bank statement has a linked journal entry.

The linked journal entry:

* Contains the debit and credit postings derived from the bank movements.
* Can be accessed from the **Connected documents** section of the bank statement.

This linkage ensures traceability between bank activity and ledger postings.

## Deletion

Draft bank statements can be deleted from the edit screen by clicking the **Delete** button.