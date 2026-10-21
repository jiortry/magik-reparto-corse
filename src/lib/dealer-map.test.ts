import assert from "node:assert/strict";
import { test } from "node:test";
import { dealerMapPoint, dealerMapView } from "./dealer-map.ts";

test("world view includes both the Americas and New Zealand", () => {
  const view = dealerMapView({ longitude: 176.84, latitude: -39.5 }, 1);
  assert.deepEqual(view, { x: 0, y: 0, width: 1000, height: 500 });
  for (const coordinates of [
    { longitude: -76.61, latitude: 2.44 },
    { longitude: 176.84, latitude: -39.5 },
  ]) {
    const point = dealerMapPoint(coordinates);
    assert.ok(point.x > 20 && point.x < 980);
    assert.ok(point.y > 0 && point.y < 500);
  }
});

test("zoom near the date line keeps the selected dealer visible and stays within the map", () => {
  const location = { longitude: 176.84, latitude: -39.5 };
  const point = dealerMapPoint(location);
  const view = dealerMapView(location, 4);
  assert.equal(view.width, 250);
  assert.equal(view.height, 125);
  assert.ok(view.x >= 0 && view.x + view.width <= 1000);
  assert.ok(view.y >= 0 && view.y + view.height <= 500);
  assert.ok(point.x >= view.x && point.x <= view.x + view.width);
  assert.ok(point.y >= view.y && point.y <= view.y + view.height);
});

test("European dealers retain their north/south order", () => {
  const germany = dealerMapPoint({ longitude: 9.69, latitude: 51.8 });
  const italy = dealerMapPoint({ longitude: 8.82, latitude: 45.82 });
  assert.ok(germany.y < italy.y);
  assert.ok(Math.abs(germany.x - italy.x) < 5);
});
