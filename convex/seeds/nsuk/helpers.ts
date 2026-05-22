import {
  KNOWLEDGE_ENTRY_STATUSES,
  KNOWLEDGE_ENTRY_TYPES,
} from "../../knowledge/types";
import type {
  KnowledgeEntryMetadata,
  KnowledgeEntryStatus,
} from "../../knowledge/types";
import type {
  NsukKnowledgeEntrySeedPayload,
  NsukPreparedCategorySeed,
  NsukProgrammeImportIdentity,
  NsukProgrammeRequirementSeedRecord,
  NsukSeedMeta,
  NsukSeedCategory,
} from "./types";

const NSUK_PROGRAMME_LIST_SLUG = "nsuk-undergraduate-programmes-list";
const NSUK_PROGRAMME_LIST_CATEGORY_SLUG = "programme-requirements";
const NSUK_PROGRAMME_LIST_TITLE = "NSUK Undergraduate Programmes List";
const NSUK_PROGRAMME_LIST_QUESTION =
  "What undergraduate programmes are available in NSUK?";

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

export function buildNsukProgrammeListKnowledgePayload(args: {
  meta: NsukSeedMeta;
  records: readonly NsukProgrammeRequirementSeedRecord[];
}): NsukKnowledgeEntrySeedPayload {
  const publishedRecords = args.records.filter(
    (record) => getNsukKnowledgeStatus(record) === KNOWLEDGE_ENTRY_STATUSES.published,
  );
  const programmes = getSortedUniqueProgrammes(publishedRecords);
  const programmeList = programmes.join(", ");
  const questionVariants = buildNsukProgrammeListQuestionVariants();
  const sourcePages = Array.from(
    new Set(publishedRecords.flatMap((record) => record.sourcePages)),
  ).sort((first, second) => first - second);

  return {
    answer: [
      `${args.meta.schoolShortName} has ${programmes.length} undergraduate programmes in this admission source.`,
      `The programmes include: ${programmeList}.`,
      "For JAMB and O'Level requirements, ask about a specific programme, for example: \"What JAMB subjects do I need for Computer Science?\"",
    ].join(" "),
    categorySlug: NSUK_PROGRAMME_LIST_CATEGORY_SLUG,
    content: [
      `School: ${args.meta.school} (${args.meta.schoolShortName})`,
      `Academic session: ${args.meta.academicSession}`,
      `Programme count: ${programmes.length}`,
      "Undergraduate programmes:",
      ...programmes.map((programme) => `- ${programme}`),
      "",
      "This entry lists available undergraduate programmes only. For JAMB subject combinations and O'Level requirements, ask about a specific programme.",
    ].join("\n"),
    importIdentity: {
      academicSession: args.meta.academicSession.trim(),
      programme: NSUK_PROGRAMME_LIST_TITLE,
      seedSlug: NSUK_PROGRAMME_LIST_SLUG,
      sourceLabel: args.meta.sourceLabel.trim(),
    },
    keywords: dedupeTrimmedStrings([
      args.meta.schoolShortName,
      args.meta.school,
      "NSUK programmes",
      "NSUK courses",
      "NSUK course list",
      "NSUK programme list",
      "undergraduate programmes",
      "available programmes",
      "available courses",
      ...programmes,
      ...questionVariants,
    ]),
    metadata: {
      academicSession: args.meta.academicSession.trim(),
      programme: NSUK_PROGRAMME_LIST_TITLE,
      programmeSlug: NSUK_PROGRAMME_LIST_SLUG,
      questionVariants,
      school: args.meta.school.trim(),
      schoolShortName: args.meta.schoolShortName.trim(),
      sourceNotes: [
        `${programmes.length} undergraduate programmes listed from ${args.meta.sourceLabel}.`,
      ],
      sourcePages,
    },
    question: NSUK_PROGRAMME_LIST_QUESTION,
    sourceLabel: args.meta.sourceLabel.trim(),
    status: KNOWLEDGE_ENTRY_STATUSES.published,
    title: NSUK_PROGRAMME_LIST_TITLE,
    type: KNOWLEDGE_ENTRY_TYPES.programme,
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

function buildNsukProgrammeListQuestionVariants() {
  return [
    "What programmes are available in NSUK?",
    "List all undergraduate programmes in NSUK.",
    "What courses are available at NSUK?",
    "What can I study at NSUK?",
    "Show me NSUK undergraduate programmes.",
    "Does NSUK offer undergraduate programmes?",
    "NSUK course list.",
    "NSUK programme list.",
  ];
}

function getSortedUniqueProgrammes(
  records: readonly NsukProgrammeRequirementSeedRecord[],
) {
  return dedupeTrimmedStrings(records.map((record) => record.programme)).sort(
    (first, second) => first.localeCompare(second),
  );
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
