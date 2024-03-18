<template>
  <div class="flex w-11/12">
    <img
      src="~assets/images/weos-circle.png"
      alt="avatar"
      class="inline-block h-10 w-10 rounded-full"
    />
    <div class="mr-4" />
    <div
      class="relative max-w-xl bg-secondary rounded-xl rounded-tl-none bg-muted-1 py-3"
    >
      <div class="px-4">
        <span class="text-md text-white">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit.
        </span>
      </div>
      <MoleculesAccordion
        name="See Steps"
        identifier="accordion-question-icon-1"
      >
        <template #body>
          <div class="text-gray-300 font-mono text-sm">
            <AtomsList :items="['Step 1', 'Step 2', 'Step 3']" />
          </div>
        </template>
        <template #icon>
          <svg
            class="w-4 h-4 shrink-0 -mr-0.5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M7.529 7.988a2.502 2.502 0 0 1 5 .191A2.441 2.441 0 0 1 10 10.582V12m-.01 3.008H10M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
            />
          </svg>
        </template>
        <MoleculesAccordion
          name="For developers"
          identifier="accordion-arrow-icon-2"
        >
          <template #body>
            <div class="text-gray-300 font-mono text-sm">
              Request ID: 1234567890
            </div>
          </template>
        </MoleculesAccordion>
      </MoleculesAccordion>
    </div>
  </div>
</template>
