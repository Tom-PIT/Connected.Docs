# Job titles
<!-- app_route: management/contacts/job-titles -->
<!-- app_label: Job titles -->
Job titles are part of the **Customer Support** module and define the roles that can be assigned to [contacts](../../Common/Management/Contacts.md) in the [**Business directory**](../../Common/Management/BusinessDirectory.md). They help categorize people such as *Account Manager*, *Procurement Manager*, or *Director*.

To access this page, go to **Customer Support / Management / Job titles** in the [**navigation**](../../Common/UI/Navigation.md).

## Schema
<!-- app_route: management/contacts/job-titles -->
<!-- app_label: Job titles -->
| Field | Description |
|-------|-------------|
| **Name** | The job title or role (e.g., *Account Manager*, *Director*) (required). |
| **Active** | Indicates whether the job title is available for selection when creating contacts. |

## List view
<!-- app_route: management/contacts/job-titles -->
<!-- app_label: Job titles -->
The list displays all job titles defined in the system.

![Job titles list](../Images/JobTitlesList.png)

Use the **Enabled / Disabled** filters on the left to show active or inactive titles.

## Actions

### Creating a new job title
<!-- app_route: management/contacts/job-titles -->
<!-- app_label: Job titles -->
To add a new job title, click on the [**action button**](../../Common/UI/ActionButton.md) in the bottom-right corner and select **New**.

![Add new job title](../Images/JobTitlesNew.png)

Fill in all required fields. Optional fields can be completed if relevant. For more details on the fields, see the [**Schema**](#schema) section above. 

Click **Add** to save the new job title.

### Editing an existing job title
<!-- app_route: management/contacts/job-titles -->
<!-- app_label: Job titles -->
1. Open **Customer Support → Management → Job titles**.  
2. Select a job title from the list.  
3. Update the name or activity status.  
4. Click **Save**.

### Deletion
<!-- app_route: management/contacts/job-titles -->
<!-- app_label: Job titles -->
A job title can be deleted from the Edit page, but only if it is not referenced in existing contacts.

> [!NOTE]  
> Deleting a job title does **not** remove any Business directory entries.

