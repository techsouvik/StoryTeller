"use client";
import React from "react";
import { Button } from "./ui/button";
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
} from "./ui/alert-dialog";
import prisma from "@/utils/db";
import { toast } from "sonner";
import { deleteStory } from "@/actions/DeleteStory";
import { useRouter } from "next/navigation";

const DeleteStory = ({ id }: { id: string }) => {
  const router = useRouter();

  async function DelStory() {
    const { error } = await deleteStory(id);
    if (error) {
      toast.error("Story not deleted!");
      return;
    }
    toast.success("Story deleted successfully!");
    router.refresh();
    return;
  }

  return (
    <div>
      <AlertDialog>
        <AlertDialogTrigger asChild>
          <Button size={"sm"} className="bg-green-800 hover:bg-green-900 w-fit">
            Delete Story
          </Button>
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
            <AlertDialogDescription className="text-green-900">
              This action cannot be undone. This will permanently delete your
              story and remove your story data from our servers.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter className="w-full flex items-center">
            <AlertDialogCancel className="bg-green-800 mb-2  hover:bg-green-800 text-green-100 hover:text-green-100">
              Cancel
            </AlertDialogCancel>
            <AlertDialogAction
              className="bg-green-800 hover:bg-green-800 text-green-100 hover:text-green-100"
              onClick={DelStory}
            >
              Continue
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
};

export default DeleteStory;
