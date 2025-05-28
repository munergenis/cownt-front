import { Link, type To } from 'react-router-dom';

type Size = 'sm' | 'md' | 'lg';

interface InfoEntryProps {
  title: string;
  subtitle?: string;
  mainInfo: string | number | null;
  linkLabel?: string;
  linkTo?: To;
  className?: string;
  size?: Size;
}

const stylesDict: Record<
  Size,
  Partial<Record<keyof InfoEntryProps, string>>
> = {
  sm: {
    title: 'text-xl',
    mainInfo: 'text-5xl',
    subtitle: 'text-lg',
  },
  md: {
    title: 'text-2xl',
    mainInfo: 'text-7xl',
    subtitle: 'text-xl',
  },
  lg: {
    title: 'text-3xl',
    mainInfo: 'text-9xl',
    subtitle: 'text-2xl',
  },
};

export const InfoEntry = ({
  title,
  subtitle,
  mainInfo,
  linkLabel,
  linkTo,
  className,
  size = 'md',
}: InfoEntryProps) => {
  return (
    <div
      className={`group/info scale-75 md:scale-90 lg:scale-100 py-4 flex flex-col items-center z-0 ${className}`}
    >
      <div
        className={`relative flex justify-center items-baseline font-black ${stylesDict[size].mainInfo}`}
      >
        {mainInfo ?? <span>&ndash;</span>}
        <span
          className={`absolute bottom-0 right-0 translate-x-0 font-thin opacity-0 group-hover/info:translate-x-1/1 group-hover/info:opacity-100 ${stylesDict[size].subtitle} transition-all`}
        >
          {subtitle}
        </span>
      </div>
      <div
        className={`font-black uppercase text-center text-primary scale-x-110 -translate-y-2 opacity-50 group-hover/info:scale-100 group-hover/info:translate-y-0 group-hover/info:opacity-100 transition-all ${stylesDict[size].title}`}
      >
        {title}
      </div>
      {linkLabel && linkTo && <Link to={linkTo}>{linkLabel}</Link>}
    </div>
  );
};
