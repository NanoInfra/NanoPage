export interface ServiceConfig {
  name: string;
}

export async function findNearestProjectRoot(
  startDirectory: string,
): Promise<string> {
  let currentDirectory = startDirectory;
  while (true) {
    try {
      const stat = await Deno.stat(`${currentDirectory}/deno.json`);
      if (stat.isFile) return currentDirectory;
    } catch (_) {
      // continue up
    }
    const lastSlashIndex = currentDirectory.lastIndexOf("/");
    if (lastSlashIndex <= 0) {
      throw new Error("Could not locate a deno.json in any parent directory.");
    }
    currentDirectory = currentDirectory.slice(0, lastSlashIndex);
  }
}

export async function readServiceConfig(
  projectRoot: string,
): Promise<ServiceConfig> {
  const serviceConfigPath = `${projectRoot}/service.json`;
  const jsonText = await Deno.readTextFile(serviceConfigPath);
  const parsed = JSON.parse(jsonText) as ServiceConfig;
  if (!parsed.name) throw new Error("Missing 'name' in service.json");
  return parsed;
}
