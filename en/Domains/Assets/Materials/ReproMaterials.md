<!-- app_route: /management/materials/repro-materials -->
<!-- app_label: Repro materials -->
<!-- canonical_source_url: https://github.com/Tom-PIT/Connected.Docs/blob/main/en/Domains/Assets/Materials/ReproMaterials.md -->
<!-- canonical_source_title: Repro materials -->

# Repro materials

**Repro materials** are reusable or auxiliary components used to support production or internal activities. They are not final products but are essential for maintaining or assembling other materials. Examples include screws, tape, pallets, or styrofoam.

Each repro material includes important attributes—such as [measure units](../../../Common/Management/MeasureUnits.md), [tax rate](../../../Common/Management/TaxRates.md), serial number behavior, or [packaging](Packaging.md) options—to ensure consistent tracking and usage across all warehouse and production workflows. This code list contains all repro materials used by your organization.

> [!TIP]
> For a full demonstration, see the **[Repro materials](https://www.youtube.com/watch?v=ZRUwbQrAolU)** video tutorial.

> [!NOTE]  
> **Prerequisites**  
> Before managing repro materials, ensure that the following code lists are properly configured:  
> - [**Measure units**](../../../Common/Management/MeasureUnits.md)  
> - [**Tax rates**](../../../Common/Management/TaxRates.md)

To access the **Repro materials** code list, go to: **Assets / Materials / Repro materials** in the [**navigation**](../../../Common/UI/Navigation.md).

## Schema

<details open>
<summary><strong>Repro materials</strong></summary>

| Field | Description |
|-------|-------------|
| **Code** | Unique identifier of the repro material within the list of materials. For example **REP-VIJ-2**. The code must be unique across all materials. (required) |
| **Name** | Name shown in lists and documents. For example **Screw 6mm**. (required) |
| **Generate serial number** | Determines how serial numbers and material records are handled:<br>• **Auto** – each item receives a unique ascending serial number.<br>• **Same** – all items share the same serial number but remain separate records.<br>• **Identical** – all items share the same serial number and are treated as one identical record. |
| **Expiration (days)** | Number of days before expiration, used for perishable items. For example **30** or **365**. |
| **EAN** | Barcode value used for scanning. For example **57884441241**. |
| **[Measure unit](../../../Common/Management/MeasureUnits.md)** | Measure unit used to express quantities, such as **piece** or **meter**. (required) |
| **Precision** | Default number of decimal places used for values in this measure unit. For example **3** for **1.255**, or **1** for **2.5**. |
| **[Tax rate](../../../Common/Management/TaxRates.md)** | Default tax rate used in business documents. For example **22** or **9.5**. |

</details>

<details>
<summary><strong>Packaging</strong></summary>

A packaging definition describes the physical properties of a material and the alternative units used when handling it in the warehouse. This can also be set in [**Packaging**](Packaging.md).
.
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

<details>
<summary><strong>Additional</strong></summary>

| Field | Description |
|-------|-------------|
| **Description** | Short internal description specifying the material’s purpose or characteristics. |
| **Tags** | Tags used for categorization and filtering. |
| **Info link URL** | URL linking to external material information or documentation. |
| **Image URL** | Public URL pointing to the material image. |
| **External key** | Identifier in an external system used for cross-system connections. |
| **Active** | Indicates whether the material is available for use in new documents. Inactive materials cannot be added to new entries but remain visible in the history. |

</details>

<details>
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

### List of repro materials

The user interface contains a list of repro materials.

![Repro Materials](../Images/ReproMaterialsList.png "Repro Materials")

The list displays each repro material’s name, code, and serial number generation method.

A filter for **Tags** is available on the left side. A search field is available on the right for quickly finding specific materials.

## Actions

Click on the [action button](../../../Common/UI/ActionButton.md) to display the following actions:

- **Import**
- **Copy existing**
- **New**

### Import

The **Import** action allows you to import multiple repro materials at once by uploading a correctly structured spreadsheet.

See the [**Import materials**](ImportMaterials.md) documentation for full details.

### Copy existing

Click **Copy existing repro material** to create a new record based on an existing one.

![Copy Repro Material](../Images/CopyReproMaterial.png "Copy Repro Material")

After selecting a base material, all fields are pre-filled and may be edited before saving.

### New

Click **New** to open the input form for creating a new repro material.

![New Repro Material](../Images/NewReproMaterial.png "New Repro Material")

The form includes fields such as **Code**, **Name**, **Generate serial number**, **Measure unit**, **Tax rate**, and others depending on configuration.

Additional collapsible sections are available:

#### Packaging
This section allows you to review or add one or more [packaging](Packaging.md) definitions specific to the material. Each entry represents a packaging unit with its own quantity and identification.  

These packaging records can later be used in warehouse operations such as [Receives](../../Logistics/Documents/Receives.md), [Issues](../../Logistics/Documents/Issues.md), and [Inter warehouse](../../Logistics/Documents/InterWarehouse.md) transfers.

#### Additional
This section contains optional descriptive fields, such as a material description, tags, images, links, or external identifiers. These fields help provide extra context or references but do not affect stock calculations.

![Collapsible sections](../Images/MaterialPackagingAdditional.png "Collapsible sections")

After entering the required information, click **Add** to save the material or **Cancel** to return to the list.

#### Intrastat and Ledger
Use these sections to enter Intrastat and customs details used for EU trade reporting, and other accounting details.

![Materials Intrastat Ledger](../Images/MaterialsIntrastatLedger.png "Materials Intrastat and Ledger details")

> [!WARNING]
> Enter correct accounts in the **Ledger** section (e.g., stock and expense accounts). Wrong or missing values will cause posting errors later in accounting.

## Editing

To edit an existing repro material, click its **Name** in the list. The interface switches to edit mode.

![Edit Repro Material](../Images/EditReproMaterials.png "Edit Repro Material")

Make the necessary changes and click **Save**.  
Click **Cancel** to discard changes.

## Deletion

Click **Delete** on the edit screen to open a confirmation dialog: 

**Are you sure you want to delete this record?**  

If confirmed, the repro material is permanently removed; otherwise, the system keeps the record unchanged.

> [!NOTE]
> A repro material can be deleted only if no dependent records reference it (e.g., stock movements, production processes, documents).
