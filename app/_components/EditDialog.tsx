"use client";
import React from "react";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "react-toastify";

interface DialogEditProps {
  item?: any;
  trigger: React.ReactNode;
  title: string;
  description: string;
  className?: string;
  contents: { name: string; key: string; type: string }[];
  save?: (data: any) => Promise<any>;
}

function DialogEdit({
  item,
  trigger,
  title,
  description,
  className,
  contents,
  save,
}: DialogEditProps) {
  const [open, setOpen] = React.useState(false);
  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    item[e.target.id] = e.target.value;
  };
  
  const handleEdit = async () => {
    if (save) {
      const res = await save(item);
      if(res.code === 200) {
        toast.success("Action Edit success");
        setOpen(false);
      }else{
        toast.error("Action Edit failed");
      }
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent className={`sm:max-w-md ${className}`}>
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription>{description}</DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          {contents.map((content, index) => (
            <div key={index} className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor={content.name} className="text-right">
                {content.name}
              </Label>
              <Input
                type={content.type}
                id={content.key}
                defaultValue={item[content.key]}
                onChange={handleOnChange}
                className="col-span-3"
              />
            </div>
          ))}
        </div>
        <DialogFooter>
          <Button onClick={handleEdit}>Save</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export default DialogEdit;
