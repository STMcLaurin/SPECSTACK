
const CATALOG = {
  "categories": [
    {
      "id": "discovery",
      "name": "Discovery",
      "description": "First contact through signed engagement: understanding the customer, the problem, and whether to proceed.",
      "documents": [
        {
          "id": "client-intake-form",
          "name": "Client Intake Form",
          "description": "The first structured capture of a prospective client's business, goals, and constraints.",
          "metadata": [
            "Project Name",
            "Client / Customer",
            "Document Version",
            "Author",
            "Date",
            "Status"
          ],
          "sections": [
            {
              "title": "Business Overview",
              "type": "textarea",
              "help": "What the business does and who it serves."
            },
            {
              "title": "Primary Contact",
              "type": "table",
              "help": "",
              "columns": [
                "Name",
                "Title",
                "Email",
                "Phone"
              ]
            },
            {
              "title": "Industry",
              "type": "text",
              "help": ""
            },
            {
              "title": "Business Goals",
              "type": "list",
              "help": "What they're trying to achieve."
            },
            {
              "title": "Current Problems",
              "type": "list",
              "help": "Pain points that led them to reach out."
            },
            {
              "title": "Desired Features",
              "type": "list",
              "help": ""
            },
            {
              "title": "Existing Systems / Tools in Use",
              "type": "list",
              "help": ""
            },
            {
              "title": "Budget Range",
              "type": "text",
              "help": ""
            },
            {
              "title": "Desired Timeline",
              "type": "text",
              "help": ""
            },
            {
              "title": "How They Heard About Us",
              "type": "text",
              "help": ""
            }
          ],
          "isNew": true
        },
        {
          "id": "customer-discovery-notes",
          "name": "Customer Discovery Notes",
          "description": "Raw and synthesized findings from conversations with prospective or existing customers.",
          "metadata": [
            "Project Name",
            "Client / Customer",
            "Document Version",
            "Author",
            "Date",
            "Status"
          ],
          "sections": [
            {
              "title": "Interview Overview",
              "type": "table",
              "help": "Who was interviewed, their role, and the date.",
              "columns": [
                "Name",
                "Role",
                "Company",
                "Date",
                "Method"
              ]
            },
            {
              "title": "Discovery Questions Asked",
              "type": "list",
              "help": "The guiding questions used to structure the conversation."
            },
            {
              "title": "Key Quotes",
              "type": "list",
              "help": "Verbatim or near-verbatim statements that reveal pain points or motivation."
            },
            {
              "title": "Pain Points Identified",
              "type": "table",
              "help": "Recurring frustrations, ranked by severity.",
              "columns": [
                "Pain Point",
                "Frequency",
                "Severity",
                "Notes"
              ]
            },
            {
              "title": "Current Workarounds",
              "type": "textarea",
              "help": "How the customer solves this problem today, including tools and manual effort."
            },
            {
              "title": "Desired Outcomes",
              "type": "list",
              "help": "What the customer says success would look like."
            },
            {
              "title": "Buying Triggers",
              "type": "textarea",
              "help": "Events or conditions that would prompt the customer to act now."
            },
            {
              "title": "Objections & Concerns",
              "type": "list",
              "help": "Hesitations raised about adopting a new solution."
            },
            {
              "title": "Patterns Across Interviews",
              "type": "textarea",
              "help": "Synthesis across multiple sessions, not a single conversation."
            },
            {
              "title": "Recommended Next Steps",
              "type": "textarea",
              "help": "What this discovery work suggests should happen next."
            }
          ]
        },
        {
          "id": "discovery-report",
          "name": "Discovery Report",
          "description": "The polished deliverable summarizing current-state workflow, tools, and opportunity \u2014 handed to the client.",
          "metadata": [
            "Project Name",
            "Client / Customer",
            "Document Version",
            "Author",
            "Date",
            "Status"
          ],
          "sections": [
            {
              "title": "Summary of Discovery",
              "type": "textarea",
              "help": ""
            },
            {
              "title": "Current Workflow",
              "type": "textarea",
              "help": "How work gets done today, step by step."
            },
            {
              "title": "Existing Software & Tools",
              "type": "table",
              "help": "",
              "columns": [
                "Tool",
                "Purpose",
                "Pain Points"
              ]
            },
            {
              "title": "Pain Points Identified",
              "type": "table",
              "help": "",
              "columns": [
                "Pain Point",
                "Impact",
                "Frequency"
              ]
            },
            {
              "title": "Opportunities for Improvement",
              "type": "list",
              "help": ""
            },
            {
              "title": "Stakeholders Consulted",
              "type": "table",
              "help": "",
              "columns": [
                "Name",
                "Role"
              ]
            },
            {
              "title": "Recommended Direction",
              "type": "textarea",
              "help": ""
            }
          ],
          "isNew": true
        },
        {
          "id": "problem-statement",
          "name": "Problem Statement",
          "description": "A tight, unambiguous articulation of the problem being solved and for whom.",
          "metadata": [
            "Project Name",
            "Client / Customer",
            "Document Version",
            "Author",
            "Date",
            "Status"
          ],
          "sections": [
            {
              "title": "Problem in One Sentence",
              "type": "textarea",
              "help": "The problem stated as concisely as possible."
            },
            {
              "title": "Who Experiences This Problem",
              "type": "textarea",
              "help": "The affected user or customer segment."
            },
            {
              "title": "When and Where It Occurs",
              "type": "textarea",
              "help": "The context or trigger conditions."
            },
            {
              "title": "Impact of the Problem",
              "type": "textarea",
              "help": "Cost, time, risk, or opportunity lost by not solving it."
            },
            {
              "title": "Evidence",
              "type": "list",
              "help": "Data, quotes, or observations that prove this problem is real."
            },
            {
              "title": "Root Cause Analysis",
              "type": "textarea",
              "help": "Why the problem exists, not just its symptoms."
            },
            {
              "title": "What Happens If Unsolved",
              "type": "textarea",
              "help": "Consequences of inaction."
            },
            {
              "title": "Boundaries of the Problem",
              "type": "textarea",
              "help": "What is explicitly NOT part of this problem statement."
            }
          ]
        },
        {
          "id": "stakeholder-analysis",
          "name": "Stakeholder Analysis",
          "description": "Maps everyone with influence over or interest in the project, and how to manage each of them.",
          "metadata": [
            "Project Name",
            "Client / Customer",
            "Document Version",
            "Author",
            "Date",
            "Status"
          ],
          "sections": [
            {
              "title": "Stakeholder Register",
              "type": "table",
              "help": "",
              "columns": [
                "Name",
                "Role",
                "Organization",
                "Contact"
              ]
            },
            {
              "title": "Power / Interest Grid",
              "type": "textarea",
              "help": "Placement of each stakeholder by influence and interest."
            },
            {
              "title": "Engagement Strategy",
              "type": "table",
              "help": "",
              "columns": [
                "Stakeholder",
                "Strategy",
                "Frequency of Contact"
              ]
            },
            {
              "title": "Communication Preferences",
              "type": "table",
              "help": "",
              "columns": [
                "Stakeholder",
                "Preferred Channel",
                "Cadence"
              ]
            },
            {
              "title": "Key Concerns per Stakeholder",
              "type": "textarea",
              "help": ""
            },
            {
              "title": "Escalation Path",
              "type": "textarea",
              "help": ""
            }
          ]
        },
        {
          "id": "business-case",
          "name": "Business Case",
          "description": "The financial and strategic argument for undertaking the project.",
          "metadata": [
            "Project Name",
            "Client / Customer",
            "Document Version",
            "Author",
            "Date",
            "Status"
          ],
          "sections": [
            {
              "title": "Executive Summary",
              "type": "textarea",
              "help": ""
            },
            {
              "title": "Strategic Alignment",
              "type": "textarea",
              "help": "How this supports broader business goals."
            },
            {
              "title": "Options Considered",
              "type": "table",
              "help": "",
              "columns": [
                "Option",
                "Pros",
                "Cons"
              ]
            },
            {
              "title": "Recommended Option",
              "type": "textarea",
              "help": ""
            },
            {
              "title": "Cost Estimate",
              "type": "table",
              "help": "",
              "columns": [
                "Cost Item",
                "Amount"
              ]
            },
            {
              "title": "Expected Benefits",
              "type": "table",
              "help": "",
              "columns": [
                "Benefit",
                "Type (Cost/Revenue/Risk)",
                "Estimated Value"
              ]
            },
            {
              "title": "ROI / Payback Analysis",
              "type": "textarea",
              "help": ""
            },
            {
              "title": "Risks of Proceeding",
              "type": "list",
              "help": ""
            },
            {
              "title": "Risks of Not Proceeding",
              "type": "list",
              "help": ""
            },
            {
              "title": "Recommendation",
              "type": "textarea",
              "help": ""
            }
          ]
        },
        {
          "id": "feasibility-study",
          "name": "Feasibility Study",
          "description": "Tests whether the proposed solution is realistic technically, operationally, and financially.",
          "metadata": [
            "Project Name",
            "Client / Customer",
            "Document Version",
            "Author",
            "Date",
            "Status"
          ],
          "sections": [
            {
              "title": "Purpose",
              "type": "textarea",
              "help": ""
            },
            {
              "title": "Technical Feasibility",
              "type": "textarea",
              "help": ""
            },
            {
              "title": "Operational Feasibility",
              "type": "textarea",
              "help": ""
            },
            {
              "title": "Financial Feasibility",
              "type": "textarea",
              "help": ""
            },
            {
              "title": "Legal / Compliance Feasibility",
              "type": "textarea",
              "help": ""
            },
            {
              "title": "Schedule Feasibility",
              "type": "textarea",
              "help": ""
            },
            {
              "title": "Alternatives Considered",
              "type": "table",
              "help": "",
              "columns": [
                "Alternative",
                "Verdict"
              ]
            },
            {
              "title": "Risks & Red Flags",
              "type": "list",
              "help": ""
            },
            {
              "title": "Conclusion & Recommendation",
              "type": "textarea",
              "help": ""
            }
          ]
        },
        {
          "id": "software-proposal",
          "name": "Software Proposal",
          "description": "The pitch to a prospective client for a proposed engagement.",
          "metadata": [
            "Project Name",
            "Client / Customer",
            "Document Version",
            "Author",
            "Date",
            "Status"
          ],
          "sections": [
            {
              "title": "Understanding of Client Need",
              "type": "textarea",
              "help": ""
            },
            {
              "title": "Proposed Solution",
              "type": "textarea",
              "help": ""
            },
            {
              "title": "Scope of Work",
              "type": "list",
              "help": ""
            },
            {
              "title": "Timeline",
              "type": "table",
              "help": "",
              "columns": [
                "Phase",
                "Duration"
              ]
            },
            {
              "title": "Pricing",
              "type": "table",
              "help": "",
              "columns": [
                "Item",
                "Cost"
              ]
            },
            {
              "title": "Team & Qualifications",
              "type": "textarea",
              "help": ""
            },
            {
              "title": "Terms",
              "type": "textarea",
              "help": ""
            },
            {
              "title": "Next Steps",
              "type": "textarea",
              "help": ""
            }
          ]
        },
        {
          "id": "statement-of-work",
          "name": "Statement of Work",
          "description": "The formal, contract-adjacent definition of the work being performed.",
          "metadata": [
            "Project Name",
            "Client / Customer",
            "Document Version",
            "Author",
            "Date",
            "Status"
          ],
          "sections": [
            {
              "title": "Project Overview",
              "type": "textarea",
              "help": ""
            },
            {
              "title": "Scope of Work",
              "type": "list",
              "help": ""
            },
            {
              "title": "Deliverables",
              "type": "table",
              "help": "",
              "columns": [
                "Deliverable",
                "Acceptance Criteria",
                "Due Date"
              ]
            },
            {
              "title": "Timeline & Milestones",
              "type": "table",
              "help": "",
              "columns": [
                "Milestone",
                "Date"
              ]
            },
            {
              "title": "Payment Schedule",
              "type": "table",
              "help": "",
              "columns": [
                "Milestone",
                "Amount",
                "Due"
              ]
            },
            {
              "title": "Roles & Responsibilities",
              "type": "textarea",
              "help": ""
            },
            {
              "title": "Assumptions & Exclusions",
              "type": "list",
              "help": ""
            },
            {
              "title": "Signatures",
              "type": "table",
              "help": "",
              "columns": [
                "Party",
                "Name",
                "Signature",
                "Date"
              ]
            }
          ]
        },
        {
          "id": "contract",
          "name": "Contract",
          "description": "The binding legal agreement governing the engagement.",
          "metadata": [
            "Project Name",
            "Client / Customer",
            "Document Version",
            "Author",
            "Date",
            "Status",
            "Effective Date"
          ],
          "sections": [
            {
              "title": "Parties",
              "type": "textarea",
              "help": ""
            },
            {
              "title": "Scope of Engagement",
              "type": "textarea",
              "help": ""
            },
            {
              "title": "Term & Termination",
              "type": "textarea",
              "help": ""
            },
            {
              "title": "Payment Terms",
              "type": "textarea",
              "help": ""
            },
            {
              "title": "Intellectual Property Ownership",
              "type": "textarea",
              "help": ""
            },
            {
              "title": "Confidentiality",
              "type": "textarea",
              "help": ""
            },
            {
              "title": "Liability & Indemnification",
              "type": "textarea",
              "help": ""
            },
            {
              "title": "Dispute Resolution",
              "type": "textarea",
              "help": ""
            },
            {
              "title": "Signatures",
              "type": "table",
              "help": "",
              "columns": [
                "Party",
                "Name",
                "Signature",
                "Date"
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "requirements",
      "name": "Requirements",
      "description": "Converting the validated problem into precise, testable statements of what will be built.",
      "documents": [
        {
          "id": "business-requirements-document",
          "name": "Business Requirements Document",
          "description": "The authoritative statement of what the business needs, independent of technical solution.",
          "metadata": [
            "Project Name",
            "Client / Customer",
            "Document Version",
            "Author",
            "Date",
            "Status"
          ],
          "sections": [
            {
              "title": "Executive Summary",
              "type": "textarea",
              "help": ""
            },
            {
              "title": "Business Problem",
              "type": "textarea",
              "help": ""
            },
            {
              "title": "Business Objectives",
              "type": "list",
              "help": ""
            },
            {
              "title": "Current State",
              "type": "textarea",
              "help": ""
            },
            {
              "title": "Proposed Solution",
              "type": "textarea",
              "help": ""
            },
            {
              "title": "Stakeholders",
              "type": "table",
              "help": "",
              "columns": [
                "Name",
                "Role",
                "Department",
                "Interest Level"
              ]
            },
            {
              "title": "User Groups",
              "type": "table",
              "help": "",
              "columns": [
                "User Group",
                "Description",
                "Primary Needs"
              ]
            },
            {
              "title": "Functional Requirements",
              "type": "table",
              "help": "",
              "columns": [
                "ID",
                "Requirement",
                "Priority"
              ]
            },
            {
              "title": "Non-Functional Requirements",
              "type": "table",
              "help": "",
              "columns": [
                "ID",
                "Requirement",
                "Target"
              ]
            },
            {
              "title": "Business Rules",
              "type": "list",
              "help": ""
            },
            {
              "title": "Constraints",
              "type": "list",
              "help": ""
            },
            {
              "title": "Assumptions",
              "type": "list",
              "help": ""
            },
            {
              "title": "Dependencies",
              "type": "list",
              "help": ""
            },
            {
              "title": "Risks",
              "type": "table",
              "help": "",
              "columns": [
                "Risk",
                "Likelihood",
                "Impact",
                "Mitigation"
              ]
            },
            {
              "title": "Success Criteria",
              "type": "list",
              "help": ""
            },
            {
              "title": "Approval",
              "type": "table",
              "help": "",
              "columns": [
                "Name",
                "Role",
                "Signature",
                "Date"
              ]
            }
          ]
        },
        {
          "id": "scope-document",
          "name": "Scope Document",
          "description": "Draws the boundary line around the project so everyone agrees what is and isn't included.",
          "metadata": [
            "Project Name",
            "Client / Customer",
            "Document Version",
            "Author",
            "Date",
            "Status"
          ],
          "sections": [
            {
              "title": "Project Overview",
              "type": "textarea",
              "help": ""
            },
            {
              "title": "In Scope",
              "type": "list",
              "help": ""
            },
            {
              "title": "Out of Scope",
              "type": "list",
              "help": ""
            },
            {
              "title": "Deliverables",
              "type": "table",
              "help": "",
              "columns": [
                "Deliverable",
                "Description",
                "Due"
              ]
            },
            {
              "title": "Milestones",
              "type": "table",
              "help": "",
              "columns": [
                "Milestone",
                "Target Date"
              ]
            },
            {
              "title": "Assumptions",
              "type": "list",
              "help": ""
            },
            {
              "title": "Constraints",
              "type": "list",
              "help": ""
            },
            {
              "title": "Scope Change Process",
              "type": "textarea",
              "help": "How additions to scope will be evaluated and approved."
            },
            {
              "title": "Sign-Off",
              "type": "table",
              "help": "",
              "columns": [
                "Name",
                "Role",
                "Signature",
                "Date"
              ]
            }
          ]
        },
        {
          "id": "requirements-traceability-matrix",
          "name": "Requirements Traceability Matrix",
          "description": "Traces every requirement from origin through design, build, and test so nothing gets lost.",
          "metadata": [
            "Project Name",
            "Client / Customer",
            "Document Version",
            "Author",
            "Date",
            "Status"
          ],
          "sections": [
            {
              "title": "Traceability Table",
              "type": "table",
              "help": "",
              "columns": [
                "Req ID",
                "Requirement",
                "Source",
                "Design Ref",
                "Build Ref",
                "Test Case ID",
                "Status"
              ]
            },
            {
              "title": "Coverage Summary",
              "type": "textarea",
              "help": "Percentage of requirements with full downstream coverage."
            },
            {
              "title": "Orphaned Requirements",
              "type": "list",
              "help": "Requirements with no linked design, build, or test."
            },
            {
              "title": "Change History",
              "type": "table",
              "help": "",
              "columns": [
                "Date",
                "Req ID",
                "Change",
                "Reason"
              ]
            }
          ]
        },
        {
          "id": "product-requirements-document",
          "name": "Product Requirements Document",
          "description": "The bridge from business need to buildable product, defining what will be built and why.",
          "metadata": [
            "Project Name",
            "Client / Customer",
            "Document Version",
            "Author",
            "Date",
            "Status"
          ],
          "sections": [
            {
              "title": "Overview & Goals",
              "type": "textarea",
              "help": ""
            },
            {
              "title": "Target Users & Personas",
              "type": "textarea",
              "help": ""
            },
            {
              "title": "Problem This Solves",
              "type": "textarea",
              "help": ""
            },
            {
              "title": "Feature Requirements",
              "type": "table",
              "help": "",
              "columns": [
                "Feature",
                "Description",
                "Priority"
              ]
            },
            {
              "title": "User Flows Referenced",
              "type": "list",
              "help": ""
            },
            {
              "title": "Non-Functional Requirements",
              "type": "list",
              "help": ""
            },
            {
              "title": "Success Metrics",
              "type": "table",
              "help": "",
              "columns": [
                "Metric",
                "Target"
              ]
            },
            {
              "title": "Out of Scope",
              "type": "list",
              "help": ""
            },
            {
              "title": "Open Questions",
              "type": "list",
              "help": ""
            },
            {
              "title": "Launch Plan",
              "type": "textarea",
              "help": ""
            }
          ]
        },
        {
          "id": "user-stories",
          "name": "User Stories",
          "description": "Requirements expressed from the perspective of the person who benefits.",
          "metadata": [
            "Project Name",
            "Client / Customer",
            "Document Version",
            "Author",
            "Date",
            "Status"
          ],
          "sections": [
            {
              "title": "Story List",
              "type": "table",
              "help": "",
              "columns": [
                "ID",
                "As a...",
                "I want...",
                "So that...",
                "Priority"
              ]
            },
            {
              "title": "Story Mapping Notes",
              "type": "textarea",
              "help": ""
            },
            {
              "title": "Personas Referenced",
              "type": "list",
              "help": ""
            },
            {
              "title": "Definition of Ready",
              "type": "list",
              "help": ""
            }
          ]
        },
        {
          "id": "acceptance-criteria",
          "name": "Acceptance Criteria",
          "description": "The precise conditions a story or feature must satisfy to be considered done.",
          "metadata": [
            "Project Name",
            "Client / Customer",
            "Document Version",
            "Author",
            "Date",
            "Status"
          ],
          "sections": [
            {
              "title": "Linked Story / Feature",
              "type": "text",
              "help": ""
            },
            {
              "title": "Given / When / Then Scenarios",
              "type": "table",
              "help": "",
              "columns": [
                "Given",
                "When",
                "Then"
              ]
            },
            {
              "title": "Edge Cases Covered",
              "type": "list",
              "help": ""
            },
            {
              "title": "Out of Scope for This Criteria",
              "type": "list",
              "help": ""
            },
            {
              "title": "Definition of Done Checklist",
              "type": "list",
              "help": ""
            }
          ]
        },
        {
          "id": "product-backlog",
          "name": "Product Backlog",
          "description": "The single ranked list of everything that could be built.",
          "metadata": [
            "Project Name",
            "Client / Customer",
            "Document Version",
            "Author",
            "Date",
            "Status"
          ],
          "sections": [
            {
              "title": "Backlog Items",
              "type": "table",
              "help": "",
              "columns": [
                "ID",
                "Title",
                "Type",
                "Priority",
                "Estimate",
                "Status"
              ]
            },
            {
              "title": "Prioritization Method",
              "type": "textarea",
              "help": "e.g. RICE, MoSCoW, value vs. effort."
            },
            {
              "title": "Backlog Grooming Notes",
              "type": "textarea",
              "help": ""
            },
            {
              "title": "Icebox",
              "type": "list",
              "help": "Ideas deliberately deferred, not discarded."
            }
          ]
        }
      ]
    },
    {
      "id": "planning",
      "name": "Planning",
      "description": "Sequencing the confirmed requirements into a schedule, backlog cadence, and risk register.",
      "documents": [
        {
          "id": "project-timeline",
          "name": "Project Timeline",
          "description": "The schedule of work, phases, and dates the team commits to.",
          "metadata": [
            "Project Name",
            "Client / Customer",
            "Document Version",
            "Author",
            "Date",
            "Status"
          ],
          "sections": [
            {
              "title": "Phase Breakdown",
              "type": "table",
              "help": "",
              "columns": [
                "Phase",
                "Start",
                "End",
                "Owner"
              ]
            },
            {
              "title": "Milestones",
              "type": "table",
              "help": "",
              "columns": [
                "Milestone",
                "Date",
                "Dependency"
              ]
            },
            {
              "title": "Critical Path",
              "type": "textarea",
              "help": ""
            },
            {
              "title": "Buffer / Contingency Time",
              "type": "textarea",
              "help": ""
            },
            {
              "title": "Assumptions",
              "type": "list",
              "help": ""
            }
          ]
        },
        {
          "id": "sprint-plan",
          "name": "Sprint Plan",
          "description": "The committed scope and goal for a single iteration of work.",
          "metadata": [
            "Project Name",
            "Client / Customer",
            "Document Version",
            "Author",
            "Date",
            "Status"
          ],
          "sections": [
            {
              "title": "Sprint Goal",
              "type": "textarea",
              "help": ""
            },
            {
              "title": "Sprint Dates",
              "type": "text",
              "help": ""
            },
            {
              "title": "Committed Stories",
              "type": "table",
              "help": "",
              "columns": [
                "Story ID",
                "Title",
                "Estimate",
                "Owner"
              ]
            },
            {
              "title": "Capacity Planning",
              "type": "textarea",
              "help": ""
            },
            {
              "title": "Risks to This Sprint",
              "type": "list",
              "help": ""
            },
            {
              "title": "Definition of Done",
              "type": "list",
              "help": ""
            }
          ]
        },
        {
          "id": "risk-assessment",
          "name": "Risk Assessment",
          "description": "Identifies and scores risks to the project before they become issues.",
          "metadata": [
            "Project Name",
            "Client / Customer",
            "Document Version",
            "Author",
            "Date",
            "Status"
          ],
          "sections": [
            {
              "title": "Risk Register",
              "type": "table",
              "help": "",
              "columns": [
                "ID",
                "Risk",
                "Category",
                "Likelihood",
                "Impact",
                "Score"
              ]
            },
            {
              "title": "Risk Scoring Methodology",
              "type": "textarea",
              "help": ""
            },
            {
              "title": "Top Risks Summary",
              "type": "textarea",
              "help": ""
            },
            {
              "title": "Mitigation Plans",
              "type": "table",
              "help": "",
              "columns": [
                "Risk ID",
                "Mitigation",
                "Owner",
                "Status"
              ]
            },
            {
              "title": "Contingency Plans",
              "type": "textarea",
              "help": ""
            },
            {
              "title": "Risk Review Cadence",
              "type": "textarea",
              "help": ""
            }
          ]
        },
        {
          "id": "change-request",
          "name": "Change Request",
          "description": "A formal ask to alter agreed scope, schedule, or budget.",
          "metadata": [
            "Project Name",
            "Client / Customer",
            "Document Version",
            "Author",
            "Date",
            "Status"
          ],
          "sections": [
            {
              "title": "Change Summary",
              "type": "textarea",
              "help": ""
            },
            {
              "title": "Reason for Change",
              "type": "textarea",
              "help": ""
            },
            {
              "title": "Impact on Scope",
              "type": "textarea",
              "help": ""
            },
            {
              "title": "Impact on Timeline",
              "type": "textarea",
              "help": ""
            },
            {
              "title": "Impact on Budget",
              "type": "textarea",
              "help": ""
            },
            {
              "title": "Risk of Approving",
              "type": "textarea",
              "help": ""
            },
            {
              "title": "Risk of Rejecting",
              "type": "textarea",
              "help": ""
            },
            {
              "title": "Approval Decision",
              "type": "table",
              "help": "",
              "columns": [
                "Approver",
                "Decision",
                "Date"
              ]
            }
          ]
        },
        {
          "id": "change-control-log",
          "name": "Change Control Log",
          "description": "The running record of every change request and its disposition.",
          "metadata": [
            "Project Name",
            "Client / Customer",
            "Document Version",
            "Author",
            "Date",
            "Status"
          ],
          "sections": [
            {
              "title": "Change Log",
              "type": "table",
              "help": "",
              "columns": [
                "ID",
                "Date Submitted",
                "Requestor",
                "Summary",
                "Status",
                "Decision Date"
              ]
            },
            {
              "title": "Change Control Process",
              "type": "textarea",
              "help": ""
            },
            {
              "title": "Trends & Notes",
              "type": "textarea",
              "help": ""
            }
          ]
        },
        {
          "id": "product-roadmap",
          "name": "Product Roadmap",
          "description": "The high-level, time-phased view of where the product is going.",
          "metadata": [
            "Project Name",
            "Client / Customer",
            "Document Version",
            "Author",
            "Date",
            "Status"
          ],
          "sections": [
            {
              "title": "Vision Statement",
              "type": "textarea",
              "help": ""
            },
            {
              "title": "Themes by Horizon",
              "type": "table",
              "help": "",
              "columns": [
                "Horizon (Now/Next/Later)",
                "Theme",
                "Goal"
              ]
            },
            {
              "title": "Planned Releases",
              "type": "table",
              "help": "",
              "columns": [
                "Release",
                "Target Date",
                "Key Features"
              ]
            },
            {
              "title": "Dependencies Across Themes",
              "type": "textarea",
              "help": ""
            },
            {
              "title": "Roadmap Caveats",
              "type": "textarea",
              "help": "Explicit reminder that dates and scope are subject to change."
            }
          ]
        }
      ]
    },
    {
      "id": "design",
      "name": "Design",
      "description": "Translating requirements into a concrete, buildable shape for the interface.",
      "documents": [
        {
          "id": "wireframe-specification",
          "name": "Wireframe Specification",
          "description": "Low-fidelity structural documentation of screens before visual design.",
          "metadata": [
            "Project Name",
            "Client / Customer",
            "Document Version",
            "Author",
            "Date",
            "Status"
          ],
          "sections": [
            {
              "title": "Screen Inventory",
              "type": "table",
              "help": "",
              "columns": [
                "Screen",
                "Purpose",
                "Linked Story"
              ]
            },
            {
              "title": "Layout Notes per Screen",
              "type": "textarea",
              "help": ""
            },
            {
              "title": "Component Placement Rationale",
              "type": "textarea",
              "help": ""
            },
            {
              "title": "Responsive Behavior Notes",
              "type": "textarea",
              "help": ""
            },
            {
              "title": "Open Design Questions",
              "type": "list",
              "help": ""
            }
          ]
        },
        {
          "id": "user-flow",
          "name": "User Flow",
          "description": "The path a user takes through the product to accomplish a goal.",
          "metadata": [
            "Project Name",
            "Client / Customer",
            "Document Version",
            "Author",
            "Date",
            "Status"
          ],
          "sections": [
            {
              "title": "Flow Goal",
              "type": "textarea",
              "help": ""
            },
            {
              "title": "Entry Points",
              "type": "list",
              "help": ""
            },
            {
              "title": "Step-by-Step Flow",
              "type": "table",
              "help": "",
              "columns": [
                "Step",
                "Screen / Action",
                "Decision Point?"
              ]
            },
            {
              "title": "Alternate Paths & Error States",
              "type": "textarea",
              "help": ""
            },
            {
              "title": "Exit Points",
              "type": "list",
              "help": ""
            }
          ]
        },
        {
          "id": "ui-design-specification",
          "name": "UI Design Specification",
          "description": "The definitive visual reference for how the interface should look and behave.",
          "metadata": [
            "Project Name",
            "Client / Customer",
            "Document Version",
            "Author",
            "Date",
            "Status"
          ],
          "sections": [
            {
              "title": "Design Principles",
              "type": "textarea",
              "help": ""
            },
            {
              "title": "Color Palette",
              "type": "table",
              "help": "",
              "columns": [
                "Token",
                "Hex",
                "Usage"
              ]
            },
            {
              "title": "Typography Scale",
              "type": "table",
              "help": "",
              "columns": [
                "Style",
                "Font",
                "Size",
                "Weight"
              ]
            },
            {
              "title": "Component Library Reference",
              "type": "list",
              "help": ""
            },
            {
              "title": "Spacing & Grid System",
              "type": "textarea",
              "help": ""
            },
            {
              "title": "Iconography Guidelines",
              "type": "textarea",
              "help": ""
            },
            {
              "title": "Interaction & Motion Notes",
              "type": "textarea",
              "help": ""
            },
            {
              "title": "Accessibility Notes",
              "type": "textarea",
              "help": ""
            }
          ]
        },
        {
          "id": "ux-specification",
          "name": "UX Specification",
          "description": "The reasoning behind the experience, not just its visuals.",
          "metadata": [
            "Project Name",
            "Client / Customer",
            "Document Version",
            "Author",
            "Date",
            "Status"
          ],
          "sections": [
            {
              "title": "UX Goals",
              "type": "textarea",
              "help": ""
            },
            {
              "title": "Target Personas",
              "type": "list",
              "help": ""
            },
            {
              "title": "Interaction Patterns Used",
              "type": "textarea",
              "help": ""
            },
            {
              "title": "Information Architecture",
              "type": "textarea",
              "help": ""
            },
            {
              "title": "Usability Heuristics Applied",
              "type": "list",
              "help": ""
            },
            {
              "title": "Known UX Tradeoffs",
              "type": "textarea",
              "help": ""
            },
            {
              "title": "Validation Plan",
              "type": "textarea",
              "help": "How the experience will be tested with real users."
            }
          ]
        }
      ]
    },
    {
      "id": "architecture",
      "name": "Architecture",
      "description": "The technical blueprint: data model, system structure, and integration contracts.",
      "documents": [
        {
          "id": "database-erd-specification",
          "name": "Database ERD Specification",
          "description": "The entity-relationship model underpinning the data layer.",
          "metadata": [
            "Project Name",
            "Client / Customer",
            "Document Version",
            "Author",
            "Date",
            "Status"
          ],
          "sections": [
            {
              "title": "Entity List",
              "type": "table",
              "help": "",
              "columns": [
                "Entity",
                "Purpose"
              ]
            },
            {
              "title": "Relationships",
              "type": "table",
              "help": "",
              "columns": [
                "Entity A",
                "Relationship",
                "Entity B",
                "Cardinality"
              ]
            },
            {
              "title": "Key Fields per Entity",
              "type": "textarea",
              "help": ""
            },
            {
              "title": "Normalization Notes",
              "type": "textarea",
              "help": ""
            },
            {
              "title": "Indexing Strategy",
              "type": "textarea",
              "help": ""
            },
            {
              "title": "Diagram Reference",
              "type": "text",
              "help": "Link or filename of the visual ERD."
            }
          ]
        },
        {
          "id": "system-architecture-document",
          "name": "System Architecture Document",
          "description": "The blueprint of how components, services, and data fit together.",
          "metadata": [
            "Project Name",
            "Client / Customer",
            "Document Version",
            "Author",
            "Date",
            "Status"
          ],
          "sections": [
            {
              "title": "Architecture Overview",
              "type": "textarea",
              "help": ""
            },
            {
              "title": "Component Diagram Description",
              "type": "textarea",
              "help": ""
            },
            {
              "title": "Technology Stack",
              "type": "table",
              "help": "",
              "columns": [
                "Layer",
                "Technology",
                "Rationale"
              ]
            },
            {
              "title": "Data Flow",
              "type": "textarea",
              "help": ""
            },
            {
              "title": "Integration Points",
              "type": "table",
              "help": "",
              "columns": [
                "System",
                "Integration Type",
                "Purpose"
              ]
            },
            {
              "title": "Scalability Considerations",
              "type": "textarea",
              "help": ""
            },
            {
              "title": "Security Considerations",
              "type": "textarea",
              "help": ""
            },
            {
              "title": "Deployment Topology",
              "type": "textarea",
              "help": ""
            },
            {
              "title": "Architecture Decision Records",
              "type": "table",
              "help": "",
              "columns": [
                "Decision",
                "Alternatives",
                "Rationale"
              ]
            }
          ]
        },
        {
          "id": "api-design",
          "name": "API Design",
          "description": "The contract-level plan for how services will be exposed and consumed.",
          "metadata": [
            "Project Name",
            "Client / Customer",
            "Document Version",
            "Author",
            "Date",
            "Status",
            "API Version"
          ],
          "sections": [
            {
              "title": "API Overview & Style",
              "type": "textarea",
              "help": "REST, GraphQL, RPC, etc."
            },
            {
              "title": "Resource / Endpoint List",
              "type": "table",
              "help": "",
              "columns": [
                "Method",
                "Path",
                "Purpose"
              ]
            },
            {
              "title": "Authentication Approach",
              "type": "textarea",
              "help": ""
            },
            {
              "title": "Request / Response Conventions",
              "type": "textarea",
              "help": ""
            },
            {
              "title": "Versioning Strategy",
              "type": "textarea",
              "help": ""
            },
            {
              "title": "Error Handling Convention",
              "type": "textarea",
              "help": ""
            },
            {
              "title": "Rate Limiting",
              "type": "textarea",
              "help": ""
            }
          ]
        },
        {
          "id": "data-dictionary",
          "name": "Data Dictionary",
          "description": "The definitive glossary of every field, its type, and its meaning.",
          "metadata": [
            "Project Name",
            "Client / Customer",
            "Document Version",
            "Author",
            "Date",
            "Status"
          ],
          "sections": [
            {
              "title": "Field Definitions",
              "type": "table",
              "help": "",
              "columns": [
                "Table",
                "Field",
                "Type",
                "Description",
                "Constraints"
              ]
            },
            {
              "title": "Enumerated Values",
              "type": "table",
              "help": "",
              "columns": [
                "Field",
                "Allowed Values",
                "Meaning"
              ]
            },
            {
              "title": "Naming Conventions",
              "type": "textarea",
              "help": ""
            },
            {
              "title": "Sensitive / PII Fields",
              "type": "list",
              "help": "Fields requiring special handling."
            }
          ]
        }
      ]
    },
    {
      "id": "development",
      "name": "Development",
      "description": "Governing how the software actually gets written, structured, reviewed, and reported on.",
      "documents": [
        {
          "id": "development-plan",
          "name": "Development Plan",
          "description": "The engineering-facing plan for how the build phase will be executed.",
          "metadata": [
            "Project Name",
            "Client / Customer",
            "Document Version",
            "Author",
            "Date",
            "Status"
          ],
          "sections": [
            {
              "title": "Build Approach",
              "type": "textarea",
              "help": "e.g. phased, feature-branch, trunk-based."
            },
            {
              "title": "Team Roles & Responsibilities",
              "type": "table",
              "help": "",
              "columns": [
                "Name",
                "Role",
                "Area Owned"
              ]
            },
            {
              "title": "Environment Strategy",
              "type": "textarea",
              "help": "Local, staging, production."
            },
            {
              "title": "Branching Strategy",
              "type": "textarea",
              "help": ""
            },
            {
              "title": "Milestones",
              "type": "table",
              "help": "",
              "columns": [
                "Milestone",
                "Target Date"
              ]
            },
            {
              "title": "Tooling & CI/CD",
              "type": "textarea",
              "help": ""
            },
            {
              "title": "Definition of Done",
              "type": "list",
              "help": ""
            }
          ]
        },
        {
          "id": "development-progress-report",
          "name": "Development Progress Report",
          "description": "The recurring status update sent to the client while the build is underway.",
          "metadata": [
            "Project Name",
            "Client / Customer",
            "Document Version",
            "Author",
            "Date",
            "Status"
          ],
          "sections": [
            {
              "title": "Reporting Period",
              "type": "text",
              "help": ""
            },
            {
              "title": "Overall Health",
              "type": "text",
              "help": "On Track, At Risk, or Delayed."
            },
            {
              "title": "Completed This Period",
              "type": "list",
              "help": ""
            },
            {
              "title": "Planned for Next Period",
              "type": "list",
              "help": ""
            },
            {
              "title": "Blockers / Risks",
              "type": "table",
              "help": "",
              "columns": [
                "Issue",
                "Impact",
                "Mitigation"
              ]
            },
            {
              "title": "Budget / Hours Burned",
              "type": "textarea",
              "help": ""
            },
            {
              "title": "Notes for Client",
              "type": "textarea",
              "help": ""
            }
          ],
          "isNew": true
        },
        {
          "id": "git-repository-documentation",
          "name": "Git Repository Documentation",
          "description": "Orientation for anyone entering the repository for the first time.",
          "metadata": [
            "Project Name",
            "Client / Customer",
            "Document Version",
            "Author",
            "Date",
            "Status"
          ],
          "sections": [
            {
              "title": "Repository Purpose",
              "type": "textarea",
              "help": ""
            },
            {
              "title": "Folder Structure",
              "type": "textarea",
              "help": ""
            },
            {
              "title": "Branching Model",
              "type": "textarea",
              "help": ""
            },
            {
              "title": "Commit Message Convention",
              "type": "textarea",
              "help": ""
            },
            {
              "title": "Pull Request Process",
              "type": "textarea",
              "help": ""
            },
            {
              "title": "CI/CD Pipeline Overview",
              "type": "textarea",
              "help": ""
            },
            {
              "title": "Local Setup Instructions",
              "type": "textarea",
              "help": ""
            }
          ]
        },
        {
          "id": "source-code-documentation",
          "name": "Source Code Documentation",
          "description": "Inline and structural documentation of how the codebase works.",
          "metadata": [
            "Project Name",
            "Client / Customer",
            "Document Version",
            "Author",
            "Date",
            "Status"
          ],
          "sections": [
            {
              "title": "Module Overview",
              "type": "table",
              "help": "",
              "columns": [
                "Module",
                "Purpose"
              ]
            },
            {
              "title": "Key Classes / Functions",
              "type": "table",
              "help": "",
              "columns": [
                "Name",
                "Purpose",
                "Location"
              ]
            },
            {
              "title": "Design Patterns Used",
              "type": "textarea",
              "help": ""
            },
            {
              "title": "Known Technical Debt",
              "type": "list",
              "help": ""
            },
            {
              "title": "Documentation Standards Followed",
              "type": "textarea",
              "help": ""
            }
          ]
        },
        {
          "id": "component-documentation",
          "name": "Component Documentation",
          "description": "Reference for a single reusable component: what it does and how to use it.",
          "metadata": [
            "Project Name",
            "Client / Customer",
            "Document Version",
            "Author",
            "Date",
            "Status"
          ],
          "sections": [
            {
              "title": "Component Purpose",
              "type": "textarea",
              "help": ""
            },
            {
              "title": "Props / Inputs",
              "type": "table",
              "help": "",
              "columns": [
                "Name",
                "Type",
                "Required",
                "Default",
                "Description"
              ]
            },
            {
              "title": "Usage Example",
              "type": "textarea",
              "help": ""
            },
            {
              "title": "Variants / States",
              "type": "textarea",
              "help": ""
            },
            {
              "title": "Accessibility Notes",
              "type": "textarea",
              "help": ""
            },
            {
              "title": "Dependencies",
              "type": "list",
              "help": ""
            }
          ]
        },
        {
          "id": "api-documentation",
          "name": "API Documentation",
          "description": "The consumer-facing reference for calling the API.",
          "metadata": [
            "Project Name",
            "Client / Customer",
            "Document Version",
            "Author",
            "Date",
            "Status",
            "API Version"
          ],
          "sections": [
            {
              "title": "Base URL & Auth",
              "type": "textarea",
              "help": ""
            },
            {
              "title": "Endpoints",
              "type": "table",
              "help": "",
              "columns": [
                "Method",
                "Path",
                "Description",
                "Auth Required"
              ]
            },
            {
              "title": "Request Parameters",
              "type": "table",
              "help": "",
              "columns": [
                "Endpoint",
                "Param",
                "Type",
                "Required"
              ]
            },
            {
              "title": "Response Examples",
              "type": "textarea",
              "help": ""
            },
            {
              "title": "Error Codes",
              "type": "table",
              "help": "",
              "columns": [
                "Code",
                "Meaning",
                "Resolution"
              ]
            },
            {
              "title": "Rate Limits",
              "type": "textarea",
              "help": ""
            },
            {
              "title": "Changelog",
              "type": "table",
              "help": "",
              "columns": [
                "Version",
                "Date",
                "Change"
              ]
            }
          ]
        },
        {
          "id": "database-documentation",
          "name": "Database Documentation",
          "description": "How the database is structured, maintained, and accessed.",
          "metadata": [
            "Project Name",
            "Client / Customer",
            "Document Version",
            "Author",
            "Date",
            "Status"
          ],
          "sections": [
            {
              "title": "Schema Overview",
              "type": "textarea",
              "help": ""
            },
            {
              "title": "Tables & Purpose",
              "type": "table",
              "help": "",
              "columns": [
                "Table",
                "Purpose",
                "Row Owner"
              ]
            },
            {
              "title": "Relationships Summary",
              "type": "textarea",
              "help": ""
            },
            {
              "title": "Migration Process",
              "type": "textarea",
              "help": ""
            },
            {
              "title": "Backup Schedule",
              "type": "textarea",
              "help": ""
            },
            {
              "title": "Access Control",
              "type": "textarea",
              "help": ""
            }
          ]
        },
        {
          "id": "authentication-specification",
          "name": "Authentication Specification",
          "description": "Defines exactly how identity is verified in the system.",
          "metadata": [
            "Project Name",
            "Client / Customer",
            "Document Version",
            "Author",
            "Date",
            "Status"
          ],
          "sections": [
            {
              "title": "Authentication Method",
              "type": "textarea",
              "help": "e.g. session, JWT, OAuth2."
            },
            {
              "title": "Login Flow",
              "type": "textarea",
              "help": ""
            },
            {
              "title": "Password / Credential Policy",
              "type": "textarea",
              "help": ""
            },
            {
              "title": "Multi-Factor Authentication",
              "type": "textarea",
              "help": ""
            },
            {
              "title": "Token Lifecycle",
              "type": "textarea",
              "help": "Issuance, refresh, expiry, revocation."
            },
            {
              "title": "Session Handling",
              "type": "textarea",
              "help": ""
            },
            {
              "title": "Failure & Lockout Handling",
              "type": "textarea",
              "help": ""
            }
          ]
        },
        {
          "id": "authorization-specification",
          "name": "Authorization Specification",
          "description": "Defines exactly what an authenticated identity is allowed to do.",
          "metadata": [
            "Project Name",
            "Client / Customer",
            "Document Version",
            "Author",
            "Date",
            "Status"
          ],
          "sections": [
            {
              "title": "Authorization Model",
              "type": "textarea",
              "help": "e.g. RBAC, ABAC, ACL."
            },
            {
              "title": "Roles & Permissions Matrix",
              "type": "table",
              "help": "",
              "columns": [
                "Role",
                "Permission",
                "Resource"
              ]
            },
            {
              "title": "Multi-Tenancy Isolation Rules",
              "type": "textarea",
              "help": ""
            },
            {
              "title": "Privilege Escalation Safeguards",
              "type": "textarea",
              "help": ""
            },
            {
              "title": "Audit Logging of Access",
              "type": "textarea",
              "help": ""
            }
          ]
        },
        {
          "id": "coding-standards",
          "name": "Coding Standards",
          "description": "The house rules for how code is written, so the codebase reads as one voice.",
          "metadata": [
            "Project Name",
            "Client / Customer",
            "Document Version",
            "Author",
            "Date",
            "Status"
          ],
          "sections": [
            {
              "title": "Language / Framework Conventions",
              "type": "textarea",
              "help": ""
            },
            {
              "title": "Naming Conventions",
              "type": "textarea",
              "help": ""
            },
            {
              "title": "File & Folder Organization",
              "type": "textarea",
              "help": ""
            },
            {
              "title": "Formatting & Linting Rules",
              "type": "textarea",
              "help": ""
            },
            {
              "title": "Error Handling Conventions",
              "type": "textarea",
              "help": ""
            },
            {
              "title": "Testing Requirements",
              "type": "textarea",
              "help": ""
            },
            {
              "title": "Documentation Requirements",
              "type": "textarea",
              "help": ""
            }
          ]
        },
        {
          "id": "code-review-report",
          "name": "Code Review Report",
          "description": "The record of a code review: what was found and what changed as a result.",
          "metadata": [
            "Project Name",
            "Client / Customer",
            "Document Version",
            "Author",
            "Date",
            "Status"
          ],
          "sections": [
            {
              "title": "Pull Request Reference",
              "type": "text",
              "help": ""
            },
            {
              "title": "Reviewer(s)",
              "type": "text",
              "help": ""
            },
            {
              "title": "Findings",
              "type": "table",
              "help": "",
              "columns": [
                "File / Line",
                "Issue",
                "Severity",
                "Resolved?"
              ]
            },
            {
              "title": "Standards Compliance Notes",
              "type": "textarea",
              "help": ""
            },
            {
              "title": "Overall Verdict",
              "type": "textarea",
              "help": ""
            }
          ]
        },
        {
          "id": "readme",
          "name": "README",
          "description": "The first document anyone reads when they encounter the project.",
          "metadata": [
            "Project Name",
            "Client / Customer",
            "Document Version",
            "Author",
            "Date",
            "Status"
          ],
          "sections": [
            {
              "title": "Project Name & Summary",
              "type": "textarea",
              "help": ""
            },
            {
              "title": "Features",
              "type": "list",
              "help": ""
            },
            {
              "title": "Installation / Setup",
              "type": "textarea",
              "help": ""
            },
            {
              "title": "Usage",
              "type": "textarea",
              "help": ""
            },
            {
              "title": "Configuration",
              "type": "textarea",
              "help": ""
            },
            {
              "title": "Tech Stack",
              "type": "list",
              "help": ""
            },
            {
              "title": "Contributing",
              "type": "textarea",
              "help": ""
            },
            {
              "title": "License",
              "type": "text",
              "help": ""
            }
          ]
        },
        {
          "id": "technical-documentation",
          "name": "Technical Documentation",
          "description": "The system-level reference for engineers who need to understand or extend the product.",
          "metadata": [
            "Project Name",
            "Client / Customer",
            "Document Version",
            "Author",
            "Date",
            "Status"
          ],
          "sections": [
            {
              "title": "System Overview",
              "type": "textarea",
              "help": ""
            },
            {
              "title": "Architecture Summary",
              "type": "textarea",
              "help": ""
            },
            {
              "title": "Setup & Local Development",
              "type": "textarea",
              "help": ""
            },
            {
              "title": "Key Modules & Responsibilities",
              "type": "table",
              "help": "",
              "columns": [
                "Module",
                "Responsibility"
              ]
            },
            {
              "title": "Configuration Reference",
              "type": "textarea",
              "help": ""
            },
            {
              "title": "Known Limitations",
              "type": "textarea",
              "help": ""
            }
          ]
        }
      ]
    },
    {
      "id": "testing",
      "name": "Testing",
      "description": "Proving the software works as intended before it reaches anyone who depends on it.",
      "documents": [
        {
          "id": "test-plan",
          "name": "Test Plan",
          "description": "The strategy for how testing will be approached across the project.",
          "metadata": [
            "Project Name",
            "Client / Customer",
            "Document Version",
            "Author",
            "Date",
            "Status"
          ],
          "sections": [
            {
              "title": "Scope of Testing",
              "type": "textarea",
              "help": ""
            },
            {
              "title": "Testing Types Covered",
              "type": "list",
              "help": "Unit, integration, system, regression, UAT, etc."
            },
            {
              "title": "Test Environment",
              "type": "textarea",
              "help": ""
            },
            {
              "title": "Entry & Exit Criteria",
              "type": "textarea",
              "help": ""
            },
            {
              "title": "Roles & Responsibilities",
              "type": "table",
              "help": "",
              "columns": [
                "Name",
                "Role"
              ]
            },
            {
              "title": "Test Schedule",
              "type": "table",
              "help": "",
              "columns": [
                "Phase",
                "Start",
                "End"
              ]
            },
            {
              "title": "Tools Used",
              "type": "list",
              "help": ""
            },
            {
              "title": "Risks to the Test Effort",
              "type": "list",
              "help": ""
            }
          ]
        },
        {
          "id": "test-cases",
          "name": "Test Cases",
          "description": "The step-by-step scripts used to verify specific behavior.",
          "metadata": [
            "Project Name",
            "Client / Customer",
            "Document Version",
            "Author",
            "Date",
            "Status"
          ],
          "sections": [
            {
              "title": "Test Case Table",
              "type": "table",
              "help": "",
              "columns": [
                "ID",
                "Title",
                "Preconditions",
                "Steps",
                "Expected Result",
                "Priority"
              ]
            },
            {
              "title": "Test Data Requirements",
              "type": "textarea",
              "help": ""
            },
            {
              "title": "Traceability to Requirements",
              "type": "textarea",
              "help": ""
            }
          ]
        },
        {
          "id": "test-execution-report",
          "name": "Test Execution Report",
          "description": "What actually happened when the test cases were run.",
          "metadata": [
            "Project Name",
            "Client / Customer",
            "Document Version",
            "Author",
            "Date",
            "Status"
          ],
          "sections": [
            {
              "title": "Execution Summary",
              "type": "table",
              "help": "",
              "columns": [
                "Total",
                "Passed",
                "Failed",
                "Blocked",
                "Skipped"
              ]
            },
            {
              "title": "Detailed Results",
              "type": "table",
              "help": "",
              "columns": [
                "Test Case ID",
                "Result",
                "Notes"
              ]
            },
            {
              "title": "Environment Used",
              "type": "textarea",
              "help": ""
            },
            {
              "title": "Defects Raised",
              "type": "list",
              "help": ""
            },
            {
              "title": "Conclusion",
              "type": "textarea",
              "help": ""
            }
          ]
        },
        {
          "id": "defect-report",
          "name": "Defect Report",
          "description": "A single bug, documented precisely enough to reproduce and fix.",
          "metadata": [
            "Project Name",
            "Client / Customer",
            "Document Version",
            "Author",
            "Date",
            "Status"
          ],
          "sections": [
            {
              "title": "Defect Summary",
              "type": "textarea",
              "help": ""
            },
            {
              "title": "Steps to Reproduce",
              "type": "textarea",
              "help": ""
            },
            {
              "title": "Expected vs Actual Result",
              "type": "textarea",
              "help": ""
            },
            {
              "title": "Severity & Priority",
              "type": "text",
              "help": ""
            },
            {
              "title": "Environment",
              "type": "textarea",
              "help": ""
            },
            {
              "title": "Evidence",
              "type": "textarea",
              "help": "Screenshots, logs, or recordings referenced."
            },
            {
              "title": "Root Cause",
              "type": "textarea",
              "help": ""
            },
            {
              "title": "Resolution",
              "type": "textarea",
              "help": ""
            },
            {
              "title": "Status",
              "type": "text",
              "help": ""
            }
          ]
        },
        {
          "id": "regression-test-report",
          "name": "Regression Test Report",
          "description": "Confirms that new changes haven't broken existing behavior.",
          "metadata": [
            "Project Name",
            "Client / Customer",
            "Document Version",
            "Author",
            "Date",
            "Status"
          ],
          "sections": [
            {
              "title": "Scope of Regression",
              "type": "textarea",
              "help": ""
            },
            {
              "title": "Test Suite Executed",
              "type": "table",
              "help": "",
              "columns": [
                "Test Case ID",
                "Result"
              ]
            },
            {
              "title": "New Defects Found",
              "type": "list",
              "help": ""
            },
            {
              "title": "Areas of Risk Not Covered",
              "type": "textarea",
              "help": ""
            },
            {
              "title": "Conclusion",
              "type": "textarea",
              "help": ""
            }
          ]
        },
        {
          "id": "uat-plan",
          "name": "UAT Plan",
          "description": "How real end users will validate the system before go-live.",
          "metadata": [
            "Project Name",
            "Client / Customer",
            "Document Version",
            "Author",
            "Date",
            "Status"
          ],
          "sections": [
            {
              "title": "UAT Objectives",
              "type": "textarea",
              "help": ""
            },
            {
              "title": "Participants",
              "type": "table",
              "help": "",
              "columns": [
                "Name",
                "Role",
                "Area to Test"
              ]
            },
            {
              "title": "UAT Scenarios",
              "type": "table",
              "help": "",
              "columns": [
                "Scenario",
                "Steps",
                "Expected Outcome"
              ]
            },
            {
              "title": "Entry & Exit Criteria",
              "type": "textarea",
              "help": ""
            },
            {
              "title": "Schedule",
              "type": "textarea",
              "help": ""
            },
            {
              "title": "Sign-Off Requirements",
              "type": "textarea",
              "help": ""
            }
          ]
        },
        {
          "id": "uat-report",
          "name": "UAT Report",
          "description": "The outcome of user acceptance testing and the go/no-go it supports.",
          "metadata": [
            "Project Name",
            "Client / Customer",
            "Document Version",
            "Author",
            "Date",
            "Status"
          ],
          "sections": [
            {
              "title": "Summary of Results",
              "type": "textarea",
              "help": ""
            },
            {
              "title": "Scenario Results",
              "type": "table",
              "help": "",
              "columns": [
                "Scenario",
                "Result",
                "Notes"
              ]
            },
            {
              "title": "Issues Raised During UAT",
              "type": "list",
              "help": ""
            },
            {
              "title": "User Feedback",
              "type": "textarea",
              "help": ""
            },
            {
              "title": "Recommendation",
              "type": "textarea",
              "help": "Go, no-go, or go with conditions."
            },
            {
              "title": "Sign-Off",
              "type": "table",
              "help": "",
              "columns": [
                "Name",
                "Role",
                "Signature",
                "Date"
              ]
            }
          ]
        },
        {
          "id": "release-readiness-checklist",
          "name": "Release Readiness Checklist",
          "description": "The final gate before shipping: everything that must be true to release.",
          "metadata": [
            "Project Name",
            "Client / Customer",
            "Document Version",
            "Author",
            "Date",
            "Status"
          ],
          "sections": [
            {
              "title": "Functional Readiness",
              "type": "checklist",
              "help": ""
            },
            {
              "title": "Quality Readiness",
              "type": "checklist",
              "help": ""
            },
            {
              "title": "Security Readiness",
              "type": "checklist",
              "help": ""
            },
            {
              "title": "Operational Readiness",
              "type": "checklist",
              "help": ""
            },
            {
              "title": "Documentation Readiness",
              "type": "checklist",
              "help": ""
            },
            {
              "title": "Stakeholder Sign-Off",
              "type": "table",
              "help": "",
              "columns": [
                "Name",
                "Role",
                "Approved?"
              ]
            },
            {
              "title": "Go / No-Go Decision",
              "type": "textarea",
              "help": ""
            }
          ]
        },
        {
          "id": "test-summary-report",
          "name": "Test Summary Report",
          "description": "The rollup view of the entire testing effort for a release.",
          "metadata": [
            "Project Name",
            "Client / Customer",
            "Document Version",
            "Author",
            "Date",
            "Status"
          ],
          "sections": [
            {
              "title": "Overall Test Coverage",
              "type": "textarea",
              "help": ""
            },
            {
              "title": "Results by Test Type",
              "type": "table",
              "help": "",
              "columns": [
                "Test Type",
                "Pass Rate",
                "Notes"
              ]
            },
            {
              "title": "Open Defects at Release",
              "type": "table",
              "help": "",
              "columns": [
                "ID",
                "Severity",
                "Status"
              ]
            },
            {
              "title": "Quality Assessment",
              "type": "textarea",
              "help": ""
            },
            {
              "title": "Recommendation",
              "type": "textarea",
              "help": ""
            }
          ]
        }
      ]
    },
    {
      "id": "security",
      "name": "Security",
      "description": "Verifying the system protects data and resists misuse before and after launch.",
      "documents": [
        {
          "id": "security-requirements",
          "name": "Security Requirements",
          "description": "The security bar the system must meet, stated as testable requirements.",
          "metadata": [
            "Project Name",
            "Client / Customer",
            "Document Version",
            "Author",
            "Date",
            "Status"
          ],
          "sections": [
            {
              "title": "Regulatory / Compliance Drivers",
              "type": "list",
              "help": "e.g. GDPR, SOC 2, HIPAA, PCI-DSS."
            },
            {
              "title": "Data Classification",
              "type": "table",
              "help": "",
              "columns": [
                "Data Type",
                "Classification",
                "Handling Rule"
              ]
            },
            {
              "title": "Authentication Requirements",
              "type": "list",
              "help": ""
            },
            {
              "title": "Authorization Requirements",
              "type": "list",
              "help": ""
            },
            {
              "title": "Encryption Requirements",
              "type": "textarea",
              "help": "At rest and in transit."
            },
            {
              "title": "Logging & Monitoring Requirements",
              "type": "textarea",
              "help": ""
            },
            {
              "title": "Third-Party / Vendor Requirements",
              "type": "textarea",
              "help": ""
            }
          ]
        },
        {
          "id": "security-checklist",
          "name": "Security Checklist",
          "description": "A practical, pre-launch pass/fail list of security controls.",
          "metadata": [
            "Project Name",
            "Client / Customer",
            "Document Version",
            "Author",
            "Date",
            "Status"
          ],
          "sections": [
            {
              "title": "Application Security",
              "type": "checklist",
              "help": ""
            },
            {
              "title": "Infrastructure Security",
              "type": "checklist",
              "help": ""
            },
            {
              "title": "Data Protection",
              "type": "checklist",
              "help": ""
            },
            {
              "title": "Access Control",
              "type": "checklist",
              "help": ""
            },
            {
              "title": "Monitoring & Incident Readiness",
              "type": "checklist",
              "help": ""
            },
            {
              "title": "Sign-Off",
              "type": "table",
              "help": "",
              "columns": [
                "Name",
                "Role",
                "Date"
              ]
            }
          ]
        },
        {
          "id": "dependency-review",
          "name": "Dependency Review",
          "description": "Audits third-party packages for known vulnerabilities and license risk.",
          "metadata": [
            "Project Name",
            "Client / Customer",
            "Document Version",
            "Author",
            "Date",
            "Status"
          ],
          "sections": [
            {
              "title": "Dependency Inventory",
              "type": "table",
              "help": "",
              "columns": [
                "Package",
                "Version",
                "License",
                "Last Updated"
              ]
            },
            {
              "title": "Known Vulnerabilities Found",
              "type": "table",
              "help": "",
              "columns": [
                "Package",
                "CVE",
                "Severity",
                "Action Taken"
              ]
            },
            {
              "title": "License Risk Flags",
              "type": "textarea",
              "help": ""
            },
            {
              "title": "Outdated / Unmaintained Packages",
              "type": "list",
              "help": ""
            },
            {
              "title": "Remediation Plan",
              "type": "textarea",
              "help": ""
            }
          ]
        },
        {
          "id": "authentication-review",
          "name": "Authentication Review",
          "description": "Verifies the authentication implementation matches the specification and holds up under attack.",
          "metadata": [
            "Project Name",
            "Client / Customer",
            "Document Version",
            "Author",
            "Date",
            "Status"
          ],
          "sections": [
            {
              "title": "Scope of Review",
              "type": "textarea",
              "help": ""
            },
            {
              "title": "Findings",
              "type": "table",
              "help": "",
              "columns": [
                "Finding",
                "Severity",
                "Recommendation"
              ]
            },
            {
              "title": "Credential Storage Review",
              "type": "textarea",
              "help": ""
            },
            {
              "title": "Session Management Review",
              "type": "textarea",
              "help": ""
            },
            {
              "title": "Brute Force / Lockout Testing",
              "type": "textarea",
              "help": ""
            },
            {
              "title": "Conclusion",
              "type": "textarea",
              "help": ""
            }
          ]
        },
        {
          "id": "authorization-review",
          "name": "Authorization Review",
          "description": "Verifies permission boundaries and tenant isolation actually hold.",
          "metadata": [
            "Project Name",
            "Client / Customer",
            "Document Version",
            "Author",
            "Date",
            "Status"
          ],
          "sections": [
            {
              "title": "Scope of Review",
              "type": "textarea",
              "help": ""
            },
            {
              "title": "Privilege Escalation Testing",
              "type": "textarea",
              "help": ""
            },
            {
              "title": "Horizontal Access Testing",
              "type": "textarea",
              "help": "Can one user access another user's data?"
            },
            {
              "title": "Role Boundary Testing",
              "type": "textarea",
              "help": ""
            },
            {
              "title": "Findings",
              "type": "table",
              "help": "",
              "columns": [
                "Finding",
                "Severity",
                "Recommendation"
              ]
            },
            {
              "title": "Conclusion",
              "type": "textarea",
              "help": ""
            }
          ]
        },
        {
          "id": "secret-management-review",
          "name": "Secret Management Review",
          "description": "Confirms credentials, keys, and tokens are stored and rotated safely.",
          "metadata": [
            "Project Name",
            "Client / Customer",
            "Document Version",
            "Author",
            "Date",
            "Status"
          ],
          "sections": [
            {
              "title": "Secrets Inventory",
              "type": "table",
              "help": "",
              "columns": [
                "Secret",
                "Storage Location",
                "Rotation Policy"
              ]
            },
            {
              "title": "Storage Mechanism Review",
              "type": "textarea",
              "help": "Env vars, vault, secret manager, etc."
            },
            {
              "title": "Exposure Risk Findings",
              "type": "table",
              "help": "",
              "columns": [
                "Finding",
                "Severity",
                "Recommendation"
              ]
            },
            {
              "title": "Rotation & Revocation Process",
              "type": "textarea",
              "help": ""
            },
            {
              "title": "Conclusion",
              "type": "textarea",
              "help": ""
            }
          ]
        },
        {
          "id": "backup-review",
          "name": "Backup Review",
          "description": "Confirms backups exist, run on schedule, and can actually be restored.",
          "metadata": [
            "Project Name",
            "Client / Customer",
            "Document Version",
            "Author",
            "Date",
            "Status"
          ],
          "sections": [
            {
              "title": "Backup Scope",
              "type": "textarea",
              "help": "What is backed up and what is not."
            },
            {
              "title": "Backup Schedule & Retention",
              "type": "table",
              "help": "",
              "columns": [
                "Data Set",
                "Frequency",
                "Retention Period"
              ]
            },
            {
              "title": "Restore Test Results",
              "type": "table",
              "help": "",
              "columns": [
                "Date Tested",
                "Data Set",
                "Result",
                "Time to Restore"
              ]
            },
            {
              "title": "Gaps Identified",
              "type": "list",
              "help": ""
            },
            {
              "title": "Recommendations",
              "type": "textarea",
              "help": ""
            }
          ]
        },
        {
          "id": "security-findings",
          "name": "Security Findings",
          "description": "The consolidated list of security issues discovered, with severity and remediation status.",
          "metadata": [
            "Project Name",
            "Client / Customer",
            "Document Version",
            "Author",
            "Date",
            "Status"
          ],
          "sections": [
            {
              "title": "Findings Register",
              "type": "table",
              "help": "",
              "columns": [
                "ID",
                "Finding",
                "Severity",
                "Category",
                "Status",
                "Owner"
              ]
            },
            {
              "title": "Severity Definitions",
              "type": "textarea",
              "help": ""
            },
            {
              "title": "Remediation Timeline",
              "type": "table",
              "help": "",
              "columns": [
                "Finding ID",
                "Target Date",
                "Status"
              ]
            },
            {
              "title": "Residual Risk After Remediation",
              "type": "textarea",
              "help": ""
            }
          ]
        },
        {
          "id": "threat-model",
          "name": "Threat Model",
          "description": "Systematically identifies how the system could be attacked and where defenses sit.",
          "metadata": [
            "Project Name",
            "Client / Customer",
            "Document Version",
            "Author",
            "Date",
            "Status"
          ],
          "sections": [
            {
              "title": "System Overview / Trust Boundaries",
              "type": "textarea",
              "help": ""
            },
            {
              "title": "Assets Being Protected",
              "type": "list",
              "help": ""
            },
            {
              "title": "Threat Actors Considered",
              "type": "list",
              "help": ""
            },
            {
              "title": "Threats Identified (STRIDE or equivalent)",
              "type": "table",
              "help": "",
              "columns": [
                "Threat",
                "Category",
                "Likelihood",
                "Impact"
              ]
            },
            {
              "title": "Existing Mitigations",
              "type": "textarea",
              "help": ""
            },
            {
              "title": "Recommended Additional Controls",
              "type": "textarea",
              "help": ""
            },
            {
              "title": "Residual Risk",
              "type": "textarea",
              "help": ""
            }
          ]
        },
        {
          "id": "security-assessment",
          "name": "Security Assessment",
          "description": "The overall point-in-time evaluation of the system's security posture.",
          "metadata": [
            "Project Name",
            "Client / Customer",
            "Document Version",
            "Author",
            "Date",
            "Status"
          ],
          "sections": [
            {
              "title": "Assessment Scope",
              "type": "textarea",
              "help": ""
            },
            {
              "title": "Methodology",
              "type": "textarea",
              "help": ""
            },
            {
              "title": "Summary of Findings",
              "type": "table",
              "help": "",
              "columns": [
                "Category",
                "Findings Count",
                "Highest Severity"
              ]
            },
            {
              "title": "Detailed Findings",
              "type": "table",
              "help": "",
              "columns": [
                "Finding",
                "Severity",
                "Recommendation"
              ]
            },
            {
              "title": "Overall Risk Rating",
              "type": "textarea",
              "help": ""
            },
            {
              "title": "Recommendation",
              "type": "textarea",
              "help": ""
            }
          ]
        }
      ]
    },
    {
      "id": "deployment",
      "name": "Deployment",
      "description": "Getting the system live safely, and being ready when it doesn't go to plan.",
      "documents": [
        {
          "id": "deployment-plan",
          "name": "Deployment Plan",
          "description": "The step-by-step plan for releasing the system to an environment.",
          "metadata": [
            "Project Name",
            "Client / Customer",
            "Document Version",
            "Author",
            "Date",
            "Status"
          ],
          "sections": [
            {
              "title": "Deployment Objective",
              "type": "textarea",
              "help": ""
            },
            {
              "title": "Pre-Deployment Checklist",
              "type": "checklist",
              "help": ""
            },
            {
              "title": "Deployment Steps",
              "type": "table",
              "help": "",
              "columns": [
                "Step",
                "Action",
                "Owner"
              ]
            },
            {
              "title": "Rollback Trigger Criteria",
              "type": "textarea",
              "help": ""
            },
            {
              "title": "Communication Plan",
              "type": "textarea",
              "help": ""
            },
            {
              "title": "Post-Deployment Verification",
              "type": "checklist",
              "help": ""
            }
          ]
        },
        {
          "id": "go-live-checklist",
          "name": "Go-Live Checklist",
          "description": "The client-facing, minute-by-minute checklist for launch day itself.",
          "metadata": [
            "Project Name",
            "Client / Customer",
            "Document Version",
            "Author",
            "Date",
            "Status"
          ],
          "sections": [
            {
              "title": "Pre-Launch Verification",
              "type": "checklist",
              "help": ""
            },
            {
              "title": "Launch Day Steps",
              "type": "table",
              "help": "",
              "columns": [
                "Time",
                "Step",
                "Owner"
              ]
            },
            {
              "title": "Rollback Trigger",
              "type": "textarea",
              "help": ""
            },
            {
              "title": "Post-Launch Monitoring Window",
              "type": "textarea",
              "help": ""
            },
            {
              "title": "Client Notification Plan",
              "type": "textarea",
              "help": ""
            },
            {
              "title": "Sign-Off",
              "type": "table",
              "help": "",
              "columns": [
                "Name",
                "Role",
                "Signature",
                "Date"
              ]
            }
          ],
          "isNew": true
        },
        {
          "id": "production-deployment",
          "name": "Production Deployment",
          "description": "The record of an actual production deployment event.",
          "metadata": [
            "Project Name",
            "Client / Customer",
            "Document Version",
            "Author",
            "Date",
            "Status",
            "Release Version"
          ],
          "sections": [
            {
              "title": "Deployment Summary",
              "type": "textarea",
              "help": ""
            },
            {
              "title": "Version / Release Deployed",
              "type": "text",
              "help": ""
            },
            {
              "title": "Deployment Window",
              "type": "text",
              "help": ""
            },
            {
              "title": "Steps Executed",
              "type": "table",
              "help": "",
              "columns": [
                "Step",
                "Result",
                "Notes"
              ]
            },
            {
              "title": "Issues Encountered",
              "type": "textarea",
              "help": ""
            },
            {
              "title": "Verification Results",
              "type": "textarea",
              "help": ""
            },
            {
              "title": "Sign-Off",
              "type": "table",
              "help": "",
              "columns": [
                "Name",
                "Role",
                "Date"
              ]
            }
          ]
        },
        {
          "id": "deployment-documentation",
          "name": "Deployment Documentation",
          "description": "The reference for how deployments work in this system, generally.",
          "metadata": [
            "Project Name",
            "Client / Customer",
            "Document Version",
            "Author",
            "Date",
            "Status"
          ],
          "sections": [
            {
              "title": "Deployment Architecture",
              "type": "textarea",
              "help": ""
            },
            {
              "title": "Environments Overview",
              "type": "table",
              "help": "",
              "columns": [
                "Environment",
                "Purpose",
                "URL"
              ]
            },
            {
              "title": "Deployment Pipeline",
              "type": "textarea",
              "help": ""
            },
            {
              "title": "Required Access & Permissions",
              "type": "textarea",
              "help": ""
            },
            {
              "title": "Common Deployment Issues",
              "type": "textarea",
              "help": ""
            }
          ]
        },
        {
          "id": "environment-configuration",
          "name": "Environment Configuration",
          "description": "Documents every environment and the settings that differentiate them.",
          "metadata": [
            "Project Name",
            "Client / Customer",
            "Document Version",
            "Author",
            "Date",
            "Status"
          ],
          "sections": [
            {
              "title": "Environment List",
              "type": "table",
              "help": "",
              "columns": [
                "Environment",
                "Purpose",
                "Access Level"
              ]
            },
            {
              "title": "Configuration Variables",
              "type": "table",
              "help": "",
              "columns": [
                "Variable",
                "Purpose",
                "Environment-Specific?"
              ]
            },
            {
              "title": "Infrastructure Details",
              "type": "textarea",
              "help": ""
            },
            {
              "title": "Secrets Handling",
              "type": "textarea",
              "help": ""
            },
            {
              "title": "Environment Parity Notes",
              "type": "textarea",
              "help": "Known differences between environments."
            }
          ]
        },
        {
          "id": "backup-procedure",
          "name": "Backup Procedure",
          "description": "The operational steps for performing a backup.",
          "metadata": [
            "Project Name",
            "Client / Customer",
            "Document Version",
            "Author",
            "Date",
            "Status"
          ],
          "sections": [
            {
              "title": "What Is Backed Up",
              "type": "list",
              "help": ""
            },
            {
              "title": "Backup Frequency & Schedule",
              "type": "textarea",
              "help": ""
            },
            {
              "title": "Backup Steps",
              "type": "table",
              "help": "",
              "columns": [
                "Step",
                "Action"
              ]
            },
            {
              "title": "Storage Location & Retention",
              "type": "textarea",
              "help": ""
            },
            {
              "title": "Verification Steps",
              "type": "textarea",
              "help": ""
            },
            {
              "title": "Responsible Party",
              "type": "text",
              "help": ""
            }
          ]
        },
        {
          "id": "rollback-procedure",
          "name": "Rollback Procedure",
          "description": "The operational steps to safely undo a bad deployment.",
          "metadata": [
            "Project Name",
            "Client / Customer",
            "Document Version",
            "Author",
            "Date",
            "Status"
          ],
          "sections": [
            {
              "title": "Rollback Triggers",
              "type": "list",
              "help": "Conditions that justify a rollback."
            },
            {
              "title": "Rollback Steps",
              "type": "table",
              "help": "",
              "columns": [
                "Step",
                "Action",
                "Owner"
              ]
            },
            {
              "title": "Data Migration Rollback Considerations",
              "type": "textarea",
              "help": ""
            },
            {
              "title": "Verification After Rollback",
              "type": "textarea",
              "help": ""
            },
            {
              "title": "Communication Plan",
              "type": "textarea",
              "help": ""
            }
          ]
        },
        {
          "id": "monitoring-logging",
          "name": "Monitoring & Logging",
          "description": "How the system's health and behavior are observed in production.",
          "metadata": [
            "Project Name",
            "Client / Customer",
            "Document Version",
            "Author",
            "Date",
            "Status"
          ],
          "sections": [
            {
              "title": "Monitoring Tools Used",
              "type": "list",
              "help": ""
            },
            {
              "title": "Key Metrics Tracked",
              "type": "table",
              "help": "",
              "columns": [
                "Metric",
                "Threshold",
                "Alert Action"
              ]
            },
            {
              "title": "Log Sources & Retention",
              "type": "textarea",
              "help": ""
            },
            {
              "title": "Alerting Rules",
              "type": "table",
              "help": "",
              "columns": [
                "Condition",
                "Severity",
                "Notified Party"
              ]
            },
            {
              "title": "Dashboard References",
              "type": "textarea",
              "help": ""
            }
          ]
        },
        {
          "id": "disaster-recovery-plan",
          "name": "Disaster Recovery Plan",
          "description": "How the system and data are restored after a catastrophic failure.",
          "metadata": [
            "Project Name",
            "Client / Customer",
            "Document Version",
            "Author",
            "Date",
            "Status"
          ],
          "sections": [
            {
              "title": "Recovery Objectives",
              "type": "textarea",
              "help": "RTO and RPO targets."
            },
            {
              "title": "Disaster Scenarios Covered",
              "type": "list",
              "help": ""
            },
            {
              "title": "Recovery Steps by Scenario",
              "type": "table",
              "help": "",
              "columns": [
                "Scenario",
                "Steps",
                "Owner"
              ]
            },
            {
              "title": "Backup & Redundancy Architecture",
              "type": "textarea",
              "help": ""
            },
            {
              "title": "Communication & Escalation Plan",
              "type": "textarea",
              "help": ""
            },
            {
              "title": "Testing Schedule",
              "type": "textarea",
              "help": ""
            }
          ]
        },
        {
          "id": "incident-response-plan",
          "name": "Incident Response Plan",
          "description": "The playbook for responding to a production incident or security event.",
          "metadata": [
            "Project Name",
            "Client / Customer",
            "Document Version",
            "Author",
            "Date",
            "Status"
          ],
          "sections": [
            {
              "title": "Incident Severity Levels",
              "type": "table",
              "help": "",
              "columns": [
                "Level",
                "Definition",
                "Response Time"
              ]
            },
            {
              "title": "Response Team & Roles",
              "type": "table",
              "help": "",
              "columns": [
                "Role",
                "Name",
                "Responsibility"
              ]
            },
            {
              "title": "Incident Response Steps",
              "type": "table",
              "help": "",
              "columns": [
                "Phase",
                "Action"
              ]
            },
            {
              "title": "Communication Plan",
              "type": "textarea",
              "help": "Internal and external, including customer notification."
            },
            {
              "title": "Post-Incident Review Process",
              "type": "textarea",
              "help": ""
            }
          ]
        }
      ]
    },
    {
      "id": "training",
      "name": "Training",
      "description": "Handing the finished system to the people who will use and administer it day to day.",
      "documents": [
        {
          "id": "user-guide",
          "name": "User Guide",
          "description": "Instructions for the end user on how to use the product.",
          "metadata": [
            "Project Name",
            "Client / Customer",
            "Document Version",
            "Author",
            "Date",
            "Status"
          ],
          "sections": [
            {
              "title": "Getting Started",
              "type": "textarea",
              "help": ""
            },
            {
              "title": "Core Features Walkthrough",
              "type": "textarea",
              "help": ""
            },
            {
              "title": "Step-by-Step Tasks",
              "type": "table",
              "help": "",
              "columns": [
                "Task",
                "Steps"
              ]
            },
            {
              "title": "Troubleshooting",
              "type": "table",
              "help": "",
              "columns": [
                "Problem",
                "Solution"
              ]
            },
            {
              "title": "FAQ",
              "type": "table",
              "help": "",
              "columns": [
                "Question",
                "Answer"
              ]
            },
            {
              "title": "Support Contact",
              "type": "textarea",
              "help": ""
            }
          ]
        },
        {
          "id": "admin-manual",
          "name": "Admin Manual",
          "description": "Instructions for whoever administers the system: user management, settings, and backups.",
          "metadata": [
            "Project Name",
            "Client / Customer",
            "Document Version",
            "Author",
            "Date",
            "Status"
          ],
          "sections": [
            {
              "title": "Admin Access Overview",
              "type": "textarea",
              "help": ""
            },
            {
              "title": "Administration Tasks",
              "type": "table",
              "help": "",
              "columns": [
                "Task",
                "Steps",
                "Frequency"
              ]
            },
            {
              "title": "User Management",
              "type": "textarea",
              "help": "Creating, editing, removing users and roles."
            },
            {
              "title": "Backup & Restore Procedures",
              "type": "textarea",
              "help": ""
            },
            {
              "title": "System Settings Reference",
              "type": "table",
              "help": "",
              "columns": [
                "Setting",
                "Description",
                "Default"
              ]
            },
            {
              "title": "Troubleshooting for Admins",
              "type": "table",
              "help": "",
              "columns": [
                "Issue",
                "Resolution"
              ]
            },
            {
              "title": "Emergency Contacts",
              "type": "table",
              "help": "",
              "columns": [
                "Name",
                "Role",
                "Contact"
              ]
            }
          ],
          "isNew": true
        }
      ]
    },
    {
      "id": "maintenance",
      "name": "Maintenance",
      "description": "Keeping the system healthy, supported, and properly closed out after launch.",
      "documents": [
        {
          "id": "maintenance-agreement",
          "name": "Maintenance Agreement",
          "description": "The ongoing support contract: hours, response times, and what's included after launch.",
          "metadata": [
            "Project Name",
            "Client / Customer",
            "Document Version",
            "Author",
            "Date",
            "Status"
          ],
          "sections": [
            {
              "title": "Support Scope",
              "type": "textarea",
              "help": ""
            },
            {
              "title": "Support Hours & Channels",
              "type": "textarea",
              "help": ""
            },
            {
              "title": "Response & Resolution Times",
              "type": "table",
              "help": "",
              "columns": [
                "Severity",
                "Response Time",
                "Resolution Time"
              ]
            },
            {
              "title": "Included Services",
              "type": "list",
              "help": ""
            },
            {
              "title": "Excluded Services / Out of Scope",
              "type": "list",
              "help": ""
            },
            {
              "title": "Update & Patch Policy",
              "type": "textarea",
              "help": ""
            },
            {
              "title": "Pricing & Term",
              "type": "textarea",
              "help": ""
            },
            {
              "title": "Renewal & Termination",
              "type": "textarea",
              "help": ""
            },
            {
              "title": "Signatures",
              "type": "table",
              "help": "",
              "columns": [
                "Party",
                "Name",
                "Signature",
                "Date"
              ]
            }
          ],
          "isNew": true
        },
        {
          "id": "maintenance-plan",
          "name": "Maintenance Plan",
          "description": "How the system will be kept healthy after launch.",
          "metadata": [
            "Project Name",
            "Client / Customer",
            "Document Version",
            "Author",
            "Date",
            "Status"
          ],
          "sections": [
            {
              "title": "Maintenance Scope",
              "type": "textarea",
              "help": ""
            },
            {
              "title": "Routine Maintenance Tasks",
              "type": "table",
              "help": "",
              "columns": [
                "Task",
                "Frequency",
                "Owner"
              ]
            },
            {
              "title": "Update & Patch Policy",
              "type": "textarea",
              "help": ""
            },
            {
              "title": "Support Tiers & SLAs",
              "type": "table",
              "help": "",
              "columns": [
                "Tier",
                "Response Time",
                "Resolution Time"
              ]
            },
            {
              "title": "Cost of Ongoing Maintenance",
              "type": "textarea",
              "help": ""
            },
            {
              "title": "Escalation Process",
              "type": "textarea",
              "help": ""
            }
          ]
        },
        {
          "id": "release-notes",
          "name": "Release Notes",
          "description": "What changed in this version, written for the people affected by it.",
          "metadata": [
            "Project Name",
            "Client / Customer",
            "Document Version",
            "Author",
            "Date",
            "Status",
            "Release Version"
          ],
          "sections": [
            {
              "title": "Release Summary",
              "type": "textarea",
              "help": ""
            },
            {
              "title": "New Features",
              "type": "list",
              "help": ""
            },
            {
              "title": "Improvements",
              "type": "list",
              "help": ""
            },
            {
              "title": "Bug Fixes",
              "type": "list",
              "help": ""
            },
            {
              "title": "Breaking Changes",
              "type": "list",
              "help": ""
            },
            {
              "title": "Known Issues",
              "type": "list",
              "help": ""
            },
            {
              "title": "Upgrade Instructions",
              "type": "textarea",
              "help": ""
            }
          ]
        },
        {
          "id": "final-project-report",
          "name": "Final Project Report",
          "description": "The closing summary of what was delivered against what was planned.",
          "metadata": [
            "Project Name",
            "Client / Customer",
            "Document Version",
            "Author",
            "Date",
            "Status"
          ],
          "sections": [
            {
              "title": "Project Summary",
              "type": "textarea",
              "help": ""
            },
            {
              "title": "Objectives vs Outcomes",
              "type": "table",
              "help": "",
              "columns": [
                "Objective",
                "Outcome",
                "Met?"
              ]
            },
            {
              "title": "Deliverables Completed",
              "type": "list",
              "help": ""
            },
            {
              "title": "Budget & Timeline Performance",
              "type": "textarea",
              "help": ""
            },
            {
              "title": "Lessons Learned",
              "type": "textarea",
              "help": ""
            },
            {
              "title": "Outstanding Items",
              "type": "list",
              "help": ""
            },
            {
              "title": "Client Sign-Off",
              "type": "table",
              "help": "",
              "columns": [
                "Name",
                "Role",
                "Signature",
                "Date"
              ]
            }
          ]
        },
        {
          "id": "project-handoff-document",
          "name": "Project Handoff Document",
          "description": "Everything the receiving team needs to take ownership of the system.",
          "metadata": [
            "Project Name",
            "Client / Customer",
            "Document Version",
            "Author",
            "Date",
            "Status"
          ],
          "sections": [
            {
              "title": "System Summary",
              "type": "textarea",
              "help": ""
            },
            {
              "title": "Access & Credentials Checklist",
              "type": "checklist",
              "help": ""
            },
            {
              "title": "Key Contacts",
              "type": "table",
              "help": "",
              "columns": [
                "Name",
                "Role",
                "Contact Info"
              ]
            },
            {
              "title": "Documentation Index",
              "type": "list",
              "help": "Links to all other documents produced."
            },
            {
              "title": "Outstanding Issues / Known Bugs",
              "type": "list",
              "help": ""
            },
            {
              "title": "Recommended Next Steps",
              "type": "textarea",
              "help": ""
            },
            {
              "title": "Support Transition Plan",
              "type": "textarea",
              "help": ""
            },
            {
              "title": "Sign-Off",
              "type": "table",
              "help": "",
              "columns": [
                "Name",
                "Role",
                "Signature",
                "Date"
              ]
            }
          ]
        },
        {
          "id": "software-license",
          "name": "Software License",
          "description": "The terms under which the software may be used, copied, or distributed.",
          "metadata": [
            "Project Name",
            "Client / Customer",
            "Document Version",
            "Author",
            "Date",
            "Status"
          ],
          "sections": [
            {
              "title": "License Type",
              "type": "text",
              "help": "e.g. MIT, proprietary, commercial."
            },
            {
              "title": "Grant of License",
              "type": "textarea",
              "help": ""
            },
            {
              "title": "Restrictions",
              "type": "list",
              "help": ""
            },
            {
              "title": "Ownership",
              "type": "textarea",
              "help": ""
            },
            {
              "title": "Warranty Disclaimer",
              "type": "textarea",
              "help": ""
            },
            {
              "title": "Limitation of Liability",
              "type": "textarea",
              "help": ""
            },
            {
              "title": "Termination Conditions",
              "type": "textarea",
              "help": ""
            }
          ]
        },
        {
          "id": "portfolio-entry",
          "name": "Portfolio Entry",
          "description": "The public-facing writeup of the project used for marketing or portfolio purposes.",
          "metadata": [
            "Project Name",
            "Client / Customer",
            "Document Version",
            "Author",
            "Date",
            "Status"
          ],
          "sections": [
            {
              "title": "Project Summary",
              "type": "textarea",
              "help": ""
            },
            {
              "title": "Problem Solved",
              "type": "textarea",
              "help": ""
            },
            {
              "title": "Role & Contribution",
              "type": "textarea",
              "help": ""
            },
            {
              "title": "Tech Stack",
              "type": "list",
              "help": ""
            },
            {
              "title": "Key Outcomes / Results",
              "type": "textarea",
              "help": ""
            },
            {
              "title": "Screenshots / Media References",
              "type": "list",
              "help": ""
            },
            {
              "title": "Client Testimonial",
              "type": "textarea",
              "help": ""
            }
          ]
        }
      ]
    }
  ]
};
const STORAGE_KEY = "specstack_projects_v1";
const STATUSES = ["not-started","draft","in-review","approved"];
const STATUS_LABEL = {"not-started":"Not Started","draft":"Draft","in-review":"In Review","approved":"Approved"};

let state = { projects: {}, currentProjectId: null, currentDocId: null, openCategory: null };
let saveTimer = null;

/* ---------------- persistence ---------------- */
function loadState(){
  try{
    const raw = localStorage.getItem(STORAGE_KEY);
    if(raw){
      const parsed = JSON.parse(raw);
      state.projects = parsed.projects || {};
      state.currentProjectId = parsed.currentProjectId || null;
    }
  }catch(e){ console.error("Load failed", e); }
  if(!state.currentProjectId || !state.projects[state.currentProjectId]){
    const ids = Object.keys(state.projects);
    if(ids.length){ state.currentProjectId = ids[0]; }
    else { createProject("Sample Project", "", true); }
  }
}
function persist(){
  try{
    localStorage.setItem(STORAGE_KEY, JSON.stringify({projects: state.projects, currentProjectId: state.currentProjectId}));
    flashSaved();
  }catch(e){ console.error("Save failed", e); }
}
function flashSaved(){
  const el = document.getElementById("saveIndicator");
  if(!el) return;
  el.textContent = "Saved";
  el.classList.add("saved");
  clearTimeout(saveTimer);
  saveTimer = setTimeout(()=>{ el.textContent = "All changes saved locally"; }, 1400);
}

function newId(prefix){ return prefix + "_" + Math.random().toString(36).slice(2,9) + Date.now().toString(36).slice(-4); }

function createProject(name, client, silent){
  const id = newId("proj");
  state.projects[id] = { id, name: name || "Untitled Project", client: client || "", created: new Date().toISOString(), documents: {} };
  state.currentProjectId = id;
  if(!silent) persist();
  return id;
}

function currentProject(){ return state.projects[state.currentProjectId]; }

function getDocRecord(docId){
  const p = currentProject();
  if(!p) return null;
  if(!p.documents[docId]){
    p.documents[docId] = { status: "not-started", metadata: {}, sections: {} };
  }
  return p.documents[docId];
}

function findDocSchema(docId){
  for(const cat of CATALOG.categories){
    for(const d of cat.documents){
      if(d.id === docId) return {doc: d, category: cat};
    }
  }
  return null;
}

/* ---------------- stats ---------------- */
function categoryStats(cat){
  const p = currentProject();
  let started = 0, approved = 0;
  cat.documents.forEach(d=>{
    const rec = p.documents[d.id];
    if(rec && rec.status !== "not-started") started++;
    if(rec && rec.status === "approved") approved++;
  });
  return { total: cat.documents.length, started, approved };
}
function overallStats(){
  const p = currentProject();
  let total=0, started=0, approved=0, inReview=0, draft=0;
  CATALOG.categories.forEach(cat=>{
    cat.documents.forEach(d=>{
      total++;
      const rec = p.documents[d.id];
      if(rec){
        if(rec.status === "approved") approved++;
        else if(rec.status === "in-review") inReview++;
        else if(rec.status === "draft") draft++;
      }
    });
  });
  started = approved + inReview + draft;
  return {total, started, approved, inReview, draft};
}

/* ---------------- rendering: shell ---------------- */
function renderProjectSelect(){
  const sel = document.getElementById("projectSelect");
  sel.innerHTML = "";
  Object.values(state.projects).sort((a,b)=> a.name.localeCompare(b.name)).forEach(p=>{
    const opt = document.createElement("option");
    opt.value = p.id; opt.textContent = p.name;
    if(p.id === state.currentProjectId) opt.selected = true;
    sel.appendChild(opt);
  });
}

function renderSidebar(){
  const sb = document.getElementById("sidebar");
  sb.innerHTML = "";

  const dashNav = document.createElement("div");
  dashNav.className = "nav-dashboard" + (!state.currentDocId ? " active" : "");
  dashNav.innerHTML = `<span class="dot"></span> Project Intelligence`;
  dashNav.onclick = ()=>{ state.currentDocId = null; render(); };
  sb.appendChild(dashNav);

  const label = document.createElement("div");
  label.className = "sidebar-section-label";
  label.textContent = "Document Library — " + CATALOG.categories.reduce((n,c)=>n+c.documents.length,0) + " templates";
  sb.appendChild(label);

  CATALOG.categories.forEach((cat, ci)=>{
    const block = document.createElement("div");
    block.className = "category-block" + (state.openCategory === cat.id ? " open" : "");

    const stats = categoryStats(cat);
    const pct = stats.total ? Math.round((stats.approved / stats.total) * 100) : 0;

    const head = document.createElement("div");
    head.className = "category-head";
    head.innerHTML = `
      <span class="chev">▸</span>
      <span class="idx">${String(ci+1).padStart(2,"0")}</span>
      <span class="cname">${cat.name}</span>
      <span class="ccount">${stats.started}/${stats.total}</span>
    `;
    head.onclick = ()=>{ state.openCategory = (state.openCategory === cat.id ? null : cat.id); render(); };
    block.appendChild(head);

    const prog = document.createElement("div");
    prog.className = "category-progress";
    prog.innerHTML = `<i style="width:${pct}%"></i>`;
    block.appendChild(prog);

    const list = document.createElement("div");
    list.className = "doc-list";
    cat.documents.forEach(d=>{
      const rec = currentProject().documents[d.id];
      const status = rec ? rec.status : "not-started";
      const item = document.createElement("div");
      item.className = "doc-item" + (state.currentDocId === d.id ? " active" : "");
      item.innerHTML = `<span class="status-dot status-${status}"></span><span class="dname">${d.name}</span>${d.isNew ? '<span class="new-badge">NEW</span>' : ''}`;
      item.onclick = ()=>{ state.currentDocId = d.id; render(); };
      list.appendChild(item);
    });
    block.appendChild(list);

    sb.appendChild(block);
  });
}

function render(){
  renderProjectSelect();
  renderSidebar();
  const main = document.getElementById("main");
  main.innerHTML = "";
  if(state.currentDocId){
    main.appendChild(renderDocumentEditor(state.currentDocId));
  } else {
    main.appendChild(renderDashboard());
  }
}

/* ---------------- dashboard ---------------- */
function renderDashboard(){
  const p = currentProject();
  const stats = overallStats();
  const wrap = document.createElement("div");
  wrap.className = "view";

  wrap.innerHTML = `
    <div class="dash-head">
      <div class="eyebrow">Project Intelligence — ${escapeHtml(p.name)}</div>
      <h1>${escapeHtml(p.name)}</h1>
      <p>${p.client ? escapeHtml(p.client) + " — " : ""}Tracking ${stats.total} document types across the full SDLC catalog, from business analysis through professional handoff.</p>
    </div>

    <div class="stat-row">
      <div class="stat-card accent">
        <div class="stat-label">Catalog Coverage</div>
        <div class="stat-value">${stats.started}<small> / ${stats.total}</small></div>
      </div>
      <div class="stat-card">
        <div class="stat-label">Approved</div>
        <div class="stat-value" style="color:var(--green)">${stats.approved}</div>
      </div>
      <div class="stat-card">
        <div class="stat-label">In Review</div>
        <div class="stat-value" style="color:var(--violet)">${stats.inReview}</div>
      </div>
      <div class="stat-card">
        <div class="stat-label">Draft</div>
        <div class="stat-value" style="color:var(--amber)">${stats.draft}</div>
      </div>
    </div>

    <div class="section-title">Phase Completion</div>
    <div class="phase-grid" id="phaseGrid"></div>

    <div class="section-title">Recently Touched</div>
    <div id="recentList"></div>
  `;

  const phaseGrid = wrap.querySelector("#phaseGrid");
  CATALOG.categories.forEach(cat=>{
    const st = categoryStats(cat);
    const pct = st.total ? Math.round((st.approved/st.total)*100) : 0;
    const row = document.createElement("div");
    row.className = "phase-row";
    row.innerHTML = `
      <div class="phase-name">${cat.name}</div>
      <div class="phase-bar"><i style="width:${pct}%"></i></div>
      <div class="phase-meta">${st.approved} approved · ${st.started}/${st.total} started</div>
    `;
    row.onclick = ()=>{ state.openCategory = cat.id; state.currentDocId = null; render(); };
    phaseGrid.appendChild(row);
  });

  const recentList = wrap.querySelector("#recentList");
  const touched = [];
  CATALOG.categories.forEach(cat=>{
    cat.documents.forEach(d=>{
      const rec = p.documents[d.id];
      if(rec && rec.status !== "not-started" && rec.updated){
        touched.push({doc:d, cat, rec});
      }
    });
  });
  touched.sort((a,b)=> new Date(b.rec.updated) - new Date(a.rec.updated));
  if(touched.length === 0){
    const hint = document.createElement("div");
    hint.className = "empty-hint";
    hint.textContent = "No documents started yet. Pick one from the library on the left to begin drafting.";
    recentList.appendChild(hint);
  } else {
    touched.slice(0,8).forEach(t=>{
      const row = document.createElement("div");
      row.className = "phase-row";
      row.innerHTML = `
        <div class="phase-name">${t.doc.name}</div>
        <div style="color:var(--text-faint);font-family:var(--font-mono);font-size:11px;">${t.cat.name}</div>
        <div class="phase-meta"><span class="stamp status-${t.rec.status}" style="transform:none;padding:3px 7px;">${STATUS_LABEL[t.rec.status]}</span></div>
      `;
      row.onclick = ()=>{ state.currentDocId = t.doc.id; render(); };
      recentList.appendChild(row);
    });
  }

  return wrap;
}

/* ---------------- document editor ---------------- */
function renderDocumentEditor(docId){
  const found = findDocSchema(docId);
  if(!found) return document.createElement("div");
  const { doc, category } = found;
  const rec = getDocRecord(docId);

  const wrap = document.createElement("div");
  wrap.className = "view";

  wrap.innerHTML = `
    <div class="doc-header">
      <div class="doc-eyebrow">${category.name}</div>
      <div class="doc-title-row">
        <div>
          <h1 class="doc-title">${doc.name} ${doc.isNew ? '<span class="new-badge" style="vertical-align:middle;">NEW</span>' : ''}</h1>
          <p class="doc-desc">${doc.description}</p>
        </div>
        <div class="doc-actions">
          <select class="status-select" id="statusSelect"></select>
          <button class="btn btn-sm" id="exportBtn">Export .md</button>
          <button class="btn btn-sm" id="printBtn">Print</button>
        </div>
      </div>
    </div>
  `;

  // status select
  const statusSelect = wrap.querySelector("#statusSelect");
  STATUSES.forEach(s=>{
    const opt = document.createElement("option");
    opt.value = s; opt.textContent = STATUS_LABEL[s];
    if(rec.status === s) opt.selected = true;
    statusSelect.appendChild(opt);
  });
  statusSelect.onchange = ()=>{
    rec.status = statusSelect.value;
    rec.updated = new Date().toISOString();
    persist();
    renderSidebar();
  };

  wrap.querySelector("#exportBtn").onclick = ()=> exportMarkdown(doc, category, rec);
  wrap.querySelector("#printBtn").onclick = ()=> window.print();

  // title block
  const tb = document.createElement("div");
  tb.className = "titleblock blueprint-frame";
  tb.innerHTML = `<span class="bl-tr"></span><span class="bl-br"></span>`;
  const p = currentProject();
  if(!rec.metadata["Project Name"]) rec.metadata["Project Name"] = p.name;
  if(!rec.metadata["Client / Customer"] && p.client) rec.metadata["Client / Customer"] = p.client;
  doc.metadata.forEach(field=>{
    const cell = document.createElement("div");
    cell.className = "tb-cell";
    const input = document.createElement("input");
    input.type = "text";
    input.placeholder = field;
    input.value = rec.metadata[field] || "";
    input.oninput = ()=>{ rec.metadata[field] = input.value; rec.updated = new Date().toISOString(); debouncedPersist(); };
    cell.innerHTML = `<div class="tb-label">${field}</div>`;
    cell.appendChild(input);
    tb.appendChild(cell);
  });
  wrap.appendChild(tb);

  // sections
  const sectionsWrap = document.createElement("div");
  sectionsWrap.className = "doc-sections";
  doc.sections.forEach((sec, idx)=>{
    if(!rec.sections[idx]) rec.sections[idx] = defaultSectionValue(sec);
    const secEl = document.createElement("div");
    secEl.className = "doc-section";
    secEl.innerHTML = `
      <div class="doc-section-head">
        <span class="doc-section-num">${String(idx+1).padStart(2,"0")}</span>
        <span class="doc-section-title">${sec.title}</span>
      </div>
      ${sec.help ? `<p class="doc-section-help">${sec.help}</p>` : ""}
    `;
    secEl.appendChild(renderField(sec, rec, idx));
    sectionsWrap.appendChild(secEl);
  });
  wrap.appendChild(sectionsWrap);

  const footer = document.createElement("div");
  footer.className = "footer-save-row";
  footer.innerHTML = `<span class="save-indicator" id="saveIndicator">All changes saved locally</span>`;
  wrap.appendChild(footer);

  return wrap;
}

function defaultSectionValue(sec){
  if(sec.type === "table") return { rows: [] };
  if(sec.type === "list") return { items: [""] };
  if(sec.type === "checklist") return { items: [{text:"", done:false}] };
  return { text: "" };
}

let persistTimer = null;
function debouncedPersist(){
  clearTimeout(persistTimer);
  persistTimer = setTimeout(persist, 400);
}

function renderField(sec, rec, idx){
  const value = rec.sections[idx];
  const container = document.createElement("div");

  if(sec.type === "textarea"){
    const ta = document.createElement("textarea");
    ta.className = "field-textarea";
    ta.placeholder = "Write " + sec.title.toLowerCase() + "...";
    ta.value = value.text || "";
    ta.oninput = ()=>{ value.text = ta.value; rec.updated = new Date().toISOString(); debouncedPersist(); };
    container.appendChild(ta);
    return container;
  }

  if(sec.type === "text"){
    const inp = document.createElement("input");
    inp.className = "field-text";
    inp.type = "text";
    inp.value = value.text || "";
    inp.oninput = ()=>{ value.text = inp.value; rec.updated = new Date().toISOString(); debouncedPersist(); };
    container.appendChild(inp);
    return container;
  }

  if(sec.type === "list"){
    const listEl = document.createElement("div");
    listEl.className = "dyn-list";
    function draw(){
      listEl.innerHTML = "";
      value.items.forEach((item, i)=>{
        const row = document.createElement("div");
        row.className = "dyn-row";
        row.innerHTML = `<span class="bullet">—</span>`;
        const inp = document.createElement("input");
        inp.className = "field-text";
        inp.type = "text";
        inp.value = item;
        inp.placeholder = "Item " + (i+1);
        inp.oninput = ()=>{ value.items[i] = inp.value; rec.updated = new Date().toISOString(); debouncedPersist(); };
        row.appendChild(inp);
        const rm = document.createElement("button");
        rm.className = "dyn-remove"; rm.textContent = "×";
        rm.onclick = ()=>{ value.items.splice(i,1); if(value.items.length===0) value.items.push(""); rec.updated = new Date().toISOString(); debouncedPersist(); draw(); };
        row.appendChild(rm);
        listEl.appendChild(row);
      });
      const add = document.createElement("button");
      add.className = "dyn-add"; add.textContent = "+ Add item";
      add.onclick = ()=>{ value.items.push(""); rec.updated = new Date().toISOString(); debouncedPersist(); draw(); };
      listEl.appendChild(add);
    }
    draw();
    container.appendChild(listEl);
    return container;
  }

  if(sec.type === "checklist"){
    const listEl = document.createElement("div");
    listEl.className = "dyn-list";
    function draw(){
      listEl.innerHTML = "";
      value.items.forEach((item, i)=>{
        const row = document.createElement("div");
        row.className = "dyn-row check-row";
        const cb = document.createElement("input");
        cb.type = "checkbox"; cb.checked = !!item.done;
        cb.onchange = ()=>{ item.done = cb.checked; rec.updated = new Date().toISOString(); debouncedPersist(); };
        row.appendChild(cb);
        const inp = document.createElement("input");
        inp.className = "field-text";
        inp.type = "text";
        inp.value = item.text;
        inp.placeholder = "Checklist item " + (i+1);
        inp.oninput = ()=>{ item.text = inp.value; rec.updated = new Date().toISOString(); debouncedPersist(); };
        row.appendChild(inp);
        const rm = document.createElement("button");
        rm.className = "dyn-remove"; rm.textContent = "×";
        rm.onclick = ()=>{ value.items.splice(i,1); if(value.items.length===0) value.items.push({text:"",done:false}); rec.updated = new Date().toISOString(); debouncedPersist(); draw(); };
        row.appendChild(rm);
        listEl.appendChild(row);
      });
      const add = document.createElement("button");
      add.className = "dyn-add"; add.textContent = "+ Add item";
      add.onclick = ()=>{ value.items.push({text:"",done:false}); rec.updated = new Date().toISOString(); debouncedPersist(); draw(); };
      listEl.appendChild(add);
    }
    draw();
    container.appendChild(listEl);
    return container;
  }

  if(sec.type === "table"){
    const cols = sec.columns || ["Item"];
    if(!value.rows) value.rows = [];
    const tableEl = document.createElement("table");
    tableEl.className = "field-table";
    function draw(){
      tableEl.innerHTML = "";
      const thead = document.createElement("thead");
      const trh = document.createElement("tr");
      cols.forEach(c=>{ const th = document.createElement("th"); th.textContent = c; trh.appendChild(th); });
      const thRm = document.createElement("th"); thRm.style.width="30px"; trh.appendChild(thRm);
      thead.appendChild(trh);
      tableEl.appendChild(thead);
      const tbody = document.createElement("tbody");
      value.rows.forEach((row, ri)=>{
        const tr = document.createElement("tr");
        cols.forEach(c=>{
          const td = document.createElement("td");
          const inp = document.createElement("input");
          inp.type = "text";
          inp.value = row[c] || "";
          inp.oninput = ()=>{ row[c] = inp.value; rec.updated = new Date().toISOString(); debouncedPersist(); };
          td.appendChild(inp);
          tr.appendChild(td);
        });
        const tdRm = document.createElement("td");
        tdRm.className = "remove-cell";
        const rm = document.createElement("button");
        rm.className = "dyn-remove"; rm.textContent = "×";
        rm.onclick = ()=>{ value.rows.splice(ri,1); rec.updated = new Date().toISOString(); debouncedPersist(); draw(); };
        tdRm.appendChild(rm);
        tr.appendChild(tdRm);
        tbody.appendChild(tr);
      });
      tableEl.appendChild(tbody);
    }
    draw();
    container.appendChild(tableEl);
    const add = document.createElement("button");
    add.className = "dyn-add"; add.textContent = "+ Add row";
    add.style.marginTop = "10px";
    add.onclick = ()=>{
      const row = {}; cols.forEach(c=> row[c] = "");
      value.rows.push(row); rec.updated = new Date().toISOString(); debouncedPersist(); draw();
    };
    container.appendChild(add);
    return container;
  }

  return container;
}

/* ---------------- export ---------------- */
async function exportMarkdown(doc, category, rec){
  let md = `# ${doc.name}\n\n`;
  md += `*${category.name} — ${doc.description}*\n\n`;
  md += `| Field | Value |\n|---|---|\n`;
  doc.metadata.forEach(f=>{
    md += `| ${f} | ${(rec.metadata[f]||"").replace(/\|/g,"/")} |\n`;
  });
  md += `| Status | ${STATUS_LABEL[rec.status]} |\n\n`;
  md += `---\n\n`;

  doc.sections.forEach((sec, idx)=>{
    const value = rec.sections[idx] || defaultSectionValue(sec);
    md += `## ${idx+1}. ${sec.title}\n\n`;
    if(sec.type === "textarea" || sec.type === "text"){
      md += (value.text || "*Not yet documented.*") + "\n\n";
    } else if(sec.type === "list"){
      const items = (value.items||[]).filter(i=>i && i.trim());
      md += items.length ? items.map(i=>`- ${i}`).join("\n") + "\n\n" : "*Not yet documented.*\n\n";
    } else if(sec.type === "checklist"){
      const items = (value.items||[]).filter(i=>i.text && i.text.trim());
      md += items.length ? items.map(i=>`- [${i.done?"x":" "}] ${i.text}`).join("\n") + "\n\n" : "*Not yet documented.*\n\n";
    } else if(sec.type === "table"){
      const cols = sec.columns || [];
      const rows = value.rows || [];
      if(rows.length === 0){
        md += "*Not yet documented.*\n\n";
      } else {
        md += `| ${cols.join(" | ")} |\n`;
        md += `| ${cols.map(()=> "---").join(" | ")} |\n`;
        rows.forEach(r=>{
          md += `| ${cols.map(c=> (r[c]||"").replace(/\|/g,"/")).join(" | ")} |\n`;
        });
        md += "\n";
      }
    }
  });

  const filename = doc.name.toLowerCase().replace(/[^a-z0-9]+/g,"-") + ".md";

  // Prefer the platform downloads capability when running as a published artifact.
  if(window.claude && typeof window.claude.use === "function"){
    try{
      const downloads = await window.claude.use("downloads");
      if(downloads){
        try{
          await downloads.save({ filename, data: md });
        }catch(err){
          if(err && err.code !== "declined"){
            alert("Couldn't save the file: " + (err.message || err.code || "unknown error"));
          }
        }
        return;
      }
    }catch(err){
      // fall through to local download below
    }
  }

  // Fallback for a plain local HTML file (no claude runtime present).
  const blob = new Blob([md], {type:"text/markdown"});
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  document.body.appendChild(a); a.click(); document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

function escapeHtml(s){
  return String(s).replace(/[&<>"']/g, m=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[m]));
}

/* ---------------- project controls ---------------- */
document.getElementById("projectSelect").addEventListener("change", (e)=>{
  state.currentProjectId = e.target.value;
  state.currentDocId = null;
  persist();
  render();
});
document.getElementById("newProjectBtn").onclick = ()=>{
  document.getElementById("newProjectName").value = "";
  document.getElementById("newProjectClient").value = "";
  document.getElementById("newProjectModal").classList.add("open");
  document.getElementById("newProjectName").focus();
};
document.getElementById("cancelNewProject").onclick = ()=> document.getElementById("newProjectModal").classList.remove("open");
document.getElementById("confirmNewProject").onclick = ()=>{
  const name = document.getElementById("newProjectName").value.trim() || "Untitled Project";
  const client = document.getElementById("newProjectClient").value.trim();
  createProject(name, client);
  state.currentDocId = null;
  document.getElementById("newProjectModal").classList.remove("open");
  render();
};
document.getElementById("deleteProjectBtn").onclick = ()=>{
  const ids = Object.keys(state.projects);
  if(ids.length <= 1){ alert("At least one project must remain."); return; }
  const p = currentProject();
  if(!confirm(`Delete "${p.name}" and all its document data? This cannot be undone.`)) return;
  delete state.projects[p.id];
  state.currentProjectId = Object.keys(state.projects)[0];
  state.currentDocId = null;
  persist();
  render();
};

/* ---------------- init ---------------- */
loadState();
render();
