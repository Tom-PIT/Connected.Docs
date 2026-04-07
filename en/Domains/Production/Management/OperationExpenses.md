<!-- app_route: /management/processes -->
<!-- app_label: Processes -->
<!-- canonical_source_url: https://github.com/Tom-PIT/Connected.Docs/blob/main/en/Domains/Production/Management/OperationExpenses.md -->
<!-- canonical_source_title: Operation expenses -->

# Operation expenses

Expenses define additional **costs** applied to an **operation** within a process version. These costs contribute to the overall production cost calculation of the item.

To access this page, open a process version from **Production / Management / [Processes](Processes.md)**, click [**Operations**](Operations.md), then select **Expenses** for a specific operation.

![Expenses Button](../Images/OperationExpensesButton.png "Expenses Button")

## Schema

| Field | Description |
|-------|-------------|
| **Expense** | The type of cost applied (e.g. electricity, transport, etc.). |
| **Calculation type** | Defines how the cost is calculated: **Dynamic** or **Static**. |
| **Amount** | The monetary value of the expense. |

## List view

The list displays all expenses linked to the selected operation. Each row shows the expense name, calculation type, and amount.

![Expenses list](../Images/OperationsExpensesList.png "Expenses list")

## Creating a new expense

1. Click the [**action button**](../../../Common/UI/ActionButton.md) in the bottom-right corner.
2. Fill in the required fields.

    ![Add expense](../Images/OperationExpensesNew.png "Add expense")

3. Click **Add** to save the expense.

## Editing an expense

1. Click an existing expense in the list.  
2. Modify any of the fields.  
3. Click **Save**.

## Deletion

An expense can be deleted from its Edit page by clicking **Delete**. If confirmed, it is removed from the operation.