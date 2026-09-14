<!-- canonical_source_url: https://tom-pit.github.io/Connected.Docs/en/Common/ -->
<!-- canonical_source_title: Common module -->

# Common

The **Common** module is not a domain; instead, it provides a set of **shared Code Lists and UI foundations** used across the entire platform.  These elements define global structures such as countries, currencies, tax rates, measurement units, and business partners.   Every functional domain — [**Sales**](../Domains/Sales/README.md), [**Supply**](../Domains/Supply/README.md), [**Logistics**](../Domains/Logistics/README.md), [**Production**](../Domains/Production/README.md)—relies on the Common module to operate correctly.

Because of this, the Common module must be configured **before** using any other domain in the platform.

Example of Common code lists in the **Sales** domain:

![Common Code Lists Examples](Images/CommonCodeListsExamples.png "Common Code Lists Examples")

> [!IMPORTANT]  
> The Common Code Lists should be the **first configuration step** when setting up the platform.  
>  
>Without these values, [**Sales**](../Domains/Sales/README.md), [**Supply**](../Domains/Supply/README.md), [**Logistics**](../Domains/Logistics/README.md), and [**System Configuration**](../Domains/System/Settings/Configuration.md) cannot function correctly.

## What is included in the Common module?

The Common module contains several categories of shared code lists used throughout the system:

- **Geography and Organizational Structure**  
- **Financial and Tax Settings**  
- **Measurement and Units**  
- **Partner and Directory Records**  
- **Text Templates and UI Behavior**

These code lists act as foundational building blocks that other domains depend on.

> [!TIP]
> See all management entries in the **[Management Index](../ManagementIndex.md)**.


### Geography & Organization

These settings define the geographic and organizational context of the company and its documents.

- **[Countries](Management/Countries.md)** – Defines allowed countries used for addresses, documents, legal formatting, and localization.  
- **[Business directory](Management/BusinessDirectory.md)** – Central database of companies, suppliers, and other legal entities.

> [!IMPORTANT]  
> Countries must be configured before setting the organization’s country in **System → Configuration → Organization** or in **Common Types Settings**.

### Financial & Currency Settings

These settings influence all monetary and financial behavior across domains.

- **[Currencies](Management/Currencies.md)** – Defines currencies available for the organization.  
- **[Tax rates](Management/TaxRates.md)** – VAT or other tax definitions used in sales and procurement.  
- **[Payment methods](../Domains/Sales/Management/PaymentMethods.md)** – Payment definitions used in Sales and Finance.  

> [!IMPORTANT]  
> Currencies must be created here **before** selecting them in:  
> - System → [Configuration](../Domains/System/Settings/Configuration.md) → Common Types Settings  
> - [Sales documents](../Domains/Sales/README.md)  
> - [Supply documents](../Domains/Supply/README.md)

### Measurement & Units

Used across assets, materials, sales documents, supply orders, logistics, and production workflows.

- **[Measure units](Management/MeasureUnits.md)** – Base measurement units used (pieces, kg, m, etc.).  

Correct configuration ensures consistency in quantities, pricing, and stock calculations.

## Partner & Business Records

Partner-related records are shared across all commercial workflows.

- **[Business directory](Management/BusinessDirectory.md)** – Shared directory of customers, suppliers, and business entities.  
- **[Banks](Management/BankAccounts.md)** – Bank definitions used in payment instructions.  
- **[Organization bank accounts](../Domains/Sales/Management/OrganizationBankAccounts.md)** – Internal company bank accounts used for invoicing.

These records ensure consistent identification of business partners across domains.

## Text & Template Configuration

These values allow consistent formatting and behavior of documents.

- **[Predefined texts](Management/PredefinedTexts.md)** – Reusable text blocks used in offers, invoices, delivery notes, and supply documents.  

## Why Common code lists must be configured first

Almost all platform workflows depend on Common settings:

| Area | Dependency |
|------|------------|
| **System → Configuration** | Needs [Countries]**(Management**/Countries.md) + [Currencies](Management/Currencies.md) before setting organization details |
| **Sales** | Requires [Currencies](Management/Currencies.md), [Tax rates](Management/TaxRates.md), [Measure units](Management/MeasureUnits.md), [Payment methods](../Domains/Sales/Management/PaymentMethods.md) |
| **Supply** | Requires [Business directory](Management/BusinessDirectory.md), [Countries](Management/Countries.md), [Currencies](Management/Currencies.md) |
| **Logistics** | Requires [Measure units](Management/MeasureUnits.md), [Countries](Management/Countries.md), [Business directory](Management/BusinessDirectory.md) |
| **Production** | Uses [Measure units](Management/MeasureUnits.md) and [Business directory](Management/BusinessDirectory.md) |

If the Common module is not configured first, users will encounter:

- missing values in dropdowns  
- inability to create sales or supply documents  
- invalid tax calculations  
- incorrect formatting on invoices and delivery notes  
- errors in system configuration  

> [!CAUTION]  
> Do not proceed with [**Sales**](../Domains/Sales/README.md), [**Supply**](../Domains/Supply/README.md), [**Logistics**](../Domains/Logistics/README.md), or [**System Configuration**](../Domains/System/Settings/Configuration.md) until all required Common Code Lists have been created.

