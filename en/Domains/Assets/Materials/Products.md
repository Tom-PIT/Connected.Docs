<!-- app_route: /management/materials/products -->
<!-- app_label: Products -->
<!-- canonical_source_url: https://github.com/Tom-PIT/Connected.Docs/blob/main/en/Domains/Assets/Materials/Products.md -->
<!-- canonical_source_title: Products -->

# Products

**Products** are the final goods that your company manufactures or purchases. These items can be sold to customers, stored in the warehouse, or used in internal processes. Examples of products include Oak table, Office chair, LED lamp, or Garden bench.

Each product contains important information—such as [measure units](../../../Common/Management/MeasureUnits.md), [tax rate](../../../Common/Management/TaxRates.md), expiration period, or [packaging](Packaging.md)—that ensures it is managed consistently across stock, sales, and production documents. This code list represents all finished products available in your catalog.

> [!TIP]
> For a full demonstration, see the **[Product materials](https://www.youtube.com/watch?v=FcrJ_IHQYeA)** video tutorial.

> [!NOTE]  
> **Prerequisites**  
> Before managing products, ensure that the following code lists are properly configured:  
> - [**Measure units**](../../../Common/Management/MeasureUnits.md)  
> - [**Tax rates**](../../../Common/Management/TaxRates.md)

To access the **Products** code list, go to **Assets / Materials / Products** in the [navigation](../../../Common/UI/Navigation.md).

## Schema

<details open>
<summary><strong>Product</strong></summary>

| Field | Description |
|-------|-------------|
| **Code** | Unique identifier of the product within the list of materials. For example **2625001** or **MIZ-ČLS**. The code must be unique across all materials. (required) |
| **Name** | Name of the product shown in lists and documents. For example **Table – Oak**. (required) |
| **Generate serial number** | Determines how serial numbers and material records are handled:<br>• **Auto** – each item receives a unique ascending serial number.<br>• **Same** – all items share the same serial number but remain separate records.<br>• **Identical** – all items share the same serial number and are treated as one identical record. |
| **Expiration (days)** | Number of days before expiration, used for perishable goods. For example **30** or **365**. |
| **EAN** | Barcode value used for scanning. For example **3831234567890**. |
| **[Base measure unit](../../../Common/Management/MeasureUnits.md)** | Measure unit used to express quantities, such as **piece** or **meter**. (required) |
| **Precision**        | Default number of decimal places used for values in this measure unit. For example **3** for **1.255**, or **1** for **2.5**. |
| **[Tax rate](../../../Common/Management/TaxRates.md)** | Default tax rate used in business documents. For example **22** or **9.5**. |

</details>

<details>
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

<details>
<summary><strong>Additional</strong></summary>

| Field | Description |
|-------|-------------|
| **Description** | Short internal description explaining the use or specifications of the product. For example **Solid oak, oiled**. |
| **Tags** | Tags used for categorization and filtering. For example **furniture**, **premium**. |
| **Info link URL** | URL linking to external product information or documentation. For example *https://example.domain/info*. |
| **Image URL** | Public URL pointing to the product image. For example *https://example.domain/images/product.jpg*. |
| **External key** | Identifier in an external system used for cross-system record linking, for example **SAP-4711**. |

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

### List of products

The user interface contains a list of products. If no record exists yet, the list is empty.

![Products](../Images/ProductsList.png "Products")

The list displays each product’s name, code, and serial number generation method.

A filter for **Tags** is available on the left side of the screen. A search field is available in the upper-right corner to quickly locate specific products.

## Actions

Click on the [action button](../../../Common/UI/ActionButton.md) to display the following actions:

- [**Import**](#import-products)
- [**Copy existing**](#copy-an-existing-product)
- **New**

### Add a new product

Click on the [action button](../../../Common/UI/ActionButton.md) and select **New** to open the input form for adding a new product. The form includes fields such as **Code**, **Name**, **Generate serial number**, **Base measure unit**, **Tax rate**, and others depending on the configuration.

![New Product](../Images/NewProduct.png "New Product")

Additional collapsible sections are available:

#### Packaging

This section allows you to review or add one or more [packaging](Packaging.md) definitions specific to the material. Each entry represents a packaging unit with its own quantity and identification.  

These packaging records can later be used in warehouse operations such as [Receives](../../Logistics/Documents/Receives.md), [Issues](../../Logistics/Documents/Issues.md), and [Inter warehouse](../../Logistics/Documents/InterWarehouse.md) transfers.

#### Intrastat and Ledger

Use these sections to enter Intrastat and customs details used for EU trade reporting, and other accounting details.

![Materials Intrastat Ledger](../Images/MaterialsIntrastatLedger.png "Materials Intrastat and Ledger details")

> [!WARNING]
> Enter correct accounts in the **Ledger** section (e.g., stock and expense accounts). Wrong or missing values will cause posting errors later in accounting.

#### Additional

This section contains optional descriptive fields, such as a material description, tags, images, links, or external identifiers. These fields help provide extra context or references but do not affect stock calculations.

![Collapsible sections](../Images/MaterialPackagingAdditional.png "Collapsible sections")

After entering the required information, click **Add** to save the product or **Cancel** to return to the list view.

### Import products

Click on the [action button](../../../Common/UI/ActionButton.md) and select **Import** to import multiple product materials at once by preparing and uploading a correctly structured spreadsheet.  

See the [**Import materials**](ImportMaterials.md) documentation for full details.

### Copy an existing product

Click on the [action button](../../../Common/UI/ActionButton.md) and select **Copy existing product** to create a new product based on an existing one. A selection list appears with the available base products.

![Copy Product](../Images/CopyProduct.png "Copy Product")

After selecting the base product, all fields are pre-filled and can be edited before saving.


## Edit a product

To edit an existing product, click the product’s **Name** in the list. The interface switches to edit mode, displaying all fields for modification. Click **Save** to apply changes or **Cancel** to discard them.

![Edit Product](../Images/EditProduct.png "Edit Product")

## Delete a product

Click **Delete** on the edit screen to open a confirmation dialog: 

**Are you sure you want to delete this record?**  

If confirmed, the product is permanently removed; otherwise, the system keeps the record unchanged.

> [!NOTE]
> A product can be deleted only if it is not referenced by dependent entries, such as stock movements, documents, or material structures.  
