# 100-commit development map

Each item is intentionally scoped to be reviewable as one commit.

## Foundation — 01–10

1. Add TypeScript configuration and strict compiler rules.
2. Convert application router to TypeScript.
3. Convert public layout components to TypeScript.
4. Convert public pages to TypeScript.
5. Convert demo components and views to TypeScript.
6. Define domain types for patient, observation and node.
7. Add ESLint with React and accessibility rules.
8. Add Prettier and repository formatting policy.
9. Add Vitest and shared test setup.
10. Add CI workflow for lint, test and build.

## Design system — 11–20

11. Document color roles and contrast requirements.
12. Extract spacing and layout tokens.
13. Add typography scale primitives.
14. Add focus-visible treatment for all controls.
15. Add accessible dialog primitive.
16. Add accessible tabs primitive.
17. Add toast and notification region.
18. Add skeleton and empty-state components.
19. Add light and field themes.
20. Create a component-gallery development route.

## Public product site — 21–30

21. Add company and team page.
22. Add contact and meeting request form.
23. Add product resources page.
24. Add individual Node One product route.
25. Add Relay product route.
26. Add Field Tab product route.
27. Add downloadable system brief.
28. Add research update article template.
29. Add metadata and social preview images per route.
30. Add sitemap, robots policy and structured data.

## Domain model — 31–40

31. Introduce session reducer.
32. Model timestamped observations.
33. Model patient-to-node assignments.
34. Model signal-quality state.
35. Model acknowledgement events.
36. Model ruleset revisions.
37. Add deterministic patient selectors.
38. Add acuity ordering selector.
39. Add stale-data selector.
40. Add session summary selector.

## Simulation engine — 41–50

41. Add deterministic seeded clock.
42. Move telemetry patterns into scenario fixtures.
43. Add scenario manifest format.
44. Add mass-casualty baseline scenario.
45. Add declining-perfusion scenario.
46. Add node-disconnection scenario.
47. Add low-signal-quality scenario.
48. Add packet-loss scenario.
49. Add playback speed controls.
50. Add scenario timeline scrubber.

## Triage workflow — 51–60

51. Add new-patient enrollment flow.
52. Add node pairing flow.
53. Add temporary identifier editor.
54. Add baseline observation step.
55. Add patient status notes.
56. Add alert acknowledgement reason.
57. Add manual reassessment timer.
58. Add patient handoff state.
59. Add discharge/removal confirmation.
60. Add keyboard-first triage navigation.

## Network and hardware — 61–70

61. Add relay detail drawer.
62. Add node detail drawer.
63. Add battery-warning states.
64. Add node firmware metadata.
65. Add radio-link quality history.
66. Add store-and-forward event state.
67. Add topology degradation animation.
68. Add replacement-node workflow.
69. Add charging-case inventory screen.
70. Add hardware diagnostic export.

## Records and export — 71–80

71. Add event-log filters.
72. Add event detail drawer.
73. Add operator identity in events.
74. Add signed session export model.
75. Add local JSON export.
76. Add printable session summary.
77. Add patient-specific timeline export.
78. Add export verification view.
79. Add retention-policy controls.
80. Add destructive purge confirmation.

## Quality and validation — 81–90

81. Unit-test priority ordering.
82. Unit-test telemetry bounds.
83. Unit-test stale-data behavior.
84. Unit-test scenario playback.
85. Interaction-test patient drawer.
86. Interaction-test alert acknowledgement.
87. Accessibility-test every public route.
88. Accessibility-test every demo route.
89. Add desktop visual regression suite.
90. Add mobile visual regression suite.

## Delivery and program maturity — 91–100

91. Add environment configuration schema.
92. Add release version display from package metadata.
93. Add changelog automation.
94. Add preview deployment workflow.
95. Add bundle-size budget.
96. Add performance measurement baseline.
97. Add offline application shell.
98. Add local persistence migration strategy.
99. Add threat-model document.
100. Publish public demonstrator release candidate.
