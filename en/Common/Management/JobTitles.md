<!-- app_route: /management/contacts/job-titles -->
<!-- app_label: Job titles -->
<!-- canonical_source_url: https://github.com/Tom-PIT/Connected.Docs/blob/main/en/Common/Management/JobTitles.md -->
<!-- canonical_source_title: Job titles -->

# Job titles

Job titles are part of the **Customer Support** module and define the roles that can be assigned to [contacts](../../Common/Management/Contacts.md) in the [**Business directory**](../../Common/Management/BusinessDirectory.md). They help categorize people such as *Account Manager*, *Procurement Manager*, or *Director*.

To access this page, go to **Customer Support / Management / Job titles** in the [navigation](../../Common/UI/Navigation.md).

## Schema

| Field | Description |
|-------|-------------|
| **Name** | The job title or role (e.g., *Account Manager*, *Director*) (required). |
| **Active** | Indicates whether the job title is available for selection when creating contacts. |

## List view

The list displays all job titles defined in the system.

![Job titles list](../Images/JobTitlesList.png)

Use the **Enabled / Disabled** filters on the left to show active or inactive titles.

## Actions

### Add a new job title

To create a new job title, follow these steps:

1. Click on the [action button](../../Common/UI/ActionButton.md) to add a new job title.
2. Fill in all required fields. Optional fields can be completed if relevant.
3. Click **Add** to save the new job title.

> [!NOTE]
> For more details on the fields, see the [**Schema**](#schema) section above. 

![Add new job title](../Images/JobTitlesNew.png)

### Edit an existing job title

To edit an existing job title, follow these steps:

1. Click on a job title from the list.
2. Update the name or activity status.
3. Click **Save** to apply the changes or **Cancel** to discard them.

### Delete a job title

To delete a job title, follow these steps:

1. Open a job title from the list.
2. Click **Delete**.
3. Confirm the deletion in the dialog.

A job title can only be deleted if it is not referenced in existing contacts.

