# Sales

The **Sales** domain contains all records and documents needed to manage commercial transactions with customers. It includes [**Offers**](../Documents/Offers.md), [**Sales orders**](../Documents/SalesOrders.md), [**Delivery notes**](../Documents/DeliveryNotes.md), [**Issued invoices**](../Documents/IssuedInvoices.md), and analytical views used to understand sales performance and document flows.

Where the **[Assets](../../Assets/Domain/AssetsDomain.md)** domain defines *what* is sold, the Sales domain defines *how* it is offered, confirmed, delivered, and billed.

To access this domain, navigate to **Sales** in the [navigation](../../Common/UI/Navigation.md).

![Sales Domain](../Images/SalesDomainSitemap.png "Sales Domain")

> [!NOTE]  
> The available domains depend on each company’s configuration and business model.

## What is included in the Sales domain?

The domain is organized into several functional areas:

- **[Documents](#documents)** – all sales documents for commercial transactions  
- **[Views](#views)** – analytical screens for monitoring sales activity and performance  
- **[Management](#management)** – code lists and configuration for commercial processes

![Sales Domain Overview](../Images/SalesDomainOverview.png "Sales Domain Overview")

## Documents

The **Documents** section contains sales documents that support the lifecycle, from offers to final invoices.

![Sales Documents](../Images/SalesDomainDocuments.png "Sales Documents")

Available sales documents include:

- **[Offers](../Documents/Offers.md)** – Commercial proposals created before the sales order is confirmed.  
- **[Sales orders](../Documents/SalesOrders.md)** – Confirmed commercial commitments that drive delivery and invoicing.  
- **[Delivery notes](../Documents/DeliveryNotes.md)** – Track goods delivered to customers.  
- **[Issued invoices](../Documents/IssuedInvoices.md)** – Billing documents for delivered products or services.  
- **[Credit notes](../Documents/CreditNotes.md)** – Negative invoices correcting or refunding previous billing.  
- **[Debit notes](../Documents/DebitNotes.md)** – Additional charges applied to previous invoices.  
- **[Proforma invoices](../Documents/ProformaInvoices.md)** – Preliminary invoices issued prior to delivery or payment; do not confirm delivery.  
- **[Prepayments](../Documents/Prepayments.md)** – Manage customer advance payments.  
- **[Overdue reminders](../Documents/OverdueReminders.md)** – Notifications for unpaid or overdue invoices.  
- **[Retail issued invoices](../Documents/RetailIssuedInvoices.md)** – Sales invoices created through retail workflows; stock adjustments are handled via Logistics.  
- **[Retail proforma invoices](../Documents/RetailProformaInvoices.md)** – Retail-mode proforma documents.

Each document type contributes to the sales workflow, ensuring full traceability from initial offer to final invoice.

## Views

The **Views** section provides analytical tools used to understand the performance and behavior of sales documents.

![Sales Views](../Images/SalesDomainViews.png "Sales Views")

Available views include:

- **[Company cards](../Views/CompanyCards.md)** – High-level customer profiles summarizing commercial activity.  
- **[Delivery note reports](../Views/DeliveryNoteReports.md)** – Consolidated analysis of delivered assets grouped by customer; read-only; based on committed [delivery notes](../Documents/DeliveryNotes.md).  
- **[Sales order reports](../Views/SalesOrderReport.md)** – Consolidated analysis of ordered assets grouped by customer; read-only; based on committed [sales orders](../Documents/SalesOrders.md).  
- **[Sales order details](../Views/SalesOrderDetails.md)** – Detailed breakdown of individual sales orders.

These screens do **not** create transactions—they support analysis and decision-making.

## Management

The **Management** section contains configuration and master data required by commercial processes and financial interactions.

![Sales Management](../Images/SalesDomainManagement.png "Sales Management")

Available configuration and code lists include:

- **[Configuration](../CodeLists/SalesConfiguration.md)** – Global sales settings and behavior settings.  
- **[Business directory](../../Common/CodeLists/BusinessDirectory.md)** – Customer and partner records used throughout sales documents.  
- **[Banks](../../Common/CodeLists/Banks.md)** – Bank definitions used on invoices and payment instructions.  
- **[Payment methods](../CodeLists/PaymentMethods.md)** – Methods used for settling sales invoices.  
- **[Organization bank accounts](../CodeLists/OrganizationBankAccounts.md)** – Internal bank accounts used for outgoing billing.  
- **[Countries](../../Common/CodeLists/Countries.md)** – Geographic entries used on customer records and documents.  
- **[Measure units](../../Common/CodeLists/MeasureUnits.md)** – Consistent measurement units used in commercial documents.  
- **[Cost centers](../../Common/CodeLists/CostCenters.md)** – Classification of sales and revenue by cost center.  
- **[Currencies](../../Common/CodeLists/Currencies.md)** – Currency definitions used in price lists and invoices.  
- **[Exchange rates](../../Common/CodeLists/ExchangeRates.md)** – Daily or periodic exchange rates used for currency conversion.  
- **[Predefined texts](../../Common/CodeLists/PredefinedTexts.md)** – Standardized text blocks used throughout sales documents.  
- **[Tax rates](../../Common/CodeLists/TaxRates.md)** – Definitions of VAT and tax rates used in invoicing.  
- **[Clause templates for delivery notes](../CodeLists/ClauseTemplatesDeliveryNotes.md)** – Predefined clauses for delivery documentation.  
- **[Clause templates for issued invoices](../CodeLists/ClauseTemplatesIssuedInvoices.md)** – Predefined clauses used in invoice footers.

These elements define how sales operations behave and how commercial data is structured.

## Sales Processes

Sales operations typically follow a structured lifecycle:

### **1. Offering**  
Sales representatives create [offers](../Documents/Offers.md) that outline items, quantities, and prices.

### **2. Ordering**  
Customers confirm offers, generating [sales orders](../Documents/SalesOrders.md) that drive fulfillment and invoicing.

### **3. Delivery**  
[Delivery notes](../Documents/DeliveryNotes.md) record the movement of goods to the customer, connecting Sales with **[Logistics](../../Logistics/Domain/LogisticsDomain.md)**.

### **4. Billing**  
[Issued invoices](../Documents/IssuedInvoices.md) document customer charges, supported by [debit notes](../Documents/DebitNotes.md), [credit notes](../Documents/CreditNotes.md), and [prepayments](../Documents/Prepayments.md).

### **5. Analysis**  
Views provide insight into sales performance, customer activity, and document aging.

## Sales and Other Domains

Sales integrates with other operational domains:

| Area | Interaction |
|------|-------------|
| **[Assets](../../Assets/Domain/AssetsDomain.md)** | Defines the items, prices, and configurations used in sales documents. |
| **[Materials](../../Assets/Domain/Materials.md)** | Provides availability and stock data for planning and fulfillment. |
| **[Logistics](../../Logistics/Domain/LogisticsDomain.md)** | Manages the physical delivery of goods. |
| **[Supply](../../Supply/Domain/SupplyDomain.md)** | Ensures procurement of items sold to customers. |

## Summary

The Sales domain manages all commercial activity with customers, ensuring a complete workflow from offer to invoice. It provides the tools needed to create, track, and analyze sales documents while integrating tightly with logistics, supply, assets, and finance.

---
