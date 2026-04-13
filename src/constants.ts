import { Car } from './types';

export const CARS: Car[] = [
  {
    id: '1',
    name: 'Taycan Turbo S',
    brand: 'Porsche',
    price: '$185,000',
    image: 'https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?auto=format&fit=crop&q=80&w=2070',
    specs: {
      speed: '2.8s',
      engine: 'Electric',
      transmission: 'Automatic',
    },
    color: 'bg-blue-600',
  },
  {
    id: '2',
    name: 'Model S Plaid',
    brand: 'Tesla',
    price: '$129,990',
    image: 'https://images.unsplash.com/photo-1617788138017-80ad40651399?auto=format&fit=crop&q=80&w=2070',
    specs: {
      speed: '1.99s',
      engine: 'Electric',
      transmission: 'Automatic',
    },
    color: 'bg-red-600',
  },
  {
    id: '3',
    name: 'RS e-tron GT',
    brand: 'Audi',
    price: '$143,900',
    image: 'https://images.unsplash.com/photo-1614200187524-dc4b892acf16?auto=format&fit=crop&q=80&w=2070',
    specs: {
      speed: '3.1s',
      engine: 'Electric',
      transmission: 'Automatic',
    },
    color: 'bg-gray-800',
  },
  {
    id: '4',
    name: 'M8 Competition',
    brand: 'BMW',
    price: '$134,100',
    image: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&q=80&w=2070',
    specs: {
      speed: '3.0s',
      engine: 'V8 Turbo',
      transmission: 'Automatic',
    },
    color: 'bg-blue-900',
  },
  {
    id: '5',
    name: 'AMG GT 63 S',
    brand: 'Mercedes-Benz',
    price: '$161,900',
    image: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&q=80&w=2070',
    specs: {
      speed: '3.1s',
      engine: 'V8 Biturbo',
      transmission: 'Automatic',
    },
    color: 'bg-black',
  },
  {
    id: '6',
    name: 'Huracán EVO',
    brand: 'Lamborghini',
    price: '$261,274',
    image: 'https://images.unsplash.com/photo-1544636331-e26879cd4d9b?auto=format&fit=crop&q=80&w=2070',
    specs: {
      speed: '2.9s',
      engine: 'V10',
      transmission: 'Automatic',
    },
    color: 'bg-yellow-500',
  },
];
