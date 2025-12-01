# Assets

The **Assets** domain contains all records related to the goods and services your company offers and prices—whether for sales, internal use, or catalog presentation.

Assets differ from *materials* in that assets are **commercial items**: they represent what is sold to customers, while materials represent what is used internally in production or stock processes.  

For example, an **asset** might be a *Complete Laptop Set* sold as a packaged offering that includes a laptop, a carrying bag, and a mouse. The individual parts of that set—such as the **mouse**, the **laptop**, or even the internal **chips** inside the laptop—would be considered **materials**, because they are components used to build, assemble, or support the final commercial product. See the comparison [Assets vs. Materials](#assets-vs-materials) for more information.

This domain groups together all elements needed to define, price, and organize your asset catalog.


To access the Assets domain, navigate to **Assets** in the [navigation](../../Common/UI/Navigation.md).

![Assets Domain](../Assets/AssetsSitemap.png)

> [!NOTE]  
> The available domains depend on each company’s configuration and business model.

## What is included in the Assets domain?

The domain is structured into several functional areas:

- **[Assets](../CodeLists/Assets.md)** – Defines the goods and services offered to customers. Each asset includes prices, tax settings, descriptive fields, and optional component details.

- **[Asset price lists](../CodeLists/AssetPriceLists.md)** – Used to prepare customer-specific selling prices for selected assets. Price lists support validity periods, company-specific pricing, and quantity-based discount ranges.

- **[Materials](Materials.md)** – Materials are used to *build* assets or represent items handled in logistics workflows (stock, receives, issues, etc.). Unlike assets, materials are operational internal units.

    - **[Products](../CodeLists/Products.md)**
    - **[Raw materials](../CodeLists/RawMaterials.md)**
    - **[Repro materials](../CodeLists/ReproMaterials.md)**
    - **[Semi products](../CodeLists/SemiProducts.md)**

- **[Management](../CodeLists)** – Contains additional configurable elements such as [**Tax rates**](../../Common/CodeLists/TaxRates.md) and [**Measure units**](../../Common/CodeLists/MeasureUnits.md). These define the structure and behavior of assets and pricing.

## Assets vs. Materials

Understanding the distinction between these two concepts is essential. Although both represent items managed within your organization, they serve very different purposes.

- **[Assets](../CodeLists/Assets.md)** define what you *sell* to customers.
- **[Materials](Materials.md)** define what you *use* internally in production and logistics.

The table below summarizes the key differences and helps determine where each type of item belongs.

| Aspect | [**Assets**](../CodeLists/Assets.md) | [**Materials**](Materials.md) |
|--------|--------------------------------------|-------------------------------------------|
| **Purpose** | Commercial items offered or sold to customers. | Operational items used internally in production or logistics. |
| **Role in the system** | Appear in price lists, catalogs, offers, invoices, etc. | Appear in stock, receives, issues, production, and warehouse operations. |
| **Examples** | Finished goods, service items, catalog items. | Raw materials, components, semi-finished goods, packaging, repro materials. |
| **Used in** | Sales processes (offers, invoices, contracts). | Logistics processes (stock handling, production, BOMs). |
| **Pricing** | Uses *asset price lists* for customer-specific pricing. | Uses *material price lists* for procurement and costing. |
| **Composition** | May contain material components via asset details. | May be included as parts of BOMs or asset structures. |
| **External visibility** | Visible to customers. | Internal only; customers never see material records. |
| **Lifecycle** | Market-oriented (driven by commercial strategy). | Production-oriented (driven by operational needs). |

---