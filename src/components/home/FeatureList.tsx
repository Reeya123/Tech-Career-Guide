import { HomeFeaturesType } from './homeFeatures';
import { SimpleGrid, Tag } from '@chakra-ui/react';
import { HomeItem } from './HomeItems';
import React from 'react';

type FeaturedRoadmapsListProps = {
  roadmaps: HomeFeaturesType[];
  title: string;
};

export function FeaturedList(props: FeaturedRoadmapsListProps) {
  const { roadmaps, title } = props;

  return (
    <>
      <Tag bg='gray.400' mb={4}>{title}</Tag>
      <SimpleGrid columns={[1, 2, 3]} spacing={['10px', '10px', '15px']} mb='40px'>
        <>
          {roadmaps.map((roadmap: HomeFeaturesType) => (
            <HomeItem
              url={`/${roadmap.id}`}
              key={roadmap.id}
              title={roadmap.featuredTitle === 'Software Design and Architecture' ? 'Software Design' : roadmap.featuredTitle}
              isCommunity={roadmap.isCommunity}
              subtitle={roadmap.featuredDescription}
              roadmap={roadmap}
            />
          ))}
        </>
      </SimpleGrid>
    </>
  );
}
