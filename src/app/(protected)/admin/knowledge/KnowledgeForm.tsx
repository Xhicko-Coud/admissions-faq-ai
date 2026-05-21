"use client";

import type { FormEventHandler } from "react";
import { Controller, type UseFormReturn } from "react-hook-form";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import type {
  ActiveCategory,
  KnowledgeEntry,
  KnowledgeFormValues,
  KnowledgeSheetMode,
} from "./KnowledgeLogic";
import {
  knowledgeStatusLabels,
  knowledgeTypeLabels,
  knowledgeTypeOptions,
} from "./knowledge-ui.constants";

export function KnowledgeForm({
  categories,
  currentCategoryFallback,
  form,
  getCategoryName,
  mode,
  onSubmit,
  sheetEntry,
}: {
  categories: ActiveCategory[];
  currentCategoryFallback?: {
    id: KnowledgeEntry["categoryId"];
    label: string;
  } | null;
  getCategoryName: (entry: KnowledgeEntry) => string;
  form: UseFormReturn<KnowledgeFormValues>;
  mode: KnowledgeSheetMode;
  onSubmit: FormEventHandler<HTMLFormElement>;
  sheetEntry: KnowledgeEntry | null;
}) {
  if (mode === "view" && sheetEntry) {
    return (
      <form
        className="grid gap-5 py-4"
        id="view-knowledge-form"
        key={`view-knowledge-form-${sheetEntry.id}`}
      >
        <ReadOnlyField
          id="view-knowledge-title"
          label="Title"
          value={sheetEntry.title}
        />
        <ReadOnlyField
          id="view-knowledge-type"
          label="Type"
          value={knowledgeTypeLabels[sheetEntry.type]}
        />
        <ReadOnlyField
          id="view-knowledge-category"
          label="Category"
          value={getCategoryName(sheetEntry)}
        />
        <ReadOnlyField
          id="view-knowledge-status"
          label="Status"
          value={knowledgeStatusLabels[sheetEntry.status]}
        />
        <ReadOnlyField
          id="view-knowledge-question"
          label="Question"
          value={sheetEntry.question ?? ""}
        />
        <ReadOnlyTextarea
          id="view-knowledge-answer"
          label="Answer"
          value={sheetEntry.answer ?? ""}
        />
        <ReadOnlyTextarea
          id="view-knowledge-content"
          label="Content"
          value={sheetEntry.content ?? ""}
        />
        <ReadOnlyField
          id="view-knowledge-keywords"
          label="Keywords"
          value={sheetEntry.keywords.length ? sheetEntry.keywords.join(", ") : ""}
        />
        <ReadOnlyField
          id="view-knowledge-source-label"
          label="Source Label"
          value={sheetEntry.sourceLabel ?? ""}
        />
        <ReadOnlyField
          id="view-knowledge-source-url"
          label="Source URL"
          value={sheetEntry.sourceUrl ?? ""}
        />
        <ReadOnlyField
          id="view-knowledge-created-at"
          label="Created At"
          value={formatDateTime(sheetEntry.createdAt)}
        />
        <ReadOnlyField
          id="view-knowledge-updated-at"
          label="Updated At"
          value={formatDateTime(sheetEntry.updatedAt)}
        />
        <ReadOnlyField
          id="view-knowledge-published-at"
          label="Published At"
          value={formatOptionalDateTime(sheetEntry.publishedAt)}
        />
        <ReadOnlyField
          id="view-knowledge-archived-at"
          label="Archived At"
          value={formatOptionalDateTime(sheetEntry.archivedAt)}
        />

        <p className="rounded-md border border-primary/10 bg-primary/5 px-3 py-2 text-xs text-primary/80">
          Safe knowledge entry details are shown here in read-only mode.
        </p>
      </form>
    );
  }

  const {
    control,
    formState: { errors },
    register,
    watch,
  } = form;

  const selectedType = watch("type");
  const isCreateMode = mode === "create";

  return (
    <form
      className="grid gap-5 py-4"
      id={isCreateMode ? "create-knowledge-form" : "edit-knowledge-form"}
      key={`${mode}-knowledge-form-${currentCategoryFallback?.id ?? "none"}`}
      onSubmit={onSubmit}
    >
      <div className="grid gap-1.5">
        <Label className="text-sm font-medium text-primary" htmlFor="knowledge-title">
          Title
        </Label>
        <Input
          aria-invalid={Boolean(errors.title)}
          id="knowledge-title"
          placeholder="Enter a clear knowledge title"
          {...register("title")}
        />
        {errors.title ? (
          <p className="text-sm text-destructive">{errors.title.message}</p>
        ) : null}
      </div>

      <div className="grid gap-1.5">
        <Label className="text-sm font-medium text-primary" htmlFor="knowledge-type">
          Type
        </Label>
        <Controller
          control={control}
          name="type"
          render={({ field }) => (
            <Select onValueChange={field.onChange} value={field.value}>
              <SelectTrigger
                aria-invalid={Boolean(errors.type)}
                className="w-full"
                id="knowledge-type"
              >
                <SelectValue placeholder="Select type" />
              </SelectTrigger>
              <SelectContent>
                {knowledgeTypeOptions.map((type) => (
                  <SelectItem key={type} value={type}>
                    {knowledgeTypeLabels[type]}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          )}
        />
        {errors.type ? (
          <p className="text-sm text-destructive">{errors.type.message}</p>
        ) : null}
      </div>

      <div className="grid gap-1.5">
        <Label
          className="text-sm font-medium text-primary"
          htmlFor="knowledge-category"
        >
          Category
        </Label>
        <Controller
          control={control}
          name="categoryId"
          render={({ field }) => (
            <Select onValueChange={field.onChange} value={field.value}>
              <SelectTrigger className="w-full" id="knowledge-category">
                <SelectValue placeholder="Select category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="none">Unassigned</SelectItem>
                {currentCategoryFallback?.id ? (
                  <SelectItem value={currentCategoryFallback.id}>
                    {currentCategoryFallback.label}
                  </SelectItem>
                ) : null}
                {categories.map((category) => (
                  <SelectItem key={category.id} value={category.id}>
                    {category.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          )}
        />
        {currentCategoryFallback ? (
          <p className="text-xs leading-5 text-muted-foreground">
            This entry is currently linked to a category that is no longer in the
            active category list. You can keep it or move the entry to an active
            category.
          </p>
        ) : categories.length === 0 ? (
          <p className="text-xs leading-5 text-muted-foreground">
            No active categories available yet. You can still {isCreateMode ? "create" : "update"} the entry
            without a category. Category management will be available from the
            Categories page later.
          </p>
        ) : null}
      </div>

      <div className="grid gap-1.5">
        <Label className="text-sm font-medium text-primary" htmlFor="knowledge-question">
          Question
        </Label>
        <Input
          aria-invalid={Boolean(errors.question)}
          id="knowledge-question"
          placeholder={
            selectedType === "faq"
              ? "Enter the question this entry should answer"
              : "Optional question or prompt"
          }
          {...register("question")}
        />
        {errors.question ? (
          <p className="text-sm text-destructive">{errors.question.message}</p>
        ) : (
          <p className="text-xs leading-5 text-muted-foreground">
            Use a natural student question where possible. Search indexing is
            generated automatically from this question and the entry content.
          </p>
        )}
      </div>

      <div className="grid gap-1.5">
        <Label className="text-sm font-medium text-primary" htmlFor="knowledge-answer">
          Answer
        </Label>
        <textarea
          aria-invalid={Boolean(errors.answer)}
          className="min-h-28 w-full resize-none rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-xs outline-none transition-[color,box-shadow] placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20"
          id="knowledge-answer"
          placeholder="Add the admissions answer text"
          {...register("answer")}
        />
        {errors.answer ? (
          <p className="text-sm text-destructive">{errors.answer.message}</p>
        ) : null}
      </div>

      <div className="grid gap-1.5">
        <Label className="text-sm font-medium text-primary" htmlFor="knowledge-content">
          Content
        </Label>
        <textarea
          aria-invalid={Boolean(errors.content)}
          className="min-h-32 w-full resize-none rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-xs outline-none transition-[color,box-shadow] placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20"
          id="knowledge-content"
          placeholder="Add extended admissions content if needed"
          {...register("content")}
        />
        {errors.content ? (
          <p className="text-sm text-destructive">{errors.content.message}</p>
        ) : null}
      </div>

      <div className="grid gap-1.5">
        <Label className="text-sm font-medium text-primary" htmlFor="knowledge-keywords">
          Keywords
        </Label>
        <Input
          aria-invalid={Boolean(errors.keywords)}
          id="knowledge-keywords"
          placeholder="admission, application, deadline"
          {...register("keywords")}
        />
        {errors.keywords ? (
          <p className="text-sm text-destructive">{errors.keywords.message}</p>
        ) : (
          <p className="text-xs leading-5 text-muted-foreground">
            Optional comma-separated terms. Full-text search also uses the title,
            question, answer, content, and source label.
          </p>
        )}
      </div>

      <div className="grid gap-1.5">
        <Label
          className="text-sm font-medium text-primary"
          htmlFor="knowledge-source-label"
        >
          Source Label
        </Label>
        <Input
          aria-invalid={Boolean(errors.sourceLabel)}
          id="knowledge-source-label"
          placeholder="Admissions Handbook"
          {...register("sourceLabel")}
        />
        {errors.sourceLabel ? (
          <p className="text-sm text-destructive">
            {errors.sourceLabel.message}
          </p>
        ) : null}
      </div>

      <div className="grid gap-1.5">
        <Label className="text-sm font-medium text-primary" htmlFor="knowledge-source-url">
          Source URL
        </Label>
        <Input
          aria-invalid={Boolean(errors.sourceUrl)}
          id="knowledge-source-url"
          placeholder="https://example.edu/admissions"
          {...register("sourceUrl")}
        />
        {errors.sourceUrl ? (
          <p className="text-sm text-destructive">{errors.sourceUrl.message}</p>
        ) : null}
      </div>

      <p className="rounded-md border border-primary/10 bg-primary/5 px-3 py-2 text-xs text-primary/80">
        {isCreateMode
          ? "New entries are created as draft content for later review and publishing. Generated retrieval fields are handled by the backend."
          : "Status is preserved during editing. Publishing, archiving, and generated retrieval fields are handled separately."}
      </p>

      <button className="hidden" type="submit" />
    </form>
  );
}

function ReadOnlyField({
  id,
  label,
  value,
}: {
  id: string;
  label: string;
  value: string | null;
}) {
  return (
    <div className="grid gap-1.5">
      <Label className="text-sm font-medium text-primary" htmlFor={id}>
        {label}
      </Label>
      <Input disabled id={id} readOnly value={value ?? ""} />
    </div>
  );
}

function ReadOnlyTextarea({
  id,
  label,
  value,
}: {
  id: string;
  label: string;
  value: string;
}) {
  return (
    <div className="grid gap-1.5">
      <Label className="text-sm font-medium text-primary" htmlFor={id}>
        {label}
      </Label>
      <textarea
        className="min-h-28 w-full resize-none rounded-md border border-input bg-transparent px-3 py-2 text-sm text-foreground shadow-xs outline-none disabled:cursor-not-allowed disabled:opacity-50"
        disabled
        id={id}
        readOnly
        value={value}
      />
    </div>
  );
}

function formatDateTime(timestamp: number) {
  return new Date(timestamp).toLocaleString("en-US", {
    day: "numeric",
    hour: "numeric",
    minute: "2-digit",
    month: "short",
    year: "numeric",
  });
}

function formatOptionalDateTime(timestamp: number | null) {
  return timestamp ? formatDateTime(timestamp) : null;
}
