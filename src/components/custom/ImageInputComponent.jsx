import { Label } from "@/components/ui/label";
import { CloudUpload } from "lucide-react";
import React from "react";

const ImageInputComponent = ({ placeholder, field, form, setForm }) => {
  const handleImageUpload = async (e) => {
    //if file size is larger
    if (e.target.files[0]?.size > 10485760) {
      return;
    }
    const imageURL = e.target.files[0];
    setForm({ ...form, [field]: imageURL });
  };
  return (
    <>
      <div className="grid w-full h-full gap-1.5">
        <Label className="text-base px-1 h-fit">{placeholder}</Label>
        <label className="flex cursor-pointer border-dashed border-2 items-center rounded-lg justify-center w-full h-full">
          <input
            type="file"
            className="hidden"
            accept=".jpg, .jpeg, .png,.avif"
            onChange={(e) => handleImageUpload(e)}
          />
          {!form[field] ? (
            <CloudUpload className="text-sm text-muted-foreground h-8" />
          ) : (
            <img
              src={
                form[field]
                  ? typeof form[field] === "string"
                    ? form[field]
                    : URL.createObjectURL(form[field])
                  : form[field]
              }
              alt="Avatar"
              className="rounded-sm h-8 align-middle text-center"
            />
          )}
        </label>
      </div>
    </>
  );
};

export default ImageInputComponent;
