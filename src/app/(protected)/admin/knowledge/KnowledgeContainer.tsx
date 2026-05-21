"use client";

import { useQuery } from "convex/react";
import { useEffect, useMemo, useState } from "react";

import { AccessRestrictedState } from "@/components/auth/AccessRestrictedState";
import { api } from "@convex/_generated/api";

import { KnowledgeSkeleton } from "./KnowledgeSkeleton";
import { KnowledgeView } from "./KnowledgeView";
import type {
  KnowledgeEntry,
  KnowledgeStatusFilter,
  KnowledgeTypeFilter,
} from "./KnowledgeLogic";

export function KnowledgeContainer() {
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState<KnowledgeStatusFilter>("all");
  const [typeFilter, setTypeFilter] = useState<KnowledgeTypeFilter>("all");
  const [lastLoadedEntries, setLastLoadedEntries] = useState<KnowledgeEntry[]>([]);
  const [hasLoadedInitialData, setHasLoadedInitialData] = useState(false);

  const knowledgeArgs = useMemo(
    () => ({
      ...(searchQuery.trim() ? { search: searchQuery.trim() } : {}),
      ...(statusFilter !== "all" ? { status: statusFilter } : {}),
      ...(typeFilter !== "all" ? { type: typeFilter } : {}),
    }),
    [searchQuery, statusFilter, typeFilter],
  );

  const knowledgeResult = useQuery(
    api.knowledge.queries.listKnowledgeEntries,
    knowledgeArgs,
  );
  const categoriesResult = useQuery(api.categories.queries.listActiveCategories);

  useEffect(() => {
    if (knowledgeResult !== undefined && categoriesResult !== undefined) {
      setHasLoadedInitialData(true);
    }
  }, [categoriesResult, knowledgeResult]);

  useEffect(() => {
    if (knowledgeResult?.status === "success") {
      setLastLoadedEntries(knowledgeResult.entries);
    }
  }, [knowledgeResult]);

  const isLoading = knowledgeResult === undefined || categoriesResult === undefined;
  const isInitialLoading = !hasLoadedInitialData && isLoading;
  const isTableLoading = hasLoadedInitialData && isLoading;
  const activeCategories =
    categoriesResult?.status === "success" ? categoriesResult.categories : [];
  const categoriesUnavailable =
    categoriesResult !== undefined && categoriesResult.status !== "success";

  if (isInitialLoading) {
    return <KnowledgeSkeleton />;
  }

  if (
    knowledgeResult?.status === "forbidden" ||
    knowledgeResult?.status === "unauthenticated"
  ) {
    return (
      <AccessRestrictedState
        description="Your account does not have permission to view admissions knowledge entries."
        title="Access restricted"
      />
    );
  }

  const entries =
    knowledgeResult?.status === "success"
      ? knowledgeResult.entries
      : lastLoadedEntries;

  if (knowledgeResult !== undefined && knowledgeResult.status !== "success") {
    return (
      <KnowledgeView
        categories={activeCategories}
        entries={entries}
        isUnavailable
        isTableLoading={isTableLoading}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        setStatusFilter={setStatusFilter}
        setTypeFilter={setTypeFilter}
        statusFilter={statusFilter}
        typeFilter={typeFilter}
      />
    );
  }

  return (
    <KnowledgeView
      categories={activeCategories}
      entries={entries}
      isUnavailable={categoriesUnavailable}
      isTableLoading={isTableLoading}
      searchQuery={searchQuery}
      setSearchQuery={setSearchQuery}
      setStatusFilter={setStatusFilter}
      setTypeFilter={setTypeFilter}
      statusFilter={statusFilter}
      typeFilter={typeFilter}
    />
  );
}
