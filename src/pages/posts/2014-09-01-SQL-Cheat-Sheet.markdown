---
layout: post
intro: false
featured: false
title:  "SQL Query Guide"
uniqueID:  "sqlCheatSheet"
description: "Structured Query Language is a programming language designed to create, read, update and delete data from a relational database."
banner: "/images/posts/sql.jpg"
date:   2014-09-01 10:55:54
tags: ['mysql', 'sql', 'database', 'query']
---

## Querying

As a QA Engineer, the need to verify data-sets and their relation within various applications is critical. You simply need to know that an action or predefined method is storing, requesting, deleting and editing the expected set of data, CRUD.

Get this into your head first. Declarative. The only paradigm where you "just" declare the nature of the results that you would like to get. Not how your computer shall compute those results. Isn't that wonderful?

i.e.

```sql
SELECT
  first_name, last_name
FROM
  employees
WHERE
  salary > 100000
```
Easy to understand. You don't care where employee records physically come from. You just want those that have a decent salary.

## SQL syntax is not well-ordered

A common source of confusion is the simple fact that SQL syntax elements are not ordered in the way they are executed. The lexical ordering is:

* `SELECT`
* `FROM`
* `WHERE`
* `GROUP BY`
* `HAVING`
* `UNION`
* `ORDER BY`

For simplicity, not all SQL clauses are listed. This lexical ordering differs fundamentally from the logical order, i.e. from the order of execution:

* `FROM`
* `WHERE`
* `GROUP BY`
* `HAVING`
* `SELECT`
* `DISTINCT`
* `UNION`
* `ORDER BY`

##### There are 3 things to note:

1. `FROM` is the first clause, not `SELECT`. The first thing that happens is loading data from the disk into memory, in order to operate on such data.
2. `SELECT` is executed after most other clauses. Most importantly, after `FROM` and `GROUP BY`. This is important to understand when you think you can reference stuff that you declare in the `SELECT` clause from the `WHERE` clause.
3. `UNION` is placed before `ORDER BY` in both lexical and logical ordering. Many people think that each `UNION` sub-select can be ordered, but according to the SQL standard and most SQL dialects, that is not true. While some dialects allow for ordering subqueries or derived tables, there is no guarantee that such ordering will be retained after a `UNION` operation.

*Note, not all databases implement things the same way. Rule number 2, for instance, does not apply exactly in the above way to MySQL, PostgreSQL, and SQLite.*

Always remember both the lexical order and the logical order of SQL clauses to avoid very common mistakes. If you understand that distinction, it will become very obvious why some things work and others don't.

## Cheat Sheet

| Declarative | Purpose |
| --- | --- |
| SELECT | extract from table |
| UPDATE | update in table |
|DELETE | delete from table |
| INSERT INTO | add to table or row |
| ORDER | display table in order of |
| WHERE | find in cases where |
| OPERATOR | Operates with value (=x) |
| VALUES | always passed in quotes 'x' |

### Examples

#### `SELECT`

Specific column:

```sql
SELECT
  column_name1, column_name2
FROM
  table_name
```

All columns from table:

```sql
SELECT
  *
FROM
  table_name
```

Select distinct, the various kinds of entries:

```sql
SELECT DISTINCT
  column_name
FROM
  table_name
```

`DISTINCT` displays selected distinct columns within a table, i.e. Users listed by state:

```sql
SELECT DISTINCT
  state
FROM
  user_id
```
#### `WHERE`

```sql
SELECT
  column_name(s)
FROM
  table_name
WHERE
  column_name [operator] [x]
```

`SELECT` all within a table with a certain column value, i.e. Users from California:

```sql
SELECT
  *
FROM
  user_id
WHERE
  State ='California'
```

Operators allowed with `WHERE`:

* `=` EQUAL
* `< >` NOT EQUAL
* `>` GREATER THAN
* `<` LESS THAN
* `>` = GREATER THAN OR EQUAL
* `<` = LESS THAN OR EQUAL
* `BETWEEN`, between a range
* `LIKE`, search for pattern
* `IN`, exact value


#### `AND`

```sql
SELECT
  *
FROM
  table_name
WHERE
  column_name [operator] [value]
  AND
    column_name [operator] [value]
  AND
    column_name [operator] [value]
```

#### `OR`

```sql
SELECT
  *
FROM
  table_name
WHERE
  column_name [operator] [value]
  OR
    column_name [operator] [value]
  OR
    column_name [operator] [value]
```

#### `AND` / `OR`

```sql
SELECT
  *
FROM
  table_name
WHERE
	column_name [operator] [value]
  AND
    (column_name [operator] [value] OR column_name [operator] [value])
  AND
    (column_name [operator] [value] OR column_name [operator] [value])
```

#### `ORDER BY`

```sql
SELECT
  column_name(s)
FROM
  table_name
ORDER BY
  column_name(s) [asc/desc]
```

```sql
SELECT
  *
FROM
  user_id
ORDER BY
  State asc
```
#### `INSERT`

```sql
INSERT INTO
  table_name
VALUES
  (value, value, value)
```
Limit columns added:

```sql
INSERT INTO
  table_name (column_name, column_name...)
VALUES
  (value, value, value)
```

#### `UPDATE`

```sql
UPDATE
  table_name
SET
  column_name [operator] [value], column_name [operator] [value]
WHERE
  column_name [operator] [value]
  AND
  column_name [operator] [value]
```
#### `DELETE`

```sql
DELETE
  *
FROM
  table_name
WHERE
  column_name [operator] [value]
  AND
  column_name [operator] [value]
```
