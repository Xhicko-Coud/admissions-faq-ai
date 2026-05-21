"use client";

import type { FormEventHandler } from "react";
import { Controller } from "react-hook-form";
import type { UseFormReturn } from "react-hook-form";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { CategoryStatusBadge, formatDate } from "./CategoriesTable";
import type {
  CategoryFormValues,
  CategorySheetMode,
} from "./CategoriesLogic";
import type { CategoryRecord } from "./category-ui.constants";

export function CategoryForm({
  category,
  form,
  mode,
  onSubmit,
}: {
  category: CategoryRecord | null;
  form: UseFormReturn<CategoryFormValues>;
  mode: CategorySheetMode;
  onSubmit: FormEventHandler<HTMLFormElement>;
}) {
  if (mode === "view" && category) {
    return (
      <form
        className="grid gap-5 py-4"
        id="view-category-form"
        key={`view-category-form-${category.id}`}
      >
        <ReadOnlyField
          id="view-category-name"
          label="Name"
          value={category.name}
        />
        <ReadOnlyField
          id="view-category-slug"
          label="Slug"
          value={category.slug}
        />
        <ReadOnlyTextarea
          id="view-category-description"
          label="Description"
          value={category.description ?? "No description provided."}
        />
        <div className="grid gap-1.5">
          <Label className="text-sm font-medium text-primary">Status</Label>
          <div>
            <CategoryStatusBadge status={category.status} />
          </div>
        </div>
        <ReadOnlyField
          id="view-category-display-order"
          label="Display Order"
          value={category.displayOrder?.toString() ?? "Not set"}
        />
        <ReadOnlyField
          id="view-category-created-at"
          label="Created At"
          value={formatDate(category.createdAt)}
        />
        <ReadOnlyField
          id="view-category-updated-at"
          label="Updated At"
          value={formatDate(category.updatedAt)}
        />
        <ReadOnlyField
          id="view-category-archived-at"
          label="Archived At"
          value={formatDate(category.archivedAt)}
        />

        <p className="rounded-md border border-primary/10 bg-primary/5 px-3 py-2 text-xs text-primary/80">
          Safe category details are shown here in read-only mode.
        </p>
      </form>
    );
  }

  const {
    control,
    formState: { errors },
    register,
  } = form;

  return (
    <form
      className="grid gap-5 py-4"
      id={mode === "edit" ? "edit-category-form" : "create-category-form"}
      key={`${mode}-category-form-${category?.id ?? "new"}`}
      onSubmit={onSubmit}
    >
      <div className="grid gap-1.5">
        <Label className="text-sm font-medium text-primary" htmlFor="category-name">
          Name
        </Label>
        <Input
          aria-invalid={Boolean(errors.name)}
          id="category-name"
          placeholder="Admission Requirements"
          {...register("name")}
        />
        {errors.name ? (
          <p className="text-sm text-destructive">{errors.name.message}</p>
        ) : null}
      </div>

      <div className="grid gap-1.5">
        <Label
          className="text-sm font-medium text-primary"
          htmlFor="category-description"
        >
          Description
        </Label>
        <textarea
          aria-invalid={Boolean(errors.description)}
          className="min-h-28 w-full resize-none rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-xs outline-none transition-[color,box-shadow] placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20"
          id="category-description"
          placeholder="Briefly describe this admissions topic group"
          {...register("description")}
        />
        {errors.description ? (
          <p className="text-sm text-destructive">
            {errors.description.message}
          </p>
        ) : null}
      </div>

      <div className="grid gap-1.5">
        <Label
          className="text-sm font-medium text-primary"
          htmlFor="category-display-order"
        >
          Display Order
        </Label>
        <Input
          aria-invalid={Boolean(errors.displayOrder)}
          id="category-display-order"
          inputMode="numeric"
          placeholder="10"
          {...register("displayOrder")}
        />
        {errors.displayOrder ? (
          <p className="text-sm text-destructive">
            {errors.displayOrder.message}
          </p>
        ) : null}
      </div>

      {mode === "edit" ? (
        <div className="grid gap-1.5">
          <Label
            className="text-sm font-medium text-primary"
            htmlFor="category-status"
          >
            Status
          </Label>
          <Controller
            control={control}
            name="status"
            render={({ field }) => (
              <Select onValueChange={field.onChange} value={field.value}>
                <SelectTrigger
                  aria-invalid={Boolean(errors.status)}
                  className="w-full"
                  id="category-status"
                >
                  <SelectValue placeholder="Select status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="active">Active</SelectItem>
                  <SelectItem value="inactive">Inactive</SelectItem>
                </SelectContent>
              </Select>
            )}
          />
          {errors.status ? (
            <p className="text-sm text-destructive">{errors.status.message}</p>
          ) : null}
        </div>
      ) : null}

      <p className="rounded-md border border-primary/10 bg-primary/5 px-3 py-2 text-xs text-primary/80">
        The slug, status, timestamps, and actor fields are handled by the
        backend when this category is saved.
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
  value: string;
}) {
  return (
    <div className="grid gap-1.5">
      <Label className="text-sm font-medium text-primary" htmlFor={id}>
        {label}
      </Label>
      <Input disabled id={id} readOnly value={value} />
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
