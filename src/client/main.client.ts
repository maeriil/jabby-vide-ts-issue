import { start_system } from "shared/start-ecs";

function client_system() {
	print("Client");
}

start_system(client_system);
