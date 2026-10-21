type Coordinates = { longitude: number; latitude: number };

export function dealerMapPoint({ longitude, latitude }: Coordinates) {
  return {
    x: 30 + ((longitude + 180) / 360) * 940,
    y: 20 + ((85 - latitude) / 145) * 450,
  };
}

export function dealerMapView(coordinates: Coordinates, zoom: number) {
  const scale = Math.min(4, Math.max(1, zoom));
  const width = 1000 / scale;
  const height = 500 / scale;
  const point = dealerMapPoint(coordinates);
  return {
    x: Math.max(0, Math.min(1000 - width, point.x - width / 2)),
    y: Math.max(0, Math.min(500 - height, point.y - height / 2)),
    width,
    height,
  };
}
