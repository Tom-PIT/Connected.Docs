# Tax rates

This code list represents the tax rates used throughout the digital contents of the system. Tax rates define the percentage of tax applied to products, materials, and services. Each tax rate consists of a descriptive name and a numeric percentage value.

---

## Schema

The code list has the following schema:

| Field | Description |
|-------|-------------|
| **Name** | Descriptive name of the tax rate. For example, Standard tax rate 22 or Reduced tax rate 9.5. |
| **Tax rate (%)** | Numeric tax percentage applied, for example **22** or **9.5**. |
| **Active** | Indicates whether the tax rate is currently in use. Inactive tax rates cannot be selected in new entries, but remain visible in history. |

---

## Management

To access the **Tax rates** code list, go to **Assets / Management / Tax rates** in the [navigation](../../Common/UI/Sitemap.md).

### List of Tax Rates

The user interface contains a list of tax rates. If no record exists yet, the list is empty.

Each record includes a status indicator to the left of its name:
- **Blue** indicates the tax rate is active
- **Gray** indicates the tax rate is inactive

![Tax rates list](../Assets/TaxRates.png "Tax rates list")

The list displays each tax rate’s name and the applicable percentage. A search field is available in the upper-right corner to help filter the list.

---

## Actions

Click on the [action button](../../Common/UI/ActionButton.md) to add a new tax rate.

The form includes the following fields:
- **Name**
- **Tax rate (%)**
- **Active**

After entering the required information, click **Add** to save the tax rate or **Cancel** to return to the list view.

![Add new tax rate](../Assets/NewTaxRate.png "Add new tax rate")

---

## Editing

To edit an existing tax rate, click the tax rate’s **Name** in the list. The interface switches to edit mode, displaying the existing values for modification. Click **Save** to confirm changes or **Cancel** to discard them.

---

## Deletion

A tax rate can be deleted only if it is not used in any dependent entries.  
If the tax rate is referenced elsewhere in the system, deletion is not possible.
