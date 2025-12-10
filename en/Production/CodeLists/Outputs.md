# Outputs

Outputs define the **materials produced** by an operation within a process version. Each output specifies which item is created, in what unit, and how quantities are calculated.
Outputs are managed inside an **Operation**.

To access this page, open a process version from **Production / Management / [Processes](Processes.md)**, click **[Operations](Operations.md)**, then select **Outputs** for a specific operation.

![Outputs Button](../Assets/OutputsButton.png "Outputs Button")

> [!TIP]
> For a full demonstration, see the **[Inputs & Outputs](https://www.youtube.com/watch?v=647sT70tNZc)** video tutorial.

## Schema

| Field | Description |
|-------|-------------|
| **Entity** | Select whether the output refers to a [**Material**](../../Assets/Domain/Materials.md) or a **Material tag**. |
| **Material type** | The category of the material: <br>• **[Products](../../Assets/CodeLists/Products.md)**<br>• **[Raw material](../../Assets/CodeLists/RawMaterials.md)**<br>• **[Repro materials](../../Assets/CodeLists/ReproMaterials.md)**<br>• **[Semi products](../../Assets/CodeLists/SemiProducts.md)** |
| **Material** | The specific item being produced (depends on the selected **Material type**). For example, for a product, it could be a **Packaged Coffee Beans (1kg)**. |
| **Calculation type** | Determines how the quantity is calculated: <br>• **Dynamic** – Quantity depends on production order quantities. <br>• **Static** – Quantity is fixed. |
| **Quantity** | Output amount. The [**measure unit**](../../Common/CodeLists/MeasureUnits.md) depends on the selected material (e.g., pieces, kg, meters). |
| **Ordinal** | Defines the display order of outputs (0-based). |
| **Tags** | Optional tags for grouping or filtering outputs. |

## List view

The list shows outputs linked to the selected operation, with entity type, material, quantity, and ordinal. Use **Search** to filter by name.

![Outputs list](../Assets/OutputsList.png "Outputs list")

## Creating a new output

1. Click the **action button** and choose: **Copy existing inputs** or **New**.

   ![Outputs action button](../Assets/OutputsActionButton.png "Outputs action button")

2. Fill in the required fields.

   ![Add output](../Assets/OutputsNew.png "Add output")

3. Click **Add** to save.

## Editing an output

1. Click the entry in the list.
2. Adjust fields as needed.
3. Click **Save**.

## Deletion

Click **Delete** on the Edit page to remove the output.

---