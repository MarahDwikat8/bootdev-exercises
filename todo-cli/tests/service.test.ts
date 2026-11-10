import { describe, it, expect, beforeEach, afterAll, vi } from "vitest";
import { rm, writeFile, mkdir } from "node:fs/promises";
import {
  AddTodo,
  listAllTodo,
  doneTodo,
  deleteTodo,
} from "../src/services/service.js";
import { DATA_DIR, DATA_FILE } from "../src/utils/storage.js";

// كل اختبار يبدأ من ملف نظيف
beforeEach(async () => {
  await rm(DATA_FILE, { force: true });
  vi.spyOn(console, "log").mockImplementation(() => {});
});

afterAll(async () => {
  await rm(DATA_DIR, { recursive: true, force: true });
});

describe("todo service", () => {
  it("returns an empty list when no data file exists yet", async () => {
    expect(await listAllTodo()).toEqual([]);
  });

  it("throws instead of losing data when the file holds invalid JSON", async () => {
    await mkdir(DATA_DIR, { recursive: true });
    await writeFile(DATA_FILE, "{ not valid json", "utf8");

    await expect(listAllTodo()).rejects.toThrow();
  });

  it("adds a todo, trims its title, and persists it", async () => {
    const ok = await AddTodo("   Learn TypeScript   ");

    expect(ok).toBe(true);
    const todos = await listAllTodo();
    expect(todos).toHaveLength(1);
    expect(todos[0]?.title).toBe("Learn TypeScript");
    expect(todos[0]?.completed).toBe(false);
  });

  it("rejects a whitespace-only title without writing anything", async () => {
    expect(await AddTodo("    ")).toBe(false);
    expect(await listAllTodo()).toEqual([]);
  });

  it("completes a todo, then deletes it, and reports a missing id", async () => {
    await AddTodo("task");
    const id = (await listAllTodo())[0]!.id;

    expect(await doneTodo(id)).toBe(true);
    expect((await listAllTodo())[0]?.completed).toBe(true);

    expect(await deleteTodo(id)).toBe(true);
    expect(await listAllTodo()).toEqual([]);

    expect(await deleteTodo(999)).toBe(false);
    expect(await doneTodo(999)).toBe(false);
  });
});