import { formateDate } from '@/lib/utils';
import { EyeIcon } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '../ui/button';

const StartupCard = ({ startup }: { startup: Startup }) => {
  const { createAt, views, author, title, image, description, category, id } =
    startup;

  return (
    <li className="startup-card group">
      <div className="flex flex-between">
        <div className="startup-card_date">{formateDate(createAt)}</div>
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
          <Link href={`/startup/${id}`}>
            <h3 className="text-26-semibold line-clamp-1">{title}</h3>
          </Link>
        </div>
        <Link href={`/user/${author?.id}`}>
          <Image
            src={author ? author.image : null}
            alt={author ? author.name : 'image'}
            width={48}
            height={48}
            className="rounded-full"
          />
        </Link>
      </div>

      <Link href={`/startup/${id}`}>
        <p className="startup-card_desc">{description}</p>
        <Image src={image} alt="image" className="startup-card_img" />
      </Link>

      <div className='flex-between gap-3 mt-5'>
        <Link href={`/?query=${category?.toLowerCase()}`}>
          <p className="text-16-medium">{category}</p>
        </Link>
        <Button asChild className="startup-card_btn">
          <Link href={`/startup/${id}`}>Details</Link>
        </Button>
      </div>
    </li>
  );
};

export default StartupCard;
