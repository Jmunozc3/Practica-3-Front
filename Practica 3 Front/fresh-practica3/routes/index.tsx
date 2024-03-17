import { Handlers, PageProps } from "$fresh/server.ts";
import Linkedin from "../islands/linkedin.tsx";
import Job from  "../types.ts";

type Data = {
  jobs: Job[];
};

export const handler: Handlers<Data | null> = {
  
  async GET(_req: Request, ctx) {

    try {
      const response = await fetch('https://arbeitnow.com/api/job-board-api');
      
      const { data: jobs }: { data: Job[] } = await response.json();

      return ctx.render({ jobs });

    } catch (error) {
      console.error(error);
    }
  },
};

export default function Home({ data }: PageProps<Data | null>) {

  return (
    <Linkedin resultado={data.jobs}/>
  );
}
