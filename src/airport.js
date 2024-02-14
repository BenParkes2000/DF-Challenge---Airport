class Airport {
  maximumCapacity;
  storedPlanes = [];
  weatherTypes = ["stormy", "sunny", "cloudy", "hail", "snowy"];
  weather;

  constructor(maxCapacity = 20) {
    this.maximumCapacity = maxCapacity;
  }

  changeCapacity = (maxCapacity) => {
    if (maxCapacity > 0) return (this.maximumCapacity = maxCapacity);
  };

  landPlane = (plane) => {
    if (
      this.checkWeather() &&
      this.checkCapacity() &&
      !this.checkAirport(plane)
    ) {
      if (!plane.id) return;
      else this.storedPlanes.push(plane);
    }
  };

  checkCapacity = () => {
    if (this.storedPlanes.length < this.maximumCapacity) return true;
    else {
      // console.log("Airport is full");
      return false;
    }
  };

  checkAirport = (plane) => {
    if (this.storedPlanes.includes(plane)) {
      // console.log("Plane has already landed at the airport");
      return true;
    } else return false;
  };

  takeoffPlane = (plane) => {
    if (this.checkWeather() && this.checkAirport(plane)) {
      this.storedPlanes.splice(this.storedPlanes.indexOf(plane), 1);
    }
    // this.storedPlanes.pop();
  };

  checkWeather = () => {
    if (this.weather === "stormy") return false;
    else return true;
  };

  changeWeather = () => {
    this.weather = this.weatherTypes[Math.floor(Math.random() * 5)];
  };
}
export default Airport;
