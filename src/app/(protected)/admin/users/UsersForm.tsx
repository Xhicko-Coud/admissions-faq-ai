import { Eye, EyeOff, LockKeyhole, Mail, UserRound } from "lucide-react";
import { Controller, type UseFormReturn } from "react-hook-form";
import { useState, type FormEventHandler } from "react";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import {
  formatRoleLabel,
  type CreateUserFormValues,
  type UserRole,
} from "./UsersLogic";

const AVAILABLE_ROLES = [
  { label: "Admin", value: "admin" },
  { label: "Editor", value: "editor" },
  { label: "Reviewer", value: "reviewer" },
] satisfies Array<{ label: string; value: UserRole }>;

type UsersFormProps = {
  createForm: UseFormReturn<CreateUserFormValues>;
  onCreateSubmit: FormEventHandler<HTMLFormElement>;
};

export function UsersForm({ createForm, onCreateSubmit }: UsersFormProps) {
  const {
    control,
    formState: { errors },
    register,
  } = createForm;
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <form className="grid gap-5 py-4" id="create-user-form" onSubmit={onCreateSubmit}>
      <div className="grid gap-1.5">
        <Label className="text-sm font-medium text-primary" htmlFor="user-name">
          Full Name
        </Label>
        <div className="relative">
          <UserRound className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-primary/55" />
          <Input
            aria-invalid={Boolean(errors.name)}
            className="pl-10"
            defaultValue=""
            id="user-name"
            placeholder="Enter full name"
            {...register("name")}
          />
        </div>
        {errors.name ? (
          <p className="text-sm text-destructive">{errors.name.message}</p>
        ) : null}
      </div>

      <div className="grid gap-1.5">
        <Label className="text-sm font-medium text-primary" htmlFor="user-email">
          Email Address
        </Label>
        <div className="relative">
          <Mail className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-primary/55" />
          <Input
            aria-invalid={Boolean(errors.email)}
            className="pl-10"
            defaultValue=""
            id="user-email"
            placeholder="Enter email address"
            type="email"
            {...register("email")}
          />
        </div>
        {errors.email ? (
          <p className="text-sm text-destructive">{errors.email.message}</p>
        ) : null}
      </div>

      <div className="grid gap-1.5">
        <Label className="text-sm font-medium text-primary" htmlFor="user-password">
          Password
        </Label>
        <div className="relative">
          <LockKeyhole className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-primary/55" />
          <Input
            aria-invalid={Boolean(errors.password)}
            className="px-10"
            defaultValue=""
            id="user-password"
            placeholder="Enter a password"
            type={showPassword ? "text" : "password"}
            {...register("password")}
          />
          <button
            aria-label={showPassword ? "Hide password" : "Show password"}
            className="absolute right-3 top-1/2 flex size-5 -translate-y-1/2 cursor-pointer items-center justify-center text-primary/60 transition hover:text-primary"
            onClick={() => setShowPassword((current) => !current)}
            type="button"
          >
            {showPassword ? (
              <EyeOff className="size-4" />
            ) : (
              <Eye className="size-4" />
            )}
          </button>
        </div>
        {errors.password ? (
          <p className="text-sm text-destructive">{errors.password.message}</p>
        ) : null}
      </div>

      <div className="grid gap-1.5">
        <Label
          className="text-sm font-medium text-primary"
          htmlFor="user-confirm-password"
        >
          Confirm Password
        </Label>
        <div className="relative">
          <LockKeyhole className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-primary/55" />
          <Input
            aria-invalid={Boolean(errors.confirmPassword)}
            className="px-10"
            defaultValue=""
            id="user-confirm-password"
            placeholder="Confirm the password"
            type={showConfirmPassword ? "text" : "password"}
            {...register("confirmPassword")}
          />
          <button
            aria-label={
              showConfirmPassword
                ? "Hide confirm password"
                : "Show confirm password"
            }
            className="absolute right-3 top-1/2 flex size-5 -translate-y-1/2 cursor-pointer items-center justify-center text-primary/60 transition hover:text-primary"
            onClick={() => setShowConfirmPassword((current) => !current)}
            type="button"
          >
            {showConfirmPassword ? (
              <EyeOff className="size-4" />
            ) : (
              <Eye className="size-4" />
            )}
          </button>
        </div>
        {errors.confirmPassword ? (
          <p className="text-sm text-destructive">
            {errors.confirmPassword.message}
          </p>
        ) : null}
      </div>

      <div className="grid gap-1.5">
        <Label className="text-sm font-medium text-primary" htmlFor="user-role">
          Role
        </Label>
        <Controller
          control={control}
          name="role"
          render={({ field }) => (
            <Select onValueChange={field.onChange} value={field.value ?? "editor"}>
              <SelectTrigger
                aria-invalid={Boolean(errors.role)}
                className="w-full"
                id="user-role"
              >
                <SelectValue placeholder="Select role" />
              </SelectTrigger>
              <SelectContent>
                {AVAILABLE_ROLES.map((option) => (
                  <SelectItem key={option.value} value={option.value}>
                    {formatRoleLabel(option.value)}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          )}
        />
        {errors.role ? (
          <p className="text-sm text-destructive">{errors.role.message}</p>
        ) : null}
      </div>

      <p className="rounded-md border border-primary/10 bg-primary/5 px-3 py-2 text-xs text-primary/80">
        This screen creates trusted internal users for admissions FAQ workflows.
        Passwords are never shown after creation.
      </p>

      <button className="hidden" type="submit" />
    </form>
  );
}
