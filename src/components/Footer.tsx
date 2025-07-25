export default function Footer() {
  return (
    <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-gray-500 dark:text-gray-400">
            © {new Date().getFullYear()} Sai Ruthvik Bommakanti. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}