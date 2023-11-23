import { Book } from "@/utils/apis/books";
import { Link } from "react-router-dom";

interface Props {
  data: Book;
}

const BookCard = (props: Props) => {
  const { data } = props;

  return (
    <Link
      className="w-fit h-full bg-white dark:bg-black/30 border border-white dark:border dark:border-white/20 p-4 rounded-lg flex flex-col gap-2 shadow hover:bg-indigo-100 transition-all duration-300 scale-100 hover:scale-105 dark:scale-100 dark:hover:scale-105"
      to={`/detail-book/${data.id}`}
    >
      <figure className="overflow-hidden shadow shadow-neutral-300 rounded-lg mb-4">
        <img
          className="h-auto w-auto object-cover aspect-[3/4]"
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
