# Stock

The **Stock** page provides an overview of all material quantities across the system.  
It allows you to quickly check available, blocked, and reserved stock and navigate to detailed views for any material.

For a detailed explanation of how stock works, watch the [Stock overview](https://www.youtube.com/watch?v=gjAKnavIWnY) video.

To access this screen, go to **Logistics / Stock** in the [navigation](../../Common/UI/Navigation.md).

---

## Filters and Navigation

The left sidebar contains several filters:

### **Calendar filter**
You can select a specific date to view stock levels as they were on that day.

Clicking the month name opens a fast month/year selection view:

![Month selector](../Assets/StockCalendar.png "Month selector")

### **Material type filter**
You can filter the list by:

- Products  
- Semi products  
- Raw materials  
- Repro materials  

### **Tags filter**
You can refine the list by selecting material tags.

---

## Stock List

The main list displays all materials in alphabetical order.  
You can adjust the sorting:

- By **Material name** (A–Z or Z–A)  
- By **Quantity**  

A search field is available at the top to quickly find specific items.

![Stock list](../Assets/Stock.png "Stock list")

Each row shows:

- **Material code and name**
- **Quantity**
- **Material type tag**

Click any material to open the detailed stock view.

---

## Stock View by Material

Clicking a material opens a detailed breakdown of stock distribution across storage locations. For more information see the [Stock view by material](https://www.youtube.com/watch?v=GUdnV6bZwoI) video.

![Stock view by material](../Assets/StockByMaterial.png "Stock view by material")

This view includes:

- **Total stock**
- **Reserved stock**
- **Available stock**
- A **visual bar scale** showing stock relative to min/max levels  
- A **storage-level breakdown**, including:
  - Warehouse and location  
  - Serial numbers (if applicable)  
  - Quantities  
- A **Histogram** section, showing how stock levels changed across selected dates.

A search field is available for filtering within the selected material.

---

## Stock view by location

The **Stock view by location** screen shows all materials stored in a specific warehouse location, along with their total, reserved, and available quantities. It is useful when you want to see what is physically stored in a particular rack, shelf, or storage area.

You can access this view in two ways:

- Through **Logistics / Views / Stock view by location**
- By clicking any **location name** inside other stock screens (such as Stock view by material)

For full details, see [**Stock view by location**](../Views/StockViewByLocation.md).

---

## Stock view by serial number

A single material can have multiple **serial numbers** (for different batches, production dates, or storage locations). Whenever you click a **serial number** in any stock view (for example, in **Stock** or **Stock view by location**), the **Stock view by serial number** screen opens.
For more information see the [Stock view by serial number](https://www.youtube.com/watch?v=_vzXNsGg5N4) video.

![Stock view by serial number](../Assets/StockBySerialNumber.png "Stock view by  serial number")

This view shows:

- **Material and serial number** – the specific unit you are inspecting.  
- **Stock (pc) graph** – visual overview of total and available quantity for this serial number.  
- **Allocations** – a list of all storage locations where this serial number is present, including quantities.  
- **Attachments** – files related to this serial number (such as quality reports or photos).  
- **Backlog** – a timeline of all movements and transactions involving this serial number.

The **Stock view by serial number** screen is read-only and is used for detailed tracking and traceability of a specific serial number.



