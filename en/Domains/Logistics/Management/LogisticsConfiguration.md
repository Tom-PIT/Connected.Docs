# Logistics configuration

Configure **Logistics** settings affecting stock behavior, serial formats, and document numbering. Any changes are saved automatically.

To access this page, go to **Logistics / Management / Configuration** in the [**navigation**](../../../Common/UI/Navigation.md).

![Logistics Configuration](../Images/LogisticsConfiguration.png)

## Stock settings

| Field | Description |
|-------|-------------|
| **Items take model** | Rule used to consume stock: <br> • **FIFO:** oldest stock first <br> • **LIFO:** newest stock first  <br> • **Best before:** earliest expiry first |
| **Serial number format** | Format used when the system generates serial numbers automatically. For example, **{0:D10}** produces a zero‑padded 10‑digit number: **0000000001**, **0000000002**, and so on. |

![Items Take Dropdown](../Images/LogisticsConfigurationItemsTakeDropdown.png)

> [!TIP]
>
> Apply a consistent serial format to simplify scanning and tracking.

## Document numbering settings

Choose the numbering model and format for Logistics documents (Receives, Issues, Inter‑warehouse, etc.).

| Field | Description |
|-------|-------------|
| **Document numbering model** | • **Incremental for each year:** sequence resets annually. <br> • **Incremental:** a global sequence that never resets.  |
| **Document code format** | Pattern defining structure (e.g., PREFIX‑YEAR-NUMBER). |



