export interface Car {
  id: string;
  name: string;
  brand: string;
  price: string;
  image: string;
  specs: {
    speed: string;
    engine: string;
    transmission: string;
  };
  color: string;
}

export interface Feature {
  title: string;
  description: string;
  icon: string;
}
