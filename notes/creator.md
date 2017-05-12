# Creator Commands

---

## `search`

_Search content by type_

_Syntax: `search <content type>`_

Examples:

- `search areas`

  - Returns all areas


- `search items type=WEAPON`

  - Returns all items with type WEAPON

---

## `new`

_Create a new piece of content, server responds with the new content's ID_

_Syntax: `new <content type> <name> [id]`_

Examples:

- `new item 'Steel Plate'`

  - `Created item:1 'Steel Plate'`


- `new area 'Rhode Island' rhode-island`

  - `Created area:rhode-island 'Rhode Island'`


- While in Rhode Island: `new room 'Parking Lot'`

  - `Created area:rhode-island:1 'Parking Lot'`

---

## `edit`

_Edit a piece of content_

_Syntax: `edit <id> <property> <value>`_

Examples:

- `edit item:1 name 'Bent Steel Plate'`

- `edit item:'9mm Pistol' properties.minDamage 20`

- `edit area:limbo:2 exits 'north east up'`
