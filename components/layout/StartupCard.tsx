import { formateDate } from '@/lib/utils';
import { EyeIcon } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '../ui/button';
import { StartupCardType } from '@/types/sanity';

const StartupCard = ({ startup }: { startup: StartupCardType }) => {
  const {
    _createdAt,
    views,
    author,
    title,
    image,
    description,
    category,
    _id,
  } = startup;

  return (
    <li className="startup-card group">
      <div className="flex flex-between">
        <div className="startup-card_date">{formateDate(_createdAt)}</div>
        <div className="flex gap-2">
          <EyeIcon className="size-6 text-primary" />
          <span className="text-16-medium">{views}</span>
        </div>
      </div>

      <div className="flex-between mt-5 gap-5">
        <div className="flex-1">
          <Link href={`/user/${author?._id}`}>
            <p className="text-16-medium line-clamp-1">{author?.name}</p>
          </Link>
          <Link href={`/startup/${_id}`}>
            <h3 className="text-26-semibold line-clamp-1">{title}</h3>
          </Link>
        </div>
        <Link href={`/user/${author?._id}`}>
          <Image
            src={author.image!}
            alt={author.name!}
            width={48}
            height={48}
            className="rounded-full w-10 h-10"
          />
        </Link>
      </div>

      <Link href={`/startup/${_id}`} className='mb-6 min-h-[235px] flex flex-col'>
        <p className="startup-card_desc">{description}</p>
        <Image
          src={image!}
          alt="image"
          className="startup-card_img"
          width={480}
          height={200}
        />
      </Link>

      <div className="flex-between gap-3 mt-auto">
        <Link href={`/?query=${category?.toLowerCase()}`}>
          <p className="text-16-medium">{category}</p>
        </Link>
        <Button asChild className="startup-card_btn">
          <Link href={`/startup/${_id}`}>Details</Link>
        </Button>
      </div>
    </li>
  );
};

export default StartupCard;
