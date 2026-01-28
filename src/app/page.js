import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-black flex flex-col">
      <Navigation />
      <main className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8 flex-1 w-full">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-zinc-900 dark:text-zinc-50 mb-4">
            Welcome to WHE Playtime Demo App
          </h1>
          <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-8">
            This is the home page
          </p>
          <div className="mt-10">
            <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-50 mb-4">
              Getting Started to App!!
            </h2>
            <p className="text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
              Navigate through the pages using the navigation bar above. Check out the Todos page to manage your tasks,
              or visit the Contact page to get in touch.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
