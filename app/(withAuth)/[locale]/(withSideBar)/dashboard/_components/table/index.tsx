import React from "react";
import Image from "next/image";

import type { License, Project } from "../../type";
import type { Meta } from "../type";

import { ArrowDown } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import DeleteIcon from "@/app/_components/Icons/DeleteIcon";
import EditIcon from "@/app/_components/Icons/EditIcon";
import DashboardPagination from "../pagination";
import { useTranslations } from "next-intl";
import DialogConfirm from "@/app/_components/ConfirmDialog";
import { deleteProject, editProject } from "../../action";
import DialogEdit from "@/app/_components/EditDialog";

const licenseStyle = (license: string) => {
  switch (license) {
    case "Customer data":
      return "bg-light-alpha-customer text-text-customer-data dark:bg-dark-alpha-customer";
    case "Admin":
      return "bg-light-alpha-admin dark:bg-dark-alpha-admin text-text-admin";
  }
};

interface TableProps {
  projects: Project[];
  meta: Meta;
}

const FORM_EDIT_PROPS = [
  { name: "Project", key: "name", type: "text" },
  { name: "Domain", key: "domain", type: "text" },
  { name: "Last Assessed", key: "lastAssessed", type: "date" },
];

const DashboardTable = ({ projects, meta }: TableProps) => {
  const t = useTranslations("DASHBOARD.TABLE_HEADER");

  return (
    <div className="m-4">
      <Table className="bg-main-opposition rounded-2xl ">
        <TableHeader>
          <TableRow>
            <TableHead>
              <div className="flex items-center gap-3 ml-3 ">
                <Checkbox className="w-5 h-5 bg-bg-checkbox border-border-checkbox  data-[state=checked]:bg-custom-green data-[state=checked]:text-black" />
                <div>{t("PROJECT")}</div>
                <span>
                  <ArrowDown />
                </span>
              </div>
            </TableHead>
            <TableHead>{t("LAST_ASSESSED")}</TableHead>
            <TableHead>{t("LICENSE_USE")}</TableHead>
            <TableHead className="text-right">{""}</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {projects.map((project: Project) => (
            <TableRow key={project.documentId}>
              <TableCell className="flex items-center space-x-3">
                <Checkbox className="ml-3 w-5 h-5 border bg-bg-checkbox border-border-checkbox data-[state=checked]:bg-custom-green data-[state=checked]:text-black" />
                <Image
                  className="rounded-3xl"
                  src={project.imageUrl}
                  width={40}
                  height={40}
                  alt=""
                />
                <div>
                  <div className="font-semibold text-main">{project.name}</div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">
                    {project.domain}
                  </div>
                </div>
              </TableCell>
              <TableCell className="text-secondary-grey-dark pl-4">
                {project.lastAssessed}
              </TableCell>
              <TableCell>
                <div className="flex gap-1 ">
                  <p className="bg-bg-license-active font-medium text-text-license-active px-2 py-1 rounded-full  text-xs">
                    &#x2022; {project.licenseStatus}
                  </p>
                  {project.license_uses.map((license: License) => (
                    <div
                      key={license.role}
                      className={`${licenseStyle(
                        license.role
                      )} px-2 py-1 font-medium rounded-full text-xs`}
                    >
                      {license.role}
                    </div>
                  ))}
                </div>
              </TableCell>
              <TableCell>
                <div className="flex gap-1 justify-end mr-1">
                  <div className="p-4 hover:cursor-pointer">
                    <DialogConfirm
                      item={project}
                      trigger={<DeleteIcon width="20" height="20" />}
                      title="Do you want to delete this project?"
                      description="Be careful, this action cannot be undone."
                      actionText="Delete"
                      className="bg-main-opposition"
                      actionConfirm={deleteProject}
                    />
                  </div>
                  <div className="p-4 hover:cursor-pointer">
                    <DialogEdit
                      item={project}
                      trigger={<EditIcon width="20" height="20" />}
                      title="Edit Project"
                      description="Make changes to your profile here. Click save when you're done."
                      contents={FORM_EDIT_PROPS}
                      className="bg-main-opposition"
                      save={editProject}
                    />
                  </div>
                </div>
              </TableCell>
            </TableRow>
          ))}
          <TableRow>
            <TableCell colSpan={5} className="text-center">
              <DashboardPagination meta={meta} />
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
};

export default DashboardTable;
