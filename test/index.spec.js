// importamos la funcion que vamos a testear
import { registerNewUsers } from "../src/lib/auth.js";
import { jest } from "@jest/globals";
import { updateProfile, getAuth} from "../src/lib/firebase-imports.js"
jest.mock("../src/lib/firebase-imports.js");

describe("myFunction", () => {
  it("should be a function", () => {
    expect(typeof registerNewUsers).toBe("function");
  });
});
