import { Book } from "@/utils/apis/books";
import { Link } from "react-router-dom";

interface Props {
  data: Book;
}

const BookCardNew = (props: Props) => {
  const { data } = props;

  return (
    <Link
      className="w-[10.5rem] h-[14rem] bg-white hover:bg-indigo-100 dark:bg-black/30 dark:hover:bg-slate-700 border border-white dark:border dark:border-white/20 p-2 rounded-lg flex items-center justify-center shadow transition-all duration-300"
      to={`/detail-book/${data.id}`}
    >
      <figure className="overflow-hidden shadow shadow-neutral-300 rounded-lg">
        <img
          className=" object-cover aspect-[3/4]"
          src={data.cover_image}
          alt={data.title}
        />
      </figure>
    </Link>
  );
};

export default BookCardNew;
