import { start_system } from "shared/start-ecs";

function server_system() {
	print("Server");
}

start_system(server_system);
