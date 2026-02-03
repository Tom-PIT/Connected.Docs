# Intrastat

Intrastat is the European Union’s system for collecting statistics on the trade in goods between EU Member States. Businesses that dispatch (send) or arrive (receive) goods across EU borders must submit monthly Intrastat declarations once they exceed national thresholds.

In the app, the Intrastat area centralizes code lists that classify movements of goods and support correct reporting. These lists are reused across domains (Sales, Logistics, Supply) when preparing and exporting Intrastat data.

To access this area, go to **Accounting / Management / Intrastat**.

## Code lists in Intrastat

The following code lists are used when preparing Intrastat declarations:

- [**Delivery terms**](../../../Common/Management/DeliveryTerms.md)
- [**Mode of transport**](../../../Common/Management/ModeOfTransport.md)
- [**Nature of transactions**](NatureOfTransactions.md)
- [**Place of delivery**](PlaceOfDelivery.md)
- [**Supplementary units**](SupplementaryUnits.md)
- [**Tariffs**](Tariffs.md)

> [!NOTE]
> Delivery terms and Mode of transport are shared code lists located in the **Common** folder and are referenced from **Intrastat**. The remaining lists reside directly in the **Intrastat** section.

## Where these are used

- Sales documents (e.g., [sales orders](../../../Sales/Documents/SalesOrders.md), [delivery notes](../../../Sales/Documents/DeliveryNotes.md), [issued invoices](../../../Sales/Documents/IssuedInvoices.md)) reference delivery terms and transport for correct classification.
- Accounting exports use the above classifications to generate Intrastat files per country-specific rules.

## Maintenance

- Add, edit, or delete entries in each list from its respective screen.
- Avoid deleting codes that are referenced by documents; prefer deactivating or replacing them according to local compliance rules.
- Keep code values aligned with the latest national Intrastat guidance (thresholds, valid code sets, and update cycles).