// Scooter constructor function
function Scooter(year, color, model) {
    this.year = year;
    this.color = color;
    this.model = model;
  }
  
  // Driver constructor function
  function Driver(name, age, experience) {
    this.name = name;
    this.age = age;
    this.experience = experience;
  }
  
  // PickupLocation constructor function
  function PickupLocation(address, city) {
    this.address = address;
    this.city = city;
  }
  
  // Example usage
  const samson = new Scooter(2015, "red", "swoosh");
  console.log(samson);
  
  const allison = new Driver("Allison", "16 years", "2 years");
  console.log(allison);
  
  const poshHotel = new PickupLocation("123 Broadway", "New York City");
  console.log(poshHotel);
   