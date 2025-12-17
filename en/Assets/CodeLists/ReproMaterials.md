# Repro materials

**Repro materials** are reusable or auxiliary components used to support production or internal activities. They are not final products but are essential for maintaining or assembling other materials. Examples include screws, tape, pallets, or styrofoam.

Each repro material includes important attributes—such as [measure units](../../Common/CodeLists/MeasureUnits.md), [tax rate](../../Common/CodeLists/TaxRates.md), serial number behavior, or [packaging](Packaging.md) options—to ensure consistent tracking and usage across all warehouse and production workflows. This code list contains all repro materials used by your organization.

> [!TIP]
> For a full demonstration, see the **[Repro materials](https://www.youtube.com/watch?v=ZRUwbQrAolU)** video tutorial.

> [!NOTE]  
> **Prerequisites**  
> Before managing repro materials, ensure that the following code lists are properly configured:  
> - [**Measure units**](../../Common/CodeLists/MeasureUnits.md)  
> - [**Tax rates**](../../Common/CodeLists/TaxRates.md)

To access the **Repro materials** code list, go to: **Assets / Materials / Repro materials** in the [navigation](../../Common/UI/Navigation.md).

## Schema

| Field | Description |
|-------|-------------|
| **Code** | Unique identifier of the repro material within the list of materials. For example **REP-VIJ-2**. The code must be unique across all materials. |
| **Name** | Name shown in lists and documents. For example **Screw 6mm**. |
| **Generate serial number** | Determines how serial numbers and material records are handled:<br>• **Auto** – each item receives a unique ascending serial number.<br>• **Same** – all items share the same serial number but remain separate records.<br>• **Identical** – all items share the same serial number and are treated as one identical record. |
| **Expiration (days)** | Number of days before expiration, used for perishable items. For example **30** or **365**. |
| **EAN** | Barcode value used for scanning. For example **57884441241**. |
| **Measure unit** | Measure unit used to express quantities, such as **piece** or **meter**. |
| **Tax rate** | Default tax rate used in business documents. For example **22** or **9.5**. |
| **Precision** | Default number of decimal places used for values in this measure unit. For example **3** for **1.255**, or **1** for **2.5**. |
| **Description** | Short internal description specifying the material’s purpose or characteristics. |
| **Tags** | Tags used for categorization and filtering. |
| **Info link URL** | URL linking to external material information or documentation. |
| **Image URL** | Public URL pointing to the material image. |
| **External key** | Identifier in an external system used for cross-system connections. |
| **Active** | Indicates whether the material is available for use in new documents. Inactive materials cannot be added to new entries but remain visible in the history. |

## Management

### List of repro materials

The user interface contains a list of repro materials.

![Repro Materials](../Assets/ReproMaterialsList.png "Repro Materials")

The list displays each repro material’s name, code, and serial number generation method.

A filter for **Tags** is available on the left side. A search field is available on the right for quickly finding specific materials.

## Actions

Click on the [action button](../../Common/UI/ActionButton.md) to display the following actions:

- **Import**
- **Copy existing**
- **New**

### Import

The **Import** action allows you to import multiple repro materials at once by uploading a correctly structured spreadsheet.

See the [**Import materials**](ImportMaterials.md) documentation for full details.

### Copy existing

Click **Copy existing repro material** to create a new record based on an existing one.

![Copy Repro Material](../Assets/CopyReproMaterial.png "Copy Repro Material")

After selecting a base material, all fields are pre-filled and may be edited before saving.

### New

Click **New** to open the input form for creating a new repro material.

![New Repro Material](../Assets/NewReproMaterial.png "New Repro Material")

The form includes fields such as **Code**, **Name**, **Generate serial number**, **Measure unit**, **Tax rate**, and others depending on configuration.

Additional collapsible sections are available:

#### Packaging
This section allows you to review or add one or more [packaging](Packaging.md) definitions specific to the material. Each entry represents a packaging unit with its own quantity and identification.  

These packaging records can later be used in warehouse operations such as [Receives](../../Logistics/Documents/Receives.md), [Issues](../../Logistics/Documents/Issues.md), and [Inter warehouse](../../Logistics/Documents/InterWarehouse.md) transfers.

#### Additional
This section contains optional descriptive fields, such as a material description, tags, images, links, or external identifiers. These fields help provide extra context or references but do not affect stock calculations.

![Collapsible sections](../Assets/MaterialPackagingAdditional.png "Collapsible sections")

After entering the required information, click **Add** to save the material or **Cancel** to return to the list.

## Editing

To edit an existing repro material, click its **Name** in the list. The interface switches to edit mode.

![Edit Repro Material](../Assets/EditReproMaterials.png "Edit Repro Material")

Make the necessary changes and click **Save**.  
Click **Cancel** to discard changes.

## Deletion

Click **Delete** on the edit screen to open a confirmation dialog: 

**Are you sure you want to delete this record?**  

If confirmed, the repro material is permanently removed; otherwise, the system keeps the record unchanged.

> [!NOTE]
> A repro material can be deleted only if no dependent records reference it (e.g., stock movements, production processes, documents).

---
