# Proforma invoices

A **Proforma invoice** is a preliminary billing document used to provide customers with a detailed price quotation before goods or services are delivered. It does **not** trigger accounting or inventory changes, but it serves as a confirmed commercial offer.  

Proforma invoices are typically created from a committed [**Offer**](Offers.md), but can also be created independently via the [**action button**](../../../Common/UI/ActionButton.md).

To access this page, go to **Sales / Documents / Proforma invoices**.

## How proforma invoices fit into the sales workflow

Proforma invoices are used as an intermediate step when confirming commercial terms with a customer. They fit into the sales process as follows:

1. Create an **[Offer](Offers.md)** and publish it once the customer accepts the terms.  
2. Convert the committed offer into a **Proforma invoice** via *Linked documents → + Proforma invoice*, or create one manually.  
3. Send the Proforma invoice to the customer as a formal quotation.  
4. (Optional) Create one or more **[Prepayments](Prepayments.md)** from the committed proforma invoice.  
5. Convert the proforma invoice into a final **[Issued invoice](IssuedInvoices.md)** once goods/services are delivered.  
6. Reverse the proforma if needed using the [**Reversal**](../../Logistics/Documents/Reversals.md) action.

A committed proforma invoice is informational and does not affect financial or stock balances.

## Schema

<details open>
  <summary><strong>Document</strong></summary>

| Field | Description |
|-------|-------------|
| [**Code**](../../../Common/UI/DocumentCodes.md) | System-generated identifier of the proforma invoice. |
| **Purchase order code** | Optional reference to the customer’s purchase order. |
| **Customer** | Customer receiving the document, selected from the [**Business directory**](../../../Common/Management/BusinessDirectory.md) (mandatory). |
| **Document date** | Date when the proforma invoice is created. |
| **Validity date** | Date until which the prices and terms are valid (mandatory). |
| **Reference type** | Type of reference used on payment documents (mandatory). |
| **Reference number** | Reference number based on the selected reference type. |
| **[Organization bank account](../Management/OrganizationBankAccounts.md)** | Bank account displayed on the document (mandatory). |
| **[Cost center](../../../Common/Management/CostCenters.md)** | Optional allocation to a cost center. |
| **Purpose code** | Optional description of the document's purpose. |
| **Rebate** | Overall rebate applied to the total amount. |
| **Content top** | Introductory text from [**Predefined texts**](../../../Common/Management/PredefinedTexts.md). |
| **Content bottom** | Closing or legal text from [**Predefined texts**](../../../Common/Management/PredefinedTexts.md). |
</details>

<details>
  <summary><strong>Transport, Alternative currency, and Delivery</strong></summary>

| Field | Description |
|--------|-------------|
| **[Delivery term](../../../Common/Management/DeliveryTerms.md)** | Delivery conditions  as agreed upon with the customer. |
| **[Mode of transport](../../../Common/Management/ModeOfTransport.md)** | Transport method  as agreed upon with the customer. |
| [**Alternative currency**](../../../Common/Management/Currencies.md) | Alternative currency to the default one used in the document |
| [**Exchange rates**](../Management/ExchangeRates.md) | Exchange rate of the alternative currency with respect to the default currency	|
| **Delivery** | Delivery company and address information. |
</details>

<details>
  <summary><strong>Intrastat</strong></summary>

| Field | Description |
|------|-------------|
| [**Country dispatch**](../../../Common/Management/Countries.md) | Country from which the goods were dispatched. This value is typically derived from the material’s Intrastat configuration. |
| [**Nature of transaction**](../../Accounting/Management/Intrastat/NatureOfTransactions.md) | Classification of the transaction type used for Intrastat reporting (for example, direct sales or purchases). |
| [**Place of delivery**](../../Accounting/Management/Intrastat/PlaceOfDelivery.md) | Indicates where the goods are delivered, according to Intrastat definitions. |

</details>

<details>
  <summary><strong>Details</strong></summary>

| Field | Description |
|--------|-------------|
| [**Asset**](../../Assets/Assets/Assets.md) | Item or service listed on the proforma invoice. |
| **Quantity** | Quantity of the asset. |
| **Net price** | Net price per unit. |
| **Discount (%)** | Optional discount applied to the detail line. |
| **Value** | Calculated totals (net, tax, gross) for the detail line. |
</details>

## Management

Proforma invoices can have **Draft** and **Committed** states.

### List view

The list can be filtered by:
- **Document dates**
- **View** (Draft / Committed)
- **Customer**

Each row shows:
- Customer name  
- Document code  
- Document date  
- Document amount  

![Proforma invoice list](../Images/ProformaInvoiceList.png "Proforma invoice list")

Drafts can be edited; committed proforma invoices are final unless reversed.

## Actions

### Creating a new proforma invoice

Proforma invoices can be created in two ways:

- Directly from the **Proforma invoices** screen using the [**action button**](../../../Common/UI/ActionButton.md).  
- From a committed [**Offer**](Offers.md), via **Linked documents → + Proforma invoice**.  
  In this case, fields such as the customer, validity date, and detail items are automatically pre-filled.

![Offer Published Linked Documents](../Images/OfferPublishedLinkedDocuments.png)

Once you start a new Proforma invoice, follow these steps:

1. Use the [**action button**](../../../Common/UI/ActionButton.md) or the offer’s **Linked documents** panel to create a new draft proforma invoice.

2. Fill in (or edit) the required header fields:  
   - [**Customer**](../../../Common/Management/BusinessDirectory.md)  
   - **Document date**  
   - **Validity date**  
   - **Rebate** (optional)  
   - **Reference type** / **Reference number**  
   - [**Organization bank account**](../Management/OrganizationBankAccounts.md)

   ![Proforma invoice top](../Images/ProformaInvoiceNewTop.png)

3. Add items in the **Details** section by typing or scanning a **serial number**, **EAN**, or **asset name**. The system displays all matching results.

   ![Proforma invoice details edit](../Images/ProformaInvoiceNewDetailsEdit.png)

4. Save the added detail line.

   ![Proforma invoice detail saved](../Images/ProformaInvoiceNewDetailsSaved.png)

5. When the document is ready, click **Publish** to finalize it.  
   
Publishing moves the document from **Draft** to **Committed**.

> [!NOTE]  
> Committed proforma invoices cannot be edited but can be used to create **Prepayments** or serve as the basis for a final invoice.

## Editing a proforma invoice

A draft proforma invoice can be freely edited.  
You may change:

- Header fields  
- Alternative currency
- Delivery information  
- Transport  
- Detail lines (assets, quantities, pricing)  
- Content top/bottom  

Once published, the document becomes **Committed** and no further editing is allowed.

### Attachments

Files may be uploaded to provide supporting information such as contracts or customer confirmations.

### Linked documents

The linked documents section enables the creation of operational or follow-up documents and shows previously linked ones.

Typical actions and pre-fills:
- **[+ Prepayment](Prepayments.md)** – Creates a prepayment from the committed proforma; pre-fills customer, amounts, and references.  
  Inventory impact: none. Financial impact: record advance payment.
- **Proforma invoice** – Duplicate the details from the current proforma invoice to a new document
- **[Offer](Offers.md)** – Shows originating offer (if any); provides traceability from offer → proforma.

> [!NOTE]
> Available actions depend on document status (Draft vs Committed). Pre-fills vary by source document.

![Linked documents](../Images/ProformaInvoiceLinkedDocuments.png)

#### Alternative currency

The Alternative currency section allows prices in the document to be expressed in a currency different from the system’s default currency. This is typically used for international sales. Rates are taken from the [Exchange rates](../Management/ExchangeRates.md) code list.

![Sales order – Alternative currency section](../Images/SalesAlternativeCurrency.png "Alternative currency section")

When an alternative currency is selected, document prices are automatically recalculated using the specified exchange rate.

## Transport and Intrastat sections

When **Intrastat** is set to **Obliged** in **System / Configuration / Intrastat**, additional sections become available in the receive document form.

![Transport and Intrastat sections](../../Logistics/Images/ReceiveTransportInstrastat.png "Transport and Intrastat sections")


- **Transport** - Used to capture logistics-related information about how the goods were delivered.
- **Intrastat** - Used to collect data required for Intrastat reporting. These fields are only shown when Intrastat reporting is enabled for the system.

> [!NOTE]  
Several Intrastat-related values are taken from **material code lists** (Intrastat configuration), such as country and transaction nature. These fields are not freely configurable per document and depend on predefined master data.

#### Delivery section

The Delivery section defines where the goods will be shipped. It is filled automatically from the customer or vendor data but can be adjusted for each document.  

These values affect the printed document and follow-up logistics documents, but do not modify the master data.

## Menu

The document menu provides the following actions:

- **Printing**
- **Exporting**
- **Send as email**
- **Reverse document**  
- **Return to draft** (only when permitted by system rules)

![Proforma invoice menu](../Images/PrepaymentsMenu.png)

Reversing a proforma invoice removes its committed effect and creates a reversal document. See **[Reversals](../../Logistics/Documents/Reversals.md)** for more information.

## Deletion

A proforma invoice **can be deleted only in Draft state**, and only when it contains **no detail lines**.

If the draft still includes items in the **Details** section:

1. Click the material serial number to open the **Edit detail** screen.  
2. Click **Delete** inside the Edit detail window to remove the material.  
3. Repeat this for all remaining materials.

Once the document contains no materials, you can click **Delete** to remove the draft.

Committed documents **cannot** be deleted, but they can be [reversed](../../Logistics/Documents/Reversals.md).  

