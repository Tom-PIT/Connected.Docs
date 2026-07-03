<!-- app_route: /warehouse/documents/material-analysis --> 
<!-- app_label: Material analysis --> 
<!-- canonical_source_url: https://tom-pit.github.io/Connected.Docs/en/Domains/Logistics/Documents/MaterialAnalysis/ --> 
<!-- canonical_source_title: Material analysis -->

# Material analysis

Material analysis documents list the materials that were received and require analysis or testing based on rules configured in **[Material analysis management](../Management/MaterialAnalysisManagement.md)**. Use this screen to review the required checks, mark materials as passed, and publish the results.

> [!NOTE]
> Material analysis documents are created automatically when receiving materials that have an analysis configured in the [**Material analysis management**](../Management/MaterialAnalysisManagement.md) screen.

> [!TIP]
> For a full demonstration, see the **[Material analysis](https://www.youtube.com/watch?v=aJhceUVcusw)** video

To access **Material analysis**, go to **Logistics / Documents / Material analysis** in the [navigation](../../../Common/UI/Navigation.md).

## Schema

| Field | Description |
|-------|-------------|
| [**Code**](../../../Common/UI/DocumentCodes.md) | System‑generated identifier of the material analysis document. |
| **Document date** | Date when the analysis document was created. |
| [**Material**](../../Assets/Materials/README.md) | The material under analysis (as defined by the receipt and analysis configuration). |
| **Source** | Serial number of the material received. |
| **Status** | Analysis status: **Not set**, **Passed**, or **Failed**. |

## List of material analysis documents

The list shows all material analysis documents created during receiving for materials with configured analyses. Use search or filters to locate entries by status.

![Material Analysis List](../Images/MaterialAnalysisListV2.png)

## Review a material analysis

1. Click a document in the draft list to open it.
   
   ![Material Analysis Edit](../Images/MaterialAnalysisEdit.png)

2. Click the **Material** field to select the material to test (if multiple are listed).
   
   ![Material Analysis Edit Material](../Images/MaterialAnalysisEditMaterial.png)

3. Click the **Check** button to pass the test for the selected material and click **Save**. The **Status** changes to **Passed** and the material shows green color on the list.
   
   ![Material Analysis Edit Material Check](../Images/MaterialAnalysisEditMaterialCheck.png)

   - If the test is not passed, leave the check unmarked and click **Save**. The status changes to **Failed** and the material shows red color on the list. If the document is published it will be shown as failed in the committed list.
    
     ![Material Analysis Edit Failed](../Images/MaterialAnalysisEditFailed.png "Failed material analysis")

4. Once all required checks are complete, click **Publish** to finalize the material analysis document. The document moves to the Committed list.

    ![Material Analysis List Commited](../Images/MaterialAnalysisListCommited.png "List of committed lists")
 
## Delete a material analysis

Material analysis documents cannot be deleted.
