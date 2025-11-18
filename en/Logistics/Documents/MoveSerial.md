# Move serial

The **Move serial** function allows you to quickly move a specific stock unit (identified by its serial number) from one storage location to another — without manually creating an Inter warehouse document. It is optimized for fast, repeated movements on the warehouse floor.

For a full demonstration, watch the [Move serial number](https://www.youtube.com/watch?v=dy1u6sKmdMg) video.

To access Move serial, go to **Logistics / Documents / Move serial** in the navigation.

---

## Moving a serial number

Move serial is a **guided three-step workflow**:

1. Identify the serial number  
2. Select the destination location  
3. Confirm and complete the movement  

Each completed move is automatically recorded and appears in **Inter warehouse → Committed**.

### Step 1 — Scan or enter a serial number

Enter or scan a **serial number**, **EAN**, or type a **material name**.

- If **only one matching stock item** exists → the system proceeds automatically.
- If **multiple matches** exist → a selection screen appears.

**Example (multiple matches):**

![MoveSerialStep1](../Assets/MoveSerialStep1.png)

Click **Next** to continue.

### Step 2 — Select the destination location

Enter the destination location by typing its **name**, **code**, or partial text.

If several locations match, you must select the correct one:

![MoveSerialStep2](../Assets/MoveSerialStep2.png)

Click **Next** to continue.

### Step 3 — Confirm the move

The final screen displays:

- The **material** being moved  
- **Source location**  
- **Destination location**  
- **Quantity pc** — total pieces stored at the source location
- **Available pc** — pieces currently available for movement (editable)  
- **Best before**

![MoveSerialStep3](../Assets/MoveSerialStep3.png)

Adjust **Available pc** to define how many pieces you want to move, then click **Finish**.

After finishing:

- The move is immediately recorded.  
- You are returned to **Step 1** so you can continue scanning additional items.  
- The completed movement is visible in **Inter warehouse → Committed**.

**Example of the recorded transfer:**

![MoveSerialInterWarehouseRecord](../Assets/MoveSerialInterWarehouseRecord.png)

