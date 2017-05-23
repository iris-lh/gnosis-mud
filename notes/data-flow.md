## Data is flying every which way

#### Modules that require Data.js:
- bundles
    - debug-commands/commands/ipban.js
    - gnosis-combat/lib/LootTable.js
    - gnosis-commands/commands/config.js
    - gnosis-crafting/lib/Crafting.js
    - gnosis-input-events/input-events/intro.js
    - gnosis-input-events/input-events/login.js
- src
    - Account.js
    - AccountManager.js
    - BundleManager.js
    - Config.js
    - Player.js
    - PlayerManager.js
- gnosis main file

#### Modules that require Node FS library:
- src
  - BundleManager.js
  - Data.js



## Current Data Flow
- Dynamic data (accounts/chars/etc) is stored in the data directory and loaded by independent managers, i.e. AccountManager, PlayerManager
- Static data (rooms/items/npcs/etc) is stored in bundles and loaded ONCE by BundleManager
- dynamic data is autosaved to FS at intervals



## Desired flow
- dynamic/static data loaded from DB into memory at startup via MongoClient
- dynamic data auto-saved to DB at intervals
- what to do with new static data?
  - if it is 'new' static data, is it really static at all?

There seems to be no reason why the first two things could not be async and promise-based.



## In-game creation of new 'static' content
This is where things get really hairy. How do we give our non-developer world builders a nice tight feedback loop to test the content they create, for instance a new item or NPC? Currently all items/rooms/npcs/etc are loaded once and only once at startup. How do we load new content on the fly?
