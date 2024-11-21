import React from "react";
import Image from "next/image";

import { ArrowDown } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import DeleteIcon from "@/app/_components/Icons/DeleteIcon";
import EditIcon from "@/app/_components/Icons/EditIcon";

const licenseStyle = (license: string) => {
  switch(license) {
    case 'Customer data':
      return 'bg-light-alpha-customer text-text-customer-data dark:bg-dark-alpha-customer';
    case 'Admin':
      return 'bg-light-alpha-admin dark:bg-dark-alpha-admin text-text-admin';
  }
}

const DashboardTable = ({ data }: any) => {
  return (
    <div className="m-4">
      <Table className="bg-main-opposition  rounded-2xl ">
      <TableHeader>
        <TableRow>
          <TableHead>
            <div className="flex items-center gap-3 ml-3 ">
              <Checkbox className="w-5 h-5 bg-bg-checkbox border-border-checkbox  data-[state=checked]:bg-custom-green data-[state=checked]:text-black"/>
              <div>Project</div>
              <span><ArrowDown/></span> 
            </div> 
          </TableHead>
          <TableHead>Last assessed</TableHead>
          <TableHead>License use</TableHead>
          <TableHead className="text-right">{""}</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.map((item: any, index: any) => (
          <TableRow key={index}>
            <TableCell className="flex items-center space-x-3">
              <Checkbox className="ml-3 w-5 h-5 border bg-bg-checkbox border-border-checkbox data-[state=checked]:bg-custom-green data-[state=checked]:text-black"/>
              <Image className="rounded-3xl" src={'/images/Sisyphus.png'} width={40} height={40} alt=""/>
              <div>
                <div className="font-semibold text-main">{item.project}</div>
                <div className="text-sm text-gray-500 dark:text-gray-400">
                  {item.domain}
                </div>
              </div>
            </TableCell>
            <TableCell className="text-secondary-grey-dark pl-4">{item.lastAssessed}</TableCell>
            <TableCell>
                <div className="flex gap-1 ">
                  <p className="bg-bg-license-active font-medium text-text-license-active px-2 py-1 rounded-full  text-xs">&#x2022; {item.licenseStatus}</p>
                  {
                    item.licenseUse.map((use: any, index: any) => (
                      <div key={index} className={`${licenseStyle(use)} px-2 py-1 font-medium rounded-full text-xs`}>{use}</div>
                    ))
                  }
                </div>
            </TableCell>
            <TableCell>
              <div className="flex gap-1 justify-end mr-1">
                <div className="p-4 hover:cursor-pointer"><DeleteIcon width="20" height="20" /></div>
                <div className="p-4 hover:cursor-pointer"><EditIcon width="20" height="20" /></div>
              </div>
            </TableCell>
          </TableRow>
        ))}
        <TableRow>
          <TableCell colSpan={5} className="text-center">
            {/* Pagination */}
            <div className="flex p-2 justify-between items-center">
              <button className="px-4 py-2 bg-bg-navigation text-sm text-main rounded-lg border border-border-navigation hover:cursor-pointer">Previous</button>
              <span className="text-secondary-grey-dark">Page 1 of 10</span>
              <button className="px-4 py-2 bg-bg-navigation text-sm rounded-lg border border-border-navigation hover:cursor-pointer">Next</button>
            </div>
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
    </div>
  );
};

export default DashboardTable;