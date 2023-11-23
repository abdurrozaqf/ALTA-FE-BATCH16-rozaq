import { Borrow } from "@/utils/apis/borrows";

interface Props {
  data: Borrow;
}

const BookCardHistory = (props: Props) => {
  const { data } = props;

  return (
    <div className="w-[12rem] h-[24rem] md:w-[13rem] md:h-[24rem] lg:w-[12rem] lg:h-[22rem] xl:w-[14.5rem] xl:h-[24rem] bg-white dark:bg-black/30 dark:border dark:border-white/20 p-4 rounded-lg flex flex-col gap-2 shadow">
      <figure className="overflow-hidden shadow shadow-neutral-300 rounded-lg mb-4">
        <img
          className="h-full w-full object-cover aspect-[3/4]"
          src={data.book.cover_image}
          alt={data.book.title}
        />
      </figure>
      <p className="font-bold text-lg">{data.book.title}</p>
    </div>
  );
};

export default BookCardHistory;
