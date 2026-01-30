# Debit notes

A **Debit note** is a sales document used to **increase** the amount owed by a customer after an invoice has already been issued. It is typically created when additional charges are required, such as price corrections, extra services, or costs that were not included in the original invoice.

Debit notes increase the customer’s outstanding balance. For reductions or refunds, see **[Credit notes](CreditNotes.md)**.

> [!TIP]
>
> You can easily review the current **debit and credit records** for each customer in the **[Company cards](../Views/CompanyCards.md)** view.


To access this page, go to **Sales / Documents / Debit notes**.

## How debit notes fit into the sales workflow

Debit notes are used after an invoice has already been issued:

1. Issue an **[Issued invoice](IssuedInvoices.md)** for delivered goods or services.  
2. Identify the need for an additional charge or correction that increases the invoice amount.  
3. Create a **Debit note** linked to the issued invoice or as a standalone document.  
4. Review and publish the debit note, moving it to **Committed**.  
5. The debited amount increases the customer’s balance and is included in accounting.  
6. Reverse the debit note if it was created by mistake (see **[Reversals](../../Logistics/Documents/Reversals.md)**).

Debit notes affect accounting only and do not impact inventory.

## Schema

<details open>
  <summary><strong>Document</strong></summary>

| Field | Description |
|-------|-------------|
| [**Code**](../../Common/UI/DocumentCodes.md) | System-generated identifier of the credit note. |
| **Purchase order code** | Optional reference to the customer’s purchase order. |
| **Customer** | Customer receiving the credit, selected from the [**Business directory**](../../Common/Management/BusinessDirectory.md) (mandatory). |
| **Issue date** | Date when the credit note is issued. |
| **Delivery date** | Original delivery date of the invoiced goods or services. |
| **Due date** | Date when the credit becomes effective (mandatory). |
| **Reference type** | Type of payment reference used (mandatory). |
| **Reference number** | Reference number based on the chosen reference type. |
| **[Organization bank account](../Management/OrganizationBankAccounts.md)** | Bank account used for refunds or accounting (mandatory). |
| **[Cost center](../../Common/Management/CostCenters.md)** | Optional allocation to a cost center. |
| **Purpose code** | Optional reason or classification for the credit. |
| **Rebate** | Overall rebate applied to the credit note. |
| **Content top** | Introductory text from [**Predefined texts**](../../Common/Management/PredefinedTexts.md). |
| **Content bottom** | Closing or legal text from [**Predefined texts**](../../Common/Management/PredefinedTexts.md). |

<details>
  <summary><strong>Transport, Alternative currency, and Delivery</strong></summary>

| Field | Description |
|--------|-------------|
| **[Delivery term](../../Common/Management/DeliveryTerms.md)** | Delivery conditions  as agreed upon with the customer. |
| **[Mode of transport](../../Common/Management/ModeOfTransport.md)** | Transport method  as agreed upon with the customer. |
| [**Alternative currency**](../../Common/Management/Currencies.md) | Alternative currency to the default one used in the document |
| [**Exchange rates**](../Management/ExchangeRates.md) | Exchange rate of the alternative currency with respect to the default currency	|
| **Delivery** | Delivery company and address information. |
</details>

<details>
  <summary><strong>Intrastat</strong></summary>


| Field | Description |
|------|-------------|
| [**Country dispatch**](../../Common/Management/Countries.md) | Country from which the goods were dispatched. This value is typically derived from the material’s Intrastat configuration. |
| [**Nature of transaction**](../../Accounting/Management/Intrastat/NatureOfTransactions.md) | Classification of the transaction type used for Intrastat reporting (for example, direct sales or purchases). |
| [**Place of delivery**](../../Accounting/Management/Intrastat/PlaceOfDelivery.md) | Indicates where the goods are delivered, according to Intrastat definitions. |

</details>

<details>
  <summary><strong>Details</strong></summary>

| Field | Description |
|--------|-------------|
| [**Asset**](../../Assets/Assets/Assets.md) | Credited item or service. |
| **Quantity** | Quantity being credited (usually negative). |
| **Net price** | Net price per unit. |
| **Discount (%)** | Optional line-level discount. |
| **Value** | Calculated totals (net, tax, gross) with negative amounts. |
</details>

## Management

Debit notes can have **Draft** and **Committed** states.

### List view

The debit notes list can be filtered by:
- **Document dates**
- **View** (Draft / Committed)
- **Customer**

Each row displays:
- Customer  
- Document code  
- Document date  
- Debit amount  

Drafts can be edited; committed debit notes are final unless reversed.

![Debit notes list](../Images/DebitNotesList.png)

## Actions

### Creating a new debit note

Debit notes can be created in two ways:

- Via the [**action button**](../../Common/UI/ActionButton.md) on the **Debit notes** screen  
- From an existing [**Issued invoice**](IssuedInvoices.md) via *Linked documents → + Debit note*

Once you start a new debit note, follow these steps:

1. Create a new draft debit note using one of the methods above.

   ![New debit note](../Images/DebitNoteNew.png)

2. Fill in the required header fields such as **Customer**, **Dates**, **Reference type**, and **Organization bank account**.

3. Add items in the **Details** section by typing or scanning an **asset name**, **EAN**, or **serial number**.  
   - Matching items are displayed for selection.

   ![Debit note details](../Images/DebitNoteNewDetails.png)

4. Edit quantities and values as needed, then click **Save** to confirm the detail.

5. When ready, click **Publish** at the top of the page.  
   The document moves from **Draft** to **Committed** and becomes financially effective.

> [!NOTE]  
> Once published, a debit note cannot be edited. Any corrections must be done via reversal.

### Editing a debit note

Only **Draft** debit notes can be edited.

You can modify:
- Header fields  
- Alternative currency
- Transport
- Delivery information
- Detail lines  
- Content texts (top and bottom)

Committed debit notes are read-only.

#### Attachments

Files can be added in the **Attachments** section to store supporting documents such as agreements or correction explanations.

#### Linked documents

The **Linked documents** section allows you to link a previously created **Issued invoice**.

![Link issued invoice](../Images/CreditDebitNoteLinkedDocuments.png)

Published debit notes do **not** display the Linked documents section.

#### Alternative currency

The Alternative currency section allows prices in the document to be expressed in a currency different from the system’s default currency. This is typically used for international sales. Rates are taken from the [Exchange rates](../Management/ExchangeRates.md) code list.

![Sales order – Alternative currency section](../Images/SalesAlternativeCurrency.png "Alternative currency section")

When an alternative currency is selected, document prices are automatically recalculated using the specified exchange rate.

## Transport and Intrastat sections

When **Intrastat** is set to **Obliged** in **System / Configuration / Intrastat**, additional sections become available in the receive document form.

![Transport and Intrastat sections](../Images/ReceiveTransportInstrastat.png "Transport and Intrastat sections")


- **Transport** - Used to capture logistics-related information about how the goods were delivered.
- **Intrastat** - Used to collect data required for Intrastat reporting. These fields are only shown when Intrastat reporting is enabled for the system.

> [!NOTE]  
Several Intrastat-related values are taken from **material code lists** (Intrastat configuration), such as country and transaction nature. These fields are not freely configurable per document and depend on predefined master data.

## Menu

The document menu provides additional actions:

- **Printing**
- **Exporting**
- **Send as email**
- **Reverse document**
- **Return to draft** (only if allowed)

![Debit note menu](../Images/CreditDebitNoteMenu.png)

Reversing a debit note negates its financial effect. For details, see **[Reversals](../../Logistics/Documents/Reversals.md)**.

## Deletion

Draft debit notes can be deleted only if they contain **no details**. Details can be removed via Menu → **Delete all details**.

If you need to delete some individual detail lines:
1. Open each detail line by clicking on them.
2. Remove it using **Delete**.
3. Repeat until all desired lines are removed.

Once empty, the **Delete** action can be performed.

Committed debit notes **cannot** be deleted, but they can be [**reversed**](../../Logistics/Documents/Reversals.md) or **returned to draft**.

