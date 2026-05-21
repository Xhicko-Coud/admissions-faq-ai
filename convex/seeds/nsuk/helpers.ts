import { KNOWLEDGE_ENTRY_STATUSES } from "../../knowledge/types";
import type {
  KnowledgeEntryMetadata,
  KnowledgeEntryStatus,
} from "../../knowledge/types";
import type {
  NsukKnowledgeEntrySeedPayload,
  NsukPreparedCategorySeed,
  NsukProgrammeImportIdentity,
  NsukProgrammeRequirementSeedRecord,
  NsukSeedCategory,
} from "./types";

export function mapNsukSeedCategory(
  category: NsukSeedCategory,
): NsukPreparedCategorySeed {
  return {
    description: category.description.trim(),
    displayOrder: category.displayOrder,
    name: category.name.trim(),
    slug: category.slug.trim(),
    status: category.status,
  };
}

export function mapNsukProgrammeToKnowledgePayload(
  record: NsukProgrammeRequirementSeedRecord,
): NsukKnowledgeEntrySeedPayload {
  return {
    answer: record.answer.trim(),
    categorySlug: record.categorySlug.trim(),
    content: record.content.trim(),
    importIdentity: buildNsukProgrammeImportIdentity(record),
    keywords: buildNsukKnowledgeKeywords(record),
    metadata: mapNsukProgrammeToKnowledgeMetadata(record),
    question: record.question.trim(),
    sourceLabel: record.sourceLabel.trim(),
    status: getNsukKnowledgeStatus(record),
    title: record.title.trim(),
    type: record.type,
  };
}

export function mapNsukProgrammeToKnowledgeMetadata(
  record: NsukProgrammeRequirementSeedRecord,
): KnowledgeEntryMetadata {
  return {
    academicSession: record.academicSession.trim(),
    jamb: {
      compulsorySubjects: dedupeTrimmedStrings(record.jamb.compulsorySubjects),
      optionalChooseCount: record.jamb.optionalChooseCount,
      optionalSubjects: dedupeTrimmedStrings(record.jamb.optionalSubjects),
      requiredSubjectGroups: record.jamb.requiredSubjectGroups.map((group) => ({
        choose: group.choose,
        options: dedupeTrimmedStrings(group.options),
        slot: group.slot.trim(),
      })),
      ruleSummary: record.jamb.ruleSummary.trim(),
      totalRequiredSubjects: record.jamb.totalRequiredSubjects,
    },
    needsReview: record.needsReview,
    olevel: {
      acceptedExamTypes: dedupeTrimmedStrings(record.olevel.acceptedExamTypes),
      compulsorySubjects: dedupeTrimmedStrings(record.olevel.compulsorySubjects),
      globalCompulsorySubjects: dedupeTrimmedStrings(
        record.olevel.globalCompulsorySubjects,
      ),
      minimumCredits: record.olevel.minimumCredits,
      optionalSubjects: dedupeTrimmedStrings(record.olevel.optionalSubjects),
      programmeSpecificCompulsorySubjects: dedupeTrimmedStrings(
        record.olevel.programmeSpecificCompulsorySubjects,
      ),
      ruleSummary: record.olevel.ruleSummary.trim(),
    },
    programme: record.programme.trim(),
    programmeSlug: record.slug.trim(),
    questionVariants: dedupeQuestionVariants(record.questionVariants),
    reviewLevel: record.reviewLevel,
    school: record.school.trim(),
    schoolShortName: record.schoolShortName.trim(),
    sourceNotes: dedupeTrimmedStrings(record.sourceNotes),
    sourcePages: dedupeNumbers(record.sourcePages),
    warnings: dedupeTrimmedStrings(record.warnings),
  };
}

export function buildNsukProgrammeImportIdentity(
  record: NsukProgrammeRequirementSeedRecord,
): NsukProgrammeImportIdentity {
  return {
    academicSession: record.academicSession.trim(),
    programme: record.programme.trim(),
    seedSlug: record.slug.trim(),
    sourceLabel: record.sourceLabel.trim(),
  };
}

export function getNsukKnowledgeStatus(
  record: Pick<NsukProgrammeRequirementSeedRecord, "needsReview" | "reviewLevel">,
): KnowledgeEntryStatus {
  return record.needsReview || record.reviewLevel === "manual_check_recommended"
    ? KNOWLEDGE_ENTRY_STATUSES.draft
    : KNOWLEDGE_ENTRY_STATUSES.published;
}

export function buildNsukKnowledgeKeywords(
  record: NsukProgrammeRequirementSeedRecord,
): string[] {
  return dedupeTrimmedStrings([
    ...record.keywords,
    record.programme,
    record.title,
    record.schoolShortName,
    record.sourceLabel,
    ...dedupeQuestionVariants(record.questionVariants),
  ]);
}

export function dedupeQuestionVariants(values: readonly string[]): string[] {
  return dedupeTrimmedStrings(values);
}

export function dedupeTrimmedStrings(values: readonly string[]): string[] {
  const seen = new Set<string>();
  const dedupedValues: string[] = [];

  for (const value of values) {
    const trimmedValue = value.trim();

    if (!trimmedValue) {
      continue;
    }

    const comparisonValue = trimmedValue.toLocaleLowerCase();

    if (seen.has(comparisonValue)) {
      continue;
    }

    seen.add(comparisonValue);
    dedupedValues.push(trimmedValue);
  }

  return dedupedValues;
}

function dedupeNumbers(values: readonly number[]): number[] {
  return Array.from(new Set(values));
}
