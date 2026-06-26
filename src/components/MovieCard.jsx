import { Card, CardContent, CardFooter } from "@/components/ui/card";

function MovieCard({ title, rating, poster }) {
  return (
    <Card className="w-full max-w-xs mx-auto overflow-hidden rounded-2xl">
      <CardContent className="p-0">
        <img
          src={poster}
          alt={title}
          className="w-full h-80 object-cover"
        />
      </CardContent>

      <CardFooter className="flex flex-col items-start">
        <h2 className="font-bold">{title}</h2>
        <p>{rating}</p>
      </CardFooter>
    </Card>
  );
}

export default MovieCard;