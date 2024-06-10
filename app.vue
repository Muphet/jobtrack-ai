<script setup lang="ts">
  const dayjs = useDayjs()
  dayjs.locale('pl')
  const aiWorking = ref(false)
  const actionInput = ref("")
  const process = (e:any) => {
    e.preventDefault();
    aiWorking.value = true

  }
</script>

<template>
  <div class="flex flex-col inset-0 h-screen w-screen overflow-hidden">
    <div class="flex z-[1] p-4 h-16 w-full justify-between items-center border-b border-slate-700/50">
      <div class="flex items-center">
        <span>JobTrack-AI</span>
      </div>
      <div class="flex items-center">
        <label class="swap swap-rotate btn btn-ghost">
          <input type="checkbox" class="theme-controller" value="synthwave" />
          <!-- sun icon -->
          <svg class="swap-off fill-current size-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path
              d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
          </svg>
          <!-- moon icon -->
          <svg class="swap-on fill-current size-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path
              d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
          </svg>
        </label>
        <details class="dropdown dropdown-end">
          <summary class="btn btn-ghost">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="h-4 w-4">
              <path fill-rule="evenodd"
                d="M11 5a.75.75 0 0 1 .688.452l3.25 7.5a.75.75 0 1 1-1.376.596L12.89 12H9.109l-.67 1.548a.75.75 0 1 1-1.377-.596l3.25-7.5A.75.75 0 0 1 11 5Zm-1.24 5.5h2.48L11 7.636 9.76 10.5ZM5 1a.75.75 0 0 1 .75.75v1.261a25.27 25.27 0 0 1 2.598.211.75.75 0 1 1-.2 1.487c-.22-.03-.44-.056-.662-.08A12.939 12.939 0 0 1 5.92 8.058c.237.304.488.595.752.873a.75.75 0 0 1-1.086 1.035A13.075 13.075 0 0 1 5 9.307a13.068 13.068 0 0 1-2.841 2.546.75.75 0 0 1-.827-1.252A11.566 11.566 0 0 0 4.08 8.057a12.991 12.991 0 0 1-.554-.938.75.75 0 1 1 1.323-.707c.049.09.099.181.15.271.388-.68.708-1.405.952-2.164a23.941 23.941 0 0 0-4.1.19.75.75 0 0 1-.2-1.487c.853-.114 1.72-.185 2.598-.211V1.75A.75.75 0 0 1 5 1Z"
                clip-rule="evenodd"></path>
            </svg>
            <svg width="12px" height="12px" class="hidden h-2 w-2 fill-current opacity-60 sm:inline-block"
              xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2048 2048">
              <path d="M1799 349l242 241-1017 1017L7 590l242-241 775 775 775-775z"></path>
            </svg>
          </summary>
          <div
            class="p-1 menu dropdown-content bg-base-200 text-base-content rounded-box w-52 mt-px max-h-[calc(100vh-10rem)] overflow-y-auto border border-white/5 shadow-2xl outline outline-1 outline-black/5">
            <ul class="menu menu-sm gap-1">
              <li>
                <button class="active">
                  <span
                    class="badge badge-sm badge-outline !pl-1.5 !pr-1 pt-px font-mono text-[.6rem] font-bold tracking-widest opacity-50">EN</span>
                  <span class="font-[sans-serif]">English</span>
                </button>
              </li>
              <li>
                <button>
                  <span
                    class="badge badge-sm badge-outline !pl-1.5 !pr-1 pt-px font-mono text-[.6rem] font-bold tracking-widest opacity-50">PL</span>
                  <span class="font-[sans-serif]">Polski</span>
                </button>
              </li>
            </ul>
          </div>
        </details>
        <div class="divider divider-horizontal divider-neutral"></div>
        <div class="flex items-center space-x-2">
          <span>Muphet</span>
          <div class="avatar placeholder">
            <div class="bg-neutral text-neutral-content rounded-full w-10">
              <span class="text-xl">AI</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div id="ai-bar" class="p-4 border-b border-slate-700/50 relative">
      <label class="input input-bordered flex items-center gap-2">
        <input type="text" class="grow" placeholder="input action" v-model="actionInput" @keypress.enter="process" @blur="$event => aiWorking = false"/>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="w-4 h-4 opacity-70">
          <path fill-rule="evenodd"
            d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
            clip-rule="evenodd" />
        </svg>
      </label>
      <div v-show="aiWorking" class="dropdown-content z-50 w-full p-2 shadow-lg">
        <span>AI is processing your input...</span>
      </div>
    </div>
    <main class="p-4">
      <div class="overflow-x-auto">
        <table class="table">
          <!-- head -->
          <thead>
            <tr>
              <th>Name</th>
              <th>Position</th>
              <th>Salary</th>
              <th>Application time</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr class="cursor-pointer hover:bg-base-200">
              <td>
                <div class="flex items-center gap-3">
                  <div class="avatar">
                    <div class="mask mask-squircle w-12 h-12">
                      <img src="https://img.daisyui.com/tailwind-css-component-profile-2@56w.png"
                        alt="Avatar Tailwind CSS Component" />
                    </div>
                  </div>
                  <div>
                    <div class="font-bold">Colorous Factory</div>
                    <div class="text-sm opacity-50">Piła</div>
                  </div>
                </div>
              </td>
              <td>
                Front-end Developer
                <br />
                <span class="badge badge-ghost badge-sm">Mid</span>
              </td>
              <td>TBD</td>
              <td>{{$dayjs("2024-06-10Z01:00:00").utc().toString()}}</td>
              <th>
                <div class="badge badge-info">Applied</div>
              </th>
            </tr>
            <tr class="cursor-pointer hover:bg-base-200">
              <td>
                <div class="flex items-center gap-3">
                  <div class="avatar">
                    <div class="mask mask-squircle w-12 h-12">
                      <img src="https://img.daisyui.com/tailwind-css-component-profile-3@56w.png"
                        alt="Avatar Tailwind CSS Component" />
                    </div>
                  </div>
                  <div>
                    <div class="font-bold">Brice Swyre</div>
                    <div class="text-sm opacity-50">China</div>
                  </div>
                </div>
              </td>
              <td>
                Carroll Group
                <br />
                <span class="badge badge-ghost badge-sm">Tax Accountant</span>
              </td>
              <td>6500 PLN gross</td>
              <td>Red</td>
              <th>
                <div class="badge badge-info">Applied</div>
              </th>
            </tr>
            <tr class="cursor-pointer hover:bg-base-200">
              <td>
                <div class="flex items-center gap-3">
                  <div class="avatar">
                    <div class="mask mask-squircle w-12 h-12">
                      <img src="https://img.daisyui.com/tailwind-css-component-profile-4@56w.png"
                        alt="Avatar Tailwind CSS Component" />
                    </div>
                  </div>
                  <div>
                    <div class="font-bold">Marjy Ferencz</div>
                    <div class="text-sm opacity-50">Russia</div>
                  </div>
                </div>
              </td>
              <td>
                Rowe-Schoen
                <br />
                <span class="badge badge-ghost badge-sm">Office Assistant I</span>
              </td>
              <td>TBD</td>
              <td>Crimson</td>
              <th>
                <div class="badge badge-error">Rejected</div>
              </th>
            </tr>
            <tr class="cursor-pointer hover:bg-base-200">
              <td>
                <div class="flex items-center gap-3">
                  <div class="avatar">
                    <div class="mask mask-squircle w-12 h-12">
                      <img src="https://img.daisyui.com/tailwind-css-component-profile-5@56w.png"
                        alt="Avatar Tailwind CSS Component" />
                    </div>
                  </div>
                  <div>
                    <div class="font-bold">Yancy Tear</div>
                    <div class="text-sm opacity-50">Brazil</div>
                  </div>
                </div>
              </td>
              <td>
                Wyman-Ledner
                <br />
                <span class="badge badge-ghost badge-sm">Community Outreach Specialist</span>
              </td>
              <td>TBD</td>
              <td>Indigo</td>
              <th>
                <div class="badge badge-success">Interview</div>
              </th>
            </tr>
          </tbody>
        </table>
      </div>
    </main>
  </div>
</template>
