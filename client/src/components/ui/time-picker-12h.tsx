import * as React from "react"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { cn } from "@/lib/utils"

interface TimePicker12hProps {
    value: string // 24h format "HH:mm"
    onChange: (value: string) => void
    className?: string
    min?: string // 24h format "HH:mm"
    max?: string // 24h format "HH:mm"
}

export function TimePicker12h({
    value,
    onChange,
    className,
    min,
    max,
}: TimePicker12hProps) {
    // Parse 24h value to 12h parts
    const hour24 = value ? parseInt(value.split(":")[0], 10) : 12
    const minute = value ? value.split(":")[1] : "00"

    const initialHour12 = hour24 % 12 || 12
    const initialPeriod = hour24 >= 12 ? "PM" : "AM"

    const [h12, setH12] = React.useState(initialHour12.toString())
    const [m, setM] = React.useState(minute)
    const [period, setPeriod] = React.useState(initialPeriod)

    // Update internal state when value prop changes externally
    React.useEffect(() => {
        if (value) {
            const h24 = parseInt(value.split(":")[0], 10)
            const minVal = value.split(":")[1]
            setH12((h24 % 12 || 12).toString())
            setM(minVal)
            setPeriod(h24 >= 12 ? "PM" : "AM")
        }
    }, [value])

    const handleUpdate = (newH: string, newM: string, newP: string) => {
        let h24 = parseInt(newH, 10)
        if (newP === "PM" && h24 < 12) h24 += 12
        if (newP === "AM" && h24 === 12) h24 = 0

        const formattedH24 = h24.toString().padStart(2, "0")
        const formattedValue = `${formattedH24}:${newM}`
        onChange(formattedValue)
    }

    const hours = Array.from({ length: 12 }, (_, i) => (i + 1).toString())
    const minutes = ["00", "15", "30", "45"] // standard increments for our booking

    return (
        <div className={cn("flex gap-2 items-center", className)}>
            <Select
                value={h12}
                onValueChange={(val) => {
                    setH12(val)
                    handleUpdate(val, m, period)
                }}
            >
                <SelectTrigger className="w-[70px] border-bronze/20 focus:outline-none focus:ring-1 focus:ring-bronze">
                    <SelectValue placeholder="Hour" />
                </SelectTrigger>
                <SelectContent>
                    {hours.map((h) => (
                        <SelectItem key={h} value={h}>
                            {h}
                        </SelectItem>
                    ))}
                </SelectContent>
            </Select>

            <span className="font-bold text-bronze">:</span>

            <Select
                value={m}
                onValueChange={(val) => {
                    setM(val)
                    handleUpdate(h12, val, period)
                }}
            >
                <SelectTrigger className="w-[70px] border-bronze/20 focus:outline-none focus:ring-1 focus:ring-bronze">
                    <SelectValue placeholder="Min" />
                </SelectTrigger>
                <SelectContent>
                    {minutes.map((minVal) => (
                        <SelectItem key={minVal} value={minVal}>
                            {minVal}
                        </SelectItem>
                    ))}
                </SelectContent>
            </Select>

            <Select
                value={period}
                onValueChange={(val) => {
                    setPeriod(val)
                    handleUpdate(h12, m, val)
                }}
            >
                <SelectTrigger className="w-[80px] border-bronze/20 focus:outline-none focus:ring-1 focus:ring-bronze">
                    <SelectValue placeholder="AM/PM" />
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value="AM">AM</SelectItem>
                    <SelectItem value="PM">PM</SelectItem>
                </SelectContent>
            </Select>
        </div>
    )
}
