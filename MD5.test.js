import * as t from "https://deno.land/std/testing/asserts.ts";
import { MD5 } from "./MD5.js";

Deno.test("simple", () => {
	t.assertEquals(MD5.digest("hello"), "5d41402abc4b2a76b9719d911017c592");
});
