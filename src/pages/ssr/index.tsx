import { GetServerSideProps } from "next";

interface Props {
  formattedDate?: string;
}


export default function Page({ formattedDate }: Props) {
  console.log(formattedDate);

  return (
    <div>
      <h1>Server-side rendered page</h1>
      <p>
        This page is server-side rendered. It was rendered on {formattedDate}.
      </p>
      <p>
        <a href="/">View a static page.</a>
      </p>
    </div>
  );
}

export const getServerSideProps = (async () => {
  const data = await fetch(`http://worldtimeapi.org/api/timezone/Europe/Berlin`);
  const formattedDate = (await data.json()).datetime;

  return {
    props: {
      formattedDate,
    },
  };
}) satisfies GetServerSideProps<Props>;
