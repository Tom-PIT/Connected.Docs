<!-- app_route: /sales/documents/debit-notes -->
<!-- app_label: Debit notes -->
<!-- canonical_source_url: https://tom-pit.github.io/Connected.Docs/en/Domains/Sales/Documents/DebitNotes/ -->
<!-- canonical_source_title: Debit notes -->

# Debit notes

A **Debit note** is a sales document used to **increase** the amount owed by a customer after an invoice has already been issued. It is typically created when additional charges are required, such as price corrections, extra services, or costs that were not included in the original invoice.

Debit notes increase the customer’s outstanding balance. For reductions or refunds, see **[Credit notes](CreditNotes.md)**.

> [!TIP]
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

<details open markdown="1">
<summary><strong>Document</strong></summary>

| Field | Description |
|-------|-------------|
| [**Code**](../../../Common/UI/DocumentCodes.md) | System-generated identifier of the debit note. |
| **Purchase order code** | Optional reference to the customer’s purchase order. |
| **Customer** | Customer receiving the debit, selected from the [**Business directory**](../../../Common/Management/BusinessDirectory.md) (mandatory). |
| **Issue date** | Date when the debit note is issued. |
| **Delivery date** | Original delivery date of the invoiced goods or services. |
| **Due date** | Date when the debit becomes effective (mandatory). |
| **Reference type** | Type of payment reference used (mandatory). |
| **Reference number** | Reference number based on the chosen reference type. |
| **[Organization bank account](../Management/OrganizationBankAccounts.md)** | Bank account used for accounting (mandatory). |
| **[Cost center](../../../Common/Management/CostCenters.md)** | Optional allocation to a cost center. |
| **Purpose code** | Optional reason or classification for the debit. |
| **Rebate** | Overall rebate applied to the debit note. |
| **Content top** | Introductory text from [**Predefined texts**](../../../Common/Management/PredefinedTexts.md). |
| **Content bottom** | Closing or legal text from [**Predefined texts**](../../../Common/Management/PredefinedTexts.md). |

</details>

<details markdown="1">
<summary><strong>Transport, Alternative currency, and Delivery</strong></summary>

| Field | Description |
|------|-------------|
| **[Delivery term](../../../Common/Management/DeliveryTerms.md)** | Delivery conditions as agreed upon with the customer. |
| **[Mode of transport](../../../Common/Management/ModeOfTransport.md)** | Transport method as agreed upon with the customer. |
| [**Alternative currency**](../../../Common/Management/Currencies.md) | Alternative currency to the default one used in the document. |
| [**Exchange rates**](../Management/ExchangeRates.md) | Exchange rate of the alternative currency with respect to the default currency. |
| **Delivery** | Delivery company and address information. |

</details>

<details markdown="1">
<summary><strong>Intrastat</strong></summary>

| Field | Description |
|------|-------------|
| [**Country dispatch**](../../../Common/Management/Countries.md) | Country from which the goods were dispatched. This value is typically derived from the material’s Intrastat configuration. |
| [**Nature of transaction**](../../Accounting/Management/Intrastat/NatureOfTransactions.md) | Classification of the transaction type used for Intrastat reporting (for example, direct sales or purchases). |
| [**Place of delivery**](../../Accounting/Management/Intrastat/PlaceOfDelivery.md) | Indicates where the goods are delivered, according to Intrastat definitions. |

</details>

<details markdown="1">
<summary><strong>Details</strong></summary>

| Field | Description |
|------|-------------|
| **Asset** | Product, service, or asset selected for this line. |
| **Detail name** | Display name of the selected item (can be edited if allowed). |
| **[Tax rate](../../../Common/Management/TaxRates.md)** | Tax rate applied to the line (defined in tax configuration). |
| **Net price (per unit)** | Price per unit excluding tax. |
| **Tax price (per unit)** | Price per unit including tax (calculated automatically based on tax rate). |
| **Quantity** | Quantity of the selected asset. |
| **Discount (%)** | Percentage discount applied to the net price. |
| **Total amount excluding tax** | Calculated net total (Net price × Quantity − Discount). |
| **Total amount with tax** | Total amount including tax. |
| **Tax calculation type** | Defines how tax is calculated when special VAT rules apply:<br>• **Trilateral supplies** – For triangular EU transactions where VAT is accounted for by the final buyer (reverse charge).<br>• **Tax is accounted** – Applies reverse charge VAT; the customer accounts for the tax instead of the seller.<br>• **Export services** – Used for services provided to customers outside the EU (typically VAT exempt).<br>• **Transport services** – Special VAT treatment for goods transport services.<br>• **Passenger transport** – VAT rules specific to passenger transport activities.<br>• **Travel agencies** – Applies the VAT margin scheme for travel agency services.<br>• **According to customs procedures 42 and 63** – Used for imports where VAT is deferred to the destination EU country.<br>• **Sale of recalled goods from the EU** – Special VAT handling for returned or recalled goods within the EU. |
| **Description** | Optional additional information for the line. |
| **Use alternative currency** | Option to express the line amount in a selected alternative currency. When selected, the amount is recalculated based on the exchange rate defined in the document. |

</details>

<details markdown="1">
<summary><strong>Ledger and Intrastat details</strong></summary>

| Field | Description |
|------|-------------|
| **Ledger - Account revenue / expense** | General [ledger account](../../Accounting/Management/Ledger/ChartOfAccounts.md) used to post the line amount (e.g., sales revenue or purchase expense). |
| **Ledger - Account tax** | General [ledger account](../../Accounting/Management/Ledger/ChartOfAccounts.md) used to post the tax amount associated with the document line. |
| **[Intrastat – Tariff](../../Accounting/Management/Intrastat/Tariffs.md)** | Commodity code used for Intrastat reporting. |
| **Intrastat – Country of origin** | Country where the goods originate. |
| **Intrastat – Net weight (kg)** | Net weight used for statistical reporting. |
| **Intrastat – Statistical value** | Declared statistical value of goods for Intrastat reporting. |

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

### Create a new debit note

Debit notes can be created in two ways:

- Via the [action button](../../../Common/UI/ActionButton.md) on the **Debit notes** screen
- From an existing [**Issued invoice](IssuedInvoices.md)** via *Linked documents → + Debit note*

Once you start a new debit note, follow these steps:

1. Create a new draft debit note using one of the methods above.

   ![New debit note](../Images/DebitNoteNew.png)

2. Fill in the required header fields such as **Customer**, **Dates**, **Reference type**, and **Organization bank account**.

3. Add items in the **Details** section by typing or scanning an **asset name**, **EAN**, or **serial number**.
   - Matching items are displayed for selection.

   ![Debit note details](../Images/DebitNoteNewDetails.png)

4. Edit quantities and values as needed, then click **Save** to confirm the detail.

   For information about working with document details, see [**Document details**](../../../Common/Concepts/DocumentDetails.md).

5. When ready, click **Publish** at the top of the page.  
   The document moves from **Draft** to **Committed** and becomes financially effective.

> [!NOTE]
> Once published, a debit note cannot be edited. Any corrections must be done via reversal.

#### Details

Details define the ordered items and their quantities, prices, taxes, and discounts. Each detail line corresponds to a specific product, service, or asset.

Saved detail:

![Sales order – Edit detail](../Images/SalesOrdersNewDetailsSaved.png)

##### Ledger details

The **Ledger** section defines how the document is posted to the general ledger. It determines which accounts are used for revenue, expense, and tax postings when the document is saved and posted.

When the document is posted:

- The **net amount** is posted to the selected revenue or expense account.
- The **tax amount** is posted to the selected tax account.
- The system creates corresponding journal entries in the ledger.

The available accounts are defined in the **[Chart of accounts](../../Accounting/Management/Ledger/ChartOfAccounts.md)**.

##### Intrastat details

When Intrastat reporting is enabled and the transaction involves a customer from another EU country, an additional **Intrastat** section becomes available in the detail edit form. This section collects statistical information required for Intrastat reporting.

These fields are mandatory for cross-border EU transactions when the organization is Intrastat-obliged.

### Edit a debit note

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

Use the **Attachments** section to upload and manage files related to the document, such as photos, PDFs, certificates, or supporting records.

For detailed instructions, see [**Attachments**](../../../Common/Concepts/Attachments.md).

#### Linked documents

The **Linked documents** section allows you to link a previously created **Issued invoice**.

![Link issued invoice](../Images/CreditDebitNoteLinkedDocuments.png)

Published debit notes do **not** display the Linked documents section.

For details about document relationships, traceability, and creating related documents, see [**Linked documents**](../../../Common/Concepts/LinkedDocuments.md).

#### Alternative currency

The Alternative currency section allows prices in the document to be expressed in a currency different from the system’s default currency. This is typically used for international sales. Rates are taken from the [Exchange rates](../Management/ExchangeRates.md) code list.

![Sales order – Alternative currency section](../Images/SalesAlternativeCurrency.png "Alternative currency section")

When an alternative currency is selected, document prices are automatically recalculated using the specified exchange rate.

#### Transport and Intrastat sections

When **Intrastat** is set to **Obliged** in **System / Configuration / Intrastat**, additional sections become available in the receive document form.

![Transport and Intrastat sections](../../Logistics/Images/ReceiveTransportInstrastat.png "Transport and Intrastat sections")

- **Transport** - Used to capture logistics-related information about how the goods were delivered.
- **Intrastat** - Used to collect data required for Intrastat reporting. These fields are only shown when Intrastat reporting is enabled for the system.

> [!NOTE]
> Several Intrastat-related values are taken from **material code lists** (Intrastat configuration), such as country and transaction nature. These fields are not freely configurable per document and depend on predefined master data.

### Delete a debit note

Draft documents can be deleted in the edit view, **only if they contain no details**.

If the draft still includes items in the **Details** section:

1. Open the document menu (top right corner).
2. Select **Delete all details** to remove all lines at once.
3. Once the document contains no details, click **Delete** to remove the draft.

If you need to remove only a specific material instead of clearing the entire document:

1. Click the material serial number to open the **Edit detail** screen.
2. Click **Delete** inside the Edit detail window.

> [!NOTE]
> Committed debit notes **cannot** be deleted, but they can be [reversed](../../Logistics/Documents/Reversals.md) or **returned to draft**.

## Menu

The menu provides additional actions available on this page.

Available actions:

- **Printing**
- **Exporting**
- **Send as email**
- **Delete all details** (only for drafts)
- **Reverse document**
- **Return to draft** (only if allowed)

> [!NOTE]
> Reversing a debit note negates its financial effect. For details, see **[Reversals](../../Logistics/Documents/Reversals.md)**.

For details about menu actions, see [**Menu actions**](../../../Common/Concepts/MenuActions.md).

![Debit note menu](../Images/CreditDebitNoteMenu.png)

