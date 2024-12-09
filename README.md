# jabby-vide-ts-issue

If @rbxts/vide is not installed, we can open our debugger just fine. By pressing F4, we can try to open the debugger.
However, when we install vide and update our tsconfig.json file, we run into issues open our debugger.
The full error code is as follows:

```
  02:09:41.472  error while running root():

cannot use spring() outside a stable or reactive scope
ReplicatedStorage.rbxts_include.node_modules.@rbxts.jabby.node_modules.@rbxts.vide.src.throw:4 function VIDE_ASSERT
ReplicatedStorage.rbxts_include.node_modules.@rbxts.jabby.node_modules.@rbxts.vide.src.graph:50 function assert_stable_scope
ReplicatedStorage.rbxts_include.node_modules.@rbxts.jabby.node_modules.@rbxts.vide.src.spring:152 function spring
ReplicatedStorage.rbxts_include.node_modules.@rbxts.pebble.out.pebble.components.interactable.select:40 function dropdown
ReplicatedStorage.rbxts_include.node_modules.@rbxts.jabby.out.jabby.client.apps.home.widget:92
ReplicatedStorage.rbxts_include.node_modules.@rbxts.jabby.out.jabby.client.apps.home:29 function mount
ReplicatedStorage.rbxts_include.node_modules.@rbxts.jabby.out.jabby.client.spawn_app:22
ReplicatedStorage.rbxts_include.node_modules.@rbxts.jabby.node_modules.@rbxts.vide.src.root:27 function root
ReplicatedStorage.rbxts_include.node_modules.@rbxts.jabby.out.jabby.client.spawn_app:15 function spawn_app
ReplicatedStorage.TS.start-ecs:40
  -  Client - throw:4
  02:09:41.472  Stack Begin  -  Studio
  02:09:41.472  Script 'ReplicatedStorage.rbxts_include.node_modules.@rbxts.jabby.node_modules.@rbxts.vide.src.throw', Line 4 - function VIDE_ASSERT  -  Studio - throw:4
  02:09:41.472  Script 'ReplicatedStorage.rbxts_include.node_modules.@rbxts.jabby.node_modules.@rbxts.vide.src.root', Line 33 - function root  -  Studio - root:33
  02:09:41.472  Script 'ReplicatedStorage.rbxts_include.node_modules.@rbxts.jabby.out.jabby.client.spawn_app', Line 15 - function spawn_app  -  Studio - spawn_app:15
  02:09:41.472  Script 'ReplicatedStorage.TS.start-ecs', Line 40  -  Studio - start-ecs:40
  02:09:41.472  Stack End
  ```
