import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const SelectLabelComponent = ({
  title,
  items,
  placeholder,
  label,
  triggerWidth,
  field,
  form,
  setForm,
}) => {
  return (
    <div className="grid w-full max-w-sm md:max-w-full items-center gap-1.5">
      <Label className="text-base px-1">{title}</Label>
      <Select
        onValueChange={(val) => setForm({ ...form, [field]: val })}
        defaultValue={form[field]}
      >
        <SelectTrigger
          className={`${triggerWidth} focus:ring-0 focus:ring-transparent py-1 `}
        >
          <SelectValue placeholder={placeholder} />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>{label}</SelectLabel>
            {items.map((curr, index) => (
              <SelectItem value={curr.value} key={index}>
                {curr.label}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
};

export default SelectLabelComponent;
