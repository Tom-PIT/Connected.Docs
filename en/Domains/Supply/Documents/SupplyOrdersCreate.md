<!-- app_route: /supply/documents/supply-orders -->
<!-- app_label: Supply orders -->
<!-- app_navigation_hint: Open Supply orders, then click the action button to create a new draft supply order. -->
<!-- canonical_source_url: https://github.com/Tom-PIT/Connected.Docs/blob/main/en/Domains/Supply/Documents/SupplyOrdersCreate.md -->
<!-- canonical_source_title: How to create a new supply order -->

# How to create a new supply order

New [supply orders](SupplyOrders.md) can be created:

- manually from the **Supply orders** screen  using the [**action button**](../../../Common/UI/ActionButton.md)
- from related documents using **Linked documents → + Supply order**, for example from an [inquiry](Inquiries.md)

When created from another document, the system automatically pre-fills most supply order data, including the vendor, delivery information, and detail lines.

## Step 1 — Create the document

Create a new draft supply order using one of the following methods:

- Click the [**action button**](../../../Common/UI/ActionButton.md) on the **Supply orders** screen
- Use **Linked documents → + Supply order** from a related document like an [inquiry](Inquiries.md)

A new draft supply order is created. If created directly from another document it will have most of its fields already pre-filled.

## Step 2 — Fill in header information

Enter the **Vendor**, **Document date**, and **Supply date** (or review them if pre-filled from an inquiry document).  

![New supply order](../Images/SupplyOrderNew.png)

## Step 3 — Add details

Add items in the **Details** section. Details define the ordered items and their quantities, prices, taxes, and discounts. Each detail line corresponds to a specific material or service.

To add a new item: 

 1. Type or scan a **serial number**, **EAN**, or **material name** in the **Details** bar. The system displays all matching items. 

    ![Edit detail](../Images/SupplyOrderNewDetailsEdit.png "Supply orders details edit")

 2. Select the desired item from the list.
 3. Adjust **quantity**, **price**, **discount**, or **tax information**, then click **Save**.

    ![Saved detail](../Images/SupplyOrderNewDetailsSaved.png "Saved details")

## Step 4 — Configure additional sections

### Delivery section

The Delivery section defines where the ordered materials will be delivered. It is filled automatically from your company's delivery information, but the address can be adjusted for each purchase if needed.

These values affect the printed supply order and the follow-up logistics documents (such as [Receive](../../Logistics/Documents/Receives.md) documents), but they do not modify the master data stored in the Business directory.   

### Attachments

At the top of every document, an **Attachments** section is available.

![Attachments](../../Logistics/Images/Attachments.png "Attachments section")

You can upload any relevant file—such as delivery notes, transport documents, photos, or supporting records. All attached files remain stored together with the document and can be reviewed at any time.

### Top content and Bottom content

Pre-filled content sections allow you to add predefined text blocks to the top or bottom of the invoice. This is useful for including standard terms and conditions, payment instructions, or any other relevant information that should appear on the printed document. 

The content is selected from [**Predefined texts**](../../../Common/Management/PredefinedTexts.md).

### Linked documents

The [**Linked documents**](SupplyOrders.md#linked-documents) section allows you to create direct connections between related documents. For example, you can link a Supply order to an Inquiry, or to one or multiple Receive documents. This helps maintain traceability and easy navigation between documents in the supply workflow.

## Step 5 — Publish the supply order

Once all necessary information is filled in, click **Publish** to finalize the supply order. 

Once published, the Supply order moves into the **Committed → Available** state, enabling all related actions such as creating [receive](../../Logistics/Documents/Receives.md) documents.


