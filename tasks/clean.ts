import del from "del";

export async function clean() {
  return await del("dist");
}
