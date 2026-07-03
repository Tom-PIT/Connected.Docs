<!-- app_route: /management/materials/raw-materials -->
<!-- app_label: Raw materials -->
<!-- canonical_source_url: https://tom-pit.github.io/Connected.Docs/en/Domains/Assets/Materials/RawMaterials/ -->
<!-- canonical_source_title: Raw materials -->

# Raw materials

**Raw materials** are the basic items used in production processes or purchased for internal use. They can include wood, metal sheets, fabrics, chemicals, or any other input material needed to create finished products. Each raw material stores key information—such as[measure units](../../../Common/Management/MeasureUnits.md), [tax rate](../../../Common/Management/TaxRates.md), expiration period, or [packaging](Packaging.md)—to ensure that it can be managed consistently across the system.

This code list serves as the register of all raw materials within the materials structure.

> [!TIP]
> For a full demonstration, see the **[Raw materials](https://www.youtube.com/watch?v=kb6I-eJ0tBU)** video tutorial.

> [!NOTE]  
> **Prerequisites**  
> Before managing semi products, ensure that the following code lists are properly configured:  
> - [**Measure units**](../../../Common/Management/MeasureUnits.md)  
> - [**Tax rates**](../../../Common/Management/TaxRates.md)

To access the **Raw materials** code list, go to **Assets / Materials / Raw materials** in the [navigation](../../../Common/UI/Navigation.md).

## Schema

<details open markdown="1">
<summary><strong>Raw materials</strong></summary>

| Field                | Description |
|----------------------|-------------|
| **Code**             | Unique identifier of the raw material within the list of materials. The code must be unique across all materials. (required) |
| **Name**             | Name of the raw material displayed in lists and documents. (required) |
| **Generate serial number** | Determines how serial numbers and material records are handled:<br>• **Auto** – each item receives a unique ascending serial number.<br>• **Same** – all items share the same serial number but remain separate records.<br>• **Identical** – all items share the same serial number and are treated as one identical record. |
| **Expiration (days)** | Number of days before the material expires (useful for perishable goods). |
| **EAN**              | Barcode value used for scanning. |
| **[Base measure unit](../../../Common/Management/MeasureUnits.md)**     | Measure unit used to express quantities (e.g., piece, kg, meter). (required) |
| **Precision**        | Default number of decimal places used for values in this measure unit. For example **3** for **1.255**, or **1** for **2.5**. |
| **[Tax rate](../../../Common/Management/TaxRates.md)**         | Default tax rate used in business documents. |

</details>

<details markdown="1">
<summary><strong>Packaging</strong></summary>

A packaging definition describes the physical properties of a material and the alternative units used when handling it in the warehouse. This can also be set in [**Packaging**](Packaging.md).

| Field | Description |
|-------|-------------|
| **Material type** | Classification of the material (e.g., product, semi-product) used for packaging context. |
| **Products / Entity / Beech Table** | Example reference to the product/entity this packaging applies to. |
| **EAN** | Packaging barcode. |
| **Quantity (pc)** | Quantity represented by the packaging unit (e.g., 6 pcs per box). |
| **Alternative measure unit** | Alternative unit for handling or reporting (e.g., pack). |
| **Weight** | Enter both net and gross weight for the packaging unit. |
| **Dimensions** | Enter width, height, and depth of the packaging unit. |

</details>

<details markdown="1">
<summary><strong>Additional</strong></summary>

| Field | Description |
|-------|-------------|
| **Description**      | Short internal description of the raw material. |
| **Tags**             | Tags used for categorization and filtering. |
| **Info link URL**    | URL linking to external information or documentation. |
| **Image URL**        | Public URL pointing to the material image. |
| **External key**     | Identifier used to connect the raw material with external systems. |
| **Active**           | Indicates whether the raw material is available for use in new documents. |

</details>

<details markdown="1">
<summary><strong>Ledger and Intrastat</strong></summary>

| Field | Description |
|-------|-------------|
| [**Stock account**](../../Accounting/Management/Ledger/ChartOfAccounts.md) | Balance sheet account where the value of this material’s inventory is recorded. Use this to override the default stock account for this specific material. |
| [**Account expense**](../../Accounting/Management/Ledger/ChartOfAccounts.md) | Profit & loss account used when this material is consumed, issued from stock, or sold (e.g., Cost of Goods Sold). Use this to override the default expense account for this material. |
| [**Tariff**](../../Accounting/Management/Intrastat/Tariffs.md) | Customs tariff code used for statistical and customs reporting. |
| [**Country origin**](../../../Common/Management/Countries.md) | Country of origin used on trade and customs documents. |
| **Mass converter** | Factor used to convert the base measure unit to mass (e.g., kg). Applied in Intrastat or analytics when weight is required. |

</details>

## Management

### List of raw materials

The user interface contains a list of raw materials.

![Raw Materials](../Images/RawMaterialsList.png "Raw Materials")

A filter for **Tags** is available on the left side. A search field is
available in the upper-right corner.


## Actions

Click on the [action button](../../../Common/UI/ActionButton.md) to display the following actions:

-   [**Import**](#import-raw-materials)
-   [**Copy existing**](#copy-an-existing-raw-material)
-   **New**

## Add a new raw material

Click the [action button](../../../Common/UI/ActionButton.md) and select **New** to open the input form for adding a new semi product.  
The form includes fields such as **Code**, **Name**, **Generate serial number**, **Base measure unit**, **Tax rate**, and others depending on the configuration.

![New Raw Material](../Images/NewRawMaterial.png "New Raw Material")

Additional collapsible sections are available:

#### Packaging
This section allows you to review or add one or more [packaging](Packaging.md) definitions specific to the material. Each entry represents a packaging unit with its own quantity and identification.  

These packaging records can later be used in warehouse operations such as [Receives](../../Logistics/Documents/Receives.md), [Issues](../../Logistics/Documents/Issues.md), and [Inter warehouse](../../Logistics/Documents/InterWarehouse.md) transfers.

#### Additional
This section contains optional descriptive fields, such as a material description, tags, images, links, or external identifiers. These fields help provide extra context or references but do not affect stock calculations.

![Collapsible sections](../Images/MaterialPackagingAdditional.png "Collapsible sections")

After entering the required information, click Add to save the semi product or Cancel to return to the list view.

#### Intrastat and Ledger

Use these sections to enter Intrastat and customs details used for EU trade reporting, and other accounting details.

![Materials Intrastat Ledger](../Images/MaterialsIntrastatLedger.png "Materials Intrastat and Ledger details")

> [!WARNING]
> Enter correct accounts in the **Ledger** section (e.g., stock and expense accounts). Wrong or missing values will cause posting errors later in accounting.

### Import raw materials

Click on the [action button](../../../Common/UI/ActionButton.md) and select	import functionality to upload multiple raw materials in bulk.

See the [**Import materials**](ImportMaterials.md) documentation for full details.

### Copy an existing raw material

Click on the [action button](../../../Common/UI/ActionButton.md) and select **Copy existing** to create a new raw material based on an existing one.

![Copy Raw Material](../Images/CopyRawMaterial.png "Copy Raw Material")

## Edit a raw material

Click the raw material name on the list to edit the entry.

![Edit Raw Material](../Images/EditRawMaterial.png "Edit Raw Material")

## Delete a raw material

 Click **Delete** on the edit screen to open a confirmation dialog: 
 
 **Are you sure you want to delete this record?**  

If confirmed, the raw material is permanently removed; otherwise, the system keeps the record unchanged.

> [!NOTE]
>A raw material can be deleted only if it is not referenced by other records.

