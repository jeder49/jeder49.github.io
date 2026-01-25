<template>
  <div class="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 flex items-center justify-center p-4">
    <div class="max-w-md w-full">
      <div class="flex flex-col items-center space-y-6">
        <!-- picture -->
        <div class="relative">
          <img
            src="/images/profile.png"
            alt="Profile"
            class="w-40 h-40 rounded-full object-cover border-4 border-gray-700 shadow-xl"
          />
        </div>

        <!-- name -->
        <h1 class="text-3xl font-bold text-white">Richard Clauß</h1>

        <!-- personal info -->
        <div class="w-full bg-gray-800 border border-gray-700 rounded-lg p-6 space-y-4">
          <div class="flex items-center space-x-3">
            <span class="text-gray-400 text-sm font-medium w-20">Email:</span>
            <a href="mailto:richard.clauss@tutanota.com" class="text-blue-400 hover:text-blue-300 transition-colors">
              richard.clauss@tutanota.com
            </a>
          </div>

          <div class="flex items-center space-x-3">
            <span class="text-gray-400 text-sm font-medium w-20">GitHub:</span>
            <a href="https://github.com/jeder49" target="_blank" rel="noopener noreferrer" class="text-blue-400 hover:text-blue-300 transition-colors">
              github.com/jeder49
            </a>
          </div>

          <!--
          <div class="flex items-center space-x-3">
            <span class="text-gray-400 text-sm font-medium w-20">LinkedIn:</span>
            <a href="https://linkedin.com/in/johndoe" target="_blank" rel="noopener noreferrer" class="text-blue-400 hover:text-blue-300 transition-colors">
              linkedin.com/in/johndoe
            </a>
          </div>
          -->
        </div>
      </div>
    </div>
  </div>
</template>
