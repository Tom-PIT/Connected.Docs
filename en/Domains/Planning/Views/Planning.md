<!-- app_route: /planning -->
<!-- app_label: Planning -->
<!-- canonical_source_url: https://github.com/Tom-PIT/Connected.Docs/blob/main/en/Domains/Planning/Views/Planning.md -->
<!-- canonical_source_title: Planning -->

# Planning

The **Planning** screen provides a visual overview of **planned production orders** in a calendar layout. It allows users to monitor scheduling and adjust production timelines.

To access this page, navigate to **Production / Planning / Planning**.

![Planning view](../Images/PlanningDayView.png "Planning view")

## Overview

Production orders are displayed on the calendar based on their **planned start** and **planned end** dates.

> [!IMPORTANT]
> A production order will appear in Planning only if both **planned start** and **planned end** are defined.  
> These values are set when creating or editing a production order. See [**Production orders**](../../Production/Documents/ProductionOrders.md#dates).

Each entry in the calendar represents a scheduled production order, showing its duration across the selected time range.

## Filters

Use the filters on the left side to refine the view:

- **Date** – select the desired time period  
- **Type** – filter by planning type (e.g. production timeline)

The **Today** button quickly navigates back to the current date.

## Calendar views

The calendar can be displayed in different modes:

- **Day** – detailed hourly view of a single day  
- **Week** – overview of the selected week  
- **Month** – high-level monthly overview  

Use the date selector on the left to navigate between dates.

## Actions

### Viewing details

Click on a **production order code** to open its detailed view.

### Moving planned orders

Planned orders can be **rescheduled** directly in the calendar using drag & drop.

![Move planned order](../Images/PlanningMoveEvent.png "Move planned order")

- Drag the order to a new time slot to adjust its schedule  
- The system automatically updates the planned dates  

> [!NOTE]
> It is not possible to move a production order beyond its **due date** defined in the [production order](../../Production/Documents/ProductionOrders.md#dates).

### Order information

Hovering over a planned order displays additional details such as:

- Production order code  
- Item name  
- Planned start  
- Planned end  


