# Organization units

The **Organization units** code list defines operational organizational entities used across **Production** and **Maintenance** workflows — for example manufacturing cells, assembly lines, maintenance departments, or service teams. Use this page to view, add, edit and delete organization units and to manage their basic properties (name, tags, parent hierarchy, and availability) that other features reference.

Organization units are used by planners and supervisors to scope operations, filter lists, and control workflow routing (for example, selecting the correct input/output warehouse location or assigning duties). Example: the Organization unit with Code **ORN-25-0002** corresponds to **Finishing**, a production unit responsible for finishing the product before packaging; similarly, a **Maintenance** unit might be **Electrical Maintenance** for equipment servicing.

To access Organization units, navigate to the **Production** or **Maintenance** domains, then go to **Management / Organization units** in the [navigation](../../Common/UI/Navigation.md).

> [!TIP]
> For a full demonstration, see the **[Organization units](https://www.youtube.com/watch?v=qGkHEuOEWT4)** video tutorial.

## Schema

| Field | Description |
|-------|-------------|
| [**Code**](../../Common/UI/DocumentCodes.md) | Unique code for the organization unit (system-generated). |
| **Name** (mandatory) | Display name of the organization unit. |
| **Description** | Short description of the unit's responsibilities or scope. |
| **Ordinal** | Integer to control ordering in lists. |
| **Tags** | Optional tags for categorization (e.g., Production, Maintenance). |
| **Parent** | Optional parent organization unit (hierarchy). |
| **Enabled** | Toggle to enable or disable the organization unit. Disabled units are not used in new workflows. |

## Management

Open this screen to view, add and edit organization units used across Production and Maintenance.

### Organization units list

The list shows the organization unit **Code** and **Name** and displays tags and the **Ordinal** value. Use the search box in the header to find records. Click an organization unit to open the edit form.

![Organization units list](../Images/OrganizationUnitsList1.png "Organization units list")

Each record includes a status indicator to the left of its name:
- **Blue** indicates the organization unit is active
- **Gray** indicates the organization unit is inactive

![Organization Units Resources Buttons](../Images/OrganizationUnitsResourcesButtons.png "Organization Units Resources Buttons")

Click these buttons to attach human and non-human resources to the selected organization unit. See **[Resources](Resources.md)** for details on defining people, machines, teams, and maintenance tools.

### Actions

Click the [**action button**](../../Common/UI/ActionButton.md) to open the form to create a new organization unit.

### Add new

Fill in the fields on the Add form:

- **Code** — shown and assigned by the system.
- **Name** (mandatory) — enter the unit name.
- **Description** — optional description.
- **Ordinal** — numeric order (default 0).
- **Tags** — select zero or more tags (e.g., Production, Maintenance).
- **Parent** — optionally select a parent unit to build a hierarchy.
- **Enabled** — check to enable the unit.

![Organization units – New](../Images/OrganizationUnitsNew.png "Organization units – New")

Click **Add** to save the new organization unit, or **Cancel** to discard.

### Edit

Open an existing organization unit to change: 
- **Name** 
- **Description** 
- **Ordinal** 
- **Tags**
- **Parent** 
- **Enabled** 
 
Click **Save** to persist changes or **Cancel** to discard. Use **Delete** to remove the record if no longer required.

![Organization units – Edit](../Images/OrganizationUnitsEdit1.png "Organization units – Edit")

## Deletion

Click **Delete** on the edit screen to open a confirmation dialog:

**Are you sure you want to delete this record?**

If confirmed, the record is permanently removed from the Organization units list; referenced data in other domains is not affected.

---
