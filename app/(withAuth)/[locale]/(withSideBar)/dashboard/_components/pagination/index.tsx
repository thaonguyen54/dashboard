"use client";
import React from "react";
import type { Meta } from "../type";
import { useRouter } from "next/navigation";
import { useTranslations } from "next-intl";

interface MetaProps {
  meta: Meta;
}

const DashboardPagination = ({ meta }: MetaProps) => {
  const router = useRouter();
  const t = useTranslations("DASHBOARD.PAGINATION");

  const handleNext = (page: number) => {
    router.push(`?page=${page + 1}&pageSize=${meta.pagination.pageSize}`);
  };

  const handlePrevious = (page: number) => {
    router.push(`?page=${page - 1}&pageSize=${meta.pagination.pageSize}`);
  };

  return (
    <div className="flex p-2 justify-between items-center">
      <button
        disabled={meta.pagination.page <= 1}
        onClick={() => {
          handlePrevious(meta.pagination.page);
        }}
        className="px-4 py-2 bg-bg-navigation text-sm text-main rounded-lg border border-border-navigation hover:cursor-pointer"
      >
        {t("PREV")}
      </button>
      <span className="text-secondary-grey-dark">
        {t("PAGE")} {meta.pagination.page} of {meta.pagination.pageCount}
      </span>
      <button
        disabled={meta.pagination.page >= meta.pagination.pageCount}
        onClick={() => {
          handleNext(meta.pagination.page);
        }}
        className="px-4 py-2 bg-bg-navigation text-sm rounded-lg border border-border-navigation hover:cursor-pointer"
      >
        {t("NEXT")}
      </button>
    </div>
  );
};

export default DashboardPagination;
