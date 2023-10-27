'use client'

import { Container, Grid, Section } from "@radix-ui/themes";
import Header from "../components/Header/Header";
import PillarCard from "../components/PillarCard/PillarCard";

const TeamList = () => (
  <Container size="4">
    <Section>
      <Header />
    </Section>
    <Section>
      <Grid columns="3" gap="3" width="auto">
        <PillarCard />
        <PillarCard />
        <PillarCard />
        <PillarCard />
        <PillarCard />
      </Grid>
    </Section>
  </Container>
);

export default TeamList;
