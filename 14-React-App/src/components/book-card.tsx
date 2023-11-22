import { Book } from "@/utils/apis/books";
import { Link } from "react-router-dom";

interface Props {
  data: Book;
}

const BookCard = (props: Props) => {
  const { data } = props;

  return (
    <Link
      className="bg-white p-4 rounded-lg flex flex-col gap-2 w-fit h-full shadow hover:bg-indigo-100 transition-all hover:scale-105"
      to={`/detail-book/${data.id}`}
    >
      <figure className="overflow-hidden shadow shadow-neutral-300 rounded-lg">
        <img
          className="h-auto w-auto object-cover aspect-[3/4]"
          src={data.cover_image}
          alt={data.title}
        />
      </figure>
      <p className="font-bold text-lg">{data.title}</p>
      <p className="text-muted-foreground text-sm">{data.author}</p>
    </Link>
  );
};

export default BookCard;
