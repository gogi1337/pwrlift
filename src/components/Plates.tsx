"use client";

import { cn } from "$/lib/cn";
import { Plate } from "$/lib/types";

type Props = {
    plates: Plate[];
}

export default function Plates({ plates }: Props) {
    return (
        <div className="flex items-center justify-start gap-1">
            <div className="flex items-center">
                <div className="w-20 h-2 bg-gray-600" /> {/* Bar */}
            </div>
            
            {/* Plates */}
            {plates.map((plate, plateIndex) => (
                Array(plate.count).fill(0).map((_, index) => (
                <div
                    key={`${plateIndex}-${index}`}
                    className={cn(
                        "h-40 w-4 animate-plate-appear",
                        plate.classes,
                        "flex items-center justify-center text-xs font-mono",
                        plate.classes.includes("bg-plate-white") ? 'text-black' : 'text-white',
                        plate.classes.includes("bg-plate-white") ? 'h-[6rem]' : '',
                        plate.classes.includes("bg-plate-black") ? 'h-[4rem]' : '',
                        plate.classes.includes("plate-eighth") ? 'h-[2.5rem] w-[0.75rem]' : '',
                        "relative"
                    )}
                    style={{
                        animationDelay: `${(plateIndex * 100) + (index * 50)}ms`,
                    }}
                >
                    <span className="absolute -rotate-90 whitespace-nowrap">
                        {plate.weight}kg
                    </span>
                </div>
                ))
            ))}
        </div>
    )
}