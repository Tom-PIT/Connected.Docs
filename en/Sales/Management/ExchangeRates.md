# Exchange rates

The **Exchange rates** code list defines currency conversion rates used across the system when working with documents in different currencies. These rates are primarily used in the **Sales** domain to convert amounts between a **base currency** and a **target currency** on a given date.

Exchange rates allow the system to:
- Convert monetary values between currencies
- Ensure consistent financial calculations across sales documents
- Apply date-specific conversion rates for accurate reporting and invoicing

Each exchange rate is defined **from one currency to another** (Base → Target) for a specific date.

> [!IMPORTANT]
> [**Currencies**](../../Common/Management/Currencies.md) must be defined before creating exchange rates.

To access this page, go to **Sales / Management / Exchange rates** in the [navigation](../../Common/UI/Navigation.md).

## Schema

| Field | Description |
|-------|-------------|
| **From currency** | Base currency used for conversion, selected from [**Currencies**](../../Common/Management/Currencies.md). |
| **To currency** | Target currency to which the amount is converted, selected from [**Currencies**](../../Common/Management/Currencies.md). |
| **Date** | Date on which the exchange rate is valid. |
| **Rate** | Conversion factor used to convert from the base currency to the target currency. |

## Management

Exchange rates are maintained manually and can be created for different dates and currency pairs.

### List view

The list displays all defined exchange rates for the selected filters.

![Exchange rates list](../Images/ExchangeRatesList.png "Exchange rates list")

Available filters on the left:
- **Date** — Filter exchange rates by a specific date  
- **From currency** — Filter by base currency  
- **To currency** — Filter by target currency  

Each row shows:
- Currency pair (From → To)
- Exchange rate value

## Actions

### Creating a new exchange rate

1. Click the [**action button**](../../Common/UI/ActionButton.md) button in the bottom-right corner of the screen to create a new record.

   ![New exchange rate](../Images/ExchangeRatesNew.png "Create a new exchange rate")
 
2. Select the **From currency** (base currency).
3. Select the **To currency** (target currency).
4. Choose the **Date** for which the rate applies.
5. Enter the **Rate** value.
6. Click **Add** to save the exchange rate.

> [!NOTE]  
> - Exchange rates are applied automatically by the system where currency conversion is required.
> - Rates are date-sensitive; ensure the correct date is selected to match the transaction date.
> - Only base-to-target conversions are supported; reverse rates must be defined explicitly if needed.

---
