import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { Book, getBooks, getFeaturedBook } from "@/utils/apis/books";

import { useToast } from "@/components/ui/use-toast";
import BookCard from "@/components/book-card";
import Layout from "@/components/layout";

import LogoLight from "@/assets/logo-light-1.svg";
import Logo from "@/assets/logo-2.svg";
import { useTheme } from "@/utils/context/theme-provider";
import BookCardNew from "@/components/book-card-new";

const Home = () => {
  const [featuredBooks, setFeaturedBooks] = useState<Book[]>([]);
  const [books, setBooks] = useState<Book[]>([]);
  const { toast } = useToast();
  const { theme } = useTheme();

  useEffect(() => {
    fetchDataFeatured();
    fetchDataBooks();
  }, []);

  async function fetchDataFeatured() {
    try {
      const result = await getFeaturedBook();
      setFeaturedBooks(result.payload.datas);
    } catch (error: any) {
      toast({
        title: "Oops! Something went wrong.",
        description: error.toString(),
        variant: "destructive",
      });
    }
  }
  async function fetchDataBooks() {
    try {
      const result = await getBooks();
      setBooks(result.payload.datas);
    } catch (error: any) {
      toast({
        title: "Oops! Something went wrong.",
        description: error.toString(),
        variant: "destructive",
      });
    }
  }

  return (
    <>
      <Layout title="Home">
        <div className="w-full mb-10 flex items-center justify-between gap-10 transition-all">
          <div className="w-auto h-fit lg:w-full flex flex-col justify-center items-center opacity-0 lg:opacity-100 absolute lg:relative z-[-50] lg:z-50 bg-gradient-to-br from-indigo-100 to-indigo-50/10 dark:from-black/5 dark:to-indigo-900/10 rounded-lg border border-white/10 p-4 xl:p-10 shadow-inner shadow-black/10 dark:shadow-white/10">
            <p className="lg:text-[1.5rem] xl:text-[3rem] font-bold tracking-tight drop-shadow-md filter mb-2">
              Welcome to
            </p>
            <img
              src={theme === "dark" ? LogoLight : Logo}
              alt="Logo"
              className="mb-4 w-32 h-auto md:h-[auto] md:w-[24rem]"
            />
            <p>Your digital library app</p>
          </div>
          <div className="flex grow overflow-hidden">
            <div className="w-full flex">
              <div className="w-10 flex items-center justify-center p-2 bg-gradient-to-br from-indigo-100 to-indigo-50 shadow dark:from-indigo-950 dark:to-indigo-800/10 rounded-tl-md rounded-bl-md border border-indigo-950/20 dark:border-white/10">
                <span className="font-medium text-2xl -rotate-90 whitespace-nowrap tracking-wide">
                  New Arrivals
                </span>
              </div>
              <ul className="border boder-indigo-900/10 dark:border-white/10 px-2 py-4 list-unstyled flex flex-nowrap items-center overflow-auto lg:overflow-hidden gap-4 scroll-smooth">
                {books.map((book, index) => (
                  <li key={index}>
                    <BookCardNew key={book.id} data={book} />{" "}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <p className="text-[#4D4D4D] dark:text-white/80 text-lg font-semibold">
            Recommended for You
          </p>
          <Link to="/list-book">
            <p className="text-[#4D4D4D] dark:text-white/60  text-sm font-normal hover:text-black dark:hover:text-white">
              View All
            </p>
          </Link>
        </div>
        <ul className="px-2 py-4 list-unstyled flex flex-nowrap items-center overflow-auto lg:overflow-hidden gap-4 scroll-smooth mb-10">
          {featuredBooks.map((featuredBooks) => (
            <li key={featuredBooks.id}>
              <BookCard data={featuredBooks} />
            </li>
          ))}
        </ul>
        <div className="flex items-center justify-between">
          <p className="text-[#4D4D4D] dark:text-white/80 text-lg font-semibold">
            Other
          </p>
          <Link to="/list-book">
            <p className="text-[#4D4D4D] dark:text-white/60  text-sm font-normal hover:text-black dark:hover:text-white">
              Show All
            </p>
          </Link>
        </div>
        <ul className="px-2 py-4 list-unstyled flex flex-nowrap items-center overflow-auto lg:overflow-hidden gap-4 scroll-smooth">
          {books
            .map((book, index) =>
              index < 5 ? (
                <li key={index}>
                  <BookCard key={book.id} data={book} />{" "}
                </li>
              ) : undefined
            )
            .filter((book) => book !== undefined)}
        </ul>
      </Layout>
    </>
  );
};

export default Home;
