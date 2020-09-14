# W05D01 - SQL Intro

### To Do
- [x] Introduction to RDBMS
- [x] The Relational Data Model (Tables, Columns, Rows)
- [x] `SELECT` Statements
- [x] Filtering and ordering
- [ ] Joining tables
- [ ] Grouping records
- [ ] Aggregation functions
- [ ] `LIMIT` and `OFFSET`


### 3 pillars of web development
* web servers
* client side
* databases

### RDBMS
* Relational DataBase Management Server
* Collection of relational databases
* `psql`

### Relational Data Model
* tabular data => columns and rows
* Columns === fields (adjectives)
* Rows === records
* Each table is related to one or more other tables in the database





### SELECT Challenges

For the first 5 queries, we'll be using the `users` table.

![users table](https://andydlindsay-portfolio.s3.amazonaws.com/lighthouse/w5d1-users.io.png)

1. List total number of users

```sql
SELECT COUNT(*)
FROM users;
```

2. List users over the age of 18

```sql
SELECT *
FROM users
WHERE age > 18;
```

3. List users who are over the age of 18 and have the last name 'Barrows'

```sql
SELECT *
FROM users
WHERE age > 18 AND last_name = 'Barrows';
```

4. List users over the age of 18 who live in Canada sorted by age from oldest to youngest and then last name alphabetically

```sql
SELECT *
FROM users
WHERE age > 18 AND country = 'Canada'
ORDER BY age DESC, last_name;
```

5. List users who live in Canada and whose accounts are overdue

```sql
SELECT *
FROM users
WHERE country = 'Canada' AND payment_due_date < '2020-09-14';

-- using the NOW() function to get the current date/time
SELECT *
FROM users
WHERE country = 'Canada' AND payment_due_date < NOW();
```

6. List all the countries users live in; don't repeat any countries

```sql
SELECT DISTINCT country
FROM users
ORDER BY country;
```

For the rest of the queries, we'll be using the `albums` and `songs` tables.

![albums and songs](https://andydlindsay-portfolio.s3.amazonaws.com/lighthouse/albums-and-songs.png)

7. List all albums along with their songs

```sql

```

8. List all albums along with how many songs each album has

```sql

```

9. Enhance previous query to only include albums that have more than 10 songs

```sql

```

10. List ALL albums in the database, along with their songs if any

```sql

```

11. List albums along with average song rating

```sql

```

12. List albums and songs with rating higher than album average

```sql

```

### Useful Links
- [Top 10 Most Popular RDBMSs](https://www.c-sharpcorner.com/article/what-are-the-most-popular-relational-databases/)
- [Another Ranking of DBMSs](https://db-engines.com/en/ranking)
- [SELECT Queries Order of Execution](https://sqlbolt.com/lesson/select_queries_order_of_execution)
- [SQL Joins Visualizer](https://sql-joins.leopard.in.ua/)