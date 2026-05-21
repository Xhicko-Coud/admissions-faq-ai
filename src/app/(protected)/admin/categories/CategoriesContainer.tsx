"use client";

import { useQuery } from "convex/react";
import { useEffect, useMemo, useState } from "react";

import { AccessRestrictedState } from "@/components/auth/AccessRestrictedState";
import { api } from "@convex/_generated/api";

import { CategoriesSkeleton } from "./CategoriesSkeleton";
import { CategoriesView } from "./CategoriesView";
import type { CategoryRecord, CategoryStatusFilter } from "./category-ui.constants";

export function CategoriesContainer() {
  const [statusFilter, setStatusFilter] = useState<CategoryStatusFilter>("all");
  const [lastLoadedCategories, setLastLoadedCategories] = useState<
    CategoryRecord[]
  >([]);
  const [hasLoadedInitialData, setHasLoadedInitialData] = useState(false);

  const categoryArgs = useMemo(
    () => ({
      ...(statusFilter !== "all" ? { status: statusFilter } : {}),
    }),
    [statusFilter],
  );

  const categoriesResult = useQuery(
    api.categories.queries.listCategories,
    categoryArgs,
  );

  useEffect(() => {
    if (categoriesResult !== undefined) {
      setHasLoadedInitialData(true);
    }
  }, [categoriesResult]);

  useEffect(() => {
    if (categoriesResult?.status === "success") {
      setLastLoadedCategories(categoriesResult.categories);
    }
  }, [categoriesResult]);

  const isLoading = categoriesResult === undefined;
  const isInitialLoading = !hasLoadedInitialData && isLoading;
  const isTableLoading = hasLoadedInitialData && isLoading;

  if (isInitialLoading) {
    return <CategoriesSkeleton />;
  }

  if (categoriesResult === undefined) {
    return (
      <CategoriesView
        categories={lastLoadedCategories}
        isTableLoading={isTableLoading}
        setStatusFilter={setStatusFilter}
        statusFilter={statusFilter}
      />
    );
  }

  if (
    categoriesResult.status === "forbidden" ||
    categoriesResult.status === "unauthenticated"
  ) {
    return (
      <AccessRestrictedState
        description="Your account does not have permission to view admissions categories."
        title="Access restricted"
      />
    );
  }

  if (categoriesResult.status !== "success") {
    return (
      <CategoriesView
        categories={lastLoadedCategories}
        isTableLoading={isTableLoading}
        isUnavailable
        setStatusFilter={setStatusFilter}
        statusFilter={statusFilter}
      />
    );
  }

  return (
    <CategoriesView
      categories={categoriesResult.categories}
      isTableLoading={isTableLoading}
      setStatusFilter={setStatusFilter}
      statusFilter={statusFilter}
    />
  );
}
