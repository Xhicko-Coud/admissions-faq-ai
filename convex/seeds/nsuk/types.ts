import type {
  KnowledgeEntryMetadata,
  KnowledgeEntryStatus,
  KnowledgeEntryType,
} from "../../knowledge/types";
import type { CategoryStatus } from "../../categories/types";
import type { Id } from "../../_generated/dataModel";

export type NsukReviewLevel = "normal" | "manual_check_recommended";

export type NsukSeedMeta = {
  academicSession: string;
  importantNotes: readonly string[];
  needsReviewCount: number;
  needsReviewProgrammes: readonly string[];
  recordCount: number;
  school: string;
  schoolShortName: string;
  sourceLabel: string;
};

export type NsukSeedCategory = {
  description: string;
  displayOrder: number;
  name: string;
  slug: string;
  status: Extract<CategoryStatus, "active">;
};

export type NsukRequiredSubjectGroup = {
  choose: number;
  options: readonly string[];
  slot: string;
};

export type NsukJambRequirement = {
  compulsorySubjects: readonly string[];
  optionalChooseCount: number;
  optionalSubjects: readonly string[];
  requiredSubjectGroups: readonly NsukRequiredSubjectGroup[];
  ruleSummary: string;
  totalRequiredSubjects: number;
};

export type NsukOlevelRequirement = {
  acceptedExamTypes: readonly string[];
  compulsorySubjects: readonly string[];
  globalCompulsorySubjects: readonly string[];
  minimumCredits: number;
  optionalSubjects: readonly string[];
  programmeSpecificCompulsorySubjects: readonly string[];
  ruleSummary: string;
};

export type NsukProgrammeRequirementSeedRecord = {
  academicSession: string;
  answer: string;
  categorySlug: string;
  content: string;
  jamb: NsukJambRequirement;
  keywords: readonly string[];
  needsReview: boolean;
  olevel: NsukOlevelRequirement;
  programme: string;
  question: string;
  questionVariants: readonly string[];
  reviewLevel: NsukReviewLevel;
  school: string;
  schoolShortName: string;
  slug: string;
  sourceLabel: string;
  sourceNotes: readonly string[];
  sourcePages: readonly number[];
  status: KnowledgeEntryStatus;
  title: string;
  type: Extract<KnowledgeEntryType, "programme">;
  warnings: readonly string[];
};

export type NsukAdmissionSeedData = {
  categories: readonly NsukSeedCategory[];
  meta: NsukSeedMeta;
  programmeRequirements: readonly NsukProgrammeRequirementSeedRecord[];
};

export type NsukProgrammeImportIdentity = {
  academicSession: string;
  programme: string;
  seedSlug: string;
  sourceLabel: string;
};

export type NsukPreparedCategorySeed = NsukSeedCategory;

export type NsukKnowledgeEntrySeedPayload = {
  answer: string;
  categorySlug: string;
  content: string;
  importIdentity: NsukProgrammeImportIdentity;
  keywords: string[];
  metadata: KnowledgeEntryMetadata;
  question: string;
  sourceLabel: string;
  status: KnowledgeEntryStatus;
  title: string;
  type: Extract<KnowledgeEntryType, "programme">;
};

export type NsukCategorySeedValidationResult =
  | {
      categories: NsukPreparedCategorySeed[];
      isValid: true;
      normalizedCategorySlugs: string[];
      status: "success";
    }
  | {
      issues: string[];
      isValid: false;
      status: "invalid_seed_categories";
    };

export type NsukCategorySlugResolution = {
  categoryId: Id<"categories">;
  categorySlug: string;
};

export type NsukCategoryUpsertResult = {
  categoryId: Id<"categories">;
  categorySlug: string;
  status: "created" | "reused" | "updated";
};
