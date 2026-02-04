import example from "./assets/example.png"
function App() {
  const API = "https://skill-icons.rpidiyar249.workers.dev/icons"

  return (
    <div class="relative flex items-top justify-center min-h-screen bg-theme-white sm:pt-24">
      <div class="max-w-4xl mx-auto sm:px-6 lg:px-8">
        <div class="flex flex-col justify-center pt-8 sm:pt-0">
          <h1 class="text-5xl text-center font-bold mt-2">Add Skill Icons</h1>
          <p class="text-center font-semibold text-xl mt-3 pt-4">
            Seamlessly display your tech skills with 200+ available icons in your GitHub README Files
          </p>
        </div>

        <div class="flex sm:flex-row flex-col mt-4">
          <a href="https://github.com/rah7202/skill-icons-api"
            target="_blank"
            rel="noopener noreferrer"
            class="mt-2 bg-white overflow-hidden shadow rounded-lg p-6 mx-2 flex-1 hover:-translate-y-1 transform transition cursor-pointer">
            <h2 class="text-2xl leading-7 font-semibold flex items-center">
              Get Started <span class="rounded-full bg-blue-500 px-2 ml-2 text-sm text-white">New</span>
            </h2>
            <p class="mt-3 text-gray-600">
              Click here to follow the documentation to see how you can add icons to your readme and set up the URL formatting!
            </p>
          </a>
        </div>

        <div class="px-3">
          <p class="font-semibold text-xl mt-4 mb-2">Example :</p>
          <img src={`${example}`} class="rounded-lg" />
          <p class="font-semibold text-xl mt-4 mb-2">Available Icons :</p>
          <img src={`${API}?i=all`} />
        </div>

        <div className="flex justify-center py-8 space-x-2">
          <a href="https:/github.com/rah7202/skill-icons-api" target="_blank">
            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" width="32" height="32" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24" class="w-6 h-6 text-gray-600 hover:text-gray-800 button--github transition">
              <path d="M12 2.247a10 10 0 0 0-3.162 19.487c.5.088.687-.212.687-.475c0-.237-.012-1.025-.012-1.862c-2.513.462-3.163-.613-3.363-1.175a3.636 3.636 0 0 0-1.025-1.413c-.35-.187-.85-.65-.013-.662a2.001 2.001 0 0 1 1.538 1.025a2.137 2.137 0 0 0 2.912.825a2.104 2.104 0 0 1 .638-1.338c-2.225-.25-4.55-1.112-4.55-4.937a3.892 3.892 0 0 1 1.025-2.688a3.594 3.594 0 0 1 .1-2.65s.837-.262 2.75 1.025a9.427 9.427 0 0 1 5 0c1.912-1.3 2.75-1.025 2.75-1.025a3.593 3.593 0 0 1 .1 2.65a3.869 3.869 0 0 1 1.025 2.688c0 3.837-2.338 4.687-4.563 4.937a2.368 2.368 0 0 1 .675 1.85c0 1.338-.012 2.413-.012 2.75c0 .263.187.575.687.475A10.005 10.005 0 0 0 12 2.247z" fill="currentColor"></path>
            </svg>
          </a>
        </div>
      </div>
    </div>
  )
}


export default App




