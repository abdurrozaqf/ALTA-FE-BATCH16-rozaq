import { Book } from "@/utils/apis/books";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface Props {
  data: Book;
}

const DetailBookCard = (props: Props) => {
  const { data } = props;

  return (
    <div className="bg-white flex flex-col md:flex-row w-full h-full py-6 px-8 gap-5 items-center justify-center rounded-md shadow-md">
      <img
        className="object-contain aspect-[3/4] w-52 md:w-64 lg:w-96"
        src={data.cover_image}
        alt={data.title}
      />
      <div className="flex flex-col gap-4 w-full justify-center">
        <div>
          <p className="font-bold text-2xl mb-1">{data.title}</p>
          <p className="text-muted-foreground text-sm mb-3">by {data.author}</p>
          <Badge variant="outline">{data.category}</Badge>
        </div>
        <Separator />
        <p className="text-muted-foreground text-sm text-justify">
          {data.description}
        </p>
        <Button>Borrow</Button>
      </div>
    </div>
  );
};

export default DetailBookCard;
