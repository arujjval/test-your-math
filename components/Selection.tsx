"use client";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
import { FormControl } from "./ui/form";
import data from "@/lib/selectionData";

type SelectionProps = {
    type: number,
    onChange: (value: string) => void 
}

type selectionData = {
    id: number,
    input: string,
    items: string[]
}

export default function Selection({ type, ...field }: SelectionProps) {
    const dataArr = data();
    const dataObj = (dataArr.find((item) => item.id === type)) as selectionData;

    return (
        <div className="md:scale-125 md:py-2">
            <Select onValueChange={field.onChange} defaultValue={""}>
                <FormControl>
                    <SelectTrigger className="w-[180px] text-white">
                        <SelectValue placeholder={dataObj.input}/>
                    </SelectTrigger>
                </FormControl>
                <SelectContent className="text-white cursor-pointer">
                    {dataObj.items.map((item, index) => (
                        <SelectItem value={item} key={index} id={index.toString()}>{item}</SelectItem>
                    ))}
                </SelectContent>
            </Select>
        </div>
    )
}