"use client";

import { barbellWeight, Plate } from "$/lib/types";
import { Input } from "@nextui-org/react";
import { useState } from "react";
import Plates from "./Plates";
import toast from "react-hot-toast";

export default function Calculator() {
    const [targetWeight, setTargetWeight] = useState<string>('');
    const [plates, setPlates] = useState<Plate[]>([]);

    const availablePlates: Plate[] = [
        { weight: 25, classes: 'bg-plate-red' },
        { weight: 20, classes: 'bg-plate-blue' },
        { weight: 15, classes: 'bg-plate-yellow' },
        { weight: 10, classes: 'bg-plate-green' },
        { weight: 5, classes: 'bg-plate-white' },
        { weight: 2.5, classes: 'bg-plate-black' },
        { weight: 1.25, classes: 'bg-plate-black plate-eighth' },
    ]

    function calculatePlates(weight: number) {
        if (weight < barbellWeight) {
            toast.error(`Weight must be at least ${barbellWeight}kg (barbell weight)`);
            return;
        }

        if (weight > 750) {
            toast.error(`Make an issue in github, to add more weight for that person xd`);
            return;
        }
    
        if (weight % 1.25 !== 0) {
            toast.error("Weight must be in increments of 1.25kg");
            return;
        }
    
        const weightPerSide = (weight - barbellWeight) / 2;
        const calculatedPlates = availablePlates.map(plate => ({ ...plate, count: 0 }));
        let remainingWeight = weightPerSide;
    
        for (const plate of calculatedPlates) {
            while (remainingWeight >= plate.weight) {
                plate.count++;
                remainingWeight -= plate.weight;
            }
        }
    
        if (remainingWeight > 0) {
            toast.error("Cannot achieve exact weight with available plates");
            return;
        }
    
        setPlates(calculatedPlates.filter(plate => plate.count > 0));
    }
    
    function handleWeightChange(e: React.ChangeEvent<HTMLInputElement>) {
        const value = e.target.value;
        setTargetWeight(value);
        
        const numericValue = parseFloat(value);
        if (!isNaN(numericValue)) {
            calculatePlates(numericValue);
        } else {
            setPlates([]);
        }
    }

    return (
        <div className="flex flex-col items-center">
            <Input
                endContent={
                    <div className="pointer-events-none flex items-center">
                        <span className="text-default-400 text-small">kg</span>
                    </div>
                }
                placeholder="Enter weight..."
                type="text"
                className="text-2xl font-mono text-center"
                min={20}
                max={750}
                step={2.5}
                value={targetWeight}
                onChange={handleWeightChange}
            />
            {plates.length > 0 && (
                <div className="space-y-4 mt-[2rem]">
                    <h2 className="text-lg font-semibold text-center text-gray-600">
                        Plates per side
                    </h2>
                    <Plates plates={plates} />
                </div>
            )}
        </div>
    )
}