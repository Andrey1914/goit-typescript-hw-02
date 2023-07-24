let some: unknown;
some = "Text";
let str: string;
str = some as string;
// or
if (some === "string") {
  str = some;
}

export {};
