// NSUK programme requirements seed data
// Source: NSUK Post UTME Subject Combination 2025/2026
// Generated as RAG-ready seed data for admissions-faq-ai.
// Import this into a Convex seed/admin action and map fields to your final knowledgeEntries schema.

export const nsukAdmissionSeedData = {
  "meta": {
    "school": "Nasarawa State University, Keffi",
    "schoolShortName": "NSUK",
    "academicSession": "2025/2026",
    "sourceLabel": "NSUK Post UTME Subject Combination 2025/2026",
    "recordCount": 82,
    "importantNotes": [
      "One programme is stored as one RAG-ready record.",
      "Mathematics and English Language are enforced as global O'Level compulsory subjects based on project rules.",
      "Some rows from the PDF were split across pages and marked needsReview for pre-production confirmation.",
      "This seed is designed for Knowledge Base ingestion; adapt field names to the final Convex schema."
    ],
    "needsReviewCount": 9,
    "needsReviewProgrammes": [
      "Banking and Finance",
      "Public Administration",
      "Home Science and Management",
      "Nutrition and Dietetics",
      "Home Economics Education",
      "Early Child Education",
      "Primary Education Studies",
      "Building Technology",
      "Chemistry"
    ]
  },
  "categories": [
    {
      "name": "Programme Requirements",
      "slug": "programme-requirements",
      "description": "Programme-specific JAMB and O'Level subject-combination requirements for NSUK undergraduate admission.",
      "status": "active",
      "displayOrder": 1
    },
    {
      "name": "JAMB Subject Combination",
      "slug": "jamb-subject-combination",
      "description": "JAMB/UTME subject combination guidance for undergraduate programmes.",
      "status": "active",
      "displayOrder": 2
    },
    {
      "name": "O'Level Requirements",
      "slug": "olevel-requirements",
      "description": "WAEC, NECO, NABTEB and other accepted senior secondary examination subject-credit requirements.",
      "status": "active",
      "displayOrder": 3
    },
    {
      "name": "Admission Guidance",
      "slug": "admission-guidance",
      "description": "Friendly explanations and warnings that help students understand eligibility rules.",
      "status": "active",
      "displayOrder": 4
    }
  ],
  "programmeRequirements": [
    {
      "school": "Nasarawa State University, Keffi",
      "schoolShortName": "NSUK",
      "academicSession": "2025/2026",
      "sourceLabel": "NSUK Post UTME Subject Combination 2025/2026",
      "programme": "Accounting",
      "slug": "nsuk-accounting-requirements",
      "categorySlug": "programme-requirements",
      "type": "programme",
      "status": "published",
      "title": "NSUK Accounting Admission Subject Combination",
      "question": "What are the JAMB and O'Level subject requirements for Accounting at NSUK?",
      "jamb": {
        "totalRequiredSubjects": 4,
        "compulsorySubjects": [
          "Use of English",
          "Mathematics",
          "Economics"
        ],
        "optionalChooseCount": 1,
        "optionalSubjects": [
          "Government/History",
          "Civic Education",
          "Geography",
          "Commerce",
          "Marketing",
          "Financial Accounting"
        ],
        "requiredSubjectGroups": [],
        "ruleSummary": "Candidate must register four JAMB subjects. Use of English is compulsory. The remaining subjects must follow the compulsory and optional subject rules for this programme."
      },
      "olevel": {
        "minimumCredits": 5,
        "globalCompulsorySubjects": [
          "English Language",
          "Mathematics"
        ],
        "programmeSpecificCompulsorySubjects": [
          "Economics"
        ],
        "compulsorySubjects": [
          "English Language",
          "Mathematics",
          "Economics"
        ],
        "optionalSubjects": [
          "Government/History",
          "Civic Education",
          "Geography",
          "Commerce",
          "Marketing",
          "Financial Accounting"
        ],
        "acceptedExamTypes": [
          "WAEC",
          "NECO",
          "NABTEB",
          "Other accepted senior secondary examinations"
        ],
        "ruleSummary": "Candidate must have at least five O'Level credit passes, including English Language and Mathematics, plus the programme-specific required/accepted subjects."
      },
      "warnings": [
        "Use of English in JAMB is different from English Language in O'Level; both must be treated separately.",
        "Correct JAMB subjects do not automatically satisfy O'Level requirements.",
        "Optional subjects should be selected only from the approved list for this programme.",
        "O'Level requires at least five credit passes, including English Language and Mathematics."
      ],
      "needsReview": false,
      "keywords": [
        "NSUK",
        "Nasarawa State University, Keffi",
        "Accounting",
        "JAMB",
        "UTME",
        "Post UTME",
        "O'Level",
        "WAEC",
        "NECO",
        "NABTEB",
        "subject combination",
        "admission requirement",
        "Use of English",
        "Mathematics",
        "Economics",
        "Government/History",
        "Civic Education",
        "Geography",
        "Commerce",
        "Marketing",
        "Financial Accounting",
        "English Language"
      ],
      "answer": "For Accounting at NSUK, the JAMB combination must include Use of English, Mathematics, Economics; the candidate should choose 1 subject(s) from Government/History, Civic Education, Geography, Commerce, Marketing, Financial Accounting to make four JAMB subjects. For O'Level, the candidate needs at least five credit passes including English Language, Mathematics, Economics. Accepted additional O'Level subjects include Government/History, Civic Education, Geography, Commerce, Marketing, Financial Accounting.",
      "content": "Programme: Accounting\nSchool: Nasarawa State University, Keffi (NSUK)\nAcademic session: 2025/2026\nRequirement type: JAMB subject combination and O'Level combination.\nJAMB requirement: The candidate must register four JAMB subjects. Compulsory JAMB subject(s): Use of English, Mathematics, Economics. Optional JAMB subject(s): Government/History, Civic Education, Geography, Commerce, Marketing, Financial Accounting. Optional subjects needed: 1.\nO'Level requirement: The candidate must have at least five credit passes from WAEC, NECO, NABTEB, or another accepted senior secondary examination. English Language and Mathematics are compulsory for O'Level. Programme-specific compulsory O'Level subject(s): Economics. Accepted optional O'Level subject(s): Government/History, Civic Education, Geography, Commerce, Marketing, Financial Accounting.\nStudent guidance: The student should not assume that any subject is accepted. They should match both the JAMB requirement and the O'Level requirement for Accounting.",
      "questionVariants": [
        "What are the JAMB subjects for Accounting at NSUK?",
        "What O'Level subjects do I need for Accounting at NSUK?",
        "What is the subject combination for Accounting in NSUK?",
        "Can I study Accounting with my JAMB subjects?",
        "Can I study Accounting without one of the listed compulsory subjects?",
        "What optional subjects are accepted for Accounting?",
        "Is Mathematics compulsory for Accounting at NSUK?",
        "Is English Language compulsory for Accounting at NSUK?",
        "What WAEC or NECO subjects do I need for Accounting?",
        "Does the right JAMB combination mean I am fully qualified for Accounting?",
        "Can I use Government/History for Accounting at NSUK?",
        "Can I use Civic Education for Accounting at NSUK?",
        "Can I use Geography for Accounting at NSUK?",
        "Can I use Government/History for Accounting at NSUK?",
        "Can I use Civic Education for Accounting at NSUK?",
        "Can I use Geography for Accounting at NSUK?"
      ],
      "sourcePages": [
        1
      ],
      "reviewLevel": "normal",
      "sourceNotes": [
        "Source page(s): 1."
      ]
    },
    {
      "school": "Nasarawa State University, Keffi",
      "schoolShortName": "NSUK",
      "academicSession": "2025/2026",
      "sourceLabel": "NSUK Post UTME Subject Combination 2025/2026",
      "programme": "Banking and Finance",
      "slug": "nsuk-banking-and-finance-requirements",
      "categorySlug": "programme-requirements",
      "type": "programme",
      "status": "published",
      "title": "NSUK Banking and Finance Admission Subject Combination",
      "question": "What are the JAMB and O'Level subject requirements for Banking and Finance at NSUK?",
      "jamb": {
        "totalRequiredSubjects": 4,
        "compulsorySubjects": [
          "Use of English",
          "Mathematics",
          "Economics"
        ],
        "optionalChooseCount": 1,
        "optionalSubjects": [
          "Government",
          "Geography"
        ],
        "requiredSubjectGroups": [],
        "ruleSummary": "Candidate must register four JAMB subjects. Use of English is compulsory. The remaining subjects must follow the compulsory and optional subject rules for this programme."
      },
      "olevel": {
        "minimumCredits": 5,
        "globalCompulsorySubjects": [
          "English Language",
          "Mathematics"
        ],
        "programmeSpecificCompulsorySubjects": [],
        "compulsorySubjects": [
          "English Language",
          "Mathematics"
        ],
        "optionalSubjects": [
          "Economics",
          "Government/History",
          "Civic Education",
          "Geography",
          "Commerce",
          "Marketing",
          "Financial Accounting",
          "Christian Religious Studies",
          "Literature-in-English",
          "Islamic Studies"
        ],
        "acceptedExamTypes": [
          "WAEC",
          "NECO",
          "NABTEB",
          "Other accepted senior secondary examinations"
        ],
        "ruleSummary": "Candidate must have at least five O'Level credit passes, including English Language and Mathematics, plus the programme-specific required/accepted subjects."
      },
      "warnings": [
        "Use of English in JAMB is different from English Language in O'Level; both must be treated separately.",
        "Correct JAMB subjects do not automatically satisfy O'Level requirements.",
        "Optional subjects should be selected only from the approved list for this programme.",
        "O'Level requires at least five credit passes, including English Language and Mathematics.",
        "This row was split or ambiguous in the PDF layout and should be reviewed against the source before production import.",
        "The source uses 'Use of English' in the O'Level column for this row; this seed normalizes the O'Level English requirement to English Language."
      ],
      "needsReview": true,
      "keywords": [
        "NSUK",
        "Nasarawa State University, Keffi",
        "Banking and Finance",
        "JAMB",
        "UTME",
        "Post UTME",
        "O'Level",
        "WAEC",
        "NECO",
        "NABTEB",
        "subject combination",
        "admission requirement",
        "Use of English",
        "Mathematics",
        "Economics",
        "Government",
        "Geography",
        "English Language",
        "Government/History",
        "Civic Education",
        "Commerce",
        "Marketing",
        "Financial Accounting",
        "Christian Religious Studies",
        "Literature-in-English",
        "Islamic Studies"
      ],
      "answer": "For Banking and Finance at NSUK, the JAMB combination must include Use of English, Mathematics, Economics; the candidate should choose 1 subject(s) from Government, Geography to make four JAMB subjects. For O'Level, the candidate needs at least five credit passes including English Language, Mathematics. Accepted additional O'Level subjects include Economics, Government/History, Civic Education, Geography, Commerce, Marketing, Financial Accounting, Christian Religious Studies, Literature-in-English, Islamic Studies.",
      "content": "Programme: Banking and Finance\nSchool: Nasarawa State University, Keffi (NSUK)\nAcademic session: 2025/2026\nRequirement type: JAMB subject combination and O'Level combination.\nJAMB requirement: The candidate must register four JAMB subjects. Compulsory JAMB subject(s): Use of English, Mathematics, Economics. Optional JAMB subject(s): Government, Geography. Optional subjects needed: 1.\nO'Level requirement: The candidate must have at least five credit passes from WAEC, NECO, NABTEB, or another accepted senior secondary examination. English Language and Mathematics are compulsory for O'Level. Programme-specific compulsory O'Level subject(s): none listed beyond English Language and Mathematics. Accepted optional O'Level subject(s): Economics, Government/History, Civic Education, Geography, Commerce, Marketing, Financial Accounting, Christian Religious Studies, Literature-in-English, Islamic Studies.\nStudent guidance: The student should not assume that any subject is accepted. They should match both the JAMB requirement and the O'Level requirement for Banking and Finance.",
      "questionVariants": [
        "What are the JAMB subjects for Banking and Finance at NSUK?",
        "What O'Level subjects do I need for Banking and Finance at NSUK?",
        "What is the subject combination for Banking and Finance in NSUK?",
        "Can I study Banking and Finance with my JAMB subjects?",
        "Can I study Banking and Finance without one of the listed compulsory subjects?",
        "What optional subjects are accepted for Banking and Finance?",
        "Is Mathematics compulsory for Banking and Finance at NSUK?",
        "Is English Language compulsory for Banking and Finance at NSUK?",
        "What WAEC or NECO subjects do I need for Banking and Finance?",
        "Does the right JAMB combination mean I am fully qualified for Banking and Finance?",
        "Can I use Government for Banking and Finance at NSUK?",
        "Can I use Geography for Banking and Finance at NSUK?",
        "Can I use Economics for Banking and Finance at NSUK?",
        "Can I use Government/History for Banking and Finance at NSUK?",
        "Can I use Civic Education for Banking and Finance at NSUK?"
      ],
      "sourcePages": [
        1
      ],
      "reviewLevel": "manual_check_recommended",
      "sourceNotes": [
        "Source page(s): 1."
      ]
    },
    {
      "school": "Nasarawa State University, Keffi",
      "schoolShortName": "NSUK",
      "academicSession": "2025/2026",
      "sourceLabel": "NSUK Post UTME Subject Combination 2025/2026",
      "programme": "Business Administration",
      "slug": "nsuk-business-administration-requirements",
      "categorySlug": "programme-requirements",
      "type": "programme",
      "status": "published",
      "title": "NSUK Business Administration Admission Subject Combination",
      "question": "What are the JAMB and O'Level subject requirements for Business Administration at NSUK?",
      "jamb": {
        "totalRequiredSubjects": 4,
        "compulsorySubjects": [
          "Use of English",
          "Mathematics",
          "Economics"
        ],
        "optionalChooseCount": 1,
        "optionalSubjects": [
          "Commerce",
          "Marketing",
          "Financial Accounting",
          "Government/History",
          "Civic Education",
          "Geography"
        ],
        "requiredSubjectGroups": [],
        "ruleSummary": "Candidate must register four JAMB subjects. Use of English is compulsory. The remaining subjects must follow the compulsory and optional subject rules for this programme."
      },
      "olevel": {
        "minimumCredits": 5,
        "globalCompulsorySubjects": [
          "English Language",
          "Mathematics"
        ],
        "programmeSpecificCompulsorySubjects": [
          "Economics"
        ],
        "compulsorySubjects": [
          "English Language",
          "Mathematics",
          "Economics"
        ],
        "optionalSubjects": [
          "Financial Accounting",
          "Business Method",
          "Commerce",
          "Government/History",
          "Geography",
          "Civic Education"
        ],
        "acceptedExamTypes": [
          "WAEC",
          "NECO",
          "NABTEB",
          "Other accepted senior secondary examinations"
        ],
        "ruleSummary": "Candidate must have at least five O'Level credit passes, including English Language and Mathematics, plus the programme-specific required/accepted subjects."
      },
      "warnings": [
        "Use of English in JAMB is different from English Language in O'Level; both must be treated separately.",
        "Correct JAMB subjects do not automatically satisfy O'Level requirements.",
        "Optional subjects should be selected only from the approved list for this programme.",
        "O'Level requires at least five credit passes, including English Language and Mathematics."
      ],
      "needsReview": false,
      "keywords": [
        "NSUK",
        "Nasarawa State University, Keffi",
        "Business Administration",
        "JAMB",
        "UTME",
        "Post UTME",
        "O'Level",
        "WAEC",
        "NECO",
        "NABTEB",
        "subject combination",
        "admission requirement",
        "Use of English",
        "Mathematics",
        "Economics",
        "Commerce",
        "Marketing",
        "Financial Accounting",
        "Government/History",
        "Civic Education",
        "Geography",
        "English Language",
        "Business Method"
      ],
      "answer": "For Business Administration at NSUK, the JAMB combination must include Use of English, Mathematics, Economics; the candidate should choose 1 subject(s) from Commerce, Marketing, Financial Accounting, Government/History, Civic Education, Geography to make four JAMB subjects. For O'Level, the candidate needs at least five credit passes including English Language, Mathematics, Economics. Accepted additional O'Level subjects include Financial Accounting, Business Method, Commerce, Government/History, Geography, Civic Education.",
      "content": "Programme: Business Administration\nSchool: Nasarawa State University, Keffi (NSUK)\nAcademic session: 2025/2026\nRequirement type: JAMB subject combination and O'Level combination.\nJAMB requirement: The candidate must register four JAMB subjects. Compulsory JAMB subject(s): Use of English, Mathematics, Economics. Optional JAMB subject(s): Commerce, Marketing, Financial Accounting, Government/History, Civic Education, Geography. Optional subjects needed: 1.\nO'Level requirement: The candidate must have at least five credit passes from WAEC, NECO, NABTEB, or another accepted senior secondary examination. English Language and Mathematics are compulsory for O'Level. Programme-specific compulsory O'Level subject(s): Economics. Accepted optional O'Level subject(s): Financial Accounting, Business Method, Commerce, Government/History, Geography, Civic Education.\nStudent guidance: The student should not assume that any subject is accepted. They should match both the JAMB requirement and the O'Level requirement for Business Administration.",
      "questionVariants": [
        "What are the JAMB subjects for Business Administration at NSUK?",
        "What O'Level subjects do I need for Business Administration at NSUK?",
        "What is the subject combination for Business Administration in NSUK?",
        "Can I study Business Administration with my JAMB subjects?",
        "Can I study Business Administration without one of the listed compulsory subjects?",
        "What optional subjects are accepted for Business Administration?",
        "Is Mathematics compulsory for Business Administration at NSUK?",
        "Is English Language compulsory for Business Administration at NSUK?",
        "What WAEC or NECO subjects do I need for Business Administration?",
        "Does the right JAMB combination mean I am fully qualified for Business Administration?",
        "Can I use Commerce for Business Administration at NSUK?",
        "Can I use Marketing for Business Administration at NSUK?",
        "Can I use Financial Accounting for Business Administration at NSUK?",
        "Can I use Financial Accounting for Business Administration at NSUK?",
        "Can I use Business Method for Business Administration at NSUK?",
        "Can I use Commerce for Business Administration at NSUK?"
      ],
      "sourcePages": [
        1
      ],
      "reviewLevel": "normal",
      "sourceNotes": [
        "Source page(s): 1."
      ]
    },
    {
      "school": "Nasarawa State University, Keffi",
      "schoolShortName": "NSUK",
      "academicSession": "2025/2026",
      "sourceLabel": "NSUK Post UTME Subject Combination 2025/2026",
      "programme": "Entrepreneurship",
      "slug": "nsuk-entrepreneurship-requirements",
      "categorySlug": "programme-requirements",
      "type": "programme",
      "status": "published",
      "title": "NSUK Entrepreneurship Admission Subject Combination",
      "question": "What are the JAMB and O'Level subject requirements for Entrepreneurship at NSUK?",
      "jamb": {
        "totalRequiredSubjects": 4,
        "compulsorySubjects": [
          "Use of English",
          "Mathematics",
          "Economics"
        ],
        "optionalChooseCount": 1,
        "optionalSubjects": [
          "Government/History",
          "Civic Education",
          "Geography",
          "Commerce",
          "Marketing",
          "Financial Accounting"
        ],
        "requiredSubjectGroups": [],
        "ruleSummary": "Candidate must register four JAMB subjects. Use of English is compulsory. The remaining subjects must follow the compulsory and optional subject rules for this programme."
      },
      "olevel": {
        "minimumCredits": 5,
        "globalCompulsorySubjects": [
          "English Language",
          "Mathematics"
        ],
        "programmeSpecificCompulsorySubjects": [
          "Economics"
        ],
        "compulsorySubjects": [
          "English Language",
          "Mathematics",
          "Economics"
        ],
        "optionalSubjects": [
          "Government/History",
          "Civic Education",
          "Geography",
          "Commerce",
          "Marketing",
          "Financial Accounting"
        ],
        "acceptedExamTypes": [
          "WAEC",
          "NECO",
          "NABTEB",
          "Other accepted senior secondary examinations"
        ],
        "ruleSummary": "Candidate must have at least five O'Level credit passes, including English Language and Mathematics, plus the programme-specific required/accepted subjects."
      },
      "warnings": [
        "Use of English in JAMB is different from English Language in O'Level; both must be treated separately.",
        "Correct JAMB subjects do not automatically satisfy O'Level requirements.",
        "Optional subjects should be selected only from the approved list for this programme.",
        "O'Level requires at least five credit passes, including English Language and Mathematics."
      ],
      "needsReview": false,
      "keywords": [
        "NSUK",
        "Nasarawa State University, Keffi",
        "Entrepreneurship",
        "JAMB",
        "UTME",
        "Post UTME",
        "O'Level",
        "WAEC",
        "NECO",
        "NABTEB",
        "subject combination",
        "admission requirement",
        "Use of English",
        "Mathematics",
        "Economics",
        "Government/History",
        "Civic Education",
        "Geography",
        "Commerce",
        "Marketing",
        "Financial Accounting",
        "English Language"
      ],
      "answer": "For Entrepreneurship at NSUK, the JAMB combination must include Use of English, Mathematics, Economics; the candidate should choose 1 subject(s) from Government/History, Civic Education, Geography, Commerce, Marketing, Financial Accounting to make four JAMB subjects. For O'Level, the candidate needs at least five credit passes including English Language, Mathematics, Economics. Accepted additional O'Level subjects include Government/History, Civic Education, Geography, Commerce, Marketing, Financial Accounting.",
      "content": "Programme: Entrepreneurship\nSchool: Nasarawa State University, Keffi (NSUK)\nAcademic session: 2025/2026\nRequirement type: JAMB subject combination and O'Level combination.\nJAMB requirement: The candidate must register four JAMB subjects. Compulsory JAMB subject(s): Use of English, Mathematics, Economics. Optional JAMB subject(s): Government/History, Civic Education, Geography, Commerce, Marketing, Financial Accounting. Optional subjects needed: 1.\nO'Level requirement: The candidate must have at least five credit passes from WAEC, NECO, NABTEB, or another accepted senior secondary examination. English Language and Mathematics are compulsory for O'Level. Programme-specific compulsory O'Level subject(s): Economics. Accepted optional O'Level subject(s): Government/History, Civic Education, Geography, Commerce, Marketing, Financial Accounting.\nStudent guidance: The student should not assume that any subject is accepted. They should match both the JAMB requirement and the O'Level requirement for Entrepreneurship.",
      "questionVariants": [
        "What are the JAMB subjects for Entrepreneurship at NSUK?",
        "What O'Level subjects do I need for Entrepreneurship at NSUK?",
        "What is the subject combination for Entrepreneurship in NSUK?",
        "Can I study Entrepreneurship with my JAMB subjects?",
        "Can I study Entrepreneurship without one of the listed compulsory subjects?",
        "What optional subjects are accepted for Entrepreneurship?",
        "Is Mathematics compulsory for Entrepreneurship at NSUK?",
        "Is English Language compulsory for Entrepreneurship at NSUK?",
        "What WAEC or NECO subjects do I need for Entrepreneurship?",
        "Does the right JAMB combination mean I am fully qualified for Entrepreneurship?",
        "Can I use Government/History for Entrepreneurship at NSUK?",
        "Can I use Civic Education for Entrepreneurship at NSUK?",
        "Can I use Geography for Entrepreneurship at NSUK?",
        "Can I use Government/History for Entrepreneurship at NSUK?",
        "Can I use Civic Education for Entrepreneurship at NSUK?",
        "Can I use Geography for Entrepreneurship at NSUK?"
      ],
      "sourcePages": [
        1
      ],
      "reviewLevel": "normal",
      "sourceNotes": [
        "Source page(s): 1."
      ]
    },
    {
      "school": "Nasarawa State University, Keffi",
      "schoolShortName": "NSUK",
      "academicSession": "2025/2026",
      "sourceLabel": "NSUK Post UTME Subject Combination 2025/2026",
      "programme": "Public Administration",
      "slug": "nsuk-public-administration-requirements",
      "categorySlug": "programme-requirements",
      "type": "programme",
      "status": "published",
      "title": "NSUK Public Administration Admission Subject Combination",
      "question": "What are the JAMB and O'Level subject requirements for Public Administration at NSUK?",
      "jamb": {
        "totalRequiredSubjects": 4,
        "compulsorySubjects": [
          "Use of English",
          "Government/History",
          "Economics"
        ],
        "optionalChooseCount": 1,
        "optionalSubjects": [
          "Civic Education",
          "Geography",
          "Christian Religious Studies",
          "Literature-in-English",
          "Islamic Studies"
        ],
        "requiredSubjectGroups": [
          {
            "slot": "Government/History",
            "choose": 1,
            "options": [
              "Government",
              "History"
            ]
          }
        ],
        "ruleSummary": "Candidate must register four JAMB subjects. Use of English is compulsory. The remaining subjects must follow the compulsory and optional subject rules for this programme."
      },
      "olevel": {
        "minimumCredits": 5,
        "globalCompulsorySubjects": [
          "English Language",
          "Mathematics"
        ],
        "programmeSpecificCompulsorySubjects": [
          "Economics",
          "Government/History"
        ],
        "compulsorySubjects": [
          "English Language",
          "Mathematics",
          "Economics",
          "Government/History"
        ],
        "optionalSubjects": [
          "Geography",
          "Commerce",
          "Marketing",
          "Financial Accounting",
          "Christian Religious Studies",
          "Literature-in-English",
          "Islamic Studies",
          "Civic Education"
        ],
        "acceptedExamTypes": [
          "WAEC",
          "NECO",
          "NABTEB",
          "Other accepted senior secondary examinations"
        ],
        "ruleSummary": "Candidate must have at least five O'Level credit passes, including English Language and Mathematics, plus the programme-specific required/accepted subjects."
      },
      "warnings": [
        "Use of English in JAMB is different from English Language in O'Level; both must be treated separately.",
        "Correct JAMB subjects do not automatically satisfy O'Level requirements.",
        "Optional subjects should be selected only from the approved list for this programme.",
        "O'Level requires at least five credit passes, including English Language and Mathematics.",
        "A slash in a subject slot, such as Biology/Agricultural Science, means the source presents alternatives for that slot; validate carefully during eligibility checks.",
        "This row was split or ambiguous in the PDF layout and should be reviewed against the source before production import."
      ],
      "needsReview": true,
      "keywords": [
        "NSUK",
        "Nasarawa State University, Keffi",
        "Public Administration",
        "JAMB",
        "UTME",
        "Post UTME",
        "O'Level",
        "WAEC",
        "NECO",
        "NABTEB",
        "subject combination",
        "admission requirement",
        "Use of English",
        "Government/History",
        "Economics",
        "Civic Education",
        "Geography",
        "Christian Religious Studies",
        "Literature-in-English",
        "Islamic Studies",
        "English Language",
        "Mathematics",
        "Commerce",
        "Marketing",
        "Financial Accounting"
      ],
      "answer": "For Public Administration at NSUK, the JAMB combination must include Use of English, Government/History, Economics; the candidate should choose 1 subject(s) from Civic Education, Geography, Christian Religious Studies, Literature-in-English, Islamic Studies to make four JAMB subjects. For O'Level, the candidate needs at least five credit passes including English Language, Mathematics, Economics, Government/History. Accepted additional O'Level subjects include Geography, Commerce, Marketing, Financial Accounting, Christian Religious Studies, Literature-in-English, Islamic Studies, Civic Education.",
      "content": "Programme: Public Administration\nSchool: Nasarawa State University, Keffi (NSUK)\nAcademic session: 2025/2026\nRequirement type: JAMB subject combination and O'Level combination.\nJAMB requirement: The candidate must register four JAMB subjects. Compulsory JAMB subject(s): Use of English, Government/History, Economics. Optional JAMB subject(s): Civic Education, Geography, Christian Religious Studies, Literature-in-English, Islamic Studies. Optional subjects needed: 1.\nO'Level requirement: The candidate must have at least five credit passes from WAEC, NECO, NABTEB, or another accepted senior secondary examination. English Language and Mathematics are compulsory for O'Level. Programme-specific compulsory O'Level subject(s): Economics, Government/History. Accepted optional O'Level subject(s): Geography, Commerce, Marketing, Financial Accounting, Christian Religious Studies, Literature-in-English, Islamic Studies, Civic Education.\nStudent guidance: The student should not assume that any subject is accepted. They should match both the JAMB requirement and the O'Level requirement for Public Administration.",
      "questionVariants": [
        "What are the JAMB subjects for Public Administration at NSUK?",
        "What O'Level subjects do I need for Public Administration at NSUK?",
        "What is the subject combination for Public Administration in NSUK?",
        "Can I study Public Administration with my JAMB subjects?",
        "Can I study Public Administration without one of the listed compulsory subjects?",
        "What optional subjects are accepted for Public Administration?",
        "Is Mathematics compulsory for Public Administration at NSUK?",
        "Is English Language compulsory for Public Administration at NSUK?",
        "What WAEC or NECO subjects do I need for Public Administration?",
        "Does the right JAMB combination mean I am fully qualified for Public Administration?",
        "Can I use Civic Education for Public Administration at NSUK?",
        "Can I use Geography for Public Administration at NSUK?",
        "Can I use Christian Religious Studies for Public Administration at NSUK?",
        "Can I use Geography for Public Administration at NSUK?",
        "Can I use Commerce for Public Administration at NSUK?",
        "Can I use Marketing for Public Administration at NSUK?"
      ],
      "sourcePages": [
        1,
        2
      ],
      "reviewLevel": "manual_check_recommended",
      "sourceNotes": [
        "Source page(s): 1, 2."
      ]
    },
    {
      "school": "Nasarawa State University, Keffi",
      "schoolShortName": "NSUK",
      "academicSession": "2025/2026",
      "sourceLabel": "NSUK Post UTME Subject Combination 2025/2026",
      "programme": "Marketing",
      "slug": "nsuk-marketing-requirements",
      "categorySlug": "programme-requirements",
      "type": "programme",
      "status": "published",
      "title": "NSUK Marketing Admission Subject Combination",
      "question": "What are the JAMB and O'Level subject requirements for Marketing at NSUK?",
      "jamb": {
        "totalRequiredSubjects": 4,
        "compulsorySubjects": [
          "Use of English",
          "Mathematics",
          "Economics"
        ],
        "optionalChooseCount": 1,
        "optionalSubjects": [
          "Government/History",
          "Civic Education",
          "Geography"
        ],
        "requiredSubjectGroups": [],
        "ruleSummary": "Candidate must register four JAMB subjects. Use of English is compulsory. The remaining subjects must follow the compulsory and optional subject rules for this programme."
      },
      "olevel": {
        "minimumCredits": 5,
        "globalCompulsorySubjects": [
          "English Language",
          "Mathematics"
        ],
        "programmeSpecificCompulsorySubjects": [],
        "compulsorySubjects": [
          "English Language",
          "Mathematics"
        ],
        "optionalSubjects": [
          "Economics",
          "Accounting",
          "Business Method",
          "Commerce",
          "Government/History",
          "Geography",
          "Statistics"
        ],
        "acceptedExamTypes": [
          "WAEC",
          "NECO",
          "NABTEB",
          "Other accepted senior secondary examinations"
        ],
        "ruleSummary": "Candidate must have at least five O'Level credit passes, including English Language and Mathematics, plus the programme-specific required/accepted subjects."
      },
      "warnings": [
        "Use of English in JAMB is different from English Language in O'Level; both must be treated separately.",
        "Correct JAMB subjects do not automatically satisfy O'Level requirements.",
        "Optional subjects should be selected only from the approved list for this programme.",
        "O'Level requires at least five credit passes, including English Language and Mathematics."
      ],
      "needsReview": false,
      "keywords": [
        "NSUK",
        "Nasarawa State University, Keffi",
        "Marketing",
        "JAMB",
        "UTME",
        "Post UTME",
        "O'Level",
        "WAEC",
        "NECO",
        "NABTEB",
        "subject combination",
        "admission requirement",
        "Use of English",
        "Mathematics",
        "Economics",
        "Government/History",
        "Civic Education",
        "Geography",
        "English Language",
        "Accounting",
        "Business Method",
        "Commerce",
        "Statistics"
      ],
      "answer": "For Marketing at NSUK, the JAMB combination must include Use of English, Mathematics, Economics; the candidate should choose 1 subject(s) from Government/History, Civic Education, Geography to make four JAMB subjects. For O'Level, the candidate needs at least five credit passes including English Language, Mathematics. Accepted additional O'Level subjects include Economics, Accounting, Business Method, Commerce, Government/History, Geography, Statistics.",
      "content": "Programme: Marketing\nSchool: Nasarawa State University, Keffi (NSUK)\nAcademic session: 2025/2026\nRequirement type: JAMB subject combination and O'Level combination.\nJAMB requirement: The candidate must register four JAMB subjects. Compulsory JAMB subject(s): Use of English, Mathematics, Economics. Optional JAMB subject(s): Government/History, Civic Education, Geography. Optional subjects needed: 1.\nO'Level requirement: The candidate must have at least five credit passes from WAEC, NECO, NABTEB, or another accepted senior secondary examination. English Language and Mathematics are compulsory for O'Level. Programme-specific compulsory O'Level subject(s): none listed beyond English Language and Mathematics. Accepted optional O'Level subject(s): Economics, Accounting, Business Method, Commerce, Government/History, Geography, Statistics.\nStudent guidance: The student should not assume that any subject is accepted. They should match both the JAMB requirement and the O'Level requirement for Marketing.",
      "questionVariants": [
        "What are the JAMB subjects for Marketing at NSUK?",
        "What O'Level subjects do I need for Marketing at NSUK?",
        "What is the subject combination for Marketing in NSUK?",
        "Can I study Marketing with my JAMB subjects?",
        "Can I study Marketing without one of the listed compulsory subjects?",
        "What optional subjects are accepted for Marketing?",
        "Is Mathematics compulsory for Marketing at NSUK?",
        "Is English Language compulsory for Marketing at NSUK?",
        "What WAEC or NECO subjects do I need for Marketing?",
        "Does the right JAMB combination mean I am fully qualified for Marketing?",
        "Can I use Government/History for Marketing at NSUK?",
        "Can I use Civic Education for Marketing at NSUK?",
        "Can I use Geography for Marketing at NSUK?",
        "Can I use Economics for Marketing at NSUK?",
        "Can I use Accounting for Marketing at NSUK?",
        "Can I use Business Method for Marketing at NSUK?"
      ],
      "sourcePages": [
        2
      ],
      "reviewLevel": "normal",
      "sourceNotes": [
        "Source page(s): 2."
      ]
    },
    {
      "school": "Nasarawa State University, Keffi",
      "schoolShortName": "NSUK",
      "academicSession": "2025/2026",
      "sourceLabel": "NSUK Post UTME Subject Combination 2025/2026",
      "programme": "Taxation",
      "slug": "nsuk-taxation-requirements",
      "categorySlug": "programme-requirements",
      "type": "programme",
      "status": "published",
      "title": "NSUK Taxation Admission Subject Combination",
      "question": "What are the JAMB and O'Level subject requirements for Taxation at NSUK?",
      "jamb": {
        "totalRequiredSubjects": 4,
        "compulsorySubjects": [
          "Use of English",
          "Mathematics",
          "Economics"
        ],
        "optionalChooseCount": 1,
        "optionalSubjects": [
          "Government/History",
          "Geography",
          "Civic Education"
        ],
        "requiredSubjectGroups": [],
        "ruleSummary": "Candidate must register four JAMB subjects. Use of English is compulsory. The remaining subjects must follow the compulsory and optional subject rules for this programme."
      },
      "olevel": {
        "minimumCredits": 5,
        "globalCompulsorySubjects": [
          "English Language",
          "Mathematics"
        ],
        "programmeSpecificCompulsorySubjects": [
          "Economics"
        ],
        "compulsorySubjects": [
          "English Language",
          "Mathematics",
          "Economics"
        ],
        "optionalSubjects": [
          "Accounting",
          "Business Method",
          "Commerce",
          "Government/History",
          "Geography",
          "Civic Education",
          "Marketing"
        ],
        "acceptedExamTypes": [
          "WAEC",
          "NECO",
          "NABTEB",
          "Other accepted senior secondary examinations"
        ],
        "ruleSummary": "Candidate must have at least five O'Level credit passes, including English Language and Mathematics, plus the programme-specific required/accepted subjects."
      },
      "warnings": [
        "Use of English in JAMB is different from English Language in O'Level; both must be treated separately.",
        "Correct JAMB subjects do not automatically satisfy O'Level requirements.",
        "Optional subjects should be selected only from the approved list for this programme.",
        "O'Level requires at least five credit passes, including English Language and Mathematics."
      ],
      "needsReview": false,
      "keywords": [
        "NSUK",
        "Nasarawa State University, Keffi",
        "Taxation",
        "JAMB",
        "UTME",
        "Post UTME",
        "O'Level",
        "WAEC",
        "NECO",
        "NABTEB",
        "subject combination",
        "admission requirement",
        "Use of English",
        "Mathematics",
        "Economics",
        "Government/History",
        "Geography",
        "Civic Education",
        "English Language",
        "Accounting",
        "Business Method",
        "Commerce",
        "Marketing"
      ],
      "answer": "For Taxation at NSUK, the JAMB combination must include Use of English, Mathematics, Economics; the candidate should choose 1 subject(s) from Government/History, Geography, Civic Education to make four JAMB subjects. For O'Level, the candidate needs at least five credit passes including English Language, Mathematics, Economics. Accepted additional O'Level subjects include Accounting, Business Method, Commerce, Government/History, Geography, Civic Education, Marketing.",
      "content": "Programme: Taxation\nSchool: Nasarawa State University, Keffi (NSUK)\nAcademic session: 2025/2026\nRequirement type: JAMB subject combination and O'Level combination.\nJAMB requirement: The candidate must register four JAMB subjects. Compulsory JAMB subject(s): Use of English, Mathematics, Economics. Optional JAMB subject(s): Government/History, Geography, Civic Education. Optional subjects needed: 1.\nO'Level requirement: The candidate must have at least five credit passes from WAEC, NECO, NABTEB, or another accepted senior secondary examination. English Language and Mathematics are compulsory for O'Level. Programme-specific compulsory O'Level subject(s): Economics. Accepted optional O'Level subject(s): Accounting, Business Method, Commerce, Government/History, Geography, Civic Education, Marketing.\nStudent guidance: The student should not assume that any subject is accepted. They should match both the JAMB requirement and the O'Level requirement for Taxation.",
      "questionVariants": [
        "What are the JAMB subjects for Taxation at NSUK?",
        "What O'Level subjects do I need for Taxation at NSUK?",
        "What is the subject combination for Taxation in NSUK?",
        "Can I study Taxation with my JAMB subjects?",
        "Can I study Taxation without one of the listed compulsory subjects?",
        "What optional subjects are accepted for Taxation?",
        "Is Mathematics compulsory for Taxation at NSUK?",
        "Is English Language compulsory for Taxation at NSUK?",
        "What WAEC or NECO subjects do I need for Taxation?",
        "Does the right JAMB combination mean I am fully qualified for Taxation?",
        "Can I use Government/History for Taxation at NSUK?",
        "Can I use Geography for Taxation at NSUK?",
        "Can I use Civic Education for Taxation at NSUK?",
        "Can I use Accounting for Taxation at NSUK?",
        "Can I use Business Method for Taxation at NSUK?",
        "Can I use Commerce for Taxation at NSUK?"
      ],
      "sourcePages": [
        2
      ],
      "reviewLevel": "normal",
      "sourceNotes": [
        "Source page(s): 2."
      ]
    },
    {
      "school": "Nasarawa State University, Keffi",
      "schoolShortName": "NSUK",
      "academicSession": "2025/2026",
      "sourceLabel": "NSUK Post UTME Subject Combination 2025/2026",
      "programme": "Security and Investment Studies",
      "slug": "nsuk-security-and-investment-studies-requirements",
      "categorySlug": "programme-requirements",
      "type": "programme",
      "status": "published",
      "title": "NSUK Security and Investment Studies Admission Subject Combination",
      "question": "What are the JAMB and O'Level subject requirements for Security and Investment Studies at NSUK?",
      "jamb": {
        "totalRequiredSubjects": 4,
        "compulsorySubjects": [
          "Use of English",
          "Mathematics",
          "Economics"
        ],
        "optionalChooseCount": 1,
        "optionalSubjects": [
          "Government/History",
          "Civic Education",
          "Geography"
        ],
        "requiredSubjectGroups": [],
        "ruleSummary": "Candidate must register four JAMB subjects. Use of English is compulsory. The remaining subjects must follow the compulsory and optional subject rules for this programme."
      },
      "olevel": {
        "minimumCredits": 5,
        "globalCompulsorySubjects": [
          "English Language",
          "Mathematics"
        ],
        "programmeSpecificCompulsorySubjects": [],
        "compulsorySubjects": [
          "English Language",
          "Mathematics"
        ],
        "optionalSubjects": [
          "Economics",
          "Accounting",
          "Business Method",
          "Commerce",
          "Government",
          "Geography",
          "Statistics",
          "Christian Religious Studies",
          "Literature-in-English",
          "Islamic Studies"
        ],
        "acceptedExamTypes": [
          "WAEC",
          "NECO",
          "NABTEB",
          "Other accepted senior secondary examinations"
        ],
        "ruleSummary": "Candidate must have at least five O'Level credit passes, including English Language and Mathematics, plus the programme-specific required/accepted subjects."
      },
      "warnings": [
        "Use of English in JAMB is different from English Language in O'Level; both must be treated separately.",
        "Correct JAMB subjects do not automatically satisfy O'Level requirements.",
        "Optional subjects should be selected only from the approved list for this programme.",
        "O'Level requires at least five credit passes, including English Language and Mathematics."
      ],
      "needsReview": false,
      "keywords": [
        "NSUK",
        "Nasarawa State University, Keffi",
        "Security and Investment Studies",
        "JAMB",
        "UTME",
        "Post UTME",
        "O'Level",
        "WAEC",
        "NECO",
        "NABTEB",
        "subject combination",
        "admission requirement",
        "Use of English",
        "Mathematics",
        "Economics",
        "Government/History",
        "Civic Education",
        "Geography",
        "English Language",
        "Accounting",
        "Business Method",
        "Commerce",
        "Government",
        "Statistics",
        "Christian Religious Studies",
        "Literature-in-English",
        "Islamic Studies"
      ],
      "answer": "For Security and Investment Studies at NSUK, the JAMB combination must include Use of English, Mathematics, Economics; the candidate should choose 1 subject(s) from Government/History, Civic Education, Geography to make four JAMB subjects. For O'Level, the candidate needs at least five credit passes including English Language, Mathematics. Accepted additional O'Level subjects include Economics, Accounting, Business Method, Commerce, Government, Geography, Statistics, Christian Religious Studies, Literature-in-English, Islamic Studies.",
      "content": "Programme: Security and Investment Studies\nSchool: Nasarawa State University, Keffi (NSUK)\nAcademic session: 2025/2026\nRequirement type: JAMB subject combination and O'Level combination.\nJAMB requirement: The candidate must register four JAMB subjects. Compulsory JAMB subject(s): Use of English, Mathematics, Economics. Optional JAMB subject(s): Government/History, Civic Education, Geography. Optional subjects needed: 1.\nO'Level requirement: The candidate must have at least five credit passes from WAEC, NECO, NABTEB, or another accepted senior secondary examination. English Language and Mathematics are compulsory for O'Level. Programme-specific compulsory O'Level subject(s): none listed beyond English Language and Mathematics. Accepted optional O'Level subject(s): Economics, Accounting, Business Method, Commerce, Government, Geography, Statistics, Christian Religious Studies, Literature-in-English, Islamic Studies.\nStudent guidance: The student should not assume that any subject is accepted. They should match both the JAMB requirement and the O'Level requirement for Security and Investment Studies.",
      "questionVariants": [
        "What are the JAMB subjects for Security and Investment Studies at NSUK?",
        "What O'Level subjects do I need for Security and Investment Studies at NSUK?",
        "What is the subject combination for Security and Investment Studies in NSUK?",
        "Can I study Security and Investment Studies with my JAMB subjects?",
        "Can I study Security and Investment Studies without one of the listed compulsory subjects?",
        "What optional subjects are accepted for Security and Investment Studies?",
        "Is Mathematics compulsory for Security and Investment Studies at NSUK?",
        "Is English Language compulsory for Security and Investment Studies at NSUK?",
        "What WAEC or NECO subjects do I need for Security and Investment Studies?",
        "Does the right JAMB combination mean I am fully qualified for Security and Investment Studies?",
        "Can I use Government/History for Security and Investment Studies at NSUK?",
        "Can I use Civic Education for Security and Investment Studies at NSUK?",
        "Can I use Geography for Security and Investment Studies at NSUK?",
        "Can I use Economics for Security and Investment Studies at NSUK?",
        "Can I use Accounting for Security and Investment Studies at NSUK?",
        "Can I use Business Method for Security and Investment Studies at NSUK?"
      ],
      "sourcePages": [
        2
      ],
      "reviewLevel": "normal",
      "sourceNotes": [
        "Source page(s): 2."
      ]
    },
    {
      "school": "Nasarawa State University, Keffi",
      "schoolShortName": "NSUK",
      "academicSession": "2025/2026",
      "sourceLabel": "NSUK Post UTME Subject Combination 2025/2026",
      "programme": "Agricultural Economics & Extension",
      "slug": "nsuk-agricultural-economics-and-extension-requirements",
      "categorySlug": "programme-requirements",
      "type": "programme",
      "status": "published",
      "title": "NSUK Agricultural Economics & Extension Admission Subject Combination",
      "question": "What are the JAMB and O'Level subject requirements for Agricultural Economics & Extension at NSUK?",
      "jamb": {
        "totalRequiredSubjects": 4,
        "compulsorySubjects": [
          "Use of English",
          "Chemistry",
          "Biology/Agricultural Science"
        ],
        "optionalChooseCount": 1,
        "optionalSubjects": [
          "Mathematics",
          "Physics"
        ],
        "requiredSubjectGroups": [
          {
            "slot": "Biology/Agricultural Science",
            "choose": 1,
            "options": [
              "Biology",
              "Agricultural Science"
            ]
          }
        ],
        "ruleSummary": "Candidate must register four JAMB subjects. Use of English is compulsory. The remaining subjects must follow the compulsory and optional subject rules for this programme."
      },
      "olevel": {
        "minimumCredits": 5,
        "globalCompulsorySubjects": [
          "English Language",
          "Mathematics"
        ],
        "programmeSpecificCompulsorySubjects": [
          "Chemistry",
          "Biology/Agricultural Science"
        ],
        "compulsorySubjects": [
          "English Language",
          "Mathematics",
          "Chemistry",
          "Biology/Agricultural Science"
        ],
        "optionalSubjects": [
          "Geography",
          "Physics",
          "Economics"
        ],
        "acceptedExamTypes": [
          "WAEC",
          "NECO",
          "NABTEB",
          "Other accepted senior secondary examinations"
        ],
        "ruleSummary": "Candidate must have at least five O'Level credit passes, including English Language and Mathematics, plus the programme-specific required/accepted subjects."
      },
      "warnings": [
        "Use of English in JAMB is different from English Language in O'Level; both must be treated separately.",
        "Correct JAMB subjects do not automatically satisfy O'Level requirements.",
        "Optional subjects should be selected only from the approved list for this programme.",
        "O'Level requires at least five credit passes, including English Language and Mathematics.",
        "A slash in a subject slot, such as Biology/Agricultural Science, means the source presents alternatives for that slot; validate carefully during eligibility checks."
      ],
      "needsReview": false,
      "keywords": [
        "NSUK",
        "Nasarawa State University, Keffi",
        "Agricultural Economics & Extension",
        "JAMB",
        "UTME",
        "Post UTME",
        "O'Level",
        "WAEC",
        "NECO",
        "NABTEB",
        "subject combination",
        "admission requirement",
        "Use of English",
        "Chemistry",
        "Biology/Agricultural Science",
        "Mathematics",
        "Physics",
        "English Language",
        "Geography",
        "Economics"
      ],
      "answer": "For Agricultural Economics & Extension at NSUK, the JAMB combination must include Use of English, Chemistry, Biology/Agricultural Science; the candidate should choose 1 subject(s) from Mathematics, Physics to make four JAMB subjects. For O'Level, the candidate needs at least five credit passes including English Language, Mathematics, Chemistry, Biology/Agricultural Science. Accepted additional O'Level subjects include Geography, Physics, Economics.",
      "content": "Programme: Agricultural Economics & Extension\nSchool: Nasarawa State University, Keffi (NSUK)\nAcademic session: 2025/2026\nRequirement type: JAMB subject combination and O'Level combination.\nJAMB requirement: The candidate must register four JAMB subjects. Compulsory JAMB subject(s): Use of English, Chemistry, Biology/Agricultural Science. Optional JAMB subject(s): Mathematics, Physics. Optional subjects needed: 1.\nO'Level requirement: The candidate must have at least five credit passes from WAEC, NECO, NABTEB, or another accepted senior secondary examination. English Language and Mathematics are compulsory for O'Level. Programme-specific compulsory O'Level subject(s): Chemistry, Biology/Agricultural Science. Accepted optional O'Level subject(s): Geography, Physics, Economics.\nStudent guidance: The student should not assume that any subject is accepted. They should match both the JAMB requirement and the O'Level requirement for Agricultural Economics & Extension.",
      "questionVariants": [
        "What are the JAMB subjects for Agricultural Economics & Extension at NSUK?",
        "What O'Level subjects do I need for Agricultural Economics & Extension at NSUK?",
        "What is the subject combination for Agricultural Economics & Extension in NSUK?",
        "Can I study Agricultural Economics & Extension with my JAMB subjects?",
        "Can I study Agricultural Economics & Extension without one of the listed compulsory subjects?",
        "What optional subjects are accepted for Agricultural Economics & Extension?",
        "Is Mathematics compulsory for Agricultural Economics & Extension at NSUK?",
        "Is English Language compulsory for Agricultural Economics & Extension at NSUK?",
        "What WAEC or NECO subjects do I need for Agricultural Economics & Extension?",
        "Does the right JAMB combination mean I am fully qualified for Agricultural Economics & Extension?",
        "Can I use Mathematics for Agricultural Economics & Extension at NSUK?",
        "Can I use Physics for Agricultural Economics & Extension at NSUK?",
        "Can I use Geography for Agricultural Economics & Extension at NSUK?",
        "Can I use Physics for Agricultural Economics & Extension at NSUK?",
        "Can I use Economics for Agricultural Economics & Extension at NSUK?"
      ],
      "sourcePages": [
        3
      ],
      "reviewLevel": "normal",
      "sourceNotes": [
        "Source page(s): 3."
      ]
    },
    {
      "school": "Nasarawa State University, Keffi",
      "schoolShortName": "NSUK",
      "academicSession": "2025/2026",
      "sourceLabel": "NSUK Post UTME Subject Combination 2025/2026",
      "programme": "Fisheries",
      "slug": "nsuk-fisheries-requirements",
      "categorySlug": "programme-requirements",
      "type": "programme",
      "status": "published",
      "title": "NSUK Fisheries Admission Subject Combination",
      "question": "What are the JAMB and O'Level subject requirements for Fisheries at NSUK?",
      "jamb": {
        "totalRequiredSubjects": 4,
        "compulsorySubjects": [
          "Use of English",
          "Chemistry",
          "Biology/Agricultural Science"
        ],
        "optionalChooseCount": 1,
        "optionalSubjects": [
          "Physics",
          "Food and Nutrition"
        ],
        "requiredSubjectGroups": [
          {
            "slot": "Biology/Agricultural Science",
            "choose": 1,
            "options": [
              "Biology",
              "Agricultural Science"
            ]
          }
        ],
        "ruleSummary": "Candidate must register four JAMB subjects. Use of English is compulsory. The remaining subjects must follow the compulsory and optional subject rules for this programme."
      },
      "olevel": {
        "minimumCredits": 5,
        "globalCompulsorySubjects": [
          "English Language",
          "Mathematics"
        ],
        "programmeSpecificCompulsorySubjects": [
          "Biology/Agricultural Science"
        ],
        "compulsorySubjects": [
          "English Language",
          "Mathematics",
          "Biology/Agricultural Science"
        ],
        "optionalSubjects": [
          "Chemistry",
          "Physics",
          "Food and Nutrition"
        ],
        "acceptedExamTypes": [
          "WAEC",
          "NECO",
          "NABTEB",
          "Other accepted senior secondary examinations"
        ],
        "ruleSummary": "Candidate must have at least five O'Level credit passes, including English Language and Mathematics, plus the programme-specific required/accepted subjects."
      },
      "warnings": [
        "Use of English in JAMB is different from English Language in O'Level; both must be treated separately.",
        "Correct JAMB subjects do not automatically satisfy O'Level requirements.",
        "Optional subjects should be selected only from the approved list for this programme.",
        "O'Level requires at least five credit passes, including English Language and Mathematics.",
        "A slash in a subject slot, such as Biology/Agricultural Science, means the source presents alternatives for that slot; validate carefully during eligibility checks."
      ],
      "needsReview": false,
      "keywords": [
        "NSUK",
        "Nasarawa State University, Keffi",
        "Fisheries",
        "JAMB",
        "UTME",
        "Post UTME",
        "O'Level",
        "WAEC",
        "NECO",
        "NABTEB",
        "subject combination",
        "admission requirement",
        "Use of English",
        "Chemistry",
        "Biology/Agricultural Science",
        "Physics",
        "Food and Nutrition",
        "English Language",
        "Mathematics"
      ],
      "answer": "For Fisheries at NSUK, the JAMB combination must include Use of English, Chemistry, Biology/Agricultural Science; the candidate should choose 1 subject(s) from Physics, Food and Nutrition to make four JAMB subjects. For O'Level, the candidate needs at least five credit passes including English Language, Mathematics, Biology/Agricultural Science. Accepted additional O'Level subjects include Chemistry, Physics, Food and Nutrition.",
      "content": "Programme: Fisheries\nSchool: Nasarawa State University, Keffi (NSUK)\nAcademic session: 2025/2026\nRequirement type: JAMB subject combination and O'Level combination.\nJAMB requirement: The candidate must register four JAMB subjects. Compulsory JAMB subject(s): Use of English, Chemistry, Biology/Agricultural Science. Optional JAMB subject(s): Physics, Food and Nutrition. Optional subjects needed: 1.\nO'Level requirement: The candidate must have at least five credit passes from WAEC, NECO, NABTEB, or another accepted senior secondary examination. English Language and Mathematics are compulsory for O'Level. Programme-specific compulsory O'Level subject(s): Biology/Agricultural Science. Accepted optional O'Level subject(s): Chemistry, Physics, Food and Nutrition.\nStudent guidance: The student should not assume that any subject is accepted. They should match both the JAMB requirement and the O'Level requirement for Fisheries.",
      "questionVariants": [
        "What are the JAMB subjects for Fisheries at NSUK?",
        "What O'Level subjects do I need for Fisheries at NSUK?",
        "What is the subject combination for Fisheries in NSUK?",
        "Can I study Fisheries with my JAMB subjects?",
        "Can I study Fisheries without one of the listed compulsory subjects?",
        "What optional subjects are accepted for Fisheries?",
        "Is Mathematics compulsory for Fisheries at NSUK?",
        "Is English Language compulsory for Fisheries at NSUK?",
        "What WAEC or NECO subjects do I need for Fisheries?",
        "Does the right JAMB combination mean I am fully qualified for Fisheries?",
        "Can I use Physics for Fisheries at NSUK?",
        "Can I use Food and Nutrition for Fisheries at NSUK?",
        "Can I use Chemistry for Fisheries at NSUK?",
        "Can I use Physics for Fisheries at NSUK?",
        "Can I use Food and Nutrition for Fisheries at NSUK?"
      ],
      "sourcePages": [
        3
      ],
      "reviewLevel": "normal",
      "sourceNotes": [
        "Source page(s): 3."
      ]
    },
    {
      "school": "Nasarawa State University, Keffi",
      "schoolShortName": "NSUK",
      "academicSession": "2025/2026",
      "sourceLabel": "NSUK Post UTME Subject Combination 2025/2026",
      "programme": "Agronomy",
      "slug": "nsuk-agronomy-requirements",
      "categorySlug": "programme-requirements",
      "type": "programme",
      "status": "published",
      "title": "NSUK Agronomy Admission Subject Combination",
      "question": "What are the JAMB and O'Level subject requirements for Agronomy at NSUK?",
      "jamb": {
        "totalRequiredSubjects": 4,
        "compulsorySubjects": [
          "Use of English",
          "Chemistry",
          "Biology/Agricultural Science"
        ],
        "optionalChooseCount": 1,
        "optionalSubjects": [
          "Mathematics",
          "Physics"
        ],
        "requiredSubjectGroups": [
          {
            "slot": "Biology/Agricultural Science",
            "choose": 1,
            "options": [
              "Biology",
              "Agricultural Science"
            ]
          }
        ],
        "ruleSummary": "Candidate must register four JAMB subjects. Use of English is compulsory. The remaining subjects must follow the compulsory and optional subject rules for this programme."
      },
      "olevel": {
        "minimumCredits": 5,
        "globalCompulsorySubjects": [
          "English Language",
          "Mathematics"
        ],
        "programmeSpecificCompulsorySubjects": [
          "Chemistry",
          "Biology/Agricultural Science"
        ],
        "compulsorySubjects": [
          "English Language",
          "Mathematics",
          "Chemistry",
          "Biology/Agricultural Science"
        ],
        "optionalSubjects": [
          "Geography",
          "Physics",
          "Economics"
        ],
        "acceptedExamTypes": [
          "WAEC",
          "NECO",
          "NABTEB",
          "Other accepted senior secondary examinations"
        ],
        "ruleSummary": "Candidate must have at least five O'Level credit passes, including English Language and Mathematics, plus the programme-specific required/accepted subjects."
      },
      "warnings": [
        "Use of English in JAMB is different from English Language in O'Level; both must be treated separately.",
        "Correct JAMB subjects do not automatically satisfy O'Level requirements.",
        "Optional subjects should be selected only from the approved list for this programme.",
        "O'Level requires at least five credit passes, including English Language and Mathematics.",
        "A slash in a subject slot, such as Biology/Agricultural Science, means the source presents alternatives for that slot; validate carefully during eligibility checks."
      ],
      "needsReview": false,
      "keywords": [
        "NSUK",
        "Nasarawa State University, Keffi",
        "Agronomy",
        "JAMB",
        "UTME",
        "Post UTME",
        "O'Level",
        "WAEC",
        "NECO",
        "NABTEB",
        "subject combination",
        "admission requirement",
        "Use of English",
        "Chemistry",
        "Biology/Agricultural Science",
        "Mathematics",
        "Physics",
        "English Language",
        "Geography",
        "Economics"
      ],
      "answer": "For Agronomy at NSUK, the JAMB combination must include Use of English, Chemistry, Biology/Agricultural Science; the candidate should choose 1 subject(s) from Mathematics, Physics to make four JAMB subjects. For O'Level, the candidate needs at least five credit passes including English Language, Mathematics, Chemistry, Biology/Agricultural Science. Accepted additional O'Level subjects include Geography, Physics, Economics.",
      "content": "Programme: Agronomy\nSchool: Nasarawa State University, Keffi (NSUK)\nAcademic session: 2025/2026\nRequirement type: JAMB subject combination and O'Level combination.\nJAMB requirement: The candidate must register four JAMB subjects. Compulsory JAMB subject(s): Use of English, Chemistry, Biology/Agricultural Science. Optional JAMB subject(s): Mathematics, Physics. Optional subjects needed: 1.\nO'Level requirement: The candidate must have at least five credit passes from WAEC, NECO, NABTEB, or another accepted senior secondary examination. English Language and Mathematics are compulsory for O'Level. Programme-specific compulsory O'Level subject(s): Chemistry, Biology/Agricultural Science. Accepted optional O'Level subject(s): Geography, Physics, Economics.\nStudent guidance: The student should not assume that any subject is accepted. They should match both the JAMB requirement and the O'Level requirement for Agronomy.",
      "questionVariants": [
        "What are the JAMB subjects for Agronomy at NSUK?",
        "What O'Level subjects do I need for Agronomy at NSUK?",
        "What is the subject combination for Agronomy in NSUK?",
        "Can I study Agronomy with my JAMB subjects?",
        "Can I study Agronomy without one of the listed compulsory subjects?",
        "What optional subjects are accepted for Agronomy?",
        "Is Mathematics compulsory for Agronomy at NSUK?",
        "Is English Language compulsory for Agronomy at NSUK?",
        "What WAEC or NECO subjects do I need for Agronomy?",
        "Does the right JAMB combination mean I am fully qualified for Agronomy?",
        "Can I use Mathematics for Agronomy at NSUK?",
        "Can I use Physics for Agronomy at NSUK?",
        "Can I use Geography for Agronomy at NSUK?",
        "Can I use Physics for Agronomy at NSUK?",
        "Can I use Economics for Agronomy at NSUK?"
      ],
      "sourcePages": [
        3
      ],
      "reviewLevel": "normal",
      "sourceNotes": [
        "Source page(s): 3."
      ]
    },
    {
      "school": "Nasarawa State University, Keffi",
      "schoolShortName": "NSUK",
      "academicSession": "2025/2026",
      "sourceLabel": "NSUK Post UTME Subject Combination 2025/2026",
      "programme": "Animal Science",
      "slug": "nsuk-animal-science-requirements",
      "categorySlug": "programme-requirements",
      "type": "programme",
      "status": "published",
      "title": "NSUK Animal Science Admission Subject Combination",
      "question": "What are the JAMB and O'Level subject requirements for Animal Science at NSUK?",
      "jamb": {
        "totalRequiredSubjects": 4,
        "compulsorySubjects": [
          "Use of English",
          "Chemistry",
          "Biology/Agricultural Science"
        ],
        "optionalChooseCount": 1,
        "optionalSubjects": [
          "Mathematics",
          "Physics"
        ],
        "requiredSubjectGroups": [
          {
            "slot": "Biology/Agricultural Science",
            "choose": 1,
            "options": [
              "Biology",
              "Agricultural Science"
            ]
          }
        ],
        "ruleSummary": "Candidate must register four JAMB subjects. Use of English is compulsory. The remaining subjects must follow the compulsory and optional subject rules for this programme."
      },
      "olevel": {
        "minimumCredits": 5,
        "globalCompulsorySubjects": [
          "English Language",
          "Mathematics"
        ],
        "programmeSpecificCompulsorySubjects": [
          "Chemistry",
          "Biology/Agricultural Science"
        ],
        "compulsorySubjects": [
          "English Language",
          "Mathematics",
          "Chemistry",
          "Biology/Agricultural Science"
        ],
        "optionalSubjects": [
          "Geography",
          "Physics",
          "Economics"
        ],
        "acceptedExamTypes": [
          "WAEC",
          "NECO",
          "NABTEB",
          "Other accepted senior secondary examinations"
        ],
        "ruleSummary": "Candidate must have at least five O'Level credit passes, including English Language and Mathematics, plus the programme-specific required/accepted subjects."
      },
      "warnings": [
        "Use of English in JAMB is different from English Language in O'Level; both must be treated separately.",
        "Correct JAMB subjects do not automatically satisfy O'Level requirements.",
        "Optional subjects should be selected only from the approved list for this programme.",
        "O'Level requires at least five credit passes, including English Language and Mathematics.",
        "A slash in a subject slot, such as Biology/Agricultural Science, means the source presents alternatives for that slot; validate carefully during eligibility checks."
      ],
      "needsReview": false,
      "keywords": [
        "NSUK",
        "Nasarawa State University, Keffi",
        "Animal Science",
        "JAMB",
        "UTME",
        "Post UTME",
        "O'Level",
        "WAEC",
        "NECO",
        "NABTEB",
        "subject combination",
        "admission requirement",
        "Use of English",
        "Chemistry",
        "Biology/Agricultural Science",
        "Mathematics",
        "Physics",
        "English Language",
        "Geography",
        "Economics"
      ],
      "answer": "For Animal Science at NSUK, the JAMB combination must include Use of English, Chemistry, Biology/Agricultural Science; the candidate should choose 1 subject(s) from Mathematics, Physics to make four JAMB subjects. For O'Level, the candidate needs at least five credit passes including English Language, Mathematics, Chemistry, Biology/Agricultural Science. Accepted additional O'Level subjects include Geography, Physics, Economics.",
      "content": "Programme: Animal Science\nSchool: Nasarawa State University, Keffi (NSUK)\nAcademic session: 2025/2026\nRequirement type: JAMB subject combination and O'Level combination.\nJAMB requirement: The candidate must register four JAMB subjects. Compulsory JAMB subject(s): Use of English, Chemistry, Biology/Agricultural Science. Optional JAMB subject(s): Mathematics, Physics. Optional subjects needed: 1.\nO'Level requirement: The candidate must have at least five credit passes from WAEC, NECO, NABTEB, or another accepted senior secondary examination. English Language and Mathematics are compulsory for O'Level. Programme-specific compulsory O'Level subject(s): Chemistry, Biology/Agricultural Science. Accepted optional O'Level subject(s): Geography, Physics, Economics.\nStudent guidance: The student should not assume that any subject is accepted. They should match both the JAMB requirement and the O'Level requirement for Animal Science.",
      "questionVariants": [
        "What are the JAMB subjects for Animal Science at NSUK?",
        "What O'Level subjects do I need for Animal Science at NSUK?",
        "What is the subject combination for Animal Science in NSUK?",
        "Can I study Animal Science with my JAMB subjects?",
        "Can I study Animal Science without one of the listed compulsory subjects?",
        "What optional subjects are accepted for Animal Science?",
        "Is Mathematics compulsory for Animal Science at NSUK?",
        "Is English Language compulsory for Animal Science at NSUK?",
        "What WAEC or NECO subjects do I need for Animal Science?",
        "Does the right JAMB combination mean I am fully qualified for Animal Science?",
        "Can I use Mathematics for Animal Science at NSUK?",
        "Can I use Physics for Animal Science at NSUK?",
        "Can I use Geography for Animal Science at NSUK?",
        "Can I use Physics for Animal Science at NSUK?",
        "Can I use Economics for Animal Science at NSUK?"
      ],
      "sourcePages": [
        3
      ],
      "reviewLevel": "normal",
      "sourceNotes": [
        "Source page(s): 3."
      ]
    },
    {
      "school": "Nasarawa State University, Keffi",
      "schoolShortName": "NSUK",
      "academicSession": "2025/2026",
      "sourceLabel": "NSUK Post UTME Subject Combination 2025/2026",
      "programme": "Forestry and Wildlife",
      "slug": "nsuk-forestry-and-wildlife-requirements",
      "categorySlug": "programme-requirements",
      "type": "programme",
      "status": "published",
      "title": "NSUK Forestry and Wildlife Admission Subject Combination",
      "question": "What are the JAMB and O'Level subject requirements for Forestry and Wildlife at NSUK?",
      "jamb": {
        "totalRequiredSubjects": 4,
        "compulsorySubjects": [
          "Use of English",
          "Chemistry",
          "Biology/Agricultural Science"
        ],
        "optionalChooseCount": 1,
        "optionalSubjects": [
          "Mathematics",
          "Physics"
        ],
        "requiredSubjectGroups": [
          {
            "slot": "Biology/Agricultural Science",
            "choose": 1,
            "options": [
              "Biology",
              "Agricultural Science"
            ]
          }
        ],
        "ruleSummary": "Candidate must register four JAMB subjects. Use of English is compulsory. The remaining subjects must follow the compulsory and optional subject rules for this programme."
      },
      "olevel": {
        "minimumCredits": 5,
        "globalCompulsorySubjects": [
          "English Language",
          "Mathematics"
        ],
        "programmeSpecificCompulsorySubjects": [
          "Chemistry",
          "Biology"
        ],
        "compulsorySubjects": [
          "English Language",
          "Mathematics",
          "Chemistry",
          "Biology"
        ],
        "optionalSubjects": [
          "Physics",
          "Economics",
          "Further Mathematics",
          "Statistics"
        ],
        "acceptedExamTypes": [
          "WAEC",
          "NECO",
          "NABTEB",
          "Other accepted senior secondary examinations"
        ],
        "ruleSummary": "Candidate must have at least five O'Level credit passes, including English Language and Mathematics, plus the programme-specific required/accepted subjects."
      },
      "warnings": [
        "Use of English in JAMB is different from English Language in O'Level; both must be treated separately.",
        "Correct JAMB subjects do not automatically satisfy O'Level requirements.",
        "Optional subjects should be selected only from the approved list for this programme.",
        "O'Level requires at least five credit passes, including English Language and Mathematics.",
        "A slash in a subject slot, such as Biology/Agricultural Science, means the source presents alternatives for that slot; validate carefully during eligibility checks."
      ],
      "needsReview": false,
      "keywords": [
        "NSUK",
        "Nasarawa State University, Keffi",
        "Forestry and Wildlife",
        "JAMB",
        "UTME",
        "Post UTME",
        "O'Level",
        "WAEC",
        "NECO",
        "NABTEB",
        "subject combination",
        "admission requirement",
        "Use of English",
        "Chemistry",
        "Biology/Agricultural Science",
        "Mathematics",
        "Physics",
        "English Language",
        "Biology",
        "Economics",
        "Further Mathematics",
        "Statistics"
      ],
      "answer": "For Forestry and Wildlife at NSUK, the JAMB combination must include Use of English, Chemistry, Biology/Agricultural Science; the candidate should choose 1 subject(s) from Mathematics, Physics to make four JAMB subjects. For O'Level, the candidate needs at least five credit passes including English Language, Mathematics, Chemistry, Biology. Accepted additional O'Level subjects include Physics, Economics, Further Mathematics, Statistics.",
      "content": "Programme: Forestry and Wildlife\nSchool: Nasarawa State University, Keffi (NSUK)\nAcademic session: 2025/2026\nRequirement type: JAMB subject combination and O'Level combination.\nJAMB requirement: The candidate must register four JAMB subjects. Compulsory JAMB subject(s): Use of English, Chemistry, Biology/Agricultural Science. Optional JAMB subject(s): Mathematics, Physics. Optional subjects needed: 1.\nO'Level requirement: The candidate must have at least five credit passes from WAEC, NECO, NABTEB, or another accepted senior secondary examination. English Language and Mathematics are compulsory for O'Level. Programme-specific compulsory O'Level subject(s): Chemistry, Biology. Accepted optional O'Level subject(s): Physics, Economics, Further Mathematics, Statistics.\nStudent guidance: The student should not assume that any subject is accepted. They should match both the JAMB requirement and the O'Level requirement for Forestry and Wildlife.",
      "questionVariants": [
        "What are the JAMB subjects for Forestry and Wildlife at NSUK?",
        "What O'Level subjects do I need for Forestry and Wildlife at NSUK?",
        "What is the subject combination for Forestry and Wildlife in NSUK?",
        "Can I study Forestry and Wildlife with my JAMB subjects?",
        "Can I study Forestry and Wildlife without one of the listed compulsory subjects?",
        "What optional subjects are accepted for Forestry and Wildlife?",
        "Is Mathematics compulsory for Forestry and Wildlife at NSUK?",
        "Is English Language compulsory for Forestry and Wildlife at NSUK?",
        "What WAEC or NECO subjects do I need for Forestry and Wildlife?",
        "Does the right JAMB combination mean I am fully qualified for Forestry and Wildlife?",
        "Can I use Mathematics for Forestry and Wildlife at NSUK?",
        "Can I use Physics for Forestry and Wildlife at NSUK?",
        "Can I use Physics for Forestry and Wildlife at NSUK?",
        "Can I use Economics for Forestry and Wildlife at NSUK?",
        "Can I use Further Mathematics for Forestry and Wildlife at NSUK?"
      ],
      "sourcePages": [
        3
      ],
      "reviewLevel": "normal",
      "sourceNotes": [
        "Source page(s): 3."
      ]
    },
    {
      "school": "Nasarawa State University, Keffi",
      "schoolShortName": "NSUK",
      "academicSession": "2025/2026",
      "sourceLabel": "NSUK Post UTME Subject Combination 2025/2026",
      "programme": "Home Science and Management",
      "slug": "nsuk-home-science-and-management-requirements",
      "categorySlug": "programme-requirements",
      "type": "programme",
      "status": "published",
      "title": "NSUK Home Science and Management Admission Subject Combination",
      "question": "What are the JAMB and O'Level subject requirements for Home Science and Management at NSUK?",
      "jamb": {
        "totalRequiredSubjects": 4,
        "compulsorySubjects": [
          "Use of English",
          "Chemistry",
          "Biology/Agricultural Science"
        ],
        "optionalChooseCount": 1,
        "optionalSubjects": [
          "Mathematics",
          "Physics"
        ],
        "requiredSubjectGroups": [
          {
            "slot": "Biology/Agricultural Science",
            "choose": 1,
            "options": [
              "Biology",
              "Agricultural Science"
            ]
          }
        ],
        "ruleSummary": "Candidate must register four JAMB subjects. Use of English is compulsory. The remaining subjects must follow the compulsory and optional subject rules for this programme."
      },
      "olevel": {
        "minimumCredits": 5,
        "globalCompulsorySubjects": [
          "English Language",
          "Mathematics"
        ],
        "programmeSpecificCompulsorySubjects": [
          "Chemistry",
          "Biology/Agricultural Science"
        ],
        "compulsorySubjects": [
          "English Language",
          "Mathematics",
          "Chemistry",
          "Biology/Agricultural Science"
        ],
        "optionalSubjects": [
          "Physics",
          "General Metal Work",
          "General Wood Work",
          "Building/Engineering Drawing",
          "Furniture Design and Construction",
          "Upholstery Design and Construction",
          "Spray Painting and Period Furniture",
          "Spinning",
          "Weaving",
          "Surface Design and Printing",
          "Dyeing and Bleaching",
          "Basic Electricity"
        ],
        "acceptedExamTypes": [
          "WAEC",
          "NECO",
          "NABTEB",
          "Other accepted senior secondary examinations"
        ],
        "ruleSummary": "Candidate must have at least five O'Level credit passes, including English Language and Mathematics, plus the programme-specific required/accepted subjects."
      },
      "warnings": [
        "Use of English in JAMB is different from English Language in O'Level; both must be treated separately.",
        "Correct JAMB subjects do not automatically satisfy O'Level requirements.",
        "Optional subjects should be selected only from the approved list for this programme.",
        "O'Level requires at least five credit passes, including English Language and Mathematics.",
        "A slash in a subject slot, such as Biology/Agricultural Science, means the source presents alternatives for that slot; validate carefully during eligibility checks.",
        "This row was split or ambiguous in the PDF layout and should be reviewed against the source before production import."
      ],
      "needsReview": true,
      "keywords": [
        "NSUK",
        "Nasarawa State University, Keffi",
        "Home Science and Management",
        "JAMB",
        "UTME",
        "Post UTME",
        "O'Level",
        "WAEC",
        "NECO",
        "NABTEB",
        "subject combination",
        "admission requirement",
        "Use of English",
        "Chemistry",
        "Biology/Agricultural Science",
        "Mathematics",
        "Physics",
        "English Language",
        "General Metal Work",
        "General Wood Work",
        "Building/Engineering Drawing",
        "Furniture Design and Construction",
        "Upholstery Design and Construction",
        "Spray Painting and Period Furniture",
        "Spinning",
        "Weaving",
        "Surface Design and Printing",
        "Dyeing and Bleaching",
        "Basic Electricity"
      ],
      "answer": "For Home Science and Management at NSUK, the JAMB combination must include Use of English, Chemistry, Biology/Agricultural Science; the candidate should choose 1 subject(s) from Mathematics, Physics to make four JAMB subjects. For O'Level, the candidate needs at least five credit passes including English Language, Mathematics, Chemistry, Biology/Agricultural Science. Accepted additional O'Level subjects include Physics, General Metal Work, General Wood Work, Building/Engineering Drawing, Furniture Design and Construction, Upholstery Design and Construction, Spray Painting and Period Furniture, Spinning, Weaving, Surface Design and Printing, Dyeing and Bleaching, Basic Electricity.",
      "content": "Programme: Home Science and Management\nSchool: Nasarawa State University, Keffi (NSUK)\nAcademic session: 2025/2026\nRequirement type: JAMB subject combination and O'Level combination.\nJAMB requirement: The candidate must register four JAMB subjects. Compulsory JAMB subject(s): Use of English, Chemistry, Biology/Agricultural Science. Optional JAMB subject(s): Mathematics, Physics. Optional subjects needed: 1.\nO'Level requirement: The candidate must have at least five credit passes from WAEC, NECO, NABTEB, or another accepted senior secondary examination. English Language and Mathematics are compulsory for O'Level. Programme-specific compulsory O'Level subject(s): Chemistry, Biology/Agricultural Science. Accepted optional O'Level subject(s): Physics, General Metal Work, General Wood Work, Building/Engineering Drawing, Furniture Design and Construction, Upholstery Design and Construction, Spray Painting and Period Furniture, Spinning, Weaving, Surface Design and Printing, Dyeing and Bleaching, Basic Electricity.\nStudent guidance: The student should not assume that any subject is accepted. They should match both the JAMB requirement and the O'Level requirement for Home Science and Management.",
      "questionVariants": [
        "What are the JAMB subjects for Home Science and Management at NSUK?",
        "What O'Level subjects do I need for Home Science and Management at NSUK?",
        "What is the subject combination for Home Science and Management in NSUK?",
        "Can I study Home Science and Management with my JAMB subjects?",
        "Can I study Home Science and Management without one of the listed compulsory subjects?",
        "What optional subjects are accepted for Home Science and Management?",
        "Is Mathematics compulsory for Home Science and Management at NSUK?",
        "Is English Language compulsory for Home Science and Management at NSUK?",
        "What WAEC or NECO subjects do I need for Home Science and Management?",
        "Does the right JAMB combination mean I am fully qualified for Home Science and Management?",
        "Can I use Mathematics for Home Science and Management at NSUK?",
        "Can I use Physics for Home Science and Management at NSUK?",
        "Can I use Physics for Home Science and Management at NSUK?",
        "Can I use General Metal Work for Home Science and Management at NSUK?",
        "Can I use General Wood Work for Home Science and Management at NSUK?"
      ],
      "sourcePages": [
        3,
        4
      ],
      "reviewLevel": "manual_check_recommended",
      "sourceNotes": [
        "Source page(s): 3, 4."
      ]
    },
    {
      "school": "Nasarawa State University, Keffi",
      "schoolShortName": "NSUK",
      "academicSession": "2025/2026",
      "sourceLabel": "NSUK Post UTME Subject Combination 2025/2026",
      "programme": "Nutrition and Dietetics",
      "slug": "nsuk-nutrition-and-dietetics-requirements",
      "categorySlug": "programme-requirements",
      "type": "programme",
      "status": "published",
      "title": "NSUK Nutrition and Dietetics Admission Subject Combination",
      "question": "What are the JAMB and O'Level subject requirements for Nutrition and Dietetics at NSUK?",
      "jamb": {
        "totalRequiredSubjects": 4,
        "compulsorySubjects": [
          "Use of English",
          "Chemistry",
          "Biology/Agricultural Science"
        ],
        "optionalChooseCount": 1,
        "optionalSubjects": [
          "Mathematics",
          "Physics"
        ],
        "requiredSubjectGroups": [
          {
            "slot": "Biology/Agricultural Science",
            "choose": 1,
            "options": [
              "Biology",
              "Agricultural Science"
            ]
          }
        ],
        "ruleSummary": "Candidate must register four JAMB subjects. Use of English is compulsory. The remaining subjects must follow the compulsory and optional subject rules for this programme."
      },
      "olevel": {
        "minimumCredits": 5,
        "globalCompulsorySubjects": [
          "English Language",
          "Mathematics"
        ],
        "programmeSpecificCompulsorySubjects": [
          "Chemistry",
          "Biology/Agricultural Science"
        ],
        "compulsorySubjects": [
          "English Language",
          "Mathematics",
          "Chemistry",
          "Biology/Agricultural Science"
        ],
        "optionalSubjects": [
          "Physics",
          "General Metal Work",
          "General Wood Work",
          "Building/Engineering Drawing",
          "Furniture Design and Construction",
          "Upholstery Design and Construction",
          "Spray Painting and Period Furniture",
          "Spinning",
          "Weaving",
          "Surface Design and Printing",
          "Dyeing and Bleaching",
          "Basic Electricity"
        ],
        "acceptedExamTypes": [
          "WAEC",
          "NECO",
          "NABTEB",
          "Other accepted senior secondary examinations"
        ],
        "ruleSummary": "Candidate must have at least five O'Level credit passes, including English Language and Mathematics, plus the programme-specific required/accepted subjects."
      },
      "warnings": [
        "Use of English in JAMB is different from English Language in O'Level; both must be treated separately.",
        "Correct JAMB subjects do not automatically satisfy O'Level requirements.",
        "Optional subjects should be selected only from the approved list for this programme.",
        "O'Level requires at least five credit passes, including English Language and Mathematics.",
        "A slash in a subject slot, such as Biology/Agricultural Science, means the source presents alternatives for that slot; validate carefully during eligibility checks.",
        "This row was split or ambiguous in the PDF layout and should be reviewed against the source before production import."
      ],
      "needsReview": true,
      "keywords": [
        "NSUK",
        "Nasarawa State University, Keffi",
        "Nutrition and Dietetics",
        "JAMB",
        "UTME",
        "Post UTME",
        "O'Level",
        "WAEC",
        "NECO",
        "NABTEB",
        "subject combination",
        "admission requirement",
        "Use of English",
        "Chemistry",
        "Biology/Agricultural Science",
        "Mathematics",
        "Physics",
        "English Language",
        "General Metal Work",
        "General Wood Work",
        "Building/Engineering Drawing",
        "Furniture Design and Construction",
        "Upholstery Design and Construction",
        "Spray Painting and Period Furniture",
        "Spinning",
        "Weaving",
        "Surface Design and Printing",
        "Dyeing and Bleaching",
        "Basic Electricity"
      ],
      "answer": "For Nutrition and Dietetics at NSUK, the JAMB combination must include Use of English, Chemistry, Biology/Agricultural Science; the candidate should choose 1 subject(s) from Mathematics, Physics to make four JAMB subjects. For O'Level, the candidate needs at least five credit passes including English Language, Mathematics, Chemistry, Biology/Agricultural Science. Accepted additional O'Level subjects include Physics, General Metal Work, General Wood Work, Building/Engineering Drawing, Furniture Design and Construction, Upholstery Design and Construction, Spray Painting and Period Furniture, Spinning, Weaving, Surface Design and Printing, Dyeing and Bleaching, Basic Electricity.",
      "content": "Programme: Nutrition and Dietetics\nSchool: Nasarawa State University, Keffi (NSUK)\nAcademic session: 2025/2026\nRequirement type: JAMB subject combination and O'Level combination.\nJAMB requirement: The candidate must register four JAMB subjects. Compulsory JAMB subject(s): Use of English, Chemistry, Biology/Agricultural Science. Optional JAMB subject(s): Mathematics, Physics. Optional subjects needed: 1.\nO'Level requirement: The candidate must have at least five credit passes from WAEC, NECO, NABTEB, or another accepted senior secondary examination. English Language and Mathematics are compulsory for O'Level. Programme-specific compulsory O'Level subject(s): Chemistry, Biology/Agricultural Science. Accepted optional O'Level subject(s): Physics, General Metal Work, General Wood Work, Building/Engineering Drawing, Furniture Design and Construction, Upholstery Design and Construction, Spray Painting and Period Furniture, Spinning, Weaving, Surface Design and Printing, Dyeing and Bleaching, Basic Electricity.\nStudent guidance: The student should not assume that any subject is accepted. They should match both the JAMB requirement and the O'Level requirement for Nutrition and Dietetics.",
      "questionVariants": [
        "What are the JAMB subjects for Nutrition and Dietetics at NSUK?",
        "What O'Level subjects do I need for Nutrition and Dietetics at NSUK?",
        "What is the subject combination for Nutrition and Dietetics in NSUK?",
        "Can I study Nutrition and Dietetics with my JAMB subjects?",
        "Can I study Nutrition and Dietetics without one of the listed compulsory subjects?",
        "What optional subjects are accepted for Nutrition and Dietetics?",
        "Is Mathematics compulsory for Nutrition and Dietetics at NSUK?",
        "Is English Language compulsory for Nutrition and Dietetics at NSUK?",
        "What WAEC or NECO subjects do I need for Nutrition and Dietetics?",
        "Does the right JAMB combination mean I am fully qualified for Nutrition and Dietetics?",
        "Can I use Mathematics for Nutrition and Dietetics at NSUK?",
        "Can I use Physics for Nutrition and Dietetics at NSUK?",
        "Can I use Physics for Nutrition and Dietetics at NSUK?",
        "Can I use General Metal Work for Nutrition and Dietetics at NSUK?",
        "Can I use General Wood Work for Nutrition and Dietetics at NSUK?"
      ],
      "sourcePages": [
        4
      ],
      "reviewLevel": "manual_check_recommended",
      "sourceNotes": [
        "Source page(s): 4."
      ]
    },
    {
      "school": "Nasarawa State University, Keffi",
      "schoolShortName": "NSUK",
      "academicSession": "2025/2026",
      "sourceLabel": "NSUK Post UTME Subject Combination 2025/2026",
      "programme": "Arabic",
      "slug": "nsuk-arabic-requirements",
      "categorySlug": "programme-requirements",
      "type": "programme",
      "status": "published",
      "title": "NSUK Arabic Admission Subject Combination",
      "question": "What are the JAMB and O'Level subject requirements for Arabic at NSUK?",
      "jamb": {
        "totalRequiredSubjects": 4,
        "compulsorySubjects": [
          "Use of English",
          "Arabic"
        ],
        "optionalChooseCount": 2,
        "optionalSubjects": [
          "Christian Religious Studies",
          "Literature-in-English",
          "Islamic Studies",
          "French",
          "Yoruba",
          "Hausa",
          "Government/History",
          "Civic Education",
          "Economics",
          "Geography"
        ],
        "requiredSubjectGroups": [],
        "ruleSummary": "Candidate must register four JAMB subjects. Use of English is compulsory. The remaining subjects must follow the compulsory and optional subject rules for this programme."
      },
      "olevel": {
        "minimumCredits": 5,
        "globalCompulsorySubjects": [
          "English Language",
          "Mathematics"
        ],
        "programmeSpecificCompulsorySubjects": [
          "Arabic"
        ],
        "compulsorySubjects": [
          "English Language",
          "Mathematics",
          "Arabic"
        ],
        "optionalSubjects": [
          "Christian Religious Studies",
          "Literature-in-English",
          "Islamic Studies",
          "French",
          "Yoruba",
          "Hausa"
        ],
        "acceptedExamTypes": [
          "WAEC",
          "NECO",
          "NABTEB",
          "Other accepted senior secondary examinations"
        ],
        "ruleSummary": "Candidate must have at least five O'Level credit passes, including English Language and Mathematics, plus the programme-specific required/accepted subjects."
      },
      "warnings": [
        "Use of English in JAMB is different from English Language in O'Level; both must be treated separately.",
        "Correct JAMB subjects do not automatically satisfy O'Level requirements.",
        "Optional subjects should be selected only from the approved list for this programme.",
        "O'Level requires at least five credit passes, including English Language and Mathematics."
      ],
      "needsReview": false,
      "keywords": [
        "NSUK",
        "Nasarawa State University, Keffi",
        "Arabic",
        "JAMB",
        "UTME",
        "Post UTME",
        "O'Level",
        "WAEC",
        "NECO",
        "NABTEB",
        "subject combination",
        "admission requirement",
        "Use of English",
        "Christian Religious Studies",
        "Literature-in-English",
        "Islamic Studies",
        "French",
        "Yoruba",
        "Hausa",
        "Government/History",
        "Civic Education",
        "Economics",
        "Geography",
        "English Language",
        "Mathematics"
      ],
      "answer": "For Arabic at NSUK, the JAMB combination must include Use of English, Arabic; the candidate should choose 2 subject(s) from Christian Religious Studies, Literature-in-English, Islamic Studies, French, Yoruba, Hausa, Government/History, Civic Education, Economics, Geography to make four JAMB subjects. For O'Level, the candidate needs at least five credit passes including English Language, Mathematics, Arabic. Accepted additional O'Level subjects include Christian Religious Studies, Literature-in-English, Islamic Studies, French, Yoruba, Hausa.",
      "content": "Programme: Arabic\nSchool: Nasarawa State University, Keffi (NSUK)\nAcademic session: 2025/2026\nRequirement type: JAMB subject combination and O'Level combination.\nJAMB requirement: The candidate must register four JAMB subjects. Compulsory JAMB subject(s): Use of English, Arabic. Optional JAMB subject(s): Christian Religious Studies, Literature-in-English, Islamic Studies, French, Yoruba, Hausa, Government/History, Civic Education, Economics, Geography. Optional subjects needed: 2.\nO'Level requirement: The candidate must have at least five credit passes from WAEC, NECO, NABTEB, or another accepted senior secondary examination. English Language and Mathematics are compulsory for O'Level. Programme-specific compulsory O'Level subject(s): Arabic. Accepted optional O'Level subject(s): Christian Religious Studies, Literature-in-English, Islamic Studies, French, Yoruba, Hausa.\nStudent guidance: The student should not assume that any subject is accepted. They should match both the JAMB requirement and the O'Level requirement for Arabic.",
      "questionVariants": [
        "What are the JAMB subjects for Arabic at NSUK?",
        "What O'Level subjects do I need for Arabic at NSUK?",
        "What is the subject combination for Arabic in NSUK?",
        "Can I study Arabic with my JAMB subjects?",
        "Can I study Arabic without one of the listed compulsory subjects?",
        "What optional subjects are accepted for Arabic?",
        "Is Mathematics compulsory for Arabic at NSUK?",
        "Is English Language compulsory for Arabic at NSUK?",
        "What WAEC or NECO subjects do I need for Arabic?",
        "Does the right JAMB combination mean I am fully qualified for Arabic?",
        "Can I use Christian Religious Studies for Arabic at NSUK?",
        "Can I use Literature-in-English for Arabic at NSUK?",
        "Can I use Islamic Studies for Arabic at NSUK?",
        "Can I use Christian Religious Studies for Arabic at NSUK?",
        "Can I use Literature-in-English for Arabic at NSUK?",
        "Can I use Islamic Studies for Arabic at NSUK?"
      ],
      "sourcePages": [
        4
      ],
      "reviewLevel": "normal",
      "sourceNotes": [
        "Source page(s): 4."
      ]
    },
    {
      "school": "Nasarawa State University, Keffi",
      "schoolShortName": "NSUK",
      "academicSession": "2025/2026",
      "sourceLabel": "NSUK Post UTME Subject Combination 2025/2026",
      "programme": "CRS",
      "slug": "nsuk-crs-requirements",
      "categorySlug": "programme-requirements",
      "type": "programme",
      "status": "published",
      "title": "NSUK CRS Admission Subject Combination",
      "question": "What are the JAMB and O'Level subject requirements for CRS at NSUK?",
      "jamb": {
        "totalRequiredSubjects": 4,
        "compulsorySubjects": [
          "Use of English",
          "Christian Religious Studies"
        ],
        "optionalChooseCount": 2,
        "optionalSubjects": [
          "Christian Religious Studies",
          "Literature-in-English",
          "Islamic Studies",
          "Arabic",
          "French",
          "Yoruba",
          "Hausa",
          "Government/History",
          "Civic Education",
          "Economics",
          "Geography"
        ],
        "requiredSubjectGroups": [],
        "ruleSummary": "Candidate must register four JAMB subjects. Use of English is compulsory. The remaining subjects must follow the compulsory and optional subject rules for this programme."
      },
      "olevel": {
        "minimumCredits": 5,
        "globalCompulsorySubjects": [
          "English Language",
          "Mathematics"
        ],
        "programmeSpecificCompulsorySubjects": [
          "Christian Religious Studies"
        ],
        "compulsorySubjects": [
          "English Language",
          "Mathematics",
          "Christian Religious Studies"
        ],
        "optionalSubjects": [
          "Government/History",
          "Civic Education",
          "Economics",
          "Geography",
          "Literature-in-English",
          "Islamic Studies",
          "Arabic",
          "French",
          "Yoruba",
          "Hausa"
        ],
        "acceptedExamTypes": [
          "WAEC",
          "NECO",
          "NABTEB",
          "Other accepted senior secondary examinations"
        ],
        "ruleSummary": "Candidate must have at least five O'Level credit passes, including English Language and Mathematics, plus the programme-specific required/accepted subjects."
      },
      "warnings": [
        "Use of English in JAMB is different from English Language in O'Level; both must be treated separately.",
        "Correct JAMB subjects do not automatically satisfy O'Level requirements.",
        "Optional subjects should be selected only from the approved list for this programme.",
        "O'Level requires at least five credit passes, including English Language and Mathematics."
      ],
      "needsReview": false,
      "keywords": [
        "NSUK",
        "Nasarawa State University, Keffi",
        "Christian Religious Studies",
        "JAMB",
        "UTME",
        "Post UTME",
        "O'Level",
        "WAEC",
        "NECO",
        "NABTEB",
        "subject combination",
        "admission requirement",
        "Use of English",
        "Literature-in-English",
        "Islamic Studies",
        "Arabic",
        "French",
        "Yoruba",
        "Hausa",
        "Government/History",
        "Civic Education",
        "Economics",
        "Geography",
        "English Language",
        "Mathematics"
      ],
      "answer": "For CRS at NSUK, the JAMB combination must include Use of English, Christian Religious Studies; the candidate should choose 2 subject(s) from Christian Religious Studies, Literature-in-English, Islamic Studies, Arabic, French, Yoruba, Hausa, Government/History, Civic Education, Economics, Geography to make four JAMB subjects. For O'Level, the candidate needs at least five credit passes including English Language, Mathematics, Christian Religious Studies. Accepted additional O'Level subjects include Government/History, Civic Education, Economics, Geography, Literature-in-English, Islamic Studies, Arabic, French, Yoruba, Hausa.",
      "content": "Programme: CRS\nSchool: Nasarawa State University, Keffi (NSUK)\nAcademic session: 2025/2026\nRequirement type: JAMB subject combination and O'Level combination.\nJAMB requirement: The candidate must register four JAMB subjects. Compulsory JAMB subject(s): Use of English, Christian Religious Studies. Optional JAMB subject(s): Christian Religious Studies, Literature-in-English, Islamic Studies, Arabic, French, Yoruba, Hausa, Government/History, Civic Education, Economics, Geography. Optional subjects needed: 2.\nO'Level requirement: The candidate must have at least five credit passes from WAEC, NECO, NABTEB, or another accepted senior secondary examination. English Language and Mathematics are compulsory for O'Level. Programme-specific compulsory O'Level subject(s): Christian Religious Studies. Accepted optional O'Level subject(s): Government/History, Civic Education, Economics, Geography, Literature-in-English, Islamic Studies, Arabic, French, Yoruba, Hausa.\nStudent guidance: The student should not assume that any subject is accepted. They should match both the JAMB requirement and the O'Level requirement for CRS.",
      "questionVariants": [
        "What are the JAMB subjects for CRS at NSUK?",
        "What O'Level subjects do I need for CRS at NSUK?",
        "What is the subject combination for CRS in NSUK?",
        "Can I study CRS with my JAMB subjects?",
        "Can I study CRS without one of the listed compulsory subjects?",
        "What optional subjects are accepted for CRS?",
        "Is Mathematics compulsory for CRS at NSUK?",
        "Is English Language compulsory for CRS at NSUK?",
        "What WAEC or NECO subjects do I need for CRS?",
        "Does the right JAMB combination mean I am fully qualified for CRS?",
        "Can I use Christian Religious Studies for CRS at NSUK?",
        "Can I use Literature-in-English for CRS at NSUK?",
        "Can I use Islamic Studies for CRS at NSUK?",
        "Can I use Government/History for CRS at NSUK?",
        "Can I use Civic Education for CRS at NSUK?",
        "Can I use Economics for CRS at NSUK?"
      ],
      "sourcePages": [
        4,
        5
      ],
      "reviewLevel": "normal",
      "sourceNotes": [
        "Source page(s): 4, 5."
      ]
    },
    {
      "school": "Nasarawa State University, Keffi",
      "schoolShortName": "NSUK",
      "academicSession": "2025/2026",
      "sourceLabel": "NSUK Post UTME Subject Combination 2025/2026",
      "programme": "English",
      "slug": "nsuk-english-requirements",
      "categorySlug": "programme-requirements",
      "type": "programme",
      "status": "published",
      "title": "NSUK English Admission Subject Combination",
      "question": "What are the JAMB and O'Level subject requirements for English at NSUK?",
      "jamb": {
        "totalRequiredSubjects": 4,
        "compulsorySubjects": [
          "Use of English",
          "Literature-in-English"
        ],
        "optionalChooseCount": 2,
        "optionalSubjects": [
          "Government/History",
          "Civic Education",
          "Economics",
          "Geography",
          "Christian Religious Studies",
          "Islamic Studies",
          "Arabic",
          "French",
          "Yoruba",
          "Hausa"
        ],
        "requiredSubjectGroups": [],
        "ruleSummary": "Candidate must register four JAMB subjects. Use of English is compulsory. The remaining subjects must follow the compulsory and optional subject rules for this programme."
      },
      "olevel": {
        "minimumCredits": 5,
        "globalCompulsorySubjects": [
          "English Language",
          "Mathematics"
        ],
        "programmeSpecificCompulsorySubjects": [
          "Literature-in-English"
        ],
        "compulsorySubjects": [
          "English Language",
          "Mathematics",
          "Literature-in-English"
        ],
        "optionalSubjects": [
          "Islamic Studies",
          "Arabic",
          "French",
          "Yoruba",
          "Hausa",
          "Government/History",
          "Civic Education",
          "Economics",
          "Geography",
          "Christian Religious Studies"
        ],
        "acceptedExamTypes": [
          "WAEC",
          "NECO",
          "NABTEB",
          "Other accepted senior secondary examinations"
        ],
        "ruleSummary": "Candidate must have at least five O'Level credit passes, including English Language and Mathematics, plus the programme-specific required/accepted subjects."
      },
      "warnings": [
        "Use of English in JAMB is different from English Language in O'Level; both must be treated separately.",
        "Correct JAMB subjects do not automatically satisfy O'Level requirements.",
        "Optional subjects should be selected only from the approved list for this programme.",
        "O'Level requires at least five credit passes, including English Language and Mathematics."
      ],
      "needsReview": false,
      "keywords": [
        "NSUK",
        "Nasarawa State University, Keffi",
        "English",
        "JAMB",
        "UTME",
        "Post UTME",
        "O'Level",
        "WAEC",
        "NECO",
        "NABTEB",
        "subject combination",
        "admission requirement",
        "Use of English",
        "Literature-in-English",
        "Government/History",
        "Civic Education",
        "Economics",
        "Geography",
        "Christian Religious Studies",
        "Islamic Studies",
        "Arabic",
        "French",
        "Yoruba",
        "Hausa",
        "English Language",
        "Mathematics"
      ],
      "answer": "For English at NSUK, the JAMB combination must include Use of English, Literature-in-English; the candidate should choose 2 subject(s) from Government/History, Civic Education, Economics, Geography, Christian Religious Studies, Islamic Studies, Arabic, French, Yoruba, Hausa to make four JAMB subjects. For O'Level, the candidate needs at least five credit passes including English Language, Mathematics, Literature-in-English. Accepted additional O'Level subjects include Islamic Studies, Arabic, French, Yoruba, Hausa, Government/History, Civic Education, Economics, Geography, Christian Religious Studies.",
      "content": "Programme: English\nSchool: Nasarawa State University, Keffi (NSUK)\nAcademic session: 2025/2026\nRequirement type: JAMB subject combination and O'Level combination.\nJAMB requirement: The candidate must register four JAMB subjects. Compulsory JAMB subject(s): Use of English, Literature-in-English. Optional JAMB subject(s): Government/History, Civic Education, Economics, Geography, Christian Religious Studies, Islamic Studies, Arabic, French, Yoruba, Hausa. Optional subjects needed: 2.\nO'Level requirement: The candidate must have at least five credit passes from WAEC, NECO, NABTEB, or another accepted senior secondary examination. English Language and Mathematics are compulsory for O'Level. Programme-specific compulsory O'Level subject(s): Literature-in-English. Accepted optional O'Level subject(s): Islamic Studies, Arabic, French, Yoruba, Hausa, Government/History, Civic Education, Economics, Geography, Christian Religious Studies.\nStudent guidance: The student should not assume that any subject is accepted. They should match both the JAMB requirement and the O'Level requirement for English.",
      "questionVariants": [
        "What are the JAMB subjects for English at NSUK?",
        "What O'Level subjects do I need for English at NSUK?",
        "What is the subject combination for English in NSUK?",
        "Can I study English with my JAMB subjects?",
        "Can I study English without one of the listed compulsory subjects?",
        "What optional subjects are accepted for English?",
        "Is Mathematics compulsory for English at NSUK?",
        "Is English Language compulsory for English at NSUK?",
        "What WAEC or NECO subjects do I need for English?",
        "Does the right JAMB combination mean I am fully qualified for English?",
        "Can I use Government/History for English at NSUK?",
        "Can I use Civic Education for English at NSUK?",
        "Can I use Economics for English at NSUK?",
        "Can I use Islamic Studies for English at NSUK?",
        "Can I use Arabic for English at NSUK?",
        "Can I use French for English at NSUK?"
      ],
      "sourcePages": [
        5
      ],
      "reviewLevel": "normal",
      "sourceNotes": [
        "Source page(s): 5."
      ]
    },
    {
      "school": "Nasarawa State University, Keffi",
      "schoolShortName": "NSUK",
      "academicSession": "2025/2026",
      "sourceLabel": "NSUK Post UTME Subject Combination 2025/2026",
      "programme": "French",
      "slug": "nsuk-french-requirements",
      "categorySlug": "programme-requirements",
      "type": "programme",
      "status": "published",
      "title": "NSUK French Admission Subject Combination",
      "question": "What are the JAMB and O'Level subject requirements for French at NSUK?",
      "jamb": {
        "totalRequiredSubjects": 4,
        "compulsorySubjects": [
          "Use of English",
          "French"
        ],
        "optionalChooseCount": 2,
        "optionalSubjects": [
          "Government/History",
          "Civic Education",
          "Economics",
          "Geography",
          "Christian Religious Studies",
          "Literature-in-English",
          "Islamic Studies",
          "Arabic",
          "Yoruba",
          "Hausa"
        ],
        "requiredSubjectGroups": [],
        "ruleSummary": "Candidate must register four JAMB subjects. Use of English is compulsory. The remaining subjects must follow the compulsory and optional subject rules for this programme."
      },
      "olevel": {
        "minimumCredits": 5,
        "globalCompulsorySubjects": [
          "English Language",
          "Mathematics"
        ],
        "programmeSpecificCompulsorySubjects": [],
        "compulsorySubjects": [
          "English Language",
          "Mathematics"
        ],
        "optionalSubjects": [
          "French",
          "Christian Religious Studies",
          "Literature-in-English",
          "Islamic Studies",
          "Arabic",
          "Yoruba",
          "Hausa",
          "Government/History",
          "Economics",
          "Geography"
        ],
        "acceptedExamTypes": [
          "WAEC",
          "NECO",
          "NABTEB",
          "Other accepted senior secondary examinations"
        ],
        "ruleSummary": "Candidate must have at least five O'Level credit passes, including English Language and Mathematics, plus the programme-specific required/accepted subjects."
      },
      "warnings": [
        "Use of English in JAMB is different from English Language in O'Level; both must be treated separately.",
        "Correct JAMB subjects do not automatically satisfy O'Level requirements.",
        "Optional subjects should be selected only from the approved list for this programme.",
        "O'Level requires at least five credit passes, including English Language and Mathematics."
      ],
      "needsReview": false,
      "keywords": [
        "NSUK",
        "Nasarawa State University, Keffi",
        "French",
        "JAMB",
        "UTME",
        "Post UTME",
        "O'Level",
        "WAEC",
        "NECO",
        "NABTEB",
        "subject combination",
        "admission requirement",
        "Use of English",
        "Government/History",
        "Civic Education",
        "Economics",
        "Geography",
        "Christian Religious Studies",
        "Literature-in-English",
        "Islamic Studies",
        "Arabic",
        "Yoruba",
        "Hausa",
        "English Language",
        "Mathematics"
      ],
      "answer": "For French at NSUK, the JAMB combination must include Use of English, French; the candidate should choose 2 subject(s) from Government/History, Civic Education, Economics, Geography, Christian Religious Studies, Literature-in-English, Islamic Studies, Arabic, Yoruba, Hausa to make four JAMB subjects. For O'Level, the candidate needs at least five credit passes including English Language, Mathematics. Accepted additional O'Level subjects include French, Christian Religious Studies, Literature-in-English, Islamic Studies, Arabic, Yoruba, Hausa, Government/History, Economics, Geography.",
      "content": "Programme: French\nSchool: Nasarawa State University, Keffi (NSUK)\nAcademic session: 2025/2026\nRequirement type: JAMB subject combination and O'Level combination.\nJAMB requirement: The candidate must register four JAMB subjects. Compulsory JAMB subject(s): Use of English, French. Optional JAMB subject(s): Government/History, Civic Education, Economics, Geography, Christian Religious Studies, Literature-in-English, Islamic Studies, Arabic, Yoruba, Hausa. Optional subjects needed: 2.\nO'Level requirement: The candidate must have at least five credit passes from WAEC, NECO, NABTEB, or another accepted senior secondary examination. English Language and Mathematics are compulsory for O'Level. Programme-specific compulsory O'Level subject(s): none listed beyond English Language and Mathematics. Accepted optional O'Level subject(s): French, Christian Religious Studies, Literature-in-English, Islamic Studies, Arabic, Yoruba, Hausa, Government/History, Economics, Geography.\nStudent guidance: The student should not assume that any subject is accepted. They should match both the JAMB requirement and the O'Level requirement for French.",
      "questionVariants": [
        "What are the JAMB subjects for French at NSUK?",
        "What O'Level subjects do I need for French at NSUK?",
        "What is the subject combination for French in NSUK?",
        "Can I study French with my JAMB subjects?",
        "Can I study French without one of the listed compulsory subjects?",
        "What optional subjects are accepted for French?",
        "Is Mathematics compulsory for French at NSUK?",
        "Is English Language compulsory for French at NSUK?",
        "What WAEC or NECO subjects do I need for French?",
        "Does the right JAMB combination mean I am fully qualified for French?",
        "Can I use Government/History for French at NSUK?",
        "Can I use Civic Education for French at NSUK?",
        "Can I use Economics for French at NSUK?",
        "Can I use French for French at NSUK?",
        "Can I use Christian Religious Studies for French at NSUK?",
        "Can I use Literature-in-English for French at NSUK?"
      ],
      "sourcePages": [
        5
      ],
      "reviewLevel": "normal",
      "sourceNotes": [
        "Source page(s): 5."
      ]
    },
    {
      "school": "Nasarawa State University, Keffi",
      "schoolShortName": "NSUK",
      "academicSession": "2025/2026",
      "sourceLabel": "NSUK Post UTME Subject Combination 2025/2026",
      "programme": "History",
      "slug": "nsuk-history-requirements",
      "categorySlug": "programme-requirements",
      "type": "programme",
      "status": "published",
      "title": "NSUK History Admission Subject Combination",
      "question": "What are the JAMB and O'Level subject requirements for History at NSUK?",
      "jamb": {
        "totalRequiredSubjects": 4,
        "compulsorySubjects": [
          "Use of English",
          "Government/History"
        ],
        "optionalChooseCount": 2,
        "optionalSubjects": [
          "Christian Religious Studies",
          "Literature-in-English",
          "Islamic Studies",
          "Arabic",
          "French",
          "Yoruba",
          "Hausa",
          "Civic Education",
          "Economics",
          "Geography"
        ],
        "requiredSubjectGroups": [
          {
            "slot": "Government/History",
            "choose": 1,
            "options": [
              "Government",
              "History"
            ]
          }
        ],
        "ruleSummary": "Candidate must register four JAMB subjects. Use of English is compulsory. The remaining subjects must follow the compulsory and optional subject rules for this programme."
      },
      "olevel": {
        "minimumCredits": 5,
        "globalCompulsorySubjects": [
          "English Language",
          "Mathematics"
        ],
        "programmeSpecificCompulsorySubjects": [
          "Government/History"
        ],
        "compulsorySubjects": [
          "English Language",
          "Mathematics",
          "Government/History"
        ],
        "optionalSubjects": [
          "Civic Education",
          "Economics",
          "Geography",
          "Christian Religious Studies",
          "Literature-in-English",
          "Islamic Studies",
          "Arabic",
          "French",
          "Yoruba",
          "Hausa"
        ],
        "acceptedExamTypes": [
          "WAEC",
          "NECO",
          "NABTEB",
          "Other accepted senior secondary examinations"
        ],
        "ruleSummary": "Candidate must have at least five O'Level credit passes, including English Language and Mathematics, plus the programme-specific required/accepted subjects."
      },
      "warnings": [
        "Use of English in JAMB is different from English Language in O'Level; both must be treated separately.",
        "Correct JAMB subjects do not automatically satisfy O'Level requirements.",
        "Optional subjects should be selected only from the approved list for this programme.",
        "O'Level requires at least five credit passes, including English Language and Mathematics.",
        "A slash in a subject slot, such as Biology/Agricultural Science, means the source presents alternatives for that slot; validate carefully during eligibility checks."
      ],
      "needsReview": false,
      "keywords": [
        "NSUK",
        "Nasarawa State University, Keffi",
        "History",
        "JAMB",
        "UTME",
        "Post UTME",
        "O'Level",
        "WAEC",
        "NECO",
        "NABTEB",
        "subject combination",
        "admission requirement",
        "Use of English",
        "Government/History",
        "Christian Religious Studies",
        "Literature-in-English",
        "Islamic Studies",
        "Arabic",
        "French",
        "Yoruba",
        "Hausa",
        "Civic Education",
        "Economics",
        "Geography",
        "English Language",
        "Mathematics"
      ],
      "answer": "For History at NSUK, the JAMB combination must include Use of English, Government/History; the candidate should choose 2 subject(s) from Christian Religious Studies, Literature-in-English, Islamic Studies, Arabic, French, Yoruba, Hausa, Civic Education, Economics, Geography to make four JAMB subjects. For O'Level, the candidate needs at least five credit passes including English Language, Mathematics, Government/History. Accepted additional O'Level subjects include Civic Education, Economics, Geography, Christian Religious Studies, Literature-in-English, Islamic Studies, Arabic, French, Yoruba, Hausa.",
      "content": "Programme: History\nSchool: Nasarawa State University, Keffi (NSUK)\nAcademic session: 2025/2026\nRequirement type: JAMB subject combination and O'Level combination.\nJAMB requirement: The candidate must register four JAMB subjects. Compulsory JAMB subject(s): Use of English, Government/History. Optional JAMB subject(s): Christian Religious Studies, Literature-in-English, Islamic Studies, Arabic, French, Yoruba, Hausa, Civic Education, Economics, Geography. Optional subjects needed: 2.\nO'Level requirement: The candidate must have at least five credit passes from WAEC, NECO, NABTEB, or another accepted senior secondary examination. English Language and Mathematics are compulsory for O'Level. Programme-specific compulsory O'Level subject(s): Government/History. Accepted optional O'Level subject(s): Civic Education, Economics, Geography, Christian Religious Studies, Literature-in-English, Islamic Studies, Arabic, French, Yoruba, Hausa.\nStudent guidance: The student should not assume that any subject is accepted. They should match both the JAMB requirement and the O'Level requirement for History.",
      "questionVariants": [
        "What are the JAMB subjects for History at NSUK?",
        "What O'Level subjects do I need for History at NSUK?",
        "What is the subject combination for History in NSUK?",
        "Can I study History with my JAMB subjects?",
        "Can I study History without one of the listed compulsory subjects?",
        "What optional subjects are accepted for History?",
        "Is Mathematics compulsory for History at NSUK?",
        "Is English Language compulsory for History at NSUK?",
        "What WAEC or NECO subjects do I need for History?",
        "Does the right JAMB combination mean I am fully qualified for History?",
        "Can I use Christian Religious Studies for History at NSUK?",
        "Can I use Literature-in-English for History at NSUK?",
        "Can I use Islamic Studies for History at NSUK?",
        "Can I use Civic Education for History at NSUK?",
        "Can I use Economics for History at NSUK?",
        "Can I use Geography for History at NSUK?"
      ],
      "sourcePages": [
        5,
        6
      ],
      "reviewLevel": "normal",
      "sourceNotes": [
        "Source page(s): 5, 6."
      ]
    },
    {
      "school": "Nasarawa State University, Keffi",
      "schoolShortName": "NSUK",
      "academicSession": "2025/2026",
      "sourceLabel": "NSUK Post UTME Subject Combination 2025/2026",
      "programme": "Islam and Development Studies",
      "slug": "nsuk-islam-and-development-studies-requirements",
      "categorySlug": "programme-requirements",
      "type": "programme",
      "status": "published",
      "title": "NSUK Islam and Development Studies Admission Subject Combination",
      "question": "What are the JAMB and O'Level subject requirements for Islam and Development Studies at NSUK?",
      "jamb": {
        "totalRequiredSubjects": 4,
        "compulsorySubjects": [
          "Use of English",
          "Islamic Studies"
        ],
        "optionalChooseCount": 2,
        "optionalSubjects": [
          "Christian Religious Studies",
          "Literature-in-English",
          "Arabic",
          "French",
          "Yoruba",
          "Hausa",
          "Government/History",
          "Civic Education",
          "Economics",
          "Geography"
        ],
        "requiredSubjectGroups": [],
        "ruleSummary": "Candidate must register four JAMB subjects. Use of English is compulsory. The remaining subjects must follow the compulsory and optional subject rules for this programme."
      },
      "olevel": {
        "minimumCredits": 5,
        "globalCompulsorySubjects": [
          "English Language",
          "Mathematics"
        ],
        "programmeSpecificCompulsorySubjects": [
          "Islamic Studies/Arabic"
        ],
        "compulsorySubjects": [
          "English Language",
          "Mathematics",
          "Islamic Studies/Arabic"
        ],
        "optionalSubjects": [
          "Christian Religious Studies",
          "Literature-in-English",
          "French",
          "Yoruba",
          "Hausa"
        ],
        "acceptedExamTypes": [
          "WAEC",
          "NECO",
          "NABTEB",
          "Other accepted senior secondary examinations"
        ],
        "ruleSummary": "Candidate must have at least five O'Level credit passes, including English Language and Mathematics, plus the programme-specific required/accepted subjects."
      },
      "warnings": [
        "Use of English in JAMB is different from English Language in O'Level; both must be treated separately.",
        "Correct JAMB subjects do not automatically satisfy O'Level requirements.",
        "Optional subjects should be selected only from the approved list for this programme.",
        "O'Level requires at least five credit passes, including English Language and Mathematics."
      ],
      "needsReview": false,
      "keywords": [
        "NSUK",
        "Nasarawa State University, Keffi",
        "Islam and Development Studies",
        "JAMB",
        "UTME",
        "Post UTME",
        "O'Level",
        "WAEC",
        "NECO",
        "NABTEB",
        "subject combination",
        "admission requirement",
        "Use of English",
        "Islamic Studies",
        "Christian Religious Studies",
        "Literature-in-English",
        "Arabic",
        "French",
        "Yoruba",
        "Hausa",
        "Government/History",
        "Civic Education",
        "Economics",
        "Geography",
        "English Language",
        "Mathematics",
        "Islamic Studies/Arabic"
      ],
      "answer": "For Islam and Development Studies at NSUK, the JAMB combination must include Use of English, Islamic Studies; the candidate should choose 2 subject(s) from Christian Religious Studies, Literature-in-English, Arabic, French, Yoruba, Hausa, Government/History, Civic Education, Economics, Geography to make four JAMB subjects. For O'Level, the candidate needs at least five credit passes including English Language, Mathematics, Islamic Studies/Arabic. Accepted additional O'Level subjects include Christian Religious Studies, Literature-in-English, French, Yoruba, Hausa.",
      "content": "Programme: Islam and Development Studies\nSchool: Nasarawa State University, Keffi (NSUK)\nAcademic session: 2025/2026\nRequirement type: JAMB subject combination and O'Level combination.\nJAMB requirement: The candidate must register four JAMB subjects. Compulsory JAMB subject(s): Use of English, Islamic Studies. Optional JAMB subject(s): Christian Religious Studies, Literature-in-English, Arabic, French, Yoruba, Hausa, Government/History, Civic Education, Economics, Geography. Optional subjects needed: 2.\nO'Level requirement: The candidate must have at least five credit passes from WAEC, NECO, NABTEB, or another accepted senior secondary examination. English Language and Mathematics are compulsory for O'Level. Programme-specific compulsory O'Level subject(s): Islamic Studies/Arabic. Accepted optional O'Level subject(s): Christian Religious Studies, Literature-in-English, French, Yoruba, Hausa.\nStudent guidance: The student should not assume that any subject is accepted. They should match both the JAMB requirement and the O'Level requirement for Islam and Development Studies.",
      "questionVariants": [
        "What are the JAMB subjects for Islam and Development Studies at NSUK?",
        "What O'Level subjects do I need for Islam and Development Studies at NSUK?",
        "What is the subject combination for Islam and Development Studies in NSUK?",
        "Can I study Islam and Development Studies with my JAMB subjects?",
        "Can I study Islam and Development Studies without one of the listed compulsory subjects?",
        "What optional subjects are accepted for Islam and Development Studies?",
        "Is Mathematics compulsory for Islam and Development Studies at NSUK?",
        "Is English Language compulsory for Islam and Development Studies at NSUK?",
        "What WAEC or NECO subjects do I need for Islam and Development Studies?",
        "Does the right JAMB combination mean I am fully qualified for Islam and Development Studies?",
        "Can I use Christian Religious Studies for Islam and Development Studies at NSUK?",
        "Can I use Literature-in-English for Islam and Development Studies at NSUK?",
        "Can I use Arabic for Islam and Development Studies at NSUK?",
        "Can I use Christian Religious Studies for Islam and Development Studies at NSUK?",
        "Can I use Literature-in-English for Islam and Development Studies at NSUK?",
        "Can I use French for Islam and Development Studies at NSUK?"
      ],
      "sourcePages": [
        6
      ],
      "reviewLevel": "normal",
      "sourceNotes": [
        "Source page(s): 6."
      ]
    },
    {
      "school": "Nasarawa State University, Keffi",
      "schoolShortName": "NSUK",
      "academicSession": "2025/2026",
      "sourceLabel": "NSUK Post UTME Subject Combination 2025/2026",
      "programme": "Languages and Linguistics",
      "slug": "nsuk-languages-and-linguistics-requirements",
      "categorySlug": "programme-requirements",
      "type": "programme",
      "status": "published",
      "title": "NSUK Languages and Linguistics Admission Subject Combination",
      "question": "What are the JAMB and O'Level subject requirements for Languages and Linguistics at NSUK?",
      "jamb": {
        "totalRequiredSubjects": 4,
        "compulsorySubjects": [
          "Use of English"
        ],
        "optionalChooseCount": 3,
        "optionalSubjects": [
          "Christian Religious Studies",
          "Literature-in-English",
          "Islamic Studies",
          "Arabic",
          "French",
          "Yoruba",
          "Hausa",
          "Government/History",
          "Civic Education",
          "Economics",
          "Geography"
        ],
        "requiredSubjectGroups": [],
        "ruleSummary": "Candidate must register four JAMB subjects. Use of English is compulsory. The remaining subjects must follow the compulsory and optional subject rules for this programme."
      },
      "olevel": {
        "minimumCredits": 5,
        "globalCompulsorySubjects": [
          "English Language",
          "Mathematics"
        ],
        "programmeSpecificCompulsorySubjects": [],
        "compulsorySubjects": [
          "English Language",
          "Mathematics"
        ],
        "optionalSubjects": [
          "Government/History",
          "Civic Education",
          "Economics",
          "Geography",
          "Chemistry",
          "Biology",
          "Physics",
          "Agricultural Science",
          "Food and Nutrition",
          "Christian Religious Studies",
          "Literature-in-English",
          "Islamic Studies",
          "Arabic",
          "French",
          "Yoruba",
          "Hausa"
        ],
        "acceptedExamTypes": [
          "WAEC",
          "NECO",
          "NABTEB",
          "Other accepted senior secondary examinations"
        ],
        "ruleSummary": "Candidate must have at least five O'Level credit passes, including English Language and Mathematics, plus the programme-specific required/accepted subjects."
      },
      "warnings": [
        "Use of English in JAMB is different from English Language in O'Level; both must be treated separately.",
        "Correct JAMB subjects do not automatically satisfy O'Level requirements.",
        "Optional subjects should be selected only from the approved list for this programme.",
        "O'Level requires at least five credit passes, including English Language and Mathematics.",
        "Where the source says 'Any three subjects', this seed restricts those choices to the approved subject context listed for the programme, not literally every subject."
      ],
      "needsReview": false,
      "keywords": [
        "NSUK",
        "Nasarawa State University, Keffi",
        "Languages and Linguistics",
        "JAMB",
        "UTME",
        "Post UTME",
        "O'Level",
        "WAEC",
        "NECO",
        "NABTEB",
        "subject combination",
        "admission requirement",
        "Use of English",
        "Christian Religious Studies",
        "Literature-in-English",
        "Islamic Studies",
        "Arabic",
        "French",
        "Yoruba",
        "Hausa",
        "Government/History",
        "Civic Education",
        "Economics",
        "Geography",
        "English Language",
        "Mathematics",
        "Chemistry",
        "Biology",
        "Physics",
        "Agricultural Science",
        "Food and Nutrition"
      ],
      "answer": "For Languages and Linguistics at NSUK, the JAMB combination must include Use of English; the candidate should choose 3 subject(s) from Christian Religious Studies, Literature-in-English, Islamic Studies, Arabic, French, Yoruba, Hausa, Government/History, Civic Education, Economics, Geography to make four JAMB subjects. For O'Level, the candidate needs at least five credit passes including English Language, Mathematics. Accepted additional O'Level subjects include Government/History, Civic Education, Economics, Geography, Chemistry, Biology, Physics, Agricultural Science, Food and Nutrition, Christian Religious Studies, Literature-in-English, Islamic Studies, Arabic, French, Yoruba, Hausa.",
      "content": "Programme: Languages and Linguistics\nSchool: Nasarawa State University, Keffi (NSUK)\nAcademic session: 2025/2026\nRequirement type: JAMB subject combination and O'Level combination.\nJAMB requirement: The candidate must register four JAMB subjects. Compulsory JAMB subject(s): Use of English. Optional JAMB subject(s): Christian Religious Studies, Literature-in-English, Islamic Studies, Arabic, French, Yoruba, Hausa, Government/History, Civic Education, Economics, Geography. Optional subjects needed: 3.\nO'Level requirement: The candidate must have at least five credit passes from WAEC, NECO, NABTEB, or another accepted senior secondary examination. English Language and Mathematics are compulsory for O'Level. Programme-specific compulsory O'Level subject(s): none listed beyond English Language and Mathematics. Accepted optional O'Level subject(s): Government/History, Civic Education, Economics, Geography, Chemistry, Biology, Physics, Agricultural Science, Food and Nutrition, Christian Religious Studies, Literature-in-English, Islamic Studies, Arabic, French, Yoruba, Hausa.\nStudent guidance: The student should not assume that any subject is accepted. They should match both the JAMB requirement and the O'Level requirement for Languages and Linguistics.",
      "questionVariants": [
        "What are the JAMB subjects for Languages and Linguistics at NSUK?",
        "What O'Level subjects do I need for Languages and Linguistics at NSUK?",
        "What is the subject combination for Languages and Linguistics in NSUK?",
        "Can I study Languages and Linguistics with my JAMB subjects?",
        "Can I study Languages and Linguistics without one of the listed compulsory subjects?",
        "What optional subjects are accepted for Languages and Linguistics?",
        "Is Mathematics compulsory for Languages and Linguistics at NSUK?",
        "Is English Language compulsory for Languages and Linguistics at NSUK?",
        "What WAEC or NECO subjects do I need for Languages and Linguistics?",
        "Does the right JAMB combination mean I am fully qualified for Languages and Linguistics?",
        "Can I use Christian Religious Studies for Languages and Linguistics at NSUK?",
        "Can I use Literature-in-English for Languages and Linguistics at NSUK?",
        "Can I use Islamic Studies for Languages and Linguistics at NSUK?",
        "Can I use Government/History for Languages and Linguistics at NSUK?",
        "Can I use Civic Education for Languages and Linguistics at NSUK?",
        "Can I use Economics for Languages and Linguistics at NSUK?"
      ],
      "sourcePages": [
        6
      ],
      "reviewLevel": "normal",
      "sourceNotes": [
        "Source page(s): 6."
      ]
    },
    {
      "school": "Nasarawa State University, Keffi",
      "schoolShortName": "NSUK",
      "academicSession": "2025/2026",
      "sourceLabel": "NSUK Post UTME Subject Combination 2025/2026",
      "programme": "Theatre and Cultural Studies",
      "slug": "nsuk-theatre-and-cultural-studies-requirements",
      "categorySlug": "programme-requirements",
      "type": "programme",
      "status": "published",
      "title": "NSUK Theatre and Cultural Studies Admission Subject Combination",
      "question": "What are the JAMB and O'Level subject requirements for Theatre and Cultural Studies at NSUK?",
      "jamb": {
        "totalRequiredSubjects": 4,
        "compulsorySubjects": [
          "Use of English",
          "Literature-in-English"
        ],
        "optionalChooseCount": 2,
        "optionalSubjects": [
          "Christian Religious Studies",
          "Islamic Studies",
          "Arabic",
          "French",
          "Yoruba",
          "Hausa",
          "Government/History",
          "Civic Education",
          "Economics",
          "Geography"
        ],
        "requiredSubjectGroups": [],
        "ruleSummary": "Candidate must register four JAMB subjects. Use of English is compulsory. The remaining subjects must follow the compulsory and optional subject rules for this programme."
      },
      "olevel": {
        "minimumCredits": 5,
        "globalCompulsorySubjects": [
          "English Language",
          "Mathematics"
        ],
        "programmeSpecificCompulsorySubjects": [],
        "compulsorySubjects": [
          "English Language",
          "Mathematics"
        ],
        "optionalSubjects": [
          "Government",
          "Christian Religious Studies",
          "Literature-in-English",
          "Islamic Studies",
          "Arabic",
          "French",
          "Yoruba",
          "Hausa"
        ],
        "acceptedExamTypes": [
          "WAEC",
          "NECO",
          "NABTEB",
          "Other accepted senior secondary examinations"
        ],
        "ruleSummary": "Candidate must have at least five O'Level credit passes, including English Language and Mathematics, plus the programme-specific required/accepted subjects."
      },
      "warnings": [
        "Use of English in JAMB is different from English Language in O'Level; both must be treated separately.",
        "Correct JAMB subjects do not automatically satisfy O'Level requirements.",
        "Optional subjects should be selected only from the approved list for this programme.",
        "O'Level requires at least five credit passes, including English Language and Mathematics."
      ],
      "needsReview": false,
      "keywords": [
        "NSUK",
        "Nasarawa State University, Keffi",
        "Theatre and Cultural Studies",
        "JAMB",
        "UTME",
        "Post UTME",
        "O'Level",
        "WAEC",
        "NECO",
        "NABTEB",
        "subject combination",
        "admission requirement",
        "Use of English",
        "Literature-in-English",
        "Christian Religious Studies",
        "Islamic Studies",
        "Arabic",
        "French",
        "Yoruba",
        "Hausa",
        "Government/History",
        "Civic Education",
        "Economics",
        "Geography",
        "English Language",
        "Mathematics",
        "Government"
      ],
      "answer": "For Theatre and Cultural Studies at NSUK, the JAMB combination must include Use of English, Literature-in-English; the candidate should choose 2 subject(s) from Christian Religious Studies, Islamic Studies, Arabic, French, Yoruba, Hausa, Government/History, Civic Education, Economics, Geography to make four JAMB subjects. For O'Level, the candidate needs at least five credit passes including English Language, Mathematics. Accepted additional O'Level subjects include Government, Christian Religious Studies, Literature-in-English, Islamic Studies, Arabic, French, Yoruba, Hausa.",
      "content": "Programme: Theatre and Cultural Studies\nSchool: Nasarawa State University, Keffi (NSUK)\nAcademic session: 2025/2026\nRequirement type: JAMB subject combination and O'Level combination.\nJAMB requirement: The candidate must register four JAMB subjects. Compulsory JAMB subject(s): Use of English, Literature-in-English. Optional JAMB subject(s): Christian Religious Studies, Islamic Studies, Arabic, French, Yoruba, Hausa, Government/History, Civic Education, Economics, Geography. Optional subjects needed: 2.\nO'Level requirement: The candidate must have at least five credit passes from WAEC, NECO, NABTEB, or another accepted senior secondary examination. English Language and Mathematics are compulsory for O'Level. Programme-specific compulsory O'Level subject(s): none listed beyond English Language and Mathematics. Accepted optional O'Level subject(s): Government, Christian Religious Studies, Literature-in-English, Islamic Studies, Arabic, French, Yoruba, Hausa.\nStudent guidance: The student should not assume that any subject is accepted. They should match both the JAMB requirement and the O'Level requirement for Theatre and Cultural Studies.",
      "questionVariants": [
        "What are the JAMB subjects for Theatre and Cultural Studies at NSUK?",
        "What O'Level subjects do I need for Theatre and Cultural Studies at NSUK?",
        "What is the subject combination for Theatre and Cultural Studies in NSUK?",
        "Can I study Theatre and Cultural Studies with my JAMB subjects?",
        "Can I study Theatre and Cultural Studies without one of the listed compulsory subjects?",
        "What optional subjects are accepted for Theatre and Cultural Studies?",
        "Is Mathematics compulsory for Theatre and Cultural Studies at NSUK?",
        "Is English Language compulsory for Theatre and Cultural Studies at NSUK?",
        "What WAEC or NECO subjects do I need for Theatre and Cultural Studies?",
        "Does the right JAMB combination mean I am fully qualified for Theatre and Cultural Studies?",
        "Can I use Christian Religious Studies for Theatre and Cultural Studies at NSUK?",
        "Can I use Islamic Studies for Theatre and Cultural Studies at NSUK?",
        "Can I use Arabic for Theatre and Cultural Studies at NSUK?",
        "Can I use Government for Theatre and Cultural Studies at NSUK?",
        "Can I use Christian Religious Studies for Theatre and Cultural Studies at NSUK?",
        "Can I use Literature-in-English for Theatre and Cultural Studies at NSUK?"
      ],
      "sourcePages": [
        6
      ],
      "reviewLevel": "normal",
      "sourceNotes": [
        "Source page(s): 6."
      ]
    },
    {
      "school": "Nasarawa State University, Keffi",
      "schoolShortName": "NSUK",
      "academicSession": "2025/2026",
      "sourceLabel": "NSUK Post UTME Subject Combination 2025/2026",
      "programme": "Hausa",
      "slug": "nsuk-hausa-requirements",
      "categorySlug": "programme-requirements",
      "type": "programme",
      "status": "published",
      "title": "NSUK Hausa Admission Subject Combination",
      "question": "What are the JAMB and O'Level subject requirements for Hausa at NSUK?",
      "jamb": {
        "totalRequiredSubjects": 4,
        "compulsorySubjects": [
          "Use of English",
          "Literature-in-English",
          "Hausa"
        ],
        "optionalChooseCount": 1,
        "optionalSubjects": [
          "Economics",
          "Government/History",
          "Arabic",
          "French",
          "Yoruba",
          "Hausa",
          "Civic Education",
          "Geography"
        ],
        "requiredSubjectGroups": [],
        "ruleSummary": "Candidate must register four JAMB subjects. Use of English is compulsory. The remaining subjects must follow the compulsory and optional subject rules for this programme."
      },
      "olevel": {
        "minimumCredits": 5,
        "globalCompulsorySubjects": [
          "English Language",
          "Mathematics"
        ],
        "programmeSpecificCompulsorySubjects": [],
        "compulsorySubjects": [
          "English Language",
          "Mathematics"
        ],
        "optionalSubjects": [
          "Christian Religious Studies",
          "Literature-in-English",
          "Islamic Studies",
          "Arabic",
          "French",
          "Yoruba",
          "Hausa",
          "Government/History",
          "Civic Education",
          "Economics",
          "Geography"
        ],
        "acceptedExamTypes": [
          "WAEC",
          "NECO",
          "NABTEB",
          "Other accepted senior secondary examinations"
        ],
        "ruleSummary": "Candidate must have at least five O'Level credit passes, including English Language and Mathematics, plus the programme-specific required/accepted subjects."
      },
      "warnings": [
        "Use of English in JAMB is different from English Language in O'Level; both must be treated separately.",
        "Correct JAMB subjects do not automatically satisfy O'Level requirements.",
        "Optional subjects should be selected only from the approved list for this programme.",
        "O'Level requires at least five credit passes, including English Language and Mathematics."
      ],
      "needsReview": false,
      "keywords": [
        "NSUK",
        "Nasarawa State University, Keffi",
        "Hausa",
        "JAMB",
        "UTME",
        "Post UTME",
        "O'Level",
        "WAEC",
        "NECO",
        "NABTEB",
        "subject combination",
        "admission requirement",
        "Use of English",
        "Literature-in-English",
        "Economics",
        "Government/History",
        "Arabic",
        "French",
        "Yoruba",
        "Civic Education",
        "Geography",
        "English Language",
        "Mathematics",
        "Christian Religious Studies",
        "Islamic Studies"
      ],
      "answer": "For Hausa at NSUK, the JAMB combination must include Use of English, Literature-in-English, Hausa; the candidate should choose 1 subject(s) from Economics, Government/History, Arabic, French, Yoruba, Hausa, Civic Education, Geography to make four JAMB subjects. For O'Level, the candidate needs at least five credit passes including English Language, Mathematics. Accepted additional O'Level subjects include Christian Religious Studies, Literature-in-English, Islamic Studies, Arabic, French, Yoruba, Hausa, Government/History, Civic Education, Economics, Geography.",
      "content": "Programme: Hausa\nSchool: Nasarawa State University, Keffi (NSUK)\nAcademic session: 2025/2026\nRequirement type: JAMB subject combination and O'Level combination.\nJAMB requirement: The candidate must register four JAMB subjects. Compulsory JAMB subject(s): Use of English, Literature-in-English, Hausa. Optional JAMB subject(s): Economics, Government/History, Arabic, French, Yoruba, Hausa, Civic Education, Geography. Optional subjects needed: 1.\nO'Level requirement: The candidate must have at least five credit passes from WAEC, NECO, NABTEB, or another accepted senior secondary examination. English Language and Mathematics are compulsory for O'Level. Programme-specific compulsory O'Level subject(s): none listed beyond English Language and Mathematics. Accepted optional O'Level subject(s): Christian Religious Studies, Literature-in-English, Islamic Studies, Arabic, French, Yoruba, Hausa, Government/History, Civic Education, Economics, Geography.\nStudent guidance: The student should not assume that any subject is accepted. They should match both the JAMB requirement and the O'Level requirement for Hausa.",
      "questionVariants": [
        "What are the JAMB subjects for Hausa at NSUK?",
        "What O'Level subjects do I need for Hausa at NSUK?",
        "What is the subject combination for Hausa in NSUK?",
        "Can I study Hausa with my JAMB subjects?",
        "Can I study Hausa without one of the listed compulsory subjects?",
        "What optional subjects are accepted for Hausa?",
        "Is Mathematics compulsory for Hausa at NSUK?",
        "Is English Language compulsory for Hausa at NSUK?",
        "What WAEC or NECO subjects do I need for Hausa?",
        "Does the right JAMB combination mean I am fully qualified for Hausa?",
        "Can I use Economics for Hausa at NSUK?",
        "Can I use Government/History for Hausa at NSUK?",
        "Can I use Arabic for Hausa at NSUK?",
        "Can I use Christian Religious Studies for Hausa at NSUK?",
        "Can I use Literature-in-English for Hausa at NSUK?",
        "Can I use Islamic Studies for Hausa at NSUK?"
      ],
      "sourcePages": [
        6,
        7
      ],
      "reviewLevel": "normal",
      "sourceNotes": [
        "Source page(s): 6, 7."
      ]
    },
    {
      "school": "Nasarawa State University, Keffi",
      "schoolShortName": "NSUK",
      "academicSession": "2025/2026",
      "sourceLabel": "NSUK Post UTME Subject Combination 2025/2026",
      "programme": "Philosophy",
      "slug": "nsuk-philosophy-requirements",
      "categorySlug": "programme-requirements",
      "type": "programme",
      "status": "published",
      "title": "NSUK Philosophy Admission Subject Combination",
      "question": "What are the JAMB and O'Level subject requirements for Philosophy at NSUK?",
      "jamb": {
        "totalRequiredSubjects": 4,
        "compulsorySubjects": [
          "Use of English"
        ],
        "optionalChooseCount": 3,
        "optionalSubjects": [
          "Government/History",
          "Civic Education",
          "Economics",
          "Geography",
          "Christian Religious Studies",
          "Literature-in-English",
          "Islamic Studies",
          "Arabic",
          "French",
          "Yoruba",
          "Hausa"
        ],
        "requiredSubjectGroups": [],
        "ruleSummary": "Candidate must register four JAMB subjects. Use of English is compulsory. The remaining subjects must follow the compulsory and optional subject rules for this programme."
      },
      "olevel": {
        "minimumCredits": 5,
        "globalCompulsorySubjects": [
          "English Language",
          "Mathematics"
        ],
        "programmeSpecificCompulsorySubjects": [],
        "compulsorySubjects": [
          "English Language",
          "Mathematics"
        ],
        "optionalSubjects": [
          "Government/History",
          "Civic Education",
          "Economics",
          "Geography",
          "Christian Religious Studies",
          "Literature-in-English",
          "Islamic Studies",
          "Arabic",
          "French",
          "Yoruba",
          "Hausa"
        ],
        "acceptedExamTypes": [
          "WAEC",
          "NECO",
          "NABTEB",
          "Other accepted senior secondary examinations"
        ],
        "ruleSummary": "Candidate must have at least five O'Level credit passes, including English Language and Mathematics, plus the programme-specific required/accepted subjects."
      },
      "warnings": [
        "Use of English in JAMB is different from English Language in O'Level; both must be treated separately.",
        "Correct JAMB subjects do not automatically satisfy O'Level requirements.",
        "Optional subjects should be selected only from the approved list for this programme.",
        "O'Level requires at least five credit passes, including English Language and Mathematics.",
        "Where the source says 'Any three subjects', this seed restricts those choices to the approved subject context listed for the programme, not literally every subject."
      ],
      "needsReview": false,
      "keywords": [
        "NSUK",
        "Nasarawa State University, Keffi",
        "Philosophy",
        "JAMB",
        "UTME",
        "Post UTME",
        "O'Level",
        "WAEC",
        "NECO",
        "NABTEB",
        "subject combination",
        "admission requirement",
        "Use of English",
        "Government/History",
        "Civic Education",
        "Economics",
        "Geography",
        "Christian Religious Studies",
        "Literature-in-English",
        "Islamic Studies",
        "Arabic",
        "French",
        "Yoruba",
        "Hausa",
        "English Language",
        "Mathematics"
      ],
      "answer": "For Philosophy at NSUK, the JAMB combination must include Use of English; the candidate should choose 3 subject(s) from Government/History, Civic Education, Economics, Geography, Christian Religious Studies, Literature-in-English, Islamic Studies, Arabic, French, Yoruba, Hausa to make four JAMB subjects. For O'Level, the candidate needs at least five credit passes including English Language, Mathematics. Accepted additional O'Level subjects include Government/History, Civic Education, Economics, Geography, Christian Religious Studies, Literature-in-English, Islamic Studies, Arabic, French, Yoruba, Hausa.",
      "content": "Programme: Philosophy\nSchool: Nasarawa State University, Keffi (NSUK)\nAcademic session: 2025/2026\nRequirement type: JAMB subject combination and O'Level combination.\nJAMB requirement: The candidate must register four JAMB subjects. Compulsory JAMB subject(s): Use of English. Optional JAMB subject(s): Government/History, Civic Education, Economics, Geography, Christian Religious Studies, Literature-in-English, Islamic Studies, Arabic, French, Yoruba, Hausa. Optional subjects needed: 3.\nO'Level requirement: The candidate must have at least five credit passes from WAEC, NECO, NABTEB, or another accepted senior secondary examination. English Language and Mathematics are compulsory for O'Level. Programme-specific compulsory O'Level subject(s): none listed beyond English Language and Mathematics. Accepted optional O'Level subject(s): Government/History, Civic Education, Economics, Geography, Christian Religious Studies, Literature-in-English, Islamic Studies, Arabic, French, Yoruba, Hausa.\nStudent guidance: The student should not assume that any subject is accepted. They should match both the JAMB requirement and the O'Level requirement for Philosophy.",
      "questionVariants": [
        "What are the JAMB subjects for Philosophy at NSUK?",
        "What O'Level subjects do I need for Philosophy at NSUK?",
        "What is the subject combination for Philosophy in NSUK?",
        "Can I study Philosophy with my JAMB subjects?",
        "Can I study Philosophy without one of the listed compulsory subjects?",
        "What optional subjects are accepted for Philosophy?",
        "Is Mathematics compulsory for Philosophy at NSUK?",
        "Is English Language compulsory for Philosophy at NSUK?",
        "What WAEC or NECO subjects do I need for Philosophy?",
        "Does the right JAMB combination mean I am fully qualified for Philosophy?",
        "Can I use Government/History for Philosophy at NSUK?",
        "Can I use Civic Education for Philosophy at NSUK?",
        "Can I use Economics for Philosophy at NSUK?",
        "Can I use Government/History for Philosophy at NSUK?",
        "Can I use Civic Education for Philosophy at NSUK?",
        "Can I use Economics for Philosophy at NSUK?"
      ],
      "sourcePages": [
        7
      ],
      "reviewLevel": "normal",
      "sourceNotes": [
        "Source page(s): 7."
      ]
    },
    {
      "school": "Nasarawa State University, Keffi",
      "schoolShortName": "NSUK",
      "academicSession": "2025/2026",
      "sourceLabel": "NSUK Post UTME Subject Combination 2025/2026",
      "programme": "Chemistry Education",
      "slug": "nsuk-chemistry-education-requirements",
      "categorySlug": "programme-requirements",
      "type": "programme",
      "status": "published",
      "title": "NSUK Chemistry Education Admission Subject Combination",
      "question": "What are the JAMB and O'Level subject requirements for Chemistry Education at NSUK?",
      "jamb": {
        "totalRequiredSubjects": 4,
        "compulsorySubjects": [
          "Use of English",
          "Chemistry"
        ],
        "optionalChooseCount": 2,
        "optionalSubjects": [
          "Physics",
          "Biology",
          "Mathematics"
        ],
        "requiredSubjectGroups": [],
        "ruleSummary": "Candidate must register four JAMB subjects. Use of English is compulsory. The remaining subjects must follow the compulsory and optional subject rules for this programme."
      },
      "olevel": {
        "minimumCredits": 5,
        "globalCompulsorySubjects": [
          "English Language",
          "Mathematics"
        ],
        "programmeSpecificCompulsorySubjects": [
          "Chemistry"
        ],
        "compulsorySubjects": [
          "English Language",
          "Mathematics",
          "Chemistry"
        ],
        "optionalSubjects": [
          "Physics",
          "Biology",
          "Agricultural Science"
        ],
        "acceptedExamTypes": [
          "WAEC",
          "NECO",
          "NABTEB",
          "Other accepted senior secondary examinations"
        ],
        "ruleSummary": "Candidate must have at least five O'Level credit passes, including English Language and Mathematics, plus the programme-specific required/accepted subjects."
      },
      "warnings": [
        "Use of English in JAMB is different from English Language in O'Level; both must be treated separately.",
        "Correct JAMB subjects do not automatically satisfy O'Level requirements.",
        "Optional subjects should be selected only from the approved list for this programme.",
        "O'Level requires at least five credit passes, including English Language and Mathematics."
      ],
      "needsReview": false,
      "keywords": [
        "NSUK",
        "Nasarawa State University, Keffi",
        "Chemistry Education",
        "JAMB",
        "UTME",
        "Post UTME",
        "O'Level",
        "WAEC",
        "NECO",
        "NABTEB",
        "subject combination",
        "admission requirement",
        "Use of English",
        "Chemistry",
        "Physics",
        "Biology",
        "Mathematics",
        "English Language",
        "Agricultural Science"
      ],
      "answer": "For Chemistry Education at NSUK, the JAMB combination must include Use of English, Chemistry; the candidate should choose 2 subject(s) from Physics, Biology, Mathematics to make four JAMB subjects. For O'Level, the candidate needs at least five credit passes including English Language, Mathematics, Chemistry. Accepted additional O'Level subjects include Physics, Biology, Agricultural Science.",
      "content": "Programme: Chemistry Education\nSchool: Nasarawa State University, Keffi (NSUK)\nAcademic session: 2025/2026\nRequirement type: JAMB subject combination and O'Level combination.\nJAMB requirement: The candidate must register four JAMB subjects. Compulsory JAMB subject(s): Use of English, Chemistry. Optional JAMB subject(s): Physics, Biology, Mathematics. Optional subjects needed: 2.\nO'Level requirement: The candidate must have at least five credit passes from WAEC, NECO, NABTEB, or another accepted senior secondary examination. English Language and Mathematics are compulsory for O'Level. Programme-specific compulsory O'Level subject(s): Chemistry. Accepted optional O'Level subject(s): Physics, Biology, Agricultural Science.\nStudent guidance: The student should not assume that any subject is accepted. They should match both the JAMB requirement and the O'Level requirement for Chemistry Education.",
      "questionVariants": [
        "What are the JAMB subjects for Chemistry Education at NSUK?",
        "What O'Level subjects do I need for Chemistry Education at NSUK?",
        "What is the subject combination for Chemistry Education in NSUK?",
        "Can I study Chemistry Education with my JAMB subjects?",
        "Can I study Chemistry Education without one of the listed compulsory subjects?",
        "What optional subjects are accepted for Chemistry Education?",
        "Is Mathematics compulsory for Chemistry Education at NSUK?",
        "Is English Language compulsory for Chemistry Education at NSUK?",
        "What WAEC or NECO subjects do I need for Chemistry Education?",
        "Does the right JAMB combination mean I am fully qualified for Chemistry Education?",
        "Can I use Physics for Chemistry Education at NSUK?",
        "Can I use Biology for Chemistry Education at NSUK?",
        "Can I use Mathematics for Chemistry Education at NSUK?",
        "Can I use Physics for Chemistry Education at NSUK?",
        "Can I use Biology for Chemistry Education at NSUK?",
        "Can I use Agricultural Science for Chemistry Education at NSUK?"
      ],
      "sourcePages": [
        7
      ],
      "reviewLevel": "normal",
      "sourceNotes": [
        "Source page(s): 7."
      ]
    },
    {
      "school": "Nasarawa State University, Keffi",
      "schoolShortName": "NSUK",
      "academicSession": "2025/2026",
      "sourceLabel": "NSUK Post UTME Subject Combination 2025/2026",
      "programme": "Mathematics Education",
      "slug": "nsuk-mathematics-education-requirements",
      "categorySlug": "programme-requirements",
      "type": "programme",
      "status": "published",
      "title": "NSUK Mathematics Education Admission Subject Combination",
      "question": "What are the JAMB and O'Level subject requirements for Mathematics Education at NSUK?",
      "jamb": {
        "totalRequiredSubjects": 4,
        "compulsorySubjects": [
          "Use of English",
          "Mathematics"
        ],
        "optionalChooseCount": 2,
        "optionalSubjects": [
          "Physics",
          "Chemistry",
          "Biology"
        ],
        "requiredSubjectGroups": [],
        "ruleSummary": "Candidate must register four JAMB subjects. Use of English is compulsory. The remaining subjects must follow the compulsory and optional subject rules for this programme."
      },
      "olevel": {
        "minimumCredits": 5,
        "globalCompulsorySubjects": [
          "English Language",
          "Mathematics"
        ],
        "programmeSpecificCompulsorySubjects": [],
        "compulsorySubjects": [
          "English Language",
          "Mathematics"
        ],
        "optionalSubjects": [
          "Chemistry",
          "Biology",
          "Physics",
          "Agricultural Science",
          "Food and Nutrition"
        ],
        "acceptedExamTypes": [
          "WAEC",
          "NECO",
          "NABTEB",
          "Other accepted senior secondary examinations"
        ],
        "ruleSummary": "Candidate must have at least five O'Level credit passes, including English Language and Mathematics, plus the programme-specific required/accepted subjects."
      },
      "warnings": [
        "Use of English in JAMB is different from English Language in O'Level; both must be treated separately.",
        "Correct JAMB subjects do not automatically satisfy O'Level requirements.",
        "Optional subjects should be selected only from the approved list for this programme.",
        "O'Level requires at least five credit passes, including English Language and Mathematics."
      ],
      "needsReview": false,
      "keywords": [
        "NSUK",
        "Nasarawa State University, Keffi",
        "Mathematics Education",
        "JAMB",
        "UTME",
        "Post UTME",
        "O'Level",
        "WAEC",
        "NECO",
        "NABTEB",
        "subject combination",
        "admission requirement",
        "Use of English",
        "Mathematics",
        "Physics",
        "Chemistry",
        "Biology",
        "English Language",
        "Agricultural Science",
        "Food and Nutrition"
      ],
      "answer": "For Mathematics Education at NSUK, the JAMB combination must include Use of English, Mathematics; the candidate should choose 2 subject(s) from Physics, Chemistry, Biology to make four JAMB subjects. For O'Level, the candidate needs at least five credit passes including English Language, Mathematics. Accepted additional O'Level subjects include Chemistry, Biology, Physics, Agricultural Science, Food and Nutrition.",
      "content": "Programme: Mathematics Education\nSchool: Nasarawa State University, Keffi (NSUK)\nAcademic session: 2025/2026\nRequirement type: JAMB subject combination and O'Level combination.\nJAMB requirement: The candidate must register four JAMB subjects. Compulsory JAMB subject(s): Use of English, Mathematics. Optional JAMB subject(s): Physics, Chemistry, Biology. Optional subjects needed: 2.\nO'Level requirement: The candidate must have at least five credit passes from WAEC, NECO, NABTEB, or another accepted senior secondary examination. English Language and Mathematics are compulsory for O'Level. Programme-specific compulsory O'Level subject(s): none listed beyond English Language and Mathematics. Accepted optional O'Level subject(s): Chemistry, Biology, Physics, Agricultural Science, Food and Nutrition.\nStudent guidance: The student should not assume that any subject is accepted. They should match both the JAMB requirement and the O'Level requirement for Mathematics Education.",
      "questionVariants": [
        "What are the JAMB subjects for Mathematics Education at NSUK?",
        "What O'Level subjects do I need for Mathematics Education at NSUK?",
        "What is the subject combination for Mathematics Education in NSUK?",
        "Can I study Mathematics Education with my JAMB subjects?",
        "Can I study Mathematics Education without one of the listed compulsory subjects?",
        "What optional subjects are accepted for Mathematics Education?",
        "Is Mathematics compulsory for Mathematics Education at NSUK?",
        "Is English Language compulsory for Mathematics Education at NSUK?",
        "What WAEC or NECO subjects do I need for Mathematics Education?",
        "Does the right JAMB combination mean I am fully qualified for Mathematics Education?",
        "Can I use Physics for Mathematics Education at NSUK?",
        "Can I use Chemistry for Mathematics Education at NSUK?",
        "Can I use Biology for Mathematics Education at NSUK?",
        "Can I use Chemistry for Mathematics Education at NSUK?",
        "Can I use Biology for Mathematics Education at NSUK?",
        "Can I use Physics for Mathematics Education at NSUK?"
      ],
      "sourcePages": [
        7
      ],
      "reviewLevel": "normal",
      "sourceNotes": [
        "Source page(s): 7."
      ]
    },
    {
      "school": "Nasarawa State University, Keffi",
      "schoolShortName": "NSUK",
      "academicSession": "2025/2026",
      "sourceLabel": "NSUK Post UTME Subject Combination 2025/2026",
      "programme": "Integrated Science Education",
      "slug": "nsuk-integrated-science-education-requirements",
      "categorySlug": "programme-requirements",
      "type": "programme",
      "status": "published",
      "title": "NSUK Integrated Science Education Admission Subject Combination",
      "question": "What are the JAMB and O'Level subject requirements for Integrated Science Education at NSUK?",
      "jamb": {
        "totalRequiredSubjects": 4,
        "compulsorySubjects": [
          "Use of English"
        ],
        "optionalChooseCount": 3,
        "optionalSubjects": [
          "Mathematics",
          "Chemistry",
          "Physics",
          "Biology",
          "Agricultural Science",
          "Food and Nutrition"
        ],
        "requiredSubjectGroups": [],
        "ruleSummary": "Candidate must register four JAMB subjects. Use of English is compulsory. The remaining subjects must follow the compulsory and optional subject rules for this programme."
      },
      "olevel": {
        "minimumCredits": 5,
        "globalCompulsorySubjects": [
          "English Language",
          "Mathematics"
        ],
        "programmeSpecificCompulsorySubjects": [
          "Chemistry",
          "Biology"
        ],
        "compulsorySubjects": [
          "English Language",
          "Mathematics",
          "Chemistry",
          "Biology"
        ],
        "optionalSubjects": [
          "Physics",
          "Agricultural Science",
          "Civic Education",
          "Economics",
          "Geography"
        ],
        "acceptedExamTypes": [
          "WAEC",
          "NECO",
          "NABTEB",
          "Other accepted senior secondary examinations"
        ],
        "ruleSummary": "Candidate must have at least five O'Level credit passes, including English Language and Mathematics, plus the programme-specific required/accepted subjects."
      },
      "warnings": [
        "Use of English in JAMB is different from English Language in O'Level; both must be treated separately.",
        "Correct JAMB subjects do not automatically satisfy O'Level requirements.",
        "Optional subjects should be selected only from the approved list for this programme.",
        "O'Level requires at least five credit passes, including English Language and Mathematics.",
        "Where the source says 'Any three subjects', this seed restricts those choices to the approved subject context listed for the programme, not literally every subject."
      ],
      "needsReview": false,
      "keywords": [
        "NSUK",
        "Nasarawa State University, Keffi",
        "Integrated Science Education",
        "JAMB",
        "UTME",
        "Post UTME",
        "O'Level",
        "WAEC",
        "NECO",
        "NABTEB",
        "subject combination",
        "admission requirement",
        "Use of English",
        "Mathematics",
        "Chemistry",
        "Physics",
        "Biology",
        "Agricultural Science",
        "Food and Nutrition",
        "English Language",
        "Civic Education",
        "Economics",
        "Geography"
      ],
      "answer": "For Integrated Science Education at NSUK, the JAMB combination must include Use of English; the candidate should choose 3 subject(s) from Mathematics, Chemistry, Physics, Biology, Agricultural Science, Food and Nutrition to make four JAMB subjects. For O'Level, the candidate needs at least five credit passes including English Language, Mathematics, Chemistry, Biology. Accepted additional O'Level subjects include Physics, Agricultural Science, Civic Education, Economics, Geography.",
      "content": "Programme: Integrated Science Education\nSchool: Nasarawa State University, Keffi (NSUK)\nAcademic session: 2025/2026\nRequirement type: JAMB subject combination and O'Level combination.\nJAMB requirement: The candidate must register four JAMB subjects. Compulsory JAMB subject(s): Use of English. Optional JAMB subject(s): Mathematics, Chemistry, Physics, Biology, Agricultural Science, Food and Nutrition. Optional subjects needed: 3.\nO'Level requirement: The candidate must have at least five credit passes from WAEC, NECO, NABTEB, or another accepted senior secondary examination. English Language and Mathematics are compulsory for O'Level. Programme-specific compulsory O'Level subject(s): Chemistry, Biology. Accepted optional O'Level subject(s): Physics, Agricultural Science, Civic Education, Economics, Geography.\nStudent guidance: The student should not assume that any subject is accepted. They should match both the JAMB requirement and the O'Level requirement for Integrated Science Education.",
      "questionVariants": [
        "What are the JAMB subjects for Integrated Science Education at NSUK?",
        "What O'Level subjects do I need for Integrated Science Education at NSUK?",
        "What is the subject combination for Integrated Science Education in NSUK?",
        "Can I study Integrated Science Education with my JAMB subjects?",
        "Can I study Integrated Science Education without one of the listed compulsory subjects?",
        "What optional subjects are accepted for Integrated Science Education?",
        "Is Mathematics compulsory for Integrated Science Education at NSUK?",
        "Is English Language compulsory for Integrated Science Education at NSUK?",
        "What WAEC or NECO subjects do I need for Integrated Science Education?",
        "Does the right JAMB combination mean I am fully qualified for Integrated Science Education?",
        "Can I use Mathematics for Integrated Science Education at NSUK?",
        "Can I use Chemistry for Integrated Science Education at NSUK?",
        "Can I use Physics for Integrated Science Education at NSUK?",
        "Can I use Physics for Integrated Science Education at NSUK?",
        "Can I use Agricultural Science for Integrated Science Education at NSUK?",
        "Can I use Civic Education for Integrated Science Education at NSUK?"
      ],
      "sourcePages": [
        7,
        8
      ],
      "reviewLevel": "normal",
      "sourceNotes": [
        "Source page(s): 7, 8."
      ]
    },
    {
      "school": "Nasarawa State University, Keffi",
      "schoolShortName": "NSUK",
      "academicSession": "2025/2026",
      "sourceLabel": "NSUK Post UTME Subject Combination 2025/2026",
      "programme": "Biology Education",
      "slug": "nsuk-biology-education-requirements",
      "categorySlug": "programme-requirements",
      "type": "programme",
      "status": "published",
      "title": "NSUK Biology Education Admission Subject Combination",
      "question": "What are the JAMB and O'Level subject requirements for Biology Education at NSUK?",
      "jamb": {
        "totalRequiredSubjects": 4,
        "compulsorySubjects": [
          "Use of English",
          "Biology"
        ],
        "optionalChooseCount": 2,
        "optionalSubjects": [
          "Chemistry",
          "Mathematics",
          "Physics"
        ],
        "requiredSubjectGroups": [],
        "ruleSummary": "Candidate must register four JAMB subjects. Use of English is compulsory. The remaining subjects must follow the compulsory and optional subject rules for this programme."
      },
      "olevel": {
        "minimumCredits": 5,
        "globalCompulsorySubjects": [
          "English Language",
          "Mathematics"
        ],
        "programmeSpecificCompulsorySubjects": [
          "Chemistry",
          "Biology"
        ],
        "compulsorySubjects": [
          "English Language",
          "Mathematics",
          "Chemistry",
          "Biology"
        ],
        "optionalSubjects": [
          "Physics",
          "Agricultural Science",
          "Food and Nutrition",
          "Civic Education",
          "Economics",
          "Geography"
        ],
        "acceptedExamTypes": [
          "WAEC",
          "NECO",
          "NABTEB",
          "Other accepted senior secondary examinations"
        ],
        "ruleSummary": "Candidate must have at least five O'Level credit passes, including English Language and Mathematics, plus the programme-specific required/accepted subjects."
      },
      "warnings": [
        "Use of English in JAMB is different from English Language in O'Level; both must be treated separately.",
        "Correct JAMB subjects do not automatically satisfy O'Level requirements.",
        "Optional subjects should be selected only from the approved list for this programme.",
        "O'Level requires at least five credit passes, including English Language and Mathematics."
      ],
      "needsReview": false,
      "keywords": [
        "NSUK",
        "Nasarawa State University, Keffi",
        "Biology Education",
        "JAMB",
        "UTME",
        "Post UTME",
        "O'Level",
        "WAEC",
        "NECO",
        "NABTEB",
        "subject combination",
        "admission requirement",
        "Use of English",
        "Biology",
        "Chemistry",
        "Mathematics",
        "Physics",
        "English Language",
        "Agricultural Science",
        "Food and Nutrition",
        "Civic Education",
        "Economics",
        "Geography"
      ],
      "answer": "For Biology Education at NSUK, the JAMB combination must include Use of English, Biology; the candidate should choose 2 subject(s) from Chemistry, Mathematics, Physics to make four JAMB subjects. For O'Level, the candidate needs at least five credit passes including English Language, Mathematics, Chemistry, Biology. Accepted additional O'Level subjects include Physics, Agricultural Science, Food and Nutrition, Civic Education, Economics, Geography.",
      "content": "Programme: Biology Education\nSchool: Nasarawa State University, Keffi (NSUK)\nAcademic session: 2025/2026\nRequirement type: JAMB subject combination and O'Level combination.\nJAMB requirement: The candidate must register four JAMB subjects. Compulsory JAMB subject(s): Use of English, Biology. Optional JAMB subject(s): Chemistry, Mathematics, Physics. Optional subjects needed: 2.\nO'Level requirement: The candidate must have at least five credit passes from WAEC, NECO, NABTEB, or another accepted senior secondary examination. English Language and Mathematics are compulsory for O'Level. Programme-specific compulsory O'Level subject(s): Chemistry, Biology. Accepted optional O'Level subject(s): Physics, Agricultural Science, Food and Nutrition, Civic Education, Economics, Geography.\nStudent guidance: The student should not assume that any subject is accepted. They should match both the JAMB requirement and the O'Level requirement for Biology Education.",
      "questionVariants": [
        "What are the JAMB subjects for Biology Education at NSUK?",
        "What O'Level subjects do I need for Biology Education at NSUK?",
        "What is the subject combination for Biology Education in NSUK?",
        "Can I study Biology Education with my JAMB subjects?",
        "Can I study Biology Education without one of the listed compulsory subjects?",
        "What optional subjects are accepted for Biology Education?",
        "Is Mathematics compulsory for Biology Education at NSUK?",
        "Is English Language compulsory for Biology Education at NSUK?",
        "What WAEC or NECO subjects do I need for Biology Education?",
        "Does the right JAMB combination mean I am fully qualified for Biology Education?",
        "Can I use Chemistry for Biology Education at NSUK?",
        "Can I use Mathematics for Biology Education at NSUK?",
        "Can I use Physics for Biology Education at NSUK?",
        "Can I use Physics for Biology Education at NSUK?",
        "Can I use Agricultural Science for Biology Education at NSUK?",
        "Can I use Food and Nutrition for Biology Education at NSUK?"
      ],
      "sourcePages": [
        8
      ],
      "reviewLevel": "normal",
      "sourceNotes": [
        "Source page(s): 8."
      ]
    },
    {
      "school": "Nasarawa State University, Keffi",
      "schoolShortName": "NSUK",
      "academicSession": "2025/2026",
      "sourceLabel": "NSUK Post UTME Subject Combination 2025/2026",
      "programme": "Islamic Studies Education",
      "slug": "nsuk-islamic-studies-education-requirements",
      "categorySlug": "programme-requirements",
      "type": "programme",
      "status": "published",
      "title": "NSUK Islamic Studies Education Admission Subject Combination",
      "question": "What are the JAMB and O'Level subject requirements for Islamic Studies Education at NSUK?",
      "jamb": {
        "totalRequiredSubjects": 4,
        "compulsorySubjects": [
          "Use of English",
          "Islamic Studies/Arabic"
        ],
        "optionalChooseCount": 2,
        "optionalSubjects": [
          "Government/History",
          "Civic Education",
          "Economics",
          "Geography",
          "Christian Religious Studies",
          "Literature-in-English",
          "French",
          "Yoruba",
          "Hausa"
        ],
        "requiredSubjectGroups": [
          {
            "slot": "Islamic Studies/Arabic",
            "choose": 1,
            "options": [
              "Islamic Studies",
              "Arabic"
            ]
          }
        ],
        "ruleSummary": "Candidate must register four JAMB subjects. Use of English is compulsory. The remaining subjects must follow the compulsory and optional subject rules for this programme."
      },
      "olevel": {
        "minimumCredits": 5,
        "globalCompulsorySubjects": [
          "English Language",
          "Mathematics"
        ],
        "programmeSpecificCompulsorySubjects": [
          "Islamic Studies"
        ],
        "compulsorySubjects": [
          "English Language",
          "Mathematics",
          "Islamic Studies"
        ],
        "optionalSubjects": [
          "Literature-in-English",
          "French",
          "Yoruba",
          "Hausa",
          "Government/History",
          "Civic Education"
        ],
        "acceptedExamTypes": [
          "WAEC",
          "NECO",
          "NABTEB",
          "Other accepted senior secondary examinations"
        ],
        "ruleSummary": "Candidate must have at least five O'Level credit passes, including English Language and Mathematics, plus the programme-specific required/accepted subjects."
      },
      "warnings": [
        "Use of English in JAMB is different from English Language in O'Level; both must be treated separately.",
        "Correct JAMB subjects do not automatically satisfy O'Level requirements.",
        "Optional subjects should be selected only from the approved list for this programme.",
        "O'Level requires at least five credit passes, including English Language and Mathematics.",
        "A slash in a subject slot, such as Biology/Agricultural Science, means the source presents alternatives for that slot; validate carefully during eligibility checks."
      ],
      "needsReview": false,
      "keywords": [
        "NSUK",
        "Nasarawa State University, Keffi",
        "Islamic Studies Education",
        "JAMB",
        "UTME",
        "Post UTME",
        "O'Level",
        "WAEC",
        "NECO",
        "NABTEB",
        "subject combination",
        "admission requirement",
        "Use of English",
        "Islamic Studies/Arabic",
        "Government/History",
        "Civic Education",
        "Economics",
        "Geography",
        "Christian Religious Studies",
        "Literature-in-English",
        "French",
        "Yoruba",
        "Hausa",
        "English Language",
        "Mathematics",
        "Islamic Studies"
      ],
      "answer": "For Islamic Studies Education at NSUK, the JAMB combination must include Use of English, Islamic Studies/Arabic; the candidate should choose 2 subject(s) from Government/History, Civic Education, Economics, Geography, Christian Religious Studies, Literature-in-English, French, Yoruba, Hausa to make four JAMB subjects. For O'Level, the candidate needs at least five credit passes including English Language, Mathematics, Islamic Studies. Accepted additional O'Level subjects include Literature-in-English, French, Yoruba, Hausa, Government/History, Civic Education.",
      "content": "Programme: Islamic Studies Education\nSchool: Nasarawa State University, Keffi (NSUK)\nAcademic session: 2025/2026\nRequirement type: JAMB subject combination and O'Level combination.\nJAMB requirement: The candidate must register four JAMB subjects. Compulsory JAMB subject(s): Use of English, Islamic Studies/Arabic. Optional JAMB subject(s): Government/History, Civic Education, Economics, Geography, Christian Religious Studies, Literature-in-English, French, Yoruba, Hausa. Optional subjects needed: 2.\nO'Level requirement: The candidate must have at least five credit passes from WAEC, NECO, NABTEB, or another accepted senior secondary examination. English Language and Mathematics are compulsory for O'Level. Programme-specific compulsory O'Level subject(s): Islamic Studies. Accepted optional O'Level subject(s): Literature-in-English, French, Yoruba, Hausa, Government/History, Civic Education.\nStudent guidance: The student should not assume that any subject is accepted. They should match both the JAMB requirement and the O'Level requirement for Islamic Studies Education.",
      "questionVariants": [
        "What are the JAMB subjects for Islamic Studies Education at NSUK?",
        "What O'Level subjects do I need for Islamic Studies Education at NSUK?",
        "What is the subject combination for Islamic Studies Education in NSUK?",
        "Can I study Islamic Studies Education with my JAMB subjects?",
        "Can I study Islamic Studies Education without one of the listed compulsory subjects?",
        "What optional subjects are accepted for Islamic Studies Education?",
        "Is Mathematics compulsory for Islamic Studies Education at NSUK?",
        "Is English Language compulsory for Islamic Studies Education at NSUK?",
        "What WAEC or NECO subjects do I need for Islamic Studies Education?",
        "Does the right JAMB combination mean I am fully qualified for Islamic Studies Education?",
        "Can I use Government/History for Islamic Studies Education at NSUK?",
        "Can I use Civic Education for Islamic Studies Education at NSUK?",
        "Can I use Economics for Islamic Studies Education at NSUK?",
        "Can I use Literature-in-English for Islamic Studies Education at NSUK?",
        "Can I use French for Islamic Studies Education at NSUK?",
        "Can I use Yoruba for Islamic Studies Education at NSUK?"
      ],
      "sourcePages": [
        8
      ],
      "reviewLevel": "normal",
      "sourceNotes": [
        "Source page(s): 8."
      ]
    },
    {
      "school": "Nasarawa State University, Keffi",
      "schoolShortName": "NSUK",
      "academicSession": "2025/2026",
      "sourceLabel": "NSUK Post UTME Subject Combination 2025/2026",
      "programme": "French Education",
      "slug": "nsuk-french-education-requirements",
      "categorySlug": "programme-requirements",
      "type": "programme",
      "status": "published",
      "title": "NSUK French Education Admission Subject Combination",
      "question": "What are the JAMB and O'Level subject requirements for French Education at NSUK?",
      "jamb": {
        "totalRequiredSubjects": 4,
        "compulsorySubjects": [
          "Use of English",
          "French"
        ],
        "optionalChooseCount": 2,
        "optionalSubjects": [
          "Christian Religious Studies",
          "Literature-in-English",
          "Islamic Studies",
          "Arabic",
          "French",
          "Yoruba",
          "Hausa",
          "Government/History",
          "Civic Education"
        ],
        "requiredSubjectGroups": [],
        "ruleSummary": "Candidate must register four JAMB subjects. Use of English is compulsory. The remaining subjects must follow the compulsory and optional subject rules for this programme."
      },
      "olevel": {
        "minimumCredits": 5,
        "globalCompulsorySubjects": [
          "English Language",
          "Mathematics"
        ],
        "programmeSpecificCompulsorySubjects": [
          "French"
        ],
        "compulsorySubjects": [
          "English Language",
          "Mathematics",
          "French"
        ],
        "optionalSubjects": [
          "Christian Religious Studies",
          "Literature-in-English",
          "Islamic Studies",
          "Arabic",
          "Yoruba",
          "Hausa",
          "Government/History",
          "Civic Education"
        ],
        "acceptedExamTypes": [
          "WAEC",
          "NECO",
          "NABTEB",
          "Other accepted senior secondary examinations"
        ],
        "ruleSummary": "Candidate must have at least five O'Level credit passes, including English Language and Mathematics, plus the programme-specific required/accepted subjects."
      },
      "warnings": [
        "Use of English in JAMB is different from English Language in O'Level; both must be treated separately.",
        "Correct JAMB subjects do not automatically satisfy O'Level requirements.",
        "Optional subjects should be selected only from the approved list for this programme.",
        "O'Level requires at least five credit passes, including English Language and Mathematics."
      ],
      "needsReview": false,
      "keywords": [
        "NSUK",
        "Nasarawa State University, Keffi",
        "French Education",
        "JAMB",
        "UTME",
        "Post UTME",
        "O'Level",
        "WAEC",
        "NECO",
        "NABTEB",
        "subject combination",
        "admission requirement",
        "Use of English",
        "French",
        "Christian Religious Studies",
        "Literature-in-English",
        "Islamic Studies",
        "Arabic",
        "Yoruba",
        "Hausa",
        "Government/History",
        "Civic Education",
        "English Language",
        "Mathematics"
      ],
      "answer": "For French Education at NSUK, the JAMB combination must include Use of English, French; the candidate should choose 2 subject(s) from Christian Religious Studies, Literature-in-English, Islamic Studies, Arabic, French, Yoruba, Hausa, Government/History, Civic Education to make four JAMB subjects. For O'Level, the candidate needs at least five credit passes including English Language, Mathematics, French. Accepted additional O'Level subjects include Christian Religious Studies, Literature-in-English, Islamic Studies, Arabic, Yoruba, Hausa, Government/History, Civic Education.",
      "content": "Programme: French Education\nSchool: Nasarawa State University, Keffi (NSUK)\nAcademic session: 2025/2026\nRequirement type: JAMB subject combination and O'Level combination.\nJAMB requirement: The candidate must register four JAMB subjects. Compulsory JAMB subject(s): Use of English, French. Optional JAMB subject(s): Christian Religious Studies, Literature-in-English, Islamic Studies, Arabic, French, Yoruba, Hausa, Government/History, Civic Education. Optional subjects needed: 2.\nO'Level requirement: The candidate must have at least five credit passes from WAEC, NECO, NABTEB, or another accepted senior secondary examination. English Language and Mathematics are compulsory for O'Level. Programme-specific compulsory O'Level subject(s): French. Accepted optional O'Level subject(s): Christian Religious Studies, Literature-in-English, Islamic Studies, Arabic, Yoruba, Hausa, Government/History, Civic Education.\nStudent guidance: The student should not assume that any subject is accepted. They should match both the JAMB requirement and the O'Level requirement for French Education.",
      "questionVariants": [
        "What are the JAMB subjects for French Education at NSUK?",
        "What O'Level subjects do I need for French Education at NSUK?",
        "What is the subject combination for French Education in NSUK?",
        "Can I study French Education with my JAMB subjects?",
        "Can I study French Education without one of the listed compulsory subjects?",
        "What optional subjects are accepted for French Education?",
        "Is Mathematics compulsory for French Education at NSUK?",
        "Is English Language compulsory for French Education at NSUK?",
        "What WAEC or NECO subjects do I need for French Education?",
        "Does the right JAMB combination mean I am fully qualified for French Education?",
        "Can I use Christian Religious Studies for French Education at NSUK?",
        "Can I use Literature-in-English for French Education at NSUK?",
        "Can I use Islamic Studies for French Education at NSUK?",
        "Can I use Christian Religious Studies for French Education at NSUK?",
        "Can I use Literature-in-English for French Education at NSUK?",
        "Can I use Islamic Studies for French Education at NSUK?"
      ],
      "sourcePages": [
        8
      ],
      "reviewLevel": "normal",
      "sourceNotes": [
        "Source page(s): 8."
      ]
    },
    {
      "school": "Nasarawa State University, Keffi",
      "schoolShortName": "NSUK",
      "academicSession": "2025/2026",
      "sourceLabel": "NSUK Post UTME Subject Combination 2025/2026",
      "programme": "Geography Education",
      "slug": "nsuk-geography-education-requirements",
      "categorySlug": "programme-requirements",
      "type": "programme",
      "status": "published",
      "title": "NSUK Geography Education Admission Subject Combination",
      "question": "What are the JAMB and O'Level subject requirements for Geography Education at NSUK?",
      "jamb": {
        "totalRequiredSubjects": 4,
        "compulsorySubjects": [
          "Use of English",
          "Geography"
        ],
        "optionalChooseCount": 2,
        "optionalSubjects": [
          "Government/History",
          "Civic Education",
          "Economics",
          "Christian Religious Studies",
          "Literature-in-English",
          "Islamic Studies",
          "Arabic",
          "French",
          "Yoruba",
          "Hausa"
        ],
        "requiredSubjectGroups": [],
        "ruleSummary": "Candidate must register four JAMB subjects. Use of English is compulsory. The remaining subjects must follow the compulsory and optional subject rules for this programme."
      },
      "olevel": {
        "minimumCredits": 5,
        "globalCompulsorySubjects": [
          "English Language",
          "Mathematics"
        ],
        "programmeSpecificCompulsorySubjects": [
          "Geography"
        ],
        "compulsorySubjects": [
          "English Language",
          "Mathematics",
          "Geography"
        ],
        "optionalSubjects": [
          "Christian Religious Studies",
          "Literature-in-English",
          "Islamic Studies",
          "Arabic",
          "French",
          "Yoruba",
          "Hausa",
          "Government/History",
          "Civic Education",
          "Economics"
        ],
        "acceptedExamTypes": [
          "WAEC",
          "NECO",
          "NABTEB",
          "Other accepted senior secondary examinations"
        ],
        "ruleSummary": "Candidate must have at least five O'Level credit passes, including English Language and Mathematics, plus the programme-specific required/accepted subjects."
      },
      "warnings": [
        "Use of English in JAMB is different from English Language in O'Level; both must be treated separately.",
        "Correct JAMB subjects do not automatically satisfy O'Level requirements.",
        "Optional subjects should be selected only from the approved list for this programme.",
        "O'Level requires at least five credit passes, including English Language and Mathematics."
      ],
      "needsReview": false,
      "keywords": [
        "NSUK",
        "Nasarawa State University, Keffi",
        "Geography Education",
        "JAMB",
        "UTME",
        "Post UTME",
        "O'Level",
        "WAEC",
        "NECO",
        "NABTEB",
        "subject combination",
        "admission requirement",
        "Use of English",
        "Geography",
        "Government/History",
        "Civic Education",
        "Economics",
        "Christian Religious Studies",
        "Literature-in-English",
        "Islamic Studies",
        "Arabic",
        "French",
        "Yoruba",
        "Hausa",
        "English Language",
        "Mathematics"
      ],
      "answer": "For Geography Education at NSUK, the JAMB combination must include Use of English, Geography; the candidate should choose 2 subject(s) from Government/History, Civic Education, Economics, Christian Religious Studies, Literature-in-English, Islamic Studies, Arabic, French, Yoruba, Hausa to make four JAMB subjects. For O'Level, the candidate needs at least five credit passes including English Language, Mathematics, Geography. Accepted additional O'Level subjects include Christian Religious Studies, Literature-in-English, Islamic Studies, Arabic, French, Yoruba, Hausa, Government/History, Civic Education, Economics.",
      "content": "Programme: Geography Education\nSchool: Nasarawa State University, Keffi (NSUK)\nAcademic session: 2025/2026\nRequirement type: JAMB subject combination and O'Level combination.\nJAMB requirement: The candidate must register four JAMB subjects. Compulsory JAMB subject(s): Use of English, Geography. Optional JAMB subject(s): Government/History, Civic Education, Economics, Christian Religious Studies, Literature-in-English, Islamic Studies, Arabic, French, Yoruba, Hausa. Optional subjects needed: 2.\nO'Level requirement: The candidate must have at least five credit passes from WAEC, NECO, NABTEB, or another accepted senior secondary examination. English Language and Mathematics are compulsory for O'Level. Programme-specific compulsory O'Level subject(s): Geography. Accepted optional O'Level subject(s): Christian Religious Studies, Literature-in-English, Islamic Studies, Arabic, French, Yoruba, Hausa, Government/History, Civic Education, Economics.\nStudent guidance: The student should not assume that any subject is accepted. They should match both the JAMB requirement and the O'Level requirement for Geography Education.",
      "questionVariants": [
        "What are the JAMB subjects for Geography Education at NSUK?",
        "What O'Level subjects do I need for Geography Education at NSUK?",
        "What is the subject combination for Geography Education in NSUK?",
        "Can I study Geography Education with my JAMB subjects?",
        "Can I study Geography Education without one of the listed compulsory subjects?",
        "What optional subjects are accepted for Geography Education?",
        "Is Mathematics compulsory for Geography Education at NSUK?",
        "Is English Language compulsory for Geography Education at NSUK?",
        "What WAEC or NECO subjects do I need for Geography Education?",
        "Does the right JAMB combination mean I am fully qualified for Geography Education?",
        "Can I use Government/History for Geography Education at NSUK?",
        "Can I use Civic Education for Geography Education at NSUK?",
        "Can I use Economics for Geography Education at NSUK?",
        "Can I use Christian Religious Studies for Geography Education at NSUK?",
        "Can I use Literature-in-English for Geography Education at NSUK?",
        "Can I use Islamic Studies for Geography Education at NSUK?"
      ],
      "sourcePages": [
        8,
        9
      ],
      "reviewLevel": "normal",
      "sourceNotes": [
        "Source page(s): 8, 9."
      ]
    },
    {
      "school": "Nasarawa State University, Keffi",
      "schoolShortName": "NSUK",
      "academicSession": "2025/2026",
      "sourceLabel": "NSUK Post UTME Subject Combination 2025/2026",
      "programme": "History Education",
      "slug": "nsuk-history-education-requirements",
      "categorySlug": "programme-requirements",
      "type": "programme",
      "status": "published",
      "title": "NSUK History Education Admission Subject Combination",
      "question": "What are the JAMB and O'Level subject requirements for History Education at NSUK?",
      "jamb": {
        "totalRequiredSubjects": 4,
        "compulsorySubjects": [
          "Use of English",
          "History"
        ],
        "optionalChooseCount": 2,
        "optionalSubjects": [
          "Christian Religious Studies",
          "Islamic Studies",
          "Literature-in-English",
          "French",
          "Yoruba",
          "Geography",
          "Economics",
          "Government/History",
          "Hausa"
        ],
        "requiredSubjectGroups": [],
        "ruleSummary": "Candidate must register four JAMB subjects. Use of English is compulsory. The remaining subjects must follow the compulsory and optional subject rules for this programme."
      },
      "olevel": {
        "minimumCredits": 5,
        "globalCompulsorySubjects": [
          "English Language",
          "Mathematics"
        ],
        "programmeSpecificCompulsorySubjects": [
          "Government/History"
        ],
        "compulsorySubjects": [
          "English Language",
          "Mathematics",
          "Government/History"
        ],
        "optionalSubjects": [
          "Civic Education",
          "Economics",
          "Geography",
          "Christian Religious Studies",
          "Literature-in-English",
          "Islamic Studies",
          "Arabic",
          "French",
          "Yoruba"
        ],
        "acceptedExamTypes": [
          "WAEC",
          "NECO",
          "NABTEB",
          "Other accepted senior secondary examinations"
        ],
        "ruleSummary": "Candidate must have at least five O'Level credit passes, including English Language and Mathematics, plus the programme-specific required/accepted subjects."
      },
      "warnings": [
        "Use of English in JAMB is different from English Language in O'Level; both must be treated separately.",
        "Correct JAMB subjects do not automatically satisfy O'Level requirements.",
        "Optional subjects should be selected only from the approved list for this programme.",
        "O'Level requires at least five credit passes, including English Language and Mathematics."
      ],
      "needsReview": false,
      "keywords": [
        "NSUK",
        "Nasarawa State University, Keffi",
        "History Education",
        "JAMB",
        "UTME",
        "Post UTME",
        "O'Level",
        "WAEC",
        "NECO",
        "NABTEB",
        "subject combination",
        "admission requirement",
        "Use of English",
        "History",
        "Christian Religious Studies",
        "Islamic Studies",
        "Literature-in-English",
        "French",
        "Yoruba",
        "Geography",
        "Economics",
        "Government/History",
        "Hausa",
        "English Language",
        "Mathematics",
        "Civic Education",
        "Arabic"
      ],
      "answer": "For History Education at NSUK, the JAMB combination must include Use of English, History; the candidate should choose 2 subject(s) from Christian Religious Studies, Islamic Studies, Literature-in-English, French, Yoruba, Geography, Economics, Government/History, Hausa to make four JAMB subjects. For O'Level, the candidate needs at least five credit passes including English Language, Mathematics, Government/History. Accepted additional O'Level subjects include Civic Education, Economics, Geography, Christian Religious Studies, Literature-in-English, Islamic Studies, Arabic, French, Yoruba.",
      "content": "Programme: History Education\nSchool: Nasarawa State University, Keffi (NSUK)\nAcademic session: 2025/2026\nRequirement type: JAMB subject combination and O'Level combination.\nJAMB requirement: The candidate must register four JAMB subjects. Compulsory JAMB subject(s): Use of English, History. Optional JAMB subject(s): Christian Religious Studies, Islamic Studies, Literature-in-English, French, Yoruba, Geography, Economics, Government/History, Hausa. Optional subjects needed: 2.\nO'Level requirement: The candidate must have at least five credit passes from WAEC, NECO, NABTEB, or another accepted senior secondary examination. English Language and Mathematics are compulsory for O'Level. Programme-specific compulsory O'Level subject(s): Government/History. Accepted optional O'Level subject(s): Civic Education, Economics, Geography, Christian Religious Studies, Literature-in-English, Islamic Studies, Arabic, French, Yoruba.\nStudent guidance: The student should not assume that any subject is accepted. They should match both the JAMB requirement and the O'Level requirement for History Education.",
      "questionVariants": [
        "What are the JAMB subjects for History Education at NSUK?",
        "What O'Level subjects do I need for History Education at NSUK?",
        "What is the subject combination for History Education in NSUK?",
        "Can I study History Education with my JAMB subjects?",
        "Can I study History Education without one of the listed compulsory subjects?",
        "What optional subjects are accepted for History Education?",
        "Is Mathematics compulsory for History Education at NSUK?",
        "Is English Language compulsory for History Education at NSUK?",
        "What WAEC or NECO subjects do I need for History Education?",
        "Does the right JAMB combination mean I am fully qualified for History Education?",
        "Can I use Christian Religious Studies for History Education at NSUK?",
        "Can I use Islamic Studies for History Education at NSUK?",
        "Can I use Literature-in-English for History Education at NSUK?",
        "Can I use Civic Education for History Education at NSUK?",
        "Can I use Economics for History Education at NSUK?",
        "Can I use Geography for History Education at NSUK?"
      ],
      "sourcePages": [
        9
      ],
      "reviewLevel": "normal",
      "sourceNotes": [
        "Source page(s): 9."
      ]
    },
    {
      "school": "Nasarawa State University, Keffi",
      "schoolShortName": "NSUK",
      "academicSession": "2025/2026",
      "sourceLabel": "NSUK Post UTME Subject Combination 2025/2026",
      "programme": "Physics Education",
      "slug": "nsuk-physics-education-requirements",
      "categorySlug": "programme-requirements",
      "type": "programme",
      "status": "published",
      "title": "NSUK Physics Education Admission Subject Combination",
      "question": "What are the JAMB and O'Level subject requirements for Physics Education at NSUK?",
      "jamb": {
        "totalRequiredSubjects": 4,
        "compulsorySubjects": [
          "Use of English",
          "Physics",
          "Mathematics/Chemistry"
        ],
        "optionalChooseCount": 1,
        "optionalSubjects": [
          "Biology",
          "Agricultural Science",
          "Food and Nutrition",
          "Economics",
          "Geography"
        ],
        "requiredSubjectGroups": [
          {
            "slot": "Mathematics/Chemistry",
            "choose": 1,
            "options": [
              "Mathematics",
              "Chemistry"
            ]
          }
        ],
        "ruleSummary": "Candidate must register four JAMB subjects. Use of English is compulsory. The remaining subjects must follow the compulsory and optional subject rules for this programme."
      },
      "olevel": {
        "minimumCredits": 5,
        "globalCompulsorySubjects": [
          "English Language",
          "Mathematics"
        ],
        "programmeSpecificCompulsorySubjects": [
          "Physics"
        ],
        "compulsorySubjects": [
          "English Language",
          "Mathematics",
          "Physics"
        ],
        "optionalSubjects": [
          "Chemistry",
          "Biology",
          "Agricultural Science",
          "Food and Nutrition"
        ],
        "acceptedExamTypes": [
          "WAEC",
          "NECO",
          "NABTEB",
          "Other accepted senior secondary examinations"
        ],
        "ruleSummary": "Candidate must have at least five O'Level credit passes, including English Language and Mathematics, plus the programme-specific required/accepted subjects."
      },
      "warnings": [
        "Use of English in JAMB is different from English Language in O'Level; both must be treated separately.",
        "Correct JAMB subjects do not automatically satisfy O'Level requirements.",
        "Optional subjects should be selected only from the approved list for this programme.",
        "O'Level requires at least five credit passes, including English Language and Mathematics.",
        "A slash in a subject slot, such as Biology/Agricultural Science, means the source presents alternatives for that slot; validate carefully during eligibility checks."
      ],
      "needsReview": false,
      "keywords": [
        "NSUK",
        "Nasarawa State University, Keffi",
        "Physics Education",
        "JAMB",
        "UTME",
        "Post UTME",
        "O'Level",
        "WAEC",
        "NECO",
        "NABTEB",
        "subject combination",
        "admission requirement",
        "Use of English",
        "Physics",
        "Mathematics/Chemistry",
        "Biology",
        "Agricultural Science",
        "Food and Nutrition",
        "Economics",
        "Geography",
        "English Language",
        "Mathematics",
        "Chemistry"
      ],
      "answer": "For Physics Education at NSUK, the JAMB combination must include Use of English, Physics, Mathematics/Chemistry; the candidate should choose 1 subject(s) from Biology, Agricultural Science, Food and Nutrition, Economics, Geography to make four JAMB subjects. For O'Level, the candidate needs at least five credit passes including English Language, Mathematics, Physics. Accepted additional O'Level subjects include Chemistry, Biology, Agricultural Science, Food and Nutrition.",
      "content": "Programme: Physics Education\nSchool: Nasarawa State University, Keffi (NSUK)\nAcademic session: 2025/2026\nRequirement type: JAMB subject combination and O'Level combination.\nJAMB requirement: The candidate must register four JAMB subjects. Compulsory JAMB subject(s): Use of English, Physics, Mathematics/Chemistry. Optional JAMB subject(s): Biology, Agricultural Science, Food and Nutrition, Economics, Geography. Optional subjects needed: 1.\nO'Level requirement: The candidate must have at least five credit passes from WAEC, NECO, NABTEB, or another accepted senior secondary examination. English Language and Mathematics are compulsory for O'Level. Programme-specific compulsory O'Level subject(s): Physics. Accepted optional O'Level subject(s): Chemistry, Biology, Agricultural Science, Food and Nutrition.\nStudent guidance: The student should not assume that any subject is accepted. They should match both the JAMB requirement and the O'Level requirement for Physics Education.",
      "questionVariants": [
        "What are the JAMB subjects for Physics Education at NSUK?",
        "What O'Level subjects do I need for Physics Education at NSUK?",
        "What is the subject combination for Physics Education in NSUK?",
        "Can I study Physics Education with my JAMB subjects?",
        "Can I study Physics Education without one of the listed compulsory subjects?",
        "What optional subjects are accepted for Physics Education?",
        "Is Mathematics compulsory for Physics Education at NSUK?",
        "Is English Language compulsory for Physics Education at NSUK?",
        "What WAEC or NECO subjects do I need for Physics Education?",
        "Does the right JAMB combination mean I am fully qualified for Physics Education?",
        "Can I use Biology for Physics Education at NSUK?",
        "Can I use Agricultural Science for Physics Education at NSUK?",
        "Can I use Food and Nutrition for Physics Education at NSUK?",
        "Can I use Chemistry for Physics Education at NSUK?",
        "Can I use Biology for Physics Education at NSUK?",
        "Can I use Agricultural Science for Physics Education at NSUK?"
      ],
      "sourcePages": [
        9
      ],
      "reviewLevel": "normal",
      "sourceNotes": [
        "Source page(s): 9."
      ]
    },
    {
      "school": "Nasarawa State University, Keffi",
      "schoolShortName": "NSUK",
      "academicSession": "2025/2026",
      "sourceLabel": "NSUK Post UTME Subject Combination 2025/2026",
      "programme": "English Education",
      "slug": "nsuk-english-education-requirements",
      "categorySlug": "programme-requirements",
      "type": "programme",
      "status": "published",
      "title": "NSUK English Education Admission Subject Combination",
      "question": "What are the JAMB and O'Level subject requirements for English Education at NSUK?",
      "jamb": {
        "totalRequiredSubjects": 4,
        "compulsorySubjects": [
          "Use of English",
          "Literature-in-English"
        ],
        "optionalChooseCount": 2,
        "optionalSubjects": [
          "Christian Religious Studies",
          "Islamic Studies",
          "Arabic",
          "French",
          "Yoruba",
          "Hausa",
          "Government/History",
          "Civic Education",
          "Economics",
          "Geography"
        ],
        "requiredSubjectGroups": [],
        "ruleSummary": "Candidate must register four JAMB subjects. Use of English is compulsory. The remaining subjects must follow the compulsory and optional subject rules for this programme."
      },
      "olevel": {
        "minimumCredits": 5,
        "globalCompulsorySubjects": [
          "English Language",
          "Mathematics"
        ],
        "programmeSpecificCompulsorySubjects": [
          "Literature-in-English"
        ],
        "compulsorySubjects": [
          "English Language",
          "Mathematics",
          "Literature-in-English"
        ],
        "optionalSubjects": [
          "Christian Religious Studies",
          "Islamic Studies",
          "Arabic",
          "French",
          "Yoruba",
          "Hausa",
          "Government/History",
          "Civic Education",
          "Economics",
          "Geography"
        ],
        "acceptedExamTypes": [
          "WAEC",
          "NECO",
          "NABTEB",
          "Other accepted senior secondary examinations"
        ],
        "ruleSummary": "Candidate must have at least five O'Level credit passes, including English Language and Mathematics, plus the programme-specific required/accepted subjects."
      },
      "warnings": [
        "Use of English in JAMB is different from English Language in O'Level; both must be treated separately.",
        "Correct JAMB subjects do not automatically satisfy O'Level requirements.",
        "Optional subjects should be selected only from the approved list for this programme.",
        "O'Level requires at least five credit passes, including English Language and Mathematics."
      ],
      "needsReview": false,
      "keywords": [
        "NSUK",
        "Nasarawa State University, Keffi",
        "English Education",
        "JAMB",
        "UTME",
        "Post UTME",
        "O'Level",
        "WAEC",
        "NECO",
        "NABTEB",
        "subject combination",
        "admission requirement",
        "Use of English",
        "Literature-in-English",
        "Christian Religious Studies",
        "Islamic Studies",
        "Arabic",
        "French",
        "Yoruba",
        "Hausa",
        "Government/History",
        "Civic Education",
        "Economics",
        "Geography",
        "English Language",
        "Mathematics"
      ],
      "answer": "For English Education at NSUK, the JAMB combination must include Use of English, Literature-in-English; the candidate should choose 2 subject(s) from Christian Religious Studies, Islamic Studies, Arabic, French, Yoruba, Hausa, Government/History, Civic Education, Economics, Geography to make four JAMB subjects. For O'Level, the candidate needs at least five credit passes including English Language, Mathematics, Literature-in-English. Accepted additional O'Level subjects include Christian Religious Studies, Islamic Studies, Arabic, French, Yoruba, Hausa, Government/History, Civic Education, Economics, Geography.",
      "content": "Programme: English Education\nSchool: Nasarawa State University, Keffi (NSUK)\nAcademic session: 2025/2026\nRequirement type: JAMB subject combination and O'Level combination.\nJAMB requirement: The candidate must register four JAMB subjects. Compulsory JAMB subject(s): Use of English, Literature-in-English. Optional JAMB subject(s): Christian Religious Studies, Islamic Studies, Arabic, French, Yoruba, Hausa, Government/History, Civic Education, Economics, Geography. Optional subjects needed: 2.\nO'Level requirement: The candidate must have at least five credit passes from WAEC, NECO, NABTEB, or another accepted senior secondary examination. English Language and Mathematics are compulsory for O'Level. Programme-specific compulsory O'Level subject(s): Literature-in-English. Accepted optional O'Level subject(s): Christian Religious Studies, Islamic Studies, Arabic, French, Yoruba, Hausa, Government/History, Civic Education, Economics, Geography.\nStudent guidance: The student should not assume that any subject is accepted. They should match both the JAMB requirement and the O'Level requirement for English Education.",
      "questionVariants": [
        "What are the JAMB subjects for English Education at NSUK?",
        "What O'Level subjects do I need for English Education at NSUK?",
        "What is the subject combination for English Education in NSUK?",
        "Can I study English Education with my JAMB subjects?",
        "Can I study English Education without one of the listed compulsory subjects?",
        "What optional subjects are accepted for English Education?",
        "Is Mathematics compulsory for English Education at NSUK?",
        "Is English Language compulsory for English Education at NSUK?",
        "What WAEC or NECO subjects do I need for English Education?",
        "Does the right JAMB combination mean I am fully qualified for English Education?",
        "Can I use Christian Religious Studies for English Education at NSUK?",
        "Can I use Islamic Studies for English Education at NSUK?",
        "Can I use Arabic for English Education at NSUK?",
        "Can I use Christian Religious Studies for English Education at NSUK?",
        "Can I use Islamic Studies for English Education at NSUK?",
        "Can I use Arabic for English Education at NSUK?"
      ],
      "sourcePages": [
        9
      ],
      "reviewLevel": "normal",
      "sourceNotes": [
        "Source page(s): 9."
      ]
    },
    {
      "school": "Nasarawa State University, Keffi",
      "schoolShortName": "NSUK",
      "academicSession": "2025/2026",
      "sourceLabel": "NSUK Post UTME Subject Combination 2025/2026",
      "programme": "CRS Education",
      "slug": "nsuk-crs-education-requirements",
      "categorySlug": "programme-requirements",
      "type": "programme",
      "status": "published",
      "title": "NSUK CRS Education Admission Subject Combination",
      "question": "What are the JAMB and O'Level subject requirements for CRS Education at NSUK?",
      "jamb": {
        "totalRequiredSubjects": 4,
        "compulsorySubjects": [
          "Use of English",
          "Christian Religious Studies"
        ],
        "optionalChooseCount": 2,
        "optionalSubjects": [
          "Literature-in-English",
          "Islamic Studies",
          "Arabic",
          "French",
          "Yoruba",
          "Hausa",
          "Government/History",
          "Economics",
          "Geography"
        ],
        "requiredSubjectGroups": [],
        "ruleSummary": "Candidate must register four JAMB subjects. Use of English is compulsory. The remaining subjects must follow the compulsory and optional subject rules for this programme."
      },
      "olevel": {
        "minimumCredits": 5,
        "globalCompulsorySubjects": [
          "English Language",
          "Mathematics"
        ],
        "programmeSpecificCompulsorySubjects": [
          "Christian Religious Studies"
        ],
        "compulsorySubjects": [
          "English Language",
          "Mathematics",
          "Christian Religious Studies"
        ],
        "optionalSubjects": [
          "Literature-in-English",
          "Islamic Studies",
          "Arabic",
          "French",
          "Yoruba",
          "Hausa",
          "Government/History"
        ],
        "acceptedExamTypes": [
          "WAEC",
          "NECO",
          "NABTEB",
          "Other accepted senior secondary examinations"
        ],
        "ruleSummary": "Candidate must have at least five O'Level credit passes, including English Language and Mathematics, plus the programme-specific required/accepted subjects."
      },
      "warnings": [
        "Use of English in JAMB is different from English Language in O'Level; both must be treated separately.",
        "Correct JAMB subjects do not automatically satisfy O'Level requirements.",
        "Optional subjects should be selected only from the approved list for this programme.",
        "O'Level requires at least five credit passes, including English Language and Mathematics."
      ],
      "needsReview": false,
      "keywords": [
        "NSUK",
        "Nasarawa State University, Keffi",
        "CRS Education",
        "JAMB",
        "UTME",
        "Post UTME",
        "O'Level",
        "WAEC",
        "NECO",
        "NABTEB",
        "subject combination",
        "admission requirement",
        "Use of English",
        "Christian Religious Studies",
        "Literature-in-English",
        "Islamic Studies",
        "Arabic",
        "French",
        "Yoruba",
        "Hausa",
        "Government/History",
        "Economics",
        "Geography",
        "English Language",
        "Mathematics"
      ],
      "answer": "For CRS Education at NSUK, the JAMB combination must include Use of English, Christian Religious Studies; the candidate should choose 2 subject(s) from Literature-in-English, Islamic Studies, Arabic, French, Yoruba, Hausa, Government/History, Economics, Geography to make four JAMB subjects. For O'Level, the candidate needs at least five credit passes including English Language, Mathematics, Christian Religious Studies. Accepted additional O'Level subjects include Literature-in-English, Islamic Studies, Arabic, French, Yoruba, Hausa, Government/History.",
      "content": "Programme: CRS Education\nSchool: Nasarawa State University, Keffi (NSUK)\nAcademic session: 2025/2026\nRequirement type: JAMB subject combination and O'Level combination.\nJAMB requirement: The candidate must register four JAMB subjects. Compulsory JAMB subject(s): Use of English, Christian Religious Studies. Optional JAMB subject(s): Literature-in-English, Islamic Studies, Arabic, French, Yoruba, Hausa, Government/History, Economics, Geography. Optional subjects needed: 2.\nO'Level requirement: The candidate must have at least five credit passes from WAEC, NECO, NABTEB, or another accepted senior secondary examination. English Language and Mathematics are compulsory for O'Level. Programme-specific compulsory O'Level subject(s): Christian Religious Studies. Accepted optional O'Level subject(s): Literature-in-English, Islamic Studies, Arabic, French, Yoruba, Hausa, Government/History.\nStudent guidance: The student should not assume that any subject is accepted. They should match both the JAMB requirement and the O'Level requirement for CRS Education.",
      "questionVariants": [
        "What are the JAMB subjects for CRS Education at NSUK?",
        "What O'Level subjects do I need for CRS Education at NSUK?",
        "What is the subject combination for CRS Education in NSUK?",
        "Can I study CRS Education with my JAMB subjects?",
        "Can I study CRS Education without one of the listed compulsory subjects?",
        "What optional subjects are accepted for CRS Education?",
        "Is Mathematics compulsory for CRS Education at NSUK?",
        "Is English Language compulsory for CRS Education at NSUK?",
        "What WAEC or NECO subjects do I need for CRS Education?",
        "Does the right JAMB combination mean I am fully qualified for CRS Education?",
        "Can I use Literature-in-English for CRS Education at NSUK?",
        "Can I use Islamic Studies for CRS Education at NSUK?",
        "Can I use Arabic for CRS Education at NSUK?",
        "Can I use Literature-in-English for CRS Education at NSUK?",
        "Can I use Islamic Studies for CRS Education at NSUK?",
        "Can I use Arabic for CRS Education at NSUK?"
      ],
      "sourcePages": [
        10
      ],
      "reviewLevel": "normal",
      "sourceNotes": [
        "Source page(s): 10."
      ]
    },
    {
      "school": "Nasarawa State University, Keffi",
      "schoolShortName": "NSUK",
      "academicSession": "2025/2026",
      "sourceLabel": "NSUK Post UTME Subject Combination 2025/2026",
      "programme": "Economics Education",
      "slug": "nsuk-economics-education-requirements",
      "categorySlug": "programme-requirements",
      "type": "programme",
      "status": "published",
      "title": "NSUK Economics Education Admission Subject Combination",
      "question": "What are the JAMB and O'Level subject requirements for Economics Education at NSUK?",
      "jamb": {
        "totalRequiredSubjects": 4,
        "compulsorySubjects": [
          "Use of English",
          "Economics",
          "Mathematics"
        ],
        "optionalChooseCount": 1,
        "optionalSubjects": [
          "Geography/Physics",
          "History",
          "Government",
          "Literature-in-English"
        ],
        "requiredSubjectGroups": [],
        "ruleSummary": "Candidate must register four JAMB subjects. Use of English is compulsory. The remaining subjects must follow the compulsory and optional subject rules for this programme."
      },
      "olevel": {
        "minimumCredits": 5,
        "globalCompulsorySubjects": [
          "English Language",
          "Mathematics"
        ],
        "programmeSpecificCompulsorySubjects": [
          "Economics"
        ],
        "compulsorySubjects": [
          "English Language",
          "Mathematics",
          "Economics"
        ],
        "optionalSubjects": [
          "Government/History",
          "Civic Education",
          "Geography",
          "Literature-in-English",
          "Islamic Studies",
          "Arabic",
          "French",
          "Yoruba",
          "Hausa",
          "Commerce",
          "Marketing",
          "Financial Accounting"
        ],
        "acceptedExamTypes": [
          "WAEC",
          "NECO",
          "NABTEB",
          "Other accepted senior secondary examinations"
        ],
        "ruleSummary": "Candidate must have at least five O'Level credit passes, including English Language and Mathematics, plus the programme-specific required/accepted subjects."
      },
      "warnings": [
        "Use of English in JAMB is different from English Language in O'Level; both must be treated separately.",
        "Correct JAMB subjects do not automatically satisfy O'Level requirements.",
        "Optional subjects should be selected only from the approved list for this programme.",
        "O'Level requires at least five credit passes, including English Language and Mathematics."
      ],
      "needsReview": false,
      "keywords": [
        "NSUK",
        "Nasarawa State University, Keffi",
        "Economics Education",
        "JAMB",
        "UTME",
        "Post UTME",
        "O'Level",
        "WAEC",
        "NECO",
        "NABTEB",
        "subject combination",
        "admission requirement",
        "Use of English",
        "Economics",
        "Mathematics",
        "Geography/Physics",
        "History",
        "Government",
        "Literature-in-English",
        "English Language",
        "Government/History",
        "Civic Education",
        "Geography",
        "Islamic Studies",
        "Arabic",
        "French",
        "Yoruba",
        "Hausa",
        "Commerce",
        "Marketing",
        "Financial Accounting"
      ],
      "answer": "For Economics Education at NSUK, the JAMB combination must include Use of English, Economics, Mathematics; the candidate should choose 1 subject(s) from Geography/Physics, History, Government, Literature-in-English to make four JAMB subjects. For O'Level, the candidate needs at least five credit passes including English Language, Mathematics, Economics. Accepted additional O'Level subjects include Government/History, Civic Education, Geography, Literature-in-English, Islamic Studies, Arabic, French, Yoruba, Hausa, Commerce, Marketing, Financial Accounting.",
      "content": "Programme: Economics Education\nSchool: Nasarawa State University, Keffi (NSUK)\nAcademic session: 2025/2026\nRequirement type: JAMB subject combination and O'Level combination.\nJAMB requirement: The candidate must register four JAMB subjects. Compulsory JAMB subject(s): Use of English, Economics, Mathematics. Optional JAMB subject(s): Geography/Physics, History, Government, Literature-in-English. Optional subjects needed: 1.\nO'Level requirement: The candidate must have at least five credit passes from WAEC, NECO, NABTEB, or another accepted senior secondary examination. English Language and Mathematics are compulsory for O'Level. Programme-specific compulsory O'Level subject(s): Economics. Accepted optional O'Level subject(s): Government/History, Civic Education, Geography, Literature-in-English, Islamic Studies, Arabic, French, Yoruba, Hausa, Commerce, Marketing, Financial Accounting.\nStudent guidance: The student should not assume that any subject is accepted. They should match both the JAMB requirement and the O'Level requirement for Economics Education.",
      "questionVariants": [
        "What are the JAMB subjects for Economics Education at NSUK?",
        "What O'Level subjects do I need for Economics Education at NSUK?",
        "What is the subject combination for Economics Education in NSUK?",
        "Can I study Economics Education with my JAMB subjects?",
        "Can I study Economics Education without one of the listed compulsory subjects?",
        "What optional subjects are accepted for Economics Education?",
        "Is Mathematics compulsory for Economics Education at NSUK?",
        "Is English Language compulsory for Economics Education at NSUK?",
        "What WAEC or NECO subjects do I need for Economics Education?",
        "Does the right JAMB combination mean I am fully qualified for Economics Education?",
        "Can I use Geography/Physics for Economics Education at NSUK?",
        "Can I use History for Economics Education at NSUK?",
        "Can I use Government for Economics Education at NSUK?",
        "Can I use Government/History for Economics Education at NSUK?",
        "Can I use Civic Education for Economics Education at NSUK?",
        "Can I use Geography for Economics Education at NSUK?"
      ],
      "sourcePages": [
        10
      ],
      "reviewLevel": "normal",
      "sourceNotes": [
        "Source page(s): 10."
      ]
    },
    {
      "school": "Nasarawa State University, Keffi",
      "schoolShortName": "NSUK",
      "academicSession": "2025/2026",
      "sourceLabel": "NSUK Post UTME Subject Combination 2025/2026",
      "programme": "Social Studies Education",
      "slug": "nsuk-social-studies-education-requirements",
      "categorySlug": "programme-requirements",
      "type": "programme",
      "status": "published",
      "title": "NSUK Social Studies Education Admission Subject Combination",
      "question": "What are the JAMB and O'Level subject requirements for Social Studies Education at NSUK?",
      "jamb": {
        "totalRequiredSubjects": 4,
        "compulsorySubjects": [
          "Use of English"
        ],
        "optionalChooseCount": 3,
        "optionalSubjects": [
          "Geography/Physics",
          "Christian Religious Studies",
          "Economics",
          "Government",
          "History",
          "Islamic Studies"
        ],
        "requiredSubjectGroups": [],
        "ruleSummary": "Candidate must register four JAMB subjects. Use of English is compulsory. The remaining subjects must follow the compulsory and optional subject rules for this programme."
      },
      "olevel": {
        "minimumCredits": 5,
        "globalCompulsorySubjects": [
          "English Language",
          "Mathematics"
        ],
        "programmeSpecificCompulsorySubjects": [],
        "compulsorySubjects": [
          "English Language",
          "Mathematics"
        ],
        "optionalSubjects": [
          "Government/History",
          "Civic Education",
          "Economics",
          "Geography",
          "Christian Religious Studies",
          "Literature-in-English",
          "Islamic Studies",
          "Arabic",
          "French",
          "Yoruba",
          "Hausa"
        ],
        "acceptedExamTypes": [
          "WAEC",
          "NECO",
          "NABTEB",
          "Other accepted senior secondary examinations"
        ],
        "ruleSummary": "Candidate must have at least five O'Level credit passes, including English Language and Mathematics, plus the programme-specific required/accepted subjects."
      },
      "warnings": [
        "Use of English in JAMB is different from English Language in O'Level; both must be treated separately.",
        "Correct JAMB subjects do not automatically satisfy O'Level requirements.",
        "Optional subjects should be selected only from the approved list for this programme.",
        "O'Level requires at least five credit passes, including English Language and Mathematics.",
        "Where the source says 'Any three subjects', this seed restricts those choices to the approved subject context listed for the programme, not literally every subject."
      ],
      "needsReview": false,
      "keywords": [
        "NSUK",
        "Nasarawa State University, Keffi",
        "Social Studies Education",
        "JAMB",
        "UTME",
        "Post UTME",
        "O'Level",
        "WAEC",
        "NECO",
        "NABTEB",
        "subject combination",
        "admission requirement",
        "Use of English",
        "Geography/Physics",
        "Christian Religious Studies",
        "Economics",
        "Government",
        "History",
        "Islamic Studies",
        "English Language",
        "Mathematics",
        "Government/History",
        "Civic Education",
        "Geography",
        "Literature-in-English",
        "Arabic",
        "French",
        "Yoruba",
        "Hausa"
      ],
      "answer": "For Social Studies Education at NSUK, the JAMB combination must include Use of English; the candidate should choose 3 subject(s) from Geography/Physics, Christian Religious Studies, Economics, Government, History, Islamic Studies to make four JAMB subjects. For O'Level, the candidate needs at least five credit passes including English Language, Mathematics. Accepted additional O'Level subjects include Government/History, Civic Education, Economics, Geography, Christian Religious Studies, Literature-in-English, Islamic Studies, Arabic, French, Yoruba, Hausa.",
      "content": "Programme: Social Studies Education\nSchool: Nasarawa State University, Keffi (NSUK)\nAcademic session: 2025/2026\nRequirement type: JAMB subject combination and O'Level combination.\nJAMB requirement: The candidate must register four JAMB subjects. Compulsory JAMB subject(s): Use of English. Optional JAMB subject(s): Geography/Physics, Christian Religious Studies, Economics, Government, History, Islamic Studies. Optional subjects needed: 3.\nO'Level requirement: The candidate must have at least five credit passes from WAEC, NECO, NABTEB, or another accepted senior secondary examination. English Language and Mathematics are compulsory for O'Level. Programme-specific compulsory O'Level subject(s): none listed beyond English Language and Mathematics. Accepted optional O'Level subject(s): Government/History, Civic Education, Economics, Geography, Christian Religious Studies, Literature-in-English, Islamic Studies, Arabic, French, Yoruba, Hausa.\nStudent guidance: The student should not assume that any subject is accepted. They should match both the JAMB requirement and the O'Level requirement for Social Studies Education.",
      "questionVariants": [
        "What are the JAMB subjects for Social Studies Education at NSUK?",
        "What O'Level subjects do I need for Social Studies Education at NSUK?",
        "What is the subject combination for Social Studies Education in NSUK?",
        "Can I study Social Studies Education with my JAMB subjects?",
        "Can I study Social Studies Education without one of the listed compulsory subjects?",
        "What optional subjects are accepted for Social Studies Education?",
        "Is Mathematics compulsory for Social Studies Education at NSUK?",
        "Is English Language compulsory for Social Studies Education at NSUK?",
        "What WAEC or NECO subjects do I need for Social Studies Education?",
        "Does the right JAMB combination mean I am fully qualified for Social Studies Education?",
        "Can I use Geography/Physics for Social Studies Education at NSUK?",
        "Can I use Christian Religious Studies for Social Studies Education at NSUK?",
        "Can I use Economics for Social Studies Education at NSUK?",
        "Can I use Government/History for Social Studies Education at NSUK?",
        "Can I use Civic Education for Social Studies Education at NSUK?",
        "Can I use Economics for Social Studies Education at NSUK?"
      ],
      "sourcePages": [
        10
      ],
      "reviewLevel": "normal",
      "sourceNotes": [
        "Source page(s): 10."
      ]
    },
    {
      "school": "Nasarawa State University, Keffi",
      "schoolShortName": "NSUK",
      "academicSession": "2025/2026",
      "sourceLabel": "NSUK Post UTME Subject Combination 2025/2026",
      "programme": "Guidance and Counselling",
      "slug": "nsuk-guidance-and-counselling-requirements",
      "categorySlug": "programme-requirements",
      "type": "programme",
      "status": "published",
      "title": "NSUK Guidance and Counselling Admission Subject Combination",
      "question": "What are the JAMB and O'Level subject requirements for Guidance and Counselling at NSUK?",
      "jamb": {
        "totalRequiredSubjects": 4,
        "compulsorySubjects": [
          "Use of English"
        ],
        "optionalChooseCount": 3,
        "optionalSubjects": [
          "Government/History",
          "Civic Education",
          "Economics",
          "Geography",
          "Christian Religious Studies",
          "Literature-in-English",
          "Islamic Studies",
          "Arabic",
          "French",
          "Yoruba",
          "Hausa"
        ],
        "requiredSubjectGroups": [],
        "ruleSummary": "Candidate must register four JAMB subjects. Use of English is compulsory. The remaining subjects must follow the compulsory and optional subject rules for this programme."
      },
      "olevel": {
        "minimumCredits": 5,
        "globalCompulsorySubjects": [
          "English Language",
          "Mathematics"
        ],
        "programmeSpecificCompulsorySubjects": [],
        "compulsorySubjects": [
          "English Language",
          "Mathematics"
        ],
        "optionalSubjects": [
          "Government/History",
          "Civic Education",
          "Economics",
          "Geography",
          "Christian Religious Studies",
          "Literature-in-English",
          "Islamic Studies",
          "Arabic",
          "French",
          "Yoruba",
          "Hausa"
        ],
        "acceptedExamTypes": [
          "WAEC",
          "NECO",
          "NABTEB",
          "Other accepted senior secondary examinations"
        ],
        "ruleSummary": "Candidate must have at least five O'Level credit passes, including English Language and Mathematics, plus the programme-specific required/accepted subjects."
      },
      "warnings": [
        "Use of English in JAMB is different from English Language in O'Level; both must be treated separately.",
        "Correct JAMB subjects do not automatically satisfy O'Level requirements.",
        "Optional subjects should be selected only from the approved list for this programme.",
        "O'Level requires at least five credit passes, including English Language and Mathematics.",
        "Where the source says 'Any three subjects', this seed restricts those choices to the approved subject context listed for the programme, not literally every subject."
      ],
      "needsReview": false,
      "keywords": [
        "NSUK",
        "Nasarawa State University, Keffi",
        "Guidance and Counselling",
        "JAMB",
        "UTME",
        "Post UTME",
        "O'Level",
        "WAEC",
        "NECO",
        "NABTEB",
        "subject combination",
        "admission requirement",
        "Use of English",
        "Government/History",
        "Civic Education",
        "Economics",
        "Geography",
        "Christian Religious Studies",
        "Literature-in-English",
        "Islamic Studies",
        "Arabic",
        "French",
        "Yoruba",
        "Hausa",
        "English Language",
        "Mathematics"
      ],
      "answer": "For Guidance and Counselling at NSUK, the JAMB combination must include Use of English; the candidate should choose 3 subject(s) from Government/History, Civic Education, Economics, Geography, Christian Religious Studies, Literature-in-English, Islamic Studies, Arabic, French, Yoruba, Hausa to make four JAMB subjects. For O'Level, the candidate needs at least five credit passes including English Language, Mathematics. Accepted additional O'Level subjects include Government/History, Civic Education, Economics, Geography, Christian Religious Studies, Literature-in-English, Islamic Studies, Arabic, French, Yoruba, Hausa.",
      "content": "Programme: Guidance and Counselling\nSchool: Nasarawa State University, Keffi (NSUK)\nAcademic session: 2025/2026\nRequirement type: JAMB subject combination and O'Level combination.\nJAMB requirement: The candidate must register four JAMB subjects. Compulsory JAMB subject(s): Use of English. Optional JAMB subject(s): Government/History, Civic Education, Economics, Geography, Christian Religious Studies, Literature-in-English, Islamic Studies, Arabic, French, Yoruba, Hausa. Optional subjects needed: 3.\nO'Level requirement: The candidate must have at least five credit passes from WAEC, NECO, NABTEB, or another accepted senior secondary examination. English Language and Mathematics are compulsory for O'Level. Programme-specific compulsory O'Level subject(s): none listed beyond English Language and Mathematics. Accepted optional O'Level subject(s): Government/History, Civic Education, Economics, Geography, Christian Religious Studies, Literature-in-English, Islamic Studies, Arabic, French, Yoruba, Hausa.\nStudent guidance: The student should not assume that any subject is accepted. They should match both the JAMB requirement and the O'Level requirement for Guidance and Counselling.",
      "questionVariants": [
        "What are the JAMB subjects for Guidance and Counselling at NSUK?",
        "What O'Level subjects do I need for Guidance and Counselling at NSUK?",
        "What is the subject combination for Guidance and Counselling in NSUK?",
        "Can I study Guidance and Counselling with my JAMB subjects?",
        "Can I study Guidance and Counselling without one of the listed compulsory subjects?",
        "What optional subjects are accepted for Guidance and Counselling?",
        "Is Mathematics compulsory for Guidance and Counselling at NSUK?",
        "Is English Language compulsory for Guidance and Counselling at NSUK?",
        "What WAEC or NECO subjects do I need for Guidance and Counselling?",
        "Does the right JAMB combination mean I am fully qualified for Guidance and Counselling?",
        "Can I use Government/History for Guidance and Counselling at NSUK?",
        "Can I use Civic Education for Guidance and Counselling at NSUK?",
        "Can I use Economics for Guidance and Counselling at NSUK?",
        "Can I use Government/History for Guidance and Counselling at NSUK?",
        "Can I use Civic Education for Guidance and Counselling at NSUK?",
        "Can I use Economics for Guidance and Counselling at NSUK?"
      ],
      "sourcePages": [
        10,
        11
      ],
      "reviewLevel": "normal",
      "sourceNotes": [
        "Source page(s): 10, 11."
      ]
    },
    {
      "school": "Nasarawa State University, Keffi",
      "schoolShortName": "NSUK",
      "academicSession": "2025/2026",
      "sourceLabel": "NSUK Post UTME Subject Combination 2025/2026",
      "programme": "Special Education",
      "slug": "nsuk-special-education-requirements",
      "categorySlug": "programme-requirements",
      "type": "programme",
      "status": "published",
      "title": "NSUK Special Education Admission Subject Combination",
      "question": "What are the JAMB and O'Level subject requirements for Special Education at NSUK?",
      "jamb": {
        "totalRequiredSubjects": 4,
        "compulsorySubjects": [
          "Use of English"
        ],
        "optionalChooseCount": 3,
        "optionalSubjects": [
          "Government/History",
          "Civic Education",
          "Economics",
          "Geography",
          "Agricultural Science",
          "Food and Nutrition",
          "Christian Religious Studies",
          "Literature-in-English",
          "Islamic Studies",
          "Arabic",
          "French",
          "Yoruba",
          "Hausa",
          "Commerce",
          "Marketing",
          "Financial Accounting"
        ],
        "requiredSubjectGroups": [],
        "ruleSummary": "Candidate must register four JAMB subjects. Use of English is compulsory. The remaining subjects must follow the compulsory and optional subject rules for this programme."
      },
      "olevel": {
        "minimumCredits": 5,
        "globalCompulsorySubjects": [
          "English Language",
          "Mathematics"
        ],
        "programmeSpecificCompulsorySubjects": [],
        "compulsorySubjects": [
          "English Language",
          "Mathematics"
        ],
        "optionalSubjects": [
          "Government/History",
          "Civic Education",
          "Economics",
          "Geography",
          "Agricultural Science",
          "Food and Nutrition",
          "Christian Religious Studies",
          "Literature-in-English",
          "Islamic Studies",
          "Arabic",
          "French",
          "Yoruba",
          "Hausa",
          "Commerce",
          "Marketing",
          "Financial Accounting"
        ],
        "acceptedExamTypes": [
          "WAEC",
          "NECO",
          "NABTEB",
          "Other accepted senior secondary examinations"
        ],
        "ruleSummary": "Candidate must have at least five O'Level credit passes, including English Language and Mathematics, plus the programme-specific required/accepted subjects."
      },
      "warnings": [
        "Use of English in JAMB is different from English Language in O'Level; both must be treated separately.",
        "Correct JAMB subjects do not automatically satisfy O'Level requirements.",
        "Optional subjects should be selected only from the approved list for this programme.",
        "O'Level requires at least five credit passes, including English Language and Mathematics.",
        "Where the source says 'Any three subjects', this seed restricts those choices to the approved subject context listed for the programme, not literally every subject."
      ],
      "needsReview": false,
      "keywords": [
        "NSUK",
        "Nasarawa State University, Keffi",
        "Special Education",
        "JAMB",
        "UTME",
        "Post UTME",
        "O'Level",
        "WAEC",
        "NECO",
        "NABTEB",
        "subject combination",
        "admission requirement",
        "Use of English",
        "Government/History",
        "Civic Education",
        "Economics",
        "Geography",
        "Agricultural Science",
        "Food and Nutrition",
        "Christian Religious Studies",
        "Literature-in-English",
        "Islamic Studies",
        "Arabic",
        "French",
        "Yoruba",
        "Hausa",
        "Commerce",
        "Marketing",
        "Financial Accounting",
        "English Language",
        "Mathematics"
      ],
      "answer": "For Special Education at NSUK, the JAMB combination must include Use of English; the candidate should choose 3 subject(s) from Government/History, Civic Education, Economics, Geography, Agricultural Science, Food and Nutrition, Christian Religious Studies, Literature-in-English, Islamic Studies, Arabic, French, Yoruba, Hausa, Commerce, Marketing, Financial Accounting to make four JAMB subjects. For O'Level, the candidate needs at least five credit passes including English Language, Mathematics. Accepted additional O'Level subjects include Government/History, Civic Education, Economics, Geography, Agricultural Science, Food and Nutrition, Christian Religious Studies, Literature-in-English, Islamic Studies, Arabic, French, Yoruba, Hausa, Commerce, Marketing, Financial Accounting.",
      "content": "Programme: Special Education\nSchool: Nasarawa State University, Keffi (NSUK)\nAcademic session: 2025/2026\nRequirement type: JAMB subject combination and O'Level combination.\nJAMB requirement: The candidate must register four JAMB subjects. Compulsory JAMB subject(s): Use of English. Optional JAMB subject(s): Government/History, Civic Education, Economics, Geography, Agricultural Science, Food and Nutrition, Christian Religious Studies, Literature-in-English, Islamic Studies, Arabic, French, Yoruba, Hausa, Commerce, Marketing, Financial Accounting. Optional subjects needed: 3.\nO'Level requirement: The candidate must have at least five credit passes from WAEC, NECO, NABTEB, or another accepted senior secondary examination. English Language and Mathematics are compulsory for O'Level. Programme-specific compulsory O'Level subject(s): none listed beyond English Language and Mathematics. Accepted optional O'Level subject(s): Government/History, Civic Education, Economics, Geography, Agricultural Science, Food and Nutrition, Christian Religious Studies, Literature-in-English, Islamic Studies, Arabic, French, Yoruba, Hausa, Commerce, Marketing, Financial Accounting.\nStudent guidance: The student should not assume that any subject is accepted. They should match both the JAMB requirement and the O'Level requirement for Special Education.",
      "questionVariants": [
        "What are the JAMB subjects for Special Education at NSUK?",
        "What O'Level subjects do I need for Special Education at NSUK?",
        "What is the subject combination for Special Education in NSUK?",
        "Can I study Special Education with my JAMB subjects?",
        "Can I study Special Education without one of the listed compulsory subjects?",
        "What optional subjects are accepted for Special Education?",
        "Is Mathematics compulsory for Special Education at NSUK?",
        "Is English Language compulsory for Special Education at NSUK?",
        "What WAEC or NECO subjects do I need for Special Education?",
        "Does the right JAMB combination mean I am fully qualified for Special Education?",
        "Can I use Government/History for Special Education at NSUK?",
        "Can I use Civic Education for Special Education at NSUK?",
        "Can I use Economics for Special Education at NSUK?",
        "Can I use Government/History for Special Education at NSUK?",
        "Can I use Civic Education for Special Education at NSUK?",
        "Can I use Economics for Special Education at NSUK?"
      ],
      "sourcePages": [
        11
      ],
      "reviewLevel": "normal",
      "sourceNotes": [
        "Source page(s): 11."
      ]
    },
    {
      "school": "Nasarawa State University, Keffi",
      "schoolShortName": "NSUK",
      "academicSession": "2025/2026",
      "sourceLabel": "NSUK Post UTME Subject Combination 2025/2026",
      "programme": "Library and Information Science",
      "slug": "nsuk-library-and-information-science-requirements",
      "categorySlug": "programme-requirements",
      "type": "programme",
      "status": "published",
      "title": "NSUK Library and Information Science Admission Subject Combination",
      "question": "What are the JAMB and O'Level subject requirements for Library and Information Science at NSUK?",
      "jamb": {
        "totalRequiredSubjects": 4,
        "compulsorySubjects": [
          "Use of English"
        ],
        "optionalChooseCount": 3,
        "optionalSubjects": [
          "Government/History",
          "Civic Education",
          "Economics",
          "Geography",
          "Agricultural Science",
          "Christian Religious Studies",
          "Literature-in-English",
          "Islamic Studies",
          "Arabic",
          "French",
          "Yoruba",
          "Hausa",
          "Commerce",
          "Marketing",
          "Financial Accounting"
        ],
        "requiredSubjectGroups": [],
        "ruleSummary": "Candidate must register four JAMB subjects. Use of English is compulsory. The remaining subjects must follow the compulsory and optional subject rules for this programme."
      },
      "olevel": {
        "minimumCredits": 5,
        "globalCompulsorySubjects": [
          "English Language",
          "Mathematics"
        ],
        "programmeSpecificCompulsorySubjects": [],
        "compulsorySubjects": [
          "English Language",
          "Mathematics"
        ],
        "optionalSubjects": [
          "Government/History",
          "Civic Education",
          "Economics",
          "Geography",
          "Agricultural Science",
          "Christian Religious Studies",
          "Literature-in-English",
          "Islamic Studies",
          "Arabic",
          "French",
          "Yoruba",
          "Hausa",
          "Commerce",
          "Marketing",
          "Financial Accounting"
        ],
        "acceptedExamTypes": [
          "WAEC",
          "NECO",
          "NABTEB",
          "Other accepted senior secondary examinations"
        ],
        "ruleSummary": "Candidate must have at least five O'Level credit passes, including English Language and Mathematics, plus the programme-specific required/accepted subjects."
      },
      "warnings": [
        "Use of English in JAMB is different from English Language in O'Level; both must be treated separately.",
        "Correct JAMB subjects do not automatically satisfy O'Level requirements.",
        "Optional subjects should be selected only from the approved list for this programme.",
        "O'Level requires at least five credit passes, including English Language and Mathematics.",
        "Where the source says 'Any three subjects', this seed restricts those choices to the approved subject context listed for the programme, not literally every subject."
      ],
      "needsReview": false,
      "keywords": [
        "NSUK",
        "Nasarawa State University, Keffi",
        "Library and Information Science",
        "JAMB",
        "UTME",
        "Post UTME",
        "O'Level",
        "WAEC",
        "NECO",
        "NABTEB",
        "subject combination",
        "admission requirement",
        "Use of English",
        "Government/History",
        "Civic Education",
        "Economics",
        "Geography",
        "Agricultural Science",
        "Christian Religious Studies",
        "Literature-in-English",
        "Islamic Studies",
        "Arabic",
        "French",
        "Yoruba",
        "Hausa",
        "Commerce",
        "Marketing",
        "Financial Accounting",
        "English Language",
        "Mathematics"
      ],
      "answer": "For Library and Information Science at NSUK, the JAMB combination must include Use of English; the candidate should choose 3 subject(s) from Government/History, Civic Education, Economics, Geography, Agricultural Science, Christian Religious Studies, Literature-in-English, Islamic Studies, Arabic, French, Yoruba, Hausa, Commerce, Marketing, Financial Accounting to make four JAMB subjects. For O'Level, the candidate needs at least five credit passes including English Language, Mathematics. Accepted additional O'Level subjects include Government/History, Civic Education, Economics, Geography, Agricultural Science, Christian Religious Studies, Literature-in-English, Islamic Studies, Arabic, French, Yoruba, Hausa, Commerce, Marketing, Financial Accounting.",
      "content": "Programme: Library and Information Science\nSchool: Nasarawa State University, Keffi (NSUK)\nAcademic session: 2025/2026\nRequirement type: JAMB subject combination and O'Level combination.\nJAMB requirement: The candidate must register four JAMB subjects. Compulsory JAMB subject(s): Use of English. Optional JAMB subject(s): Government/History, Civic Education, Economics, Geography, Agricultural Science, Christian Religious Studies, Literature-in-English, Islamic Studies, Arabic, French, Yoruba, Hausa, Commerce, Marketing, Financial Accounting. Optional subjects needed: 3.\nO'Level requirement: The candidate must have at least five credit passes from WAEC, NECO, NABTEB, or another accepted senior secondary examination. English Language and Mathematics are compulsory for O'Level. Programme-specific compulsory O'Level subject(s): none listed beyond English Language and Mathematics. Accepted optional O'Level subject(s): Government/History, Civic Education, Economics, Geography, Agricultural Science, Christian Religious Studies, Literature-in-English, Islamic Studies, Arabic, French, Yoruba, Hausa, Commerce, Marketing, Financial Accounting.\nStudent guidance: The student should not assume that any subject is accepted. They should match both the JAMB requirement and the O'Level requirement for Library and Information Science.",
      "questionVariants": [
        "What are the JAMB subjects for Library and Information Science at NSUK?",
        "What O'Level subjects do I need for Library and Information Science at NSUK?",
        "What is the subject combination for Library and Information Science in NSUK?",
        "Can I study Library and Information Science with my JAMB subjects?",
        "Can I study Library and Information Science without one of the listed compulsory subjects?",
        "What optional subjects are accepted for Library and Information Science?",
        "Is Mathematics compulsory for Library and Information Science at NSUK?",
        "Is English Language compulsory for Library and Information Science at NSUK?",
        "What WAEC or NECO subjects do I need for Library and Information Science?",
        "Does the right JAMB combination mean I am fully qualified for Library and Information Science?",
        "Can I use Government/History for Library and Information Science at NSUK?",
        "Can I use Civic Education for Library and Information Science at NSUK?",
        "Can I use Economics for Library and Information Science at NSUK?",
        "Can I use Government/History for Library and Information Science at NSUK?",
        "Can I use Civic Education for Library and Information Science at NSUK?",
        "Can I use Economics for Library and Information Science at NSUK?"
      ],
      "sourcePages": [
        11
      ],
      "reviewLevel": "normal",
      "sourceNotes": [
        "Source page(s): 11."
      ]
    },
    {
      "school": "Nasarawa State University, Keffi",
      "schoolShortName": "NSUK",
      "academicSession": "2025/2026",
      "sourceLabel": "NSUK Post UTME Subject Combination 2025/2026",
      "programme": "Home Economics Education",
      "slug": "nsuk-home-economics-education-requirements",
      "categorySlug": "programme-requirements",
      "type": "programme",
      "status": "published",
      "title": "NSUK Home Economics Education Admission Subject Combination",
      "question": "What are the JAMB and O'Level subject requirements for Home Economics Education at NSUK?",
      "jamb": {
        "totalRequiredSubjects": 4,
        "compulsorySubjects": [
          "Use of English",
          "Chemistry",
          "Biology/Agricultural Science"
        ],
        "optionalChooseCount": 1,
        "optionalSubjects": [
          "Economics",
          "Geography",
          "Government/History",
          "Food and Nutrition",
          "Christian Religious Studies",
          "Literature-in-English",
          "Islamic Studies",
          "Physics",
          "Civic Education"
        ],
        "requiredSubjectGroups": [
          {
            "slot": "Biology/Agricultural Science",
            "choose": 1,
            "options": [
              "Biology",
              "Agricultural Science"
            ]
          }
        ],
        "ruleSummary": "Candidate must register four JAMB subjects. Use of English is compulsory. The remaining subjects must follow the compulsory and optional subject rules for this programme."
      },
      "olevel": {
        "minimumCredits": 5,
        "globalCompulsorySubjects": [
          "English Language",
          "Mathematics"
        ],
        "programmeSpecificCompulsorySubjects": [
          "Home Economics",
          "Biology",
          "Chemistry"
        ],
        "compulsorySubjects": [
          "English Language",
          "Mathematics",
          "Home Economics",
          "Biology",
          "Chemistry"
        ],
        "optionalSubjects": [],
        "acceptedExamTypes": [
          "WAEC",
          "NECO",
          "NABTEB",
          "Other accepted senior secondary examinations"
        ],
        "ruleSummary": "Candidate must have at least five O'Level credit passes, including English Language and Mathematics, plus the programme-specific required/accepted subjects."
      },
      "warnings": [
        "Use of English in JAMB is different from English Language in O'Level; both must be treated separately.",
        "Correct JAMB subjects do not automatically satisfy O'Level requirements.",
        "Optional subjects should be selected only from the approved list for this programme.",
        "O'Level requires at least five credit passes, including English Language and Mathematics.",
        "A slash in a subject slot, such as Biology/Agricultural Science, means the source presents alternatives for that slot; validate carefully during eligibility checks.",
        "This row was split or ambiguous in the PDF layout and should be reviewed against the source before production import."
      ],
      "needsReview": true,
      "keywords": [
        "NSUK",
        "Nasarawa State University, Keffi",
        "Home Economics Education",
        "JAMB",
        "UTME",
        "Post UTME",
        "O'Level",
        "WAEC",
        "NECO",
        "NABTEB",
        "subject combination",
        "admission requirement",
        "Use of English",
        "Chemistry",
        "Biology/Agricultural Science",
        "Economics",
        "Geography",
        "Government/History",
        "Food and Nutrition",
        "Christian Religious Studies",
        "Literature-in-English",
        "Islamic Studies",
        "Physics",
        "Civic Education",
        "English Language",
        "Mathematics",
        "Home Economics",
        "Biology"
      ],
      "answer": "For Home Economics Education at NSUK, the JAMB combination must include Use of English, Chemistry, Biology/Agricultural Science; the candidate should choose 1 subject(s) from Economics, Geography, Government/History, Food and Nutrition, Christian Religious Studies, Literature-in-English, Islamic Studies, Physics, Civic Education to make four JAMB subjects. For O'Level, the candidate needs at least five credit passes including English Language, Mathematics, Home Economics, Biology, Chemistry. Accepted additional O'Level subjects include no additional optional subjects are listed.",
      "content": "Programme: Home Economics Education\nSchool: Nasarawa State University, Keffi (NSUK)\nAcademic session: 2025/2026\nRequirement type: JAMB subject combination and O'Level combination.\nJAMB requirement: The candidate must register four JAMB subjects. Compulsory JAMB subject(s): Use of English, Chemistry, Biology/Agricultural Science. Optional JAMB subject(s): Economics, Geography, Government/History, Food and Nutrition, Christian Religious Studies, Literature-in-English, Islamic Studies, Physics, Civic Education. Optional subjects needed: 1.\nO'Level requirement: The candidate must have at least five credit passes from WAEC, NECO, NABTEB, or another accepted senior secondary examination. English Language and Mathematics are compulsory for O'Level. Programme-specific compulsory O'Level subject(s): Home Economics, Biology, Chemistry. Accepted optional O'Level subject(s): no additional optional subjects are listed.\nStudent guidance: The student should not assume that any subject is accepted. They should match both the JAMB requirement and the O'Level requirement for Home Economics Education.",
      "questionVariants": [
        "What are the JAMB subjects for Home Economics Education at NSUK?",
        "What O'Level subjects do I need for Home Economics Education at NSUK?",
        "What is the subject combination for Home Economics Education in NSUK?",
        "Can I study Home Economics Education with my JAMB subjects?",
        "Can I study Home Economics Education without one of the listed compulsory subjects?",
        "What optional subjects are accepted for Home Economics Education?",
        "Is Mathematics compulsory for Home Economics Education at NSUK?",
        "Is English Language compulsory for Home Economics Education at NSUK?",
        "What WAEC or NECO subjects do I need for Home Economics Education?",
        "Does the right JAMB combination mean I am fully qualified for Home Economics Education?",
        "Can I use Economics for Home Economics Education at NSUK?",
        "Can I use Geography for Home Economics Education at NSUK?",
        "Can I use Government/History for Home Economics Education at NSUK?"
      ],
      "sourcePages": [
        11,
        12
      ],
      "reviewLevel": "manual_check_recommended",
      "sourceNotes": [
        "Source page(s): 11, 12."
      ]
    },
    {
      "school": "Nasarawa State University, Keffi",
      "schoolShortName": "NSUK",
      "academicSession": "2025/2026",
      "sourceLabel": "NSUK Post UTME Subject Combination 2025/2026",
      "programme": "Educational Management",
      "slug": "nsuk-educational-management-requirements",
      "categorySlug": "programme-requirements",
      "type": "programme",
      "status": "published",
      "title": "NSUK Educational Management Admission Subject Combination",
      "question": "What are the JAMB and O'Level subject requirements for Educational Management at NSUK?",
      "jamb": {
        "totalRequiredSubjects": 4,
        "compulsorySubjects": [
          "Use of English",
          "Economics",
          "Mathematics"
        ],
        "optionalChooseCount": 1,
        "optionalSubjects": [
          "Government/History",
          "Civic Education",
          "Geography",
          "Christian Religious Studies",
          "Literature-in-English",
          "Islamic Studies",
          "Arabic",
          "French",
          "Yoruba",
          "Hausa"
        ],
        "requiredSubjectGroups": [],
        "ruleSummary": "Candidate must register four JAMB subjects. Use of English is compulsory. The remaining subjects must follow the compulsory and optional subject rules for this programme."
      },
      "olevel": {
        "minimumCredits": 5,
        "globalCompulsorySubjects": [
          "English Language",
          "Mathematics"
        ],
        "programmeSpecificCompulsorySubjects": [],
        "compulsorySubjects": [
          "English Language",
          "Mathematics"
        ],
        "optionalSubjects": [
          "Government/History",
          "Civic Education",
          "Economics",
          "Geography",
          "Christian Religious Studies",
          "Literature-in-English",
          "Islamic Studies",
          "Arabic",
          "French",
          "Yoruba",
          "Hausa"
        ],
        "acceptedExamTypes": [
          "WAEC",
          "NECO",
          "NABTEB",
          "Other accepted senior secondary examinations"
        ],
        "ruleSummary": "Candidate must have at least five O'Level credit passes, including English Language and Mathematics, plus the programme-specific required/accepted subjects."
      },
      "warnings": [
        "Use of English in JAMB is different from English Language in O'Level; both must be treated separately.",
        "Correct JAMB subjects do not automatically satisfy O'Level requirements.",
        "Optional subjects should be selected only from the approved list for this programme.",
        "O'Level requires at least five credit passes, including English Language and Mathematics."
      ],
      "needsReview": false,
      "keywords": [
        "NSUK",
        "Nasarawa State University, Keffi",
        "Educational Management",
        "JAMB",
        "UTME",
        "Post UTME",
        "O'Level",
        "WAEC",
        "NECO",
        "NABTEB",
        "subject combination",
        "admission requirement",
        "Use of English",
        "Economics",
        "Mathematics",
        "Government/History",
        "Civic Education",
        "Geography",
        "Christian Religious Studies",
        "Literature-in-English",
        "Islamic Studies",
        "Arabic",
        "French",
        "Yoruba",
        "Hausa",
        "English Language"
      ],
      "answer": "For Educational Management at NSUK, the JAMB combination must include Use of English, Economics, Mathematics; the candidate should choose 1 subject(s) from Government/History, Civic Education, Geography, Christian Religious Studies, Literature-in-English, Islamic Studies, Arabic, French, Yoruba, Hausa to make four JAMB subjects. For O'Level, the candidate needs at least five credit passes including English Language, Mathematics. Accepted additional O'Level subjects include Government/History, Civic Education, Economics, Geography, Christian Religious Studies, Literature-in-English, Islamic Studies, Arabic, French, Yoruba, Hausa.",
      "content": "Programme: Educational Management\nSchool: Nasarawa State University, Keffi (NSUK)\nAcademic session: 2025/2026\nRequirement type: JAMB subject combination and O'Level combination.\nJAMB requirement: The candidate must register four JAMB subjects. Compulsory JAMB subject(s): Use of English, Economics, Mathematics. Optional JAMB subject(s): Government/History, Civic Education, Geography, Christian Religious Studies, Literature-in-English, Islamic Studies, Arabic, French, Yoruba, Hausa. Optional subjects needed: 1.\nO'Level requirement: The candidate must have at least five credit passes from WAEC, NECO, NABTEB, or another accepted senior secondary examination. English Language and Mathematics are compulsory for O'Level. Programme-specific compulsory O'Level subject(s): none listed beyond English Language and Mathematics. Accepted optional O'Level subject(s): Government/History, Civic Education, Economics, Geography, Christian Religious Studies, Literature-in-English, Islamic Studies, Arabic, French, Yoruba, Hausa.\nStudent guidance: The student should not assume that any subject is accepted. They should match both the JAMB requirement and the O'Level requirement for Educational Management.",
      "questionVariants": [
        "What are the JAMB subjects for Educational Management at NSUK?",
        "What O'Level subjects do I need for Educational Management at NSUK?",
        "What is the subject combination for Educational Management in NSUK?",
        "Can I study Educational Management with my JAMB subjects?",
        "Can I study Educational Management without one of the listed compulsory subjects?",
        "What optional subjects are accepted for Educational Management?",
        "Is Mathematics compulsory for Educational Management at NSUK?",
        "Is English Language compulsory for Educational Management at NSUK?",
        "What WAEC or NECO subjects do I need for Educational Management?",
        "Does the right JAMB combination mean I am fully qualified for Educational Management?",
        "Can I use Government/History for Educational Management at NSUK?",
        "Can I use Civic Education for Educational Management at NSUK?",
        "Can I use Geography for Educational Management at NSUK?",
        "Can I use Government/History for Educational Management at NSUK?",
        "Can I use Civic Education for Educational Management at NSUK?",
        "Can I use Economics for Educational Management at NSUK?"
      ],
      "sourcePages": [
        12
      ],
      "reviewLevel": "normal",
      "sourceNotes": [
        "Source page(s): 12."
      ]
    },
    {
      "school": "Nasarawa State University, Keffi",
      "schoolShortName": "NSUK",
      "academicSession": "2025/2026",
      "sourceLabel": "NSUK Post UTME Subject Combination 2025/2026",
      "programme": "Early Child Education",
      "slug": "nsuk-early-child-education-requirements",
      "categorySlug": "programme-requirements",
      "type": "programme",
      "status": "published",
      "title": "NSUK Early Child Education Admission Subject Combination",
      "question": "What are the JAMB and O'Level subject requirements for Early Child Education at NSUK?",
      "jamb": {
        "totalRequiredSubjects": 4,
        "compulsorySubjects": [
          "Use of English"
        ],
        "optionalChooseCount": 3,
        "optionalSubjects": [
          "Any three Subject"
        ],
        "requiredSubjectGroups": [],
        "ruleSummary": "Candidate must register four JAMB subjects. Use of English is compulsory. The remaining subjects must follow the compulsory and optional subject rules for this programme."
      },
      "olevel": {
        "minimumCredits": 5,
        "globalCompulsorySubjects": [
          "English Language",
          "Mathematics"
        ],
        "programmeSpecificCompulsorySubjects": [],
        "compulsorySubjects": [
          "English Language",
          "Mathematics"
        ],
        "optionalSubjects": [
          "Any three Subject"
        ],
        "acceptedExamTypes": [
          "WAEC",
          "NECO",
          "NABTEB",
          "Other accepted senior secondary examinations"
        ],
        "ruleSummary": "Candidate must have at least five O'Level credit passes, including English Language and Mathematics, plus the programme-specific required/accepted subjects."
      },
      "warnings": [
        "Use of English in JAMB is different from English Language in O'Level; both must be treated separately.",
        "Correct JAMB subjects do not automatically satisfy O'Level requirements.",
        "Optional subjects should be selected only from the approved list for this programme.",
        "O'Level requires at least five credit passes, including English Language and Mathematics.",
        "Where the source says 'Any three subjects', this seed restricts those choices to the approved subject context listed for the programme, not literally every subject.",
        "This row was split or ambiguous in the PDF layout and should be reviewed against the source before production import."
      ],
      "needsReview": true,
      "keywords": [
        "NSUK",
        "Nasarawa State University, Keffi",
        "Early Child Education",
        "JAMB",
        "UTME",
        "Post UTME",
        "O'Level",
        "WAEC",
        "NECO",
        "NABTEB",
        "subject combination",
        "admission requirement",
        "Use of English",
        "Any three Subject",
        "English Language",
        "Mathematics"
      ],
      "answer": "For Early Child Education at NSUK, the JAMB combination must include Use of English; the candidate should choose 3 subject(s) from Any three Subject to make four JAMB subjects. For O'Level, the candidate needs at least five credit passes including English Language, Mathematics. Accepted additional O'Level subjects include Any three Subject.",
      "content": "Programme: Early Child Education\nSchool: Nasarawa State University, Keffi (NSUK)\nAcademic session: 2025/2026\nRequirement type: JAMB subject combination and O'Level combination.\nJAMB requirement: The candidate must register four JAMB subjects. Compulsory JAMB subject(s): Use of English. Optional JAMB subject(s): Any three Subject. Optional subjects needed: 3.\nO'Level requirement: The candidate must have at least five credit passes from WAEC, NECO, NABTEB, or another accepted senior secondary examination. English Language and Mathematics are compulsory for O'Level. Programme-specific compulsory O'Level subject(s): none listed beyond English Language and Mathematics. Accepted optional O'Level subject(s): Any three Subject.\nStudent guidance: The student should not assume that any subject is accepted. They should match both the JAMB requirement and the O'Level requirement for Early Child Education.",
      "questionVariants": [
        "What are the JAMB subjects for Early Child Education at NSUK?",
        "What O'Level subjects do I need for Early Child Education at NSUK?",
        "What is the subject combination for Early Child Education in NSUK?",
        "Can I study Early Child Education with my JAMB subjects?",
        "Can I study Early Child Education without one of the listed compulsory subjects?",
        "What optional subjects are accepted for Early Child Education?",
        "Is Mathematics compulsory for Early Child Education at NSUK?",
        "Is English Language compulsory for Early Child Education at NSUK?",
        "What WAEC or NECO subjects do I need for Early Child Education?",
        "Does the right JAMB combination mean I am fully qualified for Early Child Education?",
        "Can I use Any three Subject for Early Child Education at NSUK?",
        "Can I use Any three Subject for Early Child Education at NSUK?"
      ],
      "sourcePages": [
        12
      ],
      "reviewLevel": "manual_check_recommended",
      "sourceNotes": [
        "Source page(s): 12."
      ]
    },
    {
      "school": "Nasarawa State University, Keffi",
      "schoolShortName": "NSUK",
      "academicSession": "2025/2026",
      "sourceLabel": "NSUK Post UTME Subject Combination 2025/2026",
      "programme": "Primary Education Studies",
      "slug": "nsuk-primary-education-studies-requirements",
      "categorySlug": "programme-requirements",
      "type": "programme",
      "status": "published",
      "title": "NSUK Primary Education Studies Admission Subject Combination",
      "question": "What are the JAMB and O'Level subject requirements for Primary Education Studies at NSUK?",
      "jamb": {
        "totalRequiredSubjects": 4,
        "compulsorySubjects": [
          "Use of English"
        ],
        "optionalChooseCount": 3,
        "optionalSubjects": [
          "Any three Subject"
        ],
        "requiredSubjectGroups": [],
        "ruleSummary": "Candidate must register four JAMB subjects. Use of English is compulsory. The remaining subjects must follow the compulsory and optional subject rules for this programme."
      },
      "olevel": {
        "minimumCredits": 5,
        "globalCompulsorySubjects": [
          "English Language",
          "Mathematics"
        ],
        "programmeSpecificCompulsorySubjects": [],
        "compulsorySubjects": [
          "English Language",
          "Mathematics"
        ],
        "optionalSubjects": [
          "Any three Subject"
        ],
        "acceptedExamTypes": [
          "WAEC",
          "NECO",
          "NABTEB",
          "Other accepted senior secondary examinations"
        ],
        "ruleSummary": "Candidate must have at least five O'Level credit passes, including English Language and Mathematics, plus the programme-specific required/accepted subjects."
      },
      "warnings": [
        "Use of English in JAMB is different from English Language in O'Level; both must be treated separately.",
        "Correct JAMB subjects do not automatically satisfy O'Level requirements.",
        "Optional subjects should be selected only from the approved list for this programme.",
        "O'Level requires at least five credit passes, including English Language and Mathematics.",
        "Where the source says 'Any three subjects', this seed restricts those choices to the approved subject context listed for the programme, not literally every subject.",
        "This row was split or ambiguous in the PDF layout and should be reviewed against the source before production import."
      ],
      "needsReview": true,
      "keywords": [
        "NSUK",
        "Nasarawa State University, Keffi",
        "Primary Education Studies",
        "JAMB",
        "UTME",
        "Post UTME",
        "O'Level",
        "WAEC",
        "NECO",
        "NABTEB",
        "subject combination",
        "admission requirement",
        "Use of English",
        "Any three Subject",
        "English Language",
        "Mathematics"
      ],
      "answer": "For Primary Education Studies at NSUK, the JAMB combination must include Use of English; the candidate should choose 3 subject(s) from Any three Subject to make four JAMB subjects. For O'Level, the candidate needs at least five credit passes including English Language, Mathematics. Accepted additional O'Level subjects include Any three Subject.",
      "content": "Programme: Primary Education Studies\nSchool: Nasarawa State University, Keffi (NSUK)\nAcademic session: 2025/2026\nRequirement type: JAMB subject combination and O'Level combination.\nJAMB requirement: The candidate must register four JAMB subjects. Compulsory JAMB subject(s): Use of English. Optional JAMB subject(s): Any three Subject. Optional subjects needed: 3.\nO'Level requirement: The candidate must have at least five credit passes from WAEC, NECO, NABTEB, or another accepted senior secondary examination. English Language and Mathematics are compulsory for O'Level. Programme-specific compulsory O'Level subject(s): none listed beyond English Language and Mathematics. Accepted optional O'Level subject(s): Any three Subject.\nStudent guidance: The student should not assume that any subject is accepted. They should match both the JAMB requirement and the O'Level requirement for Primary Education Studies.",
      "questionVariants": [
        "What are the JAMB subjects for Primary Education Studies at NSUK?",
        "What O'Level subjects do I need for Primary Education Studies at NSUK?",
        "What is the subject combination for Primary Education Studies in NSUK?",
        "Can I study Primary Education Studies with my JAMB subjects?",
        "Can I study Primary Education Studies without one of the listed compulsory subjects?",
        "What optional subjects are accepted for Primary Education Studies?",
        "Is Mathematics compulsory for Primary Education Studies at NSUK?",
        "Is English Language compulsory for Primary Education Studies at NSUK?",
        "What WAEC or NECO subjects do I need for Primary Education Studies?",
        "Does the right JAMB combination mean I am fully qualified for Primary Education Studies?",
        "Can I use Any three Subject for Primary Education Studies at NSUK?",
        "Can I use Any three Subject for Primary Education Studies at NSUK?"
      ],
      "sourcePages": [
        12
      ],
      "reviewLevel": "manual_check_recommended",
      "sourceNotes": [
        "Source page(s): 12."
      ]
    },
    {
      "school": "Nasarawa State University, Keffi",
      "schoolShortName": "NSUK",
      "academicSession": "2025/2026",
      "sourceLabel": "NSUK Post UTME Subject Combination 2025/2026",
      "programme": "Agricultural Science Education",
      "slug": "nsuk-agricultural-science-education-requirements",
      "categorySlug": "programme-requirements",
      "type": "programme",
      "status": "published",
      "title": "NSUK Agricultural Science Education Admission Subject Combination",
      "question": "What are the JAMB and O'Level subject requirements for Agricultural Science Education at NSUK?",
      "jamb": {
        "totalRequiredSubjects": 4,
        "compulsorySubjects": [
          "Use of English"
        ],
        "optionalChooseCount": 3,
        "optionalSubjects": [
          "Chemistry",
          "Biology",
          "Agricultural Science",
          "Physics",
          "Economics",
          "Geography",
          "Mathematics"
        ],
        "requiredSubjectGroups": [],
        "ruleSummary": "Candidate must register four JAMB subjects. Use of English is compulsory. The remaining subjects must follow the compulsory and optional subject rules for this programme."
      },
      "olevel": {
        "minimumCredits": 5,
        "globalCompulsorySubjects": [
          "English Language",
          "Mathematics"
        ],
        "programmeSpecificCompulsorySubjects": [
          "Chemistry",
          "Biology/Agricultural Science"
        ],
        "compulsorySubjects": [
          "English Language",
          "Mathematics",
          "Chemistry",
          "Biology/Agricultural Science"
        ],
        "optionalSubjects": [
          "Physics",
          "Food and Nutrition"
        ],
        "acceptedExamTypes": [
          "WAEC",
          "NECO",
          "NABTEB",
          "Other accepted senior secondary examinations"
        ],
        "ruleSummary": "Candidate must have at least five O'Level credit passes, including English Language and Mathematics, plus the programme-specific required/accepted subjects."
      },
      "warnings": [
        "Use of English in JAMB is different from English Language in O'Level; both must be treated separately.",
        "Correct JAMB subjects do not automatically satisfy O'Level requirements.",
        "Optional subjects should be selected only from the approved list for this programme.",
        "O'Level requires at least five credit passes, including English Language and Mathematics."
      ],
      "needsReview": false,
      "keywords": [
        "NSUK",
        "Nasarawa State University, Keffi",
        "Agricultural Science Education",
        "JAMB",
        "UTME",
        "Post UTME",
        "O'Level",
        "WAEC",
        "NECO",
        "NABTEB",
        "subject combination",
        "admission requirement",
        "Use of English",
        "Chemistry",
        "Biology",
        "Agricultural Science",
        "Physics",
        "Economics",
        "Geography",
        "Mathematics",
        "English Language",
        "Biology/Agricultural Science",
        "Food and Nutrition"
      ],
      "answer": "For Agricultural Science Education at NSUK, the JAMB combination must include Use of English; the candidate should choose 3 subject(s) from Chemistry, Biology, Agricultural Science, Physics, Economics, Geography, Mathematics to make four JAMB subjects. For O'Level, the candidate needs at least five credit passes including English Language, Mathematics, Chemistry, Biology/Agricultural Science. Accepted additional O'Level subjects include Physics, Food and Nutrition.",
      "content": "Programme: Agricultural Science Education\nSchool: Nasarawa State University, Keffi (NSUK)\nAcademic session: 2025/2026\nRequirement type: JAMB subject combination and O'Level combination.\nJAMB requirement: The candidate must register four JAMB subjects. Compulsory JAMB subject(s): Use of English. Optional JAMB subject(s): Chemistry, Biology, Agricultural Science, Physics, Economics, Geography, Mathematics. Optional subjects needed: 3.\nO'Level requirement: The candidate must have at least five credit passes from WAEC, NECO, NABTEB, or another accepted senior secondary examination. English Language and Mathematics are compulsory for O'Level. Programme-specific compulsory O'Level subject(s): Chemistry, Biology/Agricultural Science. Accepted optional O'Level subject(s): Physics, Food and Nutrition.\nStudent guidance: The student should not assume that any subject is accepted. They should match both the JAMB requirement and the O'Level requirement for Agricultural Science Education.",
      "questionVariants": [
        "What are the JAMB subjects for Agricultural Science Education at NSUK?",
        "What O'Level subjects do I need for Agricultural Science Education at NSUK?",
        "What is the subject combination for Agricultural Science Education in NSUK?",
        "Can I study Agricultural Science Education with my JAMB subjects?",
        "Can I study Agricultural Science Education without one of the listed compulsory subjects?",
        "What optional subjects are accepted for Agricultural Science Education?",
        "Is Mathematics compulsory for Agricultural Science Education at NSUK?",
        "Is English Language compulsory for Agricultural Science Education at NSUK?",
        "What WAEC or NECO subjects do I need for Agricultural Science Education?",
        "Does the right JAMB combination mean I am fully qualified for Agricultural Science Education?",
        "Can I use Chemistry for Agricultural Science Education at NSUK?",
        "Can I use Biology for Agricultural Science Education at NSUK?",
        "Can I use Agricultural Science for Agricultural Science Education at NSUK?",
        "Can I use Physics for Agricultural Science Education at NSUK?",
        "Can I use Food and Nutrition for Agricultural Science Education at NSUK?"
      ],
      "sourcePages": [
        12
      ],
      "reviewLevel": "normal",
      "sourceNotes": [
        "Source page(s): 12."
      ]
    },
    {
      "school": "Nasarawa State University, Keffi",
      "schoolShortName": "NSUK",
      "academicSession": "2025/2026",
      "sourceLabel": "NSUK Post UTME Subject Combination 2025/2026",
      "programme": "Geography",
      "slug": "nsuk-geography-requirements",
      "categorySlug": "programme-requirements",
      "type": "programme",
      "status": "published",
      "title": "NSUK Geography Admission Subject Combination",
      "question": "What are the JAMB and O'Level subject requirements for Geography at NSUK?",
      "jamb": {
        "totalRequiredSubjects": 4,
        "compulsorySubjects": [
          "Use of English",
          "Geography"
        ],
        "optionalChooseCount": 2,
        "optionalSubjects": [
          "Government/History",
          "Civic Education",
          "Economics",
          "Christian Religious Studies",
          "Literature-in-English",
          "Islamic Studies",
          "Arabic",
          "French",
          "Yoruba",
          "Hausa"
        ],
        "requiredSubjectGroups": [],
        "ruleSummary": "Candidate must register four JAMB subjects. Use of English is compulsory. The remaining subjects must follow the compulsory and optional subject rules for this programme."
      },
      "olevel": {
        "minimumCredits": 5,
        "globalCompulsorySubjects": [
          "English Language",
          "Mathematics"
        ],
        "programmeSpecificCompulsorySubjects": [
          "Geography"
        ],
        "compulsorySubjects": [
          "English Language",
          "Mathematics",
          "Geography"
        ],
        "optionalSubjects": [
          "Government/History",
          "Civic Education",
          "Economics",
          "Christian Religious Studies",
          "Literature-in-English",
          "Islamic Studies",
          "Arabic",
          "French",
          "Yoruba",
          "Hausa"
        ],
        "acceptedExamTypes": [
          "WAEC",
          "NECO",
          "NABTEB",
          "Other accepted senior secondary examinations"
        ],
        "ruleSummary": "Candidate must have at least five O'Level credit passes, including English Language and Mathematics, plus the programme-specific required/accepted subjects."
      },
      "warnings": [
        "Use of English in JAMB is different from English Language in O'Level; both must be treated separately.",
        "Correct JAMB subjects do not automatically satisfy O'Level requirements.",
        "Optional subjects should be selected only from the approved list for this programme.",
        "O'Level requires at least five credit passes, including English Language and Mathematics."
      ],
      "needsReview": false,
      "keywords": [
        "NSUK",
        "Nasarawa State University, Keffi",
        "Geography",
        "JAMB",
        "UTME",
        "Post UTME",
        "O'Level",
        "WAEC",
        "NECO",
        "NABTEB",
        "subject combination",
        "admission requirement",
        "Use of English",
        "Government/History",
        "Civic Education",
        "Economics",
        "Christian Religious Studies",
        "Literature-in-English",
        "Islamic Studies",
        "Arabic",
        "French",
        "Yoruba",
        "Hausa",
        "English Language",
        "Mathematics"
      ],
      "answer": "For Geography at NSUK, the JAMB combination must include Use of English, Geography; the candidate should choose 2 subject(s) from Government/History, Civic Education, Economics, Christian Religious Studies, Literature-in-English, Islamic Studies, Arabic, French, Yoruba, Hausa to make four JAMB subjects. For O'Level, the candidate needs at least five credit passes including English Language, Mathematics, Geography. Accepted additional O'Level subjects include Government/History, Civic Education, Economics, Christian Religious Studies, Literature-in-English, Islamic Studies, Arabic, French, Yoruba, Hausa.",
      "content": "Programme: Geography\nSchool: Nasarawa State University, Keffi (NSUK)\nAcademic session: 2025/2026\nRequirement type: JAMB subject combination and O'Level combination.\nJAMB requirement: The candidate must register four JAMB subjects. Compulsory JAMB subject(s): Use of English, Geography. Optional JAMB subject(s): Government/History, Civic Education, Economics, Christian Religious Studies, Literature-in-English, Islamic Studies, Arabic, French, Yoruba, Hausa. Optional subjects needed: 2.\nO'Level requirement: The candidate must have at least five credit passes from WAEC, NECO, NABTEB, or another accepted senior secondary examination. English Language and Mathematics are compulsory for O'Level. Programme-specific compulsory O'Level subject(s): Geography. Accepted optional O'Level subject(s): Government/History, Civic Education, Economics, Christian Religious Studies, Literature-in-English, Islamic Studies, Arabic, French, Yoruba, Hausa.\nStudent guidance: The student should not assume that any subject is accepted. They should match both the JAMB requirement and the O'Level requirement for Geography.",
      "questionVariants": [
        "What are the JAMB subjects for Geography at NSUK?",
        "What O'Level subjects do I need for Geography at NSUK?",
        "What is the subject combination for Geography in NSUK?",
        "Can I study Geography with my JAMB subjects?",
        "Can I study Geography without one of the listed compulsory subjects?",
        "What optional subjects are accepted for Geography?",
        "Is Mathematics compulsory for Geography at NSUK?",
        "Is English Language compulsory for Geography at NSUK?",
        "What WAEC or NECO subjects do I need for Geography?",
        "Does the right JAMB combination mean I am fully qualified for Geography?",
        "Can I use Government/History for Geography at NSUK?",
        "Can I use Civic Education for Geography at NSUK?",
        "Can I use Economics for Geography at NSUK?",
        "Can I use Government/History for Geography at NSUK?",
        "Can I use Civic Education for Geography at NSUK?",
        "Can I use Economics for Geography at NSUK?"
      ],
      "sourcePages": [
        12,
        13
      ],
      "reviewLevel": "normal",
      "sourceNotes": [
        "Source page(s): 12, 13."
      ]
    },
    {
      "school": "Nasarawa State University, Keffi",
      "schoolShortName": "NSUK",
      "academicSession": "2025/2026",
      "sourceLabel": "NSUK Post UTME Subject Combination 2025/2026",
      "programme": "Urban and Regional Planning",
      "slug": "nsuk-urban-and-regional-planning-requirements",
      "categorySlug": "programme-requirements",
      "type": "programme",
      "status": "published",
      "title": "NSUK Urban and Regional Planning Admission Subject Combination",
      "question": "What are the JAMB and O'Level subject requirements for Urban and Regional Planning at NSUK?",
      "jamb": {
        "totalRequiredSubjects": 4,
        "compulsorySubjects": [
          "Use of English",
          "Geography"
        ],
        "optionalChooseCount": 2,
        "optionalSubjects": [
          "Economics",
          "Physics",
          "Chemistry"
        ],
        "requiredSubjectGroups": [],
        "ruleSummary": "Candidate must register four JAMB subjects. Use of English is compulsory. The remaining subjects must follow the compulsory and optional subject rules for this programme."
      },
      "olevel": {
        "minimumCredits": 5,
        "globalCompulsorySubjects": [
          "English Language",
          "Mathematics"
        ],
        "programmeSpecificCompulsorySubjects": [
          "Geography"
        ],
        "compulsorySubjects": [
          "English Language",
          "Mathematics",
          "Geography"
        ],
        "optionalSubjects": [
          "Physics",
          "Chemistry",
          "Economics",
          "Government",
          "Biology",
          "Technical Drawing"
        ],
        "acceptedExamTypes": [
          "WAEC",
          "NECO",
          "NABTEB",
          "Other accepted senior secondary examinations"
        ],
        "ruleSummary": "Candidate must have at least five O'Level credit passes, including English Language and Mathematics, plus the programme-specific required/accepted subjects."
      },
      "warnings": [
        "Use of English in JAMB is different from English Language in O'Level; both must be treated separately.",
        "Correct JAMB subjects do not automatically satisfy O'Level requirements.",
        "Optional subjects should be selected only from the approved list for this programme.",
        "O'Level requires at least five credit passes, including English Language and Mathematics."
      ],
      "needsReview": false,
      "keywords": [
        "NSUK",
        "Nasarawa State University, Keffi",
        "Urban and Regional Planning",
        "JAMB",
        "UTME",
        "Post UTME",
        "O'Level",
        "WAEC",
        "NECO",
        "NABTEB",
        "subject combination",
        "admission requirement",
        "Use of English",
        "Geography",
        "Economics",
        "Physics",
        "Chemistry",
        "English Language",
        "Mathematics",
        "Government",
        "Biology",
        "Technical Drawing"
      ],
      "answer": "For Urban and Regional Planning at NSUK, the JAMB combination must include Use of English, Geography; the candidate should choose 2 subject(s) from Economics, Physics, Chemistry to make four JAMB subjects. For O'Level, the candidate needs at least five credit passes including English Language, Mathematics, Geography. Accepted additional O'Level subjects include Physics, Chemistry, Economics, Government, Biology, Technical Drawing.",
      "content": "Programme: Urban and Regional Planning\nSchool: Nasarawa State University, Keffi (NSUK)\nAcademic session: 2025/2026\nRequirement type: JAMB subject combination and O'Level combination.\nJAMB requirement: The candidate must register four JAMB subjects. Compulsory JAMB subject(s): Use of English, Geography. Optional JAMB subject(s): Economics, Physics, Chemistry. Optional subjects needed: 2.\nO'Level requirement: The candidate must have at least five credit passes from WAEC, NECO, NABTEB, or another accepted senior secondary examination. English Language and Mathematics are compulsory for O'Level. Programme-specific compulsory O'Level subject(s): Geography. Accepted optional O'Level subject(s): Physics, Chemistry, Economics, Government, Biology, Technical Drawing.\nStudent guidance: The student should not assume that any subject is accepted. They should match both the JAMB requirement and the O'Level requirement for Urban and Regional Planning.",
      "questionVariants": [
        "What are the JAMB subjects for Urban and Regional Planning at NSUK?",
        "What O'Level subjects do I need for Urban and Regional Planning at NSUK?",
        "What is the subject combination for Urban and Regional Planning in NSUK?",
        "Can I study Urban and Regional Planning with my JAMB subjects?",
        "Can I study Urban and Regional Planning without one of the listed compulsory subjects?",
        "What optional subjects are accepted for Urban and Regional Planning?",
        "Is Mathematics compulsory for Urban and Regional Planning at NSUK?",
        "Is English Language compulsory for Urban and Regional Planning at NSUK?",
        "What WAEC or NECO subjects do I need for Urban and Regional Planning?",
        "Does the right JAMB combination mean I am fully qualified for Urban and Regional Planning?",
        "Can I use Economics for Urban and Regional Planning at NSUK?",
        "Can I use Physics for Urban and Regional Planning at NSUK?",
        "Can I use Chemistry for Urban and Regional Planning at NSUK?",
        "Can I use Physics for Urban and Regional Planning at NSUK?",
        "Can I use Chemistry for Urban and Regional Planning at NSUK?",
        "Can I use Economics for Urban and Regional Planning at NSUK?"
      ],
      "sourcePages": [
        13
      ],
      "reviewLevel": "normal",
      "sourceNotes": [
        "Source page(s): 13."
      ]
    },
    {
      "school": "Nasarawa State University, Keffi",
      "schoolShortName": "NSUK",
      "academicSession": "2025/2026",
      "sourceLabel": "NSUK Post UTME Subject Combination 2025/2026",
      "programme": "Environmental Management",
      "slug": "nsuk-environmental-management-requirements",
      "categorySlug": "programme-requirements",
      "type": "programme",
      "status": "published",
      "title": "NSUK Environmental Management Admission Subject Combination",
      "question": "What are the JAMB and O'Level subject requirements for Environmental Management at NSUK?",
      "jamb": {
        "totalRequiredSubjects": 4,
        "compulsorySubjects": [
          "Use of English",
          "Geography"
        ],
        "optionalChooseCount": 2,
        "optionalSubjects": [
          "Chemistry",
          "Physics",
          "Economics"
        ],
        "requiredSubjectGroups": [],
        "ruleSummary": "Candidate must register four JAMB subjects. Use of English is compulsory. The remaining subjects must follow the compulsory and optional subject rules for this programme."
      },
      "olevel": {
        "minimumCredits": 5,
        "globalCompulsorySubjects": [
          "English Language",
          "Mathematics"
        ],
        "programmeSpecificCompulsorySubjects": [],
        "compulsorySubjects": [
          "English Language",
          "Mathematics"
        ],
        "optionalSubjects": [
          "Geography/Agricultural Science",
          "Biology",
          "Physics",
          "Chemistry"
        ],
        "acceptedExamTypes": [
          "WAEC",
          "NECO",
          "NABTEB",
          "Other accepted senior secondary examinations"
        ],
        "ruleSummary": "Candidate must have at least five O'Level credit passes, including English Language and Mathematics, plus the programme-specific required/accepted subjects."
      },
      "warnings": [
        "Use of English in JAMB is different from English Language in O'Level; both must be treated separately.",
        "Correct JAMB subjects do not automatically satisfy O'Level requirements.",
        "Optional subjects should be selected only from the approved list for this programme.",
        "O'Level requires at least five credit passes, including English Language and Mathematics."
      ],
      "needsReview": false,
      "keywords": [
        "NSUK",
        "Nasarawa State University, Keffi",
        "Environmental Management",
        "JAMB",
        "UTME",
        "Post UTME",
        "O'Level",
        "WAEC",
        "NECO",
        "NABTEB",
        "subject combination",
        "admission requirement",
        "Use of English",
        "Geography",
        "Chemistry",
        "Physics",
        "Economics",
        "English Language",
        "Mathematics",
        "Geography/Agricultural Science",
        "Biology"
      ],
      "answer": "For Environmental Management at NSUK, the JAMB combination must include Use of English, Geography; the candidate should choose 2 subject(s) from Chemistry, Physics, Economics to make four JAMB subjects. For O'Level, the candidate needs at least five credit passes including English Language, Mathematics. Accepted additional O'Level subjects include Geography/Agricultural Science, Biology, Physics, Chemistry.",
      "content": "Programme: Environmental Management\nSchool: Nasarawa State University, Keffi (NSUK)\nAcademic session: 2025/2026\nRequirement type: JAMB subject combination and O'Level combination.\nJAMB requirement: The candidate must register four JAMB subjects. Compulsory JAMB subject(s): Use of English, Geography. Optional JAMB subject(s): Chemistry, Physics, Economics. Optional subjects needed: 2.\nO'Level requirement: The candidate must have at least five credit passes from WAEC, NECO, NABTEB, or another accepted senior secondary examination. English Language and Mathematics are compulsory for O'Level. Programme-specific compulsory O'Level subject(s): none listed beyond English Language and Mathematics. Accepted optional O'Level subject(s): Geography/Agricultural Science, Biology, Physics, Chemistry.\nStudent guidance: The student should not assume that any subject is accepted. They should match both the JAMB requirement and the O'Level requirement for Environmental Management.",
      "questionVariants": [
        "What are the JAMB subjects for Environmental Management at NSUK?",
        "What O'Level subjects do I need for Environmental Management at NSUK?",
        "What is the subject combination for Environmental Management in NSUK?",
        "Can I study Environmental Management with my JAMB subjects?",
        "Can I study Environmental Management without one of the listed compulsory subjects?",
        "What optional subjects are accepted for Environmental Management?",
        "Is Mathematics compulsory for Environmental Management at NSUK?",
        "Is English Language compulsory for Environmental Management at NSUK?",
        "What WAEC or NECO subjects do I need for Environmental Management?",
        "Does the right JAMB combination mean I am fully qualified for Environmental Management?",
        "Can I use Chemistry for Environmental Management at NSUK?",
        "Can I use Physics for Environmental Management at NSUK?",
        "Can I use Economics for Environmental Management at NSUK?",
        "Can I use Geography/Agricultural Science for Environmental Management at NSUK?",
        "Can I use Biology for Environmental Management at NSUK?",
        "Can I use Physics for Environmental Management at NSUK?"
      ],
      "sourcePages": [
        13
      ],
      "reviewLevel": "normal",
      "sourceNotes": [
        "Source page(s): 13."
      ]
    },
    {
      "school": "Nasarawa State University, Keffi",
      "schoolShortName": "NSUK",
      "academicSession": "2025/2026",
      "sourceLabel": "NSUK Post UTME Subject Combination 2025/2026",
      "programme": "Architecture",
      "slug": "nsuk-architecture-requirements",
      "categorySlug": "programme-requirements",
      "type": "programme",
      "status": "published",
      "title": "NSUK Architecture Admission Subject Combination",
      "question": "What are the JAMB and O'Level subject requirements for Architecture at NSUK?",
      "jamb": {
        "totalRequiredSubjects": 4,
        "compulsorySubjects": [
          "Use of English",
          "Physics",
          "Mathematics"
        ],
        "optionalChooseCount": 1,
        "optionalSubjects": [
          "Chemistry",
          "Geography",
          "Biology",
          "Economics",
          "Fine Arts"
        ],
        "requiredSubjectGroups": [],
        "ruleSummary": "Candidate must register four JAMB subjects. Use of English is compulsory. The remaining subjects must follow the compulsory and optional subject rules for this programme."
      },
      "olevel": {
        "minimumCredits": 5,
        "globalCompulsorySubjects": [
          "English Language",
          "Mathematics"
        ],
        "programmeSpecificCompulsorySubjects": [
          "Physics"
        ],
        "compulsorySubjects": [
          "English Language",
          "Mathematics",
          "Physics"
        ],
        "optionalSubjects": [
          "Chemistry",
          "Geography",
          "Economics",
          "Biology",
          "Fine Arts",
          "Technical Drawing"
        ],
        "acceptedExamTypes": [
          "WAEC",
          "NECO",
          "NABTEB",
          "Other accepted senior secondary examinations"
        ],
        "ruleSummary": "Candidate must have at least five O'Level credit passes, including English Language and Mathematics, plus the programme-specific required/accepted subjects."
      },
      "warnings": [
        "Use of English in JAMB is different from English Language in O'Level; both must be treated separately.",
        "Correct JAMB subjects do not automatically satisfy O'Level requirements.",
        "Optional subjects should be selected only from the approved list for this programme.",
        "O'Level requires at least five credit passes, including English Language and Mathematics."
      ],
      "needsReview": false,
      "keywords": [
        "NSUK",
        "Nasarawa State University, Keffi",
        "Architecture",
        "JAMB",
        "UTME",
        "Post UTME",
        "O'Level",
        "WAEC",
        "NECO",
        "NABTEB",
        "subject combination",
        "admission requirement",
        "Use of English",
        "Physics",
        "Mathematics",
        "Chemistry",
        "Geography",
        "Biology",
        "Economics",
        "Fine Arts",
        "English Language",
        "Technical Drawing"
      ],
      "answer": "For Architecture at NSUK, the JAMB combination must include Use of English, Physics, Mathematics; the candidate should choose 1 subject(s) from Chemistry, Geography, Biology, Economics, Fine Arts to make four JAMB subjects. For O'Level, the candidate needs at least five credit passes including English Language, Mathematics, Physics. Accepted additional O'Level subjects include Chemistry, Geography, Economics, Biology, Fine Arts, Technical Drawing.",
      "content": "Programme: Architecture\nSchool: Nasarawa State University, Keffi (NSUK)\nAcademic session: 2025/2026\nRequirement type: JAMB subject combination and O'Level combination.\nJAMB requirement: The candidate must register four JAMB subjects. Compulsory JAMB subject(s): Use of English, Physics, Mathematics. Optional JAMB subject(s): Chemistry, Geography, Biology, Economics, Fine Arts. Optional subjects needed: 1.\nO'Level requirement: The candidate must have at least five credit passes from WAEC, NECO, NABTEB, or another accepted senior secondary examination. English Language and Mathematics are compulsory for O'Level. Programme-specific compulsory O'Level subject(s): Physics. Accepted optional O'Level subject(s): Chemistry, Geography, Economics, Biology, Fine Arts, Technical Drawing.\nStudent guidance: The student should not assume that any subject is accepted. They should match both the JAMB requirement and the O'Level requirement for Architecture.",
      "questionVariants": [
        "What are the JAMB subjects for Architecture at NSUK?",
        "What O'Level subjects do I need for Architecture at NSUK?",
        "What is the subject combination for Architecture in NSUK?",
        "Can I study Architecture with my JAMB subjects?",
        "Can I study Architecture without one of the listed compulsory subjects?",
        "What optional subjects are accepted for Architecture?",
        "Is Mathematics compulsory for Architecture at NSUK?",
        "Is English Language compulsory for Architecture at NSUK?",
        "What WAEC or NECO subjects do I need for Architecture?",
        "Does the right JAMB combination mean I am fully qualified for Architecture?",
        "Can I use Chemistry for Architecture at NSUK?",
        "Can I use Geography for Architecture at NSUK?",
        "Can I use Biology for Architecture at NSUK?",
        "Can I use Chemistry for Architecture at NSUK?",
        "Can I use Geography for Architecture at NSUK?",
        "Can I use Economics for Architecture at NSUK?"
      ],
      "sourcePages": [
        13
      ],
      "reviewLevel": "normal",
      "sourceNotes": [
        "Source page(s): 13."
      ]
    },
    {
      "school": "Nasarawa State University, Keffi",
      "schoolShortName": "NSUK",
      "academicSession": "2025/2026",
      "sourceLabel": "NSUK Post UTME Subject Combination 2025/2026",
      "programme": "Building Technology",
      "slug": "nsuk-building-technology-requirements",
      "categorySlug": "programme-requirements",
      "type": "programme",
      "status": "published",
      "title": "NSUK Building Technology Admission Subject Combination",
      "question": "What are the JAMB and O'Level subject requirements for Building Technology at NSUK?",
      "jamb": {
        "totalRequiredSubjects": 4,
        "compulsorySubjects": [
          "Use of English",
          "Physics",
          "Mathematics"
        ],
        "optionalChooseCount": 1,
        "optionalSubjects": [
          "Chemistry",
          "Geography",
          "Biology",
          "Economics"
        ],
        "requiredSubjectGroups": [],
        "ruleSummary": "Candidate must register four JAMB subjects. Use of English is compulsory. The remaining subjects must follow the compulsory and optional subject rules for this programme."
      },
      "olevel": {
        "minimumCredits": 5,
        "globalCompulsorySubjects": [
          "English Language",
          "Mathematics"
        ],
        "programmeSpecificCompulsorySubjects": [
          "Physics",
          "Mathematics"
        ],
        "compulsorySubjects": [
          "English Language",
          "Mathematics",
          "Physics"
        ],
        "optionalSubjects": [
          "Chemistry",
          "Geography",
          "Technical Drawing",
          "Economics"
        ],
        "acceptedExamTypes": [
          "WAEC",
          "NECO",
          "NABTEB",
          "Other accepted senior secondary examinations"
        ],
        "ruleSummary": "Candidate must have at least five O'Level credit passes, including English Language and Mathematics, plus the programme-specific required/accepted subjects."
      },
      "warnings": [
        "Use of English in JAMB is different from English Language in O'Level; both must be treated separately.",
        "Correct JAMB subjects do not automatically satisfy O'Level requirements.",
        "Optional subjects should be selected only from the approved list for this programme.",
        "O'Level requires at least five credit passes, including English Language and Mathematics.",
        "This row was split or ambiguous in the PDF layout and should be reviewed against the source before production import.",
        "The source uses 'Use of English' in the O'Level column for this row; this seed normalizes O'Level English to English Language."
      ],
      "needsReview": true,
      "keywords": [
        "NSUK",
        "Nasarawa State University, Keffi",
        "Building Technology",
        "JAMB",
        "UTME",
        "Post UTME",
        "O'Level",
        "WAEC",
        "NECO",
        "NABTEB",
        "subject combination",
        "admission requirement",
        "Use of English",
        "Physics",
        "Mathematics",
        "Chemistry",
        "Geography",
        "Biology",
        "Economics",
        "English Language",
        "Technical Drawing"
      ],
      "answer": "For Building Technology at NSUK, the JAMB combination must include Use of English, Physics, Mathematics; the candidate should choose 1 subject(s) from Chemistry, Geography, Biology, Economics to make four JAMB subjects. For O'Level, the candidate needs at least five credit passes including English Language, Mathematics, Physics. Accepted additional O'Level subjects include Chemistry, Geography, Technical Drawing, Economics.",
      "content": "Programme: Building Technology\nSchool: Nasarawa State University, Keffi (NSUK)\nAcademic session: 2025/2026\nRequirement type: JAMB subject combination and O'Level combination.\nJAMB requirement: The candidate must register four JAMB subjects. Compulsory JAMB subject(s): Use of English, Physics, Mathematics. Optional JAMB subject(s): Chemistry, Geography, Biology, Economics. Optional subjects needed: 1.\nO'Level requirement: The candidate must have at least five credit passes from WAEC, NECO, NABTEB, or another accepted senior secondary examination. English Language and Mathematics are compulsory for O'Level. Programme-specific compulsory O'Level subject(s): Physics, Mathematics. Accepted optional O'Level subject(s): Chemistry, Geography, Technical Drawing, Economics.\nStudent guidance: The student should not assume that any subject is accepted. They should match both the JAMB requirement and the O'Level requirement for Building Technology.",
      "questionVariants": [
        "What are the JAMB subjects for Building Technology at NSUK?",
        "What O'Level subjects do I need for Building Technology at NSUK?",
        "What is the subject combination for Building Technology in NSUK?",
        "Can I study Building Technology with my JAMB subjects?",
        "Can I study Building Technology without one of the listed compulsory subjects?",
        "What optional subjects are accepted for Building Technology?",
        "Is Mathematics compulsory for Building Technology at NSUK?",
        "Is English Language compulsory for Building Technology at NSUK?",
        "What WAEC or NECO subjects do I need for Building Technology?",
        "Does the right JAMB combination mean I am fully qualified for Building Technology?",
        "Can I use Chemistry for Building Technology at NSUK?",
        "Can I use Geography for Building Technology at NSUK?",
        "Can I use Biology for Building Technology at NSUK?",
        "Can I use Chemistry for Building Technology at NSUK?",
        "Can I use Geography for Building Technology at NSUK?",
        "Can I use Technical Drawing for Building Technology at NSUK?"
      ],
      "sourcePages": [
        13,
        14
      ],
      "reviewLevel": "manual_check_recommended",
      "sourceNotes": [
        "Source page(s): 13, 14."
      ]
    },
    {
      "school": "Nasarawa State University, Keffi",
      "schoolShortName": "NSUK",
      "academicSession": "2025/2026",
      "sourceLabel": "NSUK Post UTME Subject Combination 2025/2026",
      "programme": "Common Law",
      "slug": "nsuk-common-law-requirements",
      "categorySlug": "programme-requirements",
      "type": "programme",
      "status": "published",
      "title": "NSUK Common Law Admission Subject Combination",
      "question": "What are the JAMB and O'Level subject requirements for Common Law at NSUK?",
      "jamb": {
        "totalRequiredSubjects": 4,
        "compulsorySubjects": [
          "Use of English",
          "Literature-in-English"
        ],
        "optionalChooseCount": 2,
        "optionalSubjects": [
          "Government/History",
          "Civic Education",
          "Economics",
          "Geography",
          "Christian Religious Studies",
          "Islamic Studies",
          "Arabic",
          "French",
          "Yoruba",
          "Hausa"
        ],
        "requiredSubjectGroups": [],
        "ruleSummary": "Candidate must register four JAMB subjects. Use of English is compulsory. The remaining subjects must follow the compulsory and optional subject rules for this programme."
      },
      "olevel": {
        "minimumCredits": 5,
        "globalCompulsorySubjects": [
          "English Language",
          "Mathematics"
        ],
        "programmeSpecificCompulsorySubjects": [
          "Literature-in-English"
        ],
        "compulsorySubjects": [
          "English Language",
          "Mathematics",
          "Literature-in-English"
        ],
        "optionalSubjects": [
          "Government/History",
          "Civic Education",
          "Economics",
          "Geography",
          "Christian Religious Studies",
          "Islamic Studies",
          "Arabic",
          "French",
          "Yoruba",
          "Hausa"
        ],
        "acceptedExamTypes": [
          "WAEC",
          "NECO",
          "NABTEB",
          "Other accepted senior secondary examinations"
        ],
        "ruleSummary": "Candidate must have at least five O'Level credit passes, including English Language and Mathematics, plus the programme-specific required/accepted subjects."
      },
      "warnings": [
        "Use of English in JAMB is different from English Language in O'Level; both must be treated separately.",
        "Correct JAMB subjects do not automatically satisfy O'Level requirements.",
        "Optional subjects should be selected only from the approved list for this programme.",
        "O'Level requires at least five credit passes, including English Language and Mathematics."
      ],
      "needsReview": false,
      "keywords": [
        "NSUK",
        "Nasarawa State University, Keffi",
        "Common Law",
        "JAMB",
        "UTME",
        "Post UTME",
        "O'Level",
        "WAEC",
        "NECO",
        "NABTEB",
        "subject combination",
        "admission requirement",
        "Use of English",
        "Literature-in-English",
        "Government/History",
        "Civic Education",
        "Economics",
        "Geography",
        "Christian Religious Studies",
        "Islamic Studies",
        "Arabic",
        "French",
        "Yoruba",
        "Hausa",
        "English Language",
        "Mathematics"
      ],
      "answer": "For Common Law at NSUK, the JAMB combination must include Use of English, Literature-in-English; the candidate should choose 2 subject(s) from Government/History, Civic Education, Economics, Geography, Christian Religious Studies, Islamic Studies, Arabic, French, Yoruba, Hausa to make four JAMB subjects. For O'Level, the candidate needs at least five credit passes including English Language, Mathematics, Literature-in-English. Accepted additional O'Level subjects include Government/History, Civic Education, Economics, Geography, Christian Religious Studies, Islamic Studies, Arabic, French, Yoruba, Hausa.",
      "content": "Programme: Common Law\nSchool: Nasarawa State University, Keffi (NSUK)\nAcademic session: 2025/2026\nRequirement type: JAMB subject combination and O'Level combination.\nJAMB requirement: The candidate must register four JAMB subjects. Compulsory JAMB subject(s): Use of English, Literature-in-English. Optional JAMB subject(s): Government/History, Civic Education, Economics, Geography, Christian Religious Studies, Islamic Studies, Arabic, French, Yoruba, Hausa. Optional subjects needed: 2.\nO'Level requirement: The candidate must have at least five credit passes from WAEC, NECO, NABTEB, or another accepted senior secondary examination. English Language and Mathematics are compulsory for O'Level. Programme-specific compulsory O'Level subject(s): Literature-in-English. Accepted optional O'Level subject(s): Government/History, Civic Education, Economics, Geography, Christian Religious Studies, Islamic Studies, Arabic, French, Yoruba, Hausa.\nStudent guidance: The student should not assume that any subject is accepted. They should match both the JAMB requirement and the O'Level requirement for Common Law.",
      "questionVariants": [
        "What are the JAMB subjects for Common Law at NSUK?",
        "What O'Level subjects do I need for Common Law at NSUK?",
        "What is the subject combination for Common Law in NSUK?",
        "Can I study Common Law with my JAMB subjects?",
        "Can I study Common Law without one of the listed compulsory subjects?",
        "What optional subjects are accepted for Common Law?",
        "Is Mathematics compulsory for Common Law at NSUK?",
        "Is English Language compulsory for Common Law at NSUK?",
        "What WAEC or NECO subjects do I need for Common Law?",
        "Does the right JAMB combination mean I am fully qualified for Common Law?",
        "Can I use Government/History for Common Law at NSUK?",
        "Can I use Civic Education for Common Law at NSUK?",
        "Can I use Economics for Common Law at NSUK?",
        "Can I use Government/History for Common Law at NSUK?",
        "Can I use Civic Education for Common Law at NSUK?",
        "Can I use Economics for Common Law at NSUK?"
      ],
      "sourcePages": [
        14
      ],
      "reviewLevel": "normal",
      "sourceNotes": [
        "Source page(s): 14."
      ]
    },
    {
      "school": "Nasarawa State University, Keffi",
      "schoolShortName": "NSUK",
      "academicSession": "2025/2026",
      "sourceLabel": "NSUK Post UTME Subject Combination 2025/2026",
      "programme": "Islamic Law and Jurisprudence",
      "slug": "nsuk-islamic-law-and-jurisprudence-requirements",
      "categorySlug": "programme-requirements",
      "type": "programme",
      "status": "published",
      "title": "NSUK Islamic Law and Jurisprudence Admission Subject Combination",
      "question": "What are the JAMB and O'Level subject requirements for Islamic Law and Jurisprudence at NSUK?",
      "jamb": {
        "totalRequiredSubjects": 4,
        "compulsorySubjects": [
          "Use of English",
          "Literature-in-English",
          "Islamic Studies/Arabic"
        ],
        "optionalChooseCount": 1,
        "optionalSubjects": [
          "Government/History",
          "Civic Education",
          "Economics",
          "Geography",
          "French",
          "Yoruba",
          "Hausa"
        ],
        "requiredSubjectGroups": [
          {
            "slot": "Islamic Studies/Arabic",
            "choose": 1,
            "options": [
              "Islamic Studies",
              "Arabic"
            ]
          }
        ],
        "ruleSummary": "Candidate must register four JAMB subjects. Use of English is compulsory. The remaining subjects must follow the compulsory and optional subject rules for this programme."
      },
      "olevel": {
        "minimumCredits": 5,
        "globalCompulsorySubjects": [
          "English Language",
          "Mathematics"
        ],
        "programmeSpecificCompulsorySubjects": [
          "Literature-in-English",
          "Islamic Studies/Arabic"
        ],
        "compulsorySubjects": [
          "English Language",
          "Mathematics",
          "Literature-in-English",
          "Islamic Studies/Arabic"
        ],
        "optionalSubjects": [
          "Government/History",
          "Civic Education",
          "Economics",
          "Geography",
          "Christian Religious Studies",
          "French",
          "Yoruba",
          "Hausa"
        ],
        "acceptedExamTypes": [
          "WAEC",
          "NECO",
          "NABTEB",
          "Other accepted senior secondary examinations"
        ],
        "ruleSummary": "Candidate must have at least five O'Level credit passes, including English Language and Mathematics, plus the programme-specific required/accepted subjects."
      },
      "warnings": [
        "Use of English in JAMB is different from English Language in O'Level; both must be treated separately.",
        "Correct JAMB subjects do not automatically satisfy O'Level requirements.",
        "Optional subjects should be selected only from the approved list for this programme.",
        "O'Level requires at least five credit passes, including English Language and Mathematics.",
        "A slash in a subject slot, such as Biology/Agricultural Science, means the source presents alternatives for that slot; validate carefully during eligibility checks."
      ],
      "needsReview": false,
      "keywords": [
        "NSUK",
        "Nasarawa State University, Keffi",
        "Islamic Law and Jurisprudence",
        "JAMB",
        "UTME",
        "Post UTME",
        "O'Level",
        "WAEC",
        "NECO",
        "NABTEB",
        "subject combination",
        "admission requirement",
        "Use of English",
        "Literature-in-English",
        "Islamic Studies/Arabic",
        "Government/History",
        "Civic Education",
        "Economics",
        "Geography",
        "French",
        "Yoruba",
        "Hausa",
        "English Language",
        "Mathematics",
        "Christian Religious Studies"
      ],
      "answer": "For Islamic Law and Jurisprudence at NSUK, the JAMB combination must include Use of English, Literature-in-English, Islamic Studies/Arabic; the candidate should choose 1 subject(s) from Government/History, Civic Education, Economics, Geography, French, Yoruba, Hausa to make four JAMB subjects. For O'Level, the candidate needs at least five credit passes including English Language, Mathematics, Literature-in-English, Islamic Studies/Arabic. Accepted additional O'Level subjects include Government/History, Civic Education, Economics, Geography, Christian Religious Studies, French, Yoruba, Hausa.",
      "content": "Programme: Islamic Law and Jurisprudence\nSchool: Nasarawa State University, Keffi (NSUK)\nAcademic session: 2025/2026\nRequirement type: JAMB subject combination and O'Level combination.\nJAMB requirement: The candidate must register four JAMB subjects. Compulsory JAMB subject(s): Use of English, Literature-in-English, Islamic Studies/Arabic. Optional JAMB subject(s): Government/History, Civic Education, Economics, Geography, French, Yoruba, Hausa. Optional subjects needed: 1.\nO'Level requirement: The candidate must have at least five credit passes from WAEC, NECO, NABTEB, or another accepted senior secondary examination. English Language and Mathematics are compulsory for O'Level. Programme-specific compulsory O'Level subject(s): Literature-in-English, Islamic Studies/Arabic. Accepted optional O'Level subject(s): Government/History, Civic Education, Economics, Geography, Christian Religious Studies, French, Yoruba, Hausa.\nStudent guidance: The student should not assume that any subject is accepted. They should match both the JAMB requirement and the O'Level requirement for Islamic Law and Jurisprudence.",
      "questionVariants": [
        "What are the JAMB subjects for Islamic Law and Jurisprudence at NSUK?",
        "What O'Level subjects do I need for Islamic Law and Jurisprudence at NSUK?",
        "What is the subject combination for Islamic Law and Jurisprudence in NSUK?",
        "Can I study Islamic Law and Jurisprudence with my JAMB subjects?",
        "Can I study Islamic Law and Jurisprudence without one of the listed compulsory subjects?",
        "What optional subjects are accepted for Islamic Law and Jurisprudence?",
        "Is Mathematics compulsory for Islamic Law and Jurisprudence at NSUK?",
        "Is English Language compulsory for Islamic Law and Jurisprudence at NSUK?",
        "What WAEC or NECO subjects do I need for Islamic Law and Jurisprudence?",
        "Does the right JAMB combination mean I am fully qualified for Islamic Law and Jurisprudence?",
        "Can I use Government/History for Islamic Law and Jurisprudence at NSUK?",
        "Can I use Civic Education for Islamic Law and Jurisprudence at NSUK?",
        "Can I use Economics for Islamic Law and Jurisprudence at NSUK?",
        "Can I use Government/History for Islamic Law and Jurisprudence at NSUK?",
        "Can I use Civic Education for Islamic Law and Jurisprudence at NSUK?",
        "Can I use Economics for Islamic Law and Jurisprudence at NSUK?"
      ],
      "sourcePages": [
        14
      ],
      "reviewLevel": "normal",
      "sourceNotes": [
        "Source page(s): 14."
      ]
    },
    {
      "school": "Nasarawa State University, Keffi",
      "schoolShortName": "NSUK",
      "academicSession": "2025/2026",
      "sourceLabel": "NSUK Post UTME Subject Combination 2025/2026",
      "programme": "Economics",
      "slug": "nsuk-economics-requirements",
      "categorySlug": "programme-requirements",
      "type": "programme",
      "status": "published",
      "title": "NSUK Economics Admission Subject Combination",
      "question": "What are the JAMB and O'Level subject requirements for Economics at NSUK?",
      "jamb": {
        "totalRequiredSubjects": 4,
        "compulsorySubjects": [
          "Use of English",
          "Economics",
          "Mathematics"
        ],
        "optionalChooseCount": 1,
        "optionalSubjects": [
          "Government",
          "History",
          "Geography",
          "Commerce",
          "Civic Education",
          "Literature-in-English",
          "Christian Religious Studies",
          "Islamic Studies"
        ],
        "requiredSubjectGroups": [],
        "ruleSummary": "Candidate must register four JAMB subjects. Use of English is compulsory. The remaining subjects must follow the compulsory and optional subject rules for this programme."
      },
      "olevel": {
        "minimumCredits": 5,
        "globalCompulsorySubjects": [
          "English Language",
          "Mathematics"
        ],
        "programmeSpecificCompulsorySubjects": [
          "Economics"
        ],
        "compulsorySubjects": [
          "English Language",
          "Mathematics",
          "Economics"
        ],
        "optionalSubjects": [
          "Government/History",
          "Civic Education",
          "Geography",
          "Christian Religious Studies",
          "Literature-in-English",
          "Islamic Studies",
          "Arabic",
          "French",
          "Yoruba",
          "Hausa"
        ],
        "acceptedExamTypes": [
          "WAEC",
          "NECO",
          "NABTEB",
          "Other accepted senior secondary examinations"
        ],
        "ruleSummary": "Candidate must have at least five O'Level credit passes, including English Language and Mathematics, plus the programme-specific required/accepted subjects."
      },
      "warnings": [
        "Use of English in JAMB is different from English Language in O'Level; both must be treated separately.",
        "Correct JAMB subjects do not automatically satisfy O'Level requirements.",
        "Optional subjects should be selected only from the approved list for this programme.",
        "O'Level requires at least five credit passes, including English Language and Mathematics."
      ],
      "needsReview": false,
      "keywords": [
        "NSUK",
        "Nasarawa State University, Keffi",
        "Economics",
        "JAMB",
        "UTME",
        "Post UTME",
        "O'Level",
        "WAEC",
        "NECO",
        "NABTEB",
        "subject combination",
        "admission requirement",
        "Use of English",
        "Mathematics",
        "Government",
        "History",
        "Geography",
        "Commerce",
        "Civic Education",
        "Literature-in-English",
        "Christian Religious Studies",
        "Islamic Studies",
        "English Language",
        "Government/History",
        "Arabic",
        "French",
        "Yoruba",
        "Hausa"
      ],
      "answer": "For Economics at NSUK, the JAMB combination must include Use of English, Economics, Mathematics; the candidate should choose 1 subject(s) from Government, History, Geography, Commerce, Civic Education, Literature-in-English, Christian Religious Studies, Islamic Studies to make four JAMB subjects. For O'Level, the candidate needs at least five credit passes including English Language, Mathematics, Economics. Accepted additional O'Level subjects include Government/History, Civic Education, Geography, Christian Religious Studies, Literature-in-English, Islamic Studies, Arabic, French, Yoruba, Hausa.",
      "content": "Programme: Economics\nSchool: Nasarawa State University, Keffi (NSUK)\nAcademic session: 2025/2026\nRequirement type: JAMB subject combination and O'Level combination.\nJAMB requirement: The candidate must register four JAMB subjects. Compulsory JAMB subject(s): Use of English, Economics, Mathematics. Optional JAMB subject(s): Government, History, Geography, Commerce, Civic Education, Literature-in-English, Christian Religious Studies, Islamic Studies. Optional subjects needed: 1.\nO'Level requirement: The candidate must have at least five credit passes from WAEC, NECO, NABTEB, or another accepted senior secondary examination. English Language and Mathematics are compulsory for O'Level. Programme-specific compulsory O'Level subject(s): Economics. Accepted optional O'Level subject(s): Government/History, Civic Education, Geography, Christian Religious Studies, Literature-in-English, Islamic Studies, Arabic, French, Yoruba, Hausa.\nStudent guidance: The student should not assume that any subject is accepted. They should match both the JAMB requirement and the O'Level requirement for Economics.",
      "questionVariants": [
        "What are the JAMB subjects for Economics at NSUK?",
        "What O'Level subjects do I need for Economics at NSUK?",
        "What is the subject combination for Economics in NSUK?",
        "Can I study Economics with my JAMB subjects?",
        "Can I study Economics without one of the listed compulsory subjects?",
        "What optional subjects are accepted for Economics?",
        "Is Mathematics compulsory for Economics at NSUK?",
        "Is English Language compulsory for Economics at NSUK?",
        "What WAEC or NECO subjects do I need for Economics?",
        "Does the right JAMB combination mean I am fully qualified for Economics?",
        "Can I use Government for Economics at NSUK?",
        "Can I use History for Economics at NSUK?",
        "Can I use Geography for Economics at NSUK?",
        "Can I use Government/History for Economics at NSUK?",
        "Can I use Civic Education for Economics at NSUK?",
        "Can I use Geography for Economics at NSUK?"
      ],
      "sourcePages": [
        14
      ],
      "reviewLevel": "normal",
      "sourceNotes": [
        "Source page(s): 14."
      ]
    },
    {
      "school": "Nasarawa State University, Keffi",
      "schoolShortName": "NSUK",
      "academicSession": "2025/2026",
      "sourceLabel": "NSUK Post UTME Subject Combination 2025/2026",
      "programme": "Psychology",
      "slug": "nsuk-psychology-requirements",
      "categorySlug": "programme-requirements",
      "type": "programme",
      "status": "published",
      "title": "NSUK Psychology Admission Subject Combination",
      "question": "What are the JAMB and O'Level subject requirements for Psychology at NSUK?",
      "jamb": {
        "totalRequiredSubjects": 4,
        "compulsorySubjects": [
          "Use of English",
          "Government/History"
        ],
        "optionalChooseCount": 2,
        "optionalSubjects": [
          "Christian Religious Studies",
          "Literature-in-English",
          "Islamic Studies",
          "Arabic",
          "French",
          "Yoruba",
          "Hausa",
          "Civic Education",
          "Economics",
          "Geography"
        ],
        "requiredSubjectGroups": [
          {
            "slot": "Government/History",
            "choose": 1,
            "options": [
              "Government",
              "History"
            ]
          }
        ],
        "ruleSummary": "Candidate must register four JAMB subjects. Use of English is compulsory. The remaining subjects must follow the compulsory and optional subject rules for this programme."
      },
      "olevel": {
        "minimumCredits": 5,
        "globalCompulsorySubjects": [
          "English Language",
          "Mathematics"
        ],
        "programmeSpecificCompulsorySubjects": [
          "Government/History"
        ],
        "compulsorySubjects": [
          "English Language",
          "Mathematics",
          "Government/History"
        ],
        "optionalSubjects": [
          "Civic Education",
          "Economics",
          "Geography",
          "Christian Religious Studies",
          "Literature-in-English",
          "Islamic Studies",
          "Arabic",
          "French",
          "Yoruba",
          "Hausa"
        ],
        "acceptedExamTypes": [
          "WAEC",
          "NECO",
          "NABTEB",
          "Other accepted senior secondary examinations"
        ],
        "ruleSummary": "Candidate must have at least five O'Level credit passes, including English Language and Mathematics, plus the programme-specific required/accepted subjects."
      },
      "warnings": [
        "Use of English in JAMB is different from English Language in O'Level; both must be treated separately.",
        "Correct JAMB subjects do not automatically satisfy O'Level requirements.",
        "Optional subjects should be selected only from the approved list for this programme.",
        "O'Level requires at least five credit passes, including English Language and Mathematics.",
        "A slash in a subject slot, such as Biology/Agricultural Science, means the source presents alternatives for that slot; validate carefully during eligibility checks."
      ],
      "needsReview": false,
      "keywords": [
        "NSUK",
        "Nasarawa State University, Keffi",
        "Psychology",
        "JAMB",
        "UTME",
        "Post UTME",
        "O'Level",
        "WAEC",
        "NECO",
        "NABTEB",
        "subject combination",
        "admission requirement",
        "Use of English",
        "Government/History",
        "Christian Religious Studies",
        "Literature-in-English",
        "Islamic Studies",
        "Arabic",
        "French",
        "Yoruba",
        "Hausa",
        "Civic Education",
        "Economics",
        "Geography",
        "English Language",
        "Mathematics"
      ],
      "answer": "For Psychology at NSUK, the JAMB combination must include Use of English, Government/History; the candidate should choose 2 subject(s) from Christian Religious Studies, Literature-in-English, Islamic Studies, Arabic, French, Yoruba, Hausa, Civic Education, Economics, Geography to make four JAMB subjects. For O'Level, the candidate needs at least five credit passes including English Language, Mathematics, Government/History. Accepted additional O'Level subjects include Civic Education, Economics, Geography, Christian Religious Studies, Literature-in-English, Islamic Studies, Arabic, French, Yoruba, Hausa.",
      "content": "Programme: Psychology\nSchool: Nasarawa State University, Keffi (NSUK)\nAcademic session: 2025/2026\nRequirement type: JAMB subject combination and O'Level combination.\nJAMB requirement: The candidate must register four JAMB subjects. Compulsory JAMB subject(s): Use of English, Government/History. Optional JAMB subject(s): Christian Religious Studies, Literature-in-English, Islamic Studies, Arabic, French, Yoruba, Hausa, Civic Education, Economics, Geography. Optional subjects needed: 2.\nO'Level requirement: The candidate must have at least five credit passes from WAEC, NECO, NABTEB, or another accepted senior secondary examination. English Language and Mathematics are compulsory for O'Level. Programme-specific compulsory O'Level subject(s): Government/History. Accepted optional O'Level subject(s): Civic Education, Economics, Geography, Christian Religious Studies, Literature-in-English, Islamic Studies, Arabic, French, Yoruba, Hausa.\nStudent guidance: The student should not assume that any subject is accepted. They should match both the JAMB requirement and the O'Level requirement for Psychology.",
      "questionVariants": [
        "What are the JAMB subjects for Psychology at NSUK?",
        "What O'Level subjects do I need for Psychology at NSUK?",
        "What is the subject combination for Psychology in NSUK?",
        "Can I study Psychology with my JAMB subjects?",
        "Can I study Psychology without one of the listed compulsory subjects?",
        "What optional subjects are accepted for Psychology?",
        "Is Mathematics compulsory for Psychology at NSUK?",
        "Is English Language compulsory for Psychology at NSUK?",
        "What WAEC or NECO subjects do I need for Psychology?",
        "Does the right JAMB combination mean I am fully qualified for Psychology?",
        "Can I use Christian Religious Studies for Psychology at NSUK?",
        "Can I use Literature-in-English for Psychology at NSUK?",
        "Can I use Islamic Studies for Psychology at NSUK?",
        "Can I use Civic Education for Psychology at NSUK?",
        "Can I use Economics for Psychology at NSUK?",
        "Can I use Geography for Psychology at NSUK?"
      ],
      "sourcePages": [
        14,
        15
      ],
      "reviewLevel": "normal",
      "sourceNotes": [
        "Source page(s): 14, 15."
      ]
    },
    {
      "school": "Nasarawa State University, Keffi",
      "schoolShortName": "NSUK",
      "academicSession": "2025/2026",
      "sourceLabel": "NSUK Post UTME Subject Combination 2025/2026",
      "programme": "Sociology",
      "slug": "nsuk-sociology-requirements",
      "categorySlug": "programme-requirements",
      "type": "programme",
      "status": "published",
      "title": "NSUK Sociology Admission Subject Combination",
      "question": "What are the JAMB and O'Level subject requirements for Sociology at NSUK?",
      "jamb": {
        "totalRequiredSubjects": 4,
        "compulsorySubjects": [
          "Use of English"
        ],
        "optionalChooseCount": 3,
        "optionalSubjects": [
          "Government/History",
          "Civic Education",
          "Economics",
          "Geography",
          "Christian Religious Studies",
          "Literature-in-English",
          "Islamic Studies",
          "Arabic",
          "French",
          "Yoruba",
          "Hausa"
        ],
        "requiredSubjectGroups": [],
        "ruleSummary": "Candidate must register four JAMB subjects. Use of English is compulsory. The remaining subjects must follow the compulsory and optional subject rules for this programme."
      },
      "olevel": {
        "minimumCredits": 5,
        "globalCompulsorySubjects": [
          "English Language",
          "Mathematics"
        ],
        "programmeSpecificCompulsorySubjects": [
          "Economics",
          "Government/History"
        ],
        "compulsorySubjects": [
          "English Language",
          "Mathematics",
          "Economics",
          "Government/History"
        ],
        "optionalSubjects": [
          "Civic Education",
          "Geography",
          "Christian Religious Studies",
          "Literature-in-English",
          "Islamic Studies",
          "Arabic",
          "French",
          "Yoruba",
          "Hausa"
        ],
        "acceptedExamTypes": [
          "WAEC",
          "NECO",
          "NABTEB",
          "Other accepted senior secondary examinations"
        ],
        "ruleSummary": "Candidate must have at least five O'Level credit passes, including English Language and Mathematics, plus the programme-specific required/accepted subjects."
      },
      "warnings": [
        "Use of English in JAMB is different from English Language in O'Level; both must be treated separately.",
        "Correct JAMB subjects do not automatically satisfy O'Level requirements.",
        "Optional subjects should be selected only from the approved list for this programme.",
        "O'Level requires at least five credit passes, including English Language and Mathematics.",
        "Where the source says 'Any three subjects', this seed restricts those choices to the approved subject context listed for the programme, not literally every subject."
      ],
      "needsReview": false,
      "keywords": [
        "NSUK",
        "Nasarawa State University, Keffi",
        "Sociology",
        "JAMB",
        "UTME",
        "Post UTME",
        "O'Level",
        "WAEC",
        "NECO",
        "NABTEB",
        "subject combination",
        "admission requirement",
        "Use of English",
        "Government/History",
        "Civic Education",
        "Economics",
        "Geography",
        "Christian Religious Studies",
        "Literature-in-English",
        "Islamic Studies",
        "Arabic",
        "French",
        "Yoruba",
        "Hausa",
        "English Language",
        "Mathematics"
      ],
      "answer": "For Sociology at NSUK, the JAMB combination must include Use of English; the candidate should choose 3 subject(s) from Government/History, Civic Education, Economics, Geography, Christian Religious Studies, Literature-in-English, Islamic Studies, Arabic, French, Yoruba, Hausa to make four JAMB subjects. For O'Level, the candidate needs at least five credit passes including English Language, Mathematics, Economics, Government/History. Accepted additional O'Level subjects include Civic Education, Geography, Christian Religious Studies, Literature-in-English, Islamic Studies, Arabic, French, Yoruba, Hausa.",
      "content": "Programme: Sociology\nSchool: Nasarawa State University, Keffi (NSUK)\nAcademic session: 2025/2026\nRequirement type: JAMB subject combination and O'Level combination.\nJAMB requirement: The candidate must register four JAMB subjects. Compulsory JAMB subject(s): Use of English. Optional JAMB subject(s): Government/History, Civic Education, Economics, Geography, Christian Religious Studies, Literature-in-English, Islamic Studies, Arabic, French, Yoruba, Hausa. Optional subjects needed: 3.\nO'Level requirement: The candidate must have at least five credit passes from WAEC, NECO, NABTEB, or another accepted senior secondary examination. English Language and Mathematics are compulsory for O'Level. Programme-specific compulsory O'Level subject(s): Economics, Government/History. Accepted optional O'Level subject(s): Civic Education, Geography, Christian Religious Studies, Literature-in-English, Islamic Studies, Arabic, French, Yoruba, Hausa.\nStudent guidance: The student should not assume that any subject is accepted. They should match both the JAMB requirement and the O'Level requirement for Sociology.",
      "questionVariants": [
        "What are the JAMB subjects for Sociology at NSUK?",
        "What O'Level subjects do I need for Sociology at NSUK?",
        "What is the subject combination for Sociology in NSUK?",
        "Can I study Sociology with my JAMB subjects?",
        "Can I study Sociology without one of the listed compulsory subjects?",
        "What optional subjects are accepted for Sociology?",
        "Is Mathematics compulsory for Sociology at NSUK?",
        "Is English Language compulsory for Sociology at NSUK?",
        "What WAEC or NECO subjects do I need for Sociology?",
        "Does the right JAMB combination mean I am fully qualified for Sociology?",
        "Can I use Government/History for Sociology at NSUK?",
        "Can I use Civic Education for Sociology at NSUK?",
        "Can I use Economics for Sociology at NSUK?",
        "Can I use Civic Education for Sociology at NSUK?",
        "Can I use Geography for Sociology at NSUK?",
        "Can I use Christian Religious Studies for Sociology at NSUK?"
      ],
      "sourcePages": [
        15
      ],
      "reviewLevel": "normal",
      "sourceNotes": [
        "Source page(s): 15."
      ]
    },
    {
      "school": "Nasarawa State University, Keffi",
      "schoolShortName": "NSUK",
      "academicSession": "2025/2026",
      "sourceLabel": "NSUK Post UTME Subject Combination 2025/2026",
      "programme": "Criminology and Security Studies",
      "slug": "nsuk-criminology-and-security-studies-requirements",
      "categorySlug": "programme-requirements",
      "type": "programme",
      "status": "published",
      "title": "NSUK Criminology and Security Studies Admission Subject Combination",
      "question": "What are the JAMB and O'Level subject requirements for Criminology and Security Studies at NSUK?",
      "jamb": {
        "totalRequiredSubjects": 4,
        "compulsorySubjects": [
          "Use of English"
        ],
        "optionalChooseCount": 3,
        "optionalSubjects": [
          "Government/History",
          "Economics",
          "Geography",
          "Christian Religious Studies",
          "Literature-in-English",
          "Islamic Studies"
        ],
        "requiredSubjectGroups": [],
        "ruleSummary": "Candidate must register four JAMB subjects. Use of English is compulsory. The remaining subjects must follow the compulsory and optional subject rules for this programme."
      },
      "olevel": {
        "minimumCredits": 5,
        "globalCompulsorySubjects": [
          "English Language",
          "Mathematics"
        ],
        "programmeSpecificCompulsorySubjects": [
          "Economics"
        ],
        "compulsorySubjects": [
          "English Language",
          "Mathematics",
          "Economics"
        ],
        "optionalSubjects": [
          "Government/History",
          "Geography",
          "Christian Religious Studies",
          "Literature-in-English",
          "Islamic Studies"
        ],
        "acceptedExamTypes": [
          "WAEC",
          "NECO",
          "NABTEB",
          "Other accepted senior secondary examinations"
        ],
        "ruleSummary": "Candidate must have at least five O'Level credit passes, including English Language and Mathematics, plus the programme-specific required/accepted subjects."
      },
      "warnings": [
        "Use of English in JAMB is different from English Language in O'Level; both must be treated separately.",
        "Correct JAMB subjects do not automatically satisfy O'Level requirements.",
        "Optional subjects should be selected only from the approved list for this programme.",
        "O'Level requires at least five credit passes, including English Language and Mathematics.",
        "Where the source says 'Any three subjects', this seed restricts those choices to the approved subject context listed for the programme, not literally every subject."
      ],
      "needsReview": false,
      "keywords": [
        "NSUK",
        "Nasarawa State University, Keffi",
        "Criminology and Security Studies",
        "JAMB",
        "UTME",
        "Post UTME",
        "O'Level",
        "WAEC",
        "NECO",
        "NABTEB",
        "subject combination",
        "admission requirement",
        "Use of English",
        "Government/History",
        "Economics",
        "Geography",
        "Christian Religious Studies",
        "Literature-in-English",
        "Islamic Studies",
        "English Language",
        "Mathematics"
      ],
      "answer": "For Criminology and Security Studies at NSUK, the JAMB combination must include Use of English; the candidate should choose 3 subject(s) from Government/History, Economics, Geography, Christian Religious Studies, Literature-in-English, Islamic Studies to make four JAMB subjects. For O'Level, the candidate needs at least five credit passes including English Language, Mathematics, Economics. Accepted additional O'Level subjects include Government/History, Geography, Christian Religious Studies, Literature-in-English, Islamic Studies.",
      "content": "Programme: Criminology and Security Studies\nSchool: Nasarawa State University, Keffi (NSUK)\nAcademic session: 2025/2026\nRequirement type: JAMB subject combination and O'Level combination.\nJAMB requirement: The candidate must register four JAMB subjects. Compulsory JAMB subject(s): Use of English. Optional JAMB subject(s): Government/History, Economics, Geography, Christian Religious Studies, Literature-in-English, Islamic Studies. Optional subjects needed: 3.\nO'Level requirement: The candidate must have at least five credit passes from WAEC, NECO, NABTEB, or another accepted senior secondary examination. English Language and Mathematics are compulsory for O'Level. Programme-specific compulsory O'Level subject(s): Economics. Accepted optional O'Level subject(s): Government/History, Geography, Christian Religious Studies, Literature-in-English, Islamic Studies.\nStudent guidance: The student should not assume that any subject is accepted. They should match both the JAMB requirement and the O'Level requirement for Criminology and Security Studies.",
      "questionVariants": [
        "What are the JAMB subjects for Criminology and Security Studies at NSUK?",
        "What O'Level subjects do I need for Criminology and Security Studies at NSUK?",
        "What is the subject combination for Criminology and Security Studies in NSUK?",
        "Can I study Criminology and Security Studies with my JAMB subjects?",
        "Can I study Criminology and Security Studies without one of the listed compulsory subjects?",
        "What optional subjects are accepted for Criminology and Security Studies?",
        "Is Mathematics compulsory for Criminology and Security Studies at NSUK?",
        "Is English Language compulsory for Criminology and Security Studies at NSUK?",
        "What WAEC or NECO subjects do I need for Criminology and Security Studies?",
        "Does the right JAMB combination mean I am fully qualified for Criminology and Security Studies?",
        "Can I use Government/History for Criminology and Security Studies at NSUK?",
        "Can I use Economics for Criminology and Security Studies at NSUK?",
        "Can I use Geography for Criminology and Security Studies at NSUK?",
        "Can I use Government/History for Criminology and Security Studies at NSUK?",
        "Can I use Geography for Criminology and Security Studies at NSUK?",
        "Can I use Christian Religious Studies for Criminology and Security Studies at NSUK?"
      ],
      "sourcePages": [
        15
      ],
      "reviewLevel": "normal",
      "sourceNotes": [
        "Source page(s): 15."
      ]
    },
    {
      "school": "Nasarawa State University, Keffi",
      "schoolShortName": "NSUK",
      "academicSession": "2025/2026",
      "sourceLabel": "NSUK Post UTME Subject Combination 2025/2026",
      "programme": "Demography and Social Statistics",
      "slug": "nsuk-demography-and-social-statistics-requirements",
      "categorySlug": "programme-requirements",
      "type": "programme",
      "status": "published",
      "title": "NSUK Demography and Social Statistics Admission Subject Combination",
      "question": "What are the JAMB and O'Level subject requirements for Demography and Social Statistics at NSUK?",
      "jamb": {
        "totalRequiredSubjects": 4,
        "compulsorySubjects": [
          "Use of English",
          "Mathematics",
          "Economics/Geography"
        ],
        "optionalChooseCount": 1,
        "optionalSubjects": [
          "Government/History",
          "Christian Religious Studies",
          "Islamic Studies"
        ],
        "requiredSubjectGroups": [
          {
            "slot": "Economics/Geography",
            "choose": 1,
            "options": [
              "Economics",
              "Geography"
            ]
          }
        ],
        "ruleSummary": "Candidate must register four JAMB subjects. Use of English is compulsory. The remaining subjects must follow the compulsory and optional subject rules for this programme."
      },
      "olevel": {
        "minimumCredits": 5,
        "globalCompulsorySubjects": [
          "English Language",
          "Mathematics"
        ],
        "programmeSpecificCompulsorySubjects": [
          "Economics",
          "Geography"
        ],
        "compulsorySubjects": [
          "English Language",
          "Mathematics",
          "Economics",
          "Geography"
        ],
        "optionalSubjects": [
          "Government/History",
          "Christian Religious Studies",
          "Literature-in-English",
          "Islamic Studies"
        ],
        "acceptedExamTypes": [
          "WAEC",
          "NECO",
          "NABTEB",
          "Other accepted senior secondary examinations"
        ],
        "ruleSummary": "Candidate must have at least five O'Level credit passes, including English Language and Mathematics, plus the programme-specific required/accepted subjects."
      },
      "warnings": [
        "Use of English in JAMB is different from English Language in O'Level; both must be treated separately.",
        "Correct JAMB subjects do not automatically satisfy O'Level requirements.",
        "Optional subjects should be selected only from the approved list for this programme.",
        "O'Level requires at least five credit passes, including English Language and Mathematics.",
        "A slash in a subject slot, such as Biology/Agricultural Science, means the source presents alternatives for that slot; validate carefully during eligibility checks."
      ],
      "needsReview": false,
      "keywords": [
        "NSUK",
        "Nasarawa State University, Keffi",
        "Demography and Social Statistics",
        "JAMB",
        "UTME",
        "Post UTME",
        "O'Level",
        "WAEC",
        "NECO",
        "NABTEB",
        "subject combination",
        "admission requirement",
        "Use of English",
        "Mathematics",
        "Economics/Geography",
        "Government/History",
        "Christian Religious Studies",
        "Islamic Studies",
        "English Language",
        "Economics",
        "Geography",
        "Literature-in-English"
      ],
      "answer": "For Demography and Social Statistics at NSUK, the JAMB combination must include Use of English, Mathematics, Economics/Geography; the candidate should choose 1 subject(s) from Government/History, Christian Religious Studies, Islamic Studies to make four JAMB subjects. For O'Level, the candidate needs at least five credit passes including English Language, Mathematics, Economics, Geography. Accepted additional O'Level subjects include Government/History, Christian Religious Studies, Literature-in-English, Islamic Studies.",
      "content": "Programme: Demography and Social Statistics\nSchool: Nasarawa State University, Keffi (NSUK)\nAcademic session: 2025/2026\nRequirement type: JAMB subject combination and O'Level combination.\nJAMB requirement: The candidate must register four JAMB subjects. Compulsory JAMB subject(s): Use of English, Mathematics, Economics/Geography. Optional JAMB subject(s): Government/History, Christian Religious Studies, Islamic Studies. Optional subjects needed: 1.\nO'Level requirement: The candidate must have at least five credit passes from WAEC, NECO, NABTEB, or another accepted senior secondary examination. English Language and Mathematics are compulsory for O'Level. Programme-specific compulsory O'Level subject(s): Economics, Geography. Accepted optional O'Level subject(s): Government/History, Christian Religious Studies, Literature-in-English, Islamic Studies.\nStudent guidance: The student should not assume that any subject is accepted. They should match both the JAMB requirement and the O'Level requirement for Demography and Social Statistics.",
      "questionVariants": [
        "What are the JAMB subjects for Demography and Social Statistics at NSUK?",
        "What O'Level subjects do I need for Demography and Social Statistics at NSUK?",
        "What is the subject combination for Demography and Social Statistics in NSUK?",
        "Can I study Demography and Social Statistics with my JAMB subjects?",
        "Can I study Demography and Social Statistics without one of the listed compulsory subjects?",
        "What optional subjects are accepted for Demography and Social Statistics?",
        "Is Mathematics compulsory for Demography and Social Statistics at NSUK?",
        "Is English Language compulsory for Demography and Social Statistics at NSUK?",
        "What WAEC or NECO subjects do I need for Demography and Social Statistics?",
        "Does the right JAMB combination mean I am fully qualified for Demography and Social Statistics?",
        "Can I use Government/History for Demography and Social Statistics at NSUK?",
        "Can I use Christian Religious Studies for Demography and Social Statistics at NSUK?",
        "Can I use Islamic Studies for Demography and Social Statistics at NSUK?",
        "Can I use Government/History for Demography and Social Statistics at NSUK?",
        "Can I use Christian Religious Studies for Demography and Social Statistics at NSUK?",
        "Can I use Literature-in-English for Demography and Social Statistics at NSUK?"
      ],
      "sourcePages": [
        15
      ],
      "reviewLevel": "normal",
      "sourceNotes": [
        "Source page(s): 15."
      ]
    },
    {
      "school": "Nasarawa State University, Keffi",
      "schoolShortName": "NSUK",
      "academicSession": "2025/2026",
      "sourceLabel": "NSUK Post UTME Subject Combination 2025/2026",
      "programme": "Political Science",
      "slug": "nsuk-political-science-requirements",
      "categorySlug": "programme-requirements",
      "type": "programme",
      "status": "published",
      "title": "NSUK Political Science Admission Subject Combination",
      "question": "What are the JAMB and O'Level subject requirements for Political Science at NSUK?",
      "jamb": {
        "totalRequiredSubjects": 4,
        "compulsorySubjects": [
          "Use of English",
          "Government/History"
        ],
        "optionalChooseCount": 2,
        "optionalSubjects": [
          "Civic Education",
          "Economics",
          "Geography",
          "Christian Religious Studies",
          "Literature-in-English",
          "Islamic Studies",
          "Arabic",
          "French",
          "Yoruba",
          "Hausa"
        ],
        "requiredSubjectGroups": [
          {
            "slot": "Government/History",
            "choose": 1,
            "options": [
              "Government",
              "History"
            ]
          }
        ],
        "ruleSummary": "Candidate must register four JAMB subjects. Use of English is compulsory. The remaining subjects must follow the compulsory and optional subject rules for this programme."
      },
      "olevel": {
        "minimumCredits": 5,
        "globalCompulsorySubjects": [
          "English Language",
          "Mathematics"
        ],
        "programmeSpecificCompulsorySubjects": [
          "Government/History"
        ],
        "compulsorySubjects": [
          "English Language",
          "Mathematics",
          "Government/History"
        ],
        "optionalSubjects": [
          "Civic Education",
          "Geography",
          "Christian Religious Studies",
          "Literature-in-English",
          "Islamic Studies",
          "Arabic",
          "French",
          "Yoruba",
          "Hausa",
          "Economics"
        ],
        "acceptedExamTypes": [
          "WAEC",
          "NECO",
          "NABTEB",
          "Other accepted senior secondary examinations"
        ],
        "ruleSummary": "Candidate must have at least five O'Level credit passes, including English Language and Mathematics, plus the programme-specific required/accepted subjects."
      },
      "warnings": [
        "Use of English in JAMB is different from English Language in O'Level; both must be treated separately.",
        "Correct JAMB subjects do not automatically satisfy O'Level requirements.",
        "Optional subjects should be selected only from the approved list for this programme.",
        "O'Level requires at least five credit passes, including English Language and Mathematics.",
        "A slash in a subject slot, such as Biology/Agricultural Science, means the source presents alternatives for that slot; validate carefully during eligibility checks."
      ],
      "needsReview": false,
      "keywords": [
        "NSUK",
        "Nasarawa State University, Keffi",
        "Political Science",
        "JAMB",
        "UTME",
        "Post UTME",
        "O'Level",
        "WAEC",
        "NECO",
        "NABTEB",
        "subject combination",
        "admission requirement",
        "Use of English",
        "Government/History",
        "Civic Education",
        "Economics",
        "Geography",
        "Christian Religious Studies",
        "Literature-in-English",
        "Islamic Studies",
        "Arabic",
        "French",
        "Yoruba",
        "Hausa",
        "English Language",
        "Mathematics"
      ],
      "answer": "For Political Science at NSUK, the JAMB combination must include Use of English, Government/History; the candidate should choose 2 subject(s) from Civic Education, Economics, Geography, Christian Religious Studies, Literature-in-English, Islamic Studies, Arabic, French, Yoruba, Hausa to make four JAMB subjects. For O'Level, the candidate needs at least five credit passes including English Language, Mathematics, Government/History. Accepted additional O'Level subjects include Civic Education, Geography, Christian Religious Studies, Literature-in-English, Islamic Studies, Arabic, French, Yoruba, Hausa, Economics.",
      "content": "Programme: Political Science\nSchool: Nasarawa State University, Keffi (NSUK)\nAcademic session: 2025/2026\nRequirement type: JAMB subject combination and O'Level combination.\nJAMB requirement: The candidate must register four JAMB subjects. Compulsory JAMB subject(s): Use of English, Government/History. Optional JAMB subject(s): Civic Education, Economics, Geography, Christian Religious Studies, Literature-in-English, Islamic Studies, Arabic, French, Yoruba, Hausa. Optional subjects needed: 2.\nO'Level requirement: The candidate must have at least five credit passes from WAEC, NECO, NABTEB, or another accepted senior secondary examination. English Language and Mathematics are compulsory for O'Level. Programme-specific compulsory O'Level subject(s): Government/History. Accepted optional O'Level subject(s): Civic Education, Geography, Christian Religious Studies, Literature-in-English, Islamic Studies, Arabic, French, Yoruba, Hausa, Economics.\nStudent guidance: The student should not assume that any subject is accepted. They should match both the JAMB requirement and the O'Level requirement for Political Science.",
      "questionVariants": [
        "What are the JAMB subjects for Political Science at NSUK?",
        "What O'Level subjects do I need for Political Science at NSUK?",
        "What is the subject combination for Political Science in NSUK?",
        "Can I study Political Science with my JAMB subjects?",
        "Can I study Political Science without one of the listed compulsory subjects?",
        "What optional subjects are accepted for Political Science?",
        "Is Mathematics compulsory for Political Science at NSUK?",
        "Is English Language compulsory for Political Science at NSUK?",
        "What WAEC or NECO subjects do I need for Political Science?",
        "Does the right JAMB combination mean I am fully qualified for Political Science?",
        "Can I use Civic Education for Political Science at NSUK?",
        "Can I use Economics for Political Science at NSUK?",
        "Can I use Geography for Political Science at NSUK?",
        "Can I use Civic Education for Political Science at NSUK?",
        "Can I use Geography for Political Science at NSUK?",
        "Can I use Christian Religious Studies for Political Science at NSUK?"
      ],
      "sourcePages": [
        15,
        16
      ],
      "reviewLevel": "normal",
      "sourceNotes": [
        "Source page(s): 15, 16."
      ]
    },
    {
      "school": "Nasarawa State University, Keffi",
      "schoolShortName": "NSUK",
      "academicSession": "2025/2026",
      "sourceLabel": "NSUK Post UTME Subject Combination 2025/2026",
      "programme": "Broadcasting",
      "slug": "nsuk-broadcasting-requirements",
      "categorySlug": "programme-requirements",
      "type": "programme",
      "status": "published",
      "title": "NSUK Broadcasting Admission Subject Combination",
      "question": "What are the JAMB and O'Level subject requirements for Broadcasting at NSUK?",
      "jamb": {
        "totalRequiredSubjects": 4,
        "compulsorySubjects": [
          "Use of English",
          "Literature-in-English"
        ],
        "optionalChooseCount": 2,
        "optionalSubjects": [
          "Government",
          "Economics",
          "Islamic Studies",
          "Christian Religious Studies"
        ],
        "requiredSubjectGroups": [],
        "ruleSummary": "Candidate must register four JAMB subjects. Use of English is compulsory. The remaining subjects must follow the compulsory and optional subject rules for this programme."
      },
      "olevel": {
        "minimumCredits": 5,
        "globalCompulsorySubjects": [
          "English Language",
          "Mathematics"
        ],
        "programmeSpecificCompulsorySubjects": [
          "Literature-in-English"
        ],
        "compulsorySubjects": [
          "English Language",
          "Mathematics",
          "Literature-in-English"
        ],
        "optionalSubjects": [
          "Government/History",
          "Economics",
          "Christian Religious Studies",
          "Islamic Studies",
          "Geography"
        ],
        "acceptedExamTypes": [
          "WAEC",
          "NECO",
          "NABTEB",
          "Other accepted senior secondary examinations"
        ],
        "ruleSummary": "Candidate must have at least five O'Level credit passes, including English Language and Mathematics, plus the programme-specific required/accepted subjects."
      },
      "warnings": [
        "Use of English in JAMB is different from English Language in O'Level; both must be treated separately.",
        "Correct JAMB subjects do not automatically satisfy O'Level requirements.",
        "Optional subjects should be selected only from the approved list for this programme.",
        "O'Level requires at least five credit passes, including English Language and Mathematics."
      ],
      "needsReview": false,
      "keywords": [
        "NSUK",
        "Nasarawa State University, Keffi",
        "Broadcasting",
        "JAMB",
        "UTME",
        "Post UTME",
        "O'Level",
        "WAEC",
        "NECO",
        "NABTEB",
        "subject combination",
        "admission requirement",
        "Use of English",
        "Literature-in-English",
        "Government",
        "Economics",
        "Islamic Studies",
        "Christian Religious Studies",
        "English Language",
        "Mathematics",
        "Government/History",
        "Geography"
      ],
      "answer": "For Broadcasting at NSUK, the JAMB combination must include Use of English, Literature-in-English; the candidate should choose 2 subject(s) from Government, Economics, Islamic Studies, Christian Religious Studies to make four JAMB subjects. For O'Level, the candidate needs at least five credit passes including English Language, Mathematics, Literature-in-English. Accepted additional O'Level subjects include Government/History, Economics, Christian Religious Studies, Islamic Studies, Geography.",
      "content": "Programme: Broadcasting\nSchool: Nasarawa State University, Keffi (NSUK)\nAcademic session: 2025/2026\nRequirement type: JAMB subject combination and O'Level combination.\nJAMB requirement: The candidate must register four JAMB subjects. Compulsory JAMB subject(s): Use of English, Literature-in-English. Optional JAMB subject(s): Government, Economics, Islamic Studies, Christian Religious Studies. Optional subjects needed: 2.\nO'Level requirement: The candidate must have at least five credit passes from WAEC, NECO, NABTEB, or another accepted senior secondary examination. English Language and Mathematics are compulsory for O'Level. Programme-specific compulsory O'Level subject(s): Literature-in-English. Accepted optional O'Level subject(s): Government/History, Economics, Christian Religious Studies, Islamic Studies, Geography.\nStudent guidance: The student should not assume that any subject is accepted. They should match both the JAMB requirement and the O'Level requirement for Broadcasting.",
      "questionVariants": [
        "What are the JAMB subjects for Broadcasting at NSUK?",
        "What O'Level subjects do I need for Broadcasting at NSUK?",
        "What is the subject combination for Broadcasting in NSUK?",
        "Can I study Broadcasting with my JAMB subjects?",
        "Can I study Broadcasting without one of the listed compulsory subjects?",
        "What optional subjects are accepted for Broadcasting?",
        "Is Mathematics compulsory for Broadcasting at NSUK?",
        "Is English Language compulsory for Broadcasting at NSUK?",
        "What WAEC or NECO subjects do I need for Broadcasting?",
        "Does the right JAMB combination mean I am fully qualified for Broadcasting?",
        "Can I use Government for Broadcasting at NSUK?",
        "Can I use Economics for Broadcasting at NSUK?",
        "Can I use Islamic Studies for Broadcasting at NSUK?",
        "Can I use Government/History for Broadcasting at NSUK?",
        "Can I use Economics for Broadcasting at NSUK?",
        "Can I use Christian Religious Studies for Broadcasting at NSUK?"
      ],
      "sourcePages": [
        16
      ],
      "reviewLevel": "normal",
      "sourceNotes": [
        "Source page(s): 16."
      ]
    },
    {
      "school": "Nasarawa State University, Keffi",
      "schoolShortName": "NSUK",
      "academicSession": "2025/2026",
      "sourceLabel": "NSUK Post UTME Subject Combination 2025/2026",
      "programme": "Public Relations",
      "slug": "nsuk-public-relations-requirements",
      "categorySlug": "programme-requirements",
      "type": "programme",
      "status": "published",
      "title": "NSUK Public Relations Admission Subject Combination",
      "question": "What are the JAMB and O'Level subject requirements for Public Relations at NSUK?",
      "jamb": {
        "totalRequiredSubjects": 4,
        "compulsorySubjects": [
          "Use of English",
          "Literature-in-English"
        ],
        "optionalChooseCount": 2,
        "optionalSubjects": [
          "Government",
          "Economics",
          "Islamic Studies",
          "Christian Religious Studies"
        ],
        "requiredSubjectGroups": [],
        "ruleSummary": "Candidate must register four JAMB subjects. Use of English is compulsory. The remaining subjects must follow the compulsory and optional subject rules for this programme."
      },
      "olevel": {
        "minimumCredits": 5,
        "globalCompulsorySubjects": [
          "English Language",
          "Mathematics"
        ],
        "programmeSpecificCompulsorySubjects": [
          "Literature-in-English"
        ],
        "compulsorySubjects": [
          "English Language",
          "Mathematics",
          "Literature-in-English"
        ],
        "optionalSubjects": [
          "Government/History",
          "Economics",
          "Christian Religious Studies",
          "Islamic Studies",
          "Geography"
        ],
        "acceptedExamTypes": [
          "WAEC",
          "NECO",
          "NABTEB",
          "Other accepted senior secondary examinations"
        ],
        "ruleSummary": "Candidate must have at least five O'Level credit passes, including English Language and Mathematics, plus the programme-specific required/accepted subjects."
      },
      "warnings": [
        "Use of English in JAMB is different from English Language in O'Level; both must be treated separately.",
        "Correct JAMB subjects do not automatically satisfy O'Level requirements.",
        "Optional subjects should be selected only from the approved list for this programme.",
        "O'Level requires at least five credit passes, including English Language and Mathematics."
      ],
      "needsReview": false,
      "keywords": [
        "NSUK",
        "Nasarawa State University, Keffi",
        "Public Relations",
        "JAMB",
        "UTME",
        "Post UTME",
        "O'Level",
        "WAEC",
        "NECO",
        "NABTEB",
        "subject combination",
        "admission requirement",
        "Use of English",
        "Literature-in-English",
        "Government",
        "Economics",
        "Islamic Studies",
        "Christian Religious Studies",
        "English Language",
        "Mathematics",
        "Government/History",
        "Geography"
      ],
      "answer": "For Public Relations at NSUK, the JAMB combination must include Use of English, Literature-in-English; the candidate should choose 2 subject(s) from Government, Economics, Islamic Studies, Christian Religious Studies to make four JAMB subjects. For O'Level, the candidate needs at least five credit passes including English Language, Mathematics, Literature-in-English. Accepted additional O'Level subjects include Government/History, Economics, Christian Religious Studies, Islamic Studies, Geography.",
      "content": "Programme: Public Relations\nSchool: Nasarawa State University, Keffi (NSUK)\nAcademic session: 2025/2026\nRequirement type: JAMB subject combination and O'Level combination.\nJAMB requirement: The candidate must register four JAMB subjects. Compulsory JAMB subject(s): Use of English, Literature-in-English. Optional JAMB subject(s): Government, Economics, Islamic Studies, Christian Religious Studies. Optional subjects needed: 2.\nO'Level requirement: The candidate must have at least five credit passes from WAEC, NECO, NABTEB, or another accepted senior secondary examination. English Language and Mathematics are compulsory for O'Level. Programme-specific compulsory O'Level subject(s): Literature-in-English. Accepted optional O'Level subject(s): Government/History, Economics, Christian Religious Studies, Islamic Studies, Geography.\nStudent guidance: The student should not assume that any subject is accepted. They should match both the JAMB requirement and the O'Level requirement for Public Relations.",
      "questionVariants": [
        "What are the JAMB subjects for Public Relations at NSUK?",
        "What O'Level subjects do I need for Public Relations at NSUK?",
        "What is the subject combination for Public Relations in NSUK?",
        "Can I study Public Relations with my JAMB subjects?",
        "Can I study Public Relations without one of the listed compulsory subjects?",
        "What optional subjects are accepted for Public Relations?",
        "Is Mathematics compulsory for Public Relations at NSUK?",
        "Is English Language compulsory for Public Relations at NSUK?",
        "What WAEC or NECO subjects do I need for Public Relations?",
        "Does the right JAMB combination mean I am fully qualified for Public Relations?",
        "Can I use Government for Public Relations at NSUK?",
        "Can I use Economics for Public Relations at NSUK?",
        "Can I use Islamic Studies for Public Relations at NSUK?",
        "Can I use Government/History for Public Relations at NSUK?",
        "Can I use Economics for Public Relations at NSUK?",
        "Can I use Christian Religious Studies for Public Relations at NSUK?"
      ],
      "sourcePages": [
        16
      ],
      "reviewLevel": "normal",
      "sourceNotes": [
        "Source page(s): 16."
      ]
    },
    {
      "school": "Nasarawa State University, Keffi",
      "schoolShortName": "NSUK",
      "academicSession": "2025/2026",
      "sourceLabel": "NSUK Post UTME Subject Combination 2025/2026",
      "programme": "Journalism and Media Studies",
      "slug": "nsuk-journalism-and-media-studies-requirements",
      "categorySlug": "programme-requirements",
      "type": "programme",
      "status": "published",
      "title": "NSUK Journalism and Media Studies Admission Subject Combination",
      "question": "What are the JAMB and O'Level subject requirements for Journalism and Media Studies at NSUK?",
      "jamb": {
        "totalRequiredSubjects": 4,
        "compulsorySubjects": [
          "Use of English",
          "Literature-in-English"
        ],
        "optionalChooseCount": 2,
        "optionalSubjects": [
          "Government",
          "Economics",
          "Islamic Studies",
          "Christian Religious Studies"
        ],
        "requiredSubjectGroups": [],
        "ruleSummary": "Candidate must register four JAMB subjects. Use of English is compulsory. The remaining subjects must follow the compulsory and optional subject rules for this programme."
      },
      "olevel": {
        "minimumCredits": 5,
        "globalCompulsorySubjects": [
          "English Language",
          "Mathematics"
        ],
        "programmeSpecificCompulsorySubjects": [
          "Literature-in-English"
        ],
        "compulsorySubjects": [
          "English Language",
          "Mathematics",
          "Literature-in-English"
        ],
        "optionalSubjects": [
          "Government/History",
          "Economics",
          "Christian Religious Studies",
          "Islamic Studies",
          "Geography"
        ],
        "acceptedExamTypes": [
          "WAEC",
          "NECO",
          "NABTEB",
          "Other accepted senior secondary examinations"
        ],
        "ruleSummary": "Candidate must have at least five O'Level credit passes, including English Language and Mathematics, plus the programme-specific required/accepted subjects."
      },
      "warnings": [
        "Use of English in JAMB is different from English Language in O'Level; both must be treated separately.",
        "Correct JAMB subjects do not automatically satisfy O'Level requirements.",
        "Optional subjects should be selected only from the approved list for this programme.",
        "O'Level requires at least five credit passes, including English Language and Mathematics."
      ],
      "needsReview": false,
      "keywords": [
        "NSUK",
        "Nasarawa State University, Keffi",
        "Journalism and Media Studies",
        "JAMB",
        "UTME",
        "Post UTME",
        "O'Level",
        "WAEC",
        "NECO",
        "NABTEB",
        "subject combination",
        "admission requirement",
        "Use of English",
        "Literature-in-English",
        "Government",
        "Economics",
        "Islamic Studies",
        "Christian Religious Studies",
        "English Language",
        "Mathematics",
        "Government/History",
        "Geography"
      ],
      "answer": "For Journalism and Media Studies at NSUK, the JAMB combination must include Use of English, Literature-in-English; the candidate should choose 2 subject(s) from Government, Economics, Islamic Studies, Christian Religious Studies to make four JAMB subjects. For O'Level, the candidate needs at least five credit passes including English Language, Mathematics, Literature-in-English. Accepted additional O'Level subjects include Government/History, Economics, Christian Religious Studies, Islamic Studies, Geography.",
      "content": "Programme: Journalism and Media Studies\nSchool: Nasarawa State University, Keffi (NSUK)\nAcademic session: 2025/2026\nRequirement type: JAMB subject combination and O'Level combination.\nJAMB requirement: The candidate must register four JAMB subjects. Compulsory JAMB subject(s): Use of English, Literature-in-English. Optional JAMB subject(s): Government, Economics, Islamic Studies, Christian Religious Studies. Optional subjects needed: 2.\nO'Level requirement: The candidate must have at least five credit passes from WAEC, NECO, NABTEB, or another accepted senior secondary examination. English Language and Mathematics are compulsory for O'Level. Programme-specific compulsory O'Level subject(s): Literature-in-English. Accepted optional O'Level subject(s): Government/History, Economics, Christian Religious Studies, Islamic Studies, Geography.\nStudent guidance: The student should not assume that any subject is accepted. They should match both the JAMB requirement and the O'Level requirement for Journalism and Media Studies.",
      "questionVariants": [
        "What are the JAMB subjects for Journalism and Media Studies at NSUK?",
        "What O'Level subjects do I need for Journalism and Media Studies at NSUK?",
        "What is the subject combination for Journalism and Media Studies in NSUK?",
        "Can I study Journalism and Media Studies with my JAMB subjects?",
        "Can I study Journalism and Media Studies without one of the listed compulsory subjects?",
        "What optional subjects are accepted for Journalism and Media Studies?",
        "Is Mathematics compulsory for Journalism and Media Studies at NSUK?",
        "Is English Language compulsory for Journalism and Media Studies at NSUK?",
        "What WAEC or NECO subjects do I need for Journalism and Media Studies?",
        "Does the right JAMB combination mean I am fully qualified for Journalism and Media Studies?",
        "Can I use Government for Journalism and Media Studies at NSUK?",
        "Can I use Economics for Journalism and Media Studies at NSUK?",
        "Can I use Islamic Studies for Journalism and Media Studies at NSUK?",
        "Can I use Government/History for Journalism and Media Studies at NSUK?",
        "Can I use Economics for Journalism and Media Studies at NSUK?",
        "Can I use Christian Religious Studies for Journalism and Media Studies at NSUK?"
      ],
      "sourcePages": [
        16
      ],
      "reviewLevel": "normal",
      "sourceNotes": [
        "Source page(s): 16."
      ]
    },
    {
      "school": "Nasarawa State University, Keffi",
      "schoolShortName": "NSUK",
      "academicSession": "2025/2026",
      "sourceLabel": "NSUK Post UTME Subject Combination 2025/2026",
      "programme": "Physics",
      "slug": "nsuk-physics-requirements",
      "categorySlug": "programme-requirements",
      "type": "programme",
      "status": "published",
      "title": "NSUK Physics Admission Subject Combination",
      "question": "What are the JAMB and O'Level subject requirements for Physics at NSUK?",
      "jamb": {
        "totalRequiredSubjects": 4,
        "compulsorySubjects": [
          "Use of English",
          "Physics",
          "Mathematics"
        ],
        "optionalChooseCount": 1,
        "optionalSubjects": [
          "Chemistry",
          "Biology"
        ],
        "requiredSubjectGroups": [],
        "ruleSummary": "Candidate must register four JAMB subjects. Use of English is compulsory. The remaining subjects must follow the compulsory and optional subject rules for this programme."
      },
      "olevel": {
        "minimumCredits": 5,
        "globalCompulsorySubjects": [
          "English Language",
          "Mathematics"
        ],
        "programmeSpecificCompulsorySubjects": [
          "Physics",
          "Chemistry"
        ],
        "compulsorySubjects": [
          "English Language",
          "Mathematics",
          "Physics",
          "Chemistry"
        ],
        "optionalSubjects": [
          "Further Mathematics",
          "Biology",
          "Agricultural Science"
        ],
        "acceptedExamTypes": [
          "WAEC",
          "NECO",
          "NABTEB",
          "Other accepted senior secondary examinations"
        ],
        "ruleSummary": "Candidate must have at least five O'Level credit passes, including English Language and Mathematics, plus the programme-specific required/accepted subjects."
      },
      "warnings": [
        "Use of English in JAMB is different from English Language in O'Level; both must be treated separately.",
        "Correct JAMB subjects do not automatically satisfy O'Level requirements.",
        "Optional subjects should be selected only from the approved list for this programme.",
        "O'Level requires at least five credit passes, including English Language and Mathematics."
      ],
      "needsReview": false,
      "keywords": [
        "NSUK",
        "Nasarawa State University, Keffi",
        "Physics",
        "JAMB",
        "UTME",
        "Post UTME",
        "O'Level",
        "WAEC",
        "NECO",
        "NABTEB",
        "subject combination",
        "admission requirement",
        "Use of English",
        "Mathematics",
        "Chemistry",
        "Biology",
        "English Language",
        "Further Mathematics",
        "Agricultural Science"
      ],
      "answer": "For Physics at NSUK, the JAMB combination must include Use of English, Physics, Mathematics; the candidate should choose 1 subject(s) from Chemistry, Biology to make four JAMB subjects. For O'Level, the candidate needs at least five credit passes including English Language, Mathematics, Physics, Chemistry. Accepted additional O'Level subjects include Further Mathematics, Biology, Agricultural Science.",
      "content": "Programme: Physics\nSchool: Nasarawa State University, Keffi (NSUK)\nAcademic session: 2025/2026\nRequirement type: JAMB subject combination and O'Level combination.\nJAMB requirement: The candidate must register four JAMB subjects. Compulsory JAMB subject(s): Use of English, Physics, Mathematics. Optional JAMB subject(s): Chemistry, Biology. Optional subjects needed: 1.\nO'Level requirement: The candidate must have at least five credit passes from WAEC, NECO, NABTEB, or another accepted senior secondary examination. English Language and Mathematics are compulsory for O'Level. Programme-specific compulsory O'Level subject(s): Physics, Chemistry. Accepted optional O'Level subject(s): Further Mathematics, Biology, Agricultural Science.\nStudent guidance: The student should not assume that any subject is accepted. They should match both the JAMB requirement and the O'Level requirement for Physics.",
      "questionVariants": [
        "What are the JAMB subjects for Physics at NSUK?",
        "What O'Level subjects do I need for Physics at NSUK?",
        "What is the subject combination for Physics in NSUK?",
        "Can I study Physics with my JAMB subjects?",
        "Can I study Physics without one of the listed compulsory subjects?",
        "What optional subjects are accepted for Physics?",
        "Is Mathematics compulsory for Physics at NSUK?",
        "Is English Language compulsory for Physics at NSUK?",
        "What WAEC or NECO subjects do I need for Physics?",
        "Does the right JAMB combination mean I am fully qualified for Physics?",
        "Can I use Chemistry for Physics at NSUK?",
        "Can I use Biology for Physics at NSUK?",
        "Can I use Further Mathematics for Physics at NSUK?",
        "Can I use Biology for Physics at NSUK?",
        "Can I use Agricultural Science for Physics at NSUK?"
      ],
      "sourcePages": [
        16
      ],
      "reviewLevel": "normal",
      "sourceNotes": [
        "Source page(s): 16."
      ]
    },
    {
      "school": "Nasarawa State University, Keffi",
      "schoolShortName": "NSUK",
      "academicSession": "2025/2026",
      "sourceLabel": "NSUK Post UTME Subject Combination 2025/2026",
      "programme": "Chemistry",
      "slug": "nsuk-chemistry-requirements",
      "categorySlug": "programme-requirements",
      "type": "programme",
      "status": "published",
      "title": "NSUK Chemistry Admission Subject Combination",
      "question": "What are the JAMB and O'Level subject requirements for Chemistry at NSUK?",
      "jamb": {
        "totalRequiredSubjects": 4,
        "compulsorySubjects": [
          "Use of English",
          "Chemistry"
        ],
        "optionalChooseCount": 2,
        "optionalSubjects": [
          "Physics",
          "Biology",
          "Mathematics"
        ],
        "requiredSubjectGroups": [],
        "ruleSummary": "Candidate must register four JAMB subjects. Use of English is compulsory. The remaining subjects must follow the compulsory and optional subject rules for this programme."
      },
      "olevel": {
        "minimumCredits": 5,
        "globalCompulsorySubjects": [
          "English Language",
          "Mathematics"
        ],
        "programmeSpecificCompulsorySubjects": [
          "Physics",
          "Chemistry",
          "Biology/Agricultural Science"
        ],
        "compulsorySubjects": [
          "English Language",
          "Mathematics",
          "Physics",
          "Chemistry",
          "Biology/Agricultural Science"
        ],
        "optionalSubjects": [],
        "acceptedExamTypes": [
          "WAEC",
          "NECO",
          "NABTEB",
          "Other accepted senior secondary examinations"
        ],
        "ruleSummary": "Candidate must have at least five O'Level credit passes, including English Language and Mathematics, plus the programme-specific required/accepted subjects."
      },
      "warnings": [
        "Use of English in JAMB is different from English Language in O'Level; both must be treated separately.",
        "Correct JAMB subjects do not automatically satisfy O'Level requirements.",
        "Optional subjects should be selected only from the approved list for this programme.",
        "O'Level requires at least five credit passes, including English Language and Mathematics.",
        "This row was split or ambiguous in the PDF layout and should be reviewed against the source before production import."
      ],
      "needsReview": true,
      "keywords": [
        "NSUK",
        "Nasarawa State University, Keffi",
        "Chemistry",
        "JAMB",
        "UTME",
        "Post UTME",
        "O'Level",
        "WAEC",
        "NECO",
        "NABTEB",
        "subject combination",
        "admission requirement",
        "Use of English",
        "Physics",
        "Biology",
        "Mathematics",
        "English Language",
        "Biology/Agricultural Science"
      ],
      "answer": "For Chemistry at NSUK, the JAMB combination must include Use of English, Chemistry; the candidate should choose 2 subject(s) from Physics, Biology, Mathematics to make four JAMB subjects. For O'Level, the candidate needs at least five credit passes including English Language, Mathematics, Physics, Chemistry, Biology/Agricultural Science. Accepted additional O'Level subjects include no additional optional subjects are listed.",
      "content": "Programme: Chemistry\nSchool: Nasarawa State University, Keffi (NSUK)\nAcademic session: 2025/2026\nRequirement type: JAMB subject combination and O'Level combination.\nJAMB requirement: The candidate must register four JAMB subjects. Compulsory JAMB subject(s): Use of English, Chemistry. Optional JAMB subject(s): Physics, Biology, Mathematics. Optional subjects needed: 2.\nO'Level requirement: The candidate must have at least five credit passes from WAEC, NECO, NABTEB, or another accepted senior secondary examination. English Language and Mathematics are compulsory for O'Level. Programme-specific compulsory O'Level subject(s): Physics, Chemistry, Biology/Agricultural Science. Accepted optional O'Level subject(s): no additional optional subjects are listed.\nStudent guidance: The student should not assume that any subject is accepted. They should match both the JAMB requirement and the O'Level requirement for Chemistry.",
      "questionVariants": [
        "What are the JAMB subjects for Chemistry at NSUK?",
        "What O'Level subjects do I need for Chemistry at NSUK?",
        "What is the subject combination for Chemistry in NSUK?",
        "Can I study Chemistry with my JAMB subjects?",
        "Can I study Chemistry without one of the listed compulsory subjects?",
        "What optional subjects are accepted for Chemistry?",
        "Is Mathematics compulsory for Chemistry at NSUK?",
        "Is English Language compulsory for Chemistry at NSUK?",
        "What WAEC or NECO subjects do I need for Chemistry?",
        "Does the right JAMB combination mean I am fully qualified for Chemistry?",
        "Can I use Physics for Chemistry at NSUK?",
        "Can I use Biology for Chemistry at NSUK?",
        "Can I use Mathematics for Chemistry at NSUK?"
      ],
      "sourcePages": [
        16,
        17
      ],
      "reviewLevel": "manual_check_recommended",
      "sourceNotes": [
        "Source page(s): 16, 17."
      ]
    },
    {
      "school": "Nasarawa State University, Keffi",
      "schoolShortName": "NSUK",
      "academicSession": "2025/2026",
      "sourceLabel": "NSUK Post UTME Subject Combination 2025/2026",
      "programme": "Mathematics",
      "slug": "nsuk-mathematics-requirements",
      "categorySlug": "programme-requirements",
      "type": "programme",
      "status": "published",
      "title": "NSUK Mathematics Admission Subject Combination",
      "question": "What are the JAMB and O'Level subject requirements for Mathematics at NSUK?",
      "jamb": {
        "totalRequiredSubjects": 4,
        "compulsorySubjects": [
          "Use of English",
          "Mathematics",
          "Physics"
        ],
        "optionalChooseCount": 1,
        "optionalSubjects": [
          "Economics",
          "Chemistry",
          "Geography"
        ],
        "requiredSubjectGroups": [],
        "ruleSummary": "Candidate must register four JAMB subjects. Use of English is compulsory. The remaining subjects must follow the compulsory and optional subject rules for this programme."
      },
      "olevel": {
        "minimumCredits": 5,
        "globalCompulsorySubjects": [
          "English Language",
          "Mathematics"
        ],
        "programmeSpecificCompulsorySubjects": [
          "Physics"
        ],
        "compulsorySubjects": [
          "English Language",
          "Mathematics",
          "Physics"
        ],
        "optionalSubjects": [
          "Chemistry",
          "Economics/Geography",
          "Biology/Agricultural Science"
        ],
        "acceptedExamTypes": [
          "WAEC",
          "NECO",
          "NABTEB",
          "Other accepted senior secondary examinations"
        ],
        "ruleSummary": "Candidate must have at least five O'Level credit passes, including English Language and Mathematics, plus the programme-specific required/accepted subjects."
      },
      "warnings": [
        "Use of English in JAMB is different from English Language in O'Level; both must be treated separately.",
        "Correct JAMB subjects do not automatically satisfy O'Level requirements.",
        "Optional subjects should be selected only from the approved list for this programme.",
        "O'Level requires at least five credit passes, including English Language and Mathematics."
      ],
      "needsReview": false,
      "keywords": [
        "NSUK",
        "Nasarawa State University, Keffi",
        "Mathematics",
        "JAMB",
        "UTME",
        "Post UTME",
        "O'Level",
        "WAEC",
        "NECO",
        "NABTEB",
        "subject combination",
        "admission requirement",
        "Use of English",
        "Physics",
        "Economics",
        "Chemistry",
        "Geography",
        "English Language",
        "Economics/Geography",
        "Biology/Agricultural Science"
      ],
      "answer": "For Mathematics at NSUK, the JAMB combination must include Use of English, Mathematics, Physics; the candidate should choose 1 subject(s) from Economics, Chemistry, Geography to make four JAMB subjects. For O'Level, the candidate needs at least five credit passes including English Language, Mathematics, Physics. Accepted additional O'Level subjects include Chemistry, Economics/Geography, Biology/Agricultural Science.",
      "content": "Programme: Mathematics\nSchool: Nasarawa State University, Keffi (NSUK)\nAcademic session: 2025/2026\nRequirement type: JAMB subject combination and O'Level combination.\nJAMB requirement: The candidate must register four JAMB subjects. Compulsory JAMB subject(s): Use of English, Mathematics, Physics. Optional JAMB subject(s): Economics, Chemistry, Geography. Optional subjects needed: 1.\nO'Level requirement: The candidate must have at least five credit passes from WAEC, NECO, NABTEB, or another accepted senior secondary examination. English Language and Mathematics are compulsory for O'Level. Programme-specific compulsory O'Level subject(s): Physics. Accepted optional O'Level subject(s): Chemistry, Economics/Geography, Biology/Agricultural Science.\nStudent guidance: The student should not assume that any subject is accepted. They should match both the JAMB requirement and the O'Level requirement for Mathematics.",
      "questionVariants": [
        "What are the JAMB subjects for Mathematics at NSUK?",
        "What O'Level subjects do I need for Mathematics at NSUK?",
        "What is the subject combination for Mathematics in NSUK?",
        "Can I study Mathematics with my JAMB subjects?",
        "Can I study Mathematics without one of the listed compulsory subjects?",
        "What optional subjects are accepted for Mathematics?",
        "Is Mathematics compulsory for Mathematics at NSUK?",
        "Is English Language compulsory for Mathematics at NSUK?",
        "What WAEC or NECO subjects do I need for Mathematics?",
        "Does the right JAMB combination mean I am fully qualified for Mathematics?",
        "Can I use Economics for Mathematics at NSUK?",
        "Can I use Chemistry for Mathematics at NSUK?",
        "Can I use Geography for Mathematics at NSUK?",
        "Can I use Chemistry for Mathematics at NSUK?",
        "Can I use Economics/Geography for Mathematics at NSUK?",
        "Can I use Biology/Agricultural Science for Mathematics at NSUK?"
      ],
      "sourcePages": [
        17
      ],
      "reviewLevel": "normal",
      "sourceNotes": [
        "Source page(s): 17."
      ]
    },
    {
      "school": "Nasarawa State University, Keffi",
      "schoolShortName": "NSUK",
      "academicSession": "2025/2026",
      "sourceLabel": "NSUK Post UTME Subject Combination 2025/2026",
      "programme": "Statistics",
      "slug": "nsuk-statistics-requirements",
      "categorySlug": "programme-requirements",
      "type": "programme",
      "status": "published",
      "title": "NSUK Statistics Admission Subject Combination",
      "question": "What are the JAMB and O'Level subject requirements for Statistics at NSUK?",
      "jamb": {
        "totalRequiredSubjects": 4,
        "compulsorySubjects": [
          "Use of English",
          "Mathematics"
        ],
        "optionalChooseCount": 2,
        "optionalSubjects": [
          "Physics",
          "Chemistry",
          "Economics",
          "Further Mathematics"
        ],
        "requiredSubjectGroups": [],
        "ruleSummary": "Candidate must register four JAMB subjects. Use of English is compulsory. The remaining subjects must follow the compulsory and optional subject rules for this programme."
      },
      "olevel": {
        "minimumCredits": 5,
        "globalCompulsorySubjects": [
          "English Language",
          "Mathematics"
        ],
        "programmeSpecificCompulsorySubjects": [],
        "compulsorySubjects": [
          "English Language",
          "Mathematics"
        ],
        "optionalSubjects": [
          "Physics",
          "Biology",
          "Chemistry",
          "Further Mathematics",
          "Economics",
          "Geography"
        ],
        "acceptedExamTypes": [
          "WAEC",
          "NECO",
          "NABTEB",
          "Other accepted senior secondary examinations"
        ],
        "ruleSummary": "Candidate must have at least five O'Level credit passes, including English Language and Mathematics, plus the programme-specific required/accepted subjects."
      },
      "warnings": [
        "Use of English in JAMB is different from English Language in O'Level; both must be treated separately.",
        "Correct JAMB subjects do not automatically satisfy O'Level requirements.",
        "Optional subjects should be selected only from the approved list for this programme.",
        "O'Level requires at least five credit passes, including English Language and Mathematics."
      ],
      "needsReview": false,
      "keywords": [
        "NSUK",
        "Nasarawa State University, Keffi",
        "Statistics",
        "JAMB",
        "UTME",
        "Post UTME",
        "O'Level",
        "WAEC",
        "NECO",
        "NABTEB",
        "subject combination",
        "admission requirement",
        "Use of English",
        "Mathematics",
        "Physics",
        "Chemistry",
        "Economics",
        "Further Mathematics",
        "English Language",
        "Biology",
        "Geography"
      ],
      "answer": "For Statistics at NSUK, the JAMB combination must include Use of English, Mathematics; the candidate should choose 2 subject(s) from Physics, Chemistry, Economics, Further Mathematics to make four JAMB subjects. For O'Level, the candidate needs at least five credit passes including English Language, Mathematics. Accepted additional O'Level subjects include Physics, Biology, Chemistry, Further Mathematics, Economics, Geography.",
      "content": "Programme: Statistics\nSchool: Nasarawa State University, Keffi (NSUK)\nAcademic session: 2025/2026\nRequirement type: JAMB subject combination and O'Level combination.\nJAMB requirement: The candidate must register four JAMB subjects. Compulsory JAMB subject(s): Use of English, Mathematics. Optional JAMB subject(s): Physics, Chemistry, Economics, Further Mathematics. Optional subjects needed: 2.\nO'Level requirement: The candidate must have at least five credit passes from WAEC, NECO, NABTEB, or another accepted senior secondary examination. English Language and Mathematics are compulsory for O'Level. Programme-specific compulsory O'Level subject(s): none listed beyond English Language and Mathematics. Accepted optional O'Level subject(s): Physics, Biology, Chemistry, Further Mathematics, Economics, Geography.\nStudent guidance: The student should not assume that any subject is accepted. They should match both the JAMB requirement and the O'Level requirement for Statistics.",
      "questionVariants": [
        "What are the JAMB subjects for Statistics at NSUK?",
        "What O'Level subjects do I need for Statistics at NSUK?",
        "What is the subject combination for Statistics in NSUK?",
        "Can I study Statistics with my JAMB subjects?",
        "Can I study Statistics without one of the listed compulsory subjects?",
        "What optional subjects are accepted for Statistics?",
        "Is Mathematics compulsory for Statistics at NSUK?",
        "Is English Language compulsory for Statistics at NSUK?",
        "What WAEC or NECO subjects do I need for Statistics?",
        "Does the right JAMB combination mean I am fully qualified for Statistics?",
        "Can I use Physics for Statistics at NSUK?",
        "Can I use Chemistry for Statistics at NSUK?",
        "Can I use Economics for Statistics at NSUK?",
        "Can I use Physics for Statistics at NSUK?",
        "Can I use Biology for Statistics at NSUK?",
        "Can I use Chemistry for Statistics at NSUK?"
      ],
      "sourcePages": [
        17
      ],
      "reviewLevel": "normal",
      "sourceNotes": [
        "Source page(s): 17."
      ]
    },
    {
      "school": "Nasarawa State University, Keffi",
      "schoolShortName": "NSUK",
      "academicSession": "2025/2026",
      "sourceLabel": "NSUK Post UTME Subject Combination 2025/2026",
      "programme": "Statistics and Data Analytics",
      "slug": "nsuk-statistics-and-data-analytics-requirements",
      "categorySlug": "programme-requirements",
      "type": "programme",
      "status": "published",
      "title": "NSUK Statistics and Data Analytics Admission Subject Combination",
      "question": "What are the JAMB and O'Level subject requirements for Statistics and Data Analytics at NSUK?",
      "jamb": {
        "totalRequiredSubjects": 4,
        "compulsorySubjects": [
          "Use of English",
          "Mathematics",
          "Physics"
        ],
        "optionalChooseCount": 1,
        "optionalSubjects": [
          "Biology",
          "Chemistry",
          "Geography",
          "Computer Studies"
        ],
        "requiredSubjectGroups": [],
        "ruleSummary": "Candidate must register four JAMB subjects. Use of English is compulsory. The remaining subjects must follow the compulsory and optional subject rules for this programme."
      },
      "olevel": {
        "minimumCredits": 5,
        "globalCompulsorySubjects": [
          "English Language",
          "Mathematics"
        ],
        "programmeSpecificCompulsorySubjects": [
          "Physics"
        ],
        "compulsorySubjects": [
          "English Language",
          "Mathematics",
          "Physics"
        ],
        "optionalSubjects": [
          "Biology",
          "Chemistry",
          "Geography",
          "Computer Studies"
        ],
        "acceptedExamTypes": [
          "WAEC",
          "NECO",
          "NABTEB",
          "Other accepted senior secondary examinations"
        ],
        "ruleSummary": "Candidate must have at least five O'Level credit passes, including English Language and Mathematics, plus the programme-specific required/accepted subjects."
      },
      "warnings": [
        "Use of English in JAMB is different from English Language in O'Level; both must be treated separately.",
        "Correct JAMB subjects do not automatically satisfy O'Level requirements.",
        "Optional subjects should be selected only from the approved list for this programme.",
        "O'Level requires at least five credit passes, including English Language and Mathematics."
      ],
      "needsReview": false,
      "keywords": [
        "NSUK",
        "Nasarawa State University, Keffi",
        "Statistics and Data Analytics",
        "JAMB",
        "UTME",
        "Post UTME",
        "O'Level",
        "WAEC",
        "NECO",
        "NABTEB",
        "subject combination",
        "admission requirement",
        "Use of English",
        "Mathematics",
        "Physics",
        "Biology",
        "Chemistry",
        "Geography",
        "Computer Studies",
        "English Language"
      ],
      "answer": "For Statistics and Data Analytics at NSUK, the JAMB combination must include Use of English, Mathematics, Physics; the candidate should choose 1 subject(s) from Biology, Chemistry, Geography, Computer Studies to make four JAMB subjects. For O'Level, the candidate needs at least five credit passes including English Language, Mathematics, Physics. Accepted additional O'Level subjects include Biology, Chemistry, Geography, Computer Studies.",
      "content": "Programme: Statistics and Data Analytics\nSchool: Nasarawa State University, Keffi (NSUK)\nAcademic session: 2025/2026\nRequirement type: JAMB subject combination and O'Level combination.\nJAMB requirement: The candidate must register four JAMB subjects. Compulsory JAMB subject(s): Use of English, Mathematics, Physics. Optional JAMB subject(s): Biology, Chemistry, Geography, Computer Studies. Optional subjects needed: 1.\nO'Level requirement: The candidate must have at least five credit passes from WAEC, NECO, NABTEB, or another accepted senior secondary examination. English Language and Mathematics are compulsory for O'Level. Programme-specific compulsory O'Level subject(s): Physics. Accepted optional O'Level subject(s): Biology, Chemistry, Geography, Computer Studies.\nStudent guidance: The student should not assume that any subject is accepted. They should match both the JAMB requirement and the O'Level requirement for Statistics and Data Analytics.",
      "questionVariants": [
        "What are the JAMB subjects for Statistics and Data Analytics at NSUK?",
        "What O'Level subjects do I need for Statistics and Data Analytics at NSUK?",
        "What is the subject combination for Statistics and Data Analytics in NSUK?",
        "Can I study Statistics and Data Analytics with my JAMB subjects?",
        "Can I study Statistics and Data Analytics without one of the listed compulsory subjects?",
        "What optional subjects are accepted for Statistics and Data Analytics?",
        "Is Mathematics compulsory for Statistics and Data Analytics at NSUK?",
        "Is English Language compulsory for Statistics and Data Analytics at NSUK?",
        "What WAEC or NECO subjects do I need for Statistics and Data Analytics?",
        "Does the right JAMB combination mean I am fully qualified for Statistics and Data Analytics?",
        "Can I use Biology for Statistics and Data Analytics at NSUK?",
        "Can I use Chemistry for Statistics and Data Analytics at NSUK?",
        "Can I use Geography for Statistics and Data Analytics at NSUK?",
        "Can I use Biology for Statistics and Data Analytics at NSUK?",
        "Can I use Chemistry for Statistics and Data Analytics at NSUK?",
        "Can I use Geography for Statistics and Data Analytics at NSUK?"
      ],
      "sourcePages": [
        17
      ],
      "reviewLevel": "normal",
      "sourceNotes": [
        "Source page(s): 17."
      ]
    },
    {
      "school": "Nasarawa State University, Keffi",
      "schoolShortName": "NSUK",
      "academicSession": "2025/2026",
      "sourceLabel": "NSUK Post UTME Subject Combination 2025/2026",
      "programme": "Computer Science",
      "slug": "nsuk-computer-science-requirements",
      "categorySlug": "programme-requirements",
      "type": "programme",
      "status": "published",
      "title": "NSUK Computer Science Admission Subject Combination",
      "question": "What are the JAMB and O'Level subject requirements for Computer Science at NSUK?",
      "jamb": {
        "totalRequiredSubjects": 4,
        "compulsorySubjects": [
          "Use of English",
          "Mathematics",
          "Physics"
        ],
        "optionalChooseCount": 1,
        "optionalSubjects": [
          "Biology",
          "Chemistry",
          "Agricultural Science",
          "Economics",
          "Geography",
          "Further Mathematics"
        ],
        "requiredSubjectGroups": [],
        "ruleSummary": "Candidate must register four JAMB subjects. Use of English is compulsory. The remaining subjects must follow the compulsory and optional subject rules for this programme."
      },
      "olevel": {
        "minimumCredits": 5,
        "globalCompulsorySubjects": [
          "English Language",
          "Mathematics"
        ],
        "programmeSpecificCompulsorySubjects": [
          "Physics"
        ],
        "compulsorySubjects": [
          "English Language",
          "Mathematics",
          "Physics"
        ],
        "optionalSubjects": [
          "Chemistry",
          "Biology",
          "Agricultural Science",
          "Further Mathematics",
          "Economics",
          "Geography"
        ],
        "acceptedExamTypes": [
          "WAEC",
          "NECO",
          "NABTEB",
          "Other accepted senior secondary examinations"
        ],
        "ruleSummary": "Candidate must have at least five O'Level credit passes, including English Language and Mathematics, plus the programme-specific required/accepted subjects."
      },
      "warnings": [
        "Use of English in JAMB is different from English Language in O'Level; both must be treated separately.",
        "Correct JAMB subjects do not automatically satisfy O'Level requirements.",
        "Optional subjects should be selected only from the approved list for this programme.",
        "O'Level requires at least five credit passes, including English Language and Mathematics."
      ],
      "needsReview": false,
      "keywords": [
        "NSUK",
        "Nasarawa State University, Keffi",
        "Computer Science",
        "JAMB",
        "UTME",
        "Post UTME",
        "O'Level",
        "WAEC",
        "NECO",
        "NABTEB",
        "subject combination",
        "admission requirement",
        "Use of English",
        "Mathematics",
        "Physics",
        "Biology",
        "Chemistry",
        "Agricultural Science",
        "Economics",
        "Geography",
        "Further Mathematics",
        "English Language"
      ],
      "answer": "For Computer Science at NSUK, the JAMB combination must include Use of English, Mathematics, Physics; the candidate should choose 1 subject(s) from Biology, Chemistry, Agricultural Science, Economics, Geography, Further Mathematics to make four JAMB subjects. For O'Level, the candidate needs at least five credit passes including English Language, Mathematics, Physics. Accepted additional O'Level subjects include Chemistry, Biology, Agricultural Science, Further Mathematics, Economics, Geography.",
      "content": "Programme: Computer Science\nSchool: Nasarawa State University, Keffi (NSUK)\nAcademic session: 2025/2026\nRequirement type: JAMB subject combination and O'Level combination.\nJAMB requirement: The candidate must register four JAMB subjects. Compulsory JAMB subject(s): Use of English, Mathematics, Physics. Optional JAMB subject(s): Biology, Chemistry, Agricultural Science, Economics, Geography, Further Mathematics. Optional subjects needed: 1.\nO'Level requirement: The candidate must have at least five credit passes from WAEC, NECO, NABTEB, or another accepted senior secondary examination. English Language and Mathematics are compulsory for O'Level. Programme-specific compulsory O'Level subject(s): Physics. Accepted optional O'Level subject(s): Chemistry, Biology, Agricultural Science, Further Mathematics, Economics, Geography.\nStudent guidance: The student should not assume that any subject is accepted. They should match both the JAMB requirement and the O'Level requirement for Computer Science.",
      "questionVariants": [
        "What are the JAMB subjects for Computer Science at NSUK?",
        "What O'Level subjects do I need for Computer Science at NSUK?",
        "What is the subject combination for Computer Science in NSUK?",
        "Can I study Computer Science with my JAMB subjects?",
        "Can I study Computer Science without one of the listed compulsory subjects?",
        "What optional subjects are accepted for Computer Science?",
        "Is Mathematics compulsory for Computer Science at NSUK?",
        "Is English Language compulsory for Computer Science at NSUK?",
        "What WAEC or NECO subjects do I need for Computer Science?",
        "Does the right JAMB combination mean I am fully qualified for Computer Science?",
        "Can I use Biology for Computer Science at NSUK?",
        "Can I use Chemistry for Computer Science at NSUK?",
        "Can I use Agricultural Science for Computer Science at NSUK?",
        "Can I use Chemistry for Computer Science at NSUK?",
        "Can I use Biology for Computer Science at NSUK?",
        "Can I use Agricultural Science for Computer Science at NSUK?"
      ],
      "sourcePages": [
        17
      ],
      "reviewLevel": "normal",
      "sourceNotes": [
        "Source page(s): 17."
      ]
    },
    {
      "school": "Nasarawa State University, Keffi",
      "schoolShortName": "NSUK",
      "academicSession": "2025/2026",
      "sourceLabel": "NSUK Post UTME Subject Combination 2025/2026",
      "programme": "Cyber Security",
      "slug": "nsuk-cyber-security-requirements",
      "categorySlug": "programme-requirements",
      "type": "programme",
      "status": "published",
      "title": "NSUK Cyber Security Admission Subject Combination",
      "question": "What are the JAMB and O'Level subject requirements for Cyber Security at NSUK?",
      "jamb": {
        "totalRequiredSubjects": 4,
        "compulsorySubjects": [
          "Use of English",
          "Mathematics",
          "Physics"
        ],
        "optionalChooseCount": 1,
        "optionalSubjects": [
          "Biology",
          "Chemistry",
          "Agricultural Science",
          "Economics",
          "Geography"
        ],
        "requiredSubjectGroups": [],
        "ruleSummary": "Candidate must register four JAMB subjects. Use of English is compulsory. The remaining subjects must follow the compulsory and optional subject rules for this programme."
      },
      "olevel": {
        "minimumCredits": 5,
        "globalCompulsorySubjects": [
          "English Language",
          "Mathematics"
        ],
        "programmeSpecificCompulsorySubjects": [
          "Physics"
        ],
        "compulsorySubjects": [
          "English Language",
          "Mathematics",
          "Physics"
        ],
        "optionalSubjects": [
          "Chemistry",
          "Biology",
          "Agricultural Science",
          "Economics",
          "Geography"
        ],
        "acceptedExamTypes": [
          "WAEC",
          "NECO",
          "NABTEB",
          "Other accepted senior secondary examinations"
        ],
        "ruleSummary": "Candidate must have at least five O'Level credit passes, including English Language and Mathematics, plus the programme-specific required/accepted subjects."
      },
      "warnings": [
        "Use of English in JAMB is different from English Language in O'Level; both must be treated separately.",
        "Correct JAMB subjects do not automatically satisfy O'Level requirements.",
        "Optional subjects should be selected only from the approved list for this programme.",
        "O'Level requires at least five credit passes, including English Language and Mathematics."
      ],
      "needsReview": false,
      "keywords": [
        "NSUK",
        "Nasarawa State University, Keffi",
        "Cyber Security",
        "JAMB",
        "UTME",
        "Post UTME",
        "O'Level",
        "WAEC",
        "NECO",
        "NABTEB",
        "subject combination",
        "admission requirement",
        "Use of English",
        "Mathematics",
        "Physics",
        "Biology",
        "Chemistry",
        "Agricultural Science",
        "Economics",
        "Geography",
        "English Language"
      ],
      "answer": "For Cyber Security at NSUK, the JAMB combination must include Use of English, Mathematics, Physics; the candidate should choose 1 subject(s) from Biology, Chemistry, Agricultural Science, Economics, Geography to make four JAMB subjects. For O'Level, the candidate needs at least five credit passes including English Language, Mathematics, Physics. Accepted additional O'Level subjects include Chemistry, Biology, Agricultural Science, Economics, Geography.",
      "content": "Programme: Cyber Security\nSchool: Nasarawa State University, Keffi (NSUK)\nAcademic session: 2025/2026\nRequirement type: JAMB subject combination and O'Level combination.\nJAMB requirement: The candidate must register four JAMB subjects. Compulsory JAMB subject(s): Use of English, Mathematics, Physics. Optional JAMB subject(s): Biology, Chemistry, Agricultural Science, Economics, Geography. Optional subjects needed: 1.\nO'Level requirement: The candidate must have at least five credit passes from WAEC, NECO, NABTEB, or another accepted senior secondary examination. English Language and Mathematics are compulsory for O'Level. Programme-specific compulsory O'Level subject(s): Physics. Accepted optional O'Level subject(s): Chemistry, Biology, Agricultural Science, Economics, Geography.\nStudent guidance: The student should not assume that any subject is accepted. They should match both the JAMB requirement and the O'Level requirement for Cyber Security.",
      "questionVariants": [
        "What are the JAMB subjects for Cyber Security at NSUK?",
        "What O'Level subjects do I need for Cyber Security at NSUK?",
        "What is the subject combination for Cyber Security in NSUK?",
        "Can I study Cyber Security with my JAMB subjects?",
        "Can I study Cyber Security without one of the listed compulsory subjects?",
        "What optional subjects are accepted for Cyber Security?",
        "Is Mathematics compulsory for Cyber Security at NSUK?",
        "Is English Language compulsory for Cyber Security at NSUK?",
        "What WAEC or NECO subjects do I need for Cyber Security?",
        "Does the right JAMB combination mean I am fully qualified for Cyber Security?",
        "Can I use Biology for Cyber Security at NSUK?",
        "Can I use Chemistry for Cyber Security at NSUK?",
        "Can I use Agricultural Science for Cyber Security at NSUK?",
        "Can I use Chemistry for Cyber Security at NSUK?",
        "Can I use Biology for Cyber Security at NSUK?",
        "Can I use Agricultural Science for Cyber Security at NSUK?"
      ],
      "sourcePages": [
        17,
        18
      ],
      "reviewLevel": "normal",
      "sourceNotes": [
        "Source page(s): 17, 18."
      ]
    },
    {
      "school": "Nasarawa State University, Keffi",
      "schoolShortName": "NSUK",
      "academicSession": "2025/2026",
      "sourceLabel": "NSUK Post UTME Subject Combination 2025/2026",
      "programme": "Data Science",
      "slug": "nsuk-data-science-requirements",
      "categorySlug": "programme-requirements",
      "type": "programme",
      "status": "published",
      "title": "NSUK Data Science Admission Subject Combination",
      "question": "What are the JAMB and O'Level subject requirements for Data Science at NSUK?",
      "jamb": {
        "totalRequiredSubjects": 4,
        "compulsorySubjects": [
          "Use of English",
          "Mathematics",
          "Physics"
        ],
        "optionalChooseCount": 1,
        "optionalSubjects": [
          "Biology",
          "Chemistry",
          "Agricultural Science",
          "Economics",
          "Geography"
        ],
        "requiredSubjectGroups": [],
        "ruleSummary": "Candidate must register four JAMB subjects. Use of English is compulsory. The remaining subjects must follow the compulsory and optional subject rules for this programme."
      },
      "olevel": {
        "minimumCredits": 5,
        "globalCompulsorySubjects": [
          "English Language",
          "Mathematics"
        ],
        "programmeSpecificCompulsorySubjects": [
          "Physics"
        ],
        "compulsorySubjects": [
          "English Language",
          "Mathematics",
          "Physics"
        ],
        "optionalSubjects": [
          "Chemistry",
          "Biology",
          "Agricultural Science",
          "Further Mathematics",
          "Economics",
          "Geography"
        ],
        "acceptedExamTypes": [
          "WAEC",
          "NECO",
          "NABTEB",
          "Other accepted senior secondary examinations"
        ],
        "ruleSummary": "Candidate must have at least five O'Level credit passes, including English Language and Mathematics, plus the programme-specific required/accepted subjects."
      },
      "warnings": [
        "Use of English in JAMB is different from English Language in O'Level; both must be treated separately.",
        "Correct JAMB subjects do not automatically satisfy O'Level requirements.",
        "Optional subjects should be selected only from the approved list for this programme.",
        "O'Level requires at least five credit passes, including English Language and Mathematics."
      ],
      "needsReview": false,
      "keywords": [
        "NSUK",
        "Nasarawa State University, Keffi",
        "Data Science",
        "JAMB",
        "UTME",
        "Post UTME",
        "O'Level",
        "WAEC",
        "NECO",
        "NABTEB",
        "subject combination",
        "admission requirement",
        "Use of English",
        "Mathematics",
        "Physics",
        "Biology",
        "Chemistry",
        "Agricultural Science",
        "Economics",
        "Geography",
        "English Language",
        "Further Mathematics"
      ],
      "answer": "For Data Science at NSUK, the JAMB combination must include Use of English, Mathematics, Physics; the candidate should choose 1 subject(s) from Biology, Chemistry, Agricultural Science, Economics, Geography to make four JAMB subjects. For O'Level, the candidate needs at least five credit passes including English Language, Mathematics, Physics. Accepted additional O'Level subjects include Chemistry, Biology, Agricultural Science, Further Mathematics, Economics, Geography.",
      "content": "Programme: Data Science\nSchool: Nasarawa State University, Keffi (NSUK)\nAcademic session: 2025/2026\nRequirement type: JAMB subject combination and O'Level combination.\nJAMB requirement: The candidate must register four JAMB subjects. Compulsory JAMB subject(s): Use of English, Mathematics, Physics. Optional JAMB subject(s): Biology, Chemistry, Agricultural Science, Economics, Geography. Optional subjects needed: 1.\nO'Level requirement: The candidate must have at least five credit passes from WAEC, NECO, NABTEB, or another accepted senior secondary examination. English Language and Mathematics are compulsory for O'Level. Programme-specific compulsory O'Level subject(s): Physics. Accepted optional O'Level subject(s): Chemistry, Biology, Agricultural Science, Further Mathematics, Economics, Geography.\nStudent guidance: The student should not assume that any subject is accepted. They should match both the JAMB requirement and the O'Level requirement for Data Science.",
      "questionVariants": [
        "What are the JAMB subjects for Data Science at NSUK?",
        "What O'Level subjects do I need for Data Science at NSUK?",
        "What is the subject combination for Data Science in NSUK?",
        "Can I study Data Science with my JAMB subjects?",
        "Can I study Data Science without one of the listed compulsory subjects?",
        "What optional subjects are accepted for Data Science?",
        "Is Mathematics compulsory for Data Science at NSUK?",
        "Is English Language compulsory for Data Science at NSUK?",
        "What WAEC or NECO subjects do I need for Data Science?",
        "Does the right JAMB combination mean I am fully qualified for Data Science?",
        "Can I use Biology for Data Science at NSUK?",
        "Can I use Chemistry for Data Science at NSUK?",
        "Can I use Agricultural Science for Data Science at NSUK?",
        "Can I use Chemistry for Data Science at NSUK?",
        "Can I use Biology for Data Science at NSUK?",
        "Can I use Agricultural Science for Data Science at NSUK?"
      ],
      "sourcePages": [
        18
      ],
      "reviewLevel": "normal",
      "sourceNotes": [
        "Source page(s): 18."
      ]
    },
    {
      "school": "Nasarawa State University, Keffi",
      "schoolShortName": "NSUK",
      "academicSession": "2025/2026",
      "sourceLabel": "NSUK Post UTME Subject Combination 2025/2026",
      "programme": "Biochemistry",
      "slug": "nsuk-biochemistry-requirements",
      "categorySlug": "programme-requirements",
      "type": "programme",
      "status": "published",
      "title": "NSUK Biochemistry Admission Subject Combination",
      "question": "What are the JAMB and O'Level subject requirements for Biochemistry at NSUK?",
      "jamb": {
        "totalRequiredSubjects": 4,
        "compulsorySubjects": [
          "Use of English",
          "Biology",
          "Chemistry"
        ],
        "optionalChooseCount": 1,
        "optionalSubjects": [
          "Physics",
          "Mathematics"
        ],
        "requiredSubjectGroups": [],
        "ruleSummary": "Candidate must register four JAMB subjects. Use of English is compulsory. The remaining subjects must follow the compulsory and optional subject rules for this programme."
      },
      "olevel": {
        "minimumCredits": 5,
        "globalCompulsorySubjects": [
          "English Language",
          "Mathematics"
        ],
        "programmeSpecificCompulsorySubjects": [
          "Physics",
          "Chemistry",
          "Biology"
        ],
        "compulsorySubjects": [
          "English Language",
          "Mathematics",
          "Physics",
          "Chemistry",
          "Biology"
        ],
        "optionalSubjects": [],
        "acceptedExamTypes": [
          "WAEC",
          "NECO",
          "NABTEB",
          "Other accepted senior secondary examinations"
        ],
        "ruleSummary": "Candidate must have at least five O'Level credit passes, including English Language and Mathematics, plus the programme-specific required/accepted subjects."
      },
      "warnings": [
        "Use of English in JAMB is different from English Language in O'Level; both must be treated separately.",
        "Correct JAMB subjects do not automatically satisfy O'Level requirements.",
        "Optional subjects should be selected only from the approved list for this programme.",
        "O'Level requires at least five credit passes, including English Language and Mathematics."
      ],
      "needsReview": false,
      "keywords": [
        "NSUK",
        "Nasarawa State University, Keffi",
        "Biochemistry",
        "JAMB",
        "UTME",
        "Post UTME",
        "O'Level",
        "WAEC",
        "NECO",
        "NABTEB",
        "subject combination",
        "admission requirement",
        "Use of English",
        "Biology",
        "Chemistry",
        "Physics",
        "Mathematics",
        "English Language"
      ],
      "answer": "For Biochemistry at NSUK, the JAMB combination must include Use of English, Biology, Chemistry; the candidate should choose 1 subject(s) from Physics, Mathematics to make four JAMB subjects. For O'Level, the candidate needs at least five credit passes including English Language, Mathematics, Physics, Chemistry, Biology. Accepted additional O'Level subjects include no additional optional subjects are listed.",
      "content": "Programme: Biochemistry\nSchool: Nasarawa State University, Keffi (NSUK)\nAcademic session: 2025/2026\nRequirement type: JAMB subject combination and O'Level combination.\nJAMB requirement: The candidate must register four JAMB subjects. Compulsory JAMB subject(s): Use of English, Biology, Chemistry. Optional JAMB subject(s): Physics, Mathematics. Optional subjects needed: 1.\nO'Level requirement: The candidate must have at least five credit passes from WAEC, NECO, NABTEB, or another accepted senior secondary examination. English Language and Mathematics are compulsory for O'Level. Programme-specific compulsory O'Level subject(s): Physics, Chemistry, Biology. Accepted optional O'Level subject(s): no additional optional subjects are listed.\nStudent guidance: The student should not assume that any subject is accepted. They should match both the JAMB requirement and the O'Level requirement for Biochemistry.",
      "questionVariants": [
        "What are the JAMB subjects for Biochemistry at NSUK?",
        "What O'Level subjects do I need for Biochemistry at NSUK?",
        "What is the subject combination for Biochemistry in NSUK?",
        "Can I study Biochemistry with my JAMB subjects?",
        "Can I study Biochemistry without one of the listed compulsory subjects?",
        "What optional subjects are accepted for Biochemistry?",
        "Is Mathematics compulsory for Biochemistry at NSUK?",
        "Is English Language compulsory for Biochemistry at NSUK?",
        "What WAEC or NECO subjects do I need for Biochemistry?",
        "Does the right JAMB combination mean I am fully qualified for Biochemistry?",
        "Can I use Physics for Biochemistry at NSUK?",
        "Can I use Mathematics for Biochemistry at NSUK?"
      ],
      "sourcePages": [
        18
      ],
      "reviewLevel": "normal",
      "sourceNotes": [
        "Source page(s): 18."
      ]
    },
    {
      "school": "Nasarawa State University, Keffi",
      "schoolShortName": "NSUK",
      "academicSession": "2025/2026",
      "sourceLabel": "NSUK Post UTME Subject Combination 2025/2026",
      "programme": "Microbiology",
      "slug": "nsuk-microbiology-requirements",
      "categorySlug": "programme-requirements",
      "type": "programme",
      "status": "published",
      "title": "NSUK Microbiology Admission Subject Combination",
      "question": "What are the JAMB and O'Level subject requirements for Microbiology at NSUK?",
      "jamb": {
        "totalRequiredSubjects": 4,
        "compulsorySubjects": [
          "Use of English",
          "Biology",
          "Chemistry"
        ],
        "optionalChooseCount": 1,
        "optionalSubjects": [
          "Physics",
          "Mathematics"
        ],
        "requiredSubjectGroups": [],
        "ruleSummary": "Candidate must register four JAMB subjects. Use of English is compulsory. The remaining subjects must follow the compulsory and optional subject rules for this programme."
      },
      "olevel": {
        "minimumCredits": 5,
        "globalCompulsorySubjects": [
          "English Language",
          "Mathematics"
        ],
        "programmeSpecificCompulsorySubjects": [
          "Physics",
          "Chemistry",
          "Biology"
        ],
        "compulsorySubjects": [
          "English Language",
          "Mathematics",
          "Physics",
          "Chemistry",
          "Biology"
        ],
        "optionalSubjects": [],
        "acceptedExamTypes": [
          "WAEC",
          "NECO",
          "NABTEB",
          "Other accepted senior secondary examinations"
        ],
        "ruleSummary": "Candidate must have at least five O'Level credit passes, including English Language and Mathematics, plus the programme-specific required/accepted subjects."
      },
      "warnings": [
        "Use of English in JAMB is different from English Language in O'Level; both must be treated separately.",
        "Correct JAMB subjects do not automatically satisfy O'Level requirements.",
        "Optional subjects should be selected only from the approved list for this programme.",
        "O'Level requires at least five credit passes, including English Language and Mathematics."
      ],
      "needsReview": false,
      "keywords": [
        "NSUK",
        "Nasarawa State University, Keffi",
        "Microbiology",
        "JAMB",
        "UTME",
        "Post UTME",
        "O'Level",
        "WAEC",
        "NECO",
        "NABTEB",
        "subject combination",
        "admission requirement",
        "Use of English",
        "Biology",
        "Chemistry",
        "Physics",
        "Mathematics",
        "English Language"
      ],
      "answer": "For Microbiology at NSUK, the JAMB combination must include Use of English, Biology, Chemistry; the candidate should choose 1 subject(s) from Physics, Mathematics to make four JAMB subjects. For O'Level, the candidate needs at least five credit passes including English Language, Mathematics, Physics, Chemistry, Biology. Accepted additional O'Level subjects include no additional optional subjects are listed.",
      "content": "Programme: Microbiology\nSchool: Nasarawa State University, Keffi (NSUK)\nAcademic session: 2025/2026\nRequirement type: JAMB subject combination and O'Level combination.\nJAMB requirement: The candidate must register four JAMB subjects. Compulsory JAMB subject(s): Use of English, Biology, Chemistry. Optional JAMB subject(s): Physics, Mathematics. Optional subjects needed: 1.\nO'Level requirement: The candidate must have at least five credit passes from WAEC, NECO, NABTEB, or another accepted senior secondary examination. English Language and Mathematics are compulsory for O'Level. Programme-specific compulsory O'Level subject(s): Physics, Chemistry, Biology. Accepted optional O'Level subject(s): no additional optional subjects are listed.\nStudent guidance: The student should not assume that any subject is accepted. They should match both the JAMB requirement and the O'Level requirement for Microbiology.",
      "questionVariants": [
        "What are the JAMB subjects for Microbiology at NSUK?",
        "What O'Level subjects do I need for Microbiology at NSUK?",
        "What is the subject combination for Microbiology in NSUK?",
        "Can I study Microbiology with my JAMB subjects?",
        "Can I study Microbiology without one of the listed compulsory subjects?",
        "What optional subjects are accepted for Microbiology?",
        "Is Mathematics compulsory for Microbiology at NSUK?",
        "Is English Language compulsory for Microbiology at NSUK?",
        "What WAEC or NECO subjects do I need for Microbiology?",
        "Does the right JAMB combination mean I am fully qualified for Microbiology?",
        "Can I use Physics for Microbiology at NSUK?",
        "Can I use Mathematics for Microbiology at NSUK?"
      ],
      "sourcePages": [
        18
      ],
      "reviewLevel": "normal",
      "sourceNotes": [
        "Source page(s): 18."
      ]
    },
    {
      "school": "Nasarawa State University, Keffi",
      "schoolShortName": "NSUK",
      "academicSession": "2025/2026",
      "sourceLabel": "NSUK Post UTME Subject Combination 2025/2026",
      "programme": "Plant Science and Biotechnology",
      "slug": "nsuk-plant-science-and-biotechnology-requirements",
      "categorySlug": "programme-requirements",
      "type": "programme",
      "status": "published",
      "title": "NSUK Plant Science and Biotechnology Admission Subject Combination",
      "question": "What are the JAMB and O'Level subject requirements for Plant Science and Biotechnology at NSUK?",
      "jamb": {
        "totalRequiredSubjects": 4,
        "compulsorySubjects": [
          "Use of English",
          "Biology",
          "Chemistry"
        ],
        "optionalChooseCount": 1,
        "optionalSubjects": [
          "Physics",
          "Agricultural Science",
          "Food and Nutrition"
        ],
        "requiredSubjectGroups": [],
        "ruleSummary": "Candidate must register four JAMB subjects. Use of English is compulsory. The remaining subjects must follow the compulsory and optional subject rules for this programme."
      },
      "olevel": {
        "minimumCredits": 5,
        "globalCompulsorySubjects": [
          "English Language",
          "Mathematics"
        ],
        "programmeSpecificCompulsorySubjects": [
          "Physics",
          "Chemistry",
          "Biology"
        ],
        "compulsorySubjects": [
          "English Language",
          "Mathematics",
          "Physics",
          "Chemistry",
          "Biology"
        ],
        "optionalSubjects": [],
        "acceptedExamTypes": [
          "WAEC",
          "NECO",
          "NABTEB",
          "Other accepted senior secondary examinations"
        ],
        "ruleSummary": "Candidate must have at least five O'Level credit passes, including English Language and Mathematics, plus the programme-specific required/accepted subjects."
      },
      "warnings": [
        "Use of English in JAMB is different from English Language in O'Level; both must be treated separately.",
        "Correct JAMB subjects do not automatically satisfy O'Level requirements.",
        "Optional subjects should be selected only from the approved list for this programme.",
        "O'Level requires at least five credit passes, including English Language and Mathematics."
      ],
      "needsReview": false,
      "keywords": [
        "NSUK",
        "Nasarawa State University, Keffi",
        "Plant Science and Biotechnology",
        "JAMB",
        "UTME",
        "Post UTME",
        "O'Level",
        "WAEC",
        "NECO",
        "NABTEB",
        "subject combination",
        "admission requirement",
        "Use of English",
        "Biology",
        "Chemistry",
        "Physics",
        "Agricultural Science",
        "Food and Nutrition",
        "English Language",
        "Mathematics"
      ],
      "answer": "For Plant Science and Biotechnology at NSUK, the JAMB combination must include Use of English, Biology, Chemistry; the candidate should choose 1 subject(s) from Physics, Agricultural Science, Food and Nutrition to make four JAMB subjects. For O'Level, the candidate needs at least five credit passes including English Language, Mathematics, Physics, Chemistry, Biology. Accepted additional O'Level subjects include no additional optional subjects are listed.",
      "content": "Programme: Plant Science and Biotechnology\nSchool: Nasarawa State University, Keffi (NSUK)\nAcademic session: 2025/2026\nRequirement type: JAMB subject combination and O'Level combination.\nJAMB requirement: The candidate must register four JAMB subjects. Compulsory JAMB subject(s): Use of English, Biology, Chemistry. Optional JAMB subject(s): Physics, Agricultural Science, Food and Nutrition. Optional subjects needed: 1.\nO'Level requirement: The candidate must have at least five credit passes from WAEC, NECO, NABTEB, or another accepted senior secondary examination. English Language and Mathematics are compulsory for O'Level. Programme-specific compulsory O'Level subject(s): Physics, Chemistry, Biology. Accepted optional O'Level subject(s): no additional optional subjects are listed.\nStudent guidance: The student should not assume that any subject is accepted. They should match both the JAMB requirement and the O'Level requirement for Plant Science and Biotechnology.",
      "questionVariants": [
        "What are the JAMB subjects for Plant Science and Biotechnology at NSUK?",
        "What O'Level subjects do I need for Plant Science and Biotechnology at NSUK?",
        "What is the subject combination for Plant Science and Biotechnology in NSUK?",
        "Can I study Plant Science and Biotechnology with my JAMB subjects?",
        "Can I study Plant Science and Biotechnology without one of the listed compulsory subjects?",
        "What optional subjects are accepted for Plant Science and Biotechnology?",
        "Is Mathematics compulsory for Plant Science and Biotechnology at NSUK?",
        "Is English Language compulsory for Plant Science and Biotechnology at NSUK?",
        "What WAEC or NECO subjects do I need for Plant Science and Biotechnology?",
        "Does the right JAMB combination mean I am fully qualified for Plant Science and Biotechnology?",
        "Can I use Physics for Plant Science and Biotechnology at NSUK?",
        "Can I use Agricultural Science for Plant Science and Biotechnology at NSUK?",
        "Can I use Food and Nutrition for Plant Science and Biotechnology at NSUK?"
      ],
      "sourcePages": [
        18
      ],
      "reviewLevel": "normal",
      "sourceNotes": [
        "Source page(s): 18."
      ]
    },
    {
      "school": "Nasarawa State University, Keffi",
      "schoolShortName": "NSUK",
      "academicSession": "2025/2026",
      "sourceLabel": "NSUK Post UTME Subject Combination 2025/2026",
      "programme": "Geology and Mining",
      "slug": "nsuk-geology-and-mining-requirements",
      "categorySlug": "programme-requirements",
      "type": "programme",
      "status": "published",
      "title": "NSUK Geology and Mining Admission Subject Combination",
      "question": "What are the JAMB and O'Level subject requirements for Geology and Mining at NSUK?",
      "jamb": {
        "totalRequiredSubjects": 4,
        "compulsorySubjects": [
          "Use of English",
          "Physics",
          "Chemistry"
        ],
        "optionalChooseCount": 1,
        "optionalSubjects": [
          "Biology",
          "Geography"
        ],
        "requiredSubjectGroups": [],
        "ruleSummary": "Candidate must register four JAMB subjects. Use of English is compulsory. The remaining subjects must follow the compulsory and optional subject rules for this programme."
      },
      "olevel": {
        "minimumCredits": 5,
        "globalCompulsorySubjects": [
          "English Language",
          "Mathematics"
        ],
        "programmeSpecificCompulsorySubjects": [
          "Physics",
          "Chemistry",
          "Biology"
        ],
        "compulsorySubjects": [
          "English Language",
          "Mathematics",
          "Physics",
          "Chemistry",
          "Biology"
        ],
        "optionalSubjects": [],
        "acceptedExamTypes": [
          "WAEC",
          "NECO",
          "NABTEB",
          "Other accepted senior secondary examinations"
        ],
        "ruleSummary": "Candidate must have at least five O'Level credit passes, including English Language and Mathematics, plus the programme-specific required/accepted subjects."
      },
      "warnings": [
        "Use of English in JAMB is different from English Language in O'Level; both must be treated separately.",
        "Correct JAMB subjects do not automatically satisfy O'Level requirements.",
        "Optional subjects should be selected only from the approved list for this programme.",
        "O'Level requires at least five credit passes, including English Language and Mathematics."
      ],
      "needsReview": false,
      "keywords": [
        "NSUK",
        "Nasarawa State University, Keffi",
        "Geology and Mining",
        "JAMB",
        "UTME",
        "Post UTME",
        "O'Level",
        "WAEC",
        "NECO",
        "NABTEB",
        "subject combination",
        "admission requirement",
        "Use of English",
        "Physics",
        "Chemistry",
        "Biology",
        "Geography",
        "English Language",
        "Mathematics"
      ],
      "answer": "For Geology and Mining at NSUK, the JAMB combination must include Use of English, Physics, Chemistry; the candidate should choose 1 subject(s) from Biology, Geography to make four JAMB subjects. For O'Level, the candidate needs at least five credit passes including English Language, Mathematics, Physics, Chemistry, Biology. Accepted additional O'Level subjects include no additional optional subjects are listed.",
      "content": "Programme: Geology and Mining\nSchool: Nasarawa State University, Keffi (NSUK)\nAcademic session: 2025/2026\nRequirement type: JAMB subject combination and O'Level combination.\nJAMB requirement: The candidate must register four JAMB subjects. Compulsory JAMB subject(s): Use of English, Physics, Chemistry. Optional JAMB subject(s): Biology, Geography. Optional subjects needed: 1.\nO'Level requirement: The candidate must have at least five credit passes from WAEC, NECO, NABTEB, or another accepted senior secondary examination. English Language and Mathematics are compulsory for O'Level. Programme-specific compulsory O'Level subject(s): Physics, Chemistry, Biology. Accepted optional O'Level subject(s): no additional optional subjects are listed.\nStudent guidance: The student should not assume that any subject is accepted. They should match both the JAMB requirement and the O'Level requirement for Geology and Mining.",
      "questionVariants": [
        "What are the JAMB subjects for Geology and Mining at NSUK?",
        "What O'Level subjects do I need for Geology and Mining at NSUK?",
        "What is the subject combination for Geology and Mining in NSUK?",
        "Can I study Geology and Mining with my JAMB subjects?",
        "Can I study Geology and Mining without one of the listed compulsory subjects?",
        "What optional subjects are accepted for Geology and Mining?",
        "Is Mathematics compulsory for Geology and Mining at NSUK?",
        "Is English Language compulsory for Geology and Mining at NSUK?",
        "What WAEC or NECO subjects do I need for Geology and Mining?",
        "Does the right JAMB combination mean I am fully qualified for Geology and Mining?",
        "Can I use Biology for Geology and Mining at NSUK?",
        "Can I use Geography for Geology and Mining at NSUK?"
      ],
      "sourcePages": [
        18
      ],
      "reviewLevel": "normal",
      "sourceNotes": [
        "Source page(s): 18."
      ]
    },
    {
      "school": "Nasarawa State University, Keffi",
      "schoolShortName": "NSUK",
      "academicSession": "2025/2026",
      "sourceLabel": "NSUK Post UTME Subject Combination 2025/2026",
      "programme": "Zoology",
      "slug": "nsuk-zoology-requirements",
      "categorySlug": "programme-requirements",
      "type": "programme",
      "status": "published",
      "title": "NSUK Zoology Admission Subject Combination",
      "question": "What are the JAMB and O'Level subject requirements for Zoology at NSUK?",
      "jamb": {
        "totalRequiredSubjects": 4,
        "compulsorySubjects": [
          "Use of English",
          "Biology"
        ],
        "optionalChooseCount": 2,
        "optionalSubjects": [
          "Physics",
          "Chemistry",
          "Mathematics",
          "Agricultural Science"
        ],
        "requiredSubjectGroups": [],
        "ruleSummary": "Candidate must register four JAMB subjects. Use of English is compulsory. The remaining subjects must follow the compulsory and optional subject rules for this programme."
      },
      "olevel": {
        "minimumCredits": 5,
        "globalCompulsorySubjects": [
          "English Language",
          "Mathematics"
        ],
        "programmeSpecificCompulsorySubjects": [
          "Biology",
          "Chemistry"
        ],
        "compulsorySubjects": [
          "English Language",
          "Mathematics",
          "Biology",
          "Chemistry"
        ],
        "optionalSubjects": [
          "Physics",
          "Agricultural Science"
        ],
        "acceptedExamTypes": [
          "WAEC",
          "NECO",
          "NABTEB",
          "Other accepted senior secondary examinations"
        ],
        "ruleSummary": "Candidate must have at least five O'Level credit passes, including English Language and Mathematics, plus the programme-specific required/accepted subjects."
      },
      "warnings": [
        "Use of English in JAMB is different from English Language in O'Level; both must be treated separately.",
        "Correct JAMB subjects do not automatically satisfy O'Level requirements.",
        "Optional subjects should be selected only from the approved list for this programme.",
        "O'Level requires at least five credit passes, including English Language and Mathematics."
      ],
      "needsReview": false,
      "keywords": [
        "NSUK",
        "Nasarawa State University, Keffi",
        "Zoology",
        "JAMB",
        "UTME",
        "Post UTME",
        "O'Level",
        "WAEC",
        "NECO",
        "NABTEB",
        "subject combination",
        "admission requirement",
        "Use of English",
        "Biology",
        "Physics",
        "Chemistry",
        "Mathematics",
        "Agricultural Science",
        "English Language"
      ],
      "answer": "For Zoology at NSUK, the JAMB combination must include Use of English, Biology; the candidate should choose 2 subject(s) from Physics, Chemistry, Mathematics, Agricultural Science to make four JAMB subjects. For O'Level, the candidate needs at least five credit passes including English Language, Mathematics, Biology, Chemistry. Accepted additional O'Level subjects include Physics, Agricultural Science.",
      "content": "Programme: Zoology\nSchool: Nasarawa State University, Keffi (NSUK)\nAcademic session: 2025/2026\nRequirement type: JAMB subject combination and O'Level combination.\nJAMB requirement: The candidate must register four JAMB subjects. Compulsory JAMB subject(s): Use of English, Biology. Optional JAMB subject(s): Physics, Chemistry, Mathematics, Agricultural Science. Optional subjects needed: 2.\nO'Level requirement: The candidate must have at least five credit passes from WAEC, NECO, NABTEB, or another accepted senior secondary examination. English Language and Mathematics are compulsory for O'Level. Programme-specific compulsory O'Level subject(s): Biology, Chemistry. Accepted optional O'Level subject(s): Physics, Agricultural Science.\nStudent guidance: The student should not assume that any subject is accepted. They should match both the JAMB requirement and the O'Level requirement for Zoology.",
      "questionVariants": [
        "What are the JAMB subjects for Zoology at NSUK?",
        "What O'Level subjects do I need for Zoology at NSUK?",
        "What is the subject combination for Zoology in NSUK?",
        "Can I study Zoology with my JAMB subjects?",
        "Can I study Zoology without one of the listed compulsory subjects?",
        "What optional subjects are accepted for Zoology?",
        "Is Mathematics compulsory for Zoology at NSUK?",
        "Is English Language compulsory for Zoology at NSUK?",
        "What WAEC or NECO subjects do I need for Zoology?",
        "Does the right JAMB combination mean I am fully qualified for Zoology?",
        "Can I use Physics for Zoology at NSUK?",
        "Can I use Chemistry for Zoology at NSUK?",
        "Can I use Mathematics for Zoology at NSUK?",
        "Can I use Physics for Zoology at NSUK?",
        "Can I use Agricultural Science for Zoology at NSUK?"
      ],
      "sourcePages": [
        18,
        19
      ],
      "reviewLevel": "normal",
      "sourceNotes": [
        "Source page(s): 18, 19."
      ]
    },
    {
      "school": "Nasarawa State University, Keffi",
      "schoolShortName": "NSUK",
      "academicSession": "2025/2026",
      "sourceLabel": "NSUK Post UTME Subject Combination 2025/2026",
      "programme": "Science Laboratory Technology",
      "slug": "nsuk-science-laboratory-technology-requirements",
      "categorySlug": "programme-requirements",
      "type": "programme",
      "status": "published",
      "title": "NSUK Science Laboratory Technology Admission Subject Combination",
      "question": "What are the JAMB and O'Level subject requirements for Science Laboratory Technology at NSUK?",
      "jamb": {
        "totalRequiredSubjects": 4,
        "compulsorySubjects": [
          "Use of English",
          "Biology",
          "Chemistry"
        ],
        "optionalChooseCount": 1,
        "optionalSubjects": [
          "Physics",
          "Mathematics"
        ],
        "requiredSubjectGroups": [],
        "ruleSummary": "Candidate must register four JAMB subjects. Use of English is compulsory. The remaining subjects must follow the compulsory and optional subject rules for this programme."
      },
      "olevel": {
        "minimumCredits": 5,
        "globalCompulsorySubjects": [
          "English Language",
          "Mathematics"
        ],
        "programmeSpecificCompulsorySubjects": [
          "Physics",
          "Chemistry",
          "Biology"
        ],
        "compulsorySubjects": [
          "English Language",
          "Mathematics",
          "Physics",
          "Chemistry",
          "Biology"
        ],
        "optionalSubjects": [],
        "acceptedExamTypes": [
          "WAEC",
          "NECO",
          "NABTEB",
          "Other accepted senior secondary examinations"
        ],
        "ruleSummary": "Candidate must have at least five O'Level credit passes, including English Language and Mathematics, plus the programme-specific required/accepted subjects."
      },
      "warnings": [
        "Use of English in JAMB is different from English Language in O'Level; both must be treated separately.",
        "Correct JAMB subjects do not automatically satisfy O'Level requirements.",
        "Optional subjects should be selected only from the approved list for this programme.",
        "O'Level requires at least five credit passes, including English Language and Mathematics."
      ],
      "needsReview": false,
      "keywords": [
        "NSUK",
        "Nasarawa State University, Keffi",
        "Science Laboratory Technology",
        "JAMB",
        "UTME",
        "Post UTME",
        "O'Level",
        "WAEC",
        "NECO",
        "NABTEB",
        "subject combination",
        "admission requirement",
        "Use of English",
        "Biology",
        "Chemistry",
        "Physics",
        "Mathematics",
        "English Language"
      ],
      "answer": "For Science Laboratory Technology at NSUK, the JAMB combination must include Use of English, Biology, Chemistry; the candidate should choose 1 subject(s) from Physics, Mathematics to make four JAMB subjects. For O'Level, the candidate needs at least five credit passes including English Language, Mathematics, Physics, Chemistry, Biology. Accepted additional O'Level subjects include no additional optional subjects are listed.",
      "content": "Programme: Science Laboratory Technology\nSchool: Nasarawa State University, Keffi (NSUK)\nAcademic session: 2025/2026\nRequirement type: JAMB subject combination and O'Level combination.\nJAMB requirement: The candidate must register four JAMB subjects. Compulsory JAMB subject(s): Use of English, Biology, Chemistry. Optional JAMB subject(s): Physics, Mathematics. Optional subjects needed: 1.\nO'Level requirement: The candidate must have at least five credit passes from WAEC, NECO, NABTEB, or another accepted senior secondary examination. English Language and Mathematics are compulsory for O'Level. Programme-specific compulsory O'Level subject(s): Physics, Chemistry, Biology. Accepted optional O'Level subject(s): no additional optional subjects are listed.\nStudent guidance: The student should not assume that any subject is accepted. They should match both the JAMB requirement and the O'Level requirement for Science Laboratory Technology.",
      "questionVariants": [
        "What are the JAMB subjects for Science Laboratory Technology at NSUK?",
        "What O'Level subjects do I need for Science Laboratory Technology at NSUK?",
        "What is the subject combination for Science Laboratory Technology in NSUK?",
        "Can I study Science Laboratory Technology with my JAMB subjects?",
        "Can I study Science Laboratory Technology without one of the listed compulsory subjects?",
        "What optional subjects are accepted for Science Laboratory Technology?",
        "Is Mathematics compulsory for Science Laboratory Technology at NSUK?",
        "Is English Language compulsory for Science Laboratory Technology at NSUK?",
        "What WAEC or NECO subjects do I need for Science Laboratory Technology?",
        "Does the right JAMB combination mean I am fully qualified for Science Laboratory Technology?",
        "Can I use Physics for Science Laboratory Technology at NSUK?",
        "Can I use Mathematics for Science Laboratory Technology at NSUK?"
      ],
      "sourcePages": [
        19
      ],
      "reviewLevel": "normal",
      "sourceNotes": [
        "Source page(s): 19."
      ]
    },
    {
      "school": "Nasarawa State University, Keffi",
      "schoolShortName": "NSUK",
      "academicSession": "2025/2026",
      "sourceLabel": "NSUK Post UTME Subject Combination 2025/2026",
      "programme": "Community Health",
      "slug": "nsuk-community-health-requirements",
      "categorySlug": "programme-requirements",
      "type": "programme",
      "status": "published",
      "title": "NSUK Community Health Admission Subject Combination",
      "question": "What are the JAMB and O'Level subject requirements for Community Health at NSUK?",
      "jamb": {
        "totalRequiredSubjects": 4,
        "compulsorySubjects": [
          "Use of English",
          "Biology",
          "Chemistry"
        ],
        "optionalChooseCount": 1,
        "optionalSubjects": [
          "Physics",
          "Mathematics"
        ],
        "requiredSubjectGroups": [],
        "ruleSummary": "Candidate must register four JAMB subjects. Use of English is compulsory. The remaining subjects must follow the compulsory and optional subject rules for this programme."
      },
      "olevel": {
        "minimumCredits": 5,
        "globalCompulsorySubjects": [
          "English Language",
          "Mathematics"
        ],
        "programmeSpecificCompulsorySubjects": [
          "Physics",
          "Chemistry",
          "Biology"
        ],
        "compulsorySubjects": [
          "English Language",
          "Mathematics",
          "Physics",
          "Chemistry",
          "Biology"
        ],
        "optionalSubjects": [],
        "acceptedExamTypes": [
          "WAEC",
          "NECO",
          "NABTEB",
          "Other accepted senior secondary examinations"
        ],
        "ruleSummary": "Candidate must have at least five O'Level credit passes, including English Language and Mathematics, plus the programme-specific required/accepted subjects."
      },
      "warnings": [
        "Use of English in JAMB is different from English Language in O'Level; both must be treated separately.",
        "Correct JAMB subjects do not automatically satisfy O'Level requirements.",
        "Optional subjects should be selected only from the approved list for this programme.",
        "O'Level requires at least five credit passes, including English Language and Mathematics."
      ],
      "needsReview": false,
      "keywords": [
        "NSUK",
        "Nasarawa State University, Keffi",
        "Community Health",
        "JAMB",
        "UTME",
        "Post UTME",
        "O'Level",
        "WAEC",
        "NECO",
        "NABTEB",
        "subject combination",
        "admission requirement",
        "Use of English",
        "Biology",
        "Chemistry",
        "Physics",
        "Mathematics",
        "English Language"
      ],
      "answer": "For Community Health at NSUK, the JAMB combination must include Use of English, Biology, Chemistry; the candidate should choose 1 subject(s) from Physics, Mathematics to make four JAMB subjects. For O'Level, the candidate needs at least five credit passes including English Language, Mathematics, Physics, Chemistry, Biology. Accepted additional O'Level subjects include no additional optional subjects are listed.",
      "content": "Programme: Community Health\nSchool: Nasarawa State University, Keffi (NSUK)\nAcademic session: 2025/2026\nRequirement type: JAMB subject combination and O'Level combination.\nJAMB requirement: The candidate must register four JAMB subjects. Compulsory JAMB subject(s): Use of English, Biology, Chemistry. Optional JAMB subject(s): Physics, Mathematics. Optional subjects needed: 1.\nO'Level requirement: The candidate must have at least five credit passes from WAEC, NECO, NABTEB, or another accepted senior secondary examination. English Language and Mathematics are compulsory for O'Level. Programme-specific compulsory O'Level subject(s): Physics, Chemistry, Biology. Accepted optional O'Level subject(s): no additional optional subjects are listed.\nStudent guidance: The student should not assume that any subject is accepted. They should match both the JAMB requirement and the O'Level requirement for Community Health.",
      "questionVariants": [
        "What are the JAMB subjects for Community Health at NSUK?",
        "What O'Level subjects do I need for Community Health at NSUK?",
        "What is the subject combination for Community Health in NSUK?",
        "Can I study Community Health with my JAMB subjects?",
        "Can I study Community Health without one of the listed compulsory subjects?",
        "What optional subjects are accepted for Community Health?",
        "Is Mathematics compulsory for Community Health at NSUK?",
        "Is English Language compulsory for Community Health at NSUK?",
        "What WAEC or NECO subjects do I need for Community Health?",
        "Does the right JAMB combination mean I am fully qualified for Community Health?",
        "Can I use Physics for Community Health at NSUK?",
        "Can I use Mathematics for Community Health at NSUK?"
      ],
      "sourcePages": [
        19
      ],
      "reviewLevel": "normal",
      "sourceNotes": [
        "Source page(s): 19."
      ]
    },
    {
      "school": "Nasarawa State University, Keffi",
      "schoolShortName": "NSUK",
      "academicSession": "2025/2026",
      "sourceLabel": "NSUK Post UTME Subject Combination 2025/2026",
      "programme": "Health Information Management",
      "slug": "nsuk-health-information-management-requirements",
      "categorySlug": "programme-requirements",
      "type": "programme",
      "status": "published",
      "title": "NSUK Health Information Management Admission Subject Combination",
      "question": "What are the JAMB and O'Level subject requirements for Health Information Management at NSUK?",
      "jamb": {
        "totalRequiredSubjects": 4,
        "compulsorySubjects": [
          "Use of English",
          "Biology",
          "Chemistry"
        ],
        "optionalChooseCount": 1,
        "optionalSubjects": [
          "Physics",
          "Mathematics"
        ],
        "requiredSubjectGroups": [],
        "ruleSummary": "Candidate must register four JAMB subjects. Use of English is compulsory. The remaining subjects must follow the compulsory and optional subject rules for this programme."
      },
      "olevel": {
        "minimumCredits": 5,
        "globalCompulsorySubjects": [
          "English Language",
          "Mathematics"
        ],
        "programmeSpecificCompulsorySubjects": [
          "Physics",
          "Chemistry",
          "Biology"
        ],
        "compulsorySubjects": [
          "English Language",
          "Mathematics",
          "Physics",
          "Chemistry",
          "Biology"
        ],
        "optionalSubjects": [],
        "acceptedExamTypes": [
          "WAEC",
          "NECO",
          "NABTEB",
          "Other accepted senior secondary examinations"
        ],
        "ruleSummary": "Candidate must have at least five O'Level credit passes, including English Language and Mathematics, plus the programme-specific required/accepted subjects."
      },
      "warnings": [
        "Use of English in JAMB is different from English Language in O'Level; both must be treated separately.",
        "Correct JAMB subjects do not automatically satisfy O'Level requirements.",
        "Optional subjects should be selected only from the approved list for this programme.",
        "O'Level requires at least five credit passes, including English Language and Mathematics."
      ],
      "needsReview": false,
      "keywords": [
        "NSUK",
        "Nasarawa State University, Keffi",
        "Health Information Management",
        "JAMB",
        "UTME",
        "Post UTME",
        "O'Level",
        "WAEC",
        "NECO",
        "NABTEB",
        "subject combination",
        "admission requirement",
        "Use of English",
        "Biology",
        "Chemistry",
        "Physics",
        "Mathematics",
        "English Language"
      ],
      "answer": "For Health Information Management at NSUK, the JAMB combination must include Use of English, Biology, Chemistry; the candidate should choose 1 subject(s) from Physics, Mathematics to make four JAMB subjects. For O'Level, the candidate needs at least five credit passes including English Language, Mathematics, Physics, Chemistry, Biology. Accepted additional O'Level subjects include no additional optional subjects are listed.",
      "content": "Programme: Health Information Management\nSchool: Nasarawa State University, Keffi (NSUK)\nAcademic session: 2025/2026\nRequirement type: JAMB subject combination and O'Level combination.\nJAMB requirement: The candidate must register four JAMB subjects. Compulsory JAMB subject(s): Use of English, Biology, Chemistry. Optional JAMB subject(s): Physics, Mathematics. Optional subjects needed: 1.\nO'Level requirement: The candidate must have at least five credit passes from WAEC, NECO, NABTEB, or another accepted senior secondary examination. English Language and Mathematics are compulsory for O'Level. Programme-specific compulsory O'Level subject(s): Physics, Chemistry, Biology. Accepted optional O'Level subject(s): no additional optional subjects are listed.\nStudent guidance: The student should not assume that any subject is accepted. They should match both the JAMB requirement and the O'Level requirement for Health Information Management.",
      "questionVariants": [
        "What are the JAMB subjects for Health Information Management at NSUK?",
        "What O'Level subjects do I need for Health Information Management at NSUK?",
        "What is the subject combination for Health Information Management in NSUK?",
        "Can I study Health Information Management with my JAMB subjects?",
        "Can I study Health Information Management without one of the listed compulsory subjects?",
        "What optional subjects are accepted for Health Information Management?",
        "Is Mathematics compulsory for Health Information Management at NSUK?",
        "Is English Language compulsory for Health Information Management at NSUK?",
        "What WAEC or NECO subjects do I need for Health Information Management?",
        "Does the right JAMB combination mean I am fully qualified for Health Information Management?",
        "Can I use Physics for Health Information Management at NSUK?",
        "Can I use Mathematics for Health Information Management at NSUK?"
      ],
      "sourcePages": [
        19
      ],
      "reviewLevel": "normal",
      "sourceNotes": [
        "Source page(s): 19."
      ]
    },
    {
      "school": "Nasarawa State University, Keffi",
      "schoolShortName": "NSUK",
      "academicSession": "2025/2026",
      "sourceLabel": "NSUK Post UTME Subject Combination 2025/2026",
      "programme": "Environmental Health Science",
      "slug": "nsuk-environmental-health-science-requirements",
      "categorySlug": "programme-requirements",
      "type": "programme",
      "status": "published",
      "title": "NSUK Environmental Health Science Admission Subject Combination",
      "question": "What are the JAMB and O'Level subject requirements for Environmental Health Science at NSUK?",
      "jamb": {
        "totalRequiredSubjects": 4,
        "compulsorySubjects": [
          "Use of English",
          "Biology",
          "Chemistry"
        ],
        "optionalChooseCount": 1,
        "optionalSubjects": [
          "Physics",
          "Mathematics"
        ],
        "requiredSubjectGroups": [],
        "ruleSummary": "Candidate must register four JAMB subjects. Use of English is compulsory. The remaining subjects must follow the compulsory and optional subject rules for this programme."
      },
      "olevel": {
        "minimumCredits": 5,
        "globalCompulsorySubjects": [
          "English Language",
          "Mathematics"
        ],
        "programmeSpecificCompulsorySubjects": [
          "Physics",
          "Chemistry",
          "Biology"
        ],
        "compulsorySubjects": [
          "English Language",
          "Mathematics",
          "Physics",
          "Chemistry",
          "Biology"
        ],
        "optionalSubjects": [],
        "acceptedExamTypes": [
          "WAEC",
          "NECO",
          "NABTEB",
          "Other accepted senior secondary examinations"
        ],
        "ruleSummary": "Candidate must have at least five O'Level credit passes, including English Language and Mathematics, plus the programme-specific required/accepted subjects."
      },
      "warnings": [
        "Use of English in JAMB is different from English Language in O'Level; both must be treated separately.",
        "Correct JAMB subjects do not automatically satisfy O'Level requirements.",
        "Optional subjects should be selected only from the approved list for this programme.",
        "O'Level requires at least five credit passes, including English Language and Mathematics."
      ],
      "needsReview": false,
      "keywords": [
        "NSUK",
        "Nasarawa State University, Keffi",
        "Environmental Health Science",
        "JAMB",
        "UTME",
        "Post UTME",
        "O'Level",
        "WAEC",
        "NECO",
        "NABTEB",
        "subject combination",
        "admission requirement",
        "Use of English",
        "Biology",
        "Chemistry",
        "Physics",
        "Mathematics",
        "English Language"
      ],
      "answer": "For Environmental Health Science at NSUK, the JAMB combination must include Use of English, Biology, Chemistry; the candidate should choose 1 subject(s) from Physics, Mathematics to make four JAMB subjects. For O'Level, the candidate needs at least five credit passes including English Language, Mathematics, Physics, Chemistry, Biology. Accepted additional O'Level subjects include no additional optional subjects are listed.",
      "content": "Programme: Environmental Health Science\nSchool: Nasarawa State University, Keffi (NSUK)\nAcademic session: 2025/2026\nRequirement type: JAMB subject combination and O'Level combination.\nJAMB requirement: The candidate must register four JAMB subjects. Compulsory JAMB subject(s): Use of English, Biology, Chemistry. Optional JAMB subject(s): Physics, Mathematics. Optional subjects needed: 1.\nO'Level requirement: The candidate must have at least five credit passes from WAEC, NECO, NABTEB, or another accepted senior secondary examination. English Language and Mathematics are compulsory for O'Level. Programme-specific compulsory O'Level subject(s): Physics, Chemistry, Biology. Accepted optional O'Level subject(s): no additional optional subjects are listed.\nStudent guidance: The student should not assume that any subject is accepted. They should match both the JAMB requirement and the O'Level requirement for Environmental Health Science.",
      "questionVariants": [
        "What are the JAMB subjects for Environmental Health Science at NSUK?",
        "What O'Level subjects do I need for Environmental Health Science at NSUK?",
        "What is the subject combination for Environmental Health Science in NSUK?",
        "Can I study Environmental Health Science with my JAMB subjects?",
        "Can I study Environmental Health Science without one of the listed compulsory subjects?",
        "What optional subjects are accepted for Environmental Health Science?",
        "Is Mathematics compulsory for Environmental Health Science at NSUK?",
        "Is English Language compulsory for Environmental Health Science at NSUK?",
        "What WAEC or NECO subjects do I need for Environmental Health Science?",
        "Does the right JAMB combination mean I am fully qualified for Environmental Health Science?",
        "Can I use Physics for Environmental Health Science at NSUK?",
        "Can I use Mathematics for Environmental Health Science at NSUK?"
      ],
      "sourcePages": [
        19
      ],
      "reviewLevel": "normal",
      "sourceNotes": [
        "Source page(s): 19."
      ]
    },
    {
      "school": "Nasarawa State University, Keffi",
      "schoolShortName": "NSUK",
      "academicSession": "2025/2026",
      "sourceLabel": "NSUK Post UTME Subject Combination 2025/2026",
      "programme": "Chemical Engineering",
      "slug": "nsuk-chemical-engineering-requirements",
      "categorySlug": "programme-requirements",
      "type": "programme",
      "status": "published",
      "title": "NSUK Chemical Engineering Admission Subject Combination",
      "question": "What are the JAMB and O'Level subject requirements for Chemical Engineering at NSUK?",
      "jamb": {
        "totalRequiredSubjects": 4,
        "compulsorySubjects": [
          "Use of English",
          "Mathematics",
          "Physics",
          "Chemistry"
        ],
        "optionalChooseCount": 0,
        "optionalSubjects": [],
        "requiredSubjectGroups": [],
        "ruleSummary": "Candidate must register four JAMB subjects. Use of English is compulsory. The remaining subjects must follow the compulsory and optional subject rules for this programme."
      },
      "olevel": {
        "minimumCredits": 5,
        "globalCompulsorySubjects": [
          "English Language",
          "Mathematics"
        ],
        "programmeSpecificCompulsorySubjects": [
          "Physics",
          "Chemistry"
        ],
        "compulsorySubjects": [
          "English Language",
          "Mathematics",
          "Physics",
          "Chemistry"
        ],
        "optionalSubjects": [
          "Further Mathematics",
          "Technical Drawing",
          "Biology",
          "Geography"
        ],
        "acceptedExamTypes": [
          "WAEC",
          "NECO",
          "NABTEB",
          "Other accepted senior secondary examinations"
        ],
        "ruleSummary": "Candidate must have at least five O'Level credit passes, including English Language and Mathematics, plus the programme-specific required/accepted subjects."
      },
      "warnings": [
        "Use of English in JAMB is different from English Language in O'Level; both must be treated separately.",
        "Correct JAMB subjects do not automatically satisfy O'Level requirements.",
        "Optional subjects should be selected only from the approved list for this programme.",
        "O'Level requires at least five credit passes, including English Language and Mathematics."
      ],
      "needsReview": false,
      "keywords": [
        "NSUK",
        "Nasarawa State University, Keffi",
        "Chemical Engineering",
        "JAMB",
        "UTME",
        "Post UTME",
        "O'Level",
        "WAEC",
        "NECO",
        "NABTEB",
        "subject combination",
        "admission requirement",
        "Use of English",
        "Mathematics",
        "Physics",
        "Chemistry",
        "English Language",
        "Further Mathematics",
        "Technical Drawing",
        "Biology",
        "Geography"
      ],
      "answer": "For Chemical Engineering at NSUK, the JAMB combination must include Use of English, Mathematics, Physics, Chemistry; the candidate should no optional JAMB subject is needed beyond the listed compulsory subjects to make four JAMB subjects. For O'Level, the candidate needs at least five credit passes including English Language, Mathematics, Physics, Chemistry. Accepted additional O'Level subjects include Further Mathematics, Technical Drawing, Biology, Geography.",
      "content": "Programme: Chemical Engineering\nSchool: Nasarawa State University, Keffi (NSUK)\nAcademic session: 2025/2026\nRequirement type: JAMB subject combination and O'Level combination.\nJAMB requirement: The candidate must register four JAMB subjects. Compulsory JAMB subject(s): Use of English, Mathematics, Physics, Chemistry. Optional JAMB subject(s): no additional optional subjects are listed. Optional subjects needed: 0.\nO'Level requirement: The candidate must have at least five credit passes from WAEC, NECO, NABTEB, or another accepted senior secondary examination. English Language and Mathematics are compulsory for O'Level. Programme-specific compulsory O'Level subject(s): Physics, Chemistry. Accepted optional O'Level subject(s): Further Mathematics, Technical Drawing, Biology, Geography.\nStudent guidance: The student should not assume that any subject is accepted. They should match both the JAMB requirement and the O'Level requirement for Chemical Engineering.",
      "questionVariants": [
        "What are the JAMB subjects for Chemical Engineering at NSUK?",
        "What O'Level subjects do I need for Chemical Engineering at NSUK?",
        "What is the subject combination for Chemical Engineering in NSUK?",
        "Can I study Chemical Engineering with my JAMB subjects?",
        "Can I study Chemical Engineering without one of the listed compulsory subjects?",
        "What optional subjects are accepted for Chemical Engineering?",
        "Is Mathematics compulsory for Chemical Engineering at NSUK?",
        "Is English Language compulsory for Chemical Engineering at NSUK?",
        "What WAEC or NECO subjects do I need for Chemical Engineering?",
        "Does the right JAMB combination mean I am fully qualified for Chemical Engineering?",
        "Can I use Further Mathematics for Chemical Engineering at NSUK?",
        "Can I use Technical Drawing for Chemical Engineering at NSUK?",
        "Can I use Biology for Chemical Engineering at NSUK?"
      ],
      "sourcePages": [
        19
      ],
      "reviewLevel": "normal",
      "sourceNotes": [
        "Source page(s): 19."
      ]
    },
    {
      "school": "Nasarawa State University, Keffi",
      "schoolShortName": "NSUK",
      "academicSession": "2025/2026",
      "sourceLabel": "NSUK Post UTME Subject Combination 2025/2026",
      "programme": "Civil Engineering",
      "slug": "nsuk-civil-engineering-requirements",
      "categorySlug": "programme-requirements",
      "type": "programme",
      "status": "published",
      "title": "NSUK Civil Engineering Admission Subject Combination",
      "question": "What are the JAMB and O'Level subject requirements for Civil Engineering at NSUK?",
      "jamb": {
        "totalRequiredSubjects": 4,
        "compulsorySubjects": [
          "Use of English",
          "Mathematics",
          "Physics",
          "Chemistry"
        ],
        "optionalChooseCount": 0,
        "optionalSubjects": [],
        "requiredSubjectGroups": [],
        "ruleSummary": "Candidate must register four JAMB subjects. Use of English is compulsory. The remaining subjects must follow the compulsory and optional subject rules for this programme."
      },
      "olevel": {
        "minimumCredits": 5,
        "globalCompulsorySubjects": [
          "English Language",
          "Mathematics"
        ],
        "programmeSpecificCompulsorySubjects": [
          "Physics",
          "Chemistry"
        ],
        "compulsorySubjects": [
          "English Language",
          "Mathematics",
          "Physics",
          "Chemistry"
        ],
        "optionalSubjects": [
          "Further Mathematics",
          "Technical Drawing",
          "Biology",
          "Geography"
        ],
        "acceptedExamTypes": [
          "WAEC",
          "NECO",
          "NABTEB",
          "Other accepted senior secondary examinations"
        ],
        "ruleSummary": "Candidate must have at least five O'Level credit passes, including English Language and Mathematics, plus the programme-specific required/accepted subjects."
      },
      "warnings": [
        "Use of English in JAMB is different from English Language in O'Level; both must be treated separately.",
        "Correct JAMB subjects do not automatically satisfy O'Level requirements.",
        "Optional subjects should be selected only from the approved list for this programme.",
        "O'Level requires at least five credit passes, including English Language and Mathematics."
      ],
      "needsReview": false,
      "keywords": [
        "NSUK",
        "Nasarawa State University, Keffi",
        "Civil Engineering",
        "JAMB",
        "UTME",
        "Post UTME",
        "O'Level",
        "WAEC",
        "NECO",
        "NABTEB",
        "subject combination",
        "admission requirement",
        "Use of English",
        "Mathematics",
        "Physics",
        "Chemistry",
        "English Language",
        "Further Mathematics",
        "Technical Drawing",
        "Biology",
        "Geography"
      ],
      "answer": "For Civil Engineering at NSUK, the JAMB combination must include Use of English, Mathematics, Physics, Chemistry; the candidate should no optional JAMB subject is needed beyond the listed compulsory subjects to make four JAMB subjects. For O'Level, the candidate needs at least five credit passes including English Language, Mathematics, Physics, Chemistry. Accepted additional O'Level subjects include Further Mathematics, Technical Drawing, Biology, Geography.",
      "content": "Programme: Civil Engineering\nSchool: Nasarawa State University, Keffi (NSUK)\nAcademic session: 2025/2026\nRequirement type: JAMB subject combination and O'Level combination.\nJAMB requirement: The candidate must register four JAMB subjects. Compulsory JAMB subject(s): Use of English, Mathematics, Physics, Chemistry. Optional JAMB subject(s): no additional optional subjects are listed. Optional subjects needed: 0.\nO'Level requirement: The candidate must have at least five credit passes from WAEC, NECO, NABTEB, or another accepted senior secondary examination. English Language and Mathematics are compulsory for O'Level. Programme-specific compulsory O'Level subject(s): Physics, Chemistry. Accepted optional O'Level subject(s): Further Mathematics, Technical Drawing, Biology, Geography.\nStudent guidance: The student should not assume that any subject is accepted. They should match both the JAMB requirement and the O'Level requirement for Civil Engineering.",
      "questionVariants": [
        "What are the JAMB subjects for Civil Engineering at NSUK?",
        "What O'Level subjects do I need for Civil Engineering at NSUK?",
        "What is the subject combination for Civil Engineering in NSUK?",
        "Can I study Civil Engineering with my JAMB subjects?",
        "Can I study Civil Engineering without one of the listed compulsory subjects?",
        "What optional subjects are accepted for Civil Engineering?",
        "Is Mathematics compulsory for Civil Engineering at NSUK?",
        "Is English Language compulsory for Civil Engineering at NSUK?",
        "What WAEC or NECO subjects do I need for Civil Engineering?",
        "Does the right JAMB combination mean I am fully qualified for Civil Engineering?",
        "Can I use Further Mathematics for Civil Engineering at NSUK?",
        "Can I use Technical Drawing for Civil Engineering at NSUK?",
        "Can I use Biology for Civil Engineering at NSUK?"
      ],
      "sourcePages": [
        19,
        20
      ],
      "reviewLevel": "normal",
      "sourceNotes": [
        "Source page(s): 19, 20."
      ]
    },
    {
      "school": "Nasarawa State University, Keffi",
      "schoolShortName": "NSUK",
      "academicSession": "2025/2026",
      "sourceLabel": "NSUK Post UTME Subject Combination 2025/2026",
      "programme": "Electrical Electronics Engineering",
      "slug": "nsuk-electrical-electronics-engineering-requirements",
      "categorySlug": "programme-requirements",
      "type": "programme",
      "status": "published",
      "title": "NSUK Electrical Electronics Engineering Admission Subject Combination",
      "question": "What are the JAMB and O'Level subject requirements for Electrical Electronics Engineering at NSUK?",
      "jamb": {
        "totalRequiredSubjects": 4,
        "compulsorySubjects": [
          "Use of English",
          "Mathematics",
          "Physics",
          "Chemistry"
        ],
        "optionalChooseCount": 0,
        "optionalSubjects": [],
        "requiredSubjectGroups": [],
        "ruleSummary": "Candidate must register four JAMB subjects. Use of English is compulsory. The remaining subjects must follow the compulsory and optional subject rules for this programme."
      },
      "olevel": {
        "minimumCredits": 5,
        "globalCompulsorySubjects": [
          "English Language",
          "Mathematics"
        ],
        "programmeSpecificCompulsorySubjects": [
          "Physics",
          "Chemistry"
        ],
        "compulsorySubjects": [
          "English Language",
          "Mathematics",
          "Physics",
          "Chemistry"
        ],
        "optionalSubjects": [
          "Further Mathematics",
          "Technical Drawing",
          "Biology",
          "Geography"
        ],
        "acceptedExamTypes": [
          "WAEC",
          "NECO",
          "NABTEB",
          "Other accepted senior secondary examinations"
        ],
        "ruleSummary": "Candidate must have at least five O'Level credit passes, including English Language and Mathematics, plus the programme-specific required/accepted subjects."
      },
      "warnings": [
        "Use of English in JAMB is different from English Language in O'Level; both must be treated separately.",
        "Correct JAMB subjects do not automatically satisfy O'Level requirements.",
        "Optional subjects should be selected only from the approved list for this programme.",
        "O'Level requires at least five credit passes, including English Language and Mathematics."
      ],
      "needsReview": false,
      "keywords": [
        "NSUK",
        "Nasarawa State University, Keffi",
        "Electrical Electronics Engineering",
        "JAMB",
        "UTME",
        "Post UTME",
        "O'Level",
        "WAEC",
        "NECO",
        "NABTEB",
        "subject combination",
        "admission requirement",
        "Use of English",
        "Mathematics",
        "Physics",
        "Chemistry",
        "English Language",
        "Further Mathematics",
        "Technical Drawing",
        "Biology",
        "Geography"
      ],
      "answer": "For Electrical Electronics Engineering at NSUK, the JAMB combination must include Use of English, Mathematics, Physics, Chemistry; the candidate should no optional JAMB subject is needed beyond the listed compulsory subjects to make four JAMB subjects. For O'Level, the candidate needs at least five credit passes including English Language, Mathematics, Physics, Chemistry. Accepted additional O'Level subjects include Further Mathematics, Technical Drawing, Biology, Geography.",
      "content": "Programme: Electrical Electronics Engineering\nSchool: Nasarawa State University, Keffi (NSUK)\nAcademic session: 2025/2026\nRequirement type: JAMB subject combination and O'Level combination.\nJAMB requirement: The candidate must register four JAMB subjects. Compulsory JAMB subject(s): Use of English, Mathematics, Physics, Chemistry. Optional JAMB subject(s): no additional optional subjects are listed. Optional subjects needed: 0.\nO'Level requirement: The candidate must have at least five credit passes from WAEC, NECO, NABTEB, or another accepted senior secondary examination. English Language and Mathematics are compulsory for O'Level. Programme-specific compulsory O'Level subject(s): Physics, Chemistry. Accepted optional O'Level subject(s): Further Mathematics, Technical Drawing, Biology, Geography.\nStudent guidance: The student should not assume that any subject is accepted. They should match both the JAMB requirement and the O'Level requirement for Electrical Electronics Engineering.",
      "questionVariants": [
        "What are the JAMB subjects for Electrical Electronics Engineering at NSUK?",
        "What O'Level subjects do I need for Electrical Electronics Engineering at NSUK?",
        "What is the subject combination for Electrical Electronics Engineering in NSUK?",
        "Can I study Electrical Electronics Engineering with my JAMB subjects?",
        "Can I study Electrical Electronics Engineering without one of the listed compulsory subjects?",
        "What optional subjects are accepted for Electrical Electronics Engineering?",
        "Is Mathematics compulsory for Electrical Electronics Engineering at NSUK?",
        "Is English Language compulsory for Electrical Electronics Engineering at NSUK?",
        "What WAEC or NECO subjects do I need for Electrical Electronics Engineering?",
        "Does the right JAMB combination mean I am fully qualified for Electrical Electronics Engineering?",
        "Can I use Further Mathematics for Electrical Electronics Engineering at NSUK?",
        "Can I use Technical Drawing for Electrical Electronics Engineering at NSUK?",
        "Can I use Biology for Electrical Electronics Engineering at NSUK?"
      ],
      "sourcePages": [
        20
      ],
      "reviewLevel": "normal",
      "sourceNotes": [
        "Source page(s): 20."
      ]
    }
  ]
} as const;

export const nsukCategoriesSeed = nsukAdmissionSeedData.categories;
export const nsukProgrammeRequirementsSeed = nsukAdmissionSeedData.programmeRequirements;
export type NsukProgrammeRequirementSeed = (typeof nsukProgrammeRequirementsSeed)[number];
