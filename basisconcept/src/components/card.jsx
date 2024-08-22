export default function Card({ name, color = "red", price, image }) {
  return (
    <div class="mx-auto flex max-w-3xl flex-col space-y-4 p-6 px-2 sm:p-10 sm:px-2">
      <ul class="flex flex-col divide-y divide-gray-200">
        <li class="flex flex-col py-6 sm:flex-row sm:justify-between">
          <div class="flex w-full space-x-2 sm:space-x-4">
            <img
              class="h-20 w-20 flex-shrink-0 rounded object-contain outline-none dark:border-transparent sm:h-32 sm:w-32"
              src={image}
              alt="Nike Air Force 1 07 LV8"
            />
            <div class="flex w-full flex-col justify-between pb-4">
              <div class="flex w-full justify-between space-x-2 pb-2">
                <div class="space-y-1">
                  <h3 class="text-lg font-semibold leading-snug sm:pr-8">
                    {name}
                  </h3>
                  <p class="text-sm">{color}</p>
                </div>
                <div class="text-right">
                  <p class="text-lg font-semibold">{price}</p>
                </div>
              </div>
              <div class="flex divide-x text-sm">
                <button
                  type="button"
                  class="flex items-center space-x-2 px-2 py-1 pl-0"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="lucide lucide-trash"
                  >
                    <path d="M3 6h18"></path>
                    <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path>
                    <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path>
                  </svg>
                  <span>Remove</span>
                </button>
                <button
                  type="button"
                  class="flex items-center space-x-2 px-2 py-1"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="lucide lucide-heart"
                  >
                    <path d="M20.42 4.58a5.4 5.4 0 0 0-7.65 0l-.77.78-.77-.78a5.4 5.4 0 0 0-7.65 0C1.46 6.7 1.33 10.28 4 13l8 8 8-8c2.67-2.72 2.54-6.3.42-8.42z"></path>
                  </svg>
                  <span>Add to favorites</span>
                </button>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
}
