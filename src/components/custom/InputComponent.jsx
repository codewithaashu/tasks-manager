import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React from "react";

const InputComponent = ({ label, placeholder, type, form, setForm, field }) => {
  return (
    <div className="grid w-full max-w-sm md:max-w-full items-center gap-1.5">
      <Label className="text-base px-1">{label}</Label>
      <Input
        type={type}
        placeholder={placeholder}
        className="focus-visible::ring-0 focus-visible:ring-transparent"
        value={form[field]}
        onChange={(e) => setForm({ ...form, [field]: e.target.value })}
      />
    </div>
  );
};

export default InputComponent;
