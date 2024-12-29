export type Plate = {
    weight: number;
    classes: string;
    count?: number;
}

export const barbellWeight = 20;
  
export const availablePlates: Plate[] = [
    { weight: 25, classes: 'bg-plate-red' },
    { weight: 20, classes: 'bg-plate-blue' },
    { weight: 15, classes: 'bg-plate-yellow' },
    { weight: 10, classes: 'bg-plate-green' },
    { weight: 5, classes: 'bg-plate-white' },
    { weight: 2.5, classes: 'bg-plate-black' },
]