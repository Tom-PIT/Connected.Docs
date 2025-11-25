# Issued invoices

**Issued invoices** are financial documents sent to customers so they can pay for confirmed sales. They summarize delivered goods or services, taxes, due dates, and chosen payment methods. From the **Issued invoices** page you can also record partial or full payments directly against each invoice.

To access this page, go to **Sales / Documents / Issued invoices** in the [navigation](../../Common/UI/Navigation.md).

## How issued invoices fit into the sales workflow

Issued invoices are typically created at the end of the sales chain:

1. A customer accepts an **[Offer](Offers.md)**.  
2. A **[Sales order](SalesOrders.md)** is created and fulfilled.  
3. Goods are shipped using **[Delivery notes](DeliveryNotes.md)** and related issues.  
4. Finally, an issued invoice is created (often from the delivery note or sales order) and sent to the customer for payment.

Invoices can also be created manually as stand-alone documents when required.

## Schema

### Header fields

| Field | Description |
|-------|-------------|
| **Code** | Unique identifier of the invoice (system-generated after publishing). |
| **Purchase order code** | Optional reference to the customer’s purchase order. |
| **Customer** | Customer receiving the invoice, selected from the [Business directory](../../Common/CodeLists/BusinessDirectory.md). |
| **Issue date** | Date when the invoice is issued. |
| **Delivery date** | Date when the goods or services were delivered. |
| **Due date** | Payment deadline shown to the customer. |
| **Reference type** | Type of payment reference (e.g., structured reference, model). |
| **Reference number** | Reference number used on payment documents, based on the chosen reference type. |
| **Organization bank account** | Account where the payment should be received, selected from [Organization bank accounts](../../Common/CodeLists/OrganizationBankAccounts.md). |
| **[Cost center](../../Common/CodeLists/CostCenters.md)** | Optional allocation of revenue to a cost center. |
| **Purpose code** | Optional code describing the purpose of the invoice (if configured). |
| **Rebate** | Overall rebate applied to the total invoice amount. |
| **Content top** | Introductory text from [Predefined texts](../../Common/CodeLists/PredefinedTexts.md). |
| **Delivery** | Delivery company and address information. |
| **Content bottom** | Closing or legal text from [Predefined texts](../../Common/CodeLists/PredefinedTexts.md). |

### Detail fields

| Field | Description |
|--------|-------------|
| **Asset** | Invoiced item or service from the **Assets** domain. |
| **Quantity** | Quantity of the asset being invoiced. |
| **Net price** | Net price per unit, usually taken from price lists or the related document. |
| **Rebate (%)** | Optional line-level discount. |
| **Value** | Calculated line totals (net, tax, and gross amounts). |

### Payment method fields

| Field | Description |
|--------|-------------|
| **Payment method** | Payment option selected from [Payment methods](../../Assets/CodeLists/PaymentMethods.md). |
| **Amount** | Amount assigned to the selected payment method. Multiple methods can be combined to reach the total amount. |

## Management

### List view

The list view shows all invoices that match the selected filters and date ranges.

![Issued invoices list](../Assets/IssuedInvoicesListPartiallyPaid.png "Issued invoices list")

**Indicators**

- **Unpaid overdue** – Number and value of invoices that are past their due date and still unpaid.  
- **Total amount** – Total gross amount of invoices in the current view.  
- **Net amount / Tax** – Breakdown of total net and tax amounts.

These indicators update based on the filters on the left:

- **Document dates**
- **Delivery date**
- **Due date**
- **View**  
  - **Drafts**  
  - **Committed**  
  - **Unpaid invoices**  
  - **Partially paid invoices**  
  - **Fully paid invoices**  
  - **All**
- **Reversal state** (for reversed invoices)  
- **Customer**  
- **Payment method**

Use the **Search** bar to quickly find invoices by code, customer, or other visible values.

## Actions

### Creating a new issued invoice

Click the **action button** to create a new draft issued invoice.

![New invoice](../Assets/IssuedInvoicesNewTop.png "New issued invoice")

A draft invoice can also be created from other documents via **+ Issued invoice**, for example:

- From a [**Sales order**](SalesOrders.md)
- From a **[Delivery note](DeliveryNotes.md)**

In this case, the customer, delivery data, and line details are pre-filled from the source document.

### Editing an invoice

While the invoice is in **Draft** status you can edit all sections:

- Header fields (dates, references, customer, bank account, etc.)
- Delivery information
- **Details** – add, remove, or change invoice lines
- **Payment methods** – define how the customer is expected to pay
- **Content top** and **Content bottom** – choose predefined texts

![Details and payments](../Assets/IssuedInvoicesNewBottom.png "Invoice details and payment methods")

When you are ready, click **Publish** to commit the invoice.

### Recording payments

After an invoice is published, use the **Payment** button to record incoming payments.

![Payment dialog](../Assets/IssuedInvoicesPayment.png "Payment dialog")

In the payment dialog you can see:

- **Total cost** – Invoice gross amount and due date.  
- **Payment** – Amount being paid now and date of payment.  
- **Remaining amount** – Outstanding balance after the payment.

You can register multiple payments over time. The system automatically updates the invoice status:

- **Unpaid** – No payments recorded.  
- **Partially paid** – Some payments recorded, but an outstanding amount remains.  
- **Fully paid** – Remaining amount is zero.

> [!NOTE]  
> When an invoice is fully covered by recorded payments, it appears in the **Fully paid invoices** view. Partially paid documents appear under **Partially paid invoices**, and unpaid ones under **Unpaid invoices**.

### Menu actions

For published invoices, the menu in the top-right corner provides additional options:

![Invoice menu](../Assets/IssuedInvoicesMenu.png "Issued invoice menu")

Available actions include:

- **Printing** – Print the invoice using configured printouts.  
- **Exporting** – Export to PDF or other available formats.  
- **Send as email** – Email the invoice directly to the customer.  
- **Reverse document** – Create a reversal invoice for corrections.  
- **Return to draft** – Move the invoice back to draft status for editing (if allowed by business rules).

## Deletion

Draft invoices can be deleted from the document screen using the **Delete** button.

> [!IMPORTANT]  
> - Only **draft** invoices can be deleted.  
> - Once an invoice is published, you can no longer delete it; instead, use **Reverse document** or **Return to draft** if available.  
> - If any payments have been recorded, the invoice cannot be deleted until those payments are removed and the document is returned to draft.
