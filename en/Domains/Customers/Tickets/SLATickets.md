<!-- app_route: /customer-support/sla -->
<!-- app_label: SLA tickets -->
<!-- canonical_source_url: https://tom-pit.github.io/Connected.Docs/en/Domains/Customers/Tickets/SLATickets/ -->
<!-- canonical_source_title: SLA tickets -->

# SLA tickets

The **SLA tickets** screen provides an overview of tickets that are subject to **Service Level Agreement (SLA)** rules defined on desks. This view helps users monitor tickets whose **activation or resolution SLA time** is:

- approaching its limit, or
- already exceeded.

To access this screen, go to **Customers / Tickets / SLA tickets** in the [navigation](../../../Common/UI/Navigation.md).

## Availability

SLA features depend on your company configuration. If SLA settings are not enabled or desks have no SLA rules configured, this page may be empty. Only tickets belonging to desks with SLA configuration enabled appear on this screen.

> [!IMPORTANT]
> If a desk has no SLA rules defined, its tickets will not appear in this view. Contact your administrator to enable desk SLA settings if you do not see any data here.

## Schema

| Field | Description |
|------|-------------|
| **Ticket** | Ticket identifier and subject |
| **Desk** | Desk the ticket belongs to |
| **SLA type** | Activation or Resolution |
| **Time** | Remaining or exceeded SLA time |

## SLA indicators

At the top of the screen, summary cards display the current SLA status:

- **Nearing SLA**  
  Tickets that are close to breaching their SLA threshold.

- **Failed SLA**  
  Tickets where the SLA time has already been exceeded.

Clicking an indicator filters the list accordingly.

> [!NOTE]
> SLA tickets are calculated dynamically based on desk configuration and ticket timestamps.

## List view

The list displays tickets that are affected by SLA rules, grouped by their SLA status.

Each row shows:

- Ticket number and subject
- Desk
- Remaining or exceeded SLA time

The list may be empty if no desks have SLA rules configured or no tickets match the criteria.

## Filters

The left sidebar provides filters to refine the list:

- **Desk** – limit results to a specific desk
- **View**
  - Activation
  - Resolution
- **Search** – search by ticket number or subject

## Ticket access

Click a ticket name to open its detail view. From there, users can review the ticket, add comments, or change its status.

If a ticket is resolved or reopened, it is automatically removed from or reclassified within the SLA tickets list.

## Menu

The menu provides additional actions available on this page.

![Ticket menu](../Images/TicketsMenu.png)

Available actions:

- **Subscribe/Unsubscribe to ticket**
- **View subscribers**
- **Share**
- **Record effort**

> [!NOTE]
>  Manage your per‑desk notification preferences in [**Notification settings**](../Management/NotificationsSettings.md).

For details about menu actions, see [**Menu actions**](../../../Common/Concepts/MenuActions.md).
