import { atm } from ".";

it("When amount = 20", function () {
  expect(atm(20)).toEqual([0,0,0,0,1,0]);
});

it("When amount = 50", function () {
  expect(atm(50)).toEqual([0,0,0,1,0,0]);
});

it.only("When amount = 40", function () {
  expect(atm(40)).toEqual([0,0,0,0,2,0]); // 500, 200, 100, 50, 20, 10
});

it("When amount = 180", function () {
  expect(atm(180)).toEqual([0,0,1,1,1,1]);
});

it("When amount = 0", function () {
  expect(atm(0)).toEqual([0,0,0,0,0,0]);
});

it("When amount = 2.5", function () {
  expect(atm(20.5)).toEqual([0,0,0,0,1,0]);
});

it("When amount = 700", function () {
  expect(atm(700)).toEqual([1,1,0,0,0,0]);
});

it("When amount = 1200", function () {
  expect(atm(1200)).toEqual("Not enough money");
});