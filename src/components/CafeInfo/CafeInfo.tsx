import css from './CafeInfo.module.css';

interface CafeInfoProps {
  title: string;
}

const CafeInfo = ({ title }: CafeInfoProps) => {
  return (
    <div className={css.container}>
      <h1 className={css.title}>{title}</h1>
      <p className={css.description}>
        Please rate our service by selecting one of the options below.
      </p>
    </div>
  );
};

export default CafeInfo;
