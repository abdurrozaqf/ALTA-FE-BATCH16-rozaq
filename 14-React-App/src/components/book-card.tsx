import { Book } from "@/utils/apis/books";
import { Link } from "react-router-dom";

interface Props {
  data: Book;
}

const BookCard = (props: Props) => {
  const { data } = props;

  return (
    <Link
      className="w-[12rem] h-[26rem] md:w-[13rem] md:h-[26rem] lg:w-[12rem] lg:h-[24rem] xl:w-[14.2rem] xl:h-[26rem] bg-white hover:bg-indigo-100 dark:bg-black/30 dark:hover:bg-slate-800/40 border border-white dark:border dark:border-white/20 p-2 md:p-4 rounded-lg flex flex-col gap-2 shadow  transition-all duration-300 scale-100 hover:scale-[1.02] dark:scale-100 dark:hover:scale-[1.02]"
      to={`/detail-book/${data.id}`}
    >
      <figure className="overflow-hidden shadow shadow-neutral-300 rounded-lg mb-4">
        <img
          className="h-full w-full object-cover aspect-[3/4]"
          src={data.cover_image}
          alt={data.title}
        />
      </figure>
      <p className="font-bold text-lg mb-[-0.5rem]">{data.title}</p>
      <p className="text-muted-foreground dark:text-white/80 text-sm">
        {data.author}
      </p>
    </Link>
  );
};

export default BookCard;
