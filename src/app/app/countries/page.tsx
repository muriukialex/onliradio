import Countries from '../../../components/Country/Countries';
import { getCountries } from '../../../util/getCountries';
import { getUrl } from '../../../util/getUrl';

export type TCountry = {
  name: string;
  iso_3166_1: string;
  stationcount: number;
};

export default async function Page() {
  const url = await getUrl();
  const countries = await getCountries(url);

  return (
    <section className='text-CustomWhite'>
      <Countries initCountries={countries} url={url} />
    </section>
  );
}
