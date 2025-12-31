# Common

The **Common** module is not a domain; instead, it provides a set of **shared Code Lists and UI foundations** used across the entire platform.  These elements define global structures such as countries, currencies, tax rates, measurement units, and business partners.   Every functional domain—[Sales](../../Sales/Domain/SalesDomain.md), [Supply](../../Supply/Domain/SupplyDomain.md), [Logistics](../../Logistics/Domain/LogisticsDomain.md), [Production](../../Production/Domain/ProductionDomain.md)—relies on the Common module to operate correctly.

Because of this, the Common module must be configured **before** using any other domain in the platform.

Example of Common code lists in the **Sales** domain:

![Common Code Lists Examples](../Images/CommonCodeListsExamples.png "Common Code Lists Examples")

> [!IMPORTANT]  
> The Common Code Lists should be the **first configuration step** when setting up the platform.  
>  
>Without these values, [Sales](../../Sales/Domain/SalesDomain.md), [Supply](../../Supply/Domain/SupplyDomain.md), [Logistics](../../Logistics/Domain/LogisticsDomain.md), and [System Configuration](../../System/Settings/Configuration.md) cannot function correctly.

## What is included in the Common module?

The Common module contains several categories of shared code lists used throughout the system:

- **Geography and Organizational Structure**  
- **Financial and Tax Settings**  
- **Measurement and Units**  
- **Partner and Directory Records**  
- **Text Templates and UI Behavior**

These code lists act as foundational building blocks that other domains depend on.

### Geography & Organization

These settings define the geographic and organizational context of the company and its documents.

- **[Countries](../CodeLists/Countries.md)** – Defines allowed countries used for addresses, documents, legal formatting, and localization.  
- **[Business directory](../CodeLists/BusinessDirectory.md)** – Central database of companies, suppliers, and other legal entities.

> [!IMPORTANT]  
> Countries must be configured before setting the organization’s country in **System → Configuration → Organization** or in **Common Types Settings**.

### Financial & Currency Settings

These settings influence all monetary and financial behavior across domains.

- **[Currencies](../CodeLists/Currencies.md)** – Defines currencies available for the organization.  
- **[Exchange rates](../CodeLists/ExchangeRates.md)** – Defines exchange rates between currencies.  
- **[Tax rates](../CodeLists/TaxRates.md)** – VAT or other tax definitions used in sales and procurement.  
- **[Payment methods](../../Sales/CodeLists/PaymentMethods.md)** – Payment definitions used in Sales and Finance.  

> [!IMPORTANT]  
> Currencies must be created here **before** selecting them in:  
> - System → [Configuration](../../System/Settings/Configuration.md) → Common Types Settings  
> - [Sales documents](../../Sales/Domain/SalesDomain.md)  
> - [Supply documents](../../Supply/Domain/SupplyDomain.md)

### Measurement & Units

Used across assets, materials, sales documents, supply orders, logistics, and production workflows.

- **[Measure units](../CodeLists/MeasureUnits.md)** – Base measurement units used (pieces, kg, m, etc.).  

Correct configuration ensures consistency in quantities, pricing, and stock calculations.

## Partner & Business Records

Partner-related records are shared across all commercial workflows.

- **[Business directory](../CodeLists/BusinessDirectory.md)** – Shared directory of customers, suppliers, and business entities.  
- **[Banks](../CodeLists/BankAccounts.md)** – Bank definitions used in payment instructions.  
- **[Organization bank accounts](../../Sales/CodeLists/OrganizationBankAccounts.md)** – Internal company bank accounts used for invoicing.

These records ensure consistent identification of business partners across domains.

## Text & Template Configuration

These values allow consistent formatting and behavior of documents.

- **[Predefined texts](../CodeLists/PredefinedTexts.md)** – Reusable text blocks used in offers, invoices, delivery notes, and supply documents.  

## Why Common code lists must be configured first

Almost all platform workflows depend on Common settings:

| Area | Dependency |
|------|------------|
| **System → Configuration** | Needs [Countries](../CodeLists/Countries.md) + [Currencies](../CodeLists/Currencies.md) before setting organization details |
| **Sales** | Requires [Currencies](../CodeLists/Currencies.md), [Tax rates](../CodeLists/TaxRates.md), [Measure units](../CodeLists/MeasureUnits.md), [Payment methods](../../Sales/CodeLists/PaymentMethods.md) |
| **Supply** | Requires [Business directory](../CodeLists/BusinessDirectory.md), [Countries](../CodeLists/Countries.md), [Currencies](../CodeLists/Currencies.md) |
| **Logistics** | Requires [Measure units](../CodeLists/MeasureUnits.md), [Countries](../CodeLists/Countries.md), [Business directory](../CodeLists/BusinessDirectory.md) |
| **Production** | Uses [Measure units](../CodeLists/MeasureUnits.md) and [Business directory](../CodeLists/BusinessDirectory.md) |

If the Common module is not configured first, users will encounter:

- missing values in dropdowns  
- inability to create sales or supply documents  
- invalid tax calculations  
- incorrect formatting on invoices and delivery notes  
- errors in system configuration  

> [!CAUTION]  
> **Do not proceed with [Sales](../../Sales/Domain/SalesDomain.md), [Supply](../../Supply/Domain/SupplyDomain.md), [Logistics](../../Logistics/Domain/LogisticsDomain.md), or [System Configuration](../../System/Settings/Configuration.md) until all required Common Code Lists have been created.**  

---

