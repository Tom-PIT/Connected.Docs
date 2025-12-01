# Supplier materials

Supplier materials represent the list of materials that vendors provide to your organization. Each entry links an existing material from the Materials domain with a specific vendor and includes additional information such as the supplier’s material code, price, and delivery time.

This code list ensures that procurement processes can correctly identify which materials are available from each vendor and at what cost.

To access this code list, go to **Supply / Management / Supplier materials** in the [navigation](../../Common/UI/Navigation.md).

## Schema

| Field | Description |
|-------|-------------|
| **Vendor** | Vendor providing the material. Must exist in the [Business directory](../BusinessDirectory.md) (mandatory). |
| ****[Material type](../../Assets/Domain/Materials.md)**** | Type of material ([Raw material](../../Assets/CodeLists/RawMaterials.md), [Semi-product](../../Assets/CodeLists/SemiProducts.md), [Product](../../Assets/CodeLists/Products.md), [Repro material](../../Assets/CodeLists/ReproMaterials.md)). Must match an existing material type (mandatory). |
| ****[Material](../../Assets/Domain/Materials.md)**** | Material supplied by the vendor. Must already exist in the **Materials** domain (mandatory). |
| **Supplier code** | The vendor’s internal code for this material. |
| **Price** | Net price at which the vendor supplies the material. |
| **Delivery date** | Delivery time expressed in days. |

## Management

### List of supplier materials

The user interface contains a list of all supplier materials, showing:

- Vendor  
- Material (with its code and name)  
- Price  

A search field is available in the upper-right corner.

![Supplier materials list](../Assets/SupplierMaterialsList.png "Supplier materials list")

### Filters

The left sidebar contains the following filters:

- **Vendor**  
- **Material type**  
- **Entity**

These filters allow narrowing the results based on supplier and material category.

### Menu

The **Menu** in the top-right corner provides a single action, **Export**. Use it to export the visible list of supplier materials into a CSV file for analysis or backup purposes.


## Actions

Click the [**action button**](../../Common/UI/ActionButton.md) to display the available actions:

- **New**  
- **Import**

### New

Creates a new supplier material entry.  
The input form includes fields:

- Vendor  
- Material type  
- Material  
- Supplier code  
- Price  
- Delivery date  

![New supplier material](../Assets/SupplierMaterialsNew.png "New supplier material")

After entering the required information, click **Add** to save the record or **Cancel** to return to the list view.

### Import

The **Import** functionality allows bulk creation or updating of supplier materials using a spreadsheet file.

This screen behaves similarly to the **[Import materials](../../Assets/CodeLists/ImportMaterials.md)** page. It provides:

- File type selection (CSV or XLSX)  
- Downloadable example file  
- Drag-and-drop upload area  
- Preview of past imports  

![Supplier materials import](../Assets/SupplierMaterialsImport.png "Supplier materials import")

#### Spreadsheet structure

A supplier materials import file must contain the following columns:

```
SupplierName,MaterialCode,Price,SupplierCode,DeliveryDate
```

Example row:

```
Rivermark Woodwork,CODE003,20,SupplierMaterial001,0
```

## Editing

To edit an existing supplier material, click its entry in the list. The system opens the edit view where all fields can be modified.

When you are done editing, click **Save**. If you do not want to save the changes, click **Cancel**.

## Menu

The **Menu** in the top-right corner provides a single action:

- **Export** – Exports the visible list of supplier materials into a CSV file for analysis or backup purposes.


## Deletion

Click **Delete** on the edit screen to open the confirmation dialog:

**Are you sure you want to delete this record?**

If confirmed, the supplier material is permanently removed.

> [!NOTE]  
> A supplier material can be deleted only if it is not referenced by other records.

---

