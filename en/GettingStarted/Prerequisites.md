<!-- canonical_source_url: https://tom-pit.github.io/Connected.Docs/en/GettingStarted/Prerequisites/ -->
<!-- canonical_source_title: Prerequisites -->

# Prerequisites

Complete these steps to prepare the system for first use. This guide links to the right pages and avoids repeating details.

The system may initially be empty of the basic data required for day‑to‑day business (countries, currencies, tax rates, measure units, partners, items, warehouses, etc.). These values must be entered via the corresponding code lists before documents and workflows can be used.

> [!TIP]
> Follow this guide step‑by‑step to configure the platform. Use the links to open each code list or setting if you need further details, then return to this Prerequisites page to continue with the next step.

### Overview of required steps:

1. Create essential common code lists: **[Countries](../Common/Management/Countries.md)**, **[Currencies](../Common/Management/Currencies.md)**, **[Tax rates](../Common/Management/TaxRates.md)**, **[Measure units](../Common/Management/MeasureUnits.md)**, **[Banks](../Common/Management/Banks.md)**
2. Configure system settings: **[System configuration](../Domains/System/Settings/Configuration.md)** (organization identity, default country and currency)
3. Configure payment settings: **[Payment methods](../Domains/Sales/Management/PaymentMethods.md)**, **[Organization bank accounts](../Domains/Sales/Management/OrganizationBankAccounts.md)**
4. Add business partners: **[Business directory](../Common/Management/BusinessDirectory.md)**
5. Add materials and assets: material types — **[Products](../Domains/Assets/Materials/Products.md)**, **[Semi products](../Domains/Assets/Materials/SemiProducts.md)**, **[Raw materials](../Domains/Assets/Materials/RawMaterials.md)**, **[Repro materials](../Domains/Assets/Materials/ReproMaterials.md)**; packaging — **[Packaging](../Domains/Assets/Materials/Packaging.md)**; assets — **[Assets](../Domains/Assets/Assets/Assets.md)**
6. Set up warehouses and locations (if applicable): **[Warehouses](../Domains/Logistics/Management/Warehouses.md)**, **[Locations](../Domains/Logistics/Management/Locations.md)**, **[Organization units](../Domains/Production/Management/OrganizationUnits.md)**, **[Warehouse locations](../Domains/Production/Management/WarehouseLocations.md)**

> [!TIP]
> A **code list** is shared master data used across documents and domains (e.g., countries, currencies, tax rates, measure units). Configure these first so forms, dropdowns, and calculations work correctly.

## Prerequisites steps

### 1. Create essential Common code lists

These shared code lists are required by **[Sales](../Domains/Sales/README.md)**, **[Supply](../Domains/Supply/README.md)**, **[Logistics](../Domains/Logistics/README.md)**, **[Production](../Domains/Production/README.md)**, and **[System](../Domains/System/Settings/Configuration.md)**:

- **[Countries](../Common/Management/Countries.md)** — list of countries used for addresses, localization, and document formatting  
  Go to: **Sales / Management / Countries**
- **[Currencies](../Common/Management/Currencies.md)** — currencies available for pricing, documents, and financial reports  
  Go to: **Sales / Management / Currencies**
- **[Tax rates](../Common/Management/TaxRates.md)** — VAT and other tax definitions applied on sales and supply documents  
  Go to: **Sales / Management / Tax rates**
- **[Measure units](../Common/Management/MeasureUnits.md)** — base units (kilograms, meters, pieces, etc.) used for quantities and calculations  
  Go to: **Sales / Management / Measure units**
- **[Banks](../Common/Management/Banks.md)** — list of banks used to register organization and partner bank accounts  
  Go to: **Sales / Management / Banks**

> [!NOTE]
> Domains and System settings depend on these values for correct behavior.

> [!IMPORTANT]
>
> Common code lists must be created before selecting them in System configuration or domain documents. See **[Common domain](../Common/README.md)** for details.

<!-- app_route: /management/configuration -->
<!-- app_label: Configuration -->

### 2. Configure System settings

Set the organization and global defaults used across all modules:
- **[System configuration](../Domains/System/Settings/Configuration.md)** — organization identity, legal data, footer; default country and currency  
  Go to: **System / Configuration**
  - Configure Organization (identity, legal details, footer)
  - Set Common Types (default Country, default Currency)

<!-- app_route: /sitemap/sales.management -->
<!-- app_label: Sales Management -->

### 3. Configure payment settings (Sales)

If your scenarios include Sales documents, configure payment data:
- **[Payment methods](../Domains/Sales/Management/PaymentMethods.md)** — supported customer payment types (bank transfer, card, cash, etc.)  
  Go to: **Sales / Management / Payment methods**
- **[Organization bank accounts](../Domains/Sales/Management/OrganizationBankAccounts.md)** — company bank accounts shown on invoices and used for payments  
  Go to: **Sales / Management / Organization bank accounts**

> [!NOTE]
> Invoices and prepayments require valid payment definitions.

<!-- app_route: /management/contacts/companies -->
<!-- app_label: Business directory -->

### 4. Add business partners (Business directory)

Add business partners (customers, vendors, cooperators) to use them across procurement, sales, and logistics:
- **[Business directory](../Common/Management/BusinessDirectory.md)** — centralized list of customers, suppliers, and partner entities  
  Go to: **Sales / Management / Business directory**

> [!NOTE]
> Documents need partner data (customer, supplier) to be created.

<!-- app_route: /sitemap/assets -->
<!-- app_label: Assets -->

### 5. Materials and Assets

Add materials and assets that will be used in documents and stock operations according to your use-case:
- Material types:
  - **[Products](../Domains/Assets/Materials/Products.md)** — finished goods you sell or stock
  - **[Semi products](../Domains/Assets/Materials/SemiProducts.md)** — intermediate goods used in production
  - **[Raw materials](../Domains/Assets/Materials/RawMaterials.md)** — base materials consumed in production
  - **[Repro materials](../Domains/Assets/Materials/ReproMaterials.md)** — consumables and auxiliary materials (screws, glue, varnish)
  
  Go to: **Assets / Materials**
- Packaging:
  - **[Packaging](../Domains/Assets/Materials/Packaging.md)** — defines how a material is packaged (quantity, weight, dimensions, optional alternative measure units)
- Assets:
  - **[Assets](../Domains/Assets/Assets/Assets.md)** — catalog of goods and services with pricing and tax info.  
    Go to: **Assets / Assets**

> [!NOTE]
> Sales and production documents require defined items and resources.

<!-- app_route: /sitemap/logistics.management -->
<!-- app_label: Warehouse Management -->

### 6. Set up warehouses and locations (if applicable)

For logistics or production scenarios involving stock:
- **[Warehouses](../Domains/Logistics/Management/Warehouses.md)** — storage sites where stock is held  
  Go to: **Logistics / Management / Warehouses**
- **[Locations](../Domains/Logistics/Management/Locations.md)** — bin/shelf locations inside warehouses for precise placement  
  Go to: **Logistics / Management / Locations**
- **[Organization units](../Domains/Production/Management/OrganizationUnits.md)** — production areas, lines, or cells used for planning and execution  
  Go to: **Production / Management / Organization units**
- **[Warehouse locations](../Domains/Production/Management/WarehouseLocations.md)** —  links organization units to physical warehouse locations for staging inputs/outputs  
  Go to: **Production / Management / Warehouse locations**

> [!NOTE]
> Stock operations require defined storage sites and locations.

## Conclusion
You have now added the minimum required data to carry out a standard business process. With core code lists, system defaults, payment setup, partners, items, and storage locations in place:
- Forms and dropdown menus resolve correctly across domains
- Documents can be created without missing mandatory values
- Stock movements and invoices can be executed end-to-end

### Next steps
Explore end-to-end scenarios to see how these prerequisites fit into workflows:
- **[Sales process (with prepayment)](SalesProcessWithPrepayment.md)**
- **[Sales process (without prepayment)](SalesProcessWithoutPrepayment.md)**