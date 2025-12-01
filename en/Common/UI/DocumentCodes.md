# Document codes

Each document in the system receives an automatically generated **document code**.  
This code uniquely identifies the document and follows a consistent structure across all modules.

Document codes help with:

- Tracking and referencing documents  
- Navigation inside the system  
- Cross-document linking (Offers → Sales orders → Delivery notes → Issued invoices)  
- External communication (PDFs, emails, exports)

## Structure of a document code

All document codes follow the same format:

```
PREFIX-YEAR-SEQUENCE
```


Where:

- **PREFIX** – 2–3 letters identifying the type of document  
- **YEAR** – The year in which the document is created  
- **SEQUENCE** – A zero-padded incremental number  

![Offer code example](../Assets/DocumentCodeOffer.png "Offer code example")  

Example:

- OFF-2025-00000012
- SOR-2025-00002311

## Some examples of prefixes by document type

### Sales documents
- **OFF** – Offers  
- **SOR** – Sales orders  
- **DNO** – Delivery notes  
- **INV** – Issued invoices  

### Supply documents
- **INQ** – Inquiries  
- **SOR** – Supply orders  
- **REC** – Receive documents (partial or full)  

### Financial / Stock documents  
(If applicable)
- **PAY** – Payments  
- **STK** – Stock movements  
- **CMP** – Completed production / assembly batches  

## How codes are generated

- Codes are **assigned automatically** when a document is created.  
- The sequence increases independently for each document type.  
- Codes **cannot be edited** once created.  
- Documents created from other documents (e.g., Offer → Sales order) always receive a **new code**.

## Where the code appears

![Sales order code example](../Assets/DocumentCodeSalesOrders.png "Sales order code example")

Codes also appear in:

- List views  
- Linked documents  
- PDFs  
- Email exports  
- Integrations  

## Why the code format matters

The unified structure ensures:

- Clean ordering in lists  
- Predictable searching and filtering  
- Easy reference across accounting, logistics, and operations  
- Human-readable form (year + sequence)

---


