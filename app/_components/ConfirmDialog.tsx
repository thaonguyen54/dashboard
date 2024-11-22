"use client";
import React from "react";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { toast } from "react-toastify";

interface DialogConfirmProps {
  item?: any;
  trigger: React.ReactNode;
  title: string;
  description: string;
  actionText: string;
  className?: string;
  actionConfirm?: (data: any) => Promise<any>;
}

const DialogConfirm = ({
  item,
  trigger,
  title,
  description,
  actionText,
  className,
  actionConfirm,
}: DialogConfirmProps) => {
  const handleConfirm = async () => {
    if (actionConfirm) {
      const res = await actionConfirm(item);
      console.log(res);
      
      if (res.code === 200) {
        toast.success("Action confirmed success");
      } else {
        toast.error("Action failed");
      }
    }
  };

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>{trigger}</AlertDialogTrigger>
      <AlertDialogContent className={className}>
        <AlertDialogHeader>
          <AlertDialogTitle>{title}</AlertDialogTitle>
          <AlertDialogDescription>{description}</AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Close</AlertDialogCancel>
          <AlertDialogAction onClick={handleConfirm}>
            {actionText}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default DialogConfirm;
