# Countries

This code list represents the countries used across the digital contents of the system. Each country defines localization parameters, such as the LCID and ISO code, which ensure correct language, regional settings, and compliance with international standards.

---

## Schema

The code list has the following schema:

| Field | Description |
|-------|--------------|
| **Name** | Country name. For example, Slovenia or **Austria**. |
| **LCID** | Localization identifier used to set the language and regional specifics of the country. |
| **ISO Alpha-2 code** | International standard country code. For example, **SI** for Slovenia or **AT** for Austria. |
| **Active** | Indicates whether the country is active. Inactive countries cannot be used for new entries, but they remain visible in the history. |

---

## Management

To access the **countries** code list, go to **Sales / Management / Countries** in the [navigation](../../Common/UI/Sitemap.md).

### List of Countries

The user interface contains a list of countries. If no record exists yet, the list is empty.

Each record includes a status indicator to the left of its name:
- **Blue** indicates the country is active
- **Gray** indicates the country is inactive

![Countries List](../Assets/CountriesList.png "Countries List")

Each record displays a tag representing **associated data** — [Postal codes](#editing-postal-codes).

Clicking this tag opens the interface for managing the related data linked to the selected country.

---

## Actions

Click on the [action button](../../Common/UI/ActionButton.md) to display the following actions:

- Import  
- New  

### Import

The **Import** action allows bulk creation or updating of country entries. Prepare a CSV file containing the required data and upload it. The system automatically creates new records or updates existing ones based on the file contents.

### New

Click **New** to open the input form for adding a new country.  
The form includes the following fields:
- **Name**
- **LCID**
- **ISO Alpha-2 code**
- **Active**

Click **Add** to create the record or **Cancel** to return to the list view without saving.

![New Country](../Assets/NewCountry.png "New Country")

---

## Editing

To edit an existing country, click the country’s **Name** in the list. The interface switches to edit mode, displaying the existing values for modification. Click **Save** to confirm changes or **Cancel** to discard them.

### Postal codes

The **Postal codes** tag opens the interface for managing postal codes related to the selected country. Each postal code record includes fields such as **Number** and **City**, allowing users to maintain correct geographical and mailing data.  
See the dedicated [Postal codes](PostalCode.md) document for details.

![Editing Postal Codes](../Assets/PostalCodesButton.png "Editing Postal Codes")

---

## Deletion

A country can be deleted only if it is not referenced by dependent records (for example, addresses or documents). Click **Delete** to open a confirmation dialog: **Are you sure you want to delete this record?**  
If confirmed, the record is permanently removed. If not confirmed, the interface remains in edit mode without any changes.
