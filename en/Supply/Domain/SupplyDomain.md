# Supply

The **Supply** domain manages all processes related to procurement, supplier interactions, and inbound material planning. It includes supplier inquiries, supply orders, planning tools, and analytical views that help maintain optimal stock levels and ensure timely replenishment.

Where the **[Sales](../../Sales/Domain/SalesDomain.md)** domain manages customer-facing activities, the Supply domain manages supplier-facing workflows that ensure materials are available when needed.

To access Supply, navigate to **Supply** in the [navigation](../../Common/UI/Navigation.md).

![Supply Domain](../Assets/SupplyDomainSitemap.png "Supply Domain")

> [!NOTE]  
> The available domains depend on each company’s configuration and business model.

## What is included in the Supply domain?

The domain is organized into several functional areas:

- **Documents** – procurement documents used to request or order materials  
- **Supply stock boundaries planning** – planning tools based on stock boundary rules  
- **Views** – analytical tools for understanding procurement trends  
- **Management** – code lists and configuration for supplier-related processes

![Supply Domain Overview](../Assets/SupplyDomainOverview.png "Supply Domain Overview")

## Documents

The **Documents** section contains procurement-related documents used to request quotations or issue supply orders to vendors.

![Supply Documents](../Assets/SupplyDomainDocuments.png "Supply Documents")

Available documents include:

- **[Inquiries](../Documents/Inquiries.md)** – Requests sent to suppliers asking for quotations or availability.  
- **[Supply orders](../Documents/SupplyOrders.md)** – Confirmed orders issued to suppliers for goods or services.

These documents initiate the procurement workflow and provide full traceability of supplier activity.

## Supply stock boundaries planning

The **Supply stock boundaries planning** section provides planning tools based on stock boundary rules and material replenishment thresholds.

It supports proactive planning and prevents stockouts or overstocking.

## Views

The **Views** section provides analytical insight into supply orders and procurement patterns.

![Supply Views](../Assets/SupplyDomainsViews.png "Supply Views")

Available views include:

- **[Supply order details](../Views/SupplyOrderDetails.md)** – Detailed information on supply orders, including items, deadlines, and supplier metrics.  
- **[Supply orders report](../Views/SupplyOrdersReport.md)** – Aggregated overview of supply order volume, trends, and statuses.

These screens support analysis and decision-making but do **not** create transactions.

## Management

The **Management** section contains configuration and master data required by procurement processes.

![Supply Management](../Assets/SupplyDomainManagement.png "Supply Management")

Available configuration and code lists include:

- **Configuration** – Supply settings and procurement rules.  
- **[Supplier materials](../CodeLists/SupplierMaterials.md)** – Mapping of which suppliers can provide which materials.  
- **[Expenses](../CodeLists/Expenses.md)** – Expense categories and procurement cost definitions.  
- **[Business directory](../../Common/CodeLists/BusinessDirectory.md)** – Supplier and partner records.  
- **[Cost centers](../../Common/CodeLists/CostCenters.md)** – Financial allocation of procurement expenses.  
- **[Currencies](../../Common/CodeLists/Currencies.md)** – Currency definitions used in quotations and supply orders.  
- **[Predefined texts](../../Common/CodeLists/PredefinedTexts.md)** – Standard text blocks used in procurement documents.  
- **[Countries](../../Common/CodeLists/Countries.md)** – Geographic information used in supplier profiles.  
- **[Measure units](../../Common/CodeLists/MeasureUnits.md)** – Measurement units used across supply documents.  
- **[Tax rates](../../Common/CodeLists/TaxRates.md)** – Tax definitions applied during procurement.

These elements determine how the procurement processes behave and how supply-related data is structured.

## Supply Processes

Procurement operations typically follow a structured lifecycle:

### **1. Inquiry**  
A quotation is requested from the supplier, providing pricing, availability, and expected delivery dates.

### **2. Ordering**  
A supply order is created and issued based on material needs or supplier agreements.

### **3. Delivery & Receipt**  
Goods are delivered by suppliers and processed through **[Logistics](../../Logistics/Domain/LogisticsDomain.md)** receives.

### **4. Planning & Replenishment**  
Stock boundaries and planning views help determine when new procurement cycles should begin.

### **5. Analysis**  
Views provide insights into supplier performance, order timelines, and overall procurement efficiency.

## Supply and Other Domains

Supply integrates with other operational domains:

| Area | Interaction |
|------|-------------|
| **[Materials](../../Assets/Domain/Materials.md)** | Defines the items being procured. |
| **[Logistics](../../Logistics/Domain/LogisticsDomain.md)** | Receives incoming goods and updates stock. |
| **[Production](../../Production/Domain/ProductionDomain.md)** | Requires purchased materials for manufacturing processes. |
| **[Sales](../../Sales/Domain/SalesDomain.md)** | Relies on procurement to ensure availability of sold items. |

## Summary

The Supply domain manages all procurement activities, ensuring timely replenishment of materials and smooth collaboration with suppliers.  

It supports inquiries, ordering, planning, and analysis, while integrating tightly with logistics, finance, production, and materials management.

---
