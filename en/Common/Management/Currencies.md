# Currencies

The **Currencies** code list defines all monetary units that can be used across the system. Each currency includes its international code, symbol, and formatting rules, ensuring that prices, totals, and financial documents are displayed consistently and correctly. This list serves as the foundation for representing amounts in sales, purchasing, and reporting processes.

This page is available in the **Sales** and **Supply** domains, to access it go to **Management / Cost centers** in the [navigation](../../Common/UI/Navigation.md).

> [!NOTE]  
> **Prerequisites**  
> A currency must be configured before it can be used in price lists, documents, or financial calculations.

## Schema

| Field | Description |
|-------|-------------|
| **Name** | Full name of the currency, e.g., *Euro*, *United States Dollar* (mandatory). |
| **Code** | International three-letter currency code, e.g., *EUR*, *USD* (mandatory). |
| **Symbol** | Currency symbol used in totals and price displays, e.g., *€*, *$* (mandatory). |
| **Symbol position** | Whether the symbol appears **before** or **after** the amount (mandatory). |
| **LCID** | Locale identifier used to standardize number and currency formatting. |
| **Active** | Indicates whether the currency is currently available for use in the system. |

## Management

### List view

The list displays all configured currencies along with their code, symbol, LCID.

![Currencies list](../Images/Currencies.png)

Each record includes a status indicator to the left of its name:
- **Blue** indicates the currency is active
- **Gray** indicates the currency is inactive

You can use the **Search** bar to quickly filter payment methods by their code or name.


## Actions

Click the **action button** to open the form for adding a new currency.

![Add new currency](../Images/CurrenciesNew.png)

Fill in the required fields:

- **Name**
- **Code**
- **Symbol**
- **Symbol position**
- **LCID** 
- **Active**

Click **Add** to save the new currency.

## Editing an existing currency

Click a currency in the list to open its edit screen.

![Edit currency](../Images/CurrenciesEdit.png)

Click **Save** to confirm changes.

## Deletion

Click **Delete** on the edit screen to open a confirmation dialog:

**Are you sure you want to delete this record?**

If confirmed, the record is permanently removed; otherwise, the system keeps it unchanged.

> [!NOTE]  
> A currency can be deleted only if it is **not referenced** by price lists, documents, or other financial records.

---


