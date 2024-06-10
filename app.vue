<template>
  <div class="flex flex-col inset-0 h-screen w-screen overflow-hidden">
    <div class="flex z-[1] p-4 h-16 w-full justify-between items-center border-b border-slate-700/50">
      <div class="flex items-center">
        <span>JobTrack-AI</span>
      </div>
      <div class="flex items-center">
        <ThemeSelector />
        <LangSelector />
        <div class="divider divider-horizontal divider-neutral"></div>
        <User />
      </div>
    </div>
    <AI />
    <main class="p-4">
      <Jobs />
    </main>
  </div>
</template>
