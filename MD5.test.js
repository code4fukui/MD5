import * as t from "https://deno.land/std/testing/asserts.ts";
import { MD5 } from "./MD5.js";
import { Base16 } from "https://code4fukui.github.io/Base16/Base16.js";

Deno.test("simple", () => {
	t.assertEquals(Base16.encode(MD5.digest("hello")), "5d41402abc4b2a76b9719d911017c592");
});
Deno.test("uint8array", () => {
	t.assertEquals(Base16.encode(MD5.digest(new TextEncoder().encode("hello"))), "5d41402abc4b2a76b9719d911017c592");
});
