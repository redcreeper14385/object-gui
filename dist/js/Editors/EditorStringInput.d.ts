import { EditorItem } from "./EditorItem";
export declare class EditorStringInput extends EditorItem {
    private readonly name;
    private readonly label;
    private value;
    private readonly change;
    constructor(data: unknown, name: string, label: string, value: string, change: (value: string) => void);
    protected createElement(): HTMLElement;
}
