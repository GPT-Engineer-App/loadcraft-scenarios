import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { Badge } from "@/components/ui/badge";
import { Cat, Info } from 'lucide-react';

const fetchCatFact = async () => {
  const response = await fetch('https://catfact.ninja/fact');
  if (!response.ok) {
    throw new Error('Failed to fetch cat fact');
  }
  return response.json();
};

const CatFactCard = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ['catFact'],
    queryFn: fetchCatFact,
  });

  if (isLoading) return <Skeleton className="h-[100px] w-full" />;
  if (error) return <p>Error loading cat fact</p>;

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Info className="h-5 w-5" />
          Cat Fact
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p>{data.fact}</p>
      </CardContent>
    </Card>
  );
};

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8 flex items-center justify-center gap-2">
          <Cat className="h-8 w-8" />
          All About Cats
        </h1>
        
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Why Cats Make Great Pets</CardTitle>
            <CardDescription>Discover the joys of feline companionship</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="list-disc pl-5 space-y-2">
              <li>Low maintenance and independent</li>
              <li>Quiet and ideal for apartments</li>
              <li>Natural pest control</li>
              <li>Stress-reducing purrs and cuddles</li>
              <li>Long lifespan for lasting companionship</li>
            </ul>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <Card>
            <CardHeader>
              <CardTitle>Popular Cat Breeds</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-wrap gap-2">
              <Badge variant="secondary">Siamese</Badge>
              <Badge variant="secondary">Maine Coon</Badge>
              <Badge variant="secondary">Persian</Badge>
              <Badge variant="secondary">Bengal</Badge>
              <Badge variant="secondary">Sphynx</Badge>
              <Badge variant="secondary">British Shorthair</Badge>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Cat Care Essentials</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-5 space-y-1">
                <li>Regular vet check-ups</li>
                <li>Balanced diet</li>
                <li>Fresh water daily</li>
                <li>Clean litter box</li>
                <li>Playtime and exercise</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <CatFactCard />

        <div className="mt-8 text-center text-sm text-gray-500">
          <p>Images: Cat silhouettes from Lucide React icons</p>
        </div>
      </div>
    </div>
  );
};

export default Index;