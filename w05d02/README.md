# W05D02 - Database Design

### To Do
- [x] Primary Keys/Foreign Keys
- [x] Naming Conventions
- [x] Data Types
- [x] Relationship Types
- [x] Design Concepts
- [x] Entity Relationship Diagrams
- [x] Breakout: Convert 2 Spreadsheets [15 mins]
- [x] Student Suggestion ERD(s)

### Primary Key/FK
* uniquely identify a record
* can be any data type - combination of fields
* autoincrementing primary key (serial)
* FK - have to be the same data type as the PK

### Naming Conventions
* table names and field names are lowercase / snake_case
* table names are always plural
* primary keys === id
* foreign keys === users `user_id` `tweet_id`

### Data Types
* Each field must have a data type declared
* On record creation, the db sets aside room in memory for every field
* This used to be a BIG concern - no longer cuz data is CHEAP
* varchar(15), int, bigint, boolean, JSON, text
* postal_codes, phone_numbers => varchar/char/string

### Relationships
* One-to-one - 1 record in the 1st table is related to only 1 record in the 2nd
* One-to-many - 1 record in the 1st table is related to 1 or more records in the 2nd
* Many-to-many - 1 or more records in the 1st table are related to 1 or more records in the 2nd table (need a third table join/junction/bridging)

### Design Concepts
* Required - initial state of the record is
* Default values - use intelligent defaults (timestamp => NOW())
* Don't use calculated fields - value can be derived from one or more other fields (full_name = first_name + ' ' + last_name): single source of truth
* Try not to delete anything - `active` boolean => default to true








### Breakout: Convert Two Spreadsheets
- [Gist with instruction](https://gist.github.com/andydlindsay/20e7305e853bad7b587f294b054cf8de)
