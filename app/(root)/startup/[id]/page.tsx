import { formateDate } from '@/lib/utils';
import { client } from '@/sanity/lib/client';
import { getStartupDetails } from '@/sanity/lib/queries';
import Image from 'next/image';
import Link from 'next/link';

export const experimental_ppr = true;

export default async function StartupDetails({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const id = (await params).id;
  const startup = await client.fetch(getStartupDetails, { params: { id } });
  const {
    _createdAt,
    views,
    author,
    title,
    image,
    description,
    category,
    pitch,
    _id,
  } = startup;
  return (
    <>
      <section className="pink_container flex flex-col items-center">
        <div className="tag">{formateDate(_createdAt)}</div>
        <div className="heading">{title}</div>
        <div className="sub-heading">{description}</div>
      </section>

      <section className="section_container">
        <Image
          src={image}
          alt="image"
          height={100}
          width={200}
          className="rounded-3xl w-full"
        />

        <div className="flex flex-between mt-10 sm:w-1/2 mx-auto">
          <Link
            href={`/user/${author?._id}`}
            className="flex gap-2 items-center"
          >
            <Image
              src={author.image!}
              alt={author.name!}
              width={56}
              height={56}
              className="rounded-full w-10 h-10"
            />
            <div>
              <p className="text-20-medium">{author.name}</p>
              <p className="text-16-medium !text-black-300">
                @{author.username}
              </p>
            </div>
          </Link>
          <Link href={`/?query=${category?.toLowerCase()}`}>
            <p className="text-16-medium startup-card_date">{category}</p>
          </Link>
        </div>
      </section>
    </>
  );
}
