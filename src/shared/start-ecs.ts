import jabby from "@rbxts/jabby";
import { World } from "@rbxts/jecs";
import { Players, RunService, UserInputService } from "@rbxts/services";

const world = new World();
const debug = world.entity();
const components = {
	Test: world.component<string>(),
};

jabby.public.push({
	class_name: "World",
	name: "jecs world",
	world: world,
	entities: new Map(),
	// debug: debug,
});

const scheduler = jabby.scheduler.create("example scheduler");
export function start_system(system: (dt?: number) => void) {
	const system_a = scheduler.register_system({ name: "a" });

	RunService.Heartbeat.Connect((dt) => {
		scheduler.run(system_a, system, dt);
	});

	if (RunService.IsClient()) {
		const player = Players.LocalPlayer;
		const player_gui = player.WaitForChild("PlayerGui");
		const client = jabby.obtain_client();

		UserInputService.InputBegan.Connect((input) => {
			if (input.KeyCode === Enum.KeyCode.F4) {
				const home = player_gui.FindFirstChild("Home");
				if (home !== undefined) {
					home.Destroy();
				}

				client.spawn_app(client.apps.home);
			}
		});
	}
}

jabby.public.push(scheduler);
jabby.public.updated = true;
