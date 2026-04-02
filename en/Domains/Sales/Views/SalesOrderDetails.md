<!-- app_route: /sales/views/sales-order-details -->
<!-- app_label: Sales order details -->
<!-- canonical_source_url: https://github.com/Tom-PIT/Connected.Docs/blob/main/en/Domains/Sales/Views/SalesOrderDetails.md -->
<!-- canonical_source_title: Sales order details -->

# Sales order details

The Sales order details view provides an aggregated list of all order items from outgoing [**sales order**](../Documents/SalesOrders.md) documents. Instead of showing documents, this view shows **individual order lines**, allowing you to monitor deliveries, quantities, and outstanding obligations.

This view is analytical only — it does **not** create or change sales orders.

To access this view, go to **Sales / Views / Sales order details** in the [**navigation**](../../../Common/UI/Navigation.md).

![Sales order details](../Images/SalesOrderDetailsView.png)

## Sales order details list

Each line represents a **single sales order item**, including:

- **Asset** – The item being sold  
- **Delivery details** – Customer and expected delivery date  
- **Quantity** – Ordered quantity  
- **Stock** – Current warehouse stock  
- **Delivered quantity** – Shows confirmed vs. unconfirmed delivery  
  - Example: *0 pc (Confirmed 0 / Unconfirmed 0)*  
  - This helps monitor fulfillment progress

This makes it easy to track **which items still need to be delivered**, independently of the sales order document.

## Filters

The left sidebar includes filters for monitoring fulfillment performance:

- **Delivery date** – Select a delivery time window  
- **Detail status**  
  - *All*  
  - *Available*  
  - *In completion*  
  - *Completed*  
- **Document status**  
  - *Available*  
  - *Completed*  
- **Company** – Filter by customer  

## Purpose

This view is useful for:

- Planning upcoming deliveries  
- Monitoring which order items are fully or partially delivered  
- Identifying bottlenecks (e.g., items lacking stock)  
- Checking workload for logistics and warehouse teams  

It complements the **Sales orders** document screen by focusing on **items**, not documents.

