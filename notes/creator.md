# Creator Commands



## `search`

*Search for elements (needs fleshed out)*

*Aliases:* `find, list`



## `show`

*Display detailed information about an item*

*Aliases:* `info`


## `new`

*Create a new element, server responds with the new element's ID*

*Syntax:* `new <element type> <name> [id]`

*Examples:*

- `new item 'Steel Plate'`

  - `Created item:1 'Steel Plate'`


- `new area 'Rhode Island' rhode-island`

  - `Created area:rhode-island 'Rhode Island'`


- While in Rhode Island: `new room 'Parking Lot'`

  - `Created area:rhode-island:1 'Parking Lot'`



## `edit`

*Edit an element*

*Syntax:* `edit <id> <property> <value>`

*Examples:*

- `edit item:1 name 'Bent Steel Plate'`


- `edit item:'9mm Pistol' properties.minDamage 20`


- `edit area:limbo:2 exits 'north east up'`
