# Assets

An **Asset** represents an item or service that can be *sold* or *invoiced* within the system. Unlike **materials**—which are used for stock tracking, logistics, or production—**assets are commercial items** intended for pricing, offering, and billing.

Assets may represent:

- **Goods** (e.g., a finished product offered to customers)  
- **Services** (e.g., installation, transport, consulting)

Assets do **not** participate in stock movements. Instead, they define sales-ready items with their own price, tax rate, and properties. An asset may optionally reference materials when the sold product is also tracked in stock.

To access this screen, go to **Assets / Assets** in the [navigation](../../Common/UI/Navigation.md).

## Schema

| Field | Description |
|-------|-------------|
| **Code** | Unique identifier for the asset (mandatory). |
| **Name** | Display name of the asset (mandatory). |
| **Type** | Whether the asset is a *Good* or a *Service* (mandatory). |
| [**Tax rate**](../../Common/CodeLists/TaxRates.md) | Applicable tax rate (optional). |
| [**Measure unit**](../../Common/CodeLists/MeasureUnits.md) | Unit used to display and price the asset (mandatory). |
| **Item price net** | Net unit price of the asset. |
| **Net weight (kg)** | Weight of the item, if applicable (default = 0). |
| **EAN** | Barcode number (optional). |
| **Tags** | Optional classification labels. |
| **Description** | Additional text explaining the asset. |
| **Details** | List of asset components (e.g., linked materials or quantities). |

## Actions

### Adding a new asset

Click the **action button** to create a new asset. The following fields must be entered before saving:

- **Code**  
- **Name**  
- **Type**  
- **Measure unit**

Optional fields such as **Tax rate**, **Item price net**, **EAN**, **Tags**, and **Additional** information may also be filled in.

#### Details section

After saving the asset, you may add **asset details**. These allow linking the asset to other entities such as materials (for example, when a sold product corresponds to a stock-tracked item).

Each detail includes:

- **Type** (e.g., Products)  
- **Entity** (selected material or item)  
- **Quantity**

![Add asset detail](../Images/AssetsAddAssetDetail1.png "Add asset detail")  
![Asset details list](../Images/AssetsAddAssetDetail2.png "Asset details list")

### Import

The **Import** action opens the *Import by material* form, allowing quick creation of assets based on existing materials.

Users can select:

- **Type**  
- **Material code**  
- **Item price net**  
- **Quantity**

![Import assets](../Images/AssetsImport.png "Import assets")

Click **Import** to create asset entries or **Cancel** to exit without changes.

## Filters

You can filter the Assets list using:

- **View**: Enabled / Disabled  
- **Type**: Goods / Service  
- **Tags**  

These filters help locate specific assets and simplify management of large asset catalogs.

## Deletion

Click **Delete** on the edit screen to remove the selected asset.

A confirmation dialog appears:

**Are you sure you want to delete the record?**

If confirmed, the asset is permanently removed. If the asset is referenced in other documents or records, deletion may be blocked until dependencies are resolved.

___
