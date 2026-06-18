<!-- app_route: /maintenance/analytics/kpis -->
<!-- app_label: Maintenance indicators -->
<!-- canonical_source_url: https://github.com/Tom-PIT/Connected.Docs/blob/main/en/Domains/Maintenance/Analytics/MaintenanceIndicators.md -->
<!-- canonical_source_title: Maintenance KPIs -->

# Maintenance KPIs

The **Maintenance KPIs** screen provides an analytical overview of maintenance performance. It aggregates data from **completed [maintenance orders](../Documents/MaintenanceOrders.md)** and helps evaluate efficiency, responsiveness, and reliability of maintenance activities.

To access this screen, go to **Maintenance / Analytics / Maintenance KPIs** in the [navigation](../../../Common/UI/Navigation.md).
![Maintenance KPIs](../Images/MaintenanceIndicators.png "Maintenance KPIs overview")

> [!NOTE]
> - Only **completed** maintenance orders are considered in indicator calculations
> - Results depend heavily on:
>   - Accurate effort recording
>   - Timely malfunction reporting
>   - Proper order closure

## Purpose of maintenance indicators

Maintenance indicators allow users to:

- Monitor maintenance workload and effort
- Compare **planned vs. curative** maintenance
- Analyze reaction and resolution times
- Identify late, inefficient, or recurring maintenance issues
- Support decision-making for preventive maintenance improvements

All indicators are calculated based on the selected **filters**.

## Filters

The panel on the left allows refining the data shown on the screen.

Available filters include:

- **Completion date** â€“ Time range used to calculate indicators
- **Order type**
  - **Planned**
  - **Curative**
- **Organization unit**

Changing any filter immediately recalculates the indicators and updates the list below.

## Indicator cards

At the top of the screen, summary cards display aggregated key performance indicators.

![Maintenance Indicators Cards](../Images/MaintenanceIndicatorsCards.png "Maintenance indicators cards")

### Orders count

Shows the total number of completed maintenance orders in the selected period.

- Split by **Planned** and **Curative**
- Percentage distribution is displayed

This indicator helps understand the maintenance workload and balance between preventive and corrective actions.

### Effort

Displays the total recorded effort spent on maintenance orders.

- Split by **Planned** and **Curative**
- Based on effort recorded during operation execution

This helps assess how maintenance time is distributed and where most effort is consumed.

### Mean time between failure

Shows the average time between failures.

- Calculated from curative maintenance orders
- Displays **minimum** and **maximum** observed values

MTBF is commonly used to evaluate equipment reliability.

![Maintenance Indicators â€“ Time metrics](../Images/MaintenanceIndicatorsCardsExtra.png "Maintenance time-based indicators")

### Mean time to detection

Average time between the occurrence of a malfunction and its detection.

- Useful for evaluating monitoring and reporting effectiveness

### Mean time to repair

Average time required to complete maintenance once it has started.

- Reflects maintenance execution efficiency

### Mean time to failure

Average operational time before a failure occurs.

- Often used together with MTBF for reliability analysis

## Maintenance orders list

Below the indicator cards, a detailed list of maintenance orders is displayed.

Each row represents a maintenance order included in the calculation.

Displayed information includes:

- **Equipment**
- **Maintenance order code**
- **Effort**
- **Time between failure**
- **Time to detection**
- **Time to repair**

This list allows users to:

- Drill down into specific orders
- Identify outliers (very long or very short durations)
- Correlate individual orders with aggregated indicators

Clicking a maintenance order opens its detail view for further inspection.

## Planned vs. curative visibility

Visual indicators in the list help distinguish order types:

- **Curative maintenance orders** are clearly identifiable
- Planned orders appear without curative markers

This makes it easy to analyze how corrective maintenance impacts overall performance metrics.