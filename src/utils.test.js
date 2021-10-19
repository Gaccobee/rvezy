// TODO - Write tests for 'constructUrlAndOptions'

import { getBreedName, dataTransform } from "./utils";

describe("getBreedName", () => {
  describe("when item is not passed in", () => {
    it("should return empty undefined", () => {
      expect(getBreedName()).toEqual(undefined);
    });
  });
  describe('when item is passed in but does not have "breeds" property', () => {
    it("should return undefined", () => {
      const param = {};
      expect(getBreedName(param)).toEqual(undefined);
    });
  });

  describe('when item is passed in but does "breeds" is not of type arrray', () => {
    it("should return empty string", () => {
      const param = { breeds: "" };
      expect(getBreedName(param)).toEqual(undefined);
    });
  });
});

describe("dataTransform", () => {
  describe("when record is passed in but is not of type object", () => {
    it("should return empty array", () => {
      const param = "test";
      expect(dataTransform(param)).toEqual([]);
    });
  });
  describe("when record is passed as empty object", () => {
    it("should return array with undefined entries", () => {
      const param = {};
      expect(dataTransform(param)).toEqual([undefined, undefined, undefined]);
    });
  });
  describe("when record is passed as expected", () => {
    it("should return array with correct items", () => {
      const param = { id: "123", breeds: [{ name: "bengal" }], url: "testUrl" };
      expect(dataTransform(param)).toEqual(["123", "bengal", "testUrl"]);
    });
  });
});
