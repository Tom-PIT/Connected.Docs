# Raw materials

Raw materials represent the base materials used in production processes.
They may be purchased, stored, consumed in manufacturing, or used within
internal operations. Each raw material includes essential
properties---such as expiration period, tax rate, and measure
unit---which ensure accurate and standardized management within the
system.

This code list serves as the register of all raw materials within the
materials structure.

For a detailed explanation of how raw material management works, watch
the [Raw Materials](https://www.youtube.com/watch?v=kb6I-eJ0tBU) video.

> [!NOTE]  
> **Prerequisites**  
> Before managing semi products, ensure that the following code lists are properly configured:  
> - [**Measure units**](../../Common/CodeLists/MeasureUnits.md)  
> - [**Tax rates**](../../Common/CodeLists/TaxRates.md)

------------------------------------------------------------------------

## Schema

| Field                | Description |
|----------------------|-------------|
| **Code**             | Unique identifier of the raw material within the list of materials. The code must be unique across all materials. |
| **Name**             | Name of the raw material displayed in lists and documents. |
| **Generate serial number** | Defines how the system assigns serial numbers. |
| **Expiration (days)** | Number of days before the material expires (useful for perishable goods). |
| **EAN**              | Barcode value used for scanning. |
| **Measure unit**     | Measure unit used to express quantities (e.g., piece, kg, meter). |
| **Tax rate**         | Default tax rate used in business documents. |
| **Precision**        | Default number of decimal places for values and quantities. |
| **Description**      | Short internal description of the raw material. |
| **Tags**             | Tags used for categorization and filtering. |
| **Info link URL**    | URL linking to external information or documentation. |
| **Image URL**        | Public URL pointing to the material image. |
| **External key**     | Identifier used to connect the raw material with external systems. |
| **Active**           | Indicates whether the raw material is available for use in new documents. |


## Management

To access the **Raw materials** code list, go to **Assets / Materials /
Raw materials** in the [navigation](../../Common/UI/Sitemap.md).

### List of Raw materials

The user interface contains a list of raw materials.

![Raw Materials](../Assets/RawMaterials.png "Raw Materials")

A filter for **Tags** is available on the left side. A search field is
available in the upper-right corner.

------------------------------------------------------------------------

## Actions

Click on the action button to display the following actions:

-   **Import**
-   **Copy existing**
-   **New**

### Import

Use the import functionality to upload multiple raw materials in bulk.\
See **Import materials** for details.

### Copy existing

Allows creating a new raw material based on an existing one.

![Copy Raw Material](../Assets/CopyRawMaterial.png "Copy Raw Material")

### New

Opens the form for adding a new raw material.

![New Raw Material](../Assets/NewRawMaterial.png "New Raw Material")

------------------------------------------------------------------------

## Editing

Click the raw material name to edit the entry.

![Edit Raw Material](../Assets/EditRawMaterial.png "Edit Raw Material")

------------------------------------------------------------------------

## Deletion

A raw material can be deleted only if it is not referenced by other
records.
