# Quality — Execution checklists

The **Quality** page allows you to link **[checklists](Checklists.md)** to either a **process version** or an **operation**. These checklists are used to enforce quality-control steps during production.

To access this page, click the **Quality** button from:

- A **Process version**  
  ![Quality button on version](../Images/ProcessesVersionsQualityButton.png)

- An **Operation**  
  ![Quality button on operation](../Images/OperationsQualityButton.png)

> [!NOTE]
> Prepare the checklist first in the **[Checklists](Checklists.md)** code list. Only defined checklists can be linked here.

> [!TIP]
> For a full demonstration, see the **[Quality](https://www.youtube.com/watch?v=B2KX_UvDiCw)** video tutorial.

## Schema

| Field | Description |
|------|-------------|
| **Checklist** | The quality checklist that will be executed during the operation. |
| **Mode** | Defines when the checklist is executed: <br>• **Manual**<br>• **On complete**<br>• **On every N units**<br>• **On first produced unit**<br>• **On last produced unit**<br>• **On pause**<br>• **On run**<br>• **On start** |
| **Order** | Determines the execution order of the checklist relative to other checklists in the same operation. |
| **Material** | Optional material to which the checklist applies. Used when quality checks are material-specific. See **[Materials](../../Assets/Domain/Materials.md)**. |
| **Period** | Defines the number of produced units after which the checklist is triggered. This field is available only when **Mode = On every N units**. |

## List view

When opened, the Quality page displays all checklists already linked to the process version or operation.

![Quality list](../Images/QualityList.png)

You may reorder entries by adjusting their **Ordinal** value.

## Creating a new quality entry

1. Click the **action button** and choose **New**.

   ![Quality New](../Images/QualityNew.png "New quality record")

2. Select **Checklist** and **Mode**:
   - **Manual**: Operators open and complete the checklist manually from the Quality activity.
   - **On complete**: The checklist must be completed before the operation can be finished.
   - **On every N units**: The checklist is triggered periodically based on the number of produced units (requires defining **Period**).
   - **On first produced unit**: The checklist is triggered when the first unit is produced.
   - **On last produced unit**: The checklist is triggered when the last unit is produced.
   - **On pause**: The checklist is triggered when the operation is paused.
   - **On run**: The checklist is available while the operation is running.
   - **On start**: The checklist is triggered when the operation starts.

    ![Quality New Modes](../Images/QualityNewModes.png "Checklist mode")
 
3. Click **Add**.

## Editing a quality entry

1. Open the entry from the list.
2. Update **Checklist**, **Mode**, or **Ordinal** as needed.
3. Click **Save** to apply changes.

## Deletion

Click **Delete** on the Edit page.
