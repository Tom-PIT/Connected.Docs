# Countries

This code list represents the countries used across the digital contents of the system. Each country defines localization parameters, such as the LCID and ISO code, which ensure correct language, regional settings, and compliance with international standards.

<<<<<<< HEAD
## Schema

=======
---

## Schema

The code list has the following schema:

>>>>>>> 392aee3 (Docs: Updated Countries.md)
| Field | Description |
|-------|--------------|
| **Name** | Country name. For example, Slovenia or **Austria**. |
| **LCID** | Localization identifier used to set the language and regional specifics of the country. |
| **ISO Alpha-2 code** | International standard country code. For example, **SI** for Slovenia or **AT** for Austria. |
| **Active** | Indicates whether the country is active. Inactive countries cannot be used for new entries, but they remain visible in the history. |

---

## Management

<<<<<<< HEAD
You can access the **Countries** code list from different domains in the [navigation](../UI/Navigation.md). In all cases you are working with the same shared data.

To open the list, go to the **Management** section of the following domains:

- **Logistics**
- **Sales**
- **Supply**

### List of countries

The user interface contains a list of countries. If no record exists yet, the list is empty.

Each record includes a status indicator to the left of its name:
- **Blue** indicates the country is active
- **Gray** indicates the country is inactive

![Countries List](../Images/CountriesList.png "Countries List")

Each record displays a tag representing **associated data** — [Postal codes](PostalCodes.md).

Clicking this tag opens the interface for managing the related data linked to the selected country.

## Actions

Click on the [action button](../UI/ActionButton.md) to display the following actions:
=======
To access the **countries** code list, go to **Sales / Management / Countries** in the [navigation](../../Common/UI/Sitemap.md).

### List of Countries

The user interface contains a list of countries. If no record exists yet, the list is empty. Each country has a status in the form of a color to the left of the country name — **blue** means the country is active, and **gray** means it is inactive.

![Countries List](../Assets/CountriesList.png "Countries List")

Each record displays multiple tags representing **associated data**:
- [Postal codes](#editing-postal-codes)

Clicking any of these tags opens the respective interface for managing the related data linked to the selected country.

---

## Actions

Click on the [action button](../../Common/UI/ActionButton.md) to display the following actions:
>>>>>>> 392aee3 (Docs: Updated Countries.md)

- Import  
- New  

### Import

<<<<<<< HEAD
The **Import** action enables bulk creation or updating of country records. This function is intended for administrators who need to add or modify multiple countries at once.

When selecting **Import**, the system opens the upload interface:

![Import countries](../Images/ImportCountries.png "Import countries")

The import accepts a **CSV file**. Drag and drop the file into the upload area or click to open the file dialog.
The file must contain the required fields in a valid structure. You can download a file example using the menu located on the top-right corner. After the upload is complete, the system processes the file and creates or updates countries based on the CSV content.

Click **Cancel** to return to the country list without importing.

#### Example CSV structure

```csv
Name,LCID,ISOAlpha2Code,Active
Slovenia,1060,SI,true
Austria,3079,AT,true
Italy,1040,IT,false
```

### New

Click **New** to open the input form for adding a new country.  
The form includes the following fields:
- **Name**
- **LCID**
- **ISO Alpha-2 code**
- **Active**

Click **Add** to create the record or **Cancel** to return to the list view without saving.

![New Country](../Images/NewCountry.png "New Country")

## Editing

To edit an existing country, click the country's **Name** in the list. The interface switches to edit mode, displaying the existing values for modification. Click **Save** to confirm changes or **Cancel** to discard them.

### Postal codes

The [**Postal codes**](PostalCodes.md) tag opens the interface for managing postal codes related to the selected country. Each postal code record includes fields such as **Number** and **City**, allowing you to maintain correct geographical and mailing data.  

![Editing Postal Codes](../Images/PostalCodesButton.png "Editing Postal Codes")

## Deletion

Click **Delete** on the edit screen to open a confirmation dialog: 

**Are you sure you want to delete this record?**  

If confirmed, the entry is permanently removed; otherwise, the system keeps the record unchanged.

> [!NOTE]
>A country can be deleted only if it is not referenced by dependent records (for example, addresses or documents).

---
=======
The **Import** action allows bulk creation or updating of country entries. Prepare a `CSV` file containing the required data and upload it. The system automatically creates new records or updates existing ones based on the file contents.

### New

Click **New** to open the input form for adding a new country. Fill in the required fields such as **Name**, **LCID**, and **ISO Alpha-2 code**. Click **Add** to create the record or **Cancel** to return to the list view without saving.

![New Country](../Assets/NewCountry.png "New Country")

---

## Editing

To edit an existing country, click the country’s **Name** in the list. The interface switches to edit mode, displaying the existing values for modification. Click **Save** to confirm changes or **Cancel** to discard them.

![Editing Country](../Assets/EditCountry.png "Editing Country")

### Postal Codes

The **Postal codes** tag opens the interface for managing postal codes related to the selected country. Each postal code record includes fields such as **Number** and **City**, allowing users to maintain correct geographical and mailing data.  
See the dedicated [Postal codes](PostalCode.md) document for details.

![Editing Postal Codes](../Assets/PostalCodesButton.png "Editing Postal Codes")

---

## Deletion

A country can be deleted only if it is not referenced by dependent records (for example, addresses or documents). Click **Delete** to open a confirmation dialog: **Are you sure you want to delete this record?** If confirmed, the record is permanently removed. If not confirmed, the interface remains in edit mode without any changes.
>>>>>>> 392aee3 (Docs: Updated Countries.md)
