import { Borrow } from "@/utils/apis/borrow";

interface Props {
  data: Borrow;
}

const BookCardHistory = (props: Props) => {
  const { data } = props;

  return (
    <div className="bg-white p-4 rounded-lg flex flex-col gap-2 w-fit h-full shadow">
      <figure className="overflow-hidden shadow shadow-neutral-300 rounded-lg">
        <img
          className="h-auto w-auto object-cover aspect-[3/4]"
          src={data.book.cover_image}
          alt={data.book.title}
        />
      </figure>
      <p className="font-bold text-lg">{data.book.title}</p>
    </div>
  );
};

export default BookCardHistory;
